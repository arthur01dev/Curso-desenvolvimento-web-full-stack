function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
  
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof msg !== "string") {
          reject(new Error("CAI NO ERRO"));
          return;
        }
  
        resolve(msg.toUpperCase() + " - PASSEI NA PROMISE");
        return;
      }, tempo);
    });
  }
  
  /*
  esperaAi("Fase 1", rand())
    .then((valor) => {
      console.log(valor);
      return esperaAi("Fase 2", rand());
    })
    .then((valor) => {
      console.log(valor);
      return esperaAi("Fase 3", rand());
    })
    .then((valor) => {
      console.log(valor);
      return valor;
    })
    .then(valor => {
      return ;
    })
    .catch((e) => console.log("erro", e));
  */
  
  async function executa() {
    try {
      const fase1 = await esperaAi("Fase 1", rand());
      console.log(fase1);
  
      const fase2 = await esperaAi("Fase 2", rand());
      console.log(fase2);
  
      const fase3 = await esperaAi("Fase 3", rand());
      console.log(fase3);
  
      console.log("Terminamos na fase: ", fase3);
    } catch (e) {
      console.log(e);
    }
  }
  
  executa();