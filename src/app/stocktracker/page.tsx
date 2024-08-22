import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import stockData from "@/data/stockData.json";

export default function StockTracker() {
  return (
    <main className="py-8 pl-4">
      <h1 className="text-3xl font-bold mb-2">Tracker de stocks</h1>
      <p className="text-md mb-6">
        Monitorea los SKUs de tus competidores que no están en tu inventario para
        comprender mejor las estrategias y oportunidades en el mercado.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold">Productos que tiene tu competidor y tú no</h2>
          <p className="text-2xl font-bold">{stockData.competitor.productsYouDontHave}</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold">Productos que tienes tú y tu competidor no</h2>
          <p className="text-2xl font-bold">{stockData.competitor.productsTheyDontHave}</p>
        </div>
      </div>
      
        <Tabs defaultValue="tienes" className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
                <TabsTrigger value="tienes">Lo que tienes</TabsTrigger>
                <TabsTrigger value="notienes">Lo que no tienes</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
            </TabsList>
            <Button variant="outline" className="ml-4">Filtros</Button>
          </div> 
          <TabsContent value="tienes">
            <div className="border rounded-lg p-4 h-48 mb-4">
              <p>Contenido de "Lo que tienes".</p>
            </div>
          </TabsContent>
          <TabsContent value="notienes">
            <div className="border rounded-lg p-4 h-48 mb-4">
              <p>Contenido de "Lo que no tienes".</p>
            </div>
          </TabsContent>
          <TabsContent value="trends">
            <div className="border rounded-lg p-4 h-48 mb-4">
              <p>Contenido de "Trends".</p>
            </div>
          </TabsContent>
        </Tabs>     
      <div className="border rounded-lg p-4 h-48 mb-6">
        {/* Aquí va el contenido principal */}
      </div>
    </main>
  );
}
