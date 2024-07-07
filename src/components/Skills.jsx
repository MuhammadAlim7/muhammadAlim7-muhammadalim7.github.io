import { cards } from "./cardComponents/icon";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import TitleSection from "./TitleSection";
export default function Skills() {
  return (
    <>
      <div className="relative z-10 bg-white py-24 dark:bg-slate-900 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-16 px-6 sm:gap-y-20 lg:gap-y-24 lg:px-8">
          <TitleSection
            title="Skills"
            subtitle="Keahlian"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
          <div className="mx-auto max-w-2xl transition-all duration-300 lg:max-w-6xl">
            <dl className="grid auto-rows-fr grid-cols-1  gap-x-8 gap-y-8 transition-all duration-300 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-y-8">
              {cards.map((cards, index) => (
                <Reveal
                  key={index}
                  id={index}
                  overflowVisible={true}
                  className="h-full w-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                    }}
                    className=" h-full w-full rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-gray-200/10  dark:bg-slate-800"
                  >
                    <div className="flex gap-6 lg:flex-col">
                      <div>
                        <cards.icon className="h-12 w-12 fill-black drop-shadow-[5px_-5px_40px_rgba(0,0,0,0.9)] dark:fill-white dark:drop-shadow-[5px_-5px_40px_rgba(255,255,255,0.9)] lg:h-16 lg:w-16" />
                      </div>
                      <div className="my-auto">
                        <a>
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-slate-200 sm:text-lg">
                            {cards.title}
                          </h5>
                        </a>
                      </div>
                    </div>
                    <p className="mt-6  text-sm font-normal text-gray-400 dark:text-slate-400 lg:mt-4">
                      {cards.text}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </dl>
            <div />
          </div>
        </div>
      </div>
    </>
  );
}
