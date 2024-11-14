import { motion } from "motion/react";

const Button = ({ className, children }: { className: string, children: JSX.Element | string }) => {
  return (
    <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={className}>
      {children}
    </motion.button>
  )
}

export default Button;