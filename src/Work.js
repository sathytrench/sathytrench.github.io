import data from "./data";
import TarotCard from './TarotCard';

const Work = () => {
  return (
    <>
      {data.map((item, catIdx) => (
        <div className="container" key={catIdx}>
          <div className="title">{item.category}</div>
          <div className="projects-container">
            {item.projects.map((proj, projIdx) => (
              <TarotCard projectData={proj} key={`${catIdx}-${projIdx}`}/>
            ))}
          </div> 
        </div>
      ))}
    </>
  )
};

export default Work;