# 🌌 Secheol Blog: The Luminous Architect (AI ✕ Human 프로젝트)

본 프로젝트는 최신 AI 에이전트와 인간 개발자의 밀도 높은 협업을 통해, 단순히 기능만 갖춘 웹사이트를 넘어 현대적이고 프리미엄한 감성을 가진 기술 블로그를 완성하는 것을 목표로 했습니다.

---

## 🌐 라이브 사이트 (Live Demo)
👉 **[secheol-blog.vercel.app](https://secheol-blog.vercel.app/)**

---

## ✨ 핵심 기능 (Features)

### 1. 전용 어드민 대시보드
- **GitHub OAuth Login**: 특정 사용자(`seru1027`) 전용 보안 로그인 시스템.
- **보안 강화 및 권한 제어**: 허가되지 않은 사용자가 접근 시, 전용 에러 페이지(`Unauthorized`)로 리다이렉트되어 시스템 오용 방지.
- **Live Markdown Preview**: 글 작성 중 실시간으로 결과물을 확인하는 최적의 편집 환경.
- **Auto-Commit CMS**: 글 작성 즉시 GitHub API를 통해 저장소에 커밋되어 별도 DB 없이 콘텐츠 관리.

### 2. 고성능 블로그 엔진
- **Next.js 16 (Turbopack)**: 최신 서버 컴포넌트 기반의 압도적인 로딩 속도와 SEO 최적화.
- **MDX 기반 포스팅**: 마크다운의 간결함과 리액트 컴포넌트의 유연함을 결합.
- **반응형 디자인**: 모든 디바이스에서 최적화된 "The Luminous Architect" 테마 경험.
- **UX 최적화**: 게시물 카드 전체 영역 클릭 기능을 통한 직관적인 탐색 환경 제공.

---

## 🎨 디자인 컨셉: The Luminous Architect
Stitch 디자인 시스템을 기반으로 한 **'빛나는 건축가'** 컨셉을 지향합니다.
- **No-Line Aesthetic**: 물리적인 선을 배제하고 배경의 톤 차이(Tonal Layering)를 통해 경계를 정의하는 세련된 구조.
- **Dynamic Interaction**: `BentoCard`에 적용된 실시간 마우스 추적 글로우(Glow) 효과로 생동감 있는 경험 제공.
- **Floating Glass**: 고도화된 `backdrop-blur`와 투명도를 활용하여 부드러운 레이어링을 구현.

---

## 🤖 AI 에이전트 협업 과정 (AI Collaboration)

이번 프로젝트는 **안티 그래비티(Antigravity)** 환경에서 AI 에이전트와 페어 프로그래밍을 진행하며 개발되었습니다. 

- **Stitch 기반 디자인 현대화**: StitchMCP를 활용하여 전문적인 디자인 토큰을 추출하고, 이를 코드 레벨에서 프리미엄한 UI로 조율했습니다.
- **UX 아키텍처 개선**: 사용성 분석을 통해 카드의 인터랙션을 개선하고, 내비게이션 동선을 최적화했습니다.
- **기술적 폴리싱**: Tailwind CSS 4와 Framer Motion을 결합하여 고수준의 물리 애니메이션을 구현했습니다.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: Next.js 16 (App Router / Turbopack)
- **Design System**: Stitch "The Luminous Architect"
- **Styling**: Tailwind CSS 4, Framer Motion
- **Auth**: GitHub OAuth
- **Data Management**: GitHub REST API
- **Content**: MDX (`next-mdx-remote`)

---

## 🚀 시작하기 (Getting Started)

1. **의존성 설치**: `npm install`
2. **환경 변수 설정**: `.env.local` 파일에 아래 항목을 입력합니다.
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` (OAuth App)
   - `GITHUB_TOKEN` (Personal Access Token with `repo` scope)
   - `NEXT_PUBLIC_BASE_URL` (Local: `http://localhost:3000`)
3. **개발 서버 실행**: `npm run dev`

---

## 👤 연락처 (Contact)

작성자: **박세철 (Park Secheol)**
- 📧 Email: minimini010318@gmail.com
- 🐙 GitHub: [github.com/seru1027](https://github.com/seru1027)

---

> 본 프로젝트는 AI와 인간의 협업이 만들어낼 수 있는 창의적인 웹 경험을 목표로 제작되었습니다.
