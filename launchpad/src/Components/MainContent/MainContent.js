import EmailContent from "../EmailContent/EmailContent";
import MediaContent from "../MediaContent/MediaContent";
import CreditContent from "../CreditContent/CreditContent";
import ShoppingContent from "../ShoppingContent/ShoppingContent";
import SocialContent from "../SocialContent/SocialContent";

const MainContent = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <MediaContent />
      </div>

      <div>
        <EmailContent />
        <CreditContent />
      </div>
      <div>
        <ShoppingContent />
        <SocialContent />
      </div>
    </div>
  );
};
export default MainContent;
