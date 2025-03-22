import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("Pensa em um número de 1 até 10");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Vai estudar e para de perder tempo! 😹cat");
    }, 1000); // muda o texto após 5 segundos

    return () => clearTimeout(timer); // limpa o timer se o componente for desmontado
  }, []);

  function handleClick() {
    alert("botão clicando");
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>{text}</h1>
      <button on click={handleClick}>
        Click here
      </button>
    </div>
  );
}

export default Home;
