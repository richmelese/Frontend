import React from "react";
import "../../styles/news/news.css";
import Newsone from "../../Assets/news-tech-1.jpg";
import NewsTwo from "../../Assets/news-tech-2.jpg";
import NewsThree from "../../Assets/news-tech-3.jpg";
import NewsFour from "../../Assets/news-tech-4.jpg";

import Arrow from "../../Assets/ArrowRight.png";
import AboutBg from "../../Assets/About-bg.png";
import Fade from "react-reveal/Fade";
import Servicecontact from "../Service/Servicecontact";
const News = () => {
  return (
    <div>
      <section>
        <div
          className="About__Banner"
          style={{
            backgroundImage: `url(${AboutBg})`,
          }}
        >
          {" "}
          <Fade bottom duration={1500}>
            <div className="About__Container">
              <div className="First ">
                <h2> Get to know more about latest informations</h2>
              </div>
            </div>
          </Fade>
        </div>
        <div className="News__Text">
          News & <span className="News__span">Articles</span>
        </div>
        <div className="Text__news">
          <div>
            {" "}
            <p className="News__para">
              Take a look at our latest articles & resources
            </p>
          </div>
          <div>
            <button>
              <p>
                <a href="#">More News</a>
              </p>
            </button>
          </div>
        </div>
        <Fade bottom duration={1500}>
          <div className="News__Container">
            <div>
              <img className="News__img" src={Newsone} alt="" />
              <h3>
                Microsoft and Sony sign deal to keep Activision's Call of Duty
                on PlayStation
              </h3>
              <p>
                Sony has signed a binding, 10-year agreement with Microsoft to
                keep Call of Duty on its PlayStation gaming consoles after
                closing the Activision Blizzard acquisition, Microsoft said on
                Sunday. "We are pleased to announce that Microsoft and
                PlayStation have signed a binding agreement to keep Call of Duty
                on PlayStation following the acquisition of Activision
                Blizzard," Microsoft Gaming CEO Phil Spencer said on Twitter
                Sunday.
              </p>
              <div className="News__Read">
                Read More <img className="Arow__img" src={Arrow} alt="" />
              </div>
            </div>
            <div>
              <img className="News__img" src={NewsTwo} alt="" />
              <h3>
                With the rise of AI, social media platforms could face perfect
                storm of misinformation in 2024
              </h3>
              <p>
                A new crop of AI tools offer the ability to generate compelling
                text and realistic images — and, increasingly, video and audio.
                Experts, and even some executives overseeing AI companies, say
                these tools risk spreading false information to mislead voters,
                including ahead of the 2024 US election.
              </p>
              <div className="News__Read">
                Read More <img className="Arow__img" src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </Fade>
        {/* Second News */}
        <section className="Second__News">
          <Fade bottom duration={1500}>
            <div className="News__Container">
              <div>
                <img className="News__img" src={NewsThree} alt="" />
                <h3>Microsoft lost its keys, and the government got hacked</h3>
                <p>
                  Microsoft disclosed the incident last Tuesday, attributing the
                  month-long activity to a newly discovered espionage group it
                  calls Storm-0558, which it believes has a strong nexus to
                  China. U.S. cybersecurity agency CISA said the hacks, which
                  began in mid-May, included a small number of government
                  accounts said to be in the single digits and that the hackers
                  exfiltrated some unclassified email data.
                </p>
                <div className="News__Read">
                  Read More <img className="Arow__img" src={Arrow} alt="" />
                </div>
              </div>
              <div>
                <img className="News__img" src={NewsFour} alt="" />
                <h3>
                  Threads Becomes Most Rapidly Downloaded App, Raising Twitter’s
                  Ire
                </h3>
                <p>
                  Raising Twitter's Ire. Instagram's new app was downloaded more
                  than 30 million times in 16 hours. Twitter threatened legal
                  action against its rival. Mike Isaac, who has covered social
                  media companies for over a decade, was the 2,768th person to
                  sign up for Threads
                </p>
                <div className="News__Read">
                  Read More <img className="Arow__img" src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </section>
      <Servicecontact />
    </div>
  );
};

export default News;
