"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Home,
  MapPin,
  BookOpen,
  Clock,
  GraduationCap,
  Building,
  Users,
  Globe,
  Phone,
  Mail,
  Menu,
  Download,
  Search,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

type Section = "inicio" | "mapa" | "guia" | "horarios"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("inicio")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState("9° A")
  const [teacherSearch, setTeacherSearch] = useState("")

  const teachers = [
    "AIDA INES PEÑA NIÑO",
    "AURA TERESA PORTILLA GARCIA",
    "DIANA ISABEL GONZALEZ ACELAS",
    "DIOVANIS LOPEZ VILLADIEGO",
    "DUVAN FERNEY INFANTE PEÑA",
    "EDDY ARLEY CRISTIANO MEDINA",
    "EDGAR DANILO COLMENARES CONCHA",
    "ELIZABETH DINAS BALTA",
    "ELKIN YESID MARIN VARGAS",
    "GLORIA YAMILE GONZALEZ CORDERO",
    "HECTOR CLODOMIRO ROJAS SANCHEZ",
    "IMER ZABALETA DE LA OSSA",
    "JABITH ALCANTARA NAVARRO",
    "JAIRO ANTONIO GALINDO",
    "JANET CORDOBA",
    "JESUS ALFREDO MIJARES CUBILLOS",
    "JHORMAN CORONADO",
    "JOGNI NIEVES",
    "JORGE ANDRES ALBARRACIN CETINA",
    "JOSE ALEXANDER MIJARES CUBILLOS",
    "JOSE ASDRUBAL PEREZ HERRERA",
    "JOSE IGNACIO GELVEZ",
    "JOSÉ SANTOS PEÑA",
    "KARLA YULIE CARRERO RINCON",
    "KELLY LARITZA BAUTISTA VILLAMIZAR",
    "LEIDY PATRICIA BAUTISTA ALDANA",
    "LINA YOHANA MENDEZ CRISPIN",
    "LISESA SEGURA SARMIENTO",
    "LUIS EFRAIN FRANCO",
    "MARIA DELIA GUAITERO DIAZ",
    "MIGUEL ALEJANDRO PRIETO URQUIOLA",
    "MONICA BERROTERAN BRICEÑO",
    "RICHARD FERNEL CARVAJAL VILLAMIZAR",
    "SONIA ESPERANZA CARRILLO BAYONA",
    "SORANGELA CARDENAS RODRIGUEZ",
    "YEFERSON CAÑIZARES ORTIZ",
    "YURI DE JESUS GUERRERO",
    "ADRIANA CHAVEZ",
    "EVERSON RIVERA",
    "GERSON MENA"
  ]

  const filteredTeachers = teachers.filter(teacher =>
    teacher.toLowerCase().includes(teacherSearch.toLowerCase())
  )

  const sidebarItems = [
    { id: "inicio" as Section, label: "Inicio", icon: Home },
    { id: "mapa" as Section, label: "Mapa del colegio", icon: MapPin },
    { id: "guia" as Section, label: "Guía estudiantil", icon: BookOpen },
    { id: "horarios" as Section, label: "Horarios", icon: Clock },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "inicio":
        return (
          <div className="space-y-8">
            <div className="cristo-rey-banner">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-lg md:text-xl">CON CALIDAD HUMANA... BUSCANDO LA EXCELENCIA</h2>
              </div>
            </div>

            <div className="text-center py-8">
              <div className="w-32 h-32 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl overflow-hidden">
                <Image
                  src="/logo_cristorey-removebg-preview.png"
                  alt="Logo Institución Educativa Cristo Rey"
                  width={128}
                  height={128}
                  priority
                />
              </div>
              <h1 className="institutional-text text-3xl md:text-4xl mb-4">INSTITUCIÓN EDUCATIVA CRISTO REY</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Bienvenido a la guía estudiantil digital de nuestra institución. Encuentra toda la información que
                necesitas sobre nuestras instalaciones, horarios, servicios y comunicados importantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="notion-card cursor-pointer group" onClick={() => setActiveSection("mapa")}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Mapa del Campus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Explora nuestras instalaciones educativas</p>
                </CardContent>
              </Card>

              <Card className="notion-card cursor-pointer group" onClick={() => setActiveSection("guia")}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Guía Estudiantil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Servicios e información institucional</p>
                </CardContent>
              </Card>

              <Card className="notion-card cursor-pointer group" onClick={() => setActiveSection("horarios")}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Horarios Académicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Estudiantes y profesores</p>
                </CardContent>
              </Card>

            </div>

            {/* sección de comunicados removida a solicitud */}
          </div>
        )

      case "mapa":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="institutional-text text-3xl mb-2">Mapa del Campus</h2>
              <p className="text-muted-foreground text-lg">
                Explora nuestras instalaciones educativas y encuentra cualquier ubicación
              </p>
            </div>

            <div className="notion-card">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 h-96 flex items-center justify-center rounded-lg mb-6 border border-primary/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h4 className="institutional-text text-2xl mb-3">Mapa Interactivo del Campus</h4>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Navega por nuestras instalaciones educativas y encuentra ubicaciones específicas dentro del campus
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explorar Mapa Completo
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors">
                  <Building className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-sm">Edificio Principal</p>
                  <p className="text-xs text-muted-foreground mt-1">Administración</p>
                </div>
                <div className="text-center p-6 bg-secondary/5 border border-secondary/20 rounded-lg hover:bg-secondary/10 transition-colors">
                  <BookOpen className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <p className="font-semibold text-sm">Biblioteca</p>
                  <p className="text-xs text-muted-foreground mt-1">Recursos académicos</p>
                </div>
                <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-sm">Cafetería</p>
                  <p className="text-xs text-muted-foreground mt-1">Alimentación</p>
                </div>
                <div className="text-center p-6 bg-secondary/5 border border-secondary/20 rounded-lg hover:bg-secondary/10 transition-colors">
                  <GraduationCap className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <p className="font-semibold text-sm">Laboratorios</p>
                  <p className="text-xs text-muted-foreground mt-1">Ciencias</p>
                </div>
              </div>
            </div>
          </div>
        )

      case "guia":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="institutional-text text-3xl mb-2">Guía Estudiantil</h2>
              <p className="text-muted-foreground text-lg">
                Información completa sobre instalaciones, servicios y normas institucionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="notion-card group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Biblioteca Institucional</CardTitle>
                  <CardDescription>Centro de recursos académicos y estudio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Horario:</span>
                      <span>7:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Capacidad:</span>
                      <span>150 estudiantes</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="secondary" className="text-xs">
                        WiFi Gratuito
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Zona Silenciosa
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <GraduationCap className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Laboratorio de Ciencias</CardTitle>
                  <CardDescription>Prácticas de física, química y biología</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Horario:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Capacidad:</span>
                      <span>30 estudiantes</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge className="text-xs bg-primary">Equipos Modernos</Badge>
                      <Badge variant="outline" className="text-xs">
                        Normas de Seguridad
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Cafetería Escolar</CardTitle>
                  <CardDescription>Alimentación nutritiva y balanceada</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Horario:</span>
                      <span>6:30 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Capacidad:</span>
                      <span>200 personas</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="secondary" className="text-xs">
                        Desayuno
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Almuerzo
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Building className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Gimnasio Polideportivo</CardTitle>
                  <CardDescription>Educación física y eventos institucionales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Horario:</span>
                      <span>7:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Capacidad:</span>
                      <span>300 personas</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge className="text-xs bg-primary">Deportes</Badge>
                      <Badge variant="outline" className="text-xs">
                        Eventos
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Sala de Informática</CardTitle>
                  <CardDescription>Tecnología educativa y conectividad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Horario:</span>
                      <span>7:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Capacidad:</span>
                      <span>40 estudiantes</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge variant="secondary" className="text-xs">
                        Computadores
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Internet
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Enfermería</CardTitle>
                  <CardDescription>Atención médica y primeros auxilios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium">Horario:</span>
                      <span>7:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Personal:</span>
                      <span>Enfermera profesional</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Badge className="text-xs bg-primary">Emergencias</Badge>
                      <Badge variant="outline" className="text-xs">
                        Primeros Auxilios
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "horarios":
        return (
          <div className="space-y-6">
            <Tabs defaultValue="estudiantes" className="w-full">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="institutional-text text-3xl mb-2">Horarios de Estudiantes</h2>
                  <p className="text-muted-foreground text-lg">Consulta los horarios por grado</p>
                </div>
                <div className="flex items-center gap-3">
                  <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6° A">6° A</SelectItem>
                      <SelectItem value="6° B">6° B</SelectItem>
                      <SelectItem value="6° C">6° C</SelectItem>
                      <SelectItem value="6° D">6° D</SelectItem>
                      <SelectItem value="6° E">6° E</SelectItem>
                      <SelectItem value="7° A">7° A</SelectItem>
                      <SelectItem value="7° B">7° B</SelectItem>
                      <SelectItem value="7° C">7° C</SelectItem>
                      <SelectItem value="7° D">7° D</SelectItem>
                      <SelectItem value="7° E">7° E</SelectItem>
                      <SelectItem value="8° A">8° A</SelectItem>
                      <SelectItem value="8° B">8° B</SelectItem>
                      <SelectItem value="8° C">8° C</SelectItem>
                      <SelectItem value="8° D">8° D</SelectItem>
                      <SelectItem value="8° E">8° E</SelectItem>
                      <SelectItem value="9° A">9° A</SelectItem>
                      <SelectItem value="9° B">9° B</SelectItem>
                      <SelectItem value="9° C">9° C</SelectItem>
                      <SelectItem value="9° D">9° D</SelectItem>
                      <SelectItem value="10° A">10° A</SelectItem>
                      <SelectItem value="10° B">10° B</SelectItem>
                      <SelectItem value="10° C">10° C</SelectItem>
                      <SelectItem value="11° A">11° A</SelectItem>
                      <SelectItem value="11° B">11° B</SelectItem>
                      <SelectItem value="11° C">11° C</SelectItem>
                      <SelectItem value="11° D">11° D</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar
                  </Button>
                </div>
              </div>

              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="estudiantes">Estudiantes</TabsTrigger>
                <TabsTrigger value="profesores">Profesores</TabsTrigger>
              </TabsList>

              <TabsContent value="estudiantes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" />
                      Horario {selectedGrade}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">Hora</th>
                            <th className="text-left p-3 font-semibold">Lunes</th>
                            <th className="text-left p-3 font-semibold">Martes</th>
                            <th className="text-left p-3 font-semibold">Miércoles</th>
                            <th className="text-left p-3 font-semibold">Jueves</th>
                            <th className="text-left p-3 font-semibold">Viernes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Horario para grados 6° a 9° (5:50 AM - 11:50 AM) */}
                          {!selectedGrade.includes("10") && !selectedGrade.includes("11") ? (
                            <>
                              <tr className="border-b">
                                <td className="p-3 font-medium">5:50-6:40</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aida Peña</div>
                                    <Badge variant="secondary" className="text-xs mt-1">101</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Español</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aura Portilla</div>
                                    <Badge variant="secondary" className="text-xs mt-1">102</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Ciencias Naturales</div>
                                    <div className="text-sm text-muted-foreground">Prof. Diana González</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 1</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aida Peña</div>
                                    <Badge variant="secondary" className="text-xs mt-1">101</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Historia</div>
                                    <div className="text-sm text-muted-foreground">Prof. Edgar Colmenares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">103</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">6:40-7:30</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Español</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aura Portilla</div>
                                    <Badge variant="secondary" className="text-xs mt-1">102</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Inglés</div>
                                    <div className="text-sm text-muted-foreground">Prof. Elizabeth Dinas</div>
                                    <Badge variant="secondary" className="text-xs mt-1">104</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aida Peña</div>
                                    <Badge variant="secondary" className="text-xs mt-1">101</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Ciencias Naturales</div>
                                    <div className="text-sm text-muted-foreground">Prof. Diana González</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 1</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Geografía</div>
                                    <div className="text-sm text-muted-foreground">Prof. Edgar Colmenares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">103</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-3 font-medium text-blue-600">7:40-8:00</td>
                                <td colSpan={5} className="p-3 text-center text-blue-600 font-medium">DESCANSO</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">8:00-8:50</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Educación Física</div>
                                    <div className="text-sm text-muted-foreground">Prof. Elkin Marín</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Gimnasio</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Arte</div>
                                    <div className="text-sm text-muted-foreground">Prof. Gloria González</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Taller</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Inglés</div>
                                    <div className="text-sm text-muted-foreground">Prof. Elizabeth Dinas</div>
                                    <Badge variant="secondary" className="text-xs mt-1">104</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Historia</div>
                                    <div className="text-sm text-muted-foreground">Prof. Edgar Colmenares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">103</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Música</div>
                                    <div className="text-sm text-muted-foreground">Prof. Hector Rojas</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Aula Música</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">8:50-9:40</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Religión</div>
                                    <div className="text-sm text-muted-foreground">Prof. Imer Zabaleta</div>
                                    <Badge variant="secondary" className="text-xs mt-1">105</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aida Peña</div>
                                    <Badge variant="secondary" className="text-xs mt-1">101</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Español</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aura Portilla</div>
                                    <Badge variant="secondary" className="text-xs mt-1">102</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Inglés</div>
                                    <div className="text-sm text-muted-foreground">Prof. Elizabeth Dinas</div>
                                    <Badge variant="secondary" className="text-xs mt-1">104</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Ciencias Naturales</div>
                                    <div className="text-sm text-muted-foreground">Prof. Diana González</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 1</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-3 font-medium text-blue-600">9:45-10:05</td>
                                <td colSpan={5} className="p-3 text-center text-blue-600 font-medium">DESCANSO</td>
                              </tr>
                              <tr>
                                <td className="p-3 font-medium">10:05-11:50</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aida Peña</div>
                                    <Badge variant="secondary" className="text-xs mt-1">101</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Aura Portilla</div>
                                    <Badge variant="secondary" className="text-xs mt-1">102</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Diana González</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 1</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Edgar Colmenares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">103</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Elizabeth Dinas</div>
                                    <Badge variant="secondary" className="text-xs mt-1">104</Badge>
                                  </div>
                                </td>
                              </tr>
                            </>
                          ) : (
                            /* Horario para grados 10° y 11° (5:50 AM - 2:20 PM L,M,V / 5:50 AM - 3:15 PM M,J) */
                            <>
                              <tr className="border-b">
                                <td className="p-3 font-medium">5:50-6:40</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jabith Alcantara</div>
                                    <Badge variant="secondary" className="text-xs mt-1">201</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Español</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jairo Galindo</div>
                                    <Badge variant="secondary" className="text-xs mt-1">202</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Física</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jesus Mijares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 2</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jabith Alcantara</div>
                                    <Badge variant="secondary" className="text-xs mt-1">201</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Historia</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jorge Albarracín</div>
                                    <Badge variant="secondary" className="text-xs mt-1">203</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">6:40-7:30</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Español</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jairo Galindo</div>
                                    <Badge variant="secondary" className="text-xs mt-1">202</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Inglés</div>
                                    <div className="text-sm text-muted-foreground">Prof. Janet Cordoba</div>
                                    <Badge variant="secondary" className="text-xs mt-1">204</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jabith Alcantara</div>
                                    <Badge variant="secondary" className="text-xs mt-1">201</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Química</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jesus Mijares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 2</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Geografía</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jorge Albarracín</div>
                                    <Badge variant="secondary" className="text-xs mt-1">203</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-3 font-medium text-blue-600">7:40-8:00</td>
                                <td colSpan={5} className="p-3 text-center text-blue-600 font-medium">DESCANSO</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">8:00-8:50</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Educación Física</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jhorman Coronado</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Gimnasio</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Arte</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jogni Nieves</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Taller</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Inglés</div>
                                    <div className="text-sm text-muted-foreground">Prof. Janet Cordoba</div>
                                    <Badge variant="secondary" className="text-xs mt-1">204</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Historia</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jorge Albarracín</div>
                                    <Badge variant="secondary" className="text-xs mt-1">203</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Música</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jose Santos</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Aula Música</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">8:50-9:40</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Religión</div>
                                    <div className="text-sm text-muted-foreground">Prof. Karla Carrero</div>
                                    <Badge variant="secondary" className="text-xs mt-1">205</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jabith Alcantara</div>
                                    <Badge variant="secondary" className="text-xs mt-1">201</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Español</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jairo Galindo</div>
                                    <Badge variant="secondary" className="text-xs mt-1">202</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Inglés</div>
                                    <div className="text-sm text-muted-foreground">Prof. Janet Cordoba</div>
                                    <Badge variant="secondary" className="text-xs mt-1">204</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Biología</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jesus Mijares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 2</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-3 font-medium text-blue-600">9:45-10:05</td>
                                <td colSpan={5} className="p-3 text-center text-blue-600 font-medium">DESCANSO</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-3 font-medium">10:05-11:50</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Informática</div>
                                    <div className="text-sm text-muted-foreground">Prof. Kelly Bautista</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab Sistemas</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Filosofía</div>
                                    <div className="text-sm text-muted-foreground">Prof. Leidy Bautista</div>
                                    <Badge variant="secondary" className="text-xs mt-1">206</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Matemáticas</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jabith Alcantara</div>
                                    <Badge variant="secondary" className="text-xs mt-1">201</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Español</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jairo Galindo</div>
                                    <Badge variant="secondary" className="text-xs mt-1">202</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Química</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jesus Mijares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 2</Badge>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-3 font-medium text-green-600">11:50-12:30</td>
                                <td colSpan={5} className="p-3 text-center text-green-600 font-medium">ALMUERZO</td>
                              </tr>
                              <tr>
                                <td className="p-3 font-medium">12:30-2:20</td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jabith Alcantara</div>
                                    <Badge variant="secondary" className="text-xs mt-1">201</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jairo Galindo</div>
                                    <Badge variant="secondary" className="text-xs mt-1">202</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jesus Mijares</div>
                                    <Badge variant="secondary" className="text-xs mt-1">Lab 2</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Jorge Albarracín</div>
                                    <Badge variant="secondary" className="text-xs mt-1">203</Badge>
                                  </div>
                                </td>
                                <td className="p-3">
                                  <div>
                                    <div className="font-semibold">Tutoría</div>
                                    <div className="text-sm text-muted-foreground">Prof. Janet Cordoba</div>
                                    <Badge variant="secondary" className="text-xs mt-1">204</Badge>
                                  </div>
                                </td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profesores" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Horarios de Profesores
                    </CardTitle>
                    <CardDescription>Busca y consulta los horarios de los docentes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Buscar profesor por nombre..."
                          value={teacherSearch}
                          onChange={(e) => setTeacherSearch(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {filteredTeachers.length} de {teachers.length} profesores
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        {filteredTeachers.map((teacher, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="font-semibold text-sm">{teacher}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {teacher.includes("GARCIA") || teacher.includes("GONZALEZ") ? "Matemáticas" :
                               teacher.includes("MARTINEZ") || teacher.includes("RODRIGUEZ") ? "Español" :
                               teacher.includes("LOPEZ") || teacher.includes("PEREZ") ? "Ciencias" :
                               teacher.includes("GALINDO") || teacher.includes("FRANCO") ? "Educación Física" :
                               teacher.includes("CORDOBA") || teacher.includes("CHAVEZ") ? "Arte" :
                               teacher.includes("PRIETO") || teacher.includes("CARVAJAL") ? "Informática" :
                               teacher.includes("CARRILLO") || teacher.includes("CARDENAS") ? "Historia" :
                               teacher.includes("GUERRERO") || teacher.includes("RIVERA") ? "Inglés" :
                               "Asignatura por definir"}
                            </div>
                            <div className="text-xs font-medium mt-2 text-primary">
                              {index % 3 === 0 ? "8:00 - 10:00 AM" :
                               index % 3 === 1 ? "10:00 - 12:00 PM" :
                               "2:00 - 4:00 PM"}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {filteredTeachers.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          No se encontraron profesores con ese nombre
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )

      // sección noticias removida

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-sidebar border-r border-sidebar-border h-screen overflow-hidden
        transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="p-6 border-b border-sidebar-border bg-primary/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-primary shadow-md">
                <Image src="/logo_cristorey-removebg-preview.png" alt="Logo Cristo Rey" width={48} height={48} />
              </div>
              <div>
                <h1 className="institutional-text text-base">CRISTO REY</h1>
                <p className="text-xs text-foreground/70 font-medium">Guía Estudiantil Digital</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 overflow-hidden">
            <div className="space-y-2 h-full overflow-y-auto">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setSidebarOpen(false)
                    }}
                    className={`sidebar-item w-full text-left ${activeSection === item.id ? "active" : ""}`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </nav>

          <div className="p-4 border-t border-sidebar-border bg-secondary/5">
            <div className="text-xs text-muted-foreground space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-primary" />
                <span>(XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 text-primary" />
                <span>info@cristorey.edu.co</span>
              </div>
              <div className="pt-2 border-t border-sidebar-border/50">
                <p className="text-xs font-medium text-primary">Con Calidad Humana</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 lg:ml-72">
        <header className="lg:hidden cristo-rey-header p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-secondary/20 rounded-md transition-colors"
            >
              <Menu className="h-5 w-5 text-secondary-foreground" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden bg-white border border-primary">
                <Image src="/logo_cristorey-removebg-preview.png" alt="Logo" width={28} height={28} />
              </div>
              <h1 className="institutional-text text-sm">CRISTO REY</h1>
            </div>
            <div className="w-3" />
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}
