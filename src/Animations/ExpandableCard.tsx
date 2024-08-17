import React from 'react';
import { motion, AnimatePresence } from "framer-motion"

interface ExpandableCardProps{
    children: React.ReactNode;
    isExpanded: boolean;
    handleClick: () => void;
}

const ExpandableCard:React.FC<ExpandableCardProps> = ({children, isExpanded, handleClick}) => {
    return (
        <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={handleClick}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-gradient-to-b bg-transparent from-[#1e2024] to-[#23272b] shadow-button border-0 rounded-2xl p-8 w-11/12 md:w-2/3 h-5/6 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
}

export default ExpandableCard;
