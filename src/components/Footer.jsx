import React from "react";
import { SiVite, SiReact, SiFramer, SiTailwindcss } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="relative  left-0 right-0 z-10 bg-gradient-to-t from-black/15 to-transparent  dark:from-slate-900 dark:text-slate-200">
      <div className="mx-auto max-w-7xl px-6 transition-all lg:px-8">
        <div className="mx-auto max-w-2xl py-6 lg:max-w-6xl">
          <aside></aside>
          <nav>
            <p className="text-2xl font-medium">
              Build using<span>.</span>
            </p>
            <div className="my-4 flex  gap-4">
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiReact className="size-6 animate-[spin_2s_ease-out_infinite]" />
              </a>
              <a
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiVite className="size-6  " />
              </a>
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFramer className="size-6" />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTailwindcss className="size-6" />
              </a>
            </div>
          </nav>{" "}
          <p>
            Lim Copyright © {new Date().getFullYear()} - All right reserved.
          </p>{" "}
        </div>
      </div>
    </footer>
  );
}
