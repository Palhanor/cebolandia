import "./style.css";

interface Props {
  flaseColligida: (flaseEllada: React.ChangeEvent<HTMLTextAreaElement>) => void;
  flase: string;
}

export default function Entlada({ flaseColligida, flase }: Props) {
  return (
    <textarea
      value={flase}
      onChange={(e) => flaseColligida(e)}
      className="entlada"
      placeholder="Digite sua flase aqui!"
    ></textarea>
  );
}
