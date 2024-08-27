import { emailData } from "../../Data/Data";

const EmailContent = () => {
  return (
    <div>
      <h3>Emails</h3>
      <div className="email-content-list">
        {emailData.map((email) => (
          <>
            {email?.subscribed && (
              <div key={email.id} className="email-content-item">
                <a href={email?.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/email.svg"}
                    alt={email.display}
                    width="24px"
                  />
                  {email?.display}
                </a>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default EmailContent;
