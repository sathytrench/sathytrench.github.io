const TarotBack = ({ projectData }) => {
  const { title, imgSrc, imgAlt, description, links } = projectData;

  return (
    <div>
      <div>{title}</div>
      <div>
        <img src={imgSrc} 
        alt={imgAlt}/>
      </div>
      <div>{description}</div>
      {links?.map((link, idx) => (
        <div key={idx}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}🠢</a>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default TarotBack;
