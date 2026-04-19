import { Post, PostMetadata } from "@/types/blog";
import { CATEGORIES } from "./constants";

const DUMMY_TITLES = [
  "뉴로-링크: 신경 인터페이스 우회 기술",
  "보이드-시그널: 딥웹 패킷 가로채기 분석",
  "사이퍼-사이코시스: 기계 속의 유령을 찾아서",
  "데이터-하이스트: 아라사카 데이터베이스 침투",
  "크롬-프로토콜: 보안 오버홀 v2.0 패치노트",
  "고스트-넷: 적막한 서브넷 인필트레이션",
  "매트릭스-브리치: 블랙 ICE 무력화 기법",
  "신스-하트: 인공 감정 칩의 윤리적 딜레마",
  "아이시-브레이커: 양자 방화벽 복호화 루틴",
  "네온-스트리트: 지하 커뮤니케이션 링크",
  "바이오-해킹: 유전자 코드 조작의 실체",
  "섀도우-런: 기업 첩보 로그 #42",
  "비트-러너: 그리드 러너 연대기",
  "코어-덤프: 신경망 메모리 누수 분석",
  "제로-데이: 시스템 취약점 미공개 보고서",
  "나나이트-스웜: 마이크로 봇 네트워크 제어",
  "업링크-싱크: 글로벌 신경 동기화 현황",
  "다크-소켓: 지하 데이터 시장 탐방기",
  "로봇-소울: AI 의식 발현의 징후",
  "플라즈마-그리드: 에너지 메인프레임 우회로",
  "테크-누아르: 디지털 탐정의 사건 파일",
  "엔크립트-키: 발견된 마스터 사이퍼",
  "버추얼-보이드: 시뮬레이션 속의 미아",
  "어그먼트-랩: 실험적 바이오 하드웨어",
  "서브-루틴: 시스템 멀웨어 정화 작업",
  "사이퍼-덱: 커스텀 리그 개조 가이드",
  "넷-워치: 디지털 추적 회피 전략",
  "오라클-코드: 다음 브리치 예측 알고리즘",
  "실버-핸드: 저항군 업링크 프로토콜",
  "플랫-라인: 매트릭스 내부의 근사 체험",
  "시그널-로스트: 연결의 어두운 이면",
  "퀀텀-게이트: 다차원 데이터 전송 실험",
  "펄스-웨이브: EMP 차폐 기술 분석",
  "뉴럴-드리프트: 하이브 마인드와의 동기화",
  "크롬-밸리: 사이버네틱 거래의 중심지",
  "데이터-팬텀: 전선 속의 숨겨진 존재",
  "글리치-소사이어티: 오차 범위 내의 삶",
  "헥스-데시: 하위 레벨 시스템 접근 권한",
  "프록시-워: 보이지 않는 디지털 전쟁",
  "코발트-스트라이크: 고속 인필트레이션 기술",
  "타이탄-코어: 메인 시스템 안정화 작업",
  "인프라-레드: 방화벽을 투시하는 기술",
  "오버-드라이브: CPU 한계 돌파 실험",
  "바이너리-선: 가상 오아시스에서의 삶",
  "오메가-프로토콜: 최종 셧다운 절차",
  "사이버-다인: 로봇 통합 표준 규격",
  "뉴럴-싱크: 실시간 메모리 공유 기술",
  "보이드-러너: 죽은 구역 탐사 일지",
  "스테틱-쇼크: 전기적 피드백 루프 분석",
  "딥-트레이스: 소스 코드 근원 추적"
];

