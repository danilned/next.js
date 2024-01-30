import Image from "next/image";

// Components
import ProgressCarousel from "@/common/ProgressCarousel";

// Styles
import "@/styles/main-page/work-life.scss";

const carouselContainer = [
  {
    image: require("@/assets/images/work-life-carousel/item1.png").default,
    title: "Можешь спать до обеда! ",
  },
  {
    image: require("@/assets/images/work-life-carousel/item2.png").default,
    title: "Твое место работы определяешь ты сам",
  },
  {
    image: require("@/assets/images/work-life-carousel/item3.png").default,
    title: "Сам распределяешь степень загруженности",
  },
  {
    image: require("@/assets/images/work-life-carousel/item4.png").default,
    title: "Средняя зарплата трак диспетчера $2,940",
  },
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
        <ProgressCarousel
          slides={carouselContainer.length}
          options={{ align: "start", containScroll: false, loop: true }}
          autoPlay
        >
          {carouselContainer.map((item, index) => (
            <div className="carousel-slide-wrapper" key={`work-life-${index}`}>
              <div className="image-container">
                <p>{item.title}</p>
                <Image src={item.image} alt={`carousel-item-${index + 1}`} />
              </div>
            </div>
          ))}
        </ProgressCarousel>
      </div>
    </div>
  );
}
