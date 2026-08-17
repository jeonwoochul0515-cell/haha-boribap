# 하하보리밥 (Haha Boribap) 공식 홈페이지

> **엄마의 손길 그대로 — 만원에 가장 푸짐하고 행복한 한상**

React + Vite + TailwindCSS로 만든 정적 단일 페이지. Cloudflare Pages 배포 대상.

## 빠른 시작

```bash
npm install
npm run dev        # 개발 서버 (http://localhost:5173)
npm run build      # dist/ 폴더로 정적 빌드
npm run preview    # 빌드 결과 로컬 미리보기 (http://localhost:4173)
```

## 폴더 구조

```
.
├─ public/
│  ├─ images/             브랜드 사진 (10장)
│  ├─ favicon.svg         "하" 워드마크
│  ├─ robots.txt
│  └─ _headers            Cloudflare 캐시·보안 헤더
├─ src/
│  ├─ App.jsx             섹션 합성 루트
│  ├─ main.jsx            React 부트스트랩
│  ├─ index.css           Tailwind + 글로벌 스타일
│  ├─ components/         Nav, Logo, SectionTitle
│  ├─ sections/           Hero, Concept, Menu, WhyHaha,
│  │                      Gallery, Reviews, Stores,
│  │                      Franchise, Footer
│  ├─ data/site.js        브랜드·매장·메뉴·리뷰 데이터
│  └─ lib/useReveal.js    스크롤 등장 애니메이션 훅
├─ index.html             SEO·OG·Preload 메타
├─ tailwind.config.js     브랜드 컬러 팔레트
└─ vite.config.js
```

## 페이지 구성

1. **Hero** – 풀스크린 한상 사진 + "만원에 가장 푸짐하고 행복한 한상"
2. **Concept** – 만원의 약속, 정직한 가성비
3. **Menu** – 보리밥 정식 + 사이드 메뉴
4. **Why 하하보리밥** – 4가지 기둥 (자연·갈치·청국장·만원)
5. **Gallery** – 음식·매장·메뉴판 9장 그리드
6. **Reviews** – 네이버/다이닝코드/식신 실제 후기
7. **Stores** – 양산 본점 + 울산 가맹 1호점
8. **FAQ** – 자주 묻는 질문 5문항 (FAQPage JSON-LD와 1:1)
9. **Franchise** – 가맹문의 (본사 전화 CTA)
10. **Footer** – 빠른 링크 + 매장 요약

## 배포 전 체크리스트

### OG 이미지 절대 URL
커스텀 도메인이 정해지면 `index.html`의 canonical·og:url·og:image·JSON-LD와
`public/sitemap.xml`·`public/robots.txt`의 `haha-boribap.pages.dev`를 새 도메인으로 일괄 치환.

## GitHub + Cloudflare Pages 배포 가이드

### 1) GitHub 저장소 생성 & 푸시

```powershell
git init
git add .
git commit -m "feat: 하하보리밥 홈페이지 초기 버전"

# gh CLI로 저장소 생성 (private 권장)
gh repo create haha-boribap --private --source=. --remote=origin --push
```

`gh`가 없다면 https://github.com/new 에서 수동 생성 후:

```powershell
git remote add origin https://github.com/<USER>/haha-boribap.git
git branch -M main
git push -u origin main
```

### 2) Cloudflare Pages 연결

1. https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. 방금 만든 `haha-boribap` 저장소 선택
3. 빌드 설정 입력
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `20` (Environment variables에서 `NODE_VERSION=20`)
4. **Save and Deploy** — 첫 빌드 후 `https://haha-boribap.pages.dev` 발급

### 3) 커스텀 도메인 (선택)

Cloudflare Pages 프로젝트 → **Custom domains** → **Set up a custom domain** 에서
보유 도메인 연결. Cloudflare에서 도메인을 관리하면 1클릭으로 끝.

### CLI 직배포 대안 (wrangler)

GitHub 없이 바로 배포하고 싶다면:

```powershell
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name haha-boribap
```

## 사진 교체 방법

`public/images/` 폴더의 파일명을 그대로 유지하면서 새 사진으로 덮어쓰면
코드 수정 없이 반영됩니다.

| 파일명 | 용도 |
|---|---|
| `hero-spread.png` | 메인 히어로 배경 (한상 풀샷) |
| `signature-set.jpg` | 메뉴 시그니처 카드 + 가맹 섹션 배경 |
| `storefront.jpg` | 양산 본점 카드 배경 |
| `interior.jpg` | 울산점 카드 배경 |
| `galchi.jpg` / `bulgogi.jpg` / `ssam.jpg` | 갤러리 |
| `banchan-1.jpg` / `banchan-2.jpg` | 갤러리 + Why 섹션 배경 |
| `menu-board.jpg` | 갤러리 |

## 기술 스택

- React 18 + Vite 5
- TailwindCSS 3 (브랜드 컬러 `boribap-*` 팔레트)
- Framer Motion (히어로 등장 애니메이션)
- IntersectionObserver 기반 스크롤 페이드업 (`useReveal`)
- Google Fonts: Gowun Batang (디스플레이) + Noto Sans KR (본문)

## 라이선스 / 저작권

매장 사진은 하하보리밥에서 제공받은 자료로 상업 사용에는 별도 협의가 필요합니다.
브랜드명 "하하보리밥"과 슬로건 "엄마의 손길 그대로"는 본점 권리입니다.
