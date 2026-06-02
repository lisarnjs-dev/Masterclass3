import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useInView,
  AnimatePresence,
} from "motion/react";

interface Product {
  title: string;
  description: string;
  category: string;
}

export const HeroParallax = ({
  products,
}: {
  products: Product[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-screen md:h-[300vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto md:[perspective:1000px] md:[transform-style:preserve-3d]"
    >
      <Header />

      {/* Mobile version - simple grid */}
      <div className="md:hidden px-6 mt-8 pb-10">
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.title}
              className="border border-white/10 bg-white/5 backdrop-blur-sm p-5 rounded-lg"
            >
              <div className="text-[10px] text-white/40 mb-2 tracking-wider uppercase">
                {product.category}
              </div>
              <h3 className="text-base font-bold mb-2 text-white">
                {product.title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop version - parallax */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="hidden md:block"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const TypewriterText = () => {
  const texts = ["AI 시대,\n직접 만들어야\n이긴다"];
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[0];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight min-h-[180px] md:min-h-[240px]">
      {displayText.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < displayText.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

const CountingNumber = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}+</span>;
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-32 md:py-40 px-6 w-full left-0 top-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-2 border border-white/20 mb-6 text-xs md:text-sm tracking-wide"
      >
        AI Product Sprint · Master Class 3기 · 마지막 모집
      </motion.div>
      <TypewriterText />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-lg md:text-xl mt-6 text-white/70 leading-relaxed"
      >
        코딩 몰라도 괜찮습니다. 5주 안에 AI 활용 프로덕트를 직접 만들고,
        실제로 쓸 수 있는 실력을 갖추는 마지막 기회입니다.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-3 gap-4 md:gap-8 text-center mt-10 max-w-2xl"
      >
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">
            <CountingNumber target={500} />
          </div>
          <div className="text-white/60 text-xs md:text-sm">수강생</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">5주</div>
          <div className="text-white/60 text-xs md:text-sm">완성 프로그램</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">3기</div>
          <div className="text-white/60 text-xs md:text-sm">마지막 모집</div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl h-full w-full">
        <div className="relative h-full w-full border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs text-white/40 mb-3 tracking-wider uppercase">
              {product.category}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              {product.title}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover/product:border-white/40 transition-colors">
            <svg
              className="w-6 h-6 text-white/60 group-hover/product:text-white/80 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-10 bg-white pointer-events-none transition-opacity"></div>
    </motion.div>
  );
};
