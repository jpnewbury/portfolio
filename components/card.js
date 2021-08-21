import Image from "next/image";

export default function card(props) {
  return (
    <article className="card">
      <div className="card__header">
        <h4>{props.title}</h4>
      </div>
      <div className="card__body center">
        <Image
          src={props.img}
          height={props.height}
          width={props.width}
          alt={props.alt}
        />
      </div>
      <div className="card__footer">
        <div>
          <p>{props.footer}</p>
        </div>
        <div>
          {props.dot === "red" && <div className="red__dot"></div>}
          {props.dot === "green" && <div className="green__dot"></div>}
        </div>
      </div>
    </article>
  );
}
