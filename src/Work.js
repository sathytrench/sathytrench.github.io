import flowerCard1 from './assets/flowerCard1.png';
import flowerCard2 from './assets/flowerCard2.png';
import flowerCard3 from './assets/flowerCard3.png';
import flowerCard4 from './assets/flowerCard4.png';
import flowerCard5 from './assets/flowerCard5.png';

const Work = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="title">UPSTATEMENT</div>
            <div className="projects-container">
              <div className="tarot-container">
                <div className="tarot-text">threadable app</div>
                <div>
                  <img src={flowerCard1} 
                  alt="a sort of tarot card in 8bit style showing a flower" 
                  className="tarot-card"/>
                </div>
              </div>
              <div className="tarot-container">
                <div className="tarot-text">threadablebooks.com</div>
                <div>
                  <img src={flowerCard2} 
                  alt="a sort of tarot card in 8bit style showing a flower" 
                  className="tarot-card"/>
                </div>
              </div>
            </div> 
          </div>
          <div className="container">
            <div className="title">GAMES</div>
            <div className="projects-container">
              <div className="tarot-container">
                <div className="tarot-text">concrete world</div>
                <div>
                  <img src={flowerCard3} 
                  alt="a sort of tarot card in 8bit style showing a flower" 
                  className="tarot-card"/>
                </div>
              </div>
              <div className="tarot-container">
                <div className="tarot-text">regextris</div>
                <div>
                  <img src={flowerCard4} 
                  alt="a sort of tarot card in 8bit style showing a flower" 
                  className="tarot-card"/>
                </div>
              </div>
            </div>
          </div> 
          <div className="container">
            <div className="title">ART</div>
            <div className="projects-container">
              <div className="tarot-container">
              <div className="tarot-text">visual art</div>
              <div>
                <img src={flowerCard5} 
                alt="a sort of tarot card in 8bit style showing a flower" 
                className="tarot-card"/>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )

};

export default Work;