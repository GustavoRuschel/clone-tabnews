import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("Pensa em um número de 1 até 10");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Vai estudar e para de perder tempo! 😹");
    }, 2000); // muda o texto após 5 segundos

    return () => clearTimeout(timer); // limpa o timer se o componente for desmontado
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>{text}</h1>
    </div>
  );
}

export default Home;

function teste() {
  console.log("gato");
}
teste();

class Gato {
  constructor(peso, altura, cor, raça) {
    this.peso = peso;
    this.altura = altura;
    this.cor = cor;
    this.raça = raça;
  }
}

const meuGato = new Gato(10, 20, "azul", "siamês");
console.log(meuGato);

if (meuGato.cor == "azul") {
  console.log("este gato é fofo");
}

let x = 10;
for (x = 0; x < 10; x++) {
  console.log(x);
}

function teste2() {
  console.log("indentação errada");
}
