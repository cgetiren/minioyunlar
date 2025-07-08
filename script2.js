const firebaseConfig = {
  apiKey: "AIzaSyBtBH3bA3oqv1WL9Y3BL3Zwyd0-hSBUCGc",
  authDomain: "pixaplay-liderlik.firebaseapp.com",
  projectId: "pixaplay-liderlik",
  storageBucket: "pixaplay-liderlik.firebasestorage.app",
  messagingSenderId: "192235562122",
  appId: "1:192235562122:web:42cc3dc72e44b924e47973"
};

// Firebase'i başlat
// Firebase'i başlat
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // Bu satırı olduğu gibi bırakalım, v9 compat kütüphanesi ile çalışacaktır.


// YENİ: ÇEVİRİ NESNESİ (TÜM OYUNLAR İÇİN)
const translations = {
    "tr": {
        // --- GENEL METİNLER ---
        "main_title": "PixaPlay",
        "start_btn": "Başla",
        "reset_btn": "Yeniden Başla",
        "footer_text": "Tüm hakları saklıdır.",
        "score": "Skor:",
        "level": "Seviye:",
        "moves": "Hamle:",
        "next_up": "Sıradaki:",
        "time": "Süre:",
        "clicks": "Tıklama:",
        "found": "Bulunan:",
        "check_btn": "Kontrol Et",
        "player": "Sen",
        "cpu": "Bilgisayar",
        "leaderboard_title": "Liderlik Tablosu",
        "leaderboard_empty": "Henüz skor yok! İlk sen ol!",
        "leaderboard_input_placeholder": "İsminiz",
        
        // --- OYUN 1: KÖR SIRALAMA ---
        "game1_title": "1. Kör Sıralama",
        "game1_desc": "1-50 arası 10 sayıyı, küçükten büyüğe sırala. Yeni gelen sayı hiçbir yere sığmazsa kaybedersin!",
        "game1_next_number": "Sıradaki Sayı: {}", // {} içindeki <b> etiketi korunacak

        // --- OYUN 2: BÜYÜK MÜ, KÜÇÜK MÜ? ---
        "game2_title": "2. Büyük mü, Küçük mü?",
        "game2_desc": "Sıradaki sayının (1-50 arası) ekrandaki sayıdan büyük mü küçük mü olduğunu tahmin et.",
        "game2_btn_higher": "Büyük",
        "game2_btn_lower": "Küçük",

        // --- OYUN 3: RENK AVI ---
        "game3_title": "3. Renk Avı",
        "game3_desc": "Hedef renkteki kutuya olabildiğince hızlı tıkla! Ama dikkat et, yazının rengi seni yanıltabilir!",
        "game3_target": "Hedef: {}",

        // --- OYUN 4: HIZLI TIKLAMA (CPS) ---
        "game4_title": "4. Hızlı Tıklama (CPS)",
        "game4_desc": "10 saniye içinde alana olabildiğince çok tıkla! Saniyedeki tıklama sayın (CPS) ölçülecek.",
        "game4_click_to_start": "Başlamak için tıkla",

        // --- OYUN 5: HEDEF VURMA ---
        "game5_title": "5. Hedef Vurma",
        "game5_desc": "30 saniye içinde ekranda rastgele beliren kırmızı hedefleri vurmaya çalış. Her vuruş 1 puan!",

        // --- OYUN 6: KELİME TAHMİNİ ---
        "game6_title": "6. Kelime Tahmini",
        "game6_desc": "Klasik adam asmaca. Gizli kelimeyi bulmak için harflere tıkla. Sadece 6 yanlış yapma hakkın var.",
        "game6_guesses_left": "Kalan Hak:",

        // --- OYUN 7: SAYI HAFIZASI ---
        "game7_title": "7. Sayı Hafızası",
        "game7_desc": "Ekranda beliren sayı dizisini aklında tutup tuş takımından doğru sırayla gir. Bakalım kaç basamağı hatırlayacaksın?",

        // --- OYUN 8: FARKI BUL ---
        "game8_title": "8. Farkı Bul",
        "game8_desc": "Kareler arasındaki tek farklı renkteki kareyi bul. Her turda daha da zorlaşacak!",

        // --- OYUN 9: SIRALI TIKLAMA ---
        "game9_title": "9. Sıralı Tıklama",
        "game9_desc": "Ekranda beliren sayıları 1'den 12'ye kadar doğru sırayla olabildiğince hızlı tıkla. Süren ölçülecek (düşük olan iyidir).",

        // --- OYUN 10: TAŞ-KAĞIT-MAKAS ---
        "game10_title": "10. Taş-Kağıt-Makas",
        "game10_desc": "Bilgisayara karşı oyna. 5 puana ilk ulaşan kazanır. Skor farkı liderlik tablosuna yazılır.",
        
        // --- OYUN 11: RENK HAFIZASI ---
        "game11_title": "11. Renk Hafızası",
        "game11_desc": "Oyunun gösterdiği renk sırasını aklında tut ve tekrarla. Bakalım hafızan ne kadar kuvvetli?",

        // --- OYUN 12: HAFIZA KARTLARI ---
        "game12_title": "12. Hafıza Kartları",
        "game12_desc": "Kapalı kartları çevirerek eşlerini bul. En az hamlede bitirerek liderlik tablosuna gir!",

        // --- OYUN 13: MAYIN TARLASI ---
        "game13_title": "13. Mayın Tarlası",
        "game13_desc": "Klasik mayın tarlası. Seviye atladıkça mayın sayısı artar. Mayına basmadan tüm boş kareleri aç!",
        "game13_mines_left": "Kalan Mayın:",

        // --- OYUN 14: DESEN HAFIZASI ---
        "game14_title": "14. Desen Hafızası",
        "game14_desc": "Ekranda beliren deseni aklında tut ve aynısını işaretle. Seviye atladıkça desen karmaşıklaşır.",
        
        // --- OYUN 15: KAYDIRMALI BULMACA ---
        "game15_title": "15. Kaydırmalı Bulmaca",
        "game15_desc": "Karışık sayıları kaydırarak 1'den 8'e kadar sırala. En az hamleyle bitirmeye çalış!",

        // --- OYUN 16: YAZMA HIZI TESTİ ---
        "game16_title": "16. Yazma Hızı Testi",
        "game16_desc": "Verilen kelimeleri 30 saniyede hatasız yazmaya çalış. Dakikadaki kelime sayını (WPM) ölç!",
        "game16_placeholder": "Yazmaya başla...",
        
        // --- OYUN 18: ARİTMETİK DEHASI ---
        "game18_title": "17. Aritmetik Dehası",
        "game18_desc": "30 saniyede olabildiğince çok matematik sorusu çöz. Her doğru cevap puan kazandırır!",
        "game18_answer_placeholder": "Cevap",
        
        // --- OYUN 19: ENGELDEN KAÇIŞ ---
        "game19_title": "18. Engelden Kaçış",
        "game19_desc": "Fare ile oyuncuyu kontrol ederek engellere çarpmadan en yüksek skoru yapmaya çalış."
    },
    "en": {
        // --- GENERAL TEXTS ---
        "main_title": "PixaPlay",
        "start_btn": "Start",
        "reset_btn": "Restart",
        "footer_text": "All rights reserved.",
        "score": "Score:",
        "level": "Level:",
        "moves": "Moves:",
        "next_up": "Next:",
        "time": "Time:",
        "clicks": "Clicks:",
        "found": "Found:",
        "check_btn": "Check",
        "player": "You",
        "cpu": "CPU",
        "leaderboard_title": "Leaderboard",
        "leaderboard_empty": "No scores yet! Be the first!",
        "leaderboard_input_placeholder": "Your Name",

        // --- GAME 1: BLIND SORT ---
        "game1_title": "1. Blind Sort",
        "game1_desc": "Sort 10 numbers from 1-50. You lose if the new number doesn't fit anywhere!",
        "game1_next_number": "Next Number: {}",
        
        // --- GAME 2: HIGHER OR LOWER? ---
        "game2_title": "2. Higher or Lower?",
        "game2_desc": "Guess if the next number (1-50) is higher or lower than the one on screen.",
        "game2_btn_higher": "Higher",
        "game2_btn_lower": "Lower",

        // --- GAME 3: COLOR HUNT ---
        "game3_title": "3. Color Hunt",
        "game3_desc": "Click the box with the target color as fast as you can! But beware, the color of the text might trick you!",
        "game3_target": "Target: {}",
        
        // --- GAME 4: CPS TEST ---
        "game4_title": "4. CPS Test",
        "game4_desc": "Click the area as many times as you can in 10 seconds! Your Clicks Per Second (CPS) will be measured.",
        "game4_click_to_start": "Click to start",

        // --- GAME 5: AIM TRAINER ---
        "game5_title": "5. Aim Trainer",
        "game5_desc": "Try to shoot the randomly appearing red targets for 30 seconds. Each hit is 1 point!",

        // --- GAME 6: HANGMAN ---
        "game6_title": "6. Hangman",
        "game6_desc": "Classic hangman. Click the letters to find the secret word. You only have 6 wrong guesses.",
        "game6_guesses_left": "Guesses Left:",
        
        // --- GAME 7: NUMBER MEMORY ---
        "game7_title": "7. Number Memory",
        "game7_desc": "Memorize the sequence of numbers and enter it correctly using the keypad. How many digits can you remember?",

        // --- GAME 8: FIND THE DIFFERENCE ---
        "game8_title": "8. Find the Difference",
        "game8_desc": "Find the one square with a different color. It gets harder with each round!",

        // --- GAME 9: REACTION TIME ---
        "game9_title": "9. Reaction Time",
        "game9_desc": "Click the numbers from 1 to 12 in the correct order as fast as you can. Your time will be measured (lower is better).",

        // --- GAME 10: ROCK-PAPER-SCISSORS ---
        "game10_title": "10. Rock-Paper-Scissors",
        "game10_desc": "Play against the computer. First to 5 points wins. The score difference is saved to the leaderboard.",
        
        // --- GAME 11: COLOR MEMORY ---
        "game11_title": "11. Color Memory",
        "game11_desc": "Memorize the sequence of colors shown by the game and repeat it. How strong is your memory?",

        // --- GAME 12: MEMORY MATCH ---
        "game12_title": "12. Memory Match",
        "game12_desc": "Flip the cards to find their pairs. Finish in the fewest moves to get on the leaderboard!",

        // --- GAME 13: MINESWEEPER ---
        "game13_title": "13. Minesweeper",
        "game13_desc": "Classic minesweeper. The number of mines increases with each level. Uncover all empty cells without hitting a mine!",
        "game13_mines_left": "Mines Left:",
        
        // --- GAME 14: PATTERN MEMORY ---
        "game14_title": "14. Pattern Memory",
        "game14_desc": "Memorize the pattern on the screen and replicate it. The pattern gets more complex with each level.",
        
        // --- GAME 15: SLIDING PUZZLE ---
        "game15_title": "15. Sliding Puzzle",
        "game15_desc": "Slide the mixed-up numbers to sort them from 1 to 8. Try to finish in the fewest moves!",

        // --- GAME 16: TYPING TEST ---
        "game16_title": "16. Typing Test",
        "game16_desc": "Try to type the given words flawlessly in 30 seconds. Your Words Per Minute (WPM) will be measured!",
        "game16_placeholder": "Start typing...",
        
        // --- GAME 18: ARITHMETIC GENIUS ---
        "game18_title": "17. Arithmetic Genius",
        "game18_desc": "Solve as many math problems as you can in 30 seconds. Every correct answer earns points!",
        "game18_answer_placeholder": "Answer",
        
        // --- GAME 19: DODGE ---
        "game19_title": "18. Dodge",
        "game19_desc": "Control the player with your mouse and get the highest score without hitting the obstacles."
    }
};


