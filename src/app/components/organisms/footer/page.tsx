import React from "react";
import Container from "@/components/molecules/container";
import Label from "../../atoms/label";
import Image from "next/image";
import Logo from "@/assets/images/logo-text1.png";
import logoFB from "@/assets/images/ic-circle-facebook.png";
import logoIns from "@/assets/images/ic-circle-instagram.png";
import logoYTB from "@/assets/images/ic-circle-youtube.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-black pt-[80px] pb-[121px] ">
      <Container className="flex">
        <div className="flex flex-col gap-[30px] mr-[214px]">
          <Image src={Logo} width={89} height={18} alt="logo" />
          <pre>
            <Label
              text={`대표이사 : 박병창   사업자번호 : 372-86-00836\n서울특별시 강남구 봉은사로 24길 12, 202호 (역삼동, 승광빌딩)\nE-mail : ​press@major7company.com`}
              mode="subtitle"
              className="!text-white !text-base !font-light"
            />
          </pre>
          <Label
            text="© 2024 Major7 Company. All Rights Reserved."
            mode="note"
            className="!text-base !leading-7 !font-light"
          />
        </div>
        <div className="flex flex-col gap-[30px] mr-[94px]">
          <pre>
            <Label
              text={`이용약관\n개인정보처리방침`}
              mode="subtitle"
              className="!text-white !text-base !font-semibold !leading-8"
            />
          </pre>
        </div>
        <div className="flex flex-col gap-[30px] mr-[201px]">
          <pre>
            <Label
              text={`부가서비스\n공지사항`}
              mode="subtitle"
              className="!text-white !text-base !font-semibold !leading-8"
            />
          </pre>
        </div>
        <div className="flex justify-between items-start gap-3">
          <Image src={logoFB} width={29} height={29} alt="logo-fb" />
          <Image src={logoIns} width={29} height={29} alt="logo-instagram" />
          <Image src={logoYTB} width={29} height={29} alt="logo-youtube" />
        </div>
      </Container>
    </div>
  );
};
export default Footer;
