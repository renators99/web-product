import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import data from "@/data/data.json";

export default function PriceTracker() {
  const { totalProductos, ultimaActualizacion } = data;

  return (
    <main className="py-8 pl-4">
      <h1 className="text-3xl font-bold mb-2">Tracker de precios</h1>
      <p className="text-md mb-6">
        Monitorea los precios de tus competidores, establece estrategias de precios efectivas y responde rápidamente a las fluctuaciones del mercado.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total de productos trackeados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalProductos}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Última actualización</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{ultimaActualizacion}</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center mb-6">
        <div className="flex-grow mr-4">
          <Input
            type="text"
            placeholder="Buscar por nombre, tu sku o del sku de tu competidor..."
            className="w-full p-4 border rounded-lg"
          />
        </div>
        <Button variant="outline">Filtros</Button>
      </div>
      <div className="border rounded-lg p-4 h-48 mb-6"></div>
      <div className="border rounded-lg p-4 h-48 mb-6"></div>
      <div className="border rounded-lg p-4 h-48"></div>
      <div className="flex justify-between mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Items por página" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Items por página</SelectLabel>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </main>
  );
}