document.addEventListener('DOMContentLoaded', () => {

    // --- YENİ: SES EFEKTLERİ ---
    const sounds = {
        click: new Audio('click.wav'),     // Genel tıklama sesi
        correct: new Audio('correct.wav'), // Doğru cevap sesi
        wrong: new Audio('wrong.wav'),     // Yanlış cevap/kaybetme sesi
        win: new Audio('win.wav'),     // Oyunu kazanma/tur atlama sesi
        hover: new Audio('hover.wav'),
        sound1: new Audio('mixkit-modern-technology-select.wav'),
        sound2: new Audio('mixkit-negative-tone-interface-tap.wav'),
        sound3: new Audio('mixkit-click-error.wav'),
        sound4: new Audio('mixkit-arcade-game-jump-coin.wav')
    };

    // Genel, sık duyulan sesler biraz daha kısık olabilir
    sounds.click.volume = 0.5; // %40
    sounds.hover.volume = 0.5; // Hover sesi çok kısık olmalı, %20
    sounds.sound4.volume = 0.05; // Renk Avı tıklama sesi, %50

    // Onay ve doğru cevap sesleri orta seviyede
    sounds.correct.volume = 0.5; // %60
    sounds.sound1.volume = 0.1; // %60
    
    // Hata ve yanlış cevap sesleri daha belirgin olabilir
    sounds.wrong.volume = 0.5; // %70
    sounds.sound2.volume = 0.1; // %70
    sounds.sound3.volume = 0.04; // %70

    // Kazanma sesi en yüksek olabilir!
    sounds.win.volume = 0.3; // %80



    const langBtn = document.getElementById('lang-btn');
    const langBtnText = document.getElementById('lang-btn-text');
    const langDropdown = document.getElementById('lang-dropdown');
    
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang); // Dili tarayıcıda sakla

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                // <p> gibi elementlerdeki <b>, <i> gibi iç etiketleri korumak için
                // Örnek: "Skor: <b id='...'>0</b>"
                const childElement = el.querySelector('b, i, span');
                if(childElement && translations[lang][key].includes('{}')) {
                    const textParts = translations[lang][key].split('{}');
                    el.childNodes[0].nodeValue = textParts[0] || '';
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Buton metnini ve bayrağı güncelle
        langBtnText.textContent = lang === 'tr' ? 'Türkçe' : 'English';
        langBtn.querySelector('.flag-icon').textContent = lang === 'tr' ? '🇹🇷' : '🇬🇧';
        
        langDropdown.classList.add('hidden');
    }

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        langDropdown.classList.add('hidden');
    });

    langDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const langLink = e.target.closest('a');
        if (langLink) {
            const lang = langLink.dataset.lang;
            if (lang) {
                setLanguage(lang);
            }
        }
    });

    // Sayfa yüklendiğinde kayıtlı dili uygula veya varsayılanı kullan
    const savedLang = localStorage.getItem('language') || 'tr';
    setLanguage(savedLang);




    // --- ODAK MODU (MODAL) YÖNETİCİSİ ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const mainContainer = document.getElementById('game-container');

    function createCloseButton() {
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-modal-btn';
        closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
        closeBtn.onclick = closeModal;
        return closeBtn;
    }

    function openModal(gameCard) {
        gameCard.dataset.originalParent = 'game-container';
        gameCard.dataset.nextSiblingId = gameCard.nextElementSibling ? gameCard.nextElementSibling.id : null;
        
        const closeBtn = createCloseButton();
        gameCard.appendChild(closeBtn);
        modalContent.appendChild(gameCard);
        
        gameCard.classList.add('focused-game');
        modalOverlay.classList.remove('hidden');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        const gameCard = modalContent.querySelector('.game-card');
        
        if (gameCard) {
            const closeBtn = gameCard.querySelector('.close-modal-btn');
            if(closeBtn) gameCard.removeChild(closeBtn);

            gameCard.classList.remove('focused-game');
            const nextSiblingId = gameCard.dataset.nextSiblingId;
            const nextSibling = nextSiblingId ? document.getElementById(nextSiblingId) : null;
            if (nextSibling) {
                mainContainer.insertBefore(gameCard, nextSibling);
            } else {
                mainContainer.appendChild(gameCard);
            }
        }
        
        modalOverlay.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }

    document.querySelectorAll('.fullscreen-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const gameCard = btn.closest('.game-card');
            openModal(gameCard);
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // --- UTILITY & LEADERBOARD MANAGER ---
    const hide = (el) => el.classList.add('hidden');
    const show = (el) => el.classList.remove('hidden');

    
    // Mevcut leaderboardManager nesnesini silip bunu yapıştırın

    const leaderboardManager = {

    initDB() {
            // Firebase zaten global olarak başlatıldığı için bu fonksiyonun
            // sadece var olması yeterli. Promise döndürmesi gerekiyor.
            return Promise.resolve(); 
    },
    // Hangi oyunların liderlik tablosu olacağını ve sıralama türünü burada belirliyoruz.
    leaderboardGames: {
        'game2': 'desc', 'game3': 'desc', 'game4': 'desc', 'game5': 'desc', 
        'game7': 'desc', 'game8': 'desc', 'game9': 'asc', 'game11': 'desc', 'game12': 'asc',
        'game13': 'desc', 'game14': 'desc', 'game15': 'asc', 'game16': 'desc',
        'game18': 'desc', 'game19': 'desc'
    },

    async checkAndPromptForScore(gameId, score, gameCard, resetBtn) {
        if (!this.leaderboardGames[gameId]) return; // Liderlik tablosu olmayan oyunları atla

        const sortOrder = this.leaderboardGames[gameId];
        const leaderboardsRef = db.collection('leaderboards').doc(gameId).collection('scores');
        
        // Sıralama türüne göre sorguyu hazırla ve 10. kişiyi getir
        const query = leaderboardsRef.orderBy('score', sortOrder).limit(10);
        
        const snapshot = await query.get();
        const scores = snapshot.docs.map(doc => doc.data().score);

        // Tablo 10 kişiden azsa VEYA yeni skor liderlik tablosuna girmeye yetiyorsa
        let canEnter = false;
        if (scores.length < 10) {
            canEnter = true;
        } else {
            const lastScore = scores[scores.length - 1];
            if (sortOrder === 'desc' && score > lastScore) canEnter = true;
            if (sortOrder === 'asc' && score < lastScore) canEnter = true;
        }

        if (canEnter) {
            // Kaydetme butonu parlar ve kullanıcıdan isim istenir
            this.promptForName(gameId, score, gameCard, resetBtn);
        }
    },

    promptForName(gameId, score, gameCard, resetBtn) {
        const promptEl = document.createElement('div');
        promptEl.className = 'leaderboard-prompt';
        promptEl.innerHTML = `<input type="text" placeholder="İsminiz" maxlength="10"><button class="glowing">💾</button>`;
        gameCard.appendChild(promptEl);
        
        const input = promptEl.querySelector('input');
        input.focus();
        
        promptEl.querySelector('button').onclick = async () => {
                const name = input.value.trim() || 'Anonim';
                promptEl.querySelector('button').disabled = true; // Tekrar basılmasını engelle

                // Skoru veritabanına ekle ve işlemin bitmesini bekle
                await this.addScore(gameId, name, score);
                
                // Skor eklendikten sonra prompt'u kaldır
                promptEl.remove();

                // Şimdi liderlik tablosunu göster
                this.displayLeaderboard(gameId, gameCard, resetBtn, name, score);
        };
    },

    async addScore(gameId, name, score) {
        const sortOrder = this.leaderboardGames[gameId];
        const leaderboardsRef = db.collection('leaderboards').doc(gameId).collection('scores');
        
        // Yeni skoru ekle
        await leaderboardsRef.add({ name, score, timestamp: new Date() });

        // Tabloda 10'dan fazla skor varsa, en kötüsünü sil
        const snapshot = await leaderboardsRef.orderBy('score', sortOrder).get();
        if (snapshot.size > 10) {
            const docToDelete = snapshot.docs[snapshot.size - 1]; // Sıralamanın sonundaki doküman
            await docToDelete.ref.delete();
        }
    },

            async displayLeaderboard(gameId, gameCard, resetBtn, currentPlayerName = null, newPlayerScore = null) {
            if (!this.leaderboardGames[gameId]) return;

            this.clearLeaderboard(gameCard, resetBtn);

            const sortOrder = this.leaderboardGames[gameId];
            const leaderboardsRef = db.collection('leaderboards').doc(gameId).collection('scores');
            const query = leaderboardsRef.orderBy('score', sortOrder).limit(10);
            
            const snapshot = await query.get();
            const scores = snapshot.docs.map(doc => doc.data());

            const overlay = document.createElement('div');
            overlay.className = 'leaderboard-overlay';
            
            let playerRowId = -1;
            if(currentPlayerName !== null && newPlayerScore !== null) {
                playerRowId = scores.findIndex(s => s.name === currentPlayerName && s.score === newPlayerScore);
            }
            
            // DÜZELTİLMİŞ BÖLÜM
            let listItems = scores.map((s, i) => {
                const isPlayer = (i === playerRowId);
                const scoreFormatted = s.score.toFixed(s.score % 1 !== 0 ? 2 : 0);
                // Artık sadece tek bir sıra numarası (i+1) var.
                return `<li class="${isPlayer ? 'player-score' : ''}"><span>${i + 1}. ${s.name}</span><span>${scoreFormatted}</span></li>`;
            }).join('');

            overlay.innerHTML = `<h3>Liderlik Tablosu</h3><ol>${listItems}</ol>`;
            if (scores.length === 0) overlay.innerHTML += "<p>Henüz skor yok! İlk sen ol!</p>";
            
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'button-container';
            buttonContainer.appendChild(resetBtn);
            overlay.appendChild(buttonContainer);
            gameCard.appendChild(overlay);
    },

    clearLeaderboard(gameCard, resetBtn) {
        gameCard.querySelector('.leaderboard-overlay')?.remove();
        gameCard.querySelector('.leaderboard-prompt')?.remove();
        gameCard.querySelector('.button-container').appendChild(resetBtn);
    }
    };


    
    // --- MAIN EXECUTION BLOCK ---
    leaderboardManager.initDB().then(() => {
        const games = [
            // Oyun 1-14 arası (değişiklik yok)
            { cardId: 'game1', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() { this.card = document.getElementById('card-game1'); this.startBtn = this.card.querySelector('#game1-start'); this.resetBtn = this.card.querySelector('#game1-reset'); this.area = this.card.querySelector('#game1-area'); this.message = this.card.querySelector('#game1-message'); this.nextNumberEl = this.card.querySelector('#game1-next-number'); }, setupInitialState() { this.message.textContent = ''; this.nextNumberEl.textContent = '?'; this.slots = Array(10).fill(null); this.placedCount = 0; this.usedNumbers = []; this.area.innerHTML = ''; for (let i = 0; i < 10; i++) { const sc = document.createElement('div'); sc.className = 'slot-container'; sc.innerHTML = `<span>${i + 1}.</span><div class="slot" data-index="${i}"></div>`; this.area.appendChild(sc); } this.area.style.pointerEvents = 'none'; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); }, start() { show(this.resetBtn); hide(this.startBtn); this.area.style.pointerEvents = 'auto'; this.area.querySelectorAll('.slot').forEach(s => s.onclick = (e) => this.placeNumber(parseInt(e.target.dataset.index))); this.generateNewNumber(); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, generateNewNumber() { let animationInterval = setInterval(() => { this.nextNumberEl.textContent = Math.floor(Math.random() * 50) + 1; }, 50); setTimeout(() => { clearInterval(animationInterval); let newNum; do { newNum = Math.floor(Math.random() * 50) + 1; } while (this.usedNumbers.includes(newNum)); this.currentNumber = newNum; this.usedNumbers.push(newNum); this.nextNumberEl.textContent = this.currentNumber; if (this.placedCount > 0 && !this.canPlaceCurrentNumber()) { this.endGame(false, `Sayı (${this.currentNumber}) sığmıyor!`); } }, 500); }, canPlaceCurrentNumber() { for (let i = 0; i < 10; i++) { if (this.slots[i] === null) { const p = this.slots.slice(0, i).filter(n => n !== null).pop() || 0; const n = this.slots.slice(i + 1).find(n => n !== null) || 51; if (this.currentNumber > p && this.currentNumber < n) return true; } } return false; }, placeNumber(index) { if (this.slots[index] !== null) return; const p = this.slots.slice(0, index).filter(n => n !== null).pop() || 0; const n = this.slots.slice(index + 1).find(n => n !== null) || 51; if (this.currentNumber > p && this.currentNumber < n) { sounds.sound1.currentTime = 0.01; sounds.sound1.play(); this.slots[index] = this.currentNumber; this.area.children[index].querySelector('.slot').textContent = this.currentNumber; this.area.children[index].querySelector('.slot').classList.add('filled'); this.placedCount++; if (this.placedCount === 10) { this.endGame(true, 'Tebrikler, kazandın!'); } else { this.generateNewNumber(); } } else { this.endGame(false, 'Yanlış yer!'); } }, endGame(isWin, msg) { this.message.textContent = msg; this.message.className = isWin ? 'message win' : 'message lose'; this.area.style.pointerEvents = 'none'; if (isWin) { sounds.sound2.play(); } else { sounds.sound3.play(); } leaderboardManager.promptForScore('game1', this.placedCount, this.card, 'desc', this.resetBtn); } } },
            // OYUN 2: BÜYÜK MÜ, KÜÇÜK MÜ? (ANİMASYON HATASI GİDERİLDİ)
            { cardId: 'game2', logic: { 
                init() {
                    this.bindElements();
                    this.setupInitialState();
                    this.startBtn.addEventListener('click', () => this.start());
                    this.resetBtn.addEventListener('click', () => this.reset());
                    this.higherBtn.addEventListener('click', () => this.guess('higher'));
                    this.lowerBtn.addEventListener('click', () => this.guess('lower'));
                }, 
                bindElements() {
                    this.card = document.getElementById('card-game2');
                    this.startBtn = this.card.querySelector('#game2-start');
                    this.resetBtn = this.card.querySelector('#game2-reset');
                    this.message = this.card.querySelector('#game2-message');
                    this.scoreEl = this.card.querySelector('#game2-score');
                    this.numberEl = this.card.querySelector('#game2-number');
                    this.higherBtn = this.card.querySelector('#game2-higher');
                    this.lowerBtn = this.card.querySelector('#game2-lower');
                }, 
                setupInitialState() {
                    clearInterval(this.animationInterval);
                    this.message.textContent = '';
                    this.score = 0;
                    this.scoreEl.textContent = 0;
                    this.numberEl.textContent = "?";
                    this.higherBtn.disabled = true;
                    this.lowerBtn.disabled = true;
                    leaderboardManager.clearLeaderboard(this.card, this.resetBtn);
                },
                start() {
                    show(this.resetBtn);
                    hide(this.startBtn);
                    this.animateAndSetNumber();
                }, 
                reset() {
                    hide(this.resetBtn);
                    show(this.startBtn);
                    this.setupInitialState();
                }, 
                animateAndSetNumber() {
                    this.higherBtn.disabled = true;
                    this.lowerBtn.disabled = true;
                    
                    this.animationInterval = setInterval(() => {
                        this.numberEl.textContent = Math.floor(Math.random() * 50) + 1;
                    }, 50);
                    
                    setTimeout(() => {
                        clearInterval(this.animationInterval);
                        this.currentNum = Math.floor(Math.random() * 50) + 1;
                        this.numberEl.textContent = this.currentNum;
                        this.generateNext();
                        this.higherBtn.disabled = false;
                        this.lowerBtn.disabled = false;
                    }, 500);
                },
                generateNext() {
                    do {
                        this.nextNum = Math.floor(Math.random() * 50) + 1;
                    } while (this.nextNum === this.currentNum);
                }, 
                guess(choice) {
                    const isHigher = this.nextNum > this.currentNum;
                    
                    if ((choice === 'higher' && isHigher) || (choice === 'lower' && !isHigher)) {
                        sounds.correct.play();
                        this.score++;
                        this.scoreEl.textContent = this.score;
                        
                        // Doğru bildikten sonra yeni sayıyı animasyonla getir
                        this.animateAndSetNumber(); 
                    } else {
                        this.endGame();
                    }
                }, 
                endGame() {
                    sounds.sound3.play();
                    this.numberEl.textContent = this.nextNum;
                    this.message.textContent = `Yanlış! Sayı ${this.nextNum} idi. Final skor: ${this.score}`;
                    this.message.className = 'message lose';
                    this.higherBtn.disabled = true;
                    this.lowerBtn.disabled = true;
                    leaderboardManager.checkAndPromptForScore('game2', this.score, this.card, this.resetBtn);
                } 
            } },
            { cardId: 'game3', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() {this.card = document.getElementById('card-game3'); this.startBtn=this.card.querySelector("#game3-start");this.resetBtn=this.card.querySelector("#game3-reset");this.area=this.card.querySelector("#game3-area");this.message=this.card.querySelector("#game3-message");this.scoreEl=this.card.querySelector("#game3-score");this.targetColorNameEl=this.card.querySelector("#game3-target-color-name");this.targetTextEl=this.card.querySelector("#game3-target-text"); this.timerEl = this.card.querySelector("#game3-timer");}, colors: { 'Kırmızı': '#d32f2f', 'Mavi': '#1976d2', 'Yeşil': '#388e3c', 'Sarı': '#fbc02d', 'Mor': '#7b1fa2', 'Turuncu': '#f57c00' }, setupInitialState() { clearInterval(this.timerInterval); this.score = 0; this.scoreEl.textContent = 0; this.timeLeft = 30; this.timerEl.textContent = this.timeLeft; this.message.textContent = ''; this.area.innerHTML = ''; this.targetColorNameEl.textContent = "?"; this.area.style.pointerEvents = 'none'; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); }, start() { show(this.resetBtn); hide(this.startBtn); this.area.style.pointerEvents = 'auto'; this.nextRound(); this.timerInterval = setInterval(() => { this.timeLeft--; this.timerEl.textContent = this.timeLeft; if (this.timeLeft <= 0) { this.endGame(false); } }, 1000); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, nextRound() { this.area.innerHTML = ''; const n = Object.keys(this.colors); const a = [...n].sort(() => 0.5 - Math.random()); const g = a.slice(0, 4); this.targetColor = g[Math.floor(Math.random() * 4)]; this.targetColorNameEl.textContent = this.targetColor; this.targetTextEl.style.color = this.colors[a[4]]; g.sort(() => 0.5 - Math.random()).forEach(c => { const b = document.createElement('div'); b.className = 'color-box'; b.style.backgroundColor = this.colors[c]; b.dataset.color = c; b.onclick = (e) => this.check(e); this.area.appendChild(b); }); }, check(e) { sounds.sound4.play(); if (e.target.dataset.color === this.targetColor) { this.score++; this.scoreEl.textContent = this.score; this.nextRound(); } else { this.endGame(true); } }, endGame(isWrongClick) { clearInterval(this.timerInterval); this.area.style.pointerEvents = 'none'; if (isWrongClick) { this.message.textContent = `Yanlış! Final Skor: ${this.score}`; this.message.className = 'message lose'; } else { this.message.textContent = `Süre bitti! Final Skor: ${this.score}`; this.message.className = 'message win'; } leaderboardManager.checkAndPromptForScore('game3', this.score, this.card, this.resetBtn); } } },

            { cardId: 'game4', logic: { init() { this.clickHandler = this.clickHandler.bind(this); this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() { this.card = document.getElementById('card-game4'); this.startBtn = this.card.querySelector("#game4-start"); this.resetBtn = this.card.querySelector("#game4-reset"); this.message = this.card.querySelector("#game4-message"); this.timerEl = this.card.querySelector("#game4-timer"); this.clicksEl = this.card.querySelector("#game4-clicks"); this.clickArea = this.card.querySelector("#game4-click-area"); }, setupInitialState() { clearInterval(this.interval); this.timer = 10; this.clicks = 0; this.gameOn = false; this.timerEl.textContent = "10.00"; this.clicksEl.textContent = 0; this.clickArea.textContent = 'Başlamak için tıkla'; this.clickArea.style.backgroundColor = 'var(--lose-color)'; this.clickArea.style.pointerEvents = 'none'; this.message.textContent = ''; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); }, start() { hide(this.startBtn); show(this.resetBtn); this.clickArea.style.pointerEvents = 'auto'; this.clickArea.addEventListener('click', this.clickHandler); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); this.clickArea.removeEventListener('click', this.clickHandler); }, clickHandler() { if (!this.gameOn && this.timer === 10) { this.gameOn = true; this.clickArea.textContent = 'TIKLA!'; this.clickArea.style.backgroundColor = 'var(--win-color)'; this.interval = setInterval(() => { this.timer -= 0.01; if (this.timer <= 0) { this.endGame(); } else { this.timerEl.textContent = this.timer.toFixed(2); } }, 10); } if (this.gameOn) { this.clicks++; this.clicksEl.textContent = this.clicks; } }, endGame() { clearInterval(this.interval); this.gameOn = false; this.clickArea.style.pointerEvents = 'none'; this.timerEl.textContent = "0.00"; const cps = (this.clicks / 10); this.message.textContent = `Bitti! ${cps.toFixed(2)} CPS (${this.clicks} tık)`; this.message.className = 'message win'; this.clickArea.textContent = 'Bitti!'; this.clickArea.style.backgroundColor = 'var(--primary-color)'; sounds.sound2.play(); leaderboardManager.checkAndPromptForScore('game4', cps, this.card, this.resetBtn); } } },
            
            { cardId: 'game5', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); this.target.addEventListener('click', () => this.hitTarget()); }, bindElements() {this.card = document.getElementById('card-game5'); this.startBtn=this.card.querySelector("#game5-start");this.resetBtn=this.card.querySelector("#game5-reset");this.message=this.card.querySelector("#game5-message");this.timerEl=this.card.querySelector("#game5-timer");this.scoreEl=this.card.querySelector("#game5-score");this.playArea=this.card.querySelector("#game5-play-area");this.target=this.card.querySelector("#game5-target");}, setupInitialState() { clearInterval(this.interval); this.timer = 30; this.score = 0; this.timerEl.textContent = 30; this.scoreEl.textContent = 0; hide(this.target); this.message.textContent = ''; leaderboardManager.clearLeaderboard(this.card, this.resetBtn);}, start() { show(this.resetBtn); hide(this.startBtn); this.interval = setInterval(() => { this.timer--; this.timerEl.textContent = this.timer; if(this.timer <= 0) this.endGame(); }, 1000); this.spawnTarget(); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, spawnTarget() { show(this.target); const rect = this.playArea.getBoundingClientRect(); this.target.style.top = `${Math.random() * (rect.height - 30)}px`; this.target.style.left = `${Math.random() * (rect.width - 30)}px`; }, hitTarget() { if(this.timer > 0) { sounds.win.play(); this.score++; this.scoreEl.textContent = this.score; this.spawnTarget(); } }, endGame() { clearInterval(this.interval); hide(this.target); this.message.textContent = `Süre bitti! Final skor: ${this.score}`; this.message.className = 'message win'; sounds.sound2.play(); leaderboardManager.checkAndPromptForScore('game5', this.score, this.card, this.resetBtn); } } },
            
            { cardId: 'game6', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() {this.card = document.getElementById('card-game6'); this.startBtn=this.card.querySelector("#game6-start");this.resetBtn=this.card.querySelector("#game6-reset");this.message=this.card.querySelector("#game6-message");this.wordDisplay=this.card.querySelector("#game6-word-display");this.alphabetEl=this.card.querySelector("#game6-alphabet");this.guessesLeftEl=this.card.querySelector("#game6-guesses-left");}, wordList: ["JENERATÖR", "FİLOGENETİK", "AKSİYON", "PROGRAMLAMA", "KLAVYE", "MONİTÖR", "ALGORİTMA", "SPEKTRUM", "KUVARS", "YAYINCI", "KATMAN", "ABONE"], setupInitialState() {this.message.textContent = ''; this.guessedLetters = []; this.guessesLeft = 6; this.guessesLeftEl.textContent = 6; this.wordDisplay.textContent = "_".repeat(7); this.alphabetEl.innerHTML = ''; leaderboardManager.clearLeaderboard(this.card, this.resetBtn);}, start() { show(this.resetBtn); hide(this.startBtn); this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)]; this.alphabetEl.innerHTML = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ'.split('').map(l => `<button class="letter-btn">${l}</button>`).join(''); this.alphabetEl.querySelectorAll('.letter-btn').forEach(b => { b.addEventListener('click', (e) => { sounds.sound1.play(); this.guessLetter(e.target); }); }); this.updateWordDisplay(); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, updateWordDisplay() { this.wordDisplay.textContent = this.word.split('').map(l => this.guessedLetters.includes(l) ? l : '_').join(''); if (!this.wordDisplay.textContent.includes('_')) this.endGame(true); }, guessLetter(btn) { btn.disabled = true; const letter = btn.textContent; if (this.word.includes(letter)) { this.guessedLetters.push(letter); } else { this.guessesLeft--; this.guessesLeftEl.textContent = this.guessesLeft; if (this.guessesLeft === 0) this.endGame(false); } this.updateWordDisplay(); }, endGame(win) { this.alphabetEl.querySelectorAll('.letter-btn').forEach(btn => btn.disabled = true); if (win) { this.message.textContent = "Tebrikler, kazandın!"; this.message.className = 'message win'; sounds.sound2.play(); leaderboardManager.promptForScore('game6', this.guessesLeft, this.card, 'desc', this.resetBtn); } else { this.message.textContent = `Kaybettin! Kelime: ${this.word}`; this.message.className = 'message lose'; sounds.sound3.play(); } } } },
            
            { cardId: 'game7', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() {this.card = document.getElementById('card-game7'); this.startBtn=this.card.querySelector("#game7-start");this.resetBtn=this.card.querySelector("#game7-reset");this.message=this.card.querySelector("#game7-message");this.levelEl=this.card.querySelector("#game7-level");this.displayEl=this.card.querySelector("#game7-display");this.keypadEl=this.card.querySelector("#game7-keypad");}, setupInitialState() { this.level = 1; this.sequence = ''; this.playerInput = ''; this.message.textContent = ''; this.levelEl.textContent = 1; this.displayEl.textContent = ""; this.buildKeypad(); this.keypadEl.querySelectorAll('button').forEach(b => b.disabled = true); leaderboardManager.clearLeaderboard(this.card, this.resetBtn);}, start() { show(this.resetBtn); hide(this.startBtn); setTimeout(() => this.nextLevel(), 500); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, buildKeypad() { this.keypadEl.innerHTML = ''; for (let i = 1; i <= 9; i++) { const btn = document.createElement('button'); btn.textContent = i; btn.onclick = () => this.onKeyPress(i); this.keypadEl.appendChild(btn); } }, onKeyPress(num) { if (!this.playerTurn) return; this.playerInput += num; this.displayEl.textContent = this.playerInput; if (this.playerInput === this.sequence) { this.playerTurn = false; this.message.textContent = "Doğru!"; this.message.className = 'message win'; sounds.sound2.play(); this.level++; setTimeout(() => this.nextLevel(), 1000); } else if (this.playerInput.length >= this.sequence.length) { this.endGame(); } }, nextLevel() { this.levelEl.textContent = this.level; this.message.textContent = "Sayıyı ezberle..."; this.message.className = 'message'; this.playerInput = ''; this.sequence = ''; for (let i = 0; i < this.level; i++) { this.sequence += Math.floor(Math.random() * 9) + 1; } this.displayEl.textContent = this.sequence; this.playerTurn = false; this.keypadEl.querySelectorAll('button').forEach(b => b.disabled = true); setTimeout(() => { this.displayEl.textContent = '_'.repeat(this.sequence.length); this.message.textContent = "Şimdi sen yaz!"; this.playerTurn = true; this.keypadEl.querySelectorAll('button').forEach(b => b.disabled = false); }, 1000 + this.level * 400); }, endGame() { this.playerTurn = false; this.message.textContent = `Yanlış! Doğrusu: ${this.sequence}. Seviye ${this.level-1} tamamlandı.`; this.message.className = 'message lose'; sounds.sound3.play(); leaderboardManager.checkAndPromptForScore('game7', this.level-1, this.card, this.resetBtn); } } },
            
            { cardId: 'game8', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() {this.card = document.getElementById('card-game8'); this.startBtn=this.card.querySelector("#game8-start");this.resetBtn=this.card.querySelector("#game8-reset");this.message=this.card.querySelector("#game8-message");this.levelEl=this.card.querySelector("#game8-level");this.scoreEl=this.card.querySelector("#game8-score");this.board=this.card.querySelector("#game8-board");}, setupInitialState() { this.level = 1; this.score = 0; this.levelEl.textContent = 1; this.scoreEl.textContent = 0; this.message.textContent = ''; this.board.innerHTML = ''; this.board.style.pointerEvents = 'none'; leaderboardManager.clearLeaderboard(this.card, this.resetBtn);}, start() { show(this.resetBtn); hide(this.startBtn); this.board.style.pointerEvents = 'auto'; this.nextLevel(); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, nextLevel() { this.levelEl.textContent = this.level; this.board.innerHTML = ''; const gridSize = Math.min(Math.floor(this.level / 1.5) + 2, 8); this.board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; const [r, g, b] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]; const baseColor = `rgb(${r}, ${g}, ${b})`; const diff = Math.max(8, 40 - this.level * 2); const diffColor = `rgb(${r-diff < 0 ? r+diff:r-diff}, ${g-diff < 0 ? g+diff:g-diff}, ${b-diff < 0 ? b+diff:b-diff})`; this.diffIndex = Math.floor(Math.random() * gridSize * gridSize); for (let i = 0; i < gridSize * gridSize; i++) { const box = document.createElement('div'); box.className = 'diff-box'; box.style.backgroundColor = i === this.diffIndex ? diffColor : baseColor; box.onclick = () => this.check(i === this.diffIndex); this.board.appendChild(box); } }, check(isCorrect) { if (isCorrect) { sounds.sound2.currentTime = 0; sounds.sound2.play(); this.level++; this.score += (this.level * 10); this.scoreEl.textContent = this.score; this.nextLevel(); } else { this.endGame(); } }, endGame() { this.board.style.pointerEvents = 'none'; this.board.children[this.diffIndex].classList.add('correct-answer-highlight'); this.message.textContent = `Yanlış! Seviye ${this.level}'de bitti. Skor: ${this.score}`; this.message.className = 'message lose'; sounds.sound3.currentTime = 0; sounds.sound3.play(); leaderboardManager.checkAndPromptForScore('game8', this.score, this.card, this.resetBtn); } } },
            
            { cardId: 'game9', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() {this.card=document.getElementById('card-game9');this.startBtn=this.card.querySelector('#game9-start');this.resetBtn=this.card.querySelector('#game9-reset');this.board=this.card.querySelector('#game9-board');this.nextNumEl=this.card.querySelector('#game9-next-num');this.timerEl=this.card.querySelector('#game9-timer');this.message=this.card.querySelector('#game9-message');}, setupInitialState() { clearInterval(this.interval); this.interval = null; this.nextNum = 1; this.timer = 0; this.nextNumEl.textContent = 1; this.timerEl.textContent = "0.0"; this.board.innerHTML = ''; this.message.textContent = ''; this.board.style.pointerEvents = 'none'; leaderboardManager.clearLeaderboard(this.card, this.resetBtn);}, start() { show(this.resetBtn); hide(this.startBtn); this.board.style.pointerEvents = 'auto'; this.generateNumbers(); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, generateNumbers() { const nums = Array.from({length: 12}, (_, i) => i + 1).sort(() => 0.5 - Math.random()); const positions = []; const boardSize = 320; const numSize = 40; const checkOverlap = (pos1, pos2) => { const dx = pos1.left - pos2.left; const dy = pos1.top - pos2.top; const distance = Math.sqrt(dx * dx + dy * dy); return distance < numSize; }; nums.forEach(num => { let newPos; let isOverlapping; do { isOverlapping = false; newPos = { top: Math.random() * (boardSize - numSize), left: Math.random() * (boardSize - numSize) }; for(const pos of positions) { if(checkOverlap(newPos, pos)) { isOverlapping = true; break; } } } while (isOverlapping); positions.push(newPos); const numEl = document.createElement('div'); numEl.className = 'seq-num'; numEl.textContent = num; numEl.style.top = `${newPos.top}px`; numEl.style.left = `${newPos.left}px`; numEl.onclick = () => this.clickNum(num, numEl); this.board.appendChild(numEl); }); }, clickNum(num, el) { if (num === this.nextNum) { sounds.win.currentTime = 0; sounds.win.play(); if (this.nextNum === 1) { this.startTime = Date.now(); this.interval = setInterval(() => { this.timer = (Date.now() - this.startTime) / 1000; this.timerEl.textContent = this.timer.toFixed(1); }, 100); } el.style.display = 'none'; this.nextNum++; this.nextNumEl.textContent = this.nextNum > 12 ? 'Bitti!' : this.nextNum; if (this.nextNum > 12) { this.endGame(); } } }, endGame() { clearInterval(this.interval); this.message.textContent = `Tebrikler! Süren: ${this.timer.toFixed(2)} saniye.`; this.message.className = 'message win'; sounds.sound2.currentTime = 0; sounds.sound2.play(); leaderboardManager.checkAndPromptForScore('game9', this.timer, this.card, this.resetBtn); } } },
            
            { cardId: 'game10', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); this.choiceBtns.forEach(btn => btn.addEventListener('click', e => this.play(e.currentTarget.dataset.choice))); }, bindElements() {this.card = document.getElementById('card-game10'); this.startBtn=this.card.querySelector("#game10-start");this.resetBtn=this.card.querySelector("#game10-reset");this.message=this.card.querySelector("#game10-message");this.playerScoreEl=this.card.querySelector("#game10-player-score");this.cpuScoreEl=this.card.querySelector("#game10-cpu-score");this.playerChoiceEl=this.card.querySelector("#game10-player-choice");this.cpuChoiceEl=this.card.querySelector("#game10-cpu-choice");this.cpuChoiceBack=this.card.querySelector('#game10-cpu-choice .choice-back');this.resultsEl=this.card.querySelector("#game10-results");this.choiceBtns=this.card.querySelectorAll('#game10-choices .choice-btn');}, choices: { 'taş': '✊', 'kağıt': '✋', 'makas': '✌️' }, setupInitialState() {this.pScore = 0; this.cScore = 0; this.playerScoreEl.textContent = 0; this.cpuScoreEl.textContent = 0; this.resultsEl.textContent = ''; this.message.textContent = ''; this.playerChoiceEl.textContent = ''; this.cpuChoiceEl.classList.remove('flipped'); this.choiceBtns.forEach(b => b.disabled = true); leaderboardManager.clearLeaderboard(this.card, this.resetBtn);}, start() { show(this.resetBtn); hide(this.startBtn); this.choiceBtns.forEach(b => b.disabled = false); this.resultsEl.textContent = 'Seçimini yap!';}, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, play(playerChoice) { this.choiceBtns.forEach(b => b.disabled = true); this.playerChoiceEl.textContent = this.choices[playerChoice]; this.cpuChoiceEl.classList.remove('flipped'); const cpuChoiceKey = Object.keys(this.choices)[Math.floor(Math.random() * 3)]; this.cpuChoiceBack.textContent = this.choices[cpuChoiceKey]; setTimeout(() => { this.cpuChoiceEl.classList.add('flipped'); setTimeout(() => this.calculateResult(playerChoice, cpuChoiceKey), 600); }, 300); }, calculateResult(player, cpu) { let resultText; if (player === cpu) { resultText = "Berabere!"; } else if ((player === 'taş' && cpu === 'makas') || (player === 'kağıt' && cpu === 'taş') || (player === 'makas' && cpu === 'kağıt')) { this.pScore++; resultText = "Bu turu kazandın!"; sounds.sound2.currentTime = 0; sounds.sound2.play(); } else { this.cScore++; resultText = "Bu turu kaybettin!"; sounds.sound3.currentTime = 0; sounds.sound3.play(); } this.playerScoreEl.textContent = this.pScore; this.cpuScoreEl.textContent = this.cScore; this.resultsEl.textContent = resultText; if(this.pScore === 5 || this.cScore === 5) this.endGame(); else this.choiceBtns.forEach(b => b.disabled = false); }, endGame() { const playerWins = this.pScore > this.cScore; this.message.textContent = playerWins ? "Tebrikler, oyunu kazandın!" : "Kaybettin, bilgisayar kazandı!"; this.message.className = playerWins ? 'message win' : 'message lose'; this.choiceBtns.forEach(b => b.disabled = true); } } },
            
            { cardId: 'game11', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() { this.card = document.getElementById('card-game11'); this.startBtn = this.card.querySelector("#game11-start"); this.resetBtn = this.card.querySelector("#game11-reset"); this.message = this.card.querySelector("#game11-message"); this.levelEl = this.card.querySelector("#game11-level"); this.board = this.card.querySelector("#game11-board"); }, setupInitialState() { this.level = 1; this.levelEl.textContent = 1; this.sequence = []; this.playerSequence = []; this.colors = ['red', 'green', 'blue', 'yellow', 'orange', 'cyan']; this.playerTurn = false; this.message.textContent = ''; this.board.innerHTML = ''; this.colors.forEach(color => { const btn = document.createElement('div'); btn.id = `simon-${color}`; btn.className = 'simon-btn'; this.board.appendChild(btn); }); this.board.style.pointerEvents = 'none'; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); }, start() { hide(this.startBtn); show(this.resetBtn); setTimeout(() => this.nextLevel(), 500); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, nextLevel() { this.levelEl.textContent = this.level; this.message.textContent = "Sırayı ezberle..."; this.playerSequence = []; this.playerTurn = false; this.board.style.pointerEvents = 'none'; this.sequence.push(this.colors[Math.floor(Math.random() * this.colors.length)]); this.playSequence(); }, playSequence() { let i = 0; const interval = setInterval(() => { this.lightUp(this.sequence[i]); i++; if (i >= this.sequence.length) { clearInterval(interval); setTimeout(() => { this.playerTurn = true; this.board.style.pointerEvents = 'auto'; this.message.textContent = "Şimdi sıra sende!"; this.addPlayerControls(); }, 500); } }, 600); }, lightUp(color) { const btn = this.board.querySelector(`#simon-${color}`); btn.classList.add('lit'); if (!this.playerTurn) { sounds.sound4.currentTime = 0; sounds.sound4.play(); } setTimeout(() => btn.classList.remove('lit'), 300); }, addPlayerControls() { this.board.querySelectorAll('.simon-btn').forEach(btn => { btn.onclick = (e) => this.playerClick(e.target.id.split('-')[1]); }); }, playerClick(color) { if (!this.playerTurn) return; this.lightUp(color); this.playerSequence.push(color); const lastIndex = this.playerSequence.length - 1; if (this.playerSequence[lastIndex] !== this.sequence[lastIndex]) { this.endGame(); return; } if (this.playerSequence.length === this.sequence.length) { sounds.sound2.currentTime = 0; sounds.sound2.play(); this.level++; this.message.textContent = "Doğru!"; this.message.className = "message win"; setTimeout(() => this.nextLevel(), 1000); } }, endGame() { this.playerTurn = false; this.board.style.pointerEvents = 'none'; this.message.textContent = `Yanlış! Seviye ${this.level}'de bitti.`; this.message.className = 'message lose'; sounds.sound3.currentTime = 0; sounds.sound3.play(); leaderboardManager.checkAndPromptForScore('game11', this.moves, this.card, this.resetBtn); } } },
            
            { cardId: 'game12', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); }, bindElements() { this.card = document.getElementById('card-game12'); this.startBtn = this.card.querySelector("#game12-start"); this.resetBtn = this.card.querySelector("#game12-reset"); this.message = this.card.querySelector("#game12-message"); this.movesEl = this.card.querySelector("#game12-moves"); this.foundEl = this.card.querySelector("#game12-found"); this.board = this.card.querySelector("#game12-board"); }, setupInitialState() { this.moves = 0; this.foundPairs = 0; this.movesEl.textContent = 0; this.foundEl.textContent = '0 / 8'; this.firstCard = null; this.secondCard = null; this.lockBoard = false; this.message.textContent = ''; this.board.innerHTML = ''; this.board.style.pointerEvents = 'none'; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); }, start() { hide(this.startBtn); show(this.resetBtn); this.foundEl.textContent = '0 / 8'; this.board.style.pointerEvents = 'auto'; this.createBoard(); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, createBoard() { const icons = ['🍕', '🚀', '⭐', '😂', '😎', '👽', '👑', '🔥']; const cardIcons = [...icons, ...icons].sort(() => 0.5 - Math.random()); cardIcons.forEach(icon => { const cardElement = document.createElement('div'); cardElement.classList.add('memory-card'); cardElement.dataset.icon = icon; cardElement.innerHTML = `<div class="card-face card-front">${icon}</div><div class="card-face card-back"></div>`; cardElement.addEventListener('click', () => this.flipCard(cardElement)); this.board.appendChild(cardElement); }); }, flipCard(card) { if (this.lockBoard || card.classList.contains('flipped') || card === this.firstCard) return; card.classList.add('flipped'); if (!this.firstCard) { this.firstCard = card; return; } this.secondCard = card; this.moves++; this.movesEl.textContent = this.moves; this.checkForMatch(); }, checkForMatch() { const isMatch = this.firstCard.dataset.icon === this.secondCard.dataset.icon; isMatch ? this.disableCards() : this.unflipCards(); }, disableCards() { setTimeout(() => { sounds.sound2.currentTime = 0; sounds.sound2.play(); }, 250); this.firstCard.classList.add('matched'); this.secondCard.classList.add('matched'); this.foundPairs++; this.foundEl.textContent = `${this.foundPairs} / 8`; this.resetTurn(); if (this.foundPairs === 8) { this.endGame(); } }, unflipCards() { setTimeout(() => { sounds.sound3.currentTime = 0; sounds.sound3.play(); }, 250); this.lockBoard = true; setTimeout(() => { this.firstCard.classList.remove('flipped'); this.secondCard.classList.remove('flipped'); this.resetTurn(); }, 1000); }, resetTurn() { [this.firstCard, this.secondCard] = [null, null]; this.lockBoard = false; }, endGame() { this.message.textContent = `Tebrikler! ${this.moves} hamlede bitirdin.`; this.message.className = 'message win'; leaderboardManager.checkAndPromptForScore('game12', this.moves, this.card, this.resetBtn); } } },
            
            
            { cardId: 'game13', logic: {
    init() {
        this.bindElements();
        this.setupInitialState();
        this.startBtn.addEventListener('click', () => this.start());
        this.resetBtn.addEventListener('click', () => this.reset());
    },
    bindElements() {
        this.card = document.getElementById('card-game13');
        this.startBtn = this.card.querySelector("#game13-start");
        this.resetBtn = this.card.querySelector("#game13-reset");
        this.message = this.card.querySelector("#game13-message");
        this.levelEl = this.card.querySelector("#game13-level");
        this.minesLeftEl = this.card.querySelector("#game13-mines-left");
        this.boardEl = this.card.querySelector("#game13-board");
    },
    setupInitialState() {
        this.level = 1;
        this.firstClick = true;
        this.gameOver = false;
        this.board = [];
        this.rows = 0;
        this.cols = 0;
        this.mines = 0;
        this.flags = 0;
        this.revealedCount = 0;
        this.levelEl.textContent = 1;
        this.message.textContent = '';
        this.boardEl.innerHTML = '';
        this.boardEl.style.pointerEvents = 'none';
        leaderboardManager.clearLeaderboard(this.card, this.resetBtn);
    },
    start() {
        hide(this.startBtn);
        show(this.resetBtn);
        this.level = 1;
        this.nextLevel();
    },
    reset() {
        hide(this.resetBtn);
        show(this.startBtn);
        this.setupInitialState();
    },
    nextLevel() {
        this.firstClick = true;
        this.gameOver = false;
        this.message.textContent = '';
        this.levelEl.textContent = this.level;

        if (this.level >= 4) {
            this.rows = 8;
            this.cols = 8;
            this.mines = 6 + (this.level - 3) * 2;
        } else {
            this.rows = 6;
            this.cols = 6;
            this.mines = 4 + this.level;
        }

        this.flags = 0;
        this.revealedCount = 0;
        this.minesLeftEl.textContent = this.mines;
        this.boardEl.style.pointerEvents = 'auto';

        // Kritik: Geçici boş board oluşturulmalı (ilk tıklama güvenliği için)
        this.board = Array(this.rows).fill(null).map(() => Array(this.cols).fill(null).map(() => ({ 
            isMine: false, isRevealed: false, isFlagged: false, neighborMines: 0 
        })));

        this.createDisplayBoard();
    },
    createBoard(firstClickRow, firstClickCol) {
        // Sadece mayınları yerleştir
        let minesPlaced = 0;
        while (minesPlaced < this.mines) {
            const r = Math.floor(Math.random() * this.rows);
            const c = Math.floor(Math.random() * this.cols);
            if (!this.board[r][c].isMine && !(r === firstClickRow && c === firstClickCol)) {
                this.board[r][c].isMine = true;
                minesPlaced++;
            }
        }

        // Komşu mayınları say
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (!this.board[r][c].isMine) {
                    let count = 0;
                    for (let dr = -1; dr <= 1; dr++) {
                        for (let dc = -1; dc <= 1; dc++) {
                            const nr = r + dr, nc = c + dc;
                            if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols && this.board[nr][nc].isMine) {
                                count++;
                            }
                        }
                    }
                    this.board[r][c].neighborMines = count;
                }
            }
        }
    },
    createDisplayBoard() {
        this.boardEl.innerHTML = '';
        this.boardEl.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const cell = document.createElement('div');
                cell.className = 'mine-cell';
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.addEventListener('click', () => this.handleCellClick(r, c));
                cell.addEventListener('contextmenu', e => {
                    e.preventDefault();
                    this.handleRightClick(r, c);
                });
                this.boardEl.appendChild(cell);
            }
        }
    },
    handleCellClick(r, c) {
        if (this.gameOver || this.board[r][c].isRevealed || this.board[r][c].isFlagged) return;

        sounds.correct.currentTime = 0;
        sounds.correct.play();

        if (this.firstClick) {
            this.createBoard(r, c);
            this.firstClick = false;
        }

        if (this.board[r][c].isMine) {
            this.endGame(false);
            return;
        }

        this.revealCell(r, c);
        if (this.rows * this.cols - this.revealedCount === this.mines) {
            this.endGame(true);
        }
    },
    handleRightClick(r, c) {
        if (this.gameOver || this.board[r][c].isRevealed) return;
        const cellData = this.board[r][c];
        const cellEl = this.boardEl.children[r * this.cols + c];
        cellData.isFlagged = !cellData.isFlagged;
        this.flags += cellData.isFlagged ? 1 : -1;
        cellEl.textContent = cellData.isFlagged ? '🚩' : '';
        this.minesLeftEl.textContent = this.mines - this.flags;
    },
    revealCell(r, c) {
        if (r < 0 || r >= this.rows || c < 0 || c >= this.cols) return;
        const cellData = this.board[r][c];
        if (cellData.isRevealed || cellData.isFlagged) return;

        cellData.isRevealed = true;
        this.revealedCount++;

        const cellEl = this.boardEl.children[r * this.cols + c];
        cellEl.classList.add('revealed');

        if (cellData.neighborMines > 0) {
            cellEl.innerHTML = `<span class="num-${cellData.neighborMines}">${cellData.neighborMines}</span>`;
        } else {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    this.revealCell(r + dr, c + dc);
                }
            }
        }
    },
    endGame(isWin) {
        this.gameOver = true;
        this.boardEl.style.pointerEvents = 'none';

        if (isWin) {
            this.message.textContent = `Tebrikler! Seviye ${this.level} tamamlandı!`;
            this.message.className = 'message win';
            sounds.sound2.currentTime = 0;
            sounds.sound2.play();
            this.level++;
            setTimeout(() => this.nextLevel(), 2000);
        } else {
            this.message.textContent = "BOOM! Mayına bastın.";
            this.message.className = 'message lose';
            sounds.sound3.currentTime = 0;
            sounds.sound3.play();
            for (let r = 0; r < this.rows; r++) {
                for (let c = 0; c < this.cols; c++) {
                    if (this.board[r][c].isMine) {
                        this.boardEl.children[r * this.cols + c].innerHTML = '💣';
                    }
                }
            }
            leaderboardManager.checkAndPromptForScore('game13', this.level, this.card, this.resetBtn);
        }
    }
} },

            
            
            { cardId: 'game14', logic: { init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); this.checkBtn.addEventListener('click', () => this.checkPattern()); }, bindElements() { this.card = document.getElementById('card-game14'); this.startBtn = this.card.querySelector("#game14-start"); this.resetBtn = this.card.querySelector("#game14-reset"); this.message = this.card.querySelector("#game14-message"); this.levelEl = this.card.querySelector("#game14-level"); this.boardEl = this.card.querySelector("#game14-board"); this.checkBtn = this.card.querySelector("#game14-check-btn"); }, setupInitialState() { this.level = 1; this.gridSize = 25; this.pattern = []; this.lockBoard = false; this.levelEl.textContent = 1; this.message.textContent = ''; this.boardEl.innerHTML = ''; this.boardEl.style.pointerEvents = 'none'; hide(this.checkBtn); leaderboardManager.clearLeaderboard(this.card, this.resetBtn); }, start() { hide(this.startBtn); show(this.resetBtn); this.createBoard(); this.nextLevel(); }, reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); }, createBoard() { this.boardEl.innerHTML = ''; for(let i=0; i < this.gridSize; i++) { const cell = document.createElement('div'); cell.className = 'pattern-cell'; cell.addEventListener('click', () => this.handleCellClick(cell)); this.boardEl.appendChild(cell); } }, nextLevel() { this.levelEl.textContent = this.level; this.message.textContent = 'Deseni ezberle...'; this.message.className = 'message'; hide(this.checkBtn); this.boardEl.querySelectorAll('.selected, .correct, .incorrect').forEach(c => c.className = 'pattern-cell'); this.generatePattern(); this.showPattern(); }, generatePattern() { this.pattern = new Set(); const squaresToRemember = 2 + this.level; while (this.pattern.size < squaresToRemember) { this.pattern.add(Math.floor(Math.random() * this.gridSize)); } }, showPattern() { this.lockBoard = true; this.boardEl.style.pointerEvents = 'none'; this.pattern.forEach(index => this.boardEl.children[index].classList.add('active')); setTimeout(() => { this.pattern.forEach(index => this.boardEl.children[index].classList.remove('active')); this.lockBoard = false; this.boardEl.style.pointerEvents = 'auto'; this.message.textContent = 'Şimdi aynısını işaretle ve kontrol et.'; show(this.checkBtn); }, 1500 + this.level * 200); }, handleCellClick(cell) { if (!this.lockBoard) cell.classList.toggle('selected'); }, checkPattern() { if (this.lockBoard) return; this.lockBoard = true; hide(this.checkBtn); const selectedIndices = new Set(); this.boardEl.querySelectorAll('.selected').forEach((cell, i) => { selectedIndices.add(Array.from(this.boardEl.children).indexOf(cell)); }); const isMatch = selectedIndices.size === this.pattern.size && [...selectedIndices].every(index => this.pattern.has(index)); if (isMatch) { sounds.sound2.currentTime = 0; sounds.sound2.play(); this.message.textContent = 'Tebrikler, doğru!'; this.message.className = 'message win'; selectedIndices.forEach(i => this.boardEl.children[i].classList.add('correct')); this.level++; setTimeout(() => this.nextLevel(), 1500); } else { this.endGame(selectedIndices); } }, endGame(selectedIndices) { sounds.sound3.currentTime = 0; sounds.sound3.play(); this.message.textContent = `Yanlış! Seviye ${this.level}'de bitti.`; this.message.className = 'message lose'; this.boardEl.querySelectorAll('.pattern-cell').forEach((cell, index) => { if (this.pattern.has(index)) cell.classList.add('active'); if (selectedIndices.has(index) && !this.pattern.has(index)) cell.classList.add('incorrect'); }); leaderboardManager.promptForScore('game14', this.level - 1, this.card, 'desc', this.resetBtn); } } },
            
            // YENİ OYUN 15: KAYDIRMALI BULMACA (GÜNCELLENDİ)
            { cardId: 'game15', logic: {
                init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); },
                bindElements() { this.card = document.getElementById('card-game15'); this.startBtn = this.card.querySelector("#game15-start"); this.resetBtn = this.card.querySelector("#game15-reset"); this.message = this.card.querySelector("#game15-message"); this.movesEl = this.card.querySelector("#game15-moves"); this.boardEl = this.card.querySelector("#game15-board"); },
                setupInitialState() { this.moves = 0; this.movesEl.textContent = 0; this.tiles = []; this.message.textContent = ''; this.boardEl.innerHTML = ''; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); },
                start() { hide(this.startBtn); show(this.resetBtn); sounds.correct.volume = 0.05; this.createBoard(); },
                reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); },
                createBoard() {
                    this.moves = 0; this.movesEl.textContent = 0; this.message.textContent = '';
                    let numbers = Array.from({ length: 8 }, (_, i) => i + 1); numbers.push(null);
                    
                    do { numbers.sort(() => 0.5 - Math.random()); } while (!this.isSolvable(numbers));
                    
                    this.tiles = numbers;
                    this.renderBoard();
                },
                renderBoard() {
                    this.boardEl.innerHTML = '';
                    this.tiles.forEach((tileValue, i) => {
                        const tile = document.createElement('div');
                        tile.className = 'puzzle-tile';
                        if (tileValue === null) {
                            tile.classList.add('empty');
                        } else {
                            tile.textContent = tileValue;
                        }
                        tile.addEventListener('click', () => this.moveTile(i));
                        this.boardEl.appendChild(tile);
                    });
                    if (this.isSolved()) this.endGame();
                },
                moveTile(clickedIndex) {
                    const emptyIndex = this.tiles.indexOf(null);
                    const [r1, c1] = [Math.floor(clickedIndex / 3), clickedIndex % 3];
                    const [r2, c2] = [Math.floor(emptyIndex / 3), emptyIndex % 3];
                    const isAdjacent = (Math.abs(r1 - r2) + Math.abs(c1 - c2)) === 1;

                    if (isAdjacent) {
                        sounds.correct.currentTime = 0;
                        sounds.correct.play();
                        [this.tiles[clickedIndex], this.tiles[emptyIndex]] = [this.tiles[emptyIndex], this.tiles[clickedIndex]];
                        this.moves++;
                        this.movesEl.textContent = this.moves;
                        this.renderBoard();
                    }
                },
                isSolved() {
                    for (let i = 0; i < 8; i++) { if (this.tiles[i] !== i + 1) return false; }
                    return true;
                },
                isSolvable(puzzle) {
                    let inversions = 0;
                    const p = puzzle.filter(x => x !== null);
                    for (let i = 0; i < p.length; i++) { for (let j = i + 1; j < p.length; j++) { if (p[i] > p[j]) inversions++; } }
                    return inversions % 2 === 0;
                },
                endGame() {
                    this.message.textContent = `Tebrikler! ${this.moves} hamlede bitirdin.`;
                    this.message.className = 'message win';
                    sounds.sound2.currentTime = 0;
                    sounds.sound2.play();
                    this.boardEl.querySelectorAll('.puzzle-tile').forEach(t => { if(!t.classList.contains('empty')) t.classList.add('correct'); t.style.pointerEvents = 'none'; });
                    leaderboardManager.checkAndPromptForScore('game15', this.moves, this.card, this.resetBtn);
                }
            } },

            // YENİ OYUN 16: YAZMA HIZI TESTİ (GÜVENİLİR VE TAM ÇALIŞAN VERSİYON)
            { cardId: 'game16', logic: {
                init() {
                    this.handleKeyDown = this.handleKeyDown.bind(this);
                    this.handleInput = this.handleInput.bind(this);
                    this.bindElements(); 

                    this.originalSound1Volume = sounds.sound1.volume;
                    this.originalSound3Volume = sounds.sound3.volume;

                    this.setupInitialState(); 
                    this.startBtn.addEventListener('click', () => this.start()); 
                    this.resetBtn.addEventListener('click', () => this.reset());
                },
                bindElements() { this.card = document.getElementById('card-game16'); this.startBtn = this.card.querySelector("#game16-start"); this.resetBtn = this.card.querySelector("#game16-reset"); this.message = this.card.querySelector("#game16-message"); this.timerEl = this.card.querySelector("#game16-timer"); this.wpmEl = this.card.querySelector("#game16-wpm"); this.textDisplayEl = this.card.querySelector("#game16-text-display"); this.inputEl = this.card.querySelector("#game16-input"); },
                wordList: ["bir", "ve", "ama", "için", "çok", "daha", "kadar", "gibi", "sonra", "ancak", "yeni", "büyük", "küçük", "her", "zaman", "sadece", "artık", "önce", "yok", "var", "ben", "sen", "o", "biz", "siz", "onlar", "dedi", "diye", "şey", "bile", "yine", "işte", "böyle", "şöyle", "belki", "çünkü", "nasıl", "neden", "ne", "hangi", "kim", "nerede", "zaten", "aslında", "yani", "ise", "diğer", "bazı", "tüm", "üzerine", "arasında", "altında", "üstünde", "yanında", "karşısında", "içinde", "dışında", "ile", "birlikte", "hakkında", "göre", "doğru", "karşı", "başka", "tek", "ilk", "son", "ikinci", "üçüncü", "yüksek", "düşük", "iyi", "kötü", "güzel", "çirkin", "kolay", "zor", "genç", "yaşlı", "uzun", "kısa", "geniş", "dar", "ağır", "hafif", "açık", "kapalı", "dolu", "boş", "kalın", "ince", "sert", "yumuşak", "kurt", "zamanzingo", "kaos", "awp", "konteyner" ],
                setupInitialState() { clearInterval(this.timerInterval); this.timerInterval = null; this.startTime = null; this.timeLeft = 30; this.gameOn = false; this.currentWordIndex = 0; this.totalCorrectChars = 0; this.wordsToType = []; this.timerEl.textContent = 30; this.wpmEl.textContent = 0; this.inputEl.value = ''; this.inputEl.disabled = true; this.inputEl.removeEventListener('input', this.handleInput); this.inputEl.removeEventListener('keydown', this.handleKeyDown); this.message.textContent = ''; this.textDisplayEl.textContent = 'Oyun başlayınca kelimeler burada belirecek.'; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); },
                start() { hide(this.startBtn); show(this.resetBtn); sounds.sound1.volume = 0.1; sounds.sound3.volume = 0.02; this.inputEl.disabled = false; this.inputEl.focus(); this.loadNewWords(); this.inputEl.addEventListener('input', this.handleInput); this.inputEl.addEventListener('keydown', this.handleKeyDown); },
                reset() { hide(this.resetBtn); show(this.startBtn); sounds.sound1.volume = this.originalSound1Volume; sounds.sound3.volume = this.originalSound3Volume; this.setupInitialState(); },
                loadNewWords() {
                    this.textDisplayEl.innerHTML = '';
                    this.wordsToType = [...this.wordList].sort(() => 0.5 - Math.random()).slice(0, 10); // Ekrana 15 kelime yükle
                    this.wordsToType.forEach(word => {
                        const wordSpan = document.createElement('span');
                        wordSpan.className = 'word';
                        wordSpan.textContent = word;
                        this.textDisplayEl.appendChild(wordSpan);
                    });
                    this.currentWordIndex = 0;
                    this.updateActiveWord();
                },
                updateActiveWord() {
                    this.textDisplayEl.querySelectorAll('.word.active').forEach(el => el.classList.remove('active'));
                    const newActiveWord = this.textDisplayEl.children[this.currentWordIndex];
                    if (newActiveWord) {
                        newActiveWord.classList.add('active');
                    }
                },
                handleKeyDown(e) {
                    if (this.gameOn && e.code === 'Space') {
                        e.preventDefault();
                        this.checkWord();
                    }
                },
                handleInput() {
                    if (!this.gameOn && this.inputEl.value.trim().length > 0) {
                        this.startGameTimer();
                    }
                },
                startGameTimer() {
                    if (this.gameOn) return; // Zamanlayıcı zaten çalışıyorsa tekrar başlatma
                    this.gameOn = true;
                    this.startTime = new Date();
                    
                    this.timerInterval = setInterval(() => {
                        this.timeLeft--;
                        this.timerEl.textContent = this.timeLeft;
                        
                        const elapsedTimeInMinutes = (30 - this.timeLeft) / 60;
                        if (elapsedTimeInMinutes > 0) {
                            const wpm = Math.round((this.totalCorrectChars / 5) / elapsedTimeInMinutes);
                            this.wpmEl.textContent = wpm;
                        }

                        if (this.timeLeft <= 0) this.endGame();
                    }, 1000);
                },
                checkWord() {
                    const typedWord = this.inputEl.value.trim();
                    if (typedWord === '') return;

                    const wordEl = this.textDisplayEl.children[this.currentWordIndex];
                    const currentWord = this.wordsToType[this.currentWordIndex];
                    
                    if(currentWord === typedWord) {
                        sounds.sound1.currentTime = 0;
                        sounds.sound1.play();
                        this.totalCorrectChars += currentWord.length + 1;
                        wordEl.classList.add('correct-word');
                    } else {
                        sounds.sound3.currentTime = 0;
                        sounds.sound3.play();
                        wordEl.classList.add('incorrect-word');
                    }
                    
                    this.inputEl.value = '';
                    this.currentWordIndex++;
                    
                    if (this.currentWordIndex >= this.wordsToType.length) {
                        this.loadNewWords(); // Bütün kelimeler bitti, yenilerini yükle
                    } else {
                        this.updateActiveWord(); // Sadece bir sonraki kelimeyi aktif et
                    }
                },
                endGame() {
                    clearInterval(this.timerInterval);
                    this.gameOn = false;
                    this.inputEl.disabled = true;

                    sounds.sound1.volume = this.originalSound1Volume;
                    sounds.sound3.volume = this.originalSound3Volume;
                    
                    const elapsedTime = (30 - this.timeLeft) / 60;
                    const wpm = elapsedTime > 0 ? Math.round((this.totalCorrectChars / 5) / elapsedTime) : 0;
                    this.wpmEl.textContent = wpm;

                    this.message.textContent = `Süre bitti! Sonucun: ${wpm} WPM`;
                    this.message.className = 'message win';

                    sounds.sound2.currentTime = 0;
                    sounds.sound2.play();
                    
                    leaderboardManager.checkAndPromptForScore('game16', wpm, this.card, this.resetBtn);
                }
            } },


            // YENİ OYUN 17: ARİTMETİK DEHASI (GÜNCELLENDİ)
            { cardId: 'game18', logic: {
                init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); this.answerEl.addEventListener('input', () => this.checkAnswer()); },
                bindElements() { this.card = document.getElementById('card-game18'); this.startBtn = this.card.querySelector("#game18-start"); this.resetBtn = this.card.querySelector("#game18-reset"); this.message = this.card.querySelector("#game18-message"); this.timerEl = this.card.querySelector("#game18-timer"); this.scoreEl = this.card.querySelector("#game18-score"); this.questionEl = this.card.querySelector("#game18-question"); this.answerEl = this.card.querySelector("#game18-answer"); },
                setupInitialState() { clearInterval(this.timerInterval); this.score = 0; this.timeLeft = 30; this.correctAnswer = 0; this.scoreEl.textContent = 0; this.timerEl.textContent = 30; this.questionEl.textContent = '? + ?'; this.answerEl.value = ''; this.answerEl.disabled = true; this.message.textContent = ''; leaderboardManager.clearLeaderboard(this.card, this.resetBtn); },
                start() { hide(this.startBtn); show(this.resetBtn); this.answerEl.disabled = false; this.answerEl.focus(); this.nextQuestion(); this.timerInterval = setInterval(() => { this.timeLeft--; this.timerEl.textContent = this.timeLeft; if (this.timeLeft <= 0) this.endGame(); }, 1000); },
                reset() { hide(this.resetBtn); show(this.startBtn); this.setupInitialState(); },
                nextQuestion() { const ops = ['+', '-', '×']; const op = ops[Math.floor(Math.random() * ops.length)]; let n1, n2; if (op === '+') { n1 = Math.floor(Math.random()*20)+1; n2 = Math.floor(Math.random()*20)+1; this.correctAnswer = n1 + n2; } else if (op === '-') { n1 = Math.floor(Math.random()*20)+10; n2 = Math.floor(Math.random()*10)+1; this.correctAnswer = n1 - n2; } else { n1 = Math.floor(Math.random()*9)+2; n2 = Math.floor(Math.random()*9)+2; this.correctAnswer = n1 * n2; } this.questionEl.textContent = `${n1} ${op} ${n2}`; this.answerEl.value = ''; },
                checkAnswer() { if(this.answerEl.value == this.correctAnswer) { this.score++; this.scoreEl.textContent = this.score; sounds.sound1.currentTime = 0; sounds.sound1.play(); this.nextQuestion(); } },
                endGame() { clearInterval(this.timerInterval); this.answerEl.disabled = true; this.message.textContent = 'Süre Bitti! Final Skor: ' + this.score; this.message.className = 'message win'; sounds.sound2.currentTime = 0; sounds.sound2.play(); leaderboardManager.checkAndPromptForScore('game18', this.score, this.card, this.resetBtn); }
            } },

            // YENİ OYUN 18: ENGELDEN KAÇIŞ (GÜNCELLENDİ)
            { cardId: 'game19', logic: {
                init() { this.bindElements(); this.setupInitialState(); this.startBtn.addEventListener('click', () => this.start()); this.resetBtn.addEventListener('click', () => this.reset()); },
                bindElements() { this.card = document.getElementById('card-game19'); this.startBtn = this.card.querySelector("#game19-start"); this.resetBtn = this.card.querySelector("#game19-reset"); this.message = this.card.querySelector("#game19-message"); this.scoreEl = this.card.querySelector("#game19-score"); this.boardEl = this.card.querySelector("#game19-board"); this.playerEl = this.card.querySelector("#game19-player"); },
                setupInitialState() { cancelAnimationFrame(this.gameLoopId); this.score = 0; this.scoreEl.textContent = 0; this.obstacles = []; this.boardEl.innerHTML = ''; this.boardEl.appendChild(this.playerEl); this.playerEl.style.top = '50%'; this.message.textContent = ''; this.removeMouseListeners(); leaderboardManager.clearLeaderboard(this.card, this.resetBtn); },
                start() { hide(this.startBtn); show(this.resetBtn); this.addMouseListeners(); this.gameLoop(); },
                reset() { hide(this.resetBtn); show(this.startBtn); this.removeMouseListeners(); this.setupInitialState(); },
                addMouseListeners() { this.boardEl.requestPointerLock(); this.boundMouseMove = (e) => this.movePlayer(e); document.addEventListener('mousemove', this.boundMouseMove); },
                removeMouseListeners() { document.exitPointerLock(); document.removeEventListener('mousemove', this.boundMouseMove); },
                movePlayer(e) { const currentTop = this.playerEl.offsetTop; const newTop = currentTop + e.movementY; const boardHeight = this.boardEl.offsetHeight; const playerHeight = this.playerEl.offsetHeight; this.playerEl.style.top = Math.max(0, Math.min(boardHeight - playerHeight, newTop)) + 'px'; },
                gameLoop() { this.score++; this.scoreEl.textContent = this.score; if(this.score % 50 === 0) { this.spawnObstacle(); } this.moveObstacles(); if(this.checkCollision()) { this.endGame(); return; } this.gameLoopId = requestAnimationFrame(this.gameLoop.bind(this)); },
                spawnObstacle() { const obstacle = document.createElement('div'); obstacle.className = 'obstacle'; const height = Math.random() * 40 + 20; const isTop = Math.random() > 0.5; obstacle.style.height = height + '%'; obstacle.style.left = this.boardEl.offsetWidth + 'px'; if(isTop) { obstacle.style.top = '0'; } else { obstacle.style.bottom = '0'; } this.boardEl.appendChild(obstacle); this.obstacles.push(obstacle); },
                moveObstacles() { for(let i = this.obstacles.length - 1; i >= 0; i--) { let obs = this.obstacles[i]; let newLeft = obs.offsetLeft - (2 + this.score/500); obs.style.left = newLeft + 'px'; if(newLeft < -20) { obs.remove(); this.obstacles.splice(i, 1); } } },
                checkCollision() { const p = this.playerEl.getBoundingClientRect(); for(const obs of this.obstacles) { const o = obs.getBoundingClientRect(); if(p.left < o.right && p.right > o.left && p.top < o.bottom && p.bottom > o.top) return true; } return false; },
                endGame() { cancelAnimationFrame(this.gameLoopId); this.removeMouseListeners(); this.message.textContent = 'Çarptın! Final Skor: ' + this.score; this.message.className = 'message lose'; sounds.sound2.currentTime = 0; sounds.sound2.play(); leaderboardManager.checkAndPromptForScore('game19', this.score, this.card, this.resetBtn); }
            } }

        ];
        
        games.forEach(game => game.logic.init());

