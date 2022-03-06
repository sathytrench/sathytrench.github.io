import { useState, useRef } from 'react';

const TarotCard = ({ projectData }) => {
  const { title, cardFront, cardBack, description, links, projectImg } = projectData;

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const cardFrontRef = useRef();
  const cardBackRef = useRef();

  const handleClick = target => {
    if (target.tagName === "A") return;
    if (!isCardFlipped) {
      if (cardFrontRef.current && cardBackRef.current) {
        setIsCardFlipped(true);
        cardFrontRef.current.classList.remove("shown");
        cardFrontRef.current.classList.add("hidden");
        setTimeout(() => {
          cardBackRef.current.classList.remove("hidden");
          cardBackRef.current.classList.add("shown");
        }, 500)
      }
    } else {
      if (cardBackRef.current && cardFrontRef.current) {
        setIsCardFlipped(false);
        cardBackRef.current.classList.remove("shown");
        cardBackRef.current.classList.add("hidden");
        setTimeout(() => {
          cardFrontRef.current.classList.remove("hidden");
          cardFrontRef.current.classList.add("shown");
        }, 500)
      }
    }
  }

  return (
    <div className="tarot-container" onClick={e => handleClick(e.target)}>
      <div className="tarot-front" ref={cardFrontRef}>
        <div className="tarot-title">{title}</div>
        <div>
          <img src={cardFront.imgSrc} 
          alt={cardFront.imgAlt} 
          className="tarot-front-image"/>
        </div>
      </div>
      <div className="tarot-back" ref={cardBackRef}>
        <img src={cardBack.imgSrc} 
        alt={cardBack.imgAlt}/>
        <div className="tarot-title">{title}</div>
        <div className="tarot-back-inner">
          <img src={projectImg.imgSrc} 
          alt={projectImg.imgAlt}
          className="project-image"/>
          <div>{description}</div>
          <div>
            {links?.map((link, idx) => (
              <div key={idx} className="link-container">
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}{' ->'}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
