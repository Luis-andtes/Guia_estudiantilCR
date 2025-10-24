"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, Send, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: number
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Hola! Soy tu asistente virtual del colegio. Puedo ayudarte con horarios, procesos de matrícula, ubicación de aulas, noticias y más. ¿En qué te puedo ayudar hoy?",
      timestamp: Date.now(),
    },
  ])
  const [input, setInput] = useState("")
  const [sending, setSending] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages.length])

  const handleSend = async (e?: React.FormEvent) => {
    // Prevenir el comportamiento por defecto del formulario
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const text = input.trim();
    if (!text || sending) return;

    // 1. Actualizar la UI inmediatamente
    const userMsg: Message = { 
      role: "user", 
      content: text, 
      timestamp: Date.now() 
    };
    
    setInput("");
    setMessages(prev => [...prev, userMsg]);
    setSending(true);

    // 2. Enviar la petición
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: "user", content: text }] })
      });

      if (!response.ok) throw new Error('Error en la respuesta');
      const data = await response.json();
      
      setMessages(prev => [
        ...prev,
        { 
          role: "assistant", 
          content: data.response || "No se pudo obtener respuesta.", 
          timestamp: Date.now() 
        }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [
        ...prev,
        { 
          role: "assistant", 
          content: "⚠️ Error al conectar con el asistente.", 
          timestamp: Date.now() 
        }
      ]);
    } finally {
      setSending(false);
    }
  }

  function getAssistantReply(text: string): string {
    const t = text.toLowerCase()

    if (/(horario|horarios|profesor|docente)/.test(t)) {
      return "Para consultar horarios de profesores y estudiantes, ve a la sección ‘Horarios’. Puedes buscar por nombre de docente o por grado. Si necesitas ver el horario con más detalle, haz clic en el docente para abrirlo en grande."
    }
    if (/(matr[ií]cula|inscripci[oó]n|pago|pagos)/.test(t)) {
      return "Proceso de matrícula: 1) Revisa requisitos en la guía estudiantil, 2) Diligencia el formulario, 3) Adjunta documentos, 4) Realiza el pago, 5) Espera confirmación por correo. ¿Quieres que te comparta los pasos detallados?"
    }
    if (/(aula|sal[oó]n|mapa|ubicaci[oó]n)/.test(t)) {
      return "Para ubicar aulas y dependencias, visita la sección ‘Mapa del colegio’. Puedes hacer zoom y buscar por nombre."
    }
    if (/(noticia|eventos|calendario|actividad)/.test(t)) {
      return "Encuentra noticias y eventos en la sección ‘Noticias’. Ahí publicamos avisos importantes y fechas clave del calendario."
    }
    if (/(contacto|tel[eé]fono|correo|soporte|ayuda)/.test(t)) {
      return "Puedes escribirnos al correo info@cristorey.edu.co o acercarte a Secretaría Académica en horario de oficina. ¿Deseas que te comparta extensiones y correos específicos?"
    }

    return "Puedo ayudarte con: horarios, matrículas, mapa del colegio, noticias, vida estudiantil y más. Cuéntame con qué tema necesitas ayuda y te guiaré paso a paso."
  }

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
              Chat del Estudiante
            </CardTitle>
            <CardDescription>
              Haz preguntas sobre procesos académicos y de convivencia. El asistente te guiará paso a paso.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col h-[70vh]">
              <ScrollArea className="flex-1 rounded-md border p-4 bg-muted/30">
                <div className="space-y-4">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                          m.role === "user" ? "bg-primary text-primary-foreground" : "bg-background border"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1 opacity-80">
                          {m.role === "user" ? (
                            <User className="h-3.5 w-3.5" />
                          ) : (
                            <Bot className="h-3.5 w-3.5" />
                          )}
                          <span className="text-[11px] tracking-wide">
                            {new Date(m.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                        </div>
                        <p className="leading-relaxed whitespace-pre-wrap">{m.content}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={endRef} />
                </div>
              </ScrollArea>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(e);
                }}
                className="mt-4 flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      if (input.trim() && !sending) {
                        handleSend(e);
                      }
                    }
                  }}
                  placeholder="Escribe tu pregunta..."
                  disabled={sending}
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  disabled={sending || input.trim().length === 0}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {sending ? 'Enviando...' : 'Enviar'}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
