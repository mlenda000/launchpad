import { otherData } from "../../Data/Data";

const OtherContent = ({ user }) => {
  return (
    <div className="other-content">
      <h3>Other content</h3>
      <div className="email-content-list">
        {otherData.map((other, i) => (
          <>
            {other?.users.includes(user?.id) && (
              <div
                key={`other-${other?.id}-${i}`}
                className="email-content-item"
              >
                <a href={other?.link} target="_blank" rel="noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/other.svg"}
                    alt={other.display}
                    width="24px"
                    height="24px"
                  />
                  {other?.display}
                </a>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default OtherContent;
