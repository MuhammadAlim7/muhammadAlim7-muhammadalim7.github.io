import React from "react";
import { Reveal } from "./Reveal";

export default function TitleSection({ title, subtitle, desc, className }) {
  return (
    <div
      className={`grid max-w-2xl gap-y-2 sm:mx-auto sm:text-center ${className}`}
    >
      <Reveal>
        <h2 className="text-lg font-medium leading-8 text-gray-600 dark:text-slate-400 ">
          {title}
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">
          {subtitle}
        </p>
      </Reveal>
      {/* <Reveal>
        <p className="text-lg leading-8 text-gray-600 dark:text-slate-400">
          {desc}
        </p>
      </Reveal> */}
    </div>
  );
}
