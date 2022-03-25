import { useState } from "react";
import Entlada from "./entlada";
import BotaoCopial from "./BotaoCopial";
import "./style.css"

export default function Cebolandia() {
  const [flase, setFlase] = useState<string>("");

  function flaseColligida(flaseEllada: React.ChangeEvent<HTMLTextAreaElement>) {
    const strFlaseEllada: string | null = flaseEllada.target.value
    const strFlaseColleta: string | null = strFlaseEllada.replace("r","l").replace("R", "L");
    setFlase(strFlaseColleta);
  }

  return (
    <>
      <h1 className="title">Cebolândia</h1>
      <Entlada flaseColligida={flaseColligida} flase={flase}/>
      <BotaoCopial flase={flase}></BotaoCopial>
    </>
  );
}
