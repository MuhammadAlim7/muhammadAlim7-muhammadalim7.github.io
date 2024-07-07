import React, { useState } from "react";
import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimate,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { ImgSkeleton } from "./sources";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";

import { BiExit, BiLogoGithub } from "react-icons/bi";
export const DragCloseDrawer = ({
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="">
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setIsLoading={setIsLoading}
      >
        {selectedItem && (
          <div className="no-scrollbar mx-auto h-full max-w-2xl space-y-4 overflow-y-auto py-4 text-gray-400 dark:text-slate-400 md:py-6">
            <div className="relative overflow-hidden rounded-lg">
              {isLoading && <ImgSkeleton />}
              <motion.img
                style={{ display: isLoading ? "none" : "" }}
                className="drag-none"
                src={selectedItem.img[0]}
                alt=""
                onLoad={handleImageLoad}
              />
              {/* <Carousel
                handleImageLoad={handleImageLoad}
                images={selectedItem.img}
                isLoading={isLoading}
                interval={3000}
              /> */}
              {/* <Carousel2
                handleImageLoad={handleImageLoad}
                images={selectedItem.img}
                isLoading={isLoading}
                interval={3000}
              /> */}
            </div>
            <h2 className="text-4xl font-bold ">
              {selectedItem.title}
              <div className="flex flex-wrap gap-x-2">
                {selectedItem.lang.map((language, langIndex) => (
                  <div key={langIndex}>{language.name}</div>
                ))}
              </div>
            </h2>

            {selectedItem.desc.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className=" relative flex flex-col gap-y-1 ">
              <p className="text-2xl font-medium">
                End<span>.</span>
              </p>
              <div className="flex gap-x-2 text-lg">
                <a
                  target="_blank"
                  rel="nofollow"
                  href={selectedItem.source}
                  className="flex items-center justify-center gap-x-1"
                >
                  <BiLogoGithub />
                  source code
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="flex items-center justify-center gap-x-1"
                >
                  <BiExit />
                  live project
                </a>
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

const Drawer = ({
  isOpen,
  setIsOpen,
  setSelectedItem,
  children,
  setIsLoading,
}) => {
  const [scope, animate] = useAnimate();
  const [isExpanded, setExpanded] = useState(false);
  const [drawerRef, { height }] = useMeasure();
  const controls = useDragControls();
  const y = useMotionValue(0);

  const animateElement = async (
    elementId,
    properties,
    options = { damping: 22, stiffness: 200 },
  ) => {
    await animate(elementId, properties, { type: "spring", ...options });
  };

  const expandModal = async () => {
    animateElement("#container", { borderRadius: 0 });
    animateElement("#drawer", {
      height: "100dvh",
      padding: 0,
      bottom: 0,
    });
    animateElement("#headerDrawer", {
      right: 0,
      left: 0,
    });
  };

  const shrinkModal = async () => {
    animateElement("#container", { borderRadius: "1.5rem" });
    animateElement("#drawer", {
      height: "75vh",
      padding: "1rem",
    });
    animateElement("#headerDrawer", {
      right: "16px",
      left: "16px",
    });
  };

  const closeModal = async () => {
    animate("#backdrop", { opacity: [1, 0] });
    if (isExpanded) {
      animateElement("#container", { borderRadius: "1.5rem" });
      animateElement("#drawer", {
        padding: "1rem",
      });
    }
    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animateElement("#drawer", {
      y: [yStart, height],
    });

    setIsLoading(true);
    setIsOpen(false);
    setExpanded(false);
    setSelectedItem(null);
  };
  const handleDragEnd = () => {
    const yPos = y.get();
    console.log(yPos);
    if (yPos >= 100) {
      if (isExpanded) {
        if (yPos >= 250) {
          closeModal();
        } else {
          shrinkModal();
          setExpanded(false);
        }
      } else {
        closeModal();
      }
    } else if (yPos <= -70) {
      expandModal();
      setExpanded(true);
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <motion.div
            onClick={() => {
              const yClose = typeof y.get() === "number" ? y.get() : 0;
              if (yClose == 0) {
                closeModal();
              }
            }}
            ref={scope}
            initial={{ overflow: "unset" }}
            animate={{ overflow: "hidden" }}
            className="x fixed inset-0 z-30 cursor-pointer"
          >
            <motion.div
              id="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-gray-800/80 backdrop-blur-md  "
            />

            <motion.div
              id="drawer"
              ref={drawerRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "100%", height: "75vh" }}
              animate={{ y: "0%", height: "75vh" }}
              style={{ y, height: "75vh", bottom: "0", padding: "1rem" }}
              transition={{
                type: "spring",
                damping: 14,
                stiffness: 100,
              }}
              onDragEnd={handleDragEnd}
              drag="y"
              dragControls={controls}
              dragListener={false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: isExpanded ? 0.05 : 0.5, bottom: 0.5 }}
              className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-2xl cursor-default"
            >
              <div
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                id="headerDrawer"
                style={{ right: "16px", left: "16px" }}
                className="absolute z-40 flex touch-none justify-center rounded-t-3xl border-b border-gray-200 bg-white p-3 dark:border-opacity-10 dark:bg-slate-900"
              >
                <button className="z-10 h-[6px] w-20 cursor-grab touch-none rounded-full bg-gray-400 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] active:cursor-grabbing"></button>
              </div>
              <motion.div
                id="container"
                style={{ borderRadius: "1.5rem" }}
                className="no-scrollbar relative z-0 h-full bg-white px-4  pt-[30px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] dark:bg-slate-900 md:px-6"
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
