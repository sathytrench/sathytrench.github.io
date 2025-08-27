import { Link } from 'react-router-dom';

import lostFlowerCard from './assets/lostFlowerCard.png'

const Lost = () => {
  return (
    <div className="container">
      <div className="title">this page does not exist ;__; </div>
      <Link to="/">
        <div className="tarot-container">
          <div className="tarot-title">go home</div>
          <img src={lostFlowerCard} alt="A pixel drawing of a black and white flower with closed eyes. It looks lost." className="tarot-card"/>
        </div>
      </Link>
    </div>
  )
};

export default Lost;