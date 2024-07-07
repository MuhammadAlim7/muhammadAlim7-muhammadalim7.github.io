import React, { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { DragCloseDrawer } from "./projectsComponents/DragCloseDrawer";
import { motion } from "framer-motion";
import TitleSection from "./TitleSection";
import { elements } from "./projectsComponents/sources";
import { ImgSkeleton } from "./projectsComponents/sources";
import Carousel from "./projectsComponents/Carousel";
const updatedElements = elements.map((item, index) => {
  return { ...item, id: `element_${index}` };
});

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <>
      <div className="relative bg-white py-24 dark:bg-slate-900 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-16 px-6 sm:gap-y-20 lg:gap-y-24 lg:px-8">
          <TitleSection
            title="Projects"
            subtitle="Project Terakhir"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:max-w-6xl ">
            {updatedElements.map((item, index) => (
              <Reveal
                overflowVisible={true}
                id={index}
                key={index}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className=" relative grid w-full gap-y-4">
                  <Reveal className="group relative z-10  overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-800">
                    <Reveal overflowVisible={true} className="w-full">
                      <div className="translate-y-8 scale-[0.875]">
                        {isLoading && <ImgSkeleton />}
                        <motion.img
                          onClick={() => {
                            isOpen ? {} : setSelectedItem(item),
                              setIsOpen(true);
                          }}
                          whileHover={isOpen ? {} : { rotate: 2 }}
                          animate={{
                            y: selectedItem === item && isOpen ? 400 : 0,
                          }}
                          transition={{
                            type: "spring",
                            damping: 18,
                            stiffness: 100,
                            rotate: { duration: 0.2 },
                          }}
                          className={`drag-none shadow-[0_15px_40px_-15px_rgba(0,0,0,0.25) cursor-pointer rounded-lg 
                            ${isLoading ? "hidden" : ""}`}
                          id={index}
                          src={item.img[0]}
                          alt=""
                          onLoad={handleImageLoad}
                        />
                        {/* <Carousel
                          className="drag-none shadow-[0_15px_40px_-15px_rgba(0,0,0,0.25) cursor-pointer rounded-lg"
                          onClick={() => {
                            isOpen ? {} : setSelectedItem(item),
                              setIsOpen(true);
                          }}
                          animate={{
                            y: selectedItem === item && isOpen ? 400 : 0,
                          }}
                          transition={{
                            type: "spring",
                            damping: 18,
                            stiffness: 100,
                            rotate: { duration: 0.2 },
                          }}
                          whileHover={isOpen ? {} : { rotate: 2 }}
                          handleImageLoad={handleImageLoad}
                          images={item.img}
                          isLoading={isLoading}
                          interval={3000}
                          id={index}
                        /> */}
                      </div>
                    </Reveal>
                  </Reveal>

                  <Reveal>
                    <h3 className=" text-xl font-semibold leading-6 text-gray-900 dark:text-slate-200">
                      <a>
                        <span className="absolute inset-0"></span>
                        {item.title}
                      </a>
                    </h3>
                  </Reveal>
                  <Reveal>
                    <div className="left-0 flex flex-wrap gap-x-2 gap-y-2 transition-all">
                      {item.lang.map((language, langIndex) => (
                        <Reveal
                          key={langIndex}
                          id={langIndex}
                          overflowVisible={false}
                        >
                          <div className="flex items-center justify-center rounded-xl bg-gray-100 px-3.5 py-1.5 text-sm font-medium text-gray-600 dark:bg-slate-800 dark:text-slate-400">
                            {language.name}
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <DragCloseDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </>
  );
}
