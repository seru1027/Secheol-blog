import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl text-gradient">
            👨‍💻 저를 소개합니다: 박세철
          </h1>
          <div className="mt-12 prose prose-invert prose-indigo lg:prose-lg">
            <h2 className="text-2xl font-bold">Intro</h2>
            <p>
              안녕하세요! 사용자에게 닿는 첫 화면의 즐거움을 설계하고, 그 뒤의 견고한 로직까지 책임지고 싶은 예비 풀스택 개발자 박세철입니다.
            </p>
            <p>
              저는 기술이 단순한 코드를 넘어 실제 문제를 해결하는 강력한 도구가 될 때 큰 매력을 느낍니다. 현재는 웹의 본질을 탐구하며, 기초부터 차근차근 기술적 스펙트럼을 넓혀가고 있습니다.
            </p>

            <h2 className="text-2xl font-bold mt-12 text-indigo-400">Vision: From Frontend to Full-Stack</h2>
            <p>
              지금은 사용자와 가장 가까운 곳에서 소통하는 프론트엔드에 몰입하고 있지만, 저의 최종 목적지는 데이터의 흐름 전반을 설계하고 관리하는 풀스택 개발자입니다.
            </p>

            <h2 className="text-2xl font-bold mt-12">Current Focus</h2>
            <ul>
              <li><strong>Next.js 15 & React</strong>: 서버 컴포넌트와 최신 렌더링 전략을 학습하며 고성능 웹 서비스 구축을 연습합니다.</li>
              <li><strong>Web Fundamentals</strong>: HTML, CSS, JavaScript의 본질을 이해하고 웹 표준을 준수하는 코드를 지향합니다.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 text-cyan-400">Future Goal</h3>
            <p>
              프론트엔드에서 쌓은 UI/UX 감각을 바탕으로, 효율적인 서버 로직과 데이터베이스 설계 능력을 갖춘 엔드 투 엔드(End-to-End) 개발 역량을 목표로 합니다.
            </p>

            <h2 className="text-2xl font-bold mt-12">Interest</h2>
            <ul>
              <li><strong>Web Ecosystem</strong>: Next.js 기반의 모던 프론트엔드 아키텍처</li>
              <li><strong>AI Integration</strong>: 생성형 AI를 개발 워크플로우에 녹여 생산성을 극대화하는 방법</li>
              <li><strong>System Design</strong>: 확장 가능하고 유지보수가 용이한 코드 구조 설계</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12">Contact</h2>
            <p>
              새로운 기술을 배우고 적용하는 과정을 기록하는 이 블로그가 저에게는 성장의 밑거름이, 누군가에게는 유익한 정보가 되길 바랍니다. 협업 제안이나 기술적인 대화는 언제든 환영입니다!
            </p>
            <div className="mt-8 space-y-3 not-prose border-l-2 border-indigo-500/30 pl-4 py-1">
              <p className="text-foreground/80 flex items-center gap-3">
                <span className="text-xl">📧</span>
                <span className="font-mono text-sm tracking-tight text-muted-foreground">minimini010318@gmail.com</span>
              </p>
              <p className="text-foreground/80 flex items-center gap-3">
                <span className="text-xl">🐙</span>
                <span className="font-mono text-sm tracking-tight text-muted-foreground">github.com/seru1027</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
