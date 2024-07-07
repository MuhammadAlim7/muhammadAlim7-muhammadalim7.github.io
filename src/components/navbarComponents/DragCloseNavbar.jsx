import React, { useState, useEffect } from "react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import {
  LuMoon,
  LuDownloadCloud,
  LuMail,
  LuInstagram,
  LuGithub,
  LuPhone,
} from "react-icons/lu";
import useMeasure from "react-use-measure";
import { linksComponents } from "./linksComponents";
import { useTheme } from "../ThemeContext";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Switch } from "./Switch";
import pdf from "../../assets/doc/CV.pdf";
import imgPP from "../../assets/img/Pp.jpg";

export const DragCloseNavbar = ({ highLightsLink }) => {
  const { currentNavigation } = linksComponents(highLightsLink);
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure();
  const controls = useDragControls();
  const x = useMotionValue(0);
  const closeModal = async () => {
    animate("#backdrop", {
      opacity: [1, 0],
    });
    const xStart = typeof x.get() === "number" ? x.get() : 0;
    await animate(
      "#drawer",
      {
        x: [xStart, width],
      },
      { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] },
    );
    setIsOpen(false);
  };

  const { enabled, toggleTheme } = useTheme();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function scrollToElement(href) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="flex w-9 justify-center text-gray-400"
      >
        <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
      </button>
      <Drawer
        closeModal={closeModal}
        drawerRef={drawerRef}
        controls={controls}
        isOpen={isOpen}
        scope={scope}
        x={x}
      >
        <div className="flex h-full flex-col ">
          <div className="px-6">
            {/* <div className="absolute right-6 flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-start sm:items-stretch">
                <div className="absolute inset-y-0 right-0 inline-flex items-center transition-all">
                  <button
                    className="flex w-9 justify-center text-gray-400"
                    onClick={closeModal}
                  >
                    <XMarkIcon
                      className={`${
                        open ? "rotate-0" : ""
                      }block h-7 w-7 rotate-90 transform transition-all  `}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className="px-4 ">
            <div className="w-full">
              <div className="">
                <div className="my-8">
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
              <hr className="mx-4 h-[1px] border-t-0 bg-gray-200 opacity-100 dark:opacity-10" />
              <div className="">
                <div className="my-8 grid gap-y-2">
                  {currentNavigation.map((item) => (
                    <ButtonD
                      key={item.name}
                      onClick={() => scrollToElement(item.href)}
                      className={classNames(
                        item.current
                          ? " text-gray-900  dark:text-slate-200 "
                          : "text-gray-600 dark:text-slate-400",
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {<item.icon className="m-2 h-5 w-5" aria-hidden="true" />}
                      {item.name}
                    </ButtonD>
                  ))}
                </div>
              </div>
              <hr className="mx-4 h-[1px] border-t-0 bg-gray-200 opacity-100 dark:opacity-10" />
              <div className="">
                <div className="my-8 grid gap-y-2 ">
                  <ButtonD
                    onClick={() => {
                      window.open("https://wa.me/+6285607803912", "_blank");
                    }}
                    className="text-gray-600 dark:text-slate-400"
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
                    className="text-gray-600 dark:text-slate-400"
                  >
                    <LuMail
                      className="m-1 h-[22px] w-[22px]"
                      aria-hidden="true"
                    />
                    Email
                  </ButtonD>
                  <ButtonD
                    onClick={() => {
                      window.open("https://github.com/MuhammadAlim7", "_blank");
                    }}
                    className="text-gray-600 dark:text-slate-400"
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
                    className="text-gray-600 dark:text-slate-400"
                  >
                    <LuInstagram
                      className="m-1 h-[22px] w-[22px]"
                      aria-hidden="true"
                    />
                    Instagram
                  </ButtonD>
                  <ButtonD
                    // onClick={() => {
                    //   window.open(`${pdf}`);
                    // }}
                    className="cursor-not-allowed text-gray-600 dark:text-slate-400"
                  >
                    <LuDownloadCloud
                      className="m-1 h-[22px] w-[22px]"
                      aria-hidden="true"
                    />
                    My Resume
                  </ButtonD>
                </div>
              </div>
              <hr className="mx-4 h-[1px] border-t-0 bg-gray-200 opacity-100 dark:opacity-10" />
              <div className="">
                <div className="my-8 grid gap-y-2">
                  <ButtonD
                    onClick={() => {
                      toggleTheme();
                    }}
                    className="text-gray-600 dark:text-slate-400"
                  >
                    <LuMoon
                      className="m-1 h-[22px] w-[22px] "
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
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
const ButtonD = ({ children, onClick, href, className }) => {
  return (
    <button
      onClick={onClick}
      href={href}
      className={`group flex w-full items-center gap-3 rounded-md p-2 text-sm font-medium  ${className} active:bg-gray-100 active:text-gray-900 active:dark:bg-slate-900/40 active:dark:text-slate-200`}
      aria-current=""
    >
      {children}
    </button>
  );
};
const Drawer = ({
  closeModal,
  drawerRef,
  children,
  controls,
  isOpen,
  scope,
  x,
}) => {
  return (
    <>
      {isOpen && (
        <>
          <motion.div
            onClick={() => {
              const xClose = typeof x.get() === "number" ? x.get() : 0;
              if (xClose == 0) {
                closeModal();
              }
            }}
            ref={scope}
            className="x fixed inset-0 z-30 cursor-pointer"
          >
            <motion.div
              id="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-gray-800/60   "
            />

            <motion.div
              id="drawer"
              ref={drawerRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              style={{
                x,
              }}
              onDragEnd={() => {
                if (x.get() >= 35) {
                  closeModal();
                }
              }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              drag="x"
              dragControls={controls}
              dragListener={true}
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={{
                left: 0.005,
                right: 0.5,
              }}
              className="absolute inset-y-0 right-0 w-full max-w-xs cursor-default  "
            >
              {/* <div className="absolute left-0 right-0 flex w-full  justify-center  p-2 pb-[10rem]  ">
                <button
                  onPointerDown={(e) => {
                    controls.start(e);
                  }}
                  className="z-10 h-[4.5px] w-28  cursor-grab touch-none rounded-full bg-gray-400 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] active:cursor-grabbing"
                ></button>
              </div> */}

              <motion.div
                id="container"
                className="relative h-full  border-l border-gray-200 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-gray-200/10 dark:bg-slate-800 md:p-6  md:pt-8"
              >
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
};
