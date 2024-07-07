import { motion, AnimatePresence } from "framer-motion";
import { LuAlertCircle } from "react-icons/lu";
export default function Modal({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 cursor-pointer overflow-y-auto "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm  "
          />
          <motion.div
            initial={{ overflowY: "unset" }}
            animate={{ overflowY: "auto" }}
            exit={{ overflowY: "unset" }}
            className="no-scrollbar fixed inset-0 flex items-center justify-center  "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="   w-full max-w-md transform cursor-default "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative rounded-xl bg-white dark:bg-slate-900"
                transition={{
                  ease: "easeInOut",
                }}
              >
                <div className="p-4 sm:p-6 ">
                  <div className="grid gap-y-10 ">
                    <div className="flex justify-center">
                      <LuAlertCircle
                        className="m-1 size-20 text-gray-900 dark:text-slate-200"
                        aria-hidden="true"
                      />
                    </div>
                    <div className=" text-center">
                      <h3 className=" text-base font-semibold leading-6 text-gray-900 dark:text-slate-200">
                        {isOpen}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
