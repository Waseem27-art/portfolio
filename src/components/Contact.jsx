import React from "react";
import emailjs from "emailjs-com";

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lg8hs3r",
        "template_u9soazb",
        e.target,
        "user_tLzmhhwjUanrwUxz8"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Contact Me</h3>
            </div>
          </div>
        </div>

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>
                <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li>
                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
