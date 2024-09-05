import { userData } from "../../Data/userData";

const Header = ({user, setUser}) => {
  

  const handleUserButton = (user) => {
    if (user.id === "user1") setUser(userData[1]);
    if (user.id === "user2") setUser(userData[2]);
    if (user.id === "user3") setUser(userData[0]);
  };

  return (
    <div className="header">
      <button className="header--button" onClick={() => handleUserButton(user)}>
        <img src={user?.iconLink} alt={user?.id} className="header--icon" />
      </button>
      <span className="header--caption">{user?.name}</span>
    </div>
  );
};
export default Header;
