import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, BarChart, Box, Tag, Settings, AlertCircle } from "lucide-react"; 

type SidebarProps = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <div className={`fixed top-0 left-0 h-full flex flex-col ${isOpen ? "w-64 duration-50" : "w-24 duration-500"} bg-gray-800 p-4 transition-width`}>
            <div className="flex items-center">
                <Button onClick={toggleSidebar} className="mb-4 flex items-center text-white">
                    <Menu />
                    <h2 className={`text-sm font-semibold ml-2 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                        Menu
                    </h2>
                </Button>
            </div>
        <nav className="flex flex-col items-start space-y-4">
          <div className="text-white w-full">
            <div className={`flex justify-start ml-2 mb-2 p-2 rounded`}>
              <div className={`text-sm font-semibold transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-50"}`}>
                {isOpen ? "Captura de Datos" : "CD"}
              </div>
            </div>
            <Button 
              variant="ghost" 
              className={`flex items-center gap-4 text-white ${pathname === "/pricetracker" ? "bg-gray-700" : ""}`}
              onClick={() => router.push("/pricetracker")} // Redirigir a /pricetracker
            >
              <BarChart />
              {isOpen && <span>Tracker de precios</span>}
            </Button>
            <Button 
              variant="ghost" 
              className={`flex items-center gap-4 mt-2 text-white ${pathname === "/stocktracker" ? "bg-gray-700" : ""}`}
              onClick={() => router.push("/stocktracker")} // Redirigir a /stocktracker
            >
              <Box />
              {isOpen && <span>Tracker de stocks</span>}
            </Button>
          </div>
          <div className="text-white mt-2 w-full">
            <div className={`flex justify-start mb-2 ml-2 p-2 rounded`}>
              <div className={`text-sm font-semibold transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-50"}`}>
                {isOpen ? "Alertas Generales" : "AG"}
              </div>
            </div>
            <Button 
              variant="ghost" 
              className={`flex items-center gap-4 text-white ${pathname === "/pricealerts" ? "bg-gray-700" : ""}`}
              onClick={() => router.push("/pricealerts")} // Redirigir a /pricealerts
            >
              <Tag />
              {isOpen && <span>Cambios de precio</span>}
            </Button>
            <Button 
              variant="ghost" 
              className={`flex items-center gap-4 mt-2 text-white ${pathname === "/products" ? "bg-gray-700" : ""}`}
              onClick={() => router.push("/products")} // Redirigir a /products
            >
              <Box />
              {isOpen && <span>Productos</span>}
            </Button>
          </div>
          <div className="text-white mt-2 w-full">
            <div className={`flex justify-start mb-2 ml-2 p-2 rounded`}>
              <div className={`text-sm font-semibold transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-50"}`}>
                {isOpen ? "Configuración General" : "CG"}
              </div>
            </div>
            <Button 
              variant="ghost" 
              className={`flex items-center gap-4 text-white ${pathname === "/myproducts" ? "bg-gray-700" : ""}`}
              onClick={() => router.push("/myproducts")} // Redirigir a /myproducts
            >
              <Settings />
              {isOpen && <span>Mis productos</span>}
            </Button>
            <Button 
              variant="ghost" 
              className={`flex items-center gap-4 mt-2 text-white ${pathname === "/alerts" ? "bg-gray-700" : ""}`}
              onClick={() => router.push("/alerts")} // Redirigir a /alerts
            >
              <AlertCircle />
              {isOpen && <span>Alertas</span>}
            </Button>
          </div>
        </nav>
      </div>
    );
  }
  