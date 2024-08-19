"use client";
import { TextGenerateEffect } from "../component/ui/TextGenerateEff";

const words = `Unleash the True Potential of Your Online Business with ecommercespeed
`;

export function TextGenerateEffectDemo({className}: {className?: string}) {
  return <TextGenerateEffect words={words} className={className}/>;
}
