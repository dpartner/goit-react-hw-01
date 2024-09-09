import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import clsx from "clsx";

export default function FriendList({ friends }) {
  return (
    <ul className={clsx(s.list)}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
