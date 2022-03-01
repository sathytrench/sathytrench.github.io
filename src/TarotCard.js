const TarotCard = ({ projectData }) => {
  const { title, imgSrc, imgAlt } = projectData;
  return (
    <div className="tarot-container">
      <div className="tarot-text">{title}</div>
      <div>
        <img src={imgSrc} 
        alt={imgAlt} 
        className="tarot-card"/>
      </div>
    </div>
  );
};

export default TarotCard;
