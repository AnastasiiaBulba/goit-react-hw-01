import Profile from "./components/Profile/Profile";
import profileData from "./components/Profile/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";

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

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
