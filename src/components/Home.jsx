import { Reveal } from "./Reveal";
export default function Home() {
  return (
    <>
      <div className="relative isolate z-10 h-screen px-6 pt-14 lg:px-8">
        <div className="z-10 mx-auto flex h-full max-w-2xl bg-transparent py-48 transition-all md:items-center md:py-0">
          <div>
            <div className="grid gap-y-4 text-gray-900 transition-all dark:text-slate-200 md:text-center">
              <div className="">
                <Reveal>
                  <div className="flex items-center md:justify-center">
                    <Reveal id="1">
                      <a className="relative z-10 text-5xl font-bold leading-[0.8] sm:text-6xl">
                        Hi! I'Am
                      </a>
                    </Reveal>

                    <Reveal setSide={true} overflowVisible={false} id="5">
                      <div className="ml-2 items-center rounded-full bg-gray-900 px-2.5 py-1.5 text-center align-[8px] dark:bg-slate-200 sm:px-5 sm:py-2.5 sm:align-[12px]">
                        <span className="  text-xl font-semibold text-gray-100 dark:text-slate-800 sm:text-3xl">
                          IT Support
                        </span>
                      </div>
                    </Reveal>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="flex flex-wrap gap-x-2 text-5xl font-bold leading-none sm:text-6xl md:justify-center">
                    {/* Muhammad Nur Alim */}
                    <Reveal id="2">
                      <a>Muhammad</a>
                    </Reveal>
                    <Reveal id="3">
                      <a>Nur</a>
                    </Reveal>
                    <Reveal id="4">
                      <a>Alim</a>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <Reveal>
                <p className="font line-clamp-4 text-lg font-medium leading-8 text-gray-600 dark:text-slate-400 ">
                  Saya seorang IT Support dengan keterampilan yang dikembangkan
                  sejak lahir dan didukung oleh pengalaman otodidak dan
                  bimbingan dari Ayah saya.
                </p>
              </Reveal>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Reveal>
                <a
                  href="#Skills"
                  className="font-base  text-sm leading-6 text-gray-300 dark:text-slate-400"
                >
                  <span className="flex items-center md:justify-center">
                    Learn More{" "}
                  </span>
                </a>
              </Reveal> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
