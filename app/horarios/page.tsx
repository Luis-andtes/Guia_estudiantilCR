"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Clock, User, GraduationCap, Search, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from "next/link"

const teachersSchedule = [
  {
    id: 1,
    name: "Prof. María González",
    subject: "Matemáticas",
    office: "Oficina 201",
    email: "maria.gonzalez@colegio.edu",
    schedule: {
      Lunes: [
        { time: "8:00-9:30", class: "10° A - Álgebra", room: "205" },
        { time: "10:00-11:30", class: "11° B - Cálculo", room: "205" },
      ],
      Martes: [
        { time: "8:00-9:30", class: "9° A - Geometría", room: "205" },
        { time: "2:00-3:30", class: "10° B - Álgebra", room: "205" },
      ],
      Miércoles: [
        { time: "9:00-10:30", class: "11° A - Cálculo", room: "205" },
        { time: "11:00-12:30", class: "10° A - Álgebra", room: "205" },
      ],
      Jueves: [
        { time: "8:00-9:30", class: "9° B - Geometría", room: "205" },
        { time: "10:00-11:30", class: "11° B - Cálculo", room: "205" },
      ],
      Viernes: [
        { time: "8:00-9:30", class: "10° B - Álgebra", room: "205" },
        { time: "2:00-3:30", class: "Tutoría", room: "205" },
      ],
    },
  },
  {
    id: 2,
    name: "Prof. Carlos Rodríguez",
    subject: "Ciencias Naturales",
    office: "Lab. Ciencias",
    email: "carlos.rodriguez@colegio.edu",
    schedule: {
      Lunes: [
        { time: "9:00-10:30", class: "9° A - Biología", room: "Lab 1" },
        { time: "11:00-12:30", class: "10° A - Química", room: "Lab 2" },
      ],
      Martes: [
        { time: "8:00-9:30", class: "11° A - Física", room: "Lab 3" },
        { time: "10:00-11:30", class: "9° B - Biología", room: "Lab 1" },
      ],
      Miércoles: [
        { time: "8:00-9:30", class: "10° B - Química", room: "Lab 2" },
        { time: "2:00-3:30", class: "11° B - Física", room: "Lab 3" },
      ],
      Jueves: [
        { time: "9:00-10:30", class: "9° A - Biología", room: "Lab 1" },
        { time: "11:00-12:30", class: "10° A - Química", room: "Lab 2" },
      ],
      Viernes: [
        { time: "8:00-9:30", class: "11° A - Física", room: "Lab 3" },
        { time: "10:00-11:30", class: "Experimentos", room: "Lab 1" },
      ],
    },
  },
  {
    id: 3,
    name: "Prof. Ana Martínez",
    subject: "Lengua y Literatura",
    office: "Oficina 103",
    email: "ana.martinez@colegio.edu",
    schedule: {
      Lunes: [
        { time: "8:00-9:30", class: "9° A - Literatura", room: "102" },
        { time: "10:00-11:30", class: "10° A - Gramática", room: "102" },
      ],
      Martes: [
        { time: "9:00-10:30", class: "11° A - Literatura", room: "102" },
        { time: "2:00-3:30", class: "9° B - Redacción", room: "102" },
      ],
      Miércoles: [
        { time: "8:00-9:30", class: "10° B - Gramática", room: "102" },
        { time: "11:00-12:30", class: "11° B - Literatura", room: "102" },
      ],
      Jueves: [
        { time: "9:00-10:30", class: "9° A - Redacción", room: "102" },
        { time: "10:00-11:30", class: "10° A - Literatura", room: "102" },
      ],
      Viernes: [
        { time: "8:00-9:30", class: "11° A - Gramática", room: "102" },
        { time: "2:00-3:30", class: "Club de Lectura", room: "Biblioteca" },
      ],
    },
  },
]