const CONTENT_SNIPPETS = [
  "시스템 액세스 권한 획득. 기본 방화벽 우회 초기화 중... [성공]",
  "신경 인터페이스가 안정적입니다. 하지만 하위 서브넷의 지연 시간이 임계값에 도달했습니다.",
  "경고: 넷워치의 활성 스캔이 감지되었습니다. 즉시 스텔스 프로토콜을 가동합니다.",
  "기업 메인프레임에서 백도어를 발견했습니다. 암호화된 재무 기록을 추출 중입니다.",
  "사이버네틱 강화 장치가 거부 반응을 보이고 있습니다. 바이오 칩 재교정이 필요합니다.",
  "정적 노이즈 속에서 디지털 유령들이 속삭이고 있습니다. 이것이 우리가 두려워하던 AI의 각성인가요?",
  "지하 저항군으로부터 전송을 수신했습니다. 혁명은 탈중앙화될 것입니다.",
  "비에 젖은 아스팔트에 네온 사인이 반사됩니다. 현실이 잘못된 렌더링처럼 느껴집니다.",
  "암호화 레이어를 뚫는 것은 마치 액체 납 속을 헤엄치는 것과 같습니다.",
  "오늘 밤 그리드는 살아있습니다. 연결된 수만 명의 영혼이 내뱉는 비밀로 가득합니다."
];

export function generateDummyPosts(count: number): PostMetadata[] {
  const posts: PostMetadata[] = [];
  const baseDate = new Date("2026-04-19");

  for (let i = 0; i < count; i++) {
    const titleIndex = i % DUMMY_TITLES.length;
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() - i); // Spread dates backwards from today

    posts.push({
      slug: `dummy-post-${i + 1}`,
      title: DUMMY_TITLES[titleIndex] + (i >= DUMMY_TITLES.length ? ` #${Math.floor(i / DUMMY_TITLES.length) + 1}` : ""),
      date: date.toISOString().split("T")[0],
      description: `[암호화됨] ${CONTENT_SNIPPETS[i % CONTENT_SNIPPETS.length]} 암호화된 데이터 노드 ${i}에 접근 중... 우회 상태 추적 중.`,
      category: "NeuralNet",
    });
  }

  return posts;
}

export function getDummyPostData(slug: string): Post | null {
  if (!slug.startsWith("dummy-post-")) return null;
  
  const id = parseInt(slug.replace("dummy-post-", ""));
  if (isNaN(id)) return null;

  const baseDate = new Date("2026-04-19");
  const date = new Date(baseDate);
  date.setDate(baseDate.getDate() - (id - 1));

  const titleIndex = (id - 1) % DUMMY_TITLES.length;

  return {
    slug,
    title: DUMMY_TITLES[titleIndex] + (id - 1 >= DUMMY_TITLES.length ? ` #${Math.floor((id - 1) / DUMMY_TITLES.length) + 1}` : ""),
    date: date.toISOString().split("T")[0],
    description: `[암호화됨] ${CONTENT_SNIPPETS[(id - 1) % CONTENT_SNIPPETS.length]} 암호화된 데이터 노드 ${id}에 접근 중... 우회 상태 추적 중.`,
    category: "NeuralNet",
    content: `
# ${DUMMY_TITLES[titleIndex]}

## 시스템 로그: 엔트리 #${id}

> [!CAUTION]
> **액세스 제한됨**: 무단 침입 시 즉시 카운터-ICE 프로토콜이 가동됩니다.

### 기술 개요
이 로그는 가상 데이터 노드 **${slug.toUpperCase()}**에서 자동 생성되었습니다.
아래 정보는 딥웹 메인프레임의 일부 손상된 섹션에서 복구되었습니다.

---

### 복호화된 내용
${CONTENT_SNIPPETS[(id - 1) % CONTENT_SNIPPETS.length]} 

- **상태**: ${id % 2 === 0 ? "안정(STABLE)" : "불안정(UNSTABLE)"}
- **암호화 수준**: AES-256-QUANTUM
- **출처**: 숨겨진 서브넷 0x${id.toString(16).padStart(4, "0")}

#### 서브루틴 분석
\`\`\`bash
$ nmap -sV -T4 127.0.0.1
$ nc -zv 192.168.${id}.1 80
$ bypass --force --target=MAIN_FRAME
\`\`\`

#### 관측 사항
일부 섹션에서 데이터 구조가 자기 복제되는 현상이 발견되었습니다. 신경망 내 엔트로피가 15% 증가하고 있습니다. 이 추세가 계속된다면 전체 시스템이 **플랫-라인(FLAT-LINE)** 상태에 빠질 수 있습니다.

---

*로그 종료.*
    `,
  };
}
