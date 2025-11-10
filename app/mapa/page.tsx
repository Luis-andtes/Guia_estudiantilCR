"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Search, Building2, ArrowLeft, ZoomIn, ZoomOut, RotateCcw, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

// Tipos de ubicaciones
type LocationType = "Académico" | "Administrativo" | "Servicios" | "Deportivo"

interface CampusLocation {
  id: number
  name: string
  type: LocationType
  description: string
  x: number // Porcentaje de posición X (0-100)
  y: number // Porcentaje de posición Y (0-100)
  floor?: string // Piso (opcional)
  building?: string // Edificio (opcional)
}

// Lista de ubicaciones del campus
const campusLocations: CampusLocation[] = [
  {
    id: 1,
    name: "Edificio Principal",
    type: "Administrativo",
    description: "Oficinas administrativas, dirección y secretaría académica",
    x: 30,
    y: 40,
    building: "Edificio A",
    floor: "Planta Baja",
  },
  {
    id: 2,
    name: "Biblioteca",
    type: "Académico",
    description: "Biblioteca central con sala de estudio y recursos académicos",
    x: 60,
    y: 30,
    building: "Edificio B",
    floor: "2do Piso",
  },
  {
    id: 3,
    name: "Laboratorio de Ciencias",
    type: "Académico",
    description: "Laboratorios de química, física y biología con equipos modernos",
    x: 70,
    y: 60,
    building: "Edificio C",
    floor: "1er Piso",
  },
  {
    id: 4,
    name: "Cafetería",
    type: "Servicios",
    description: "Comedor estudiantil y área de descanso",
    x: 20,
    y: 70,
    building: "Edificio D",
    floor: "Planta Baja",
  },
  {
    id: 5,
    name: "Gimnasio",
    type: "Deportivo",
    description: "Gimnasio cubierto y canchas deportivas",
    x: 80,
    y: 20,
    building: "Edificio E",
    floor: "Planta Baja",
  },
  {
    id: 6,
    name: "Auditorium",
    type: "Académico",
    description: "Salón de actos y presentaciones con capacidad para 300 personas",
    x: 40,
    y: 80,
    building: "Edificio A",
    floor: "2do Piso",
  },
  {
    id: 7,
    name: "Enfermería",
    type: "Servicios",
    description: "Atención médica básica y primeros auxilios",
    x: 50,
    y: 20,
    building: "Edificio A",
    floor: "Planta Baja",
  },
  {
    id: 8,
    name: "Aulas 101-110",
    type: "Académico",
    description: "Salones de clase del primer piso",
    x: 45,
    y: 50,
    building: "Edificio A",
    floor: "1er Piso",
  },
  {
    id: 9,
    name: "Aulas 201-210",
    type: "Académico",
    description: "Salones de clase del segundo piso",
    x: 45,
    y: 45,
    building: "Edificio A",
    floor: "2do Piso",
  },
  {
    id: 10,
    name: "Laboratorio de Computación",
    type: "Académico",
    description: "Sala de sistemas y tecnología con 40 computadores",
    x: 65,
    y: 40,
    building: "Edificio B",
    floor: "1er Piso",
  },
]

const typeColors: Record<LocationType, string> = {
  Académico: "bg-blue-500",
  Administrativo: "bg-primary",
  Servicios: "bg-green-500",
  Deportivo: "bg-orange-500",
}

const typeIcons: Record<LocationType, string> = {
  Académico: "📚",
  Administrativo: "🏢",
  Servicios: "🛎️",
  Deportivo: "⚽",
}

