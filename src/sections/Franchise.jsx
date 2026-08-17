// 가맹문의 섹션 - 사이트 핵심 전환 포인트. 카카오톡 채널로 연결되는 CTA 배치
import { franchise, brand } from '../data/site.js'
import useReveal from '../lib/useReveal.js'

export default function Franchise() {
  const [ref, visible] = useReveal()
  return (
    <section id="franchise" className="relative py-24 sm:py-36 overflow-hidden text-boribap-ivory">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: 'url(/images/signature-set.webp)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-boribap-ink/95 via-boribap-earth/90 to-boribap-ink/95" aria-hidden />

      <div className="container-edge relative">
        <div
          ref={ref}
          className={`max-w-3xl transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="eyebrow text-boribap-barley">FRANCHISE</span>
          <h2 className="h-display mt-3">
            {franchise.headline}
          </h2>
          <p className="mt-5 text-lg text-boribap-cream/85 leading-relaxed">
            {franchise.sub}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {franchise.reasons.map((r, i) => (
            <div
              key={r.title}
              className="p-7 rounded-2xl bg-boribap-ivory/10 backdrop-blur-sm ring-1 ring-boribap-ivory/20 hover:bg-boribap-ivory/15 transition"
            >
              <div className="font-display font-bold text-3xl text-boribap-barley">
                0{i + 1}
              </div>
              <h3 className="font-display font-bold text-xl mt-3">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-boribap-cream/85">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-boribap-ivory/95 text-boribap-ink p-8 sm:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">가맹 상담</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl mt-3 text-boribap-earth">
                카카오톡 채널로 편하게 문의 주세요.
              </h3>
              <p className="mt-3 text-boribap-ink/75 leading-relaxed">
                예상 위치, 평수, 운영 형태만 알려주시면 본사에서 빠르게 회신드립니다.
                대표 번호로 전화도 가능합니다.
              </p>
            </div>
            <div className="lg:col-span-5 grid gap-3">
              <a
                href={franchise.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#FEE500] text-[#181600] font-bold px-7 py-5 text-lg shadow-lg hover:-translate-y-0.5 transition"
              >
                <KakaoIcon />
                {franchise.cta.label}
              </a>
              <a
                href="tel:055-381-0316"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-boribap-earth text-boribap-ivory font-bold px-7 py-4 hover:bg-boribap-ember transition"
              >
                📞 본사 055-381-0316
              </a>
              <p className="text-xs text-boribap-ink/55 text-center">
                상담 가능 시간 · 11:00 – 20:00 (브레이크 15:00–17:00)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function KakaoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C6.5 3 2 6.55 2 10.93c0 2.82 1.85 5.3 4.65 6.74l-.95 3.49c-.09.32.27.58.55.39l4.18-2.78c.51.05 1.03.08 1.57.08 5.5 0 10-3.55 10-7.92S17.5 3 12 3z"/>
    </svg>
  )
}
