"use client"

import { useEffect } from "react"

export default function BotpressChat() {
  useEffect(() => {
    // Verificar si los scripts ya están cargados
    if (
      document.querySelector('script[src*="cdn.botpress.cloud/webchat/v3.3/inject.js"]') ||
      document.querySelector('script[src*="files.bpcontent.cloud/2025/11/10/02/20251110021740-IQOOSYXN.js"]')
    ) {
      return
    }

    // Cargar el primer script (inject.js) - sin async ni defer
    const injectScript = document.createElement("script")
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js"
    injectScript.id = "botpress-inject-script"
    document.body.appendChild(injectScript)

    // Cargar el segundo script (configuración) - con defer
    const configScript = document.createElement("script")
    configScript.src = "https://files.bpcontent.cloud/2025/11/10/02/20251110021740-IQOOSYXN.js"
    configScript.defer = true
    configScript.id = "botpress-config-script"
    document.body.appendChild(configScript)

    return () => {
      // Limpiar scripts al desmontar
      const injectScript = document.getElementById("botpress-inject-script")
      if (injectScript && injectScript.parentNode) {
        injectScript.parentNode.removeChild(injectScript)
      }
      const configScript = document.getElementById("botpress-config-script")
      if (configScript && configScript.parentNode) {
        configScript.parentNode.removeChild(configScript)
      }
    }
  }, [])

  return null
}

