import newStyle from "../styles/new.module.css";
export default function New() {
  const data = [
    {
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      content:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      content:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className={newStyle.container}>
      <p className={newStyle.header}>New</p>
      {data.map((i, index) => (
        <div key={index}>
          <p className={newStyle.title}>{i.title}</p>
          <p className={newStyle.content}>{i.content}</p>
          {index !== data.length - 1 ? (
            <div className={newStyle.line}></div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
