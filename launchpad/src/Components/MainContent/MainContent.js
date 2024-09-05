import EmailContent from "../EmailContent/EmailContent";
import MediaContent from "../MediaContent/MediaContent";
import CreditContent from "../CreditContent/CreditContent";
import ShoppingContent from "../ShoppingContent/ShoppingContent";
import SocialContent from "../SocialContent/SocialContent";
import Search from "../Search/Search";
import OtherContent from "../OtherContent/OtherContent";
import Footer from "../Footer/Footer";

const MainContent = ({ user }) => {
  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <MediaContent user={user} />
        </div>
        <div className="side-container">
          <Search user={user} />
          <div className="side-content">
            <div>
              <SocialContent user={user} />
              <OtherContent user={user} />
            </div>
            <ShoppingContent user={user} />
            <div>
              <EmailContent user={user} />
              <CreditContent user={user} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default MainContent;
