import "./scss/main.scss";

import MobileCover from "./assets/illustration-woman-online-mobile.svg";
import MobileCoverBG from "./assets/bg-pattern-mobile.svg";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card__cover">
          <img src={MobileCover} alt="Mobile Cover" className="main-cover" />
          <img src={MobileCoverBG} alt="Mobile Cover BG" />
        </div>
        <div className="card__content"></div>
      </div>
    </div>
  );
}

export default App;
