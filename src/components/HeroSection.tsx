"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent-red/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-rose/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent-red/30 mb-8">
          <Sparkles className="w-4 h-4 text-accent-red" />
          <span className="text-sm text-gray-300">Locked in. Or am I?</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-1 leading-tight pb-4 overflow-visible"
        >
          <span className="block text-white">hi! i'm kevin.</span>
          <span className="block text-gradient from-accent-red via-accent-rose to-accent-orange pb-3">
            join my journey
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-[22px] text-gray-400 mb-4 max-w-3xl mx-auto"
        >
          14yo website dev, game dev, and a passionate coder
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          Aspiring CS student from Canada 🇨🇦
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link href="#projects">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-accent-red to-accent-rose rounded-lg font-semibold text-white shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowDown className="w-4 h-4" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-rose to-accent-orange"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <SocialLink href="https://github.com/LCDsuperobot129" icon={<Github />} label="GitHub" />
          <SocialLink href="mailto:ckev2328@gmail.com" icon={<Mail />} label="Email" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator - FIXED CENTERING */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center pointer-events-none">
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-surface border border-border rounded-lg text-gray-400 hover:text-accent-red hover:border-accent-red transition-colors"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <div className="w-6 h-6">{icon}</div>
    </motion.a>
  );
}
