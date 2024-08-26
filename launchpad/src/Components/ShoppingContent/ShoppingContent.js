import { shoppingData } from "../../Data/Data";

const ShoppingContent = () => {
  return (
    <div>
      <h1>Shopping</h1>
      <div className="email-content-list">
        {shoppingData.map((shopping) => (
          <>
            {shopping?.subscribed && (
              <div key={shopping.id} className="email-content-item">
                <a
                  href={shopping?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/icons/shopping.svg"}
                    alt={shopping.display}
                    width="24px"
                  />
                  {shopping?.display}
                </a>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default ShoppingContent;
