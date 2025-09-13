"use client"

import { useState } from "react"
import { MapPin, Search, Building2, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const campusLocations = [
  {
    id: 1,
    name: "Edificio Principal",
    type: "Administrativo",
    description: "Oficinas administrativas, dirección y secretaría",
    x: 30,
    y: 40,
  },
  { id: 2, name: "Biblioteca", type: "Académico", description: "Biblioteca central con sala de estudio", x: 60, y: 30 },
  {
    id: 3,
    name: "Laboratorio de Ciencias",
    type: "Académico",
    description: "Laboratorios de química, física y biología",
    x: 70,
    y: 60,
  },
  { id: 4, name: "Cafetería", type: "Servicios", description: "Comedor estudiantil y área de descanso", x: 20, y: 70 },
  { id: 5, name: "Gimnasio", type: "Deportivo", description: "Gimnasio cubierto y canchas deportivas", x: 80, y: 20 },
  { id: 6, name: "Auditorium", type: "Académico", description: "Salón de actos y presentaciones", x: 40, y: 80 },
  { id: 7, name: "Enfermería", type: "Servicios", description: "Atención médica básica", x: 50, y: 20 },
  { id: 8, name: "Salones 1er Piso", type: "Académico", description: "Aulas 101-110", x: 45, y: 50 },
  { id: 9, name: "Salones 2do Piso", type: "Académico", description: "Aulas 201-210", x: 45, y: 45 },
  {
    id: 10,
    name: "Laboratorio de Computación",
    type: "Académico",
    description: "Sala de sistemas y tecnología",
    x: 65,
    y: 40,
  },
]

const typeColors = {
  Académico: "bg-blue-500",
  Administrativo: "bg-primary",
  Servicios: "bg-green-500",
  Deportivo: "bg-orange-500",
}

export default function MapaPage() {
  const [selectedLocation, setSelectedLocation] = useState<(typeof campusLocations)[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLocations = campusLocations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6" />
              <h1 className="text-xl font-bold">Mapa del Colegio</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span>Campus Interactivo</span>
                </CardTitle>
                <CardDescription>Haz clic en cualquier ubicación para ver más información</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-green-50 rounded-lg h-96 overflow-hidden border-2 border-border">
                  {/* Campus Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200">
                    {/* Paths */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path
                        d="M 0,200 Q 200,150 400,200 T 800,200"
                        stroke="#8B5CF6"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.3"
                      />
                      <path d="M 200,0 L 200,400" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.3" />
                      <path d="M 400,0 L 400,400" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.3" />
                    </svg>
                  </div>

                  {/* Location Markers */}
                  {filteredLocations.map((location) => (
                    <button
                      key={location.id}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg ${typeColors[location.type as keyof typeof typeColors]} ${selectedLocation?.id === location.id ? "ring-4 ring-primary/30" : ""}`}
                      style={{ left: `${location.x}%`, top: `${location.y}%` }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <span className="sr-only">{location.name}</span>
                    </button>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {Object.entries(typeColors).map(([type, color]) => (
                    <div key={type} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${color}`}></div>
                      <span className="text-sm text-muted-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Buscar Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar salón, edificio..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Selected Location Info */}
            {selectedLocation && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {selectedLocation.name}
                    <Badge variant="secondary">{selectedLocation.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{selectedLocation.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Tipo:</span>
                      <span>{selectedLocation.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Estado:</span>
                      <span className="text-green-600">Disponible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Locations List */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Todas las Ubicaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {filteredLocations.map((location) => (
                    <button
                      key={location.id}
                      className={`w-full text-left p-3 rounded-lg border transition-colors hover:bg-muted/50 ${selectedLocation?.id === location.id ? "bg-primary/10 border-primary" : "border-border"}`}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{location.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {location.type}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
