// Seleciona os elementos do carrossel
const box = document.querySelector(".container-carrossel-lista");
const cards = document.querySelectorAll(".container-carrossel-item");
const botaoAvancar = document.querySelector(".carrossel-botao-avancar");
const botaoVoltar = document.querySelector(".carrossel-botao-voltar");
const marcadores = document.querySelectorAll(".carrossel-marcadores img");

let contador = 0; // Índice do slide atual
const totalSlides = cards.length;

// Função para mostrar o slide atual (desktop)
function mostrarSlideDesktop(index) {
  const slideWidth = cards[0].offsetWidth + 40; // Largura do slide + gap
  const containerWidth = box.offsetWidth; // Largura do contêiner do carrossel
  let offset;

  if (index === 0) {
    // Alinha o primeiro slide à esquerda
    offset = 0;
  } else if (index === totalSlides - 1) {
    // Alinha o último slide à direita
    offset = -index * slideWidth + (containerWidth - slideWidth);
  } else {
    // Centraliza os demais slides
    offset = -index * slideWidth + (containerWidth / 2 - slideWidth / 2);
  }

  box.style.transform = `translateX(${offset}px)`;

  // Atualiza os marcadores
  atualizarMarcadores(index);

  // Desabilita os botões no início ou no final
  atualizarBotoes(index);
}

// Função para mostrar o slide atual (mobile)
function mostrarSlideMobile(index) {
  const slideWidth = cards[0].offsetWidth; // Largura do slide
  const gap = 5; // Espaço entre os slides (definido no CSS mobile)
  const containerWidth = box.offsetWidth; // Largura total do contêiner (sem padding)
  const totalSlideWidth = slideWidth + gap; // Largura total do slide + espaço entre eles

  let offset;

  // Adicionando uma margem de 20px ao deslocamento do primeiro slide
  const margem = -8.5; // Ajuste esse valor para a margem desejada
  if (index === 0) {
    offset = margem; // Desloca o primeiro slide para a direita com margem
  } else {
    // Para os demais slides, continue com o deslocamento normal, com a margem
    offset = -(index * totalSlideWidth) + margem; // Desloca o restante com a margem
  }

  box.style.transform = `translateX(${offset}px)`;

  // Atualiza os marcadores
  atualizarMarcadores(index);

  // Desabilita os botões no início ou no final
  atualizarBotoes(index);
}

// Função para atualizar os marcadores
function atualizarMarcadores(index) {
  marcadores.forEach((marcador, i) => {
    marcador.src =
      i === index
        ? "./assets/marcador-verde.svg"
        : "./assets/marcador-branco.svg";
  });
}

// Função para atualizar os botões
function atualizarBotoes(index) {
  botaoVoltar.disabled = index === 0;
  botaoAvancar.disabled = index === totalSlides - 1;

  botaoVoltar.style.opacity = index === 0 ? "0.5" : "1";
  botaoAvancar.style.opacity = index === totalSlides - 1 ? "0.5" : "1";

  if (index === 0) {
    botaoVoltar.classList.add("desabilitado"); // Desabilita o botão "Voltar"
  } else {
    botaoVoltar.classList.remove("desabilitado"); // Habilita o botão "Voltar"
  }

  if (index === totalSlides - 1) {
    botaoAvancar.classList.add("desabilitado"); // Desabilita o botão "Avançar"
  } else {
    botaoAvancar.classList.remove("desabilitado"); // Habilita o botão "Avançar"
  }
}

// Função para mostrar o slide atual (automática para desktop ou mobile)
function mostrarSlide(index) {
  if (window.innerWidth <= 768) {
    mostrarSlideMobile(index); // Comportamento para mobile
  } else {
    mostrarSlideDesktop(index); // Comportamento para desktop
  }
}

// Evento para o botão "Avançar"
botaoAvancar.addEventListener("click", () => {
  if (contador < totalSlides - 1) {
    contador++;
  } else {
    contador = 0; // Volta para o primeiro slide
  }
  mostrarSlide(contador);
});

// Evento para o botão "Voltar"
botaoVoltar.addEventListener("click", () => {
  if (contador > 0) {
    contador--;
  } else {
    contador = totalSlides - 1; // Vai para o último slide
  }
  mostrarSlide(contador);
});

// Inicializa o carrossel mostrando o primeiro slide
mostrarSlide(contador);

// Função para iniciar o carrossel automático no mobile
function iniciarCarrosselAutomatico() {
  if (window.innerWidth <= 768) {
    setInterval(() => {
      if (contador < totalSlides - 1) {
        contador++;
      } else {
        contador = 0; // Volta ao primeiro slide
      }
      mostrarSlide(contador);
    }, 3000); // Avança a cada 3 segundos
  }
}

// Inicia o carrossel automático se estiver em mobile
iniciarCarrosselAutomatico();

