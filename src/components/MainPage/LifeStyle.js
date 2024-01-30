import Image from "next/image";

// Components
import ProgressCarousel from "@/common/ProgressCarousel";

// Styles
import "@/styles/main-page/life-style.scss";

// Helpers
import { rightArrow } from "@/helpers/svgs";

const carouselContainer = [
  {
    content: require("@/assets/images/life-style-carousel/item1.png").default,
    type: "image",
    tags: [
      "Катя",
      "21 лет",
      "Кишинёв",
      `Студент ${rightArrow} Truck dispatcher`,
    ],
  },
  {
    content: "life-style-carousel/item2.mp4",
    type: "video",
    tags: [],
  },
  {
    content: require("@/assets/images/life-style-carousel/item3.png").default,
    type: "image",
    tags: [],
  },
  {
    content: "life-style-carousel/item4.mp4",
    type: "video",
    tags: [],
  },
  {
    content: "life-style-carousel/item5.mp4",
    type: "video",
    tags: [],
  },
];

export default function LifeStyle() {
  return (
    <div className="life-style-container content">
      <div className="title-content">
        <h1 className="title">
          Профессия как
          <br />
          стиль жизни
        </h1>
        <p className="subtitle">
          В нашей компании{" "}
          <span className="underline-subtitle">Trucking42.com</span> работают
          100+ диспетчеров. Познакомься с нами поближе
        </p>
      </div>
      <div className="carousel-container">
        <ProgressCarousel slides={carouselContainer.length}>
          {carouselContainer.map((item, index) => (
            <div
              className="carousel-slide-wrapper"
              key={`life-style-carousel-${index}`}
            >
              <div className="slide-background-wrapper">
                {item.type === "image" ? (
                  <Image
                    className="slide-background"
                    src={item.content}
                    alt={`carousel-item-${index + 1}`}
                  />
                ) : (
                  <video
                    className="slide-background"
                    src={item.content}
                    autoPlay
                  />
                )}

                <div className="carousel-tags">
                  {item.tags.map((tag, idx) => (
                    <p
                      key={`tag-${index}-${idx}`}
                      dangerouslySetInnerHTML={{ __html: tag }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ProgressCarousel>
      </div>
    </div>
  );
}
