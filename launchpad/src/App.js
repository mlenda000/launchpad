import { useState } from "react";
import { userData } from "./Data/userData";
import MainContent from "./Components/MainContent/MainContent";
import Header from "./Components/Header/Header";
import "./App.scss";

function App() {
  const [user, setUser] = useState(userData[0]);
  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <MainContent className="main" user={user} />
    </div>
  );
}

export default App;
