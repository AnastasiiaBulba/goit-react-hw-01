import Profile from "./components/Profile/Profile";
import profileData from "./components/Profile/userData.json";
import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
    </>
  );
}

export default App;
