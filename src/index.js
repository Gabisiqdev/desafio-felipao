// Dados de entrada
let nome = "Mulher Maravilha";
let xp = 5894;
let nivel = "";

// Estrutura de decisão
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Laço de repetição 
for (let i = 0; i < 1; i++) {
 console.log("O Herói de nome " + nome + " está no nível de " + nivel);
}
