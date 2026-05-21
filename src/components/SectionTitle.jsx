// 섹션 헤더 - 아이브로우, 제목, 보조 설명을 묶은 재사용 컴포넌트
import useReveal from '../lib/useReveal.js'

export default function SectionTitle({ eyebrow, title, sub, center = true, light = false }) {
  const [ref, visible] = useReveal()
  const align = center ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-boribap-ivory' : 'text-boribap-earth'
  const subColor = light ? 'text-boribap-cream/85' : 'text-boribap-ink/75'
  return (
    <div
      ref={ref}
      className={`${align} max-w-3xl transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`h-display mt-3 ${titleColor}`}>{title}</h2>
      {sub && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${subColor}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
