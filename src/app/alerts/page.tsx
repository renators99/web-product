import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Alerts() {
  return (
    <main className="py-8 pl-4">
      <h1 className="text-3xl font-bold mb-2">Alertas</h1>
      <p className="text-md mb-6">
        Sube tus productos, configura alertas personalizadas según los precios de tus competidores y recibe notificaciones accionables para responder rápidamente a las fluctuaciones del mercado.
      </p>
      <div className="mb-6">
        <Input placeholder="mail" className="w-full" />
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="font-bold">1. Responsables Comercial</h2>
          <p className="text-sm text-muted-foreground mb-2">
            Los responsables comerciales, serán los correos a donde Price Lab, enviará informes y recomendaciones de Ofertas y Precios para cada producto que se maneja con una etiqueta digital.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Ingrese correo electrónico principal" value="frisso@tmgi.com.pe" />
            <Input placeholder="Ingrese correos de copia (separados por una ,)" value="ksono@pricelabsolutions.com" />
          </div>
        </div>
        <div>
          <h2 className="font-bold">2. Responsables de Soporte</h2>
          <p className="text-sm text-muted-foreground mb-2">
            Los responsables de soporte, serán los correos a donde Price Lab, enviará alertas ante cualquier incidencia con el Hardware en cada tienda.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Ingrese correo electrónico principal" value="frisso@tmgi.com.pe" />
            <Input placeholder="Ingrese correos de copia (separados por una ,)" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Button variant="default" className="bg-gray-800 text-white">
          Guardar información
        </Button>
      </div>
    </main>
  );
}
