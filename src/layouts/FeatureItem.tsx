import React from "react";
import type { ReactElement } from "react";
import style from "../assets/styles/section.module.css";

interface FeatureItemProps {
  iconSvg: ReactElement;
  title: string;
  content: string;
}

export const FeatureItem = ({ iconSvg, title, content }: FeatureItemProps) => {
  return (
    <div className={style.feature_item}>
      <div className="h-12 w-12 bg-[#FFDDB7] rounded-full flex justify-center items-center">
        {iconSvg}
      </div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};
