import type { Metadata } from "next";
import SideBar from "./_components/SideBar";

export const metadata: Metadata = {
  title: "EduSphere | Dashboard",
  description:
    "EduSphere est une plateforme d'admission en ligne pour les étudiants du secondaire et du supérieur",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 w-full">
        <div className="p-4">
        {children}
        </div>
      </main>
    </div>
  );
}
