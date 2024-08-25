import { socialData } from "../../Data/Data";

const SocialContent = () => {
  return (
    <div>
      <h1>Social Media</h1>
      <div className="email-content-list">
        {socialData.map((social) => (
          <>
            {social?.subscribed && (
              <div key={social.id} className="email-content-item">
                <a
                  href={social?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      social?.imgLink ? social?.imgLink : "/icons/social.svg"
                    }
                    alt={social.display}
                    width="24px"
                  />
                  {social?.display}
                </a>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default SocialContent;