// script.js dosyasının en sonundaki döngüler


// TIKLAMA SESİ DÖNGÜSÜ (GÜNCELLENDİ)
document.querySelectorAll('button').forEach(button => {
    // id'si olan ana butonlar VEYA alfabe butonları
    if(button.id.includes('start') || button.id.includes('reset') || button.id.includes('check')){
        button.addEventListener('click', () => {
            // Sadece tıklanabilir durumdaysa ses çal
            if (!button.disabled) {
                sounds.click.play();
            }
        });
    }
});

// HOVER SESİ DÖNGÜSÜ (GÜNCELLENDİ)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (!button.disabled) {
            sounds.hover.play();
        }
    });
});

    }).catch(error => {
        console.error("Veritabanı başlatılamadı:", error);
    });



    // script.js dosyasının en altına bu güncellenmiş kodu ekleyin

    // script.js dosyasının en altına bu güncellenmiş kodu ekleyin

    document.querySelectorAll('.leaderboard-shortcut-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Diğer tıklama olaylarını engelle

        const gameCard = btn.closest('.game-card');
        if (!gameCard) return;

        // Oyunun ID'sini kartın ID'sinden türet
        const gameId = 'game' + gameCard.id.match(/\d+/)[0];
        
        // <<< EN ÖNEMLİ DEĞİŞİKLİK BURADA >>>
        // "Yeniden Başla" butonunu HER TIKLAMADA yeniden buluyoruz.
        const resetBtn = gameCard.querySelector('[id$="-reset"]');
        if (!resetBtn) {
            console.error("Reset butonu bulunamadı:", gameId);
            return; 
        }

        const existingOverlay = gameCard.querySelector('.leaderboard-overlay');

        if (existingOverlay) {
            // Eğer tablo zaten açıksa, kapat.
            // Kapatırken reset butonunu orijinal yerine geri koymalıyız.
            const buttonContainer = gameCard.querySelector('.button-container');
            buttonContainer.appendChild(resetBtn);
            existingOverlay.remove();
        } else {
            // Eğer tablo kapalıysa, göster.
            // Liderlik tablosu olmayan oyunlar için kontrol.
            if(leaderboardManager.leaderboardGames[gameId]) {
                leaderboardManager.displayLeaderboard(gameId, gameCard, resetBtn);
            }
        }
    });
    });





});




