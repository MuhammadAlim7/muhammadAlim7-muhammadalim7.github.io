import React, { useEffect, useCallback } from "react";
import { configs } from "./config/particleConfigs";
import { useTheme } from "./ThemeContext";
import { loadSlim } from "https://cdn.jsdelivr.net/npm/@tsparticles/slim@3.8.1/+esm";
export default function Background() {
  const { particlesConfigs } = configs();
  const { theme } = useTheme();
  // const setParticleHeight = useCallback(() => {
  //   const particle = document.querySelector("#particles");
  //   const baseHeight = document.querySelector("#base").clientHeight;
  //   if (particle && baseHeight) {
  //     particle.style.height = `${baseHeight * 0.5}px`;
  //   }
  // }, []);

  async function loadParticles(options) {
    // const { loadSlim } = await import(
    //   "https://cdn.jsdelivr.net/npm/@tsparticles/slim@3.1.0/+esm"
    // ); // << lazyload version
    await loadSlim(tsParticles);
    await tsParticles
      .load({
        id: "particles",
        options,
      })
      .then((container) => {
        container.loadTheme(theme);
        // setParticleHeight();
      });
  }
  loadParticles(particlesConfigs);

  useEffect(() => {
    // setParticleHeight();
    // window.addEventListener("resize", setParticleHeight);
    // return () => {
    //   window.removeEventListener("resize", setParticleHeight);
    // };
  }, []);
  return (
    <div
      id="particles"
      theme={theme}
      className="fixed inset-0 z-0 h-screen w-full overflow-visible bg-cover bg-center bg-no-repeat "
    ></div>
  );
}
