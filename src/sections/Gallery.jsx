// 갤러리 섹션 - 음식·매장·메뉴판 사진을 매소너리 그리드로 풍부하게 보여줌
import SectionTitle from '../components/SectionTitle.jsx'
import { gallery } from '../data/site.js'
import useReveal from '../lib/useReveal.js'

export default function Gallery() {
  const [ref, visible] = useReveal()
  return (
    <section id="gallery" className="relative py-24 sm:py-36 bg-boribap-ivory">
      <div className="container-edge">
        <SectionTitle
          eyebrow="GALLERY"
          title="사진으로 먼저, 한상으로 곧."
          sub="갓 내어드린 그대로의 한 컷. 손님이 가장 많이 사진을 남기는 풍경입니다."
        />
        <div
          ref={ref}
          className={`mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 transition-all duration-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {gallery.map((g, i) => {
            const tall = i % 5 === 0 || i % 5 === 3
            return (
              <figure
                key={g.src}
                className={`relative overflow-hidden rounded-2xl ring-1 ring-boribap-barley/25 group ${
                  tall ? 'row-span-2 aspect-[3/5]' : 'aspect-square'
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-boribap-ink/85 to-transparent text-boribap-cream text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition">
                  {g.alt}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
