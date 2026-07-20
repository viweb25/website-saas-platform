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
    <section className="bg-gray-50 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">

            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover hover:scale-110 duration-700"
            />

          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute -bottom-10 -right-8 bg-white shadow-2xl rounded-xl p-8"
          >
            <h2
              className="text-5xl font-bold"
              style={{ color: theme.primary }}
            >
              {data.experience}
            </h2>

            <p className="text-gray-600">
              {data.experienceText}
            </p>
          </motion.div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            className="uppercase tracking-[5px] font-bold mb-4"
            style={{ color: theme.primary }}
          >
            {data.badge}
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {data.title}
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-10">
            {data.description}
          </p>

          <div className="grid grid-cols-2 gap-5 mb-10">

            {data.features.map((feature) => (

              <motion.div
                key={feature}
                whileHover={{ x: 8 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: theme.primary }}
                />

                <span className="font-medium text-gray-800">
                  {feature}
                </span>

              </motion.div>

            ))}

          </div>

          <Link
            href={data.button.href}
            className="inline-block px-8 py-4 rounded-lg text-white font-semibold"
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