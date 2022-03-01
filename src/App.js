import {Link} from 'react-router-dom'

import weird from "./assets/weird.png";
import weird2 from "./assets/weird2.png";

const App = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="projects-container">
            <Link to="/about">
              <div className="home-container">
                <div>about</div>
                <img src={weird} alt="a pixel drawing of a pyramid with towers rising above it" className="tarot-card"/>
              </div>
            </Link>
            <Link to="/work">
              <div className="home-container">
                <div>work</div>
                <img src={weird2} alt="a pixel drawing of a rhombus-headed jellyfish" className="tarot-card"/>
              </div>
            </Link>
          </div> 
        </div>
      </div>
    </>   
  );
}

export default App;
