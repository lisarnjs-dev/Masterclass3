import { useState, useRef } from "react";
import { Check, X as XIcon, Sparkles } from "lucide-react";
import { PricingSection } from "./components/PricingSection";
import { HeroParallax } from "./components/HeroParallax";
import { LiquidButton } from "./components/ui/liquid-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Balloons } from "./components/ui/balloons";
import { FallingPattern } from "./components/ui/falling-pattern";

export default function App() {
  const [openFaq, setOpenFaq] = useState<string>("");
  const balloonsRef = useRef<any>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEasterEgg = () => {
    if (balloonsRef.current && balloonsRef.current.launchAnimation) {
      balloonsRef.current.launchAnimation();
    }
  };

  const products = [
    {
      title: "AI 프롬프트 엔지니어링",
      description: "ChatGPT를 활용한 효과적인 프롬프트 작성법과 실전 활용 전략을 배웁니다.",
      category: "1주차",
    },
    {
      title: "노코드 도구 마스터",
      description: "개발 없이 프로덕트를 만드는 최신 노코드 툴 활용법을 익힙니다.",
      category: "2주차",
    },
    {
      title: "API 연동의 기초",
      description: "외부 서비스와 연결하여 강력한 기능을 구현하는 방법을 학습합니다.",
      category: "2주차",
    },
    {
      title: "데이터베이스 설계",
      description: "실제 서비스에 필요한 데이터 구조를 설계하고 구축합니다.",
      category: "3주차",
    },
    {
      title: "UI/UX 기획",
      description: "사용자 중심의 인터페이스를 기획하고 디자인합니다.",
      category: "3주차",
    },
    {
      title: "프로덕트 배포",
      description: "완성한 프로덕트를 실제로 배포하여 사용자에게 제공합니다.",
      category: "4주차",
    },
    {
      title: "사용자 피드백 분석",
      description: "실제 사용자의 피드백을 수집하고 분석하는 방법을 배웁니다.",
      category: "5주차",
    },
    {
      title: "개선 및 반복",
      description: "피드백을 바탕으로 프로덕트를 개선하는 프로세스를 실습합니다.",
      category: "5주차",
    },
    {
      title: "직장인 맞춤 트랙",
      description: "업무 자동화와 생산성 향상을 위한 AI 도구를 개발합니다.",
      category: "트랙",
    },
    {
      title: "프리랜서 트랙",
      description: "포트폴리오 생성과 클라이언트 관리 도구를 만듭니다.",
      category: "트랙",
    },
    {
      title: "1인 창업 트랙",
      description: "MVP 프로토타입을 빠르게 제작하고 검증합니다.",
      category: "트랙",
    },
    {
      title: "실시간 모각코",
      description: "주 1회 강사와 함께 실시간으로 문제를 해결합니다.",
      category: "특별 구성",
    },
    {
      title: "1:1 피드백",
      description: "주차별 미션에 대한 개인 맞춤 피드백을 받습니다.",
      category: "특별 구성",
    },
    {
      title: "성과 공유회",
      description: "5주차에 만든 프로덕트를 발표하고 피드백을 교환합니다.",
      category: "특별 구성",
    },
    {
      title: "평생 수강권",
      description: "강의 자료는 평생 무제한으로 복습 가능합니다.",
      category: "혜택",
    },
  ];

  return (
    <div className="dark min-h-screen bg-black text-white relative">
      {/* Falling Pattern Background */}
      <FallingPattern
        className="fixed inset-0 z-0 pointer-events-none"
        color="rgba(255,255,255,0.25)"
        backgroundColor="transparent"
        duration={150}
        blurIntensity="1em"
        density={1}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="font-bold text-base md:text-lg tracking-wide">SUPER <span className="text-cyan-400">HUMAN</span></div>
          <LiquidButton
            size="default"
            className="text-white text-sm md:text-base px-4 md:px-6"
            onClick={() => window.open("https://www.latpeed.com/products/_55MW", "_blank")}
          >
            3기 신청하기
          </LiquidButton>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroParallax products={products} />

      {/* Reviews Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-white/10 bg-gradient-to-b from-black via-zinc-950/30 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs md:text-sm text-cyan-400 mb-2 md:mb-3 tracking-wide">REVIEWS</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">수강생들의 실제 후기</h2>
          <div className="grid grid-cols-1 gap-5 md:gap-6">
            {[
              {
                quote:
                  "코딩 한 줄도 모르던 제가 실제로 쓸 수 있는 AI 도구를 만들었습니다. 회사에서 바로 써먹고 있어요.",
                name: "1기 수강생 A",
                role: "직장인",
              },
              {
                quote:
                  "ChatGPT로 뭘 만들어야 할지 막막했는데, 5주 만에 제 사업 아이디어를 MVP로 만들었습니다.",
                name: "2기 수강생 A",
                role: "1인 창업가",
              },
              {
                quote:
                  "개발자가 아니어도 괜찮다는 말이 진짜였어요. 강의 하나하나가 실전 중심이라 헛되이 쓴 시간이 없었습니다.",
                name: "2기 수강생 B",
                role: "프리랜서",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="border-l-2 border-cyan-400 pl-4 md:pl-6 py-4 md:py-5 bg-white/5 rounded-r-lg"
              >
                <div className="text-5xl md:text-6xl text-cyan-400/40 leading-none mb-3 md:mb-4">"</div>
                <p className="text-base md:text-lg text-white/80 mb-4 md:mb-6 leading-relaxed">{review.quote}</p>
                <div className="font-medium text-sm md:text-base">{review.name}</div>
                <div className="text-xs md:text-sm text-white/50 mt-1">{review.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-white/10 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs md:text-sm text-cyan-400 mb-2 md:mb-3 tracking-wide">PROBLEM</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">혹시 이런 고민 하고 계신가요?</h2>
          <div className="space-y-3 md:space-y-4 mb-8 md:mb-12 text-base md:text-lg text-white/70">
            <div>— AI 활용법은 많이 들었는데, 막상 뭘 만들어야 할지 모르겠다</div>
            <div>— ChatGPT 쓰면 뭐든 된다는데, 실제론 원하는 결과가 안 나온다</div>
            <div>— 개발자 없이도 내 아이디어를 직접 구현하고 싶다</div>
            <div>— AI 도구만 배우는 게 아니라, 진짜 '만드는 법'을 배우고 싶다</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-lg">
            <p className="text-lg md:text-xl leading-relaxed">
              AI 시대에 필요한 건 <span className="font-bold text-cyan-400">도구 사용법이 아니라</span>,
              <br />
              직접 만들어 검증하는 <span className="font-bold text-cyan-400">프로덕트 사고방식</span>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-white/10 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs md:text-sm text-cyan-400 mb-2 md:mb-3 tracking-wide">CURRICULUM</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">전체 커리큘럼 개요</h2>

          {/* 온보딩 강의 */}
          <div className="mb-10 md:mb-12">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">온보딩 베이스캠프 강의 (10강)</h3>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="border border-white/10 p-4 md:p-6 bg-white/5 rounded-lg">
                <div className="font-bold mb-2 md:mb-3 text-base md:text-lg">Part 1 - 마인드셋</div>
                <div className="text-xs md:text-sm text-white/60 mb-2 md:mb-3">3강</div>
                <ul className="text-xs md:text-sm text-white/70 space-y-1.5 md:space-y-2">
                  <li>• 이 강의를 100% 활용하는 법</li>
                  <li>• 바이브코딩이란 무엇인가?</li>
                  <li>• 비개발자가 AI 앞에서 막히는 진짜 이유</li>
                </ul>
              </div>
              <div className="border border-white/10 p-4 md:p-6 bg-white/5 rounded-lg">
                <div className="font-bold mb-2 md:mb-3 text-base md:text-lg">Part 2 - 왕초보 필수 개념</div>
                <div className="text-xs md:text-sm text-white/60 mb-2 md:mb-3">4강</div>
                <ul className="text-xs md:text-sm text-white/70 space-y-1.5 md:space-y-2">
                  <li>• 웹사이트 작동 원리</li>
                  <li>• 파일과 폴더 구조 이해하기</li>
                  <li>• 로컬 vs 배포</li>
                  <li>• 도메인과 URL 개념</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 본강의 */}
          <div className="mb-10 md:mb-12">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">본강의 (PART 0~8)</h3>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <table className="w-full border-collapse min-w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 md:py-3 px-3 md:px-4 font-medium text-xs md:text-sm">PART</th>
                    <th className="text-left py-2 md:py-3 px-3 md:px-4 font-medium text-xs md:text-sm">주제</th>
                    <th className="text-center py-2 md:py-3 px-3 md:px-4 font-medium text-xs md:text-sm">강수</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm">
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 0</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">시작 전 준비</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">4강</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 1</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">프롬프트 기초</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">10강</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 2</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">툴 Mastery</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">17강</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 3</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">바이브코딩 핵심</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">10강</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 4</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">에러 해결 꿀팁</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">9강</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 5</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">공식 문서 활용법</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">10강</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 6</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">프로젝트 1: 예약 시스템</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">11강</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 7</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">프로젝트 2: 블로그</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">10강</td>
                  </tr>
                  <tr>
                    <td className="py-2 md:py-3 px-3 md:px-4 whitespace-nowrap">PART 8</td>
                    <td className="py-2 md:py-3 px-3 md:px-4">상황별 실전 트랙</td>
                    <td className="py-2 md:py-3 px-3 md:px-4 text-white/60 text-center">12강</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 실전 프로젝트 */}
          <div className="mb-10 md:mb-12">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">실전 프로젝트</h3>
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="border border-white/10 p-4 md:p-6 rounded-lg">
                <div className="font-bold mb-2 text-sm md:text-base">프로젝트 1</div>
                <div className="text-xs md:text-sm text-white/60 mb-3 md:mb-4">토스페이먼츠 결제 가능한 상담 예약 서비스</div>
                <div className="text-xs md:text-sm text-white/70">실제 결제부터 배포까지 전 과정 실습</div>
              </div>
              <div className="border border-white/10 p-4 md:p-6 rounded-lg">
                <div className="font-bold mb-2 text-sm md:text-base">프로젝트 2</div>
                <div className="text-xs md:text-sm text-white/60 mb-3 md:mb-4">로그인 기능이 있는 블로그 만들기</div>
                <div className="text-xs md:text-sm text-white/70">v0와 Claude Code로 UI부터 OAuth까지</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-6 text-center">
            <div className="border border-white/10 p-5 md:p-6 bg-white/5 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400">10강</div>
              <div className="text-xs md:text-sm text-white/60">온보딩 베이스캠프</div>
            </div>
            <div className="border border-white/10 p-5 md:p-6 bg-white/5 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400">93강</div>
              <div className="text-xs md:text-sm text-white/60">본강의 (PART 0~8)</div>
            </div>
            <div className="border border-white/10 p-5 md:p-6 bg-white/5 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold mb-2 text-cyan-400">5강</div>
              <div className="text-xs md:text-sm text-white/60">마스터클래스 전용 보너스</div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 p-5 md:p-6 bg-white/5 border border-white/10 text-center rounded-lg">
            <p className="text-sm md:text-base text-white/80">
              <span className="font-bold text-white">총 108강</span> + 지속 업데이트되는 보너스 강의
            </p>
          </div>
        </div>
      </section>

      {/* 3기 Exclusive Features */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-white/10 relative bg-gradient-to-b from-black via-zinc-950/30 to-black">
        <Balloons ref={balloonsRef} type="both" text="3기" fontSize={100} color="#ffffff" />
        <div className="max-w-4xl mx-auto">
          <div className="text-xs md:text-sm text-cyan-400 mb-2 md:mb-3 tracking-wide">EXCLUSIVE</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">3기만의 특별 구성</h2>
          <div className="space-y-4 md:space-y-6">
            <div className="border-l-2 border-cyan-400 pl-4 md:pl-6 py-3 md:py-4 bg-white/5 rounded-r-lg">
              <h3 className="text-lg md:text-xl font-bold mb-2">실시간 모각코 세션 <span className="text-cyan-400 text-base font-normal">주 2회 · 선택 참여</span></h3>
              <p className="text-sm md:text-base text-white/70">
                매주 월·수 오후 8~10시, 혼자 막힐 때 함께 풀어가는 2시간. 강사와 수강생이 실시간으로 문제를 해결합니다.
              </p>
            </div>
            <div className="border-l-2 border-cyan-400 pl-4 md:pl-6 py-3 md:py-4 bg-white/5 rounded-r-lg">
              <h3 className="text-lg md:text-xl font-bold mb-2">오프라인 성과공유회 <span className="text-cyan-400 text-base font-normal">7/4 오후 7~9시 · 서울 강남</span></h3>
              <p className="text-sm md:text-base text-white/70">
                만든 프로덕트를 서로 시연하고 피드백하는 시간. 실제 사용자 반응을 받아볼 수 있습니다.
              </p>
            </div>
            <div className="border-l-2 border-cyan-400 pl-4 md:pl-6 py-3 md:py-4 bg-white/5 rounded-r-lg">
              <h3 className="text-lg md:text-xl font-bold mb-2">1:1 미션 피드백</h3>
              <p className="text-sm md:text-base text-white/70">
                주차별 미션 제출 시 강사의 직접 피드백을 받습니다. 방향을 놓치지 않도록 가이드합니다.
              </p>
            </div>
          </div>

          {/* Easter Egg Button */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <button
              onClick={handleEasterEgg}
              className="group px-5 md:px-6 py-2.5 md:py-3 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
              <span className="text-white/60 group-hover:text-white transition-colors text-xs md:text-sm">
                이스터에그
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Who Should Take This */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-white/10 bg-gradient-to-b from-black via-zinc-950/20 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">이런 분께 추천합니다</h2>
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            <div className="bg-white/5 p-5 md:p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Check className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                <span className="font-bold text-base md:text-lg">맞는 분</span>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-white/70">
                <li><span className="text-cyan-400">✓</span> AI 도구를 써봤지만 '내 것'을 만들고 싶은 분</li>
                <li><span className="text-cyan-400">✓</span> 개발자 없이 직접 프로덕트를 만들어야 하는 분</li>
                <li><span className="text-cyan-400">✓</span> 아이디어는 있는데 실행 방법을 모르는 분</li>
                <li><span className="text-cyan-400">✓</span> 5주 동안 주 3~4시간 투자 가능한 분</li>
              </ul>
            </div>
            <div className="bg-white/5 p-5 md:p-6 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <XIcon className="w-5 h-5 flex-shrink-0" />
                <span className="font-bold text-base md:text-lg">안 맞는 분</span>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-white/70">
                <li>✗ 강의만 듣고 실습은 안 하려는 분</li>
                <li>✗ 코딩을 깊이 배우고 싶은 분 (개발 부트캠프 추천)</li>
                <li>✗ 당장 수익을 기대하는 분 (스킬 습득이 목표)</li>
                <li>✗ 시간 투자 없이 결과만 원하는 분</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-white/10 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs md:text-sm text-cyan-400 mb-2 md:mb-3 tracking-wide">FAQ</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">자주 묻는 질문</h2>

          <Accordion
            type="single"
            collapsible
            value={openFaq}
            onValueChange={setOpenFaq}
          >
            {[
              {
                q: "코딩을 전혀 몰라도 되나요?",
                a: "네, 괜찮습니다. 이 프로그램은 코딩을 가르치는 게 아니라 'AI 도구를 활용해 프로덕트를 만드는 법'을 가르칩니다. 실제로 1기, 2기 수강생 중 95%가 비개발자였습니다.",
              },
              {
                q: "나한테 맞는 수준인지 모르겠어요.",
                a: "ChatGPT나 AI 도구를 한 번이라도 써봤다면 충분합니다. 커리큘럼은 초보자 기준으로 설계되어 있습니다.",
              },
              {
                q: "정해진 시간이 있나요?",
                a: "핵심 강의는 녹화본으로 제공되어 언제든 자유롭게 수강하실 수 있습니다. 실시간 모각코는 매주 월·수 오후 8~10시에 진행되며 선택 참여입니다. 오프라인 성과공유회는 7월 4일 오후 7~9시, 서울 강남 근처에서 진행됩니다.",
              },
              {
                q: "3기 이후에도 열리나요?",
                a: "마스터 클래스는 더이상 열리지 않습니다. 추후 새로운 형식의 프로그램으로 인사드릴 예정입니다.",
              },
              {
                q: "환불이 가능한가요?",
                a: "개강일 이후 환불이 불가합니다. 신청 전 충분히 검토 후 결제해 주세요.",
              },
            ].map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-base md:text-lg py-4 md:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-white/70 leading-relaxed pb-4 md:pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-black via-zinc-950/30 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
            3기 마지막 모집,
            <br />
            지금 시작하세요
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-6 md:mb-8">
            이 가격, 이 구성으로는 다시 열리지 않습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LiquidButton
              size="xl"
              className="text-white text-base md:text-lg w-full sm:w-auto"
              onClick={() => window.open("https://www.latpeed.com/products/_55MW", "_blank")}
            >
              지금 신청하기
            </LiquidButton>
            <a
              href="https://super-human-lisakkwon.notion.site/AI-Product-Sprint-329463bf88db802794b0c5aac55a227d?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 border border-cyan-400/40 text-cyan-400 font-medium text-base rounded-md hover:bg-cyan-400/10 transition-colors w-full sm:w-auto"
            >
              가이드 및 샘플강의 보러가기 →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-6 border-t border-white/10 text-center text-xs md:text-sm text-white/40 bg-black">
        <p>© 2026 Super Human. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
}