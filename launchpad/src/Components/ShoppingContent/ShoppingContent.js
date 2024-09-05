import React from "react";
import { shoppingData } from "../../Data/Data";

const ShoppingContent = ({ user }) => {
  return (
    <div>
      <h3>Shopping</h3>
      <div className="email-content-list">
        {shoppingData.map((shopping, i) => (
          <React.Fragment key={`media-${shopping.id}-${i}`}>
            {shopping?.users.includes(user?.id) && (
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
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default ShoppingContent;
