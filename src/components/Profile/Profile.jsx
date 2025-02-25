import s from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={s.profileWrap}>
      <div>
        <img
          className={s.image}
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p>Petra Marica</p>
        <p>@pmarica</p>
        <p>Salvador, Brasil</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
}
