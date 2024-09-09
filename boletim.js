

  let n1 = 4;
  let n2 = 8;
  let n3 = 7;
  let n4 = 4;

  let somaNotas = n1 + n2 + n3 + n4;

  let mediaAluno = somaNotas / 4;

  function notaBoletim() {
    if (mediaAluno >= 6) {
      console.log("Voce Passou " + "Sua Média Foi : " + mediaAluno)
    } else {
      console.log("Voce Reprovou " + "Sua Média Foi : " + mediaAluno)
    }
  }

console.log(notaBoletim());



