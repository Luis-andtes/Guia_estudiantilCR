"use client"

import { useState } from "react"
import {
  Home,
  MapPin,
  BookOpen,
  Clock,
  Newspaper,
  GraduationCap,
  Building,
  Users,
  Globe,
  Phone,
  Mail,
  Menu,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Section = "inicio" | "mapa" | "guia" | "horarios" | "noticias"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>("inicio")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { id: "inicio" as Section, label: "Inicio", icon: Home },
    { id: "mapa" as Section, label: "Mapa del colegio", icon: MapPin },
    { id: "guia" as Section, label: "Guía estudiantil", icon: BookOpen },
    { id: "horarios" as Section, label: "Horarios", icon: Clock },
    { id: "noticias" as Section, label: "Noticias/Comunicados", icon: Newspaper },
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
              <div className="w-32 h-32 bg-white border-4 border-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <div className="text-center">
                  <GraduationCap className="h-12 w-12 text-primary mx-auto mb-1" />
                  <div className="text-xs font-bold text-primary">CRISTO REY</div>
                </div>
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

              <Card className="notion-card cursor-pointer group" onClick={() => setActiveSection("noticias")}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <Newspaper className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg institutional-text">Noticias de Actualidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">Comunicados importantes</p>
                </CardContent>
              </Card>
            </div>

            <div className="notion-card">
              <h3 className="institutional-text text-xl mb-6">Comunicados Recientes</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <Badge className="bg-primary text-primary-foreground">Importante</Badge>
                  <div className="flex-1">
                    <p className="font-medium">Reunión de padres de familia</p>
                    <p className="text-sm text-muted-foreground">25 de Febrero, 2024 - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Evento
                  </Badge>
                  <div className="flex-1">
                    <p className="font-medium">Feria de Ciencias 2024</p>
                    <p className="text-sm text-muted-foreground">20 de Febrero, 2024 - Todo el día</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted border border-border rounded-lg">
                  <Badge variant="outline">Académico</Badge>
                  <div className="flex-1">
                    <p className="font-medium">Inicio de clases segundo período</p>
                    <p className="text-sm text-muted-foreground">15 de Enero, 2024</p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="space-y-8">
            <div>
              <h2 className="institutional-text text-3xl mb-2">Horarios Académicos</h2>
              <p className="text-muted-foreground text-lg">
                Consulta horarios de estudiantes y profesores por jornada académica
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="notion-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="institutional-text text-xl">Horarios de Estudiantes</CardTitle>
                  <CardDescription>Horarios por grado y jornada académica</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 text-sm font-semibold border-b border-border pb-3">
                      <span>Grado</span>
                      <span>Jornada</span>
                      <span>Horario</span>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div className="grid grid-cols-3 gap-4 p-3 bg-primary/5 rounded-lg">
                        <span className="font-medium">6° - 7°</span>
                        <span>Mañana</span>
                        <span className="font-semibold">6:30 AM - 12:30 PM</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-3 bg-secondary/5 rounded-lg">
                        <span className="font-medium">8° - 9°</span>
                        <span>Mañana</span>
                        <span className="font-semibold">6:30 AM - 12:30 PM</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-3 bg-primary/5 rounded-lg">
                        <span className="font-medium">10° - 11°</span>
                        <span>Tarde</span>
                        <span className="font-semibold">12:30 PM - 6:30 PM</span>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Ver Horario Detallado</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="notion-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="institutional-text text-xl">Horarios de Profesores</CardTitle>
                  <CardDescription>Disponibilidad y horarios de atención</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 text-sm font-semibold border-b border-border pb-3">
                      <span>Profesor</span>
                      <span>Materia</span>
                      <span>Atención</span>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div className="grid grid-cols-3 gap-4 p-3 bg-secondary/5 rounded-lg">
                        <span className="font-medium">Prof. García</span>
                        <span>Matemáticas</span>
                        <span className="font-semibold">2:00 - 3:00 PM</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-3 bg-primary/5 rounded-lg">
                        <span className="font-medium">Prof. López</span>
                        <span>Español</span>
                        <span className="font-semibold">10:00 - 11:00 AM</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-3 bg-secondary/5 rounded-lg">
                        <span className="font-medium">Prof. Martínez</span>
                        <span>Ciencias</span>
                        <span className="font-semibold">3:00 - 4:00 PM</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                    >
                      Ver Todos los Profesores
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "noticias":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="institutional-text text-3xl mb-2">Noticias de Actualidad</h2>
              <p className="text-muted-foreground text-lg">
                Mantente informado sobre eventos y comunicados institucionales importantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="notion-card group">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-primary text-primary-foreground">Comunicado Oficial</Badge>
                  <CardTitle className="text-lg institutional-text">Inicio de Clases 2024</CardTitle>
                  <CardDescription className="text-muted-foreground">15 de Enero, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Información importante sobre el inicio del año escolar 2024, horarios académicos, requisitos de
                    matrícula y protocolo de ingreso...
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Leer Comunicado Completo
                  </Button>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-4 bg-secondary text-secondary-foreground">
                    Evento Académico
                  </Badge>
                  <CardTitle className="text-lg institutional-text">Feria de Ciencias 2024</CardTitle>
                  <CardDescription className="text-muted-foreground">20 de Febrero, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Invitamos a toda la comunidad educativa a participar en nuestra feria anual de ciencias. Proyectos
                    innovadores de estudiantes...
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                  >
                    Ver Detalles del Evento
                  </Button>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-primary text-primary-foreground">Reunión Importante</Badge>
                  <CardTitle className="text-lg institutional-text">Reunión de Padres de Familia</CardTitle>
                  <CardDescription className="text-muted-foreground">25 de Febrero, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Convocatoria a reunión general de padres de familia para tratar temas académicos, disciplinarios y
                    proyectos institucionales...
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Confirmar Asistencia
                  </Button>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-4">
                    Rendición de Cuentas
                  </Badge>
                  <CardTitle className="text-lg institutional-text">Informe de Gestión 2023</CardTitle>
                  <CardDescription className="text-muted-foreground">10 de Enero, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Presentación del informe anual de gestión institucional, logros académicos, proyectos realizados y
                    metas para el 2024...
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Descargar Informe
                  </Button>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-4 bg-secondary text-secondary-foreground">
                    Actividad Cultural
                  </Badge>
                  <CardTitle className="text-lg institutional-text">Semana Cultural 2024</CardTitle>
                  <CardDescription className="text-muted-foreground">5 de Marzo, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Celebración de la semana cultural con actividades artísticas, deportivas y académicas. Participación
                    de toda la comunidad educativa...
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors bg-transparent"
                  >
                    Ver Programación
                  </Button>
                </CardContent>
              </Card>

              <Card className="notion-card group">
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-primary text-primary-foreground">Logro Institucional</Badge>
                  <CardTitle className="text-lg institutional-text">Reconocimiento Académico</CardTitle>
                  <CardDescription className="text-muted-foreground">28 de Enero, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Nuestra institución recibió reconocimiento por excelencia académica y calidad educativa por parte
                    del Ministerio de Educación Nacional...
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Leer Reconocimiento
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Ver Todas las Noticias
              </Button>
            </div>
          </div>
        )

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
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-sidebar border-r border-sidebar-border
        transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-sidebar-border bg-primary/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="institutional-text text-base">CRISTO REY</h1>
                <p className="text-xs text-foreground/70 font-medium">Guía Estudiantil Digital</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-2">
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

      <main className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden cristo-rey-header p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-secondary/20 rounded-md transition-colors"
            >
              <Menu className="h-5 w-5 text-secondary-foreground" />
            </button>
            <h1 className="institutional-text text-sm">CRISTO REY</h1>
            <div className="w-9" />
          </div>
        </header>

        <div className="flex-1 p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}
