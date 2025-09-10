import { ArrowLeft, Building2, Users, Shield, Monitor, BookOpen, Heart, Utensils, Dumbbell } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const facilities = [
  {
    id: 1,
    name: "Biblioteca Central",
    category: "Académico",
    description: "Amplia colección de libros, revistas y recursos digitales. Salas de estudio individual y grupal.",
    hours: "Lunes a Viernes: 7:00 AM - 6:00 PM",
    capacity: "150 estudiantes",
    icon: BookOpen,
    features: ["WiFi gratuito", "Computadoras disponibles", "Salas de estudio", "Impresión"],
  },
  {
    id: 2,
    name: "Laboratorio de Ciencias",
    category: "Académico",
    description: "Laboratorios equipados para química, física y biología con material de última generación.",
    hours: "Lunes a Viernes: 8:00 AM - 5:00 PM",
    capacity: "30 estudiantes por sesión",
    icon: Monitor,
    features: ["Equipos especializados", "Medidas de seguridad", "Supervisión docente", "Material incluido"],
  },
  {
    id: 3,
    name: "Cafetería Estudiantil",
    category: "Servicios",
    description: "Comedor con variedad de opciones saludables y nutritivas para toda la comunidad educativa.",
    hours: "Lunes a Viernes: 6:30 AM - 4:00 PM",
    capacity: "200 comensales",
    icon: Utensils,
    features: ["Menú balanceado", "Opciones vegetarianas", "Precios accesibles", "Área de descanso"],
  },
  {
    id: 4,
    name: "Gimnasio y Canchas",
    category: "Deportivo",
    description: "Instalaciones deportivas completas incluyendo gimnasio cubierto y canchas al aire libre.",
    hours: "Lunes a Viernes: 6:00 AM - 8:00 PM",
    capacity: "Varía según actividad",
    icon: Dumbbell,
    features: ["Gimnasio cubierto", "Canchas múltiples", "Vestuarios", "Equipos deportivos"],
  },
  {
    id: 5,
    name: "Enfermería",
    category: "Servicios",
    description: "Atención médica básica y primeros auxilios para toda la comunidad educativa.",
    hours: "Lunes a Viernes: 7:00 AM - 5:00 PM",
    capacity: "Atención individual",
    icon: Heart,
    features: ["Enfermera titulada", "Primeros auxilios", "Medicamentos básicos", "Contacto con padres"],
  },
  {
    id: 6,
    name: "Sala de Sistemas",
    category: "Académico",
    description: "Laboratorio de computación con equipos modernos para clases de tecnología e informática.",
    hours: "Lunes a Viernes: 7:00 AM - 6:00 PM",
    capacity: "35 estudiantes",
    icon: Monitor,
    features: ["Computadoras modernas", "Software educativo", "Internet de alta velocidad", "Proyector"],
  },
]

const services = [
  {
    title: "Plataformas Digitales",
    description: "Acceso a plataformas educativas y recursos en línea",
    items: ["Portal estudiantil", "Biblioteca digital", "Aula virtual", "Correo institucional"],
  },
  {
    title: "Servicios Administrativos",
    description: "Trámites y gestiones académicas",
    items: ["Certificados", "Constancias", "Pagos en línea", "Citas con coordinadores"],
  },
  {
    title: "Apoyo Estudiantil",
    description: "Servicios de bienestar y orientación",
    items: ["Orientación psicológica", "Tutorías académicas", "Becas y ayudas", "Actividades extracurriculares"],
  },
]

const rules = [
  "Respetar los horarios establecidos para cada instalación",
  "Mantener el orden y la limpieza en todas las áreas",
  "Usar adecuadamente los equipos y materiales",
  "Seguir las indicaciones del personal docente y administrativo",
  "Portar el uniforme completo durante el horario escolar",
  "No consumir alimentos en aulas y laboratorios",
  "Mantener silencio en biblioteca y salas de estudio",
  "Reportar cualquier daño o incidente al personal correspondiente",
]

export default function GuiaPage() {
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
              <BookOpen className="h-6 w-6" />
              <h1 className="text-xl font-bold">Guía Estudiantil</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Instalaciones */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Building2 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Instalaciones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => {
              const IconComponent = facility.icon
              return (
                <Card key={facility.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{facility.name}</CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {facility.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">{facility.description}</CardDescription>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Horarios:</span>
                        <p className="text-muted-foreground">{facility.hours}</p>
                      </div>
                      <div>
                        <span className="font-medium">Capacidad:</span>
                        <p className="text-muted-foreground">{facility.capacity}</p>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-sm">Características:</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {facility.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Servicios */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Servicios</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reglamento */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Reglamento Básico</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Normas de Convivencia</CardTitle>
              <CardDescription>Reglas importantes para mantener un ambiente de aprendizaje óptimo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
