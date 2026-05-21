// 상단 네비게이션 - 스크롤 시 배경 강조, 모바일 햄버거 메뉴 토글
import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const items = [
  { href: '#concept', label: '컨셉' },
  { href: '#menu', label: '메뉴' },
  { href: '#why', label: '왜 하하보리밥' },
  { href: '#gallery', label: '갤러리' },
  { href: '#reviews', label: '리뷰' },
  { href: '#stores', label: '매장' },
  { href: '#franchise', label: '가맹문의' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-boribap-ivory/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-edge flex items-center justify-between h-16 sm:h-20">
        <Logo light={!scrolled} withTagline />
        <nav className="hidden lg:flex items-center gap-7">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className={`text-sm font-semibold transition hover:text-boribap-ember ${
                scrolled ? 'text-boribap-ink' : 'text-boribap-ivory'
              }`}
            >
              {i.label}
            </a>
          ))}
          <a
            href="#franchise"
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-boribap-earth text-boribap-ivory text-sm font-bold px-5 py-2.5 shadow hover:bg-boribap-ember transition"
          >
            가맹문의 →
          </a>
        </nav>
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={scrolled ? '#221912' : '#FBF6EC'}
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-boribap-ivory/98 backdrop-blur-md border-t border-boribap-barley/30 shadow-lg">
          <div className="container-edge py-5 grid gap-3">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="text-boribap-ink text-base font-semibold py-2"
              >
                {i.label}
              </a>
            ))}
            <a
              href="#franchise"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-boribap-earth text-boribap-ivory font-bold px-5 py-3"
            >
              가맹문의 →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
