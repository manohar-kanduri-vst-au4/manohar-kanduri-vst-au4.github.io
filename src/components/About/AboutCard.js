import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KANDURI MANOHAR </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />I am a B.E graduate and aspiring to become full stack web developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing Yoga 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech talks
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Build products that makes difference in people life"
          </p>
          <footer className="blockquote-footer">KANDURI MANOHAR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
