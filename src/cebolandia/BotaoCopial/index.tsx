import copy from "copy-to-clipboard";
import { useState } from "react";
import "./style.css"

interface Props {
  flase: string;
}

export default function BotaoCopial({ flase }: Props) {
  const [copiado, setCopiado] = useState("")
  function copialFlase() {
    copy(flase);
    setCopiado("Copiado!");
    setTimeout(() => {
        setCopiado("");
    }, 1000);
  }

  return (
    <>
      <button onClick={copialFlase} className="botao-copial">Copial!</button>
      <div className="copial-alelta">{copiado}</div>
    </>
  );
}
