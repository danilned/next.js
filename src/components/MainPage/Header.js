import Image from "next/image";

// Styles
import "@/styles/main-page/header.scss";

const firstLine = new Array(6).fill(null);
const secondLine = new Array(3).fill(null);

export default function Header() {
  return (
    <div className="header">
      <div className="header-title content">
        <h1 className="title">Truck Dispatcher</h1>
        <p className="subtitle">Создай свое будущее</p>
      </div>
      <div className="header-background">
        <Image
          className="first-layer"
          src={require("@/assets/images/second-layer-header.png").default}
          alt="header"
        />
        <Image
          className="second-layer"
          src={require("@/assets/images/first-layer-header.png").default}
          alt="header"
        />
        <div className="bottom-content">
          <div className="first-line">
            {firstLine.map((_, index) => (
              <div key={`first-line-${index}`} className="line-content">
                <p>Truck dispatcher</p>
                <div className="svg-container">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6829 0.596951C11.724 0.217683 12.2726 0.217683 12.3206 0.596951L12.6978 3.77894C13.1846 7.88773 16.428 11.1272 20.5354 11.6147L23.7171 11.9923C24.0943 12.0373 24.0943 12.5877 23.7171 12.6327L20.5354 13.0103C16.428 13.4978 13.1846 16.7373 12.6978 20.846L12.3206 24.028C12.2726 24.4073 11.724 24.4073 11.6829 24.028L11.3057 20.846C10.812 16.7373 7.57545 13.4978 3.46803 13.0103L0.286305 12.6327C-0.0908372 12.5877 -0.0908372 12.0373 0.286305 11.9923L3.46803 11.6147C7.57545 11.1272 10.812 7.88773 11.3057 3.77894L11.6829 0.596951Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className="second-line">
            {secondLine.map((_, index) => (
              <div key={`second-line-${index}`} className="line-content">
                <p>Путешествуй</p>
                <div className="svg-container">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6829 0.596951C11.724 0.217683 12.2726 0.217683 12.3206 0.596951L12.6978 3.77894C13.1846 7.88773 16.428 11.1272 20.5354 11.6147L23.7171 11.9923C24.0943 12.0373 24.0943 12.5877 23.7171 12.6327L20.5354 13.0103C16.428 13.4978 13.1846 16.7373 12.6978 20.846L12.3206 24.028C12.2726 24.4073 11.724 24.4073 11.6829 24.028L11.3057 20.846C10.812 16.7373 7.57545 13.4978 3.46803 13.0103L0.286305 12.6327C-0.0908372 12.5877 -0.0908372 12.0373 0.286305 11.9923L3.46803 11.6147C7.57545 11.1272 10.812 7.88773 11.3057 3.77894L11.6829 0.596951Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>Работай из дома</p>
                <div className="svg-container">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6829 0.596951C11.724 0.217683 12.2726 0.217683 12.3206 0.596951L12.6978 3.77894C13.1846 7.88773 16.428 11.1272 20.5354 11.6147L23.7171 11.9923C24.0943 12.0373 24.0943 12.5877 23.7171 12.6327L20.5354 13.0103C16.428 13.4978 13.1846 16.7373 12.6978 20.846L12.3206 24.028C12.2726 24.4073 11.724 24.4073 11.6829 24.028L11.3057 20.846C10.812 16.7373 7.57545 13.4978 3.46803 13.0103L0.286305 12.6327C-0.0908372 12.5877 -0.0908372 12.0373 0.286305 11.9923L3.46803 11.6147C7.57545 11.1272 10.812 7.88773 11.3057 3.77894L11.6829 0.596951Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
