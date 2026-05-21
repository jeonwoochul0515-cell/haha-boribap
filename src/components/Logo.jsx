// 텍스트 기반 브랜드 로고 컴포넌트 - 한글 워드마크와 보조 슬로건
export default function Logo({ light = false, withTagline = false, size = 'md' }) {
  const text = light ? 'text-boribap-ivory' : 'text-boribap-earth'
  const sub = light ? 'text-boribap-cream/80' : 'text-boribap-ember'
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-4xl sm:text-5xl',
  }
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <span
        className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-boribap-earth text-boribap-cream font-display font-bold text-xl sm:text-2xl shadow-md ring-1 ring-boribap-barley/40 group-hover:rotate-3 transition`}
        aria-hidden
      >
        하
      </span>
      <div className="flex flex-col leading-tight">
        <span className={`font-display font-bold ${sizes[size]} ${text}`}>
          하하보리밥
        </span>
        {withTagline && (
          <span className={`text-[10px] sm:text-xs tracking-widest ${sub}`}>
            엄마의 손길 그대로
          </span>
        )}
      </div>
    </a>
  )
}
