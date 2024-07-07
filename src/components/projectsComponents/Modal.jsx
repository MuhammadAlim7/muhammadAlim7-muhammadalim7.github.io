import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./../Reveal";

export default function Modal({
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
}) {
  const closeModal = async () => {
    await setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          key="modal"
          onClick={closeModal}
          className="fixed inset-0 z-40 cursor-pointer overflow-y-auto "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm  "
          />
          <motion.div
            initial={{ overflowY: "unset" }}
            animate={{ overflowY: "auto" }}
            exit={{ overflowY: "unset" }}
            className="no-scrollbar fixed inset-0 flex    "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="  mx-auto my-20 h-max w-full max-w-2xl  transform cursor-default px-4 md:my-10 md:px-0 "
            >
              <motion.div
                initial={{ overflow: "unset", opacity: 0, y: 1000 }}
                animate={{ overflow: "hidden", opacity: 1, y: 0 }}
                exit={{ y: 1000 }}
                className="relative rounded-xl bg-white dark:bg-slate-900"
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  exit: { duration: 5 },
                }}
              >
                <div className="">
                  <div className="relative overflow-hidden ">
                    <motion.img className="" src={selectedItem.img} alt="" />
                    <div
                      onClick={closeModal}
                      class="absolute right-2 top-2 cursor-pointer"
                    >
                      <div className="flex items-center justify-center rounded-md bg-gray-900 px-5 py-1 text-sm font-medium text-gray-300 shadow-[0_0_20px_-7px_rgba(0,0,0,0.7)] transition-colors hover:text-white  ">
                        Close
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto", transition: { delay: 0.5 } }}
                  exit={{ height: 0 }}
                  className=" left-0 top-[100%] w-full overflow-hidden text-gray-900 dark:text-slate-200"
                >
                  <div className=" p-4 md:p-5 ">
                    <h4 className="mb-2 text-3xl font-semibold">
                      {selectedItem.title}
                    </h4>

                    <div className="mb-6 flex-wrap gap-3 ">
                      <div className="left-0 flex flex-wrap gap-x-2 gap-y-2 transition-all">
                        {selectedItem.lang.map((language, langIndex) => (
                          <Reveal
                            key={langIndex}
                            id={langIndex}
                            overflowVisible={false}
                            className="flex items-center justify-center font-medium  text-gray-800 dark:text-slate-400"
                          >
                            <div className="flex  items-center justify-center rounded-lg   bg-gray-100 px-5 py-1 text-sm font-medium   ">
                              {language.name}
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6 flex flex-col gap-y-3 font-medium text-gray-600 dark:text-slate-400">
                      <p>
                        The Canvas Club is a social community for painters to
                        connect with others in their community.
                      </p>
                      <p>
                        I work primarily on the backend, a collection of Node
                        &amp; Express microservices. Data is stored primarily in
                        Postgres &amp; cached in Redis.
                      </p>
                      <p>
                        The team in total consists of 5 developers. This is a
                        passion project for all of us.
                      </p>
                      <p>
                        Because this isn't real, here's some gibberish to fill
                        space :)
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aspernatur quia officia odio nulla consectetur
                        aperiam ad tempora magni magnam nesciunt.
                      </p>
                      <p>
                        Fuga id sapiente facere ipsa eius exercitationem
                        officiis deleniti, rerum dolorum. Deserunt soluta modi
                        culpa animi.
                      </p>
                    </div>
                    <div className=" flex flex-col gap-y-1">
                      <p className="text-2xl font-medium">
                        Project Links<span>.</span>
                      </p>
                      <div className="flex gap-x-2 text-lg">
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="https://www.github.com"
                          className="flex items-center justify-center gap-x-1"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                          </svg>{" "}
                          source code
                        </a>
                        <a
                          target="_blank"
                          rel="nofollow"
                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                          className="flex items-center justify-center gap-x-1"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
                          </svg>{" "}
                          live project
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