const studentSchedules = {
  "9° A": {
    Lunes: [
      { time: "8:00-9:30", subject: "Literatura", teacher: "Prof. Ana Martínez", room: "102" },
      { time: "9:00-10:30", subject: "Biología", teacher: "Prof. Carlos Rodríguez", room: "Lab 1" },
      { time: "11:00-12:30", subject: "Educación Física", teacher: "Prof. Luis Torres", room: "Gimnasio" },
      { time: "2:00-3:30", subject: "Historia", teacher: "Prof. Elena Vargas", room: "108" },
    ],
    Martes: [
      { time: "8:00-9:30", subject: "Geometría", teacher: "Prof. María González", room: "205" },
      { time: "9:00-10:30", subject: "Inglés", teacher: "Prof. John Smith", room: "104" },
      { time: "11:00-12:30", subject: "Arte", teacher: "Prof. Carmen López", room: "Taller" },
      { time: "2:00-3:30", subject: "Redacción", teacher: "Prof. Ana Martínez", room: "102" },
    ],
    Miércoles: [
      { time: "8:00-9:30", subject: "Química", teacher: "Prof. Carlos Rodríguez", room: "Lab 2" },
      { time: "9:00-10:30", subject: "Geografía", teacher: "Prof. Elena Vargas", room: "108" },
      { time: "11:00-12:30", subject: "Música", teacher: "Prof. Roberto Díaz", room: "Aula Música" },
      { time: "2:00-3:30", subject: "Informática", teacher: "Prof. Miguel Herrera", room: "Lab Sistemas" },
    ],
    Jueves: [
      { time: "8:00-9:30", subject: "Geometría", teacher: "Prof. María González", room: "205" },
      { time: "9:00-10:30", subject: "Biología", teacher: "Prof. Carlos Rodríguez", room: "Lab 1" },
      { time: "9:00-10:30", subject: "Redacción", teacher: "Prof. Ana Martínez", room: "102" },
      { time: "11:00-12:30", subject: "Inglés", teacher: "Prof. John Smith", room: "104" },
    ],
    Viernes: [
      { time: "8:00-9:30", subject: "Historia", teacher: "Prof. Elena Vargas", room: "108" },
      { time: "9:00-10:30", subject: "Educación Física", teacher: "Prof. Luis Torres", room: "Gimnasio" },
      { time: "11:00-12:30", subject: "Arte", teacher: "Prof. Carmen López", room: "Taller" },
      { time: "2:00-3:30", subject: "Tutoría", teacher: "Prof. Ana Martínez", room: "102" },
    ],
  },
}

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
const grades = ["9° A", "9° B", "10° A", "10° B", "11° A", "11° B"]


// Utilidad para normalizar el nombre del docente a nombre de carpeta
function getFolderName(name: string) {
  return name
    .toUpperCase()
    .replace(/\./g, "")
    .replace(/ /g, "_")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

// Componente para mostrar el horario del docente como imagen o PDF
function TeacherScheduleModal({ teacher }: { teacher: any }) {
  // Normalizamos el nombre para buscar la carpeta
  const folderName = getFolderName(teacher.name)
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const [fileType, setFileType] = useState<'image' | 'pdf' | null>(null)

  useEffect(() => {
    // Buscamos primero PNG, luego JPG, luego PDF
    const basePath = `/horarios-docentes/${folderName}/`;
    fetch(basePath + 'image.png', { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          setFileUrl(basePath + 'image.png');
          setFileType('image');
        } else {
          fetch(basePath + 'image.jpg', { method: 'HEAD' })
            .then(res2 => {
              if (res2.ok) {
                setFileUrl(basePath + 'image.jpg');
                setFileType('image');
              } else {
                fetch(basePath + 'image.pdf', { method: 'HEAD' })
                  .then(res3 => {
                    if (res3.ok) {
                      setFileUrl(basePath + 'image.pdf');
                      setFileType('pdf');
                    } else {
                      setFileUrl(null);
                      setFileType(null);
                    }
                  })
              }
            })
        }
      })
  }, [teacher])

  if (!fileUrl) {
    return <div className="text-center text-muted-foreground py-12">No hay horario disponible para este docente.</div>;
  }

  return (
    <div className="flex justify-center items-center w-full">
      {fileType === 'image' ? (
        <img
          src={fileUrl}
          alt={`Horario de ${teacher.name}`}
          style={{
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            borderRadius: '1rem',
            boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
            objectFit: 'contain',
          }}
        />
      ) : (
        <iframe
          src={fileUrl}
          title={`Horario de ${teacher.name}`}
          style={{ width: '100%', minHeight: '70vh', borderRadius: '1rem', background: '#fff' }}
        />
      )}
    </div>
  )
}

