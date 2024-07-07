import { useEffect } from "react";
import { useAnimate, motion } from "framer-motion";

export const Switch = ({ enabled, toggleTheme }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      {
        left: enabled ? "unset" : "4px",
        right: enabled ? "4px" : "unset",
        width: ["20px", "32px", "20px"],
      },
      {
        left: { delay: 0.05 },
        right: { delay: 0.05 },
        width: { duration: 0.3 },
      },
    );
  }, [enabled, animate, scope]);

  return (
    <div className="relative flex items-center antialiased">
      <input
        type="checkbox"
        role="switch"
        onChange={toggleTheme}
        checked={enabled}
        className={`relative flex h-7 w-14 cursor-pointer appearance-none items-center rounded-full px-1 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.1)] transition-all duration-500 
        ${enabled ? "bg-slate-700 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.2)]" : " bg-gray-100 "}`}
        id="checkbox"
      />
      <motion.div
        ref={scope}
        initial={{
          left: enabled ? "unset" : "4px",
          right: enabled ? "4px" : "unset",
        }}
        style={{
          width: "20px",
        }}
        className="absolute z-10 h-[20px] rounded-full  bg-white shadow-md"
      ></motion.div>
    </div>
  );
};
