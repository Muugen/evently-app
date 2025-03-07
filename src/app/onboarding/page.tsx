"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingStep from "@/components/onboarding/OnboardingStep";
import { AnimatePresence, motion } from "framer-motion";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const onboardingData = [
    {
      imageUrl: "/assets/images/onboarding-1.jpg",
      imageAlt: "Personnes jouant au basketball",
      title: "Eventrue",
      description:
        "This app is a marketplace for buying and selling tickets to events, including concerts, sports games, and theater performances.",
    },
    {
      imageUrl: "/assets/images/onboarding-2.jpg",
      imageAlt: "Artiste en concert",
      title: "Explore easily with us!",
      description: "Take advantage of various attractive offers for your event",
    },
    {
      imageUrl: "/assets/images/onboarding-3.jpg",
      imageAlt: "Personne avec casque VR",
      title: "Get ready to be Excited",
      description: "Millions of people have proven it, now it's your turn!",
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      router.push("/welcome");
    }
  };

  const handleSkip = () => {
    router.push("/welcome");
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%" }}
        >
          <OnboardingStep
            data={onboardingData[currentStep - 1]}
            step={currentStep}
            totalSteps={3}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
