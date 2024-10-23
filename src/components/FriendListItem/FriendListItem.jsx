import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
    <p className={css.friendName}>{name}</p>
    <p
      className={`${css.friendStatus} ${
        isOnline ? css.friendStatusOnline : css.friendStatusOffline
      }`}
    >
      {isOnline ? "Online" : "Offline"}
    </p>
  </div>
);

export default FriendListItem;
