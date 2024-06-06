import React from "react";

const SocialShare = [
  {
    iconName: "instagram",
    link: "https://www.instagram.com/_.was.eem._/",
  },
  {
    iconName: "github2",
    link: "https://github.com/Waseem27-art",
  },
  { iconName: "twitter", 
  link: "https://x.com/i_was__m/", },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/muhammed-waseem-villan",
  },
  {
    iconName: "whatsapp2",
    link: "https://wa.me/+918589097856",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
