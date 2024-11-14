import { motion } from "motion/react";

const Button = ({ className, href, children }: { className: string, href?: string, children: JSX.Element | string }) => {
  return (
    <motion.a href={href ? href : '#'} target={ href && href.charAt(0) != '#' ? '_blank' : undefined } initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className={className}>
      {children}
    </motion.a>
  )
}

export default Button;