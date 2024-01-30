// Components
import Header from "@/components/MainPage/Header";
import WorkLife from "@/components/MainPage/WorkLife";
import LifeStyle from "@/components/MainPage/LifeStyle";
import Reviews from "@/components/MainPage/Reviews";

// Styles
import "@/styles/main-page.scss";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <WorkLife />
      <LifeStyle />
      <Reviews />
    </div>
  );
}
