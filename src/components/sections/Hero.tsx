"use client";

import { motion } from "framer-motion";

const wordAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function AnimatedWords({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      variants={wordAnimation}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="inline-block"
          style={{ marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-white pt-20">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-text-heading md:text-6xl lg:text-7xl">
          <AnimatedWords text="Get" />
          <motion.em
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="inline-block not-italic text-teal"
            style={{ marginRight: "0.3em" }}
          >
            more patients
          </motion.em>
          <AnimatedWords text="—" />
          <br className="hidden sm:block" />
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="inline-block"
          >
            Increase revenue.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mx-auto mb-4 max-w-2xl text-lg text-text-muted md:text-xl"
        >
          AI-powered workflow automation for specialty dental practices.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-lg text-text-muted md:text-xl"
        >
          Never miss a referral. Automate follow-ups. Grow your practice.
        </motion.p>

        <motion.a
          href="https://calendar.app.google/9f7TBnj7odBxppdw7"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="inline-block rounded-full bg-teal px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-teal-light hover:shadow-lg hover:shadow-teal/20"
        >
          Book a Demo
        </motion.a>
      </div>

      <motion.a
        href="#solution"
        aria-label="See how FlowSurge works"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-teal"
      >
        <span className="text-sm font-medium">See how it works</span>
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
