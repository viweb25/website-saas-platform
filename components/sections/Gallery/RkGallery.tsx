"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  data: {
    badge: string;
    title: string;

    items: {
      title: string;
      category: string;
      image: string;
    }[];
  };

  theme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    button: string;
  };
};

export default function Gallery({ data, theme }: Props) {
  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p
            className="uppercase tracking-[5px] font-semibold"
            style={{ color: theme.primary }}
          >
            {data.badge}
          </p>

          <h2 className="text-5xl font-bold mt-4 text-gray-900">
            {data.title}
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {data.items.map((item, index) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -12 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer
                ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2 h-[620px]"
                    : "h-[300px]"
                }`}
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-8 left-8">

                <span
                  className="px-4 py-2 rounded-full text-sm text-white"
                  style={{
                    background: theme.primary,
                  }}
                >
                  {item.category}
                </span>

                <h3 className="text-white text-3xl font-bold mt-5">
                  {item.title}
                </h3>

                <div
                  className="mt-3 flex items-center gap-2 group-hover:gap-5 transition-all"
                  style={{
                    color: theme.primary,
                  }}
                >
                  View Project →
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}