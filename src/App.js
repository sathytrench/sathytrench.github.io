import {Link} from 'react-router-dom'

import weird from "./assets/animatedPyramid.gif";
import weird2 from "./assets/fireflowerBW.gif";

const App = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="projects-container">
            <Link to="/about">
              <div className="home-container">
                <div>about</div>
                <img src={weird} alt="an animated pixel drawing of a pyramid with towers rising and falling above it" className="tarot-card"/>
              </div>
            </Link>
            <Link to="/work">
              <div className="home-container">
                <div>work</div>
                <img src={weird2} alt="an animated pixel drawing of a flower creature growing and releasing pollen into the air" className="tarot-card"/>
              </div>
            </Link>
          </div> 
        </div>
      </div>
    </>   
  );
}

export default App;
