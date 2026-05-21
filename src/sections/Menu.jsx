// 메뉴 섹션 - 시그니처 정식 큰 사진과 사이드 메뉴 카드 그리드
import { menu } from '../data/site.js'
import SectionTitle from '../components/SectionTitle.jsx'
import useReveal from '../lib/useReveal.js'

export default function Menu() {
  const [ref, visible] = useReveal()
  return (
    <section id="menu" className="relative py-24 sm:py-36 bg-boribap-ivory">
      <div className="container-edge">
        <SectionTitle
          eyebrow="MENU"
          title="한 상에 담긴 정성"
          sub="대표 메뉴 보리밥 정식과 함께, 든든한 사이드까지. 모든 가격은 1인 기준입니다."
        />

        <div
          ref={ref}
          className={`mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={menu.signature.image}
              alt={menu.signature.name}
              loading="lazy"
              className="w-full h-full min-h-[420px] object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-boribap-ink/90 via-boribap-ink/30 to-transparent" aria-hidden />
            <div className="absolute bottom-0 inset-x-0 p-7 sm:p-10 text-boribap-ivory">
              <span className="pill bg-boribap-barley text-boribap-ink ring-0">대표</span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold mt-3">
                {menu.signature.name}
              </h3>
              <p className="mt-1 text-boribap-cream/85">{menu.signature.subtitle}</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display font-bold text-5xl sm:text-6xl text-boribap-barley leading-none">
                  {menu.signature.price}
                </span>
                <span className="text-xl font-bold text-boribap-cream pb-1">원</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {menu.signature.includes.map((x) => (
                  <li key={x} className="text-sm bg-boribap-ivory/15 text-boribap-ivory backdrop-blur-sm px-3 py-1.5 rounded-full ring-1 ring-boribap-ivory/30">
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-4 content-start">
            {menu.others.map((m) => (
              <div
                key={m.name}
                className="group flex items-center justify-between gap-6 p-5 sm:p-6 rounded-2xl bg-boribap-cream/50 ring-1 ring-boribap-barley/30 hover:bg-boribap-cream transition"
              >
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-boribap-earth">
                    {m.name}
                  </h4>
                  <p className="text-sm text-boribap-ink/70 mt-1">{m.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-boribap-ember">
                    {m.price}
                  </span>
                  <span className="text-sm font-bold text-boribap-ember ml-0.5">원</span>
                </div>
              </div>
            ))}
            <p className="text-xs text-boribap-ink/55 mt-2 px-2">
              ※ 가격은 변동될 수 있습니다. 가장 정확한 정보는 매장에서 확인해 주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
