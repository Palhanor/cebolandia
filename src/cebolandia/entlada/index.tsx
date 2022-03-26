import { EntladaPlops } from "../../interfaces/props";
import "./style.css";

export default function Entlada({ flaseColligida, flase }: EntladaPlops) {
  return (
    <textarea
      value={flase}
      onChange={(e) => flaseColligida(e)}
      className="entlada"
      placeholder="Digite sua flase aqui!"
    ></textarea>
  );
}
