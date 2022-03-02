import fairy from './assets/fairy.gif'

const About = () => {
  return (
  <>
    <div className="about-container">
      <div>
        <img src={fairy} alt="A blue fairy hovering with wand in hand" />
      </div>
      <div className="text-container">
        hi! i'm anahit<br /><br />
          + software engineer and artist<br />
          + based in nyc<br /><br />
          + i recently completed a fullstack apprenticeship at 
          <span><a href="https://upstatement.com/" target="_blank" rel="noopener noreferrer"> upstatement.com</a></span>, 
          a digital product studio with an emphasis on design<br /><br />
          + i love building weird and beautiful things, sharing open-source code, 
          and making webgames
      </div>
      <div className="link-container">
        <div className="links">
          <a href="https://github.com/sathytrench" target="_blank" rel="noopener noreferrer">+ github</a>
          <a href="https://www.linkedin.com/in/anahitgulian/" target="_blank" rel="noopener noreferrer">+ linkedin</a>
          <a href="https://anahit-gulian.medium.com/" target="_blank" rel="noopener noreferrer">+ medium</a>
          <a href="mailto:sathytrench@gmail.com" target="_blank" rel="noopener noreferrer">+ email</a>
        </div>
      </div>
    </div>
  </>
)};

export default About;