"use client"

import { Bot, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <Bot className="h-6 w-6" />
              <h1 className="text-xl font-bold">Asistente Virtual</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Asistente Virtual del Colegio
            </CardTitle>
            <CardDescription>
              Nuestro asistente virtual está disponible en todas las páginas del sitio. 
              Busca el ícono del chat en la esquina inferior derecha para comenzar una conversación.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">¿Cómo usar el asistente?</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Busca el ícono del chat flotante en la esquina inferior derecha de cualquier página</li>
                <li>Haz clic en el ícono para abrir el chat</li>
                <li>Escribe tu pregunta y el asistente te ayudará</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">¿En qué puedo ayudarte?</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Consultar horarios de estudiantes y profesores</li>
                <li>Información sobre procesos de matrícula</li>
                <li>Ubicación de aulas y dependencias</li>
                <li>Noticias y eventos del colegio</li>
                <li>Y mucho más...</li>
              </ul>
            </div>
            <div className="pt-4 border-t">
              <Button asChild className="w-full">
                <Link href="/">
                  Volver al inicio
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
