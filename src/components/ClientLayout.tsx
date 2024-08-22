"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar"; // Importa el componente Navbar

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); // Obtiene la ruta actual

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Verifica si la ruta actual es "/" y oculta el Navbar y Sidebar si es así
  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 p-12 transition-all ${
            isSidebarOpen ? "duration-200 ml-52" : "duration-500 ml-14"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
