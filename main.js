const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel",
        "let nomeVariavel",
        "ambos são corretos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "array.push()",
        "array.unshift()",
        "array.pop()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de linha em JavaScript?",
      respostas: [
        "// Comentário",
        "<!-- Comentário -->",
        "/* Comentário */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Como você pode verificar o tipo de uma variável em JavaScript?",
      respostas: [
        "typeof",
        "typeOf",
        "typeof()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método que é chamado quando um objeto é criado em JavaScript?",
      respostas: [
        "start()",
        "init()",
        "constructor()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual destas opções é uma maneira correta de selecionar um elemento HTML por sua ID usando JavaScript?",
      respostas: [
        "getElementById(#id)",
        "selectElementById(#id)",
        "document.getElementById('id')"
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      respostas: [
        "Altera o tamanho do array",
        "Mapeia cada elemento do array e retorna um novo array",
        "Remove elementos duplicados do array"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "Qual destas opções é uma maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 10; i++)",
        "for (var i = 0; i < 10; i++)",
        "for (i = 0; i < 10)"
      ],
      correta: 1
    }
  ];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
  
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//laço de repetição
for(const item of perguntas) {
  
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}