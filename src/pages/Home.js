import React from "react";
import backgroundVideo from "../assets/background-video.mp4";
import Proficiency from "../components/Proficiency";
import TypingText from "../components/TypingText";
import proficiencies from "./proficiencyData";
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="background-video-container">
        <video muted loop autoPlay>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="typing-text-container">
          <TypingText
            text="Mark Abraham#Software Engineer#💻"
            className="typing-text"
            speed={30}
          />
        </div>
      </div>

      <div className="about-me-container">
        <TypingText
          text="About Me:# - I am a problem solver 💡#- I am passionate about technology 🔋#- I am a team player 🤝#- I love playing disc golf 🥏 :)"
          className="about-me"
          speed={30}
        />
      </div>

      <div className="proficiencies-container">
          <TypingText
            text="Some of my proficiencies:"
            className="proficiencies-title"
            speed={30}
          />
        <div className="proficiencies">
          {proficiencies.map((proficiency) => (
            <div className="proficiency-container" key={proficiency.title}>
              <Proficiency
                image={proficiency.image}
                description={proficiency.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

