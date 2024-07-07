import React, { useState } from "react";
import { Reveal } from "./Reveal";
import TitleSection from "./TitleSection";

export default function About() {
  const tools = [
    { elmt: "Word" },
    { elmt: "Excel" },
    { elmt: "CSS" },
    { elmt: "Javascript" },
    { elmt: "Bootstrap" },
    { elmt: "DataTables" },
    { elmt: "Jquery" },
  ];
  return (
    <section id="About" className="">
      <div className="relative z-10 bg-gradient-to-t from-white from-70% via-white/90 via-80% to-transparent to-100% py-24 dark:from-slate-900 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-y-16 px-6 sm:gap-y-20 lg:gap-y-24 lg:px-8">
          <TitleSection
            title="About"
            subtitle="About me"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 lg:max-w-4xl ">
            <div className="col-span-2 grid gap-y-6 text-lg leading-6 tracking-tight text-gray-600 dark:text-slate-300">
              <Reveal>
                <p className="">
                  Hi!, Saya Lim basic saya adalah sebagai UIUX Designer. Selain
                  itu saya berpengalaman dalam pembuatan tampilan Website, saya
                  berdomisili di Malang, Jawa Timur. Saya ahli di bagian Tech
                  Support, troubleshooting pada laptop, komputer entah itu
                  Hardware maupun Software.
                </p>
              </Reveal>
              <Reveal>
                <p className="">
                  Saat ini, saya sedang menempuh pendidikan S1 Manajemen untuk
                  mengembangkan pengetahuan dan keterampilan akademis.
                </p>
              </Reveal>
              <Reveal>
                <p className="">
                  Di luar perkuliahan, saya senang mengisi waktu dengan
                  mearansemen musik. terkadang juga suka mendesign dan terkadang
                  juga bermain game, menciptakan variasi dalam kehidupan
                  sehari-hari saya.
                </p>
              </Reveal>
              <Reveal>
                <p className="">
                  Saya sedang mencari pekerjaan paruh waktu yang dapat saya
                  lakukan selama waktu luang di luar perkuliahan untuk
                  meningkatkan pengalaman dan mendapatkan penghasilan tambahan.
                </p>
              </Reveal>
            </div>
            {/* <div className="flex flex-col gap-y-6">
              <Reveal>
                <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-2xl">
                  Use at college
                </p>
              </Reveal>
              <div className=" flex flex-wrap gap-x-2 gap-y-2 transition-all">
                {tools.map((item, index) => (
                  <Reveal key={index} id={index} overflowVisible={false}>
                    <div className="flex justify-center rounded-full border border-gray-200 bg-zinc-50 px-2.5 py-1 text-sm text-gray-600 dark:border-gray-200/5 dark:bg-slate-800 dark:text-slate-200">
                      {item.elmt}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
