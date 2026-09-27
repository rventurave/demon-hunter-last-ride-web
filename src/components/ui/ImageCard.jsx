import { Expand, ArrowUpRight } from "lucide-react";
import Media from "./Media";
export default function ImageCard({ item, index, onOpen, label = "ESCENA" }) {
  return (
    <button
      className="image-card"
      onClick={onOpen}
      aria-label={`Ampliar ${label.toLowerCase()} ${index + 1}: ${item.title}`}
    >
      <div className="image-card-picture">
        <Media src={item.image} alt={item.title} />
        <span className="image-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="expand">
          <Expand size={18} />
        </span>
      </div>
      <div className="image-card-text">
        <span className="eyebrow">
          {label} {String(index + 1).padStart(2, "0")}
        </span>
        <h3>
          {item.title}
          <ArrowUpRight size={18} />
        </h3>
        <p>{item.description}</p>
      </div>
    </button>
  );
}
