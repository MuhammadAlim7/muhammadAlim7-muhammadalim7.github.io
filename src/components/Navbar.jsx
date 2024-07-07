import { useState, useEffect } from "react";
import { linksComponents } from "./navbarComponents/linksComponents";
import { motion as m } from "framer-motion";
import { DragCloseNavbar } from "./navbarComponents/DragCloseNavbar";
import DropdownDekstop from "./navbarComponents/DropdownDekstop";
import Logo from "./navbarComponents/Logo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Navbar({ highLightsLink }) {
  const { currentNavigation } = linksComponents(highLightsLink);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function scrollToElement(href) {
    const element = document.querySelector(href);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <m.header
      initial={{ y: -42 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 96, damping: 12, delay: 1.5 }}
    >
      <nav className="fixed left-0 right-0 top-0 z-20 transition-all duration-300">
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 1 : 0 }}
            className="absolute left-0 right-0 top-0 h-full w-full border-b border-gray-200 bg-gray-50/50 backdrop-blur-sm dark:border-gray-200/10 dark:bg-slate-800/50"
          ></m.div>
          <div className="mx-auto max-w-7xl px-6 transition-all lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-6xl">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center  justify-start sm:items-stretch">
                  <div className="absolute inset-y-0 left-0 flex items-center transition-all">
                    <Logo />
                  </div>
                  <div className="hidden flex-1 items-center justify-center transition-all sm:items-stretch md:flex">
                    <div className="flex space-x-8 py-2 lg:space-x-16">
                      {currentNavigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => scrollToElement(item.href)}
                          className={classNames(
                            item.current
                              ? "text-gray-900 dark:text-slate-200 dark:drop-shadow-[0_0_20px_rgba(255,255,255,1.2)]"
                              : "text-gray-400 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-200",
                            "text-sm font-medium transition-all duration-300 ease-in-out",
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 inline-flex items-center transition-all">
                    {/* Profile dropdown */}
                    <DropdownDekstop />
                    {/* <MenuMobile highLightsLink={highLightsLink} /> */}
                    <DragCloseNavbar highLightsLink={highLightsLink} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </nav>
    </m.header>
  );
}
