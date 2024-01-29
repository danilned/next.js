// Components
import Header from "@/components/MainPage/Header";
import WorkLife from "@/components/MainPage/WorkLife";

// Styles
import "@/styles/main-page.scss";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <WorkLife />
    </div>
  );
}
