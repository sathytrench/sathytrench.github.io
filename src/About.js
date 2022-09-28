import fairy from './assets/fairy.gif'
import resume from './assets/resume.pdf';

const About = () => {
  return (
  <>
    <div className="about-container">
      <div>
        <img src={fairy} alt="A blue fairy hovering with wand in hand" />
      </div>
      <div className="text-container">
          + hi! i'm anahit<br /><br />
          + software engineer and artist<br /><br />
          + based in nyc<br /><br />
          + educated in software engineering at the grace hopper program at fullstack academy
          and creative writing at pratt institute<br /><br />
          + i recently completed a fullstack apprenticeship at 
          <span><a href="https://upstatement.com/" target="_blank" rel="noopener noreferrer"> upstatement</a></span>, 
          a digital product studio with an emphasis on design<br /><br />
          + i love building unusual and beautiful things, sharing open-source code, 
          and making webgames<br /><br />
          + currently working as a software engineer at 
          <span><a href="https://civiqs.com/" target="_blank" rel="noopener noreferrer"> civiqs</a></span> 
      </div>
      <div className="link-container">
        <div className="links">
          <a href="https://github.com/sathytrench" target="_blank" rel="noopener noreferrer">+ github</a>
          <a href="https://www.linkedin.com/in/anahitgulian/" target="_blank" rel="noopener noreferrer">+ linkedin</a>
          <a href="https://anahit-gulian.medium.com/" target="_blank" rel="noopener noreferrer">+ medium</a>
          <a href="mailto:sathytrench@gmail.com" target="_blank" rel="noopener noreferrer">+ email</a>
          <a href={resume}>+ resume</a>
        </div>
      </div>
    </div>
  </>
)};

export default About;