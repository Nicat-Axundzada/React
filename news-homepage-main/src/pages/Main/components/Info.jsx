import info from "../styles/info.module.css";
export default function Info({ img, number, title, content }) {
  return (
    <div className={info.container}>
      <img src={img} alt="info image" className={info.img} />
      <div>
        <p className={info.number}>{number}</p>
        <p className={info.title}>{title}</p>
        <p className={info.content}>{content}</p>
      </div>
    </div>
  );
}
