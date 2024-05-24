import Button from "./components/atoms/button";
import Label from "./components/atoms/label";
import Container from "./components/molecules/container";
import imgBanner from "@/assets/images/bg-header.png";
import imgAbout from "@/assets/images/img-about.png";
import imgPartner1 from "@/assets/images/img-partner-01.png";
import imgPartner2 from "@/assets/images/img-partner-02.png";
import imgPartner3 from "@/assets/images/img-partner-03.png";
import imgPartner4 from "@/assets/images/img-partner-04.png";
import imgPartner5 from "@/assets/images/img-partner-05.png";
import imgPartner6 from "@/assets/images/img-partner-06.png";
import imgPartner7 from "@/assets/images/img-partner-07.png";
import imgPartner8 from "@/assets/images/img-partner-08.png";
import imgPartner9 from "@/assets/images/img-partner-09.png";
import imgPartner10 from "@/assets/images/img-partner-10.png";
import bgContact from "@/assets/images/bg-contactus-banner.png";
import Image from "next/image";

const Home: React.FC = () => {
  const contents = [
    {
      head: "Goals",
      title: "목표",
      sub: "문화 및 엔터테인먼트 분야의 주요 언론사와의 파트너십을 통해 광범위한 미디어 커버리지를 확보합니다.",
    },
    {
      head: "Way",
      title: "방법",
      sub: "다년간 구축된 네트워크를 통해 다양한 플랫폼 (온라인, 방송, 인쇄 매체)에 걸쳐 고품질의 보도자료 및 기획 기사를 배포합니다.",
    },
    {
      head: "Effects",
      title: "효과",
      sub: " 브랜드 인지도 증가, 신제품 또는 이벤트의 홍보, 고객 기반 확대 등",
    },
  ];
  const imagesPartners = {
    group1: [
      {
        image: imgPartner1,
        width: 350,
        height: 62,
      },
      {
        image: imgPartner2,
        width: 250,
        height: 100,
      },
    ],
    group2: [
      {
        image: imgPartner3,
        width: 220,
        height: 70,
      },
      {
        image: imgPartner4,
        width: 250,
        height: 100,
      },
      {
        image: imgPartner5,
        width: 250,
        height: 80,
      },
    ],
    group3: [
      {
        image: imgPartner6,
        width: 201,
        height: 89,
      },
      {
        image: imgPartner7,
        width: 250,
        height: 100,
      },
      {
        image: imgPartner8,
        width: 290,
        height: 100,
      },
    ],
    group4: [
      {
        image: imgPartner9,
        width: 300,
        height: 100,
      },
      {
        image: imgPartner10,
        width: 250,
        height: 100,
      },
    ],
  };
  return (
    <>
      <div className="bg-banner w-full h-full relative">
        <Image
          src={imgBanner}
          alt="banner"
          className="w-full h-full object-contain"
        />
      </div>
      <Container className="absolute top-[295px] left-0 right-0 bottom-0 ">
        <pre>
          <Label text={`세상을 그리는\n 남다른 크리에이티브`} mode="heading" />
        </pre>
        <Button
          multipleBtn
          textBtnPrimary="지금 문의하기"
          textBtnSecondary="회사소개서 다운로드"
          className="mt-[30px]"
        />
      </Container>
      <Container className="py-[120px]">
        <div className="flex justify-between items-center">
          <pre>
            <Label text={`제작사와 함께\n성장하는 기업`} mode="title" />
          </pre>
          <div className="flex flex-col gap-4">
            <Label
              text="엔터테인먼트 맞춤형 종합 마케팅 컴퍼니"
              mode="title"
              className="!text-2xl text-black"
            />
            <pre>
              <Label
                text={`각 회사의 가치에 메이져세븐의 능력을 더해 더욱 풍성한 시너지를 일으켜\n 최고의 가치를 만듭니다.`}
                mode="subtitle"
                className="text-xl leading-7 !font-medium text-black"
              />
            </pre>
          </div>
        </div>
        <Image
          src={imgAbout}
          alt="img-about"
          className="w-full h-full object-contain mt-[72px]"
        />
      </Container>
      <Container className="bg-wh-light pt-[120px] pb-[217px]">
        <pre>
          <Label
            text={`제작사 미팅부터 기업 스터디,\n기획까지 전문가와 확실하게`}
            mode="title"
          />
        </pre>
        <Label
          text="파트너십을 통한 미디어 커버리지"
          mode="note"
          className="pt-[135px] pb-[39px]"
        />
        <div className="grid grid-cols-3 gap-[30px]">
          {contents &&
            contents.map((item, index) => (
              <div
                className="px-[48px] pt-[47px] pb-[54px] max-w-[378px] bg-white flex flex-col items-center rounded-lg group hover:bg-blue cursor-pointer "
                key={index}
              >
                <Label
                  text={item.head}
                  mode="subtitle"
                  className="text-blue !text-base !font-semibold group-hover:!text-white "
                />
                <Label
                  text={item.title}
                  mode="title"
                  className="!text-2xl group-hover:!text-white "
                />
                <Label
                  text={item.sub}
                  mode="subtitle"
                  className="!text-base !font-medium group-hover:!text-white "
                />
              </div>
            ))}
        </div>
      </Container>
      <Container className="pt-[119px] pb-[168px]">
        <pre>
          <Label
            text={`각 미디어에 맞춰\n최적화된 퀄리티와 서비스를 제공합니다.`}
            mode="title"
            className="mb-[130px]"
          />
        </pre>
        {/* Slider */}
      </Container>
      <Container className="py-[120px]">
        <pre>
          <Label
            text={`메이져세븐과\n함께 하는 파트너`}
            mode="title"
            className="mb-[63px]"
          />
        </pre>
        <div className="flex flex-col gap-7">
          <div className="flex justify-center gap-[75px]">
            {imagesPartners &&
              imagesPartners.group1.map((item, index) => (
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt="img-about"
                  className="object-contain"
                  key={index}
                />
              ))}
          </div>
          <div className="flex justify-center gap-[50px] ml-[20px]">
            {imagesPartners &&
              imagesPartners.group2.map((item, index) => (
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt="img-about"
                  className="object-contain"
                  key={index}
                />
              ))}
          </div>
          <div className="flex justify-center gap-[45px] ml-[50px]">
            {imagesPartners &&
              imagesPartners.group3.map((item, index) => (
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt="img-about"
                  className="object-contain "
                  key={index}
                />
              ))}
          </div>
          <div className="flex justify-center gap-[50px]">
            {imagesPartners &&
              imagesPartners.group4.map((item, index) => (
                <Image
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt="img-about"
                  className="object-contain "
                  key={index}
                />
              ))}
          </div>
        </div>
      </Container>
      <div className="w-full h-full relative">
        <Image
          src={bgContact}
          alt="bg-contact"
          className="w-full h-full object-contain"
        />
        <Container className="absolute top-0 left-[103px] right-[102px] bottom-0 flex justify-between items-center">
          <div className="flex flex-col gap-5">
            <pre>
              <Label
                text={`메이져세븐은 언제나\n함께할 준비가 되어 있습니다.`}
                mode="heading"
                className="!text-[28px] !leading-9"
              />
            </pre>
            <Label
              text="문의가 필요하신가요? 담당자와 함께 상담해 보세요."
              mode="heading"
              className="!text-base !leading-6"
            />
          </div>
          <Button mode="secondary" label="지금 바로 문의하기" />
        </Container>
      </div>
    </>
  );
};
export default Home;
