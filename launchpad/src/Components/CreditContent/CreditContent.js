import { financeData } from "../../Data/Data";

const CreditContent = () => {
  return (
    <div>
      <h2>Finance</h2>
      <div className="email-content-list">
        {financeData.map((finance) => (
          <>
            {finance?.subscribed && (
              <div key={finance.id} className="email-content-item">
                <a
                  href={finance?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/icons/dollar.svg"}
                    alt={finance.display}
                    width="24px"
                  />
                  {finance?.display}
                </a>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default CreditContent;
