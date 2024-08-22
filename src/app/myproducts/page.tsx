import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MyProducts() {
  return (
    <main className="py-8 pl-4">
      <h1 className="text-3xl font-bold mb-2">Mis productos</h1>
      <p className="text-md mb-6">
        Sube tus productos, configura alertas personalizadas según los precios de tus competidores y recibe notificaciones actualizadas para responder rápidamente a las fluctuaciones del mercado.
      </p>
      <Tabs defaultValue="mis-productos" className="flex-grow">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="mis-productos">Mis Productos</TabsTrigger>
            <TabsTrigger value="cargar-productos">Cargar productos</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="mis-productos">
          <div className="border rounded-lg p-4 h-48 mb-4">
            <p>Tabla de productos cargados.</p>
          </div>
        </TabsContent>
        <TabsContent value="cargar-productos">
          <div className="border rounded-lg p-4 h-48 mb-4 flex justify-center items-center">
            <Button variant="default" className="bg-gray-800 text-white">
              Sube archivo (.xlsx)
            </Button>
          </div>
          <div className="flex justify-start">
            <Button variant="default" className="bg-gray-800 text-white">
              Guardar
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