export default function HorariosPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<(typeof teachersSchedule)[0] | null>(null)
  const [selectedGrade, setSelectedGrade] = useState("9° A")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTeachers = teachersSchedule.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()),
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
              <Clock className="h-6 w-6" />
              <h1 className="text-xl font-bold">Horarios</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full py-6">
        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="students" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Estudiantes</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Profesores</span>
            </TabsTrigger>
          </TabsList>

          {/* Student Schedules */}
          <TabsContent value="students" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Horarios de Estudiantes</h2>
                <p className="text-muted-foreground">Consulta los horarios por grado</p>
              </div>
              <div className="flex gap-2">
                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {grades.map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Horario {selectedGrade}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Hora</th>
                        {days.map((day) => (
                          <th key={day} className="text-left p-3 font-medium min-w-48">
                            {day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {["8:00-9:30", "9:00-10:30", "11:00-12:30", "2:00-3:30"].map((timeSlot) => (
                        <tr key={timeSlot} className="border-b hover:bg-muted/50">
                          <td className="p-3 font-medium text-sm">{timeSlot}</td>
                          {days.map((day) => {
                            const schedule = studentSchedules[selectedGrade as keyof typeof studentSchedules]
                            const daySchedule = schedule?.[day as keyof typeof schedule] || []
                            const classInfo = daySchedule.find((c) => c.time === timeSlot)

                            return (
                              <td key={day} className="p-3">
                                {classInfo ? (
                                  <div className="space-y-1">
                                    <div className="font-medium text-sm">{classInfo.subject}</div>
                                    <div className="text-xs text-muted-foreground">{classInfo.teacher}</div>
                                    <Badge variant="outline" className="text-xs">
                                      {classInfo.room}
                                    </Badge>
                                  </div>
                                ) : (
                                  <div className="text-xs text-muted-foreground">-</div>
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Teacher Schedules */}
          <TabsContent value="teachers" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Teachers List */}
              <div className="lg:col-span-1 space-y-4">
                <div>
                  <h2 className="text-xl font-bold mb-4">Profesores</h2>
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar profesor..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredTeachers.map((teacher) => (
                    <Card
                      key={teacher.id}
                      className={`cursor-pointer transition-colors hover:bg-muted/50 ${selectedTeacher?.id === teacher.id ? "bg-primary/10 border-primary" : ""}`}
                      onClick={() => setSelectedTeacher(teacher)}
                    >
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">{teacher.name}</h3>
                          <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span>{teacher.office}</span>
                            <span>•</span>
                            <span>{teacher.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Teacher Schedule Modal */}
              <Dialog open={!!selectedTeacher} onOpenChange={(open) => !open && setSelectedTeacher(null)}>
                <DialogContent className="!max-w-[95vw] !max-h-[95vh] w-full h-full p-6 overflow-hidden">
                  {selectedTeacher && (
                    <>
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2 text-2xl">
                          <User className="h-6 w-6" />
                          <span>Horario - {selectedTeacher.name}</span>
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {selectedTeacher.subject} • {selectedTeacher.office}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1 overflow-auto">
                        <TeacherScheduleModal teacher={selectedTeacher} />
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
