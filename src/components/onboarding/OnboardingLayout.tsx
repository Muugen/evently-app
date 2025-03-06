"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import OnboardingIndicator from "@/components/onboarding/OnboardingIndicator";

type OnboardingLayoutProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  step: 1 | 2 | 3;
  nextUrl: string;
  skipUrl?: string;
};

export default function OnboardingLayout({
  imageUrl,
  imageAlt,
  title,
  description,
  step,
  nextUrl,
  skipUrl = "/welcome",
}: OnboardingLayoutProps) {
  const router = useRouter();

  const handleNext = () => {
    router.push(nextUrl);
  };

  const handleSkip = () => {
    router.push(skipUrl);
  };

  return (
    <div className="relative flex flex-col h-screen bg-white overflow-hidden">
      <div className="relative h-2/3 overflow-hidden border-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10" />
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white border-none transform translate-y-16"></div>
      </div>

      <div className="px-8 pt-8 pb-4 -mt-16 z-10 flex-1 flex flex-col">
        <OnboardingIndicator currentStep={step} totalSteps={3} />

        <h1 className="text-3xl font-bold text-dark mt-6 mb-4 text-[#249781]">
          {title}
        </h1>

        <p className="text-dark-secondary text-sm mb-auto">{description}</p>

        <div className="flex justify-between items-center mt-8 mb-8">
          <button onClick={handleSkip} className="px-4 py-2 text-gray-500">
            Skip
          </button>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
