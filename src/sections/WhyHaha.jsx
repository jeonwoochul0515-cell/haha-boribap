// 차별점 섹션 - 4개 기둥 카드 + 매장 외관/내부 사진을 큰 배경으로 활용
import SectionTitle from '../components/SectionTitle.jsx'
import { pillars } from '../data/site.js'
import useReveal from '../lib/useReveal.js'

export default function WhyHaha() {
  const [ref, visible] = useReveal()
  return (
    <section id="why" className="relative py-24 sm:py-36 overflow-hidden text-boribap-ivory">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banchan-1.jpg)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-boribap-ink/85" aria-hidden />
      <div className="absolute inset-0 grain opacity-60" aria-hidden />

      <div className="container-edge relative">
        <SectionTitle
          eyebrow="Why 하하보리밥"
          title="왜 사람들이 다시 찾는가."
          sub="가격이 전부가 아닙니다. 우리는 매일 그 가격을 지키기 위해 더 단단한 기준을 세웠습니다."
          light
        />
        <div
          ref={ref}
          className={`mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group p-7 rounded-2xl bg-boribap-ivory/10 backdrop-blur-sm ring-1 ring-boribap-ivory/20 hover:bg-boribap-ivory/15 hover:-translate-y-1 transition"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-4" aria-hidden>{p.icon}</div>
              <h3 className="font-display font-bold text-xl text-boribap-barley">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-boribap-cream/85">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
