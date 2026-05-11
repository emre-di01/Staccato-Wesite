import { useEffect, useRef } from 'react'

export function useInView(className = 'in-view', options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(className); obs.unobserve(el) } },
      { threshold: 0.1, ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}
