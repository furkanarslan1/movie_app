import React from "react";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export default function VideoModal({ isOpen, onClose, videoKey }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl p-4"
          >
            <button
              className="absolute top-2 -right-12 text-2xl  bg-red-600  p-2  rounded-full hover:cursor-pointer"
              onClick={onClose}
            >
              <IoMdClose className=" text-white " />
            </button>
            <div className="aspect-video  ">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
