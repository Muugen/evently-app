export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-[100dvh] overflow-hidden">{children}</div>;
}
