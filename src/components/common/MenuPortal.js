import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function MenuPortal({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const portalRoot = document.getElementById('menu-root')
  return portalRoot ? createPortal(children, portalRoot) : null
};
