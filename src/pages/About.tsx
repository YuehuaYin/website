import "./About.css";
import fishImg from "../assets/me with fish.jpg";
import whimImg from "../assets/whimsical.png";
import visaImg from "../assets/visaLogo.png";
import gitImg from "../assets/githubLogo.png";
import linkedinImg from "../assets/linkedinLogo.png";

const favGames = [
  "Undertale and Deltarune",
  "Minecraft",
  "Genshin Impact",
  "Mass Effect 1/2/3",
  "Ace Attorney",
];

function About() {
  return (
    <>
      <div id="picture">
        <div>
          <img src={fishImg} width="400px" height="500px" />
          <p id="pic-caption"> Me (right) with a fish (left). </p>
        </div>
      </div>

      <div id="info">
        <h2> Hi there! </h2>
        <p>
          My name is Yuehua (Yue) Yin. Thanks for checking out my
          <img src={whimImg} width="100px" height="20px" /> website!
        </p>

        <p>
          I currently work as a Graduate Software Engineer at
          <img src={visaImg} width="36px" height="12px" />. My work includes
          blah blah blah
        </p>

        <p> Outside of work, I enjoy hobbies and such</p>

        <p> I also LOVE video games! Some of my favourite games: </p>
        <ul>
          {favGames.map((game) => (
            <li key={"favGame_" + favGames.indexOf(game)}>{game}</li>
          ))}
        </ul>

        <div id="links">
          Links|
          <a href="https://github.com/YuehuaYin" target="_blank">
            <img src={gitImg} height="30px" />
          </a>
          |
          <a href="https://www.linkedin.com/in/yuehua-yin/" target="_blank">
            <img src={linkedinImg} height="30px" />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
