import React, { useState } from "react";
import Modal from "react-modal";
//import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img src="assets/img/slider/1.jpg" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Muhammed Waseem VIllan &amp;</h3>
          <div className="description_inner">
            <div className="left">
       <p>
  With a strong foundation in forensic science, data analytics, and cybersecurity, I enhance digital crime investigation and prevention. Proficient in cutting-edge tools and techniques, I am dedicated to protecting the digital world.
</p>

<p>
  Interning with Kerala and Mangalore Police, I've resolved over 25 complex cybercrime cases and improved service processes, reducing paperwork by 75%. I've gained firsthand experience in various law enforcement departments and as a forensic examiner.
</p>

<p>
  As a top 4% performer on TryHackMe, I've thrice made the top monthly leaderboard. I'm committed to advancing cybersecurity and digital forensics to keep the digital world secure.
</p>

<p>
  I hold a Bachelor of Science in Forensic Science, Data Analytics, and Cyber Security from Yeneppoya University, where I specialized in Cyber Forensic Technology. I am also a professional in cyber forensics at the International Forensic Science Institute and have completed an Advanced Diploma in Cyber Defense from Red Team Hacker Academy.
</p>

              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
        <script src="https://tryhackme.com/badge/2198997"></script>
              <img src="https://tryhackme-badges.s3.amazonaws.com/iwasm.png" alt="TryHackMe" />

                <li>
                  <p>
                    <span>Address:</span>Villan House,puliyattukulam, Kerala, India
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">muhammedwaseemvillan1010@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+918589097856">+91 8589097856</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>Yenepoya University
                  </p>
                  <p>
                    <span>      </span>Red Team Academy
                  </p><p>
                    <span>      </span>International Forensic Science Institute
                  </p>
                </li>
                </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3> Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">CTF</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 85 + '%'}}></div>
                      
                        </div>
                      </div>
                    </div>
                  
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Web Application</span>
                        <span className="number">60%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 60 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">system security</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">OSINT</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                      <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Forensics</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 70 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Malayalam</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">English</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                        <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">HIndi</span>
                        <span className="number">60%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 60 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Arabic</span>
                        <span className="number">40%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 40 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Tamil</span>
                        <span className="number">40%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 40 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3> Statistics</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>10+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>20+</h3>
                      <span>cases solved</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>10+</h3>
                      <span>Sessions Taken</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

             {/* <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
