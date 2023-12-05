import type { Metadata } from "next";
import SideNavbar from "./_components/SideNavbar";


export const metadata: Metadata = {
  title: "EduSphere  | Dashboard",
  description:
    "EduSphere est une plateforme d addmission en ligne pour les etudiants du secondaire et du superieur",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <SideNavbar />
      <div>
        Blog Content
        {children}
      </div>
    </section>
  );
}
