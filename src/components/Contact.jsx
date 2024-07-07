import { useState } from "react";
import { Reveal } from "./Reveal";
import { AnimatePresence, motion } from "framer-motion";
import TitleSection from "./TitleSection";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const email = formData.get("email").trim();
    const name = formData.get("name").trim();
    const message = formData.get("message").trim();
    if (!email || !name || !message) {
      setResult("Tolong di isi semua dulu yaa..");
      toggleSubmitButton(event.target, true);
      return;
    }

    try {
      formData.append("access_key", import.meta.env.VITE_FORM_API_KEY);
      formData.append("from_name", capitalize(name));
      formData.append("name", capitalize(name));
      formData.append("subject", `${capitalize(name)} dari portfolio`);
    } catch (error) {
      handleError("Failed to append data to FormData:", error);
      return; // Return or handle the error as needed
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        handleSuccess(event.target);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError("An error occurred while submitting the form.");
    }
  };

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const toggleSubmitButton = (form, disable) => {
    const button = form.querySelector('button[type="submit"]');
    button.disabled = disable;
    setTimeout(() => {
      setResult("");
      button.disabled = false;
    }, 3000);
  };

  const handleSuccess = async (form) => {
    await setResult(null);
    setResult("Form Submitted Successfully");
    setTimeout(() => setResult(""), 3000);
    form.reset();
    setCardNumber(null);
  };

  const handleError = (message) => {
    setResult(message);
    setTimeout(() => setResult(""), 3000);
  };

  const [cardNumber, setCardNumber] = useState("Optional");

  const handleChange = (e) => {
    let value = e.target.value;
    // Menghapus semua karakter non-digit
    value = value.replace(/\D/g, "");
    // Menambahkan spasi setiap 4 digit
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    // Memastikan panjang input tidak melebihi 19 karakter (16 digit + 3 spasi)
    value = value.slice(0, 19);
    setCardNumber(value);
  };

  return (
    <>
      <div className="relative   sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-16 sm:gap-y-20 lg:gap-y-24 lg:px-8">
          <TitleSection
            title="Contact"
            subtitle="Let's Talk"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            className="px-6 pt-24 sm:px-0 sm:pt-0"
          />
          <Reveal>
            <div className="mx-auto grid max-w-2xl grid-cols-1 overflow-hidden border-gray-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] dark:border-gray-400/10  sm:rounded-[2rem] sm:border  lg:max-w-6xl lg:grid-cols-3">
              <iframe
                style={{
                  pointerEvents: "none",
                  height: "100%",
                  width: "100%",
                  border: 0,
                }}
                className=" hidden aspect-video bg-gray-100 dark:bg-slate-600 sm:inline"
                src="https://www.google.com/maps/embed/v1/place?q=malang&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="relative z-10 col-span-2 flex flex-col p-6 sm:bg-white  sm:p-8   sm:dark:bg-slate-900 md:mt-0 ">
                <h2 className="title-font mb-1 text-lg font-medium text-gray-900 dark:text-slate-200">
                  Contact Me
                </h2>
                <p className="mb-5 leading-relaxed text-gray-600 dark:text-slate-400">
                  Yuk, isi form kontak di bawah ini biar kita bisa ngobrol lebih
                  lanjut!
                </p>
                <form onSubmit={onSubmit}>
                  {/* <div className="grid w-full grid-cols-2 gap-x-4">
                   
                    <Input
                      inputName="Nomor Ponsel"
                      type="text"
                      id="phonenumber"
                      name="phonenumber"
                      onChange={handleChange}
                      value={cardNumber}
                    />
                  </div>  */}
                  <Input
                    inputName="Email"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <Input
                    inputName="Nama"
                    type="name"
                    id="name"
                    name="name"
                    autoCapitalize="on"
                    className="capitalize"
                  />
                  <Input
                    inputName="Pesan"
                    id="message"
                    name="message"
                    textArea={true}
                  />

                  <button
                    type="submit"
                    className="w-full rounded-full border-0 bg-gray-900 px-6 py-2 text-lg text-white focus:outline-none dark:bg-slate-200 dark:text-slate-900"
                  >
                    Kirim
                  </button>
                </form>
                <span className="mt-3 text-xs text-gray-600 dark:text-slate-400">
                  <div
                    style={{
                      position: "relative",
                      width: "full",
                    }}
                  >
                    <AnimatePresence>
                      {result && (
                        <motion.div
                          key={result}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            damping: 14,
                            stiffness: 100,
                          }}
                          style={{
                            position: "absolute",
                            width: "100%",
                            textAlign: "left", // optional, if you want to center the text
                          }}
                        >
                          {result}
                        </motion.div>
                      )}
                    </AnimatePresence>{" "}
                    <span>&nbsp;</span>
                  </div>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
const Input = ({
  inputName,
  type,
  id,
  name,
  value,
  textArea,
  autoCapitalize,
  className,
  onChange,
}) => {
  return (
    <div className="relative mb-4  w-full">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-7 text-gray-900 dark:text-slate-200  "
      >
        {inputName}
      </label>
      {textArea ? (
        <textarea
          id={id}
          name={name}
          // required
          className="no-scrollbar h-32 w-full resize-none rounded-xl border border-gray-200 bg-white px-3 py-1 text-base capitalize leading-8 text-gray-600 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] outline-none outline-offset-0 transition-all duration-500 focus:outline-2 focus:outline-gray-900 dark:border-gray-200/10 dark:bg-slate-800 dark:text-slate-400 focus:dark:shadow-[0_15px_40px_-15px_rgba(255,255,255,1)] dark:focus:outline-slate-200 sm:focus:dark:shadow-none"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          // required
          autoCapitalize={autoCapitalize}
          className={`${className}  w-full rounded-xl border  border-gray-200 bg-white px-3 py-1 text-base leading-8 text-gray-600 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] outline-none outline-offset-0 transition-all duration-500 focus:outline-2 focus:outline-gray-900 dark:border-gray-200/10 dark:bg-slate-800 dark:text-slate-400 dark:shadow-[0_15px_40px_-15px_rgba(255,255,255,0.05)] focus:dark:shadow-[0_15px_40px_-15px_rgba(255,255,255,1)] dark:focus:outline-slate-200 sm:focus:dark:shadow-none`}
        />
      )}
    </div>
  );
};
