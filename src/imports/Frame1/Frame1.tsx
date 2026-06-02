import svgPaths from "./svg-jtoryiuotv";
import imgImageWithFallback from "./71c63844b552f07cdd9597ba663fe91502f57a8b.png";
import imgImageWithFallback1 from "./c59a26581c510b8717a556a3c0d789d55716370c.png";
import imgImageWithFallback2 from "./1d3e5d422b0d7479074479b8346c1e51040e8428.png";
import imgImageWithFallback3 from "./3339b2afcb6376a9988f3c25dc9e27294db7af7e.png";
import imgImageWithFallback4 from "./5c2040b325365c3d750f749fe80e977da5536f84.png";
import imgHero from "./344202bebb9c7989a4f32ed9c9425e20a86f9de8.png";

function PlaceholderForHero() {
  return <div className="h-[845.556px] relative shrink-0 w-full" data-name="Placeholder for Hero" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Georgia:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#0a0a0a] text-[48px] text-center whitespace-nowrap">Featured Collection</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28.003px] max-w-[672px] relative shrink-0 w-[671.997px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336.02px] not-italic text-[18px] text-[rgba(10,10,10,0.6)] text-center top-[0.33px] tracking-[-0.4395px] whitespace-nowrap">Discover our handpicked selection of timeless pieces</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <ParagraphMargin />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[253.168px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[253.168px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px] whitespace-nowrap">Zen Chair</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[253.168px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.6)] tracking-[-0.3125px] whitespace-nowrap">$1,250</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[20px] left-0 top-[2.77px] w-[81.128px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41px] not-italic text-[#e9ebef] text-[14px] text-center top-[0.67px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[106.988px] relative shrink-0 w-[253.168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Heading1 />
        <Paragraph1 />
        <InlineContent />
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[253.168px]" data-name="ProductCard">
      <Container3 />
      <Container4 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[253.177px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[253.177px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px] whitespace-nowrap">Nordic Dining Set</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[253.177px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.6)] tracking-[-0.3125px] whitespace-nowrap">$3,800</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[20px] left-0 top-[2.77px] w-[81.128px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41px] not-italic text-[#e9ebef] text-[14px] text-center top-[0.67px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function InlineContent1() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[106.988px] relative shrink-0 w-[253.177px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Heading2 />
        <Paragraph2 />
        <InlineContent1 />
      </div>
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[285.16px] top-0 w-[253.177px]" data-name="ProductCard">
      <Container5 />
      <Container6 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[253.168px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[253.168px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px] whitespace-nowrap">Live Edge Table</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[253.168px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.6)] tracking-[-0.3125px] whitespace-nowrap">$2,600</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[20px] left-0 top-[2.77px] w-[81.128px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41px] not-italic text-[#e9ebef] text-[14px] text-center top-[0.67px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function InlineContent2() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[106.988px] relative shrink-0 w-[253.168px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Heading3 />
        <Paragraph3 />
        <InlineContent2 />
      </div>
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[570.34px] top-0 w-[253.168px]" data-name="ProductCard">
      <Container7 />
      <Container8 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[253.177px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white h-[253.177px] relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27px] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.4395px] whitespace-nowrap">Minimal Lounge Chair</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[253.177px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.6)] tracking-[-0.3125px] whitespace-nowrap">$1,450</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[20px] left-0 top-[2.77px] w-[81.128px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[41px] not-italic text-[#e9ebef] text-[14px] text-center top-[0.67px] tracking-[-0.1504px] whitespace-nowrap">View Details</p>
    </div>
  );
}

function InlineContent3() {
  return (
    <div className="h-[23.988px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[106.988px] relative shrink-0 w-[253.177px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Heading4 />
        <Paragraph4 />
        <InlineContent3 />
      </div>
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[855.5px] top-0 w-[253.177px]" data-name="ProductCard">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[360.156px] relative shrink-0 w-full" data-name="Container">
      <ProductCard />
      <ProductCard1 />
      <ProductCard2 />
      <ProductCard3 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[708.16px] max-w-[1280px] relative shrink-0 w-[1156.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[24px] py-[96px] relative size-full">
        <Container1 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[397.752px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[397.752px] items-start left-0 overflow-clip rounded-[10px] top-[37.07px] w-[530.339px]" data-name="Container">
      <ImageWithFallback4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Georgia:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[48px] whitespace-nowrap">
          <p className="leading-[48px] mb-0">Sustainable</p>
          <p className="leading-[48px]">Craftsmanship</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.8)] tracking-[-0.3125px] w-[531px]">Every piece in our collection is crafted from sustainably sourced oak and walnut, harvested from certified forests that prioritize environmental stewardship.</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-[530.347px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.8)] tracking-[-0.3125px] w-[531px]">Our master craftsmen combine traditional Japanese joinery techniques with Scandinavian design principles to create furniture that stands the test of time.</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-[530.347px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.8)] tracking-[-0.3125px] w-[531px]">We believe in honest materials, clean lines, and the beauty of natural wood grain— furniture that grows more beautiful with age.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[530.347px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[24px] relative size-full">
        <Paragraph5 />
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#e9ebef] h-[55.99px] left-0 rounded-[10px] top-[31.99px] w-[181.137px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[91.5px] not-italic text-[#030213] text-[16px] text-center top-[15.22px] tracking-[-0.3125px] whitespace-nowrap">Learn Our Story</p>
    </div>
  );
}

function InlineContent4() {
  return (
    <div className="h-[87.979px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578.33px] top-0 w-[530.347px]" data-name="Container">
      <Heading5 />
      <Container14 />
      <InlineContent4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[471.892px] max-w-[1280px] relative shrink-0 w-[1108.681px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function BrandPhilosophy() {
  return (
    <div className="relative shrink-0 w-full" data-name="BrandPhilosophy">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[96px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Georgia:Regular',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-white tracking-[0.9px] whitespace-nowrap">{`OAK & LINE`}</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[36px] relative shrink-0 w-[241.172px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Timeless furniture crafted with care</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[241.172px]" data-name="Container">
      <Heading6 />
      <Paragraph8 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Shop</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Chairs</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.172px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Tables</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.172px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Storage</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.172px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Accessories</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[120px] relative shrink-0 w-[241.172px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[289.17px] top-0 w-[241.172px]" data-name="Container">
      <Heading7 />
      <List />
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Our Story</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.172px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Craftsmanship</p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.172px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Sustainability</p>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.172px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Press</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[120px] relative shrink-0 w-[241.172px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem4 />
        <ListItem5 />
        <ListItem6 />
        <ListItem7 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[578.33px] top-0 w-[241.172px]" data-name="Container">
      <Heading8 />
      <List1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.3125px] whitespace-nowrap">Support</p>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.181px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Shipping</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.181px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">Returns</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[241.181px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] tracking-[-0.1504px] whitespace-nowrap">FAQ</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="h-[120px] relative shrink-0 w-[241.181px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ListItem8 />
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[867.5px] top-0 w-[241.181px]" data-name="Container">
      <Heading9 />
      <List2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[143.976px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <Container18 />
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center tracking-[-0.1504px] whitespace-nowrap">{`© 2026 OAK & LINE. All rights reserved.`}</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32.556px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.2)] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <Paragraph9 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-[1108.681px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Container16 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#030213] relative shrink-0 w-full" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[64px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-white min-h-[845.5560302734375px] relative shrink-0 w-full" data-name="Root">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <PlaceholderForHero />
        <Container />
        <BrandPhilosophy />
        <Footer />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[845.556px] relative shrink-0 w-[1156.667px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Root />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[191.997px] relative shrink-0 w-[593.941px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Georgia:Regular',sans-serif] leading-[0] left-[297.5px] not-italic text-[96px] text-center text-white top-[0.33px] tracking-[-2.4px] whitespace-nowrap">
          <p className="leading-[96px] mb-0">Timeless</p>
          <p className="leading-[96px]">Craftsmanship</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[27.995px] max-w-[672px] relative shrink-0 w-[593.941px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[297.86px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center top-[-0.33px] tracking-[-0.4492px] whitespace-nowrap">Handcrafted solid wood furniture that elevates your space</p>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] pt-[24px] relative size-full">
        <Paragraph10 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e9ebef] h-[55.99px] left-[197.91px] rounded-[10px] top-0 w-[198.099px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[99px] not-italic text-[#030213] text-[16px] text-center top-[15.22px] tracking-[-0.3125px] whitespace-nowrap">Explore Collection</p>
    </div>
  );
}

function InlineContent5() {
  return (
    <div className="h-[55.986px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0" data-name="Container">
      <Heading10 />
      <ParagraphMargin1 />
      <InlineContent5 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[845.556px] left-0 top-0 w-[1156.667px]" data-name="Hero">
      <div aria-hidden className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-clip-padding bg-gradient-to-b border-0 border-[transparent] border-solid from-[rgba(0,0,0,0.3)] inset-0 to-[rgba(0,0,0,0.1)]" />
      </div>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[99.453px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Georgia:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.22px] tracking-[0.8px] whitespace-nowrap">{`OAK & LINE`}</p>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="relative shrink-0" data-name="Link (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[48px] relative size-full">
        <Link />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[37.578px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.9)] top-[-0.78px] tracking-[-0.3125px] whitespace-nowrap">Shop</p>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="relative shrink-0" data-name="Link (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[32px] relative size-full">
        <Link1 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[38.646px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.9)] top-[-0.78px] tracking-[-0.3125px] whitespace-nowrap">Story</p>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="relative shrink-0" data-name="Link (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-[32px] relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[57.622px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.9)] top-[-0.78px] tracking-[-0.3125px] whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[197.839px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <LinkMargin1 />
        <LinkMargin2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[345.286px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <LinkMargin />
        <Container24 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSearch() {
  return (
    <div className="relative shrink-0" data-name="Button - Search">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[71.993px] left-0 top-0 w-[1156.667px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[24px] relative size-full">
        <Container23 />
        <ButtonSearch />
      </div>
    </div>
  );
}

function PremiumECommerceLandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[2590px] items-start relative shrink-0 w-[1156px]" data-name="Premium E-commerce Landing Page">
      <Body />
      <Hero />
      <Navigation />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative size-full">
      <PremiumECommerceLandingPage />
    </div>
  );
}