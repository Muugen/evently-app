import React from "react";

type OnboardingIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export default function OnboardingIndicator({
  currentStep,
  totalSteps,
}: OnboardingIndicatorProps) {
  return (
    <div className="flex gap-2 items-center">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full ${
            index + 1 === currentStep ? "w-8 bg-primary" : "w-2 bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}
