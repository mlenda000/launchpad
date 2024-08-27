import { socialData } from "../../Data/Data";

const SocialContent = () => {
  return (
    <div>
      <h3>Social Media</h3>
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
                      social?.imgLink
                        ? process.env.PUBLIC_URL + social?.imgLink
                        : process.env.PUBLIC_URL + "/icons/social.svg"
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
