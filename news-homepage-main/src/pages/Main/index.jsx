import Navbar from "./components/Navbar";
import New from "./components/New";
import Info from "./components/Info";
import HeaderImg from "../../assets/images/image-web-3-desktop.jpg";
import main from "./styles/main.module.css";
import computerImg from "../../assets/images/image-retro-pcs.jpg";
import laptopImg from "../../assets/images/image-top-laptops.jpg";
import gamingImg from "../../assets/images/image-gaming-growth.jpg";
export default function Main() {
  const info = [
    {
      img: computerImg,
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
    },
    {
      img: laptopImg,
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
    },
    {
      img: gamingImg,
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={main.container}>
        <div className={main.left_container}>
          <img src={HeaderImg} alt="Header Image" className={main.header_img} />
          <div className={main.header_container}>
            <div className={main.header_text}>
              <p>The Bright Future of Web 3.0?</p>
            </div>
            <div className={main.header_info}>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
        <New />
      </div>
      <div className={main.info_container}>
        {info.map((i, index) => (
          <Info
            img={i.img}
            title={i.title}
            content={i.content}
            key={index}
            number={(index + 1) / 10 < 1 ? `0${index + 1}` : index + 1}
          />
        ))}
      </div>
    </>
  );
}
