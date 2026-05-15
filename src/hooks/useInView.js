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

export function useInViewChildren(selector = '.fade-up', className = 'in-view', options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const container = ref.current
    if (!container) return
    const children = container.querySelectorAll(selector)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(className); obs.unobserve(e.target) }
      }),
      { threshold: 0.1, ...options }
    )
    children.forEach(child => obs.observe(child))
    return () => obs.disconnect()
  }, [])
  return ref
}
