import { useState, useRef } from 'react';

const TarotCard = ({ projectData }) => {
  const { title, cardFront, cardBack, description, links } = projectData;

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const cardFrontRef = useRef();
  const cardBackRef = useRef();

  const handleClick = () => {
    if (cardFrontRef.current) {
      setIsCardFlipped(!isCardFlipped);
      cardFrontRef.current.classList.add("hidden");
    }
  }
  
  return (
    <div className="tarot-container" onClick={handleClick}>
      <div className="tarot-title">{title}</div>
      <div ref={cardFrontRef}>
        <img src={cardFront.imgSrc} 
        alt={cardFront.imgAlt} 
        className="tarot-front"/>
      </div>
      <div className="tarot-back" ref={cardBackRef}>
          <img src={cardBack.imgSrc} 
          alt={cardBack.imgAlt}/>
        <div className="tarot-back-inner">
          <div>{description}</div>
            {links?.map((link, idx) => (
              <div key={idx} class="link-container">
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}🠢</a>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default TarotCard;