// Atualiza o carrossel ao redimensionar a tela
window.addEventListener("resize", () => {
  mostrarSlide(contador);
});

// ===== CARROSSEL DE ESTUDOS =====
document.addEventListener("DOMContentLoaded", function () {
  const carrosselEstudos = document.querySelector(".container-conteudo");
  const estudos = document.querySelectorAll(".estudo-conteudo");
  const totalSlidesEstudos = estudos.length;
  let indexEstudos = 0;
  let intervaloMobileEstudos = null; // Variável para armazenar o intervalo do carrossel automático

  // Função para avançar o carrossel de estudos
  function avancarCarrosselEstudos() {
    if (window.innerWidth > 768) return; // Impede o carrossel no desktop

    indexEstudos++;

    if (indexEstudos === totalSlidesEstudos) {
      carrosselEstudos.style.transition = "none";
      carrosselEstudos.style.transform = `translateX(0%)`;
      indexEstudos = 0;

      setTimeout(() => {
        carrosselEstudos.style.transition = "transform 0.5s ease-in-out";
      }, 50);
    } else {
      carrosselEstudos.style.transform = `translateX(-${indexEstudos * 100}%)`;
    }
  }

  // Função para iniciar o carrossel automático no mobile
  function iniciarCarrosselEstudosAutomatico() {
    if (window.innerWidth <= 768) {
      intervaloMobileEstudos = setInterval(avancarCarrosselEstudos, 3000); // Avança a cada 3 segundos
    }
  }

  // Função para parar o carrossel automático
  function pararCarrosselEstudosAutomatico() {
    if (intervaloMobileEstudos) {
      clearInterval(intervaloMobileEstudos);
    }
  }

  // Atualiza o carrossel ao redimensionar a tela
  window.addEventListener("resize", () => {
    pararCarrosselEstudosAutomatico(); // Para o intervalo atual
    if (window.innerWidth <= 768) {
      iniciarCarrosselEstudosAutomatico(); // Reinicia o intervalo se estiver em mobile
    } else {
      indexEstudos = 0; // Reinicia o carrossel para desktop
      carrosselEstudos.style.transition = "none";
      carrosselEstudos.style.transform = `translateX(0%)`;
    }
  });

  // Inicia o carrossel automático se estiver em mobile
  if (window.innerWidth <= 768) {
    iniciarCarrosselEstudosAutomatico();
  }
});

// Lógica para o menu oculto
const botaoMenu = document.querySelector(".botao-menu");
const listaOculta = document.querySelector(".lista-oculta");
const fundoDesfocado = document.createElement("div");

// Adiciona a classe ao fundo desfocado e insere no body
fundoDesfocado.classList.add("fundo-desfocado");
document.body.appendChild(fundoDesfocado);

botaoMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  listaOculta.classList.toggle("ativo"); // Alterna a classe "ativo" na lista
  fundoDesfocado.classList.toggle("ativo");
});

// Fechar o menu ao clicar em um link dentro dele
document.querySelectorAll(".lista-oculta a").forEach((link) => {
  link.addEventListener("click", () => {
    listaOculta.classList.remove("ativo");
    fundoDesfocado.classList.remove("ativo");
  });
});

// Fechar o menu e o fundo desfocado ao clicar fora
document.addEventListener("click", (event) => {
  if (
    !listaOculta.contains(event.target) &&
    !botaoMenu.contains(event.target)
  ) {
    listaOculta.classList.remove("ativo");
    fundoDesfocado.classList.remove("ativo");
  }
});

// Lógica para mostrar/esconder texto
const botaoMostrarEsconder = document.querySelectorAll(
  ".botao-mostrar-esconder"
);
const textoMostrarEsconder = document.querySelectorAll(
  ".texto-mostrar-esconder"
);
const containerProcessos = document.querySelectorAll(
  ".processos-container-conteudo"
);

botaoMostrarEsconder.forEach((botao, index) => {
  const texto = textoMostrarEsconder[index]; // Seleciona o texto correspondente
  const container = containerProcessos[index]; // Seleciona o container correspondente

  botao.addEventListener("click", () => {
    if (texto.classList.contains("hidden")) {
      texto.classList.remove("hidden");
      texto.classList.add("visivel");
      botao.src = "./assets/ver-menos.svg";
      container.classList.add("aberto");
    } else {
      texto.classList.remove("visivel");
      texto.classList.add("hidden");
      botao.src = "./assets/mostrar-mais.svg";
      container.classList.remove("aberto");
    }
  });
});

// Lógica para abrir o LinkedIn
const botoesLinkedin = document.querySelectorAll(".img-linkedin");

botoesLinkedin.forEach((botao) => {
  botao.addEventListener("click", () => {
    window.open("https://www.linkedin.com", "_blank"); // Abre o LinkedIn em uma nova aba
  });
});
