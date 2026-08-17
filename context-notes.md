# 하하보리밥 홈페이지 컨텍스트 노트

이 문서는 작업 중 내린 결정과 배경 정보를 기록합니다. 다음 세션이 매끄럽게 이어가도록.

## 브랜드 정수
- 슬로건: **"엄마의 손길 그대로"** (매장 외관 간판에서 확인)
- 핵심 컨셉: **"만원에 가장 푸짐하고 행복한 한상"** (사용자 요구)
- 보리밥 정식 2인 이상 10,000원 — 1인 9,000원에서 인상된 가격 안내가 매장 메뉴판에 부착되어 있음
- 보리밥 정식 = 보리밥 + 쌈 + 청국장 + 갈치구이 + 불고기 + 나물찬 5종

## 매장 현황
- **본점**: 경상남도 양산시 물금읍 버들3길 8-1, ☎ 055-381-0316
  - 영업 11:00-20:00, 평일 브레이크 15:00-17:00
  - 황산공원 인접, 전용 주차장
  - 다이닝코드 평점 4.3
- **가맹 1호점**: 울산광역시 중구 함월22길 8 (성안동), ☎ 0507-1444-2283
  - 영업 11:00-20:00, 수요일 11:00-15:00만 영업
  - 다이닝코드 평점 4.7
  - "지역 주민이 사랑하는 단골 맛집"
- 위생등급: 우수·매우우수

## 사진 자산 매핑
| 원본 파일명 | 변경된 파일명 | 사용 위치 |
|---|---|---|
| 하하보리밥.png | hero-spread.png | Hero 배경 |
| 하하보리밥2.jpg | storefront.jpg | Stores 양산점 카드 |
| 하하보리밥 내부.jpg | interior.jpg | Stores 울산점 카드 |
| 하하1.jpg | signature-set.jpg | Menu 시그니처 + Franchise 배경 |
| 4.jpg | galchi.jpg | Gallery |
| 12.jpg | bulgogi.jpg | Gallery |
| 2.jpg | banchan-1.jpg | Gallery + WhyHaha 배경 |
| 3.jpg | banchan-2.jpg | Gallery |
| 1232131.jpg | ssam.jpg | Gallery (쌈채소·묵) |
| 123.jpg | menu-board.jpg | Gallery (메뉴판) |

## 기술 결정
- **Vite + React (JS)** 선택. TypeScript는 사용자 요청 외라 단순함 우선.
- **TailwindCSS** — 빠른 디자인 시스템 구축. `boribap-*` 컬러 토큰화.
- **Framer Motion** — Hero 인트로 모션. 다른 섹션은 IntersectionObserver 훅으로 직접 처리해 번들 절약.
- **단일 페이지**(SPA 라우팅 X) — anchor 스크롤만 사용. Cloudflare Pages에 SPA fallback 불필요.
- **카카오톡 채널 CTA** — 사용자 요청에 따라 가맹문의 폼 대신 카카오 채널로 연결. placeholder URL이라 실제 채널 URL로 교체 필요.

## 컬러 팔레트
- `boribap-ivory #FBF6EC` — 배경
- `boribap-cream #F3E9D2` — 보조 배경
- `boribap-barley #D9B26A` — 강조 (보리/황금)
- `boribap-ember #B8722E` — 강조 텍스트
- `boribap-earth #5A3A1B` — 메인 다크 (흙)
- `boribap-ink #221912` — 본문 텍스트
- `boribap-leaf #4A6B2E` — 보조 (쌈채소)
- `boribap-accent #C8402E` — 평점 별

## 안 한 것 / 안 하기로 한 것
- **Instagram / TikTok 스크래핑** — API 없이 불가, Naver Place도 차단. 사용자가 직접 제공한 사진만 사용.
- **가맹문의 폼** — 사용자가 카카오톡 채널로 처리하기로 결정. Cloudflare Functions 추가 작업 안 함.
- **TypeScript** — 단순성 우선, 변환 부담 회피.
- **다국어** — 향후 확장 가능.
- **백엔드** — 없음. 100% 정적.

## 2026-08-17 개선 작업 결정 사항
- **이미지 WebP 일원화**: 원본 jpg/png는 git 히스토리에 남기고 삭제. 최대 변 1400px, 품질 80. `og.jpg`(1200×630, signature-set에서 크롭)만 JPG 유지 — 공유 스크래퍼 호환 목적.
- **JSON-LD는 index.html에 정적으로**: SPA라 JS 렌더 전에 크롤러가 읽도록 head에 직접 삽입. FAQ 화면(site.js `faq`)과 FAQPage 스키마는 **수동 1:1 동기화** — FAQ 문구 수정 시 index.html도 같이 고칠 것.
- **canonical/OG/사이트맵 기준 URL = `https://haha-boribap.pages.dev`**: 커스텀 도메인 연결 시 index.html(canonical·og:url·og:image·JSON-LD 전체), sitemap.xml, robots.txt의 URL을 일괄 치환해야 함.
- **FAQ 위치**: Stores와 Franchise 사이. 네비게이션에는 추가 안 함(이미 7개), 푸터 빠른 링크에만 추가.
- **배포 방식**: Cloudflare Pages 직접 업로드 (`npx wrangler pages deploy dist --project-name haha-boribap`). Git 연동 아님 — push만으로는 배포 안 됨.
- 전체 스크린샷에서 중간 섹션이 빈 것은 useReveal(스크롤 등장 애니메이션) 때문으로 헤드리스 캡처의 한계. 실사용·크롤러(DOM 텍스트)에는 문제 없음.

## 빌드 검증 결과
- `npm run build` 통과, 1.64초
- dist/index.html 1.51 KB
- dist/assets/index-*.css 27.93 KB (gzip 5.23 KB)
- dist/assets/index-*.js 280.06 KB (gzip 91.24 KB)
