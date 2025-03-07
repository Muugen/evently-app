"use client";

import React from "react";
import Image from "next/image";

import OnboardingIndicator from "@/components/onboarding/OnboardingIndicator";

type OnboardingStepProps = {
  data: {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  step: number;
  totalSteps: number;
  onNext: () => void;
  onSkip: () => void;
};

export default function OnboardingStep({
  data,
  step,
  totalSteps,
  onNext,
  onSkip,
}: OnboardingStepProps) {
  const { imageUrl, imageAlt, title, description } = data;

  return (
    <div className="absolute inset-0 flex flex-col bg-white overflow-hidden">
      <div className="relative w-full flex-[2] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10" />
        <div className="absolute inset-0">
          <Image
            fill
            priority
            alt={imageAlt}
            sizes="100vw"
            src={imageUrl}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg
            fill="none"
            preserveAspectRatio="none"
            style={{ display: "block", height: "auto" }}
            viewBox="0 0 428 181"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 181.115C0 167.295 8.36529 154.85 21.1624 149.632L381.162 2.83816C403.525 -6.28063 428 10.1706 428 34.3214V181.11H0V181.115Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="px-8 pt-4 pb-4 z-10 flex-[1] flex flex-col overflow-y-auto">
        <OnboardingIndicator currentStep={step} totalSteps={totalSteps} />

        <h1 className="text-3xl font-bold text-dark mt-6 mb-4 text-[#249781]">
          {title}
        </h1>

        <p className="text-dark-secondary text-sm mb-auto">{description}</p>

        <div className="flex justify-between items-center mt-8 mb-2">
          <button className="px-4 py-2 text-gray-500" onClick={onSkip}>
            Skip
          </button>

          <button
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white"
            onClick={onNext}
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
