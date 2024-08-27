import EmailContent from "../EmailContent/EmailContent";
import MediaContent from "../MediaContent/MediaContent";
import CreditContent from "../CreditContent/CreditContent";
import ShoppingContent from "../ShoppingContent/ShoppingContent";
import SocialContent from "../SocialContent/SocialContent";
import Search from "../Search/Search";
import OtherContent from "../OtherContent/OtherContent";

const MainContent = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <MediaContent />
      </div>
      <div className="side-container">
        <Search />
        <div className="side-content">
          <div>
            <SocialContent />
            <OtherContent />
          </div>
          <ShoppingContent />
          <div>
            <EmailContent />
            <CreditContent />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