export default function MapaPage() {
  const [selectedLocation, setSelectedLocation] = useState<CampusLocation | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<LocationType | "all">("all")
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Filtrar ubicaciones
  const filteredLocations = campusLocations.filter((location) => {
    const matchesSearch =
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (location.building && location.building.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesType = selectedType === "all" || location.type === selectedType

    return matchesSearch && matchesType
  })

  // Manejar zoom
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5))
  }

  const handleReset = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  // Manejar pan (arrastrar)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      // Solo botón izquierdo
      setIsDragging(true)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Centrar en ubicación seleccionada
  const centerOnLocation = (location: CampusLocation) => {
    if (mapContainerRef.current) {
      const container = mapContainerRef.current
      const containerWidth = container.offsetWidth
      const containerHeight = container.offsetHeight

      // Calcular posición centrada
      const x = (location.x / 100) * containerWidth - containerWidth / 2
      const y = (location.y / 100) * containerHeight - containerHeight / 2

      setPan({ x: -x, y: -y })
      setZoom(1.5) // Zoom al seleccionar
    }
  }

  // Cuando se selecciona una ubicación desde la lista, centrar en ella
  useEffect(() => {
    if (selectedLocation) {
      centerOnLocation(selectedLocation)
    }
  }, [selectedLocation])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Building2 className="h-5 w-5" />
                      <span>Campus Interactivo</span>
                    </CardTitle>
                    <CardDescription>Haz clic en cualquier ubicación para ver más información</CardDescription>
                  </div>
                  {/* Controles de Zoom */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleZoomOut}
                      disabled={zoom <= 0.5}
                      title="Alejar"
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
                      {Math.round(zoom * 100)}%
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleZoomIn}
                      disabled={zoom >= 3}
                      title="Acercar"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleReset} title="Restablecer">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  ref={mapContainerRef}
                  className="relative bg-muted/30 rounded-lg h-[600px] overflow-hidden border-2 border-border cursor-grab active:cursor-grabbing"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {/* Contenedor del mapa con transformaciones */}
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                      transformOrigin: "center center",
                      transition: isDragging ? "none" : "transform 0.1s ease-out",
                    }}
                  >
                    {/* Imagen de fondo del mapa */}
                    <div className="relative w-full h-full">
                      {/* Placeholder: Si no hay imagen, mostrar un fondo con grid */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
                        {/* Grid de fondo */}
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                            backgroundSize: "50px 50px",
                          }}
                        />
                        {/* Mensaje placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-8 bg-white/80 rounded-lg shadow-lg max-w-md">
                            <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Mapa del Colegio</h3>
                            <p className="text-sm text-muted-foreground">
                              Para mostrar el mapa, agrega una imagen en: <br />
                              <code className="text-xs bg-muted p-1 rounded">public/mapa/plano-colegio.png</code>
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              El mapa funcionará automáticamente cuando agregues la imagen
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Imagen del mapa (se mostrará si existe) */}
                      <Image
                        src="/mapa/plano-colegio.png"
                        alt="Plano del colegio"
                        fill
                        className="object-contain"
                        style={{ display: "none" }} // Ocultar por defecto hasta que se agregue la imagen
                        onError={(e) => {
                          // Si la imagen no existe, ocultarla
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                        }}
                        onLoad={(e) => {
                          // Si la imagen existe, mostrarla
                          const target = e.target as HTMLImageElement
                          target.style.display = "block"
                          // Ocultar el placeholder
                          const placeholder = target.parentElement?.querySelector(".absolute.inset-0.bg-gradient")
                          if (placeholder) {
                            ;(placeholder as HTMLElement).style.display = "none"
                          }
                        }}
                      />
                    </div>

                    {/* Location Markers */}
                    {filteredLocations.map((location) => (
                      <button
                        key={location.id}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group z-10 ${
                          selectedLocation?.id === location.id ? "z-20" : ""
                        }`}
                        style={{ left: `${location.x}%`, top: `${location.y}%` }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedLocation(location)
                        }}
                        title={location.name}
                      >
                        {/* Marcador */}
                        <div
                          className={`w-6 h-6 rounded-full border-2 border-white shadow-lg transition-all ${
                            typeColors[location.type]
                          } ${selectedLocation?.id === location.id ? "ring-4 ring-primary/50 scale-125" : "hover:scale-110"}`}
                        >
                          <span className="sr-only">{location.name}</span>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                            {location.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Leyenda */}
                <div className="mt-4 flex flex-wrap gap-4 items-center">
                  <span className="text-sm font-medium text-muted-foreground">Leyenda:</span>
                  {Object.entries(typeColors).map(([type, color]) => (
                    <div key={type} className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-full ${color} border-2 border-white shadow`}></div>
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
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Buscar Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar salón, edificio..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                {/* Filtro por tipo */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <Select value={selectedType} onValueChange={(value) => setSelectedType(value as LocationType | "all")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Filtrar por tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los tipos</SelectItem>
                      <SelectItem value="Académico">Académico</SelectItem>
                      <SelectItem value="Administrativo">Administrativo</SelectItem>
                      <SelectItem value="Servicios">Servicios</SelectItem>
                      <SelectItem value="Deportivo">Deportivo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-xs text-muted-foreground">
                  {filteredLocations.length} ubicación{filteredLocations.length !== 1 ? "es" : ""} encontrada
                  {filteredLocations.length !== 1 ? "s" : ""}
                </div>
              </CardContent>
            </Card>

            {/* Selected Location Info */}
            {selectedLocation && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{selectedLocation.name}</span>
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
                    {selectedLocation.building && (
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Edificio:</span>
                        <span>{selectedLocation.building}</span>
                      </div>
                    )}
                    {selectedLocation.floor && (
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Piso:</span>
                        <span>{selectedLocation.floor}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Estado:</span>
                      <span className="text-green-600 font-medium">Disponible</span>
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
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredLocations.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No se encontraron ubicaciones</p>
                      <p className="text-xs mt-2">Intenta con otros términos de búsqueda</p>
                    </div>
                  ) : (
                    filteredLocations.map((location) => (
                      <button
                        key={location.id}
                        className={`w-full text-left p-3 rounded-lg border transition-colors hover:bg-muted/50 ${
                          selectedLocation?.id === location.id
                            ? "bg-primary/10 border-primary shadow-sm"
                            : "border-border"
                        }`}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm flex items-center gap-2">
                            <span>{typeIcons[location.type]}</span>
                            {location.name}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {location.type}
                          </Badge>
                        </div>
                        {location.building && (
                          <p className="text-xs text-muted-foreground">{location.building}</p>
                        )}
                      </button>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
