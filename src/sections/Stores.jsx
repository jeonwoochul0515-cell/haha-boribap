// 매장 안내 섹션 - 본점(양산)·가맹 1호점(울산)을 카드로 나란히 배치
import SectionTitle from '../components/SectionTitle.jsx'
import { stores } from '../data/site.js'
import useReveal from '../lib/useReveal.js'

function StoreCard({ s, i }) {
  const [ref, visible] = useReveal()
  const bg = i === 0 ? '/images/storefront.webp' : '/images/interior.webp'
  return (
    <article
      ref={ref}
      className={`group relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-boribap-barley/30 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-boribap-ink/55 via-boribap-ink/70 to-boribap-ink/95" aria-hidden />
      <div className="relative p-7 sm:p-10 text-boribap-ivory min-h-[440px] flex flex-col">
        <span className="pill bg-boribap-barley text-boribap-ink ring-0 self-start">
          {s.badge}
        </span>
        <h3 className="font-display font-bold text-3xl sm:text-4xl mt-4">
          {s.name}
        </h3>
        <p className="mt-2 text-boribap-cream/85">{s.note}</p>

        <div className="mt-6 grid gap-3 text-sm sm:text-base">
          <div className="flex items-start gap-3">
            <span className="text-boribap-barley mt-0.5">📍</span>
            <span>{s.address}</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-boribap-barley mt-0.5">📞</span>
            <a href={s.phoneLink} className="hover:underline">{s.phone}</a>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-boribap-barley mt-0.5">🕐</span>
            <ul className="space-y-0.5">
              {s.hours.map((h) => (
                <li key={h.label}>
                  <span className="text-boribap-cream/70">{h.label}</span>
                  <span className="mx-2 text-boribap-cream/50">·</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {s.perks.map((p) => (
            <li
              key={p}
              className="text-xs bg-boribap-ivory/15 text-boribap-cream backdrop-blur-sm px-3 py-1.5 rounded-full ring-1 ring-boribap-ivory/25"
            >
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 flex flex-wrap gap-3">
          <a
            href={s.naverMap}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            네이버 지도 →
          </a>
          <a href={s.phoneLink} className="inline-flex items-center justify-center gap-2 rounded-full bg-boribap-barley text-boribap-ink font-bold px-6 py-3 transition hover:bg-boribap-ivory">
            전화 걸기
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Stores() {
  return (
    <section id="stores" className="relative py-24 sm:py-36 bg-boribap-ivory">
      <div className="container-edge">
        <SectionTitle
          eyebrow="LOCATIONS"
          title="가까운 매장에서 만나요."
          sub="양산 본점에서 시작해, 울산에서 첫 가맹점이 문을 열었습니다. 매장이 늘어날 때마다 약속도 함께 자랍니다."
        />
        <div className="mt-14 grid lg:grid-cols-2 gap-7 lg:gap-8">
          {stores.map((s, i) => (
            <StoreCard key={s.id} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
