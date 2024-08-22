export default function PriceTracker() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-2">Tracker de precios</h1>
      <p className="text-md mb-6">
        Monitorea los precios de tus competidores, establece estrategias de precios efectivas y responde rápidamente a las fluctuaciones del mercado.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold">Total de productos trackeados</h2>
          <p className="text-2xl font-bold">1450</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-lg font-semibold">Última actualización</h2>
          <p className="text-2xl font-bold">1/2/2034</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div className="flex-grow mr-4">
          <input
            type="text"
            placeholder="🔍 Buscar por nombre, tu sku o del sku de tu competidor..."
            className="w-full p-4 border rounded-lg"
          />
        </div>
        <button className="p-4 border rounded-lg bg-gray-200">Filtros</button>
      </div>
      <div className="border rounded-lg p-4 h-48 mb-6"></div>
      <div className="border rounded-lg p-4 h-48 mb-6"></div>
      <div className="border rounded-lg p-4 h-48"></div>
      <div className="flex justify-between mt-6">
        <button className="p-4 border rounded-lg bg-blue-100">Paginación</button>
        <button className="p-4 border rounded-lg bg-blue-100">Load X</button>
      </div>
    </main>
  );
}
