import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

interface PricingOption {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  isRecommended?: boolean;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    id: "regular",
    name: "정가",
    description: "기본 가격",
    price: "590,000원",
    originalPrice: "590,000원",
    features: [
      "핵심 강의 10강",
      "실습 자료 120강",
      "케이스 스터디 7강",
      "평생 수강 가능",
    ],
  },
  {
    id: "discount",
    name: "3기 마지막 할인",
    description: "15% 할인 적용",
    price: "501,500원",
    originalPrice: "590,000원",
    features: [
      "모든 기본 구성 포함",
      "실시간 모각코 세션 (주 2회)",
      "성과 공유회 (5주차)",
      "1:1 미션 피드백",
    ],
  },
  {
    id: "review",
    name: "3기 마지막 할인 + 리뷰 이벤트",
    description: "20% 할인 적용",
    price: "472,000원",
    originalPrice: "590,000원",
    isRecommended: true,
    features: [
      "모든 할인 혜택 포함",
      "실시간 모각코 세션 (주 2회)",
      "성과 공유회 (5주차)",
      "1:1 미션 피드백",
      "수료 후 리뷰 작성 조건",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-20 px-4 md:px-6 border-b border-white/10 bg-gradient-to-b from-black via-zinc-950/30 to-black">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:gap-6 text-center">
          <div className="text-xs md:text-sm text-cyan-400 mb-2 md:mb-3 tracking-wide">
            PRICING
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">3기 가격 안내</h2>
          <p className="text-base md:text-lg text-white/70 mb-6 md:mb-8">
            마스터 클래스 마지막 기회
          </p>

          <div className="flex flex-col items-stretch gap-4 md:gap-6 w-full max-w-6xl">
            {pricingOptions.map((option) => (
              <Card
                key={option.id}
                className={`flex flex-1 flex-col justify-between text-left border-white/10 rounded-lg ${
                  option.isRecommended
                    ? "bg-cyan-400/5 border-cyan-400/40"
                    : "bg-white/5"
                }`}
              >
                <CardHeader className="p-4 md:p-6">
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <p className="text-lg md:text-xl">{option.name}</p>
                      {option.isRecommended && (
                        <span className="text-xl md:text-2xl text-cyan-400">★</span>
                      )}
                    </div>
                  </CardTitle>
                  <p className="text-xs md:text-sm text-white/60">{option.description}</p>
                  {option.originalPrice && option.id !== "regular" && (
                    <p className="text-xs md:text-sm line-through text-white/40">
                      {option.originalPrice}
                    </p>
                  )}
                  <span
                    className={`font-bold ${
                      option.isRecommended ? "text-3xl md:text-4xl text-cyan-400" : "text-2xl md:text-3xl"
                    }`}
                  >
                    {option.price}
                  </span>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <Separator className="mb-4 md:mb-6 bg-white/10" />
                  <ul className="space-y-2 md:space-y-3">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="size-4 md:size-5 flex-shrink-0 mt-0.5 text-cyan-400" />
                        <span className="text-xs md:text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto p-4 md:p-6">
                  <a
                    href="https://www.latpeed.com/products/_55MW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full h-11 md:h-12 px-4 md:px-6 font-medium text-sm md:text-base transition-all duration-300 relative overflow-hidden group rounded-md inline-flex items-center justify-center ${
                      option.isRecommended
                        ? "bg-cyan-400 text-black hover:bg-cyan-300 border border-cyan-400/50 shadow-[0_8px_32px_0_rgba(34,211,238,0.2)] hover:shadow-[0_12px_48px_0_rgba(34,211,238,0.3)] active:scale-95"
                        : "bg-white/5 text-white backdrop-blur-xl border border-white/20 shadow-[0_4px_16px_0_rgba(255,255,255,0.05)] hover:shadow-[0_8px_24px_0_rgba(255,255,255,0.1)] hover:bg-white/10 active:scale-95"
                    }`}
                  >
                    <span className="relative z-10">
                      {option.isRecommended ? "지금 신청하기" : "선택하기"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-6 md:mt-8 text-center max-w-2xl w-full">
            <p className="text-xl md:text-2xl font-bold text-white leading-tight">
              마스터 클래스 마지막 3기,
              <br className="md:hidden" /> 절대 놓치지 마세요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
