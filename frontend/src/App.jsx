import { useState, useRef, useEffect } from 'react'

function App() {
  const [activeChat, setActiveChat] = useState(1)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [artifactPanelOpen, setArtifactPanelOpen] = useState(true)
  const [selectedArtifact, setSelectedArtifact] = useState({
    title: 'welcome_dashboard.html',
    type: 'html',
    code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Outfit', sans-serif;
            background: linear-gradient(135deg, #1e1e1e 0%, #121212 100%);
            color: #e5e5e5;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 250px;
            margin: 0;
            padding: 20px;
            text-align: center;
        }
        .card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            backdrop-filter: blur(12px);
            max-width: 400px;
            transform: scale(0.98);
            animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes pop {
            to { transform: scale(1); opacity: 1; }
        }
        h2 { color: #d97706; margin-top: 0; font-weight: 600; }
        p { font-size: 14px; line-height: 1.6; color: #a3a3a3; }
        .badge {
            background: rgba(217, 119, 6, 0.15);
            color: #f59e0b;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 11px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 12px;
            border: 1px solid rgba(217, 119, 6, 0.2);
        }
    </style>
</head>
<body>
    <div class="card">
        <span class="badge">React + Tailwind v4 + Django Activos</span>
        <h2>¡Éxito en la Integración!</h2>
        <p>Vite está compilando este contenido dinámico directamente en la carpeta de recursos estáticos de Django. Todo está configurado correctamente.</p>
    </div>
</body>
</html>`
  })

  const [chats, setChats] = useState([
    {
      id: 1,
      title: 'Integración Excepcional',
      messages: [
        {
          id: 1,
          role: 'assistant',
          content: '¡Hola! He detectado que has configurado exitosamente **React.js** y **Tailwind CSS v4** en tu proyecto Django. 🎉\n\nEste chat es una simulación premium interactiva del entorno de Claude que he desarrollado para ti. Puedes escribir prompts tal como lo harías en Claude Code o en la web oficial, y ver respuestas interactivas en tiempo real.\n\nHe generado un **Artifact** interactivo a tu derecha que demuestra que los estilos de Tailwind v4 y React están funcionando de manera impecable.',
          artifact: {
            title: 'welcome_dashboard.html',
            type: 'html',
            code: 'welcome_dashboard.html code'
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Arquitectura Limpia Django',
      messages: [
        {
          id: 1,
          role: 'user',
          content: '¿Por qué usamos la capa de services.py en Django?'
        },
        {
          id: 2,
          role: 'assistant',
          content: 'Usamos `services.py` en Django para encapsular la **lógica de negocio**. \n\nEsto evita tener consultas complejas o manipulaciones pesadas de datos en tus `views.py` o `models.py`. Al separar la lógica, tus vistas se mantienen extremadamente pequeñas (menos de 30 líneas, como dicta tu `CLAUDE.md`) y el código se vuelve altamente reutilizable y fácil de testear.',
          artifact: null
        }
      ]
    }
  ])

  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chats, isTyping])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      artifact: null
    }

    // Agregar el mensaje del usuario al chat activo
    setChats(prev => prev.map(chat => {
      if (chat.id === activeChat) {
        return {
          ...chat,
          messages: [...chat.messages, userMessage]
        }
      }
      return chat
    }))

    const promptText = input.toLowerCase()
    setInput('')
    setIsTyping(true)

    // Simular respuesta después de 1.5s
    setTimeout(() => {
      let replyContent = ''
      let newArtifact = null

      if (promptText.includes('claude code') || promptText.includes('antigravity')) {
        replyContent = '¡Excelente pregunta! **Antigravity** es el agente con el que estás hablando ahora mismo y está diseñado por el equipo de Google DeepMind. Tengo la capacidad de controlar la terminal de tu máquina (ejecutar servidores, migraciones, pruebas), leer tus archivos y editarlos con precisión quirúrgica, exactamente de la misma manera (o incluso de forma más integrada) que **Claude Code**.\n\nPuedes pedirme cosas como:\n* "Crea un modelo en Django"\n* "Diseña un componente React con Tailwind"\n* "Compila la aplicación frontend"\n\nY lo haré directamente en tu workspace.'
      } else if (promptText.includes('ticket') || promptText.includes('modelo')) {
        replyContent = 'De acuerdo con tu archivo `CLAUDE.md`, un ticket debe seguir las siguientes reglas estrictas de tu base de datos:\n\n* **Campos:** `titulo`, `descripcion`, `estado` (abierto, en_proceso, cerrado), `prioridad` (baja, media, alta), `fecha_creacion` y `usuario_creador`.\n\nHe diseñado un **Artifact** que simula un listado de tickets premium interactivo con Tailwind v4. Puedes ver la tarjeta del ticket y cambiar sus estados de forma dinámica haciendo clic a tu derecha.'
        newArtifact = {
          title: 'ticket_preview.html',
          type: 'html',
          code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Outfit', sans-serif;
            background-color: #121212;
            color: #e5e5e5;
            padding: 16px;
            margin: 0;
            display: flex;
            justify-content: center;
        }
        .ticket-card {
            background: #1e1e1e;
            border: 1px solid #2e2e2e;
            border-radius: 12px;
            padding: 20px;
            width: 320px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }
        .priority-high {
            background: rgba(239, 68, 68, 0.15);
            color: #ef4444;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            border: 1px solid rgba(239, 68, 68, 0.2);
        }
        .status-badge {
            background: rgba(59, 130, 246, 0.15);
            color: #3b82f6;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            border: 1px solid rgba(59, 130, 246, 0.2);
        }
        h3 {
            margin: 0 0 8px 0;
            color: #f3f4f6;
            font-size: 16px;
        }
        p {
            margin: 0 0 16px 0;
            color: #9ca3af;
            font-size: 13px;
            line-height: 1.5;
        }
        .footer {
            border-top: 1px solid #2e2e2e;
            padding-top: 12px;
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="ticket-card">
        <div class="header">
            <span class="status-badge">en_proceso</span>
            <span class="priority-high">Alta</span>
        </div>
        <h3>TK-101: Configurar Servidor React</h3>
        <p>Integrar de manera exitosa el servidor Vite dentro del ecosistema Django para habilitar SPA de alta velocidad.</p>
        <div class="footer">
            <span>Creador: DavidCortes</span>
            <span>Hace 5 min</span>
        </div>
    </div>
</body>
</html>`
        }
      } else if (promptText.includes('tailwind') || promptText.includes('css')) {
        replyContent = '¡Tailwind CSS v4 es maravilloso! Está configurado en tu proyecto mediante la directiva `@import "tailwindcss";` en tu archivo `src/index.css`. \n\nNo necesitas un archivo de configuración pesado `tailwind.config.js` porque Tailwind v4 está integrado directamente en la tubería de Vite en `vite.config.js`. Esto acelera la recarga del navegador instantáneamente al modificar clases en tus componentes.'
      } else {
        replyContent = `Recibido tu mensaje: "${input}". Como tu asistente personal de codificación, estoy listo para trabajar contigo.\n\nHe verificado que tu backend Django está activo. Si necesitas que cree modelos, configure rutas Django o desarrolle APIs REST completas que se conecten con este chat, solo pídemelo y lo escribiré en código nativo de Python.`
      }

      const assistantMessage = {
        id: Date.now(),
        role: 'assistant',
        content: replyContent,
        artifact: newArtifact
      }

      if (newArtifact) {
        setSelectedArtifact(newArtifact)
        setArtifactPanelOpen(true)
      }

      setChats(prev => prev.map(chat => {
        if (chat.id === activeChat) {
          return {
            ...chat,
            messages: [...chat.messages, assistantMessage]
          }
        }
        return chat
      }))
      setIsTyping(false)
    }, 1200)
  }

  const currentChat = chats.find(c => c.id === activeChat) || chats[0]

  const createNewChat = () => {
    const newId = chats.length + 1
    const newChat = {
      id: newId,
      title: `Conversación #${newId}`,
      messages: [
        {
          id: Date.now(),
          role: 'assistant',
          content: '¡Nueva conversación iniciada! ¿En qué te puedo ayudar con tu proyecto Django y React hoy?',
          artifact: null
        }
      ]
    }
    setChats(prev => [newChat, ...prev])
    setActiveChat(newId)
  }

  return (
    <div className="flex h-screen bg-[#191919] text-[#e3e3e3] font-sans antialiased overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#202020] border-r border-[#2d2d2d] flex flex-col z-10">
        {/* Header de Claude */}
        <div className="p-4 border-b border-[#2d2d2d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#d97706] flex items-center justify-center font-bold text-white shadow-md">
              C
            </div>
            <div>
              <h1 className="font-semibold text-sm leading-tight text-white">Claude Code</h1>
              <span className="text-[10px] text-gray-400">Simulación Local</span>
            </div>
          </div>
        </div>

        {/* Botón Nuevo Chat */}
        <div className="p-3">
          <button 
            onClick={createNewChat}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-[#d97706]/15 hover:bg-[#d97706]/25 border border-[#d97706]/35 hover:border-[#d97706]/50 text-[#f59e0b] rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Nueva Conversación
          </button>
        </div>

        {/* Lista de Conversaciones */}
        <nav className="flex-1 overflow-y-auto px-2 py-1 space-y-1">
          <div className="text-[10px] uppercase font-bold text-gray-500 px-3 mb-2 tracking-wider">Historial</div>
          {chats.map(chat => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-xs transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                chat.id === activeChat 
                  ? 'bg-[#2a2a2a] text-[#f59e0b] font-medium border border-[#3a3a3a]' 
                  : 'text-gray-400 hover:bg-[#252525] hover:text-gray-200'
              }`}
            >
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="truncate flex-1">{chat.title}</span>
            </button>
          ))}
        </nav>

        {/* Footer del Perfil */}
        <div className="p-3 border-t border-[#2d2d2d] bg-[#1c1c1c] text-xs flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-[11px]">
            DC
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-white truncate text-[11px]">David Cortés</p>
            <p className="text-[9px] text-gray-500 truncate">davidcortes@desarrollador</p>
          </div>
        </div>
      </aside>

      {/* CHAT AREA */}
      <main className="flex-1 flex flex-col bg-[#191919] relative overflow-hidden">
        
        {/* Top Header */}
        <header className="h-14 border-b border-[#2d2d2d] px-6 flex items-center justify-between bg-[#191919]/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-xs font-semibold text-white">{currentChat.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setArtifactPanelOpen(!artifactPanelOpen)}
              className={`p-1.5 rounded-md border transition-all text-xs flex items-center gap-1.5 cursor-pointer ${
                artifactPanelOpen 
                  ? 'bg-[#d97706]/10 border-[#d97706]/30 text-[#f59e0b]' 
                  : 'bg-transparent border-[#2d2d2d] text-gray-400 hover:text-white hover:bg-[#252525]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{artifactPanelOpen ? 'Ocultar Artifact' : 'Ver Artifact'}</span>
            </button>
          </div>
        </header>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {currentChat.messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex gap-4 max-w-3xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 select-none ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-[#d97706] text-white shadow-md'
              }`}>
                {msg.role === 'user' ? 'U' : 'C'}
              </div>

              {/* Contenido */}
              <div className="space-y-2">
                <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600/10 text-white border border-indigo-500/20' 
                    : 'bg-[#222222] text-gray-200 border border-[#2d2d2d]'
                }`}>
                  <p className="whitespace-pre-line">
                    {msg.content}
                  </p>
                  
                  {/* Botón de Acceso Rápido a su Artifact */}
                  {msg.artifact && (
                    <div className="mt-3 pt-3 border-t border-[#2e2e2e] flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-amber-500">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="font-semibold">{msg.artifact.title}</span>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedArtifact(msg.artifact);
                          setArtifactPanelOpen(true);
                        }}
                        className="text-[11px] bg-[#d97706]/10 hover:bg-[#d97706]/20 border border-[#d97706]/35 text-[#f59e0b] px-2.5 py-1 rounded-md transition-all font-medium cursor-pointer"
                      >
                        Abrir Vista Previa
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4 max-w-3xl">
              <div className="w-8 h-8 rounded-lg bg-[#d97706] text-white flex items-center justify-center font-bold text-xs select-none">
                C
              </div>
              <div className="bg-[#222222] border border-[#2d2d2d] rounded-2xl px-4 py-3 flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-[#2d2d2d] bg-[#191919]">
          <form onSubmit={handleSend} className="max-w-3xl mx-auto relative flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregúntale a Claude (ej: 'Háblame de Antigravity', 'Enséñame un Ticket')"
              className="flex-1 bg-[#222222] border border-[#2d2d2d] focus:border-amber-500/50 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none transition-all shadow-inner"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="absolute right-3.5 top-2.5 w-8 h-8 rounded-lg bg-[#d97706] hover:bg-[#c26a05] disabled:bg-gray-700 disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          <p className="text-[10px] text-center text-gray-500 mt-2">
            Simulador de Claude en local. Modificaciones en caliente impulsadas por Antigravity.
          </p>
        </div>
      </main>

      {/* ARTIFACTS PANEL */}
      {artifactPanelOpen && (
        <section className="w-[450px] bg-[#1b1b1b] border-l border-[#2d2d2d] flex flex-col relative animate-slide-in">
          {/* Header */}
          <div className="h-14 border-b border-[#2d2d2d] px-4 flex items-center justify-between bg-[#1b1b1b]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div>
                <h2 className="font-semibold text-xs text-white leading-none">Artifact: {selectedArtifact.title}</h2>
                <span className="text-[9px] text-gray-400">Vista previa interactiva en tiempo real</span>
              </div>
            </div>
            <button 
              onClick={() => setArtifactPanelOpen(false)}
              className="text-gray-400 hover:text-white p-1 hover:bg-[#252525] rounded transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" />
              </svg>
            </button>
          </div>

          {/* Renderizado de Preview */}
          <div className="flex-1 bg-white flex flex-col">
            <iframe 
              title="Artifact Preview"
              srcDoc={selectedArtifact.code}
              className="w-full h-full border-none"
            />
          </div>

          {/* Code Viewer (Bottom Drawer) */}
          <div className="h-[200px] bg-[#131313] border-t border-[#2d2d2d] flex flex-col">
            <div className="px-4 py-2 border-b border-[#222] flex items-center justify-between text-[10px] text-gray-400 font-mono">
              <span>CÓDIGO FUENTE (HTML)</span>
              <button 
                onClick={() => navigator.clipboard.writeText(selectedArtifact.code)}
                className="hover:text-amber-500 transition-all cursor-pointer"
              >
                Copiar código
              </button>
            </div>
            <pre className="flex-1 overflow-auto p-4 font-mono text-[11px] leading-normal text-amber-600/80 bg-[#131313] whitespace-pre-wrap select-all">
              {selectedArtifact.code}
            </pre>
          </div>
        </section>
      )}

    </div>
  )
}

export default App
