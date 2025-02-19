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
