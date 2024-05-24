import React from "react";
import Container from "../../molecules/container";
import Image from "next/image";
import Logo from "@/assets/images/logo-text.png";
import Label from "@/components/atoms/label";
import Button from "../../atoms/button";
import Link from "next/link";

const Header: React.FC = () => {
  const navLinks = [
    {
      name: "회사소개",
    },
    {
      name: "서비스",
    },
    {
      name: "포트폴리오",
    },
    {
      name: "멀티미디어",
    },
    {
      name: "파트너",
    },
  ];
  return (
    <>
      <div className="bg-[#00000034] w-full h-fit fixed inset-0 z-[9999]">
        <Container className="py-[20px] flex items-center justify-between">
          <Image
            src={Logo}
            width={89}
            height={17}
            alt="Picture of the author"
          />
          <nav>
            <ul className="flex gap-[48px] items-center">
              {navLinks &&
                navLinks.map((item, index) => (
                  <Link href="#" key={index}>
                    <Label
                      text={item.name}
                      className="!text-base text-white font-semibold"
                    />
                  </Link>
                ))}
              <Button label="광고 문의" mode="primary" />
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
};
export default Header;
