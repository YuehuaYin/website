import "./About.css";
import fishImg from "../assets/me with fish.jpg";
import whimGif1 from "../assets/whimsical_1.gif";
import whimGif2 from "../assets/whimsical_2.gif";
import visaImg from "../assets/visaLogo.png";
import gitImg from "../assets/githubLogo.png";
import linkedinImg from "../assets/linkedinLogo.png";
import { useState } from "react";

const favGames = [
  "Undertale and Deltarune",
  "Minecraft",
  "Genshin Impact",
  "Mass Effect 1/2/3",
  "Ace Attorney",
];

function WhimsicalText() {
  const [whimGifPath, setWhimGifPath] = useState(whimGif1);

  const handleClick = () => {
    if (whimGifPath == whimGif1) {
      setWhimGifPath(whimGif2);
    } else {
      setWhimGifPath(whimGif1);
    }
  };

  return (
    <img
      id="whimsical"
      src={whimGifPath}
      onClick={handleClick}
      width="100px"
      height="20px"
    />
  );
}

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
          <WhimsicalText />
          website!
        </p>

        <p>
          I currently work as a Graduate Software Engineer at
          <a href="https://www.visa.com/en-gb" target="_blank">
            <img width="40px" height="14px" src={visaImg} />
          </a>
          . My work mainly includes working on internal testing tools, where I
          design and create user-friendly interfaces in <b>Java</b> using Vaadin
          framework. In addition to UI work, I develop and implement backend
          systems in <b>Go</b> and <b>gRPC</b> to power a robust testing
          experience.
        </p>

        <p>
          I also have experience with developing <b>REST APIs</b>, managing
          databases with <b>SQL</b> and deployments using
          <b> Kubernetes and Docker</b>, as well as being confident with
          <b> GitHub</b> version control, <b>Javascript</b>, <b>Python</b> and
          <b> C#</b>
        </p>

        <p>
          Outside of work, I enjoy hobbies such as Jiu-Jitsu and various arts
          and crafts. But my absolute favourite thing to do is play video games!
          Here are some of my all-time favourite games:
        </p>
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
