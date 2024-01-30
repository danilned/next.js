import Image from "next/image";

// Components
import CommonCarousel from "@/common/CommonCarousel";

// Styles
import "@/styles/main-page/reviews.scss";

const carouselContainer = [
  {
    name: "Максим Фомин",
    label: "Офигенный курс! Никакого скучного бла-бла, только полезные знания.",
    image: require("@/assets/images/reviews-carousel/item1.png").default,
  },
  {
    name: "Юлия Холодкова",
    label: "Курс, который заставляет учиться с удовольствием.",
    image: require("@/assets/images/reviews-carousel/item2.png").default,
  },
  {
    name: "Владислав Винтенбах",
    label: "Отличный курс с прекрасной структурой и понятным материалом...",
    image: require("@/assets/images/reviews-carousel/item3.png").default,
  },
  {
    name: "Игорь Федянин",
    label: "Лучший вложенный в образование",
    image: require("@/assets/images/reviews-carousel/item4.png").default,
  },
];

export default function Review() {
  return (
    <div className="reviews-component content">
      <div className="title-content">
        <h1 className="title">
          Что студенты
          <br /> говорят о курсе
        </h1>
        <p className="subtitle">
          Послушайте, что говорят те, кто уже достиг своих целей вместе с{" "}
          <span className="underline-subtitle bold-subtitle">
            Trucking42.com.
          </span>
        </p>
      </div>
      <div className="background-container">
        <Image
          src={require("@/assets/images/reviews-background.svg").default}
          alt="background"
        />
      </div>
      <div className="carousel-container">
        <CommonCarousel>
          {carouselContainer.map((item, index) => (
            <div className="carousel-content-wrapper" key={`carousel-${index}`}>
              <div className="watch-video-container">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.25C8.26942 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91606 6.65152C1.25379 8.25037 1.08051 10.0097 1.41813 11.707C1.75575 13.4044 2.58911 14.9635 3.81282 16.1872C5.03653 17.4109 6.59563 18.2442 8.29296 18.5819C9.9903 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25ZM14.6546 10.5591L7.15457 14.3091C7.05927 14.3567 6.95338 14.3792 6.84694 14.3744C6.7405 14.3697 6.63705 14.3377 6.54642 14.2817C6.45578 14.2257 6.38098 14.1475 6.3291 14.0544C6.27722 13.9613 6.24999 13.8565 6.25 13.75V6.25C6.24999 6.14345 6.27722 6.03867 6.3291 5.94561C6.38098 5.85255 6.45578 5.77429 6.54642 5.71827C6.63705 5.66226 6.7405 5.63034 6.84694 5.62556C6.95338 5.62077 7.05927 5.64328 7.15457 5.69094L14.6546 9.44094C14.7584 9.49284 14.8457 9.57263 14.9068 9.67137C14.9678 9.77012 15.0001 9.88391 15.0001 10C15.0001 10.1161 14.9678 10.2299 14.9068 10.3286C14.8457 10.4274 14.7584 10.5072 14.6546 10.5591Z"
                    fill="black"
                  />
                </svg>
                <button>Смотреть видео</button>
              </div>
              <div className="carousel-image-wrapper">
                <Image src={item.image} alt={`carousel-item-${index}`} />
              </div>
              <div className="bottom-info">
                <p className="name">{item.name}</p>
                <p className="label">{item.label}</p>
              </div>
            </div>
          ))}
        </CommonCarousel>
      </div>
    </div>
  );
}
