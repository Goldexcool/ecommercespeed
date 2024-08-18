"use client";
import { TextGenerateEffect } from "../component/ui/TextGenerateEff";

const words = ` Igniting Innovation: Propel Your Business with Ecommerce Speed
`;

export function TextGenerateEffectDemo({className}: {className?: string}) {
  return <TextGenerateEffect words={words} className={className}/>;
}
