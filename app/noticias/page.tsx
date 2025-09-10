import { ArrowLeft, Newspaper, Calendar, User, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const news = [
  {
    id: 1,
    title: "Inicio del Segundo Semestre 2024",
    category: "Académico",
    date: "2024-08-15",
    author: "Dirección Académica",
    excerpt: "Información importante sobre el inicio del segundo semestre académico, horarios y nuevas medidas.",
    content:
      "El segundo semestre académico iniciará el próximo lunes 19 de agosto. Se han implementado nuevos horarios para optimizar el tiempo de aprendizaje...",
    priority: "high",
  },
  {
    id: 2,
    title: "Feria de Ciencias 2024",
    category: "Eventos",
    date: "2024-08-10",
    author: "Departamento de Ciencias",
    excerpt: "Invitación a participar en la Feria de Ciencias anual. Inscripciones abiertas hasta el 30 de agosto.",
    content:
      "La Feria de Ciencias 2024 se realizará el 15 de septiembre. Los estudiantes pueden presentar proyectos en las categorías de Biología, Química, Física y Tecnología...",
    priority: "medium",
  },
  {
    id: 3,
    title: "Nuevos Horarios de Biblioteca",
    category: "Servicios",
    date: "2024-08-08",
    author: "Biblioteca Central",
    excerpt: "La biblioteca extiende sus horarios de atención para brindar mejor servicio a la comunidad estudiantil.",
    content:
      "A partir del 12 de agosto, la biblioteca estará abierta de lunes a viernes de 7:00 AM a 7:00 PM, y los sábados de 8:00 AM a 2:00 PM...",
    priority: "low",
  },
  {
    id: 4,
    title: "Mantenimiento del Sistema de Agua",
    category: "Mantenimiento",
    date: "2024-08-05",
    author: "Servicios Generales",
    excerpt: "Programación de mantenimiento preventivo del sistema de agua potable del colegio.",
    content:
      "El próximo miércoles 14 de agosto se realizará mantenimiento del sistema de agua entre las 8:00 AM y 12:00 PM. Se recomienda traer agua personal...",
    priority: "high",
  },
  {
    id: 5,
    title: "Torneo Intercolegial de Fútbol",
    category: "Deportes",
    date: "2024-08-03",
    author: "Departamento de Deportes",
    excerpt: "Nuestro equipo de fútbol participará en el torneo intercolegial. ¡Ven a apoyar!",
    content:
      "El equipo de fútbol del colegio participará en el torneo intercolegial que se realizará los fines de semana de septiembre...",
    priority: "medium",
  },
  {
    id: 6,
    title: "Reunión de Padres de Familia",
    category: "Administrativo",
    date: "2024-08-01",
    author: "Coordinación Académica",
    excerpt: "Convocatoria a reunión general de padres de familia para el próximo viernes 16 de agosto.",
    content:
      "Se convoca a todos los padres de familia a la reunión general que se realizará el viernes 16 de agosto a las 6:00 PM en el auditorium...",
    priority: "high",
  },
]

const categoryColors = {
  Académico: "bg-blue-500",
  Eventos: "bg-green-500",
  Servicios: "bg-purple-500",
  Mantenimiento: "bg-orange-500",
  Deportes: "bg-yellow-500",
  Administrativo: "bg-primary",
}

const priorityColors = {
  high: "border-l-red-500",
  medium: "border-l-yellow-500",
  low: "border-l-green-500",
}

export default function NoticiasPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "Hace 1 día"
    if (diffDays < 7) return `Hace ${diffDays} días`
    if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`
    return `Hace ${Math.floor(diffDays / 30)} meses`
  }

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
              <Newspaper className="h-6 w-6" />
              <h1 className="text-xl font-bold">Noticias y Comunicados</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Mantente Informado</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Encuentra las últimas noticias, comunicados importantes y eventos de nuestra comunidad educativa
          </p>
        </div>

        {/* Priority News */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <span>Comunicados Importantes</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {news
              .filter((item) => item.priority === "high")
              .map((item) => (
                <Card
                  key={item.id}
                  className={`border-l-4 ${priorityColors[item.priority]} hover:shadow-lg transition-shadow`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${categoryColors[item.category as keyof typeof categoryColors]} text-white`}>
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{getTimeAgo(item.date)}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 leading-relaxed">{item.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* All News */}
        <section>
          <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
            <div className="w-1 h-6 bg-muted-foreground rounded-full"></div>
            <span>Todas las Noticias</span>
          </h3>
          <div className="space-y-4">
            {news.map((item) => (
              <Card
                key={item.id}
                className={`border-l-4 ${priorityColors[item.priority]} hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge
                          variant="outline"
                          className={`${categoryColors[item.category as keyof typeof categoryColors]} text-white border-0`}
                        >
                          {item.category}
                        </Badge>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 leading-tight">{item.title}</h3>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{item.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{getTimeAgo(item.date)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm">
                        Leer más
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-12 bg-muted/30 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">¿Tienes alguna pregunta?</h3>
            <p className="text-muted-foreground mb-4">
              Para más información, contacta con la administración del colegio
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button variant="outline">
                <User className="h-4 w-4 mr-2" />
                Contactar Administración
              </Button>
              <Button variant="outline">
                <Newspaper className="h-4 w-4 mr-2" />
                Suscribirse a Noticias
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
