import React from "react";
import { Carousel } from "../../components/Carousel";
import style from "../../assets/styles/section.module.css";
import styleCarousel from "../../assets/styles/carousel.module.css";
import { TittleSection } from "../TittleSection";
import News_1 from "../../assets/images/Home/news_1_small.png";
import News_2 from "../../assets/images/Home/news_2_small.png";
import News_3 from "../../assets/images/Home/news_3_small.png";
import { CaretRight } from "../../assets/images/svg/Icon";

interface MiniPostProps {
  image: string;
  date: string;
  title: string;
  content: string;
}

export const NewsSection = () => {
  const shorten = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };
  const MiniPost = ({ image, date, title, content }: MiniPostProps) => {
    return (
      <div className="p-4">
        <div
          className={`${styleCarousel.minipost_carousel} ${styleCarousel.bg_color}`}
        >
          <div className="w-full overflow-hidden h-52">
            <img
              src={image}
              className="object-cover object-top h-full w-full"
              alt=""
            />
          </div>
          <div className="p-4">
            <p className={style.date}>{date}</p>
            <h3 className={style.title}>{shorten(title, 50)}</h3>
            <p className={style.content}>{shorten(content, 130)}</p>
            <button className={style.read_more}>
              Đọc tiếp
              <CaretRight />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={style.section}>
      <TittleSection title="Tin tức" />
      <p className="w-1/2 sm:w-full mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Carousel autoplaySpeed={1000000000} showArrows={true}>
        <MiniPost
          image={News_1}
          date="08/08/2023"
          title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={News_2}
          date="08/08/2023"
          title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={News_3}
          date="08/08/2023"
          title="enfarm Agritech phát triển công nghệ bón phân thông minh"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={News_1}
          date="08/08/2023"
          title="Hợp tác nghiên cứu công nghệ bón phân thông minh"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={News_2}
          date="08/08/2023"
          title="Hợp tác nghiên cứu công nghệ phân bón “thông minh” vào phục vụ sản xuất nông nghiệp"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <MiniPost
          image={News_3}
          date="08/08/2023"
          title="enfarm Agritech phát triển công nghệ bón phân thông minh"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Carousel>
    </div>
  );
};
