import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "./Switch";
import {
  LuMoon,
  LuDownloadCloud,
  LuMail,
  LuInstagram,
  LuGithub,
  LuPhone,
} from "react-icons/lu";
import imgPP from "../../assets/img/Pp.jpg";
import pdf from "../../assets/doc/CV.pdf";
import { useTheme } from "../ThemeContext";
export default function DropdownComponents() {
  const { enabled, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative hidden text-left md:inline-block "
      // onMouseEnter={() => setOpen(true)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="grid w-9  gap-y-2 text-gray-400"
      >
        <div className="relative flex items-center justify-center">
          <div className="relative z-50 flex  h-[20px] w-[20px] items-center justify-center overflow-hidden">
            <div className="grid w-[20px] origin-center transform flex-col gap-y-1 overflow-hidden  transition-all duration-300">
              <div
                className={`${
                  open ? "translate-x-10" : ""
                } h-[2px] w-full origin-left transform rounded-full bg-gray-400 transition-all duration-300 `}
              ></div>
              <div
                className={`${
                  open ? "translate-x-10" : ""
                } h-[2px] w-full origin-left transform rounded-full bg-gray-400 transition-all delay-75 duration-300 `}
              ></div>
              <div
                className={`${
                  open ? "translate-x-10" : ""
                } h-[2px] w-full origin-left transform rounded-full bg-gray-400 transition-all duration-300 `}
              ></div>
            </div>
            <div
              className={`${
                open ? "translate-x-0 " : ""
              } absolute flex h-full w-full -translate-x-10 transform items-center justify-between transition-all duration-500`}
            >
              <div
                className={`${
                  open ? "rotate-45" : ""
                } absolute h-[2px] w-[21px] transform rounded-full bg-gray-400 transition-all  delay-300 duration-500`}
              ></div>
              <div
                className={`${
                  open ? "-rotate-45" : ""
                } absolute h-[2px] w-[21px] transform rounded-full bg-gray-400 transition-all  delay-300 duration-500`}
              ></div>
            </div>
          </div>
        </div>
      </button>
      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 " />
      )}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              // onMouseLeave={() => setOpen(false)}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                damping: 14,
                stiffness: 100,
              }}
              className="absolute right-0 top-0 mt-8 w-72 origin-top-right rounded-lg border border-gray-200 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] dark:border-gray-200/10 dark:bg-slate-800"
            >
              <div className="px-1.5">
                <div className="">
                  <div className="my-1.5">
                    <div className="flex items-center gap-x-4 p-2">
                      <img
                        src={imgPP}
                        alt=""
                        className="h-10 w-10 flex-none rounded-full"
                      />
                      <div className="flex-auto">
                        <div className="text-sm font-medium text-gray-900 dark:text-slate-200">
                          Muhammad Nur Alim
                        </div>
                        <div className="mt-1 text-sm text-gray-700 dark:text-slate-400">
                          Info Loker nya banh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="h-[1px] border-t-0 bg-gray-200 opacity-100 dark:opacity-10" />
                <div className="">
                  <div className="my-1.5 grid gap-y-2">
                    <ButtonD
                      onClick={() => {
                        window.open("https://wa.me/+6285607803912", "_blank");
                      }}
                    >
                      <LuPhone
                        className="m-1 h-[22px] w-[22px]"
                        aria-hidden="true"
                      />
                      Phonenumber
                    </ButtonD>
                    <ButtonD
                      onClick={() => {
                        window.open(
                          "mailto:muhammadnurallim9@gmail.com",
                          "_blank",
                        );
                      }}
                    >
                      <LuMail
                        className="m-1 h-[22px] w-[22px]"
                        aria-hidden="true"
                      />
                      Email
                    </ButtonD>
                    <ButtonD
                      onClick={() => {
                        window.open(
                          "https://github.com/MuhammadAlim7",
                          "_blank",
                        );
                      }}
                    >
                      <LuGithub
                        className="m-1 h-[22px] w-[22px]"
                        aria-hidden="true"
                      />
                      Github
                    </ButtonD>
                    <ButtonD
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/muhammadnuralim7/",
                          "_blank",
                        );
                      }}
                    >
                      <LuInstagram
                        className="m-1 h-[22px] w-[22px]"
                        aria-hidden="true"
                      />
                      Instagram
                    </ButtonD>
                    <ButtonD
                      className="cursor-not-allowed"
                      // onClick={() => {
                      //   window.open(`${pdf}`);
                      // }}
                    >
                      <LuDownloadCloud
                        className="m-1 h-[22px] w-[22px] "
                        aria-hidden="true"
                      />
                      My Resume
                    </ButtonD>
                  </div>
                </div>
                <hr className="h-[1px] border-t-0 bg-gray-200 opacity-100 dark:opacity-10" />
                <div className="my-1.5 grid gap-y-2">
                  <ButtonD
                    onClick={() => {
                      toggleTheme();
                    }}
                  >
                    <LuMoon
                      className="m-1  h-[22px] w-[22px] "
                      aria-hidden="true"
                    />
                    Dark Mode
                    <div className="ml-auto ">
                      <div className="mx-1 flex ">
                        <Switch enabled={enabled} toggleTheme={toggleTheme} />
                      </div>
                    </div>
                  </ButtonD>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const ButtonD = ({ children, onClick, href, className }) => {
  return (
    <button
      onClick={onClick}
      href={href}
      className={`group flex w-full items-center gap-3 rounded-md p-1.5 text-sm font-medium text-gray-600  hover:bg-gray-100 hover:text-gray-900 dark:text-slate-400  hover:dark:bg-slate-900/40 hover:dark:text-slate-200 ${className}`}
      aria-current=""
    >
      {children}
    </button>
  );
};
