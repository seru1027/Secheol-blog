---
title: "블로그 시스템 업그레이드: GitHub 기반의 어드민 대시보드 구축"
date: "2026-04-01"
description: "GitHub OAuth와 API를 활용하여 별도의 데이터베이스 없이 작동하는 스마트한 블로그 관리 시스템을 구현했습니다."
category: "DevLog"
---

안녕하세요! 오늘은 제 블로그의 큰 변화를 소개해 드리려고 합니다. 
단순한 정적 블로그를 넘어, 이제는 어디서든 편리하게 글을 작성하고 관리할 수 있는 **전용 어드민 시스템**을 구축했습니다.

### 🚀 주요 업데이트 내용

#### 1. 안전한 GitHub OAuth 로그인
별도의 회원가입이나 로컬 비밀번호 관리 없이, 제 GitHub 계정(`seru1027`)으로만 접근 가능한 안전한 인증 시스템을 구축했습니다. **Auth.js(NextAuth)** 스타일의 간결한 인증 흐름을 통해 보안성을 높였습니다.

#### 2. 실시간 Markdown 프리뷰 에디터
글을 쓰면서 동시에 어떻게 렌더링될지 바로 확인할 수 있는 프리뷰 기능을 추가했습니다. 실제 블로그와 동일한 스타일이 적용되어, 배포 전에 완성도를 미리 체크할 수 있습니다.

#### 3. GitHub API 기반의 'Serverless CMS'
제가 글을 작성하고 'Publish' 버튼을 누르면, 서버에서 GitHub API를 통해 자동으로 커밋을 생성합니다. 이 커밋은 다시 Vercel의 빌드 시스템을 트리거하여 **작성 즉시 실제 사이트에 반영**되는 마법 같은 흐름을 완성했습니다.

#### 4. Midnight Aurora 디자인 테마
전반적인 UI에 유리 질감(Glassmorphism)과 은은한 오로라 광원 효과를 적용하여, 더욱 프리미엄하고 몰입감 있는 사용자 경험을 제공합니다.

### 🛠 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS, Framer Motion
- **Auth**: GitHub OAuth
- **Data Management**: GitHub REST API
- **Content**: MDX, next-mdx-remote

이번 업데이트를 통해 콘텐츠 생산성이 비약적으로 상승했습니다. 앞으로 더 자주, 더 양질의 글로 찾아뵙겠습니다!
