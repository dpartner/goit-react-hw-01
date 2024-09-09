import clsx from "clsx";
import s from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  return (
    <div className={s.listItem}>
      <img className={s.image} src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p className={clsx(s.status, friend.isOnline ? s.online : s.offline)}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
