import style from "./ProfileCard.module.css";

export default function ProfileCard({ name, avatar, children }) {
  return (
    <div className={style["profile-card"]}>
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name}</h2>
      <p>{children}</p>
    </div>
  );
}
