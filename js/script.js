    document.addEventListener("DOMContentLoaded", function() {
        // Menu Toggle
        const menuButton = document.getElementById("menuButton");
        const menuOptions = document.getElementById("menuOptions");
        const menuOptionButtons = document.querySelectorAll(".menu-option");
        const contentSections = document.querySelectorAll(".content");

        menuButton.addEventListener("click", function() {
            menuOptions.style.display = (menuOptions.style.display === "flex") ? "none" : "flex";
        });

        menuOptionButtons.forEach(button => {
            button.addEventListener("click", () => {
                const target = button.getAttribute("data-target");
                contentSections.forEach(section => {
                    section.style.display = (section.id === target) ? "block" : "none";
                });
            });
        });

        document.getElementById("presentes").style.display = "block";

        // Countdown Timer
        const countdown = document.getElementById("countdown");
        const targetDate = new Date("2025-04-19T00:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
        
            if (distance < 0) {
                countdown.innerHTML = "Expirado";
                return;
            }
        
            const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((distance % (1000 * 60)) / 1000);
        
            countdown.innerHTML = `
                <div class="countdown-item">${dias} <span>Dias</span></div>
                <div class="countdown-item">${horas} <span>Horas</span></div>
                <div class="countdown-item">${minutos} <span>Minutos</span></div>
                <div class="countdown-item">${segundos} <span>Segundos</span></div>
            `;
        }

        setInterval(updateCountdown, 1000);

        // Tabs for "Presentes"
        const padrinhosBtn = document.getElementById("padrinhosBtn");
        const convidadosBtn = document.getElementById("convidadosBtn");
        const padrinhosList = document.getElementById("padrinhosList");
        const convidadosList = document.getElementById("convidados");
        const passwordPrompt = document.getElementById("passwordPrompt");

        padrinhosBtn.addEventListener("click", () => {
            passwordPrompt.style.display = "block";
            padrinhosList.style.display = "none";
            convidadosList.style.display = "none";
        });

        convidadosBtn.addEventListener("click", () => {
            padrinhosList.style.display = "none";
            convidadosList.style.display = "block";
            passwordPrompt.style.display = "none";
        });

        document.getElementById("checkPasswordBtn").addEventListener("click", () => {
            const passwordInput = document.getElementById("padrinhosPassword").value;
            if (passwordInput === "kalebe01") {
                passwordPrompt.style.display = "none";
                padrinhosList.style.display = "block";
            } else {
                alert("Senha incorreta!");
            }
        });

        // Presence Form
        const form = document.getElementById("presence-form");
        const numAcompanhantesInput = document.getElementById("acompanhantes");
        const acompanhantesList = document.getElementById("acompanhantes-list");
        const acompanhantesContainer = document.getElementById("acompanhantes-container");

        numAcompanhantesInput.addEventListener("input", () => {
            const numAcompanhantes = parseInt(numAcompanhantesInput.value, 10);
            acompanhantesContainer.innerHTML = '';

            if (numAcompanhantes > 0) {
                acompanhantesList.classList.remove("d-none");

                for (let i = 1; i <= numAcompanhantes; i++) {
                    const div = document.createElement("div");
                    div.classList.add("acompanhante-item");
                    div.innerHTML = `
                        <label for="acompanhante-${i}">Nome do Acompanhante ${i}:</label>
                        <input type="text" id="acompanhante-${i}" name="acompanhante-${i}" class="form-control" placeholder="Nome do Acompanhante ${i}" required>
                        <label for="acompanhante-${i}-criança">É uma criança?</label>
                        <input type="checkbox" id="acompanhante-${i}-criança" name="acompanhante-${i}-criança">
                    `;
                    acompanhantesContainer.appendChild(div);
                }
            } else {
                acompanhantesList.classList.add("d-none");
            }
        });

        form.addEventListener("submit", event => {
            event.preventDefault();
            alert("Formulário enviado com sucesso!");
        });
    });

    function copiarValor() {
        var copyText = document.getElementById("valorCopiar");
        copyText.select();
        copyText.setSelectionRange(0, 99999); // Para dispositivos móveis
        document.execCommand("copy");
        alert("Valor copiado: " + copyText.value);
    }

    // Exibe a modal ao clicar em um item
    document.querySelectorAll('.item-presente').forEach(item => {
        item.addEventListener('click', function() {
            const itemNome = this.getAttribute('data-item');
            document.getElementById('mensagemPresente').textContent = ` ${itemNome}?`;
            $('#modalPresente').modal('show');
        });
    });

    // Envia a mensagem via WhatsApp
    function enviarWhatsApp() {
        const nomePadrinho = document.getElementById('nomePadrinho').value;
        const nomeMadrinha = document.getElementById('nomeMadrinha').value;
        const presente = document.getElementById('mensagemPresente').textContent;

        const mensagem = `Olá, gostaria de presentear os noivos com ${presente}.\n\nPadrinho: ${nomePadrinho}\nMadrinha: ${nomeMadrinha}`;
        const numeroWhatsApp = '43 999588399';
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp.replace(/\s+/g, '')}?text=${encodeURIComponent(mensagem)}`;

        window.open(urlWhatsApp, '_blank');
    }


    function disableClickOnDado() {
        // Seleciona todos os elementos com a classe 'dado'
        const items = document.querySelectorAll('.dado');
        
        // Itera por cada item e desativa o clique
        items.forEach(item => {
            item.style.pointerEvents = 'none'; // Desativa a possibilidade de clique
        });
    }
    
    // Chame a função sempre que um item for marcado como 'dado'
    disableClickOnDado();


   
    const presentes = {
        "CAFETEIRA": "../img/cafeteira.jpg",
        "CHALEIRA ELÉTRICA": "../img/chaleira.jpg",
        "COBERTOR ANTIALERGICO KING": "../img/cobertor.jpg",
        "COLCHA DE CAMA": "../img/colcha.jpg",
        "EDREDOM (ANTIALÉRGICO)": "../img/endredom.webp",
        "ESPREMEDOR DE FRUTAS": "../img/espreme.jpg",
        "FAQUEIRO (TRAMONTINA)": "../img/faqueiro.jpg",
        "FERRO DE PASSAR ROUPAS": "../img/ferro-de-passar-roupas.jpg",
        "FERRO ELÉTRICO": "../img/FERRO.jpg",
        "FRIGIDEIRA": "../img/frigideira.jpg",
        "GARRAFA TÉRMICA": "../img/garrafa.jpg",
        "JOGO DE SOBREMESA": "../img/JOGO DE SOBREMESA.jpg",
        "JOGO DE COPO": "../img/copos.jpg",
        "JOGO DE FORMAS (TEFLON)": "../img/formas.jpg",
        "JOGO DE JANTAR (PORCELANATO)": "../img/jantar.jpg",
        "JOGO DE TOALHA": "../img/mesa.jpg",
        "JOGO DE FACAS DE CARNE": "../img/JOGO DE FACAS DE CARNE.jpg",
        "JOGO DE PANELA": "../img/panela.jpg",
        "JOGO DE TAPETES": "../img/tapete.jpg",
        "JOGO DE TOALHA DE BANHO": "../img/banho.jpg",
        "JOGO DE XÍCARA": "../img/xicara.jpg",
        "LENÇOL": "../img/lençol.jpg",
        "LIQUIDIFICADOR": "../img/liquitificador.jpg",
        "MANTINHA": "../img/mantinha.jpg",
        "PANELA ELETRICA": "../img/PANELA ELETRICA.jpg",
        "PANELA DE PRESSÃO": "../img/pressão.jpg",
        "PANELA DE PRESSÃO ELETRICA": "../img/PANELA DE PRESSÃO ELETRICA.jpg",
        "TRAVESSA DE INOX": "../img/forma.jpg",
        "TRAVESSA DE VIDRO (MARINEX)": "../img/marinex.jpg",

        "TRAVESSEIRO ANTI-ALÉRGICO NASA": "../img/Nasa.webp",
        "TÁBUA DE PASSAR ROUPA": "../img/Tabua-de-passar-roupa-com-forro-termico-regulagem-de-altura-Utimil-1345842.webp",
        "GRILL REDONDO ELÉTRICO SMART GRILL, PRETO, 1200W, 110V OU BIVOLT": "../img/GRILL.jpeg",
        "CHURRASQUEIRA": "../img/churras.webp",
        "VENTILADOR 8 PÁS": "../img/ventila.webp",
        "SANDUICHEIRA GRILL": "../img/sanduba.webp"
    };

    document.querySelectorAll('.item-presente').forEach(item => {
        item.addEventListener('click', () => {
            const presente = item.getAttribute('data-item');
            const imagemSrc = presentes[presente] || "img/default.jpg"; // Imagem padrão se não encontrar
            document.getElementById('imagemPresente').src = imagemSrc;
            document.getElementById('descricaoPresente').textContent = `Você selecionou: ${presente}`;
            $('#modalPresente').modal('show');
        });
    });

    function copiarValor() {
        const valor = document.getElementById("valorCopiar");
        valor.select();
        valor.setSelectionRange(0, 99999); // Para dispositivos móveis
        document.execCommand("copy");
        alert("Chave Pix copiada!");
    }
