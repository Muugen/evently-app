import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import HomePage from "@/app/home/page";

export default async function Home() {
  const cookieStore = await cookies();
  const hasSeenOnboarding = cookieStore.get("hasSeenOnboarding");

  if (!hasSeenOnboarding) {
    redirect("/onboarding");
  }

  return <HomePage />;
}
