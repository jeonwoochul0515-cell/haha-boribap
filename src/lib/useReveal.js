// IntersectionObserver로 스크롤 진입 시 페이드 업 트리거하는 훅
import { useEffect, useRef, useState } from 'react'

export default function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [threshold])
  return [ref, visible]
}
