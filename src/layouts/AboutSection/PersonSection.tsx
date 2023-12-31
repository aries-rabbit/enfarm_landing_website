import React from "react";
import { TittleSection } from "../TittleSection";
import avt_co_founder from "../../assets/images/About/avt_co-founder_small.png";
import avt_ceo from "../../assets/images/About/avt_ceo_small.png";

interface CardInforProps {
  image: string;
  description: string;
  name: string;
  role: string;
}

export const PersonSection = () => {
  const CardInfor = ({ image, description, name, role }: CardInforProps) => {
    return (
      <div className="bg-white w-1/2 sm:w-full rounded-[32px] px-6 py-10 flex flex-col items-center gap-4">
        <img
          src={image}
          className="w-48 h-48 sm:w-32 sm:h-32 rounded-full"
          alt=""
        />
        <p>{description}</p>
        <div className="w-full">
          <p className="text-right text-[#306B1B]">{name}</p>
          <p className="text-right text-[#306B1B]">{role}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TittleSection title="Gặp gỡ founder" />
      <div className="w-2/3 mx-auto flex gap-4 sm:w-full justify-between lg:w-full sm:gap-2 sm:flex-col">
        <CardInfor
          image={avt_co_founder}
          description="Short description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Nguyễn Đỗ Dũng"
          role="Co-Founder"
        />
        <CardInfor
          image={avt_ceo}
          description="Short description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Hồ Long Phi"
          role="CEO"
        />
      </div>
      <div className="w-2/3 mx-auto sm:w-full">
        <h2 className="text-[#C3C8BB] text-[32px] text-center mt-10 sm:text-[24px]">
          Quote: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </h2>
      </div>
    </div>
  );
};
