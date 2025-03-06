"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function WelcomePage() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="absolute inset-0 flex flex-col bg-white">
      <div className="relative h-2/3 w-full overflow-hidden rounded-b-[32px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/assets/images/events-grid.png"
            alt="Événements"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-t-[32px] transform translate-y-16"></div>
      </div>

      <div className="px-8 pt-12 pb-4 -mt-16 z-10 flex-1 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-1">Welcome</h1>
        <h2 className="text-3xl font-bold text-primary mb-1">eventrue</h2>
        <p className="text-sm text-center mb-auto text-gray-600">
          Discover event around you
        </p>

        <div className="w-full mt-auto">
          <Button
            className="w-full mb-4 bg-primary text-white py-3"
            onPress={handleSignUp}
          >
            Sign Up
          </Button>

          <div className="text-sm text-center">
            Already a member?{" "}
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
