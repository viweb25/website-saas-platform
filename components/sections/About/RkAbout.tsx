"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  data: {
    badge: string;
    title: string;
    description: string;
    experience: string;
    experienceText: string;
    image: string;
    features: string[];
    button: {
      text: string;
      href: string;
    };
  };

  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function About({ data, theme }: Props) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left - Image & Experience Badge */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative pb-8 sm:pb-10 lg:pb-0"
        >
          {/* Mobile height h-[350px] to sm/lg h-[500px]/h-[600px] to prevent extreme scrolling */}
          <div className="relative h-[350px] sm:h-[480px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Experience Box - Adjusted for mobile position & padding */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 right-2 sm:-bottom-8 sm:-right-6 bg-white shadow-xl sm:shadow-2xl rounded-xl p-5 sm:p-8 border border-gray-100 max-w-[200px] sm:max-w-xs"
          >
            <h2
              className="text-3xl sm:text-5xl font-extrabold"
              style={{ color: theme.primary }}
            >
              {data.experience}
            </h2>

            <p className="text-gray-600 text-xs sm:text-base font-medium mt-1">
              {data.experienceText}
            </p>
          </motion.div>
        </motion.div>

        {/* Right - Content & Details */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 lg:mt-0"
        >
          <p
            className="uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm font-bold mb-3 sm:mb-4"
            style={{ color: theme.primary }}
          >
            {data.badge}
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-8 leading-tight">
            {data.title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8 sm:mb-10">
            {data.description}
          </p>

          {/* Features Grid: Single column on tiny screens, 2 columns from sm upward */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {data.features.map((feature) => (
              <motion.div
                key={feature}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0"
                  style={{ background: theme.primary }}
                />

                <span className="font-medium text-gray-800 text-sm sm:text-base">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <Link
            href={data.button.href}
            className="inline-block w-full sm:w-auto text-center px-8 py-3.5 sm:py-4 rounded-lg text-white font-semibold shadow-md transition-opacity hover:opacity-95"
            style={{
              background: theme.button,
            }}
          >
            {data.button.text}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}