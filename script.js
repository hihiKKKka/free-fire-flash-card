document.addEventListener('DOMContentLoaded', () => {
  
    const audio = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');

    audio.play().catch((error) => {
        console.log("Autoplay bloqueado: ", error);
    });

    musicToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicToggle.textContent = 'Desligar Música';
        } else {
            audio.pause();
            musicToggle.textContent = 'Ligar Música';
        }
    });

    audio.volume = 0.4;

   
    const cartoes = document.querySelectorAll('.cartao');
    const tiroSom = new Audio('assets/audio/shot.mp3');

    cartoes.forEach(cartao => {
        const pergunta = cartao.querySelector('.cartao__conteudo__pergunta');
        const conteudo = cartao.querySelector('.cartao__conteudo');

        pergunta.addEventListener('click', () => {
            tiroSom.currentTime = 0;
            tiroSom.play();
            conteudo.classList.toggle('active');
        });
    });

    const Kauan = document.getElementById('Kauan');
    const Racha = document.getElementById('Racha');
    const Cabeca = document.getElementById('Cabeça');

    let KauanClicks = 0;
    let RachaClicks = 0;
    let CabecaClicks = 0;

    const resetCounts = () => {
        KauanClicks = 0;
        RachaClicks = 0;
        CabecaClicks = 0;
    };

    const checkEasterEgg = () => {
        if (KauanClicks === 6 && RachaClicks === 6 && CabecaClicks === 6) {
            resetCounts();

            
            const img = document.createElement('img');
            img.src = 'assets/img/easter-egg.webp';
            img.alt = 'Easter Egg';
            img.style.position = 'fixed';
            img.style.top = '50%';
            img.style.left = '50%';
            img.style.transform = 'translate(-50%, -50%)';
            img.style.zIndex = '9999';
            img.style.boxShadow = '0 0 15px rgba(0,0,0,0.8)';
            img.style.borderRadius = '6px';
            img.style.width = '500px';
            img.style.height = 'auto';
            document.body.appendChild(img);

           
            const sound = new Audio('assets/audio/vtnc.mp3');
            sound.volume = 1.0; 
            sound.play();

           
            setTimeout(() => {
                document.body.removeChild(img);
                sound.pause();
                sound.currentTime = 0;
            }, 14000);
        }
    };

   
    Kauan.addEventListener('click', () => {
        KauanClicks++;
        checkEasterEgg();
    });

    Racha.addEventListener('click', () => {
        RachaClicks++;
        checkEasterEgg();
    });

    Cabeca.addEventListener('click', () => {
        CabecaClicks++;
        checkEasterEgg();
    });
});
