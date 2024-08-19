"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa"; // Importing the world icon from react-icons
import Button from "../Button";
import Buttontwo from "./Buttontwo";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-[3rem] place-items-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-[400px] w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-mainColor dark:bg-black block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="flex justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <FaGlobe className="text-white text-6xl rounded-[10px] p-3 bg-mainColor hover:bg-black flex justify-center items-center w-fit" />
            </div>
            <CardTitle className="text-center">{item.title}</CardTitle>
            <CardDescription className="text-center">{item.description}</CardDescription>
            <Buttontwo className="bg-mainColor hover:bg-black w-full flex justify-center mt-[0.7rem] mb-[0.6rem]" text="Get started " />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 md:px-10 px-5 overflow-hidden bg-white shadow-lg border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 flex items-start space-x-4">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black md:text-[2.04rem] text-[1.7rem] font-bold tracking-wide mt-5", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-black tracking-wide leading-relaxed text-[1.1rem] mb-3",
        className
      )}
    >
      {children}
    </p>
  );
};