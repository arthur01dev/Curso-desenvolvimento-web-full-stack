
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Métodos das Instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }
  //

  //Metodo estatico
  static trocaPilha() {
    console.log("Vou Trocar agora!");
  }
  // obs: os metodos istaticos não tem acesso aos dados das instâcias.
}

const controle = new ControleRemoto("Epson");
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
controle.diminuirVolume();
controle.diminuirVolume();
console.log(controle)


console.log(ControleRemoto.trocaPilha());
console.log(controle.trocaPilha());
