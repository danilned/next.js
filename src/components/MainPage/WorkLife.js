import Image from "next/image";

// Components
import ProgressCarousel from "@/common/ProgressCarousel";

// Styles
import "@/styles/main-page/work-life.scss";

const carouselContainer = [
  require("@/assets/images/work-life-carousel/item1.png").default,
  require("@/assets/images/work-life-carousel/item2.png").default,
  require("@/assets/images/work-life-carousel/item3.png").default,
  require("@/assets/images/work-life-carousel/item4.png").default,
];

export default function WorkLife() {
  return (
    <div className="work-life-component content">
      <div className="title-content">
        <h1 className="title">
          Work-life
          <br />
          баланс
        </h1>
        <p className="subtitle">
          Гибкий график, стабильный заработок и увлекательный мир логистики –
          все это ждет вас на пути к успешной карьере трак-диспетчера!
        </p>
      </div>
      <div className="carousel-container">
        <ProgressCarousel slides={carouselContainer.length}>
          {carouselContainer.map((cur, index) => (
            <Image
              src={cur}
              key={`work-life-${index}`}
              alt={`carousel-item-${index + 1}`}
            />
          ))}
        </ProgressCarousel>
      </div>
    </div>
  );
}
