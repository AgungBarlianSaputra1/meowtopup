const products = {
  ML: [
    {name:"86 Diamond", price:20000},
    {name:"172 Diamond", price:40000},
    {name:"257 Diamond", price:60000},
    {name:"344 Diamond", price:80000},
    {name:"514 Diamond", price:120000},
    {name:"706 Diamond", price:160000},
  ],
  FF: [
    {name:"70 Diamond", price:10000},
    {name:"140 Diamond", price:20000},
    {name:"355 Diamond", price:50000},
    {name:"720 Diamond", price:100000},
  ],
  PUBG: [
    {name:"60 UC", price:15000},
    {name:"325 UC", price:75000},
    {name:"660 UC", price:150000},
  ],
  GI: [
    {name:"60 Crystal", price:16000},
    {name:"330 Crystal", price:79000},
    {name:"1090 Crystal", price:249000},
  ],
  HOK: [
    {name:"80 Token", price:15000},
    {name:"240 Token", price:45000},
    {name:"800 Token", price:150000},
  ],
  VAL: [
    {name:"125 VP", price:15000},
    {name:"420 VP", price:50000},
    {name:"700 VP", price:80000},
  ]
};

let selectedGame = null;
let selectedNominal = null;

document.querySelectorAll('.game-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.game-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedGame = btn.dataset.game;
    selectedNominal = null;
    renderNominals();
  });
});

function renderNominals() {
  const container = document.getElementById('nominals');
  container.innerHTML = '';
  if (!selectedGame) {
    container.innerHTML = '<p style="color:#999;font-size:13px">Pilih game dulu ya 🐱</p>';
    return;
  }
  products[selectedGame].forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'nominal';
    div.innerHTML = `${p.name}<span class="price">Rp ${p.price.toLocaleString('id-ID')}</span>`;
    div.onclick = () => {
      document.querySelectorAll('.nominal').forEach(n => n.classList.remove('active'));
      div.classList.add('active');
      selectedNominal = p;
    };
    container.appendChild(div);
  });
}

document.getElementById('checkout').addEventListener('click', () => {
  const userId = document.getElementById('userId').value.trim();
  const payment = document.getElementById('payment').value;

  if (!selectedGame) return alert('Pilih game dulu 🐱');
  if (!userId) return alert('Isi User ID dulu 🐱');
  if (!selectedNominal) return alert('Pilih nominal dulu 🐱');

  const pesan = `🐱 *MEOW TOP UP* 🐱
━━━━━━━━━━━━━━
🎮 Game: ${selectedGame}
🆔 User ID: ${userId}
📦 Item: ${selectedNominal.name}
💰 Harga: Rp ${selectedNominal.price.toLocaleString('id-ID')}
💳 Bayar: ${payment}
━━━━━━━━━━━━━━
Klik OK untuk konfirmasi 🐾`;

  if (confirm(pesan)) {
    alert('✅ Pesanan diterima! Silakan lanjut pembayaran 🐱💰');
  }
});

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
