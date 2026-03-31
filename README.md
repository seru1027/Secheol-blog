# 🌌 Secheol Blog: Midnight Aurora

프리미엄 디자인과 강력한 관리 기능을 갖춘 Next.js 기반의 개인 기술 블로그입니다. 
"Midnight Aurora" 테마를 통해 세련된 사용자 경험을 제공하며, GitHub을 CMS로 활용하는 스마트한 아키텍처를 지향합니다.

## ✨ 핵심 기능 (Features)

### 👤 Admin Dashboard & Auth
- **GitHub OAuth Login**: 특정 사용자(`seru1027`) 전용 보안 로그인 시스템.
- **Smart Session**: Server-side 세션 관리를 통한 안전한 어드민 접근 제어.

### ✍️ Content Management (Git-as-CMS)
- **Live Markdown Preview**: 작성 중인 글을 실시간으로 렌더링하여 확인 가능.
- **Auto-Commit Integration**: GitHub API를 통해 작성된 글을 즉시 저장소에 커밋 및 배포 트리거.
- **MDX support**: Markdown 내에서 컴포넌트를 사용할 수 있는 유연한 콘텐츠 구조.

### 🎨 Design & Interaction
- **Midnight Aurora Theme**: 다크 모드 기반의 고화질 그래디언트 및 광원 효과.
- **Glassmorphism UI**: 투명도와 블러 효과를 통한 깊이감 있는 인터페이스.
- **Micro-interactions**: Framer Motion을 활용한 부드러운 페이지 전환 및 사이드바 애니메이션.

## 📂 프로젝트 구조 (Project Structure)

```text
src/
├── app/               # Next.js App Router (Pages & API)
│   ├── admin/         # 관리자 페이지 및 전용 컴포넌트
│   ├── blog/          # 게시글 목록 및 상세 페이지
│   └── api/           # OAuth 및 인증 관련 API 라우트
├── components/        # 공통 UI 컴포넌트 (Navbar, Footer, UI 패턴)
├── content/           # 블로그 포스트 데이터 (MDX 파일)
├── lib/               # 유틸리티 및 GitHub API 연동 로직
└── styles/           # 전역 스타일 설정
```

## 🚀 시작하기 (Getting Started)

1. **의존성 설치**:
   ```bash
   npm install
   ```

2. **환경 변수 설정**:
   `.env.local` 파일을 생성하고 다음 항목을 입력합니다.
   - `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` (OAuth App)
   - `GITHUB_TOKEN` (Personal Access Token with `repo` scope)
   - `NEXT_PUBLIC_BASE_URL` (Deployment URL)

3. **개발 서버 실행**:
   ```bash
   npm run dev
   ```

---
© 2024 **Park Secheol**. All rights reserved.
