// ===========================
// HorasLab — Main JS
// ===========================

// --- NAV SCROLL ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// --- MOBILE MENU ---
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// --- INTERSECTION OBSERVER ANIMATIONS ---
const fadeEls = document.querySelectorAll('.fitur-card, .problem-item, .step, .testi-card');
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// --- PARALLAX HERO GLOW ---
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const g1 = document.querySelector('.glow-1');
  const g2 = document.querySelector('.glow-2');
  if (g1) g1.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
  if (g2) g2.style.transform = `translate(${-x * 20}px, ${-y * 15}px)`;
});

// --- DEMO AI GENERATOR ---
const brandData = {
  makanan: {
    prefixes: ['Tano', 'Bona', 'Sihotang', 'Nagori', 'Rura'],
    suffixes: ['Rasa', 'Cita', 'Nikmatan', 'Sari', 'Warisan'],
    motifs: ['Sibolang', 'Ragidup', 'Bintang Maratur'],
    palettes: [
      { colors: ['#8B1A1A','#D4A04A','#F5E6C8','#2C1810'], name: 'Ulos Api Merah' },
      { colors: ['#5C3A1E','#D4A04A','#F0E0B8','#1A0F08'], name: 'Ulos Toba Cokelat' },
    ],
    stories: [
      'Lahir dari dapur nenek buyut yang turun-temurun menjaga resep otentik keluarga Batak dengan cinta dan filosofi Dalihan Na Tolu — kebersamaan, saling menjaga, dan rasa syukur.',
      'Setiap gigitan membawa kenangan kampung halaman, diracik dari rempah pilihan tanah Toba yang subur dan dibumbui cerita leluhur yang penuh kebijaksanaan.',
    ]
  },
  kerajinan: {
    prefixes: ['Ulos', 'Gorga', 'Tondi', 'Sahala', 'Bona'],
    suffixes: ['Karya', 'Kreasi', 'Seni', 'Tangan', 'Warisan'],
    motifs: ['Ragi Hotang', 'Bintang Maratur', 'Sadum'],
    palettes: [
      { colors: ['#1A3A5C','#D4A04A','#FFFFFF','#2C1810'], name: 'Ulos Sibolang Biru' },
      { colors: ['#2D5016','#D4A04A','#F5E6C8','#1A0F08'], name: 'Ulos Hijau Toba' },
    ],
    stories: [
      'Setiap serat dirangkai dengan doa dan harapan, mengikuti pola turun-temurun yang mengandung makna filosofis tentang kehidupan, keseimbangan, dan keindahan alam Batak.',
      'Setiap karya adalah percakapan antara masa lalu dan masa kini — motif kuno bernyawa dalam produk modern yang membawa semangat budaya ke rumah-rumah di seluruh dunia.',
    ]
  },
  fashion: {
    prefixes: ['Hasina', 'Martabe', 'Nauli', 'Boru', 'Sitorang'],
    suffixes: ['Style', 'Mode', 'Koleksi', 'Busana', 'Rancang'],
    motifs: ['Sibolang', 'Ragidup', 'Tumtuman'],
    palettes: [
      { colors: ['#1C1C1C','#D4A04A','#F5E6C8','#8B1A1A'], name: 'Ulos Malam Emas' },
      { colors: ['#8B1A1A','#F5E6C8','#D4A04A','#5C1010'], name: 'Ulos Merah Krem' },
    ],
    stories: [
      'Memadukan estetika modern dengan motif tradisional yang kaya makna, setiap busana adalah pernyataan identitas yang membanggakan akar budaya Batak di panggung fashion kontemporer.',
      'Setiap koleksi terinspirasi dari kisah perempuan Batak yang tangguh — boru yang mandiri, berpendidikan, dan bangga dengan warisan budayanya.',
    ]
  },
  pertanian: {
    prefixes: ['Huta', 'Nagori', 'Tano', 'Dolok', 'Bukit'],
    suffixes: ['Segar', 'Alami', 'Asli', 'Organik', 'Murni'],
    motifs: ['Ragi Hotang', 'Bintang Maratur', 'Ragidup'],
    palettes: [
      { colors: ['#2D5016','#D4A04A','#F5E6C8','#1A3A08'], name: 'Ulos Hijau Subur' },
      { colors: ['#5C3A1E','#3D7A2A','#D4A04A','#F5E6C8'], name: 'Ulos Bumi Toba' },
    ],
    stories: [
      'Ditanam di tanah subur pinggiran Danau Toba dengan cinta dan kearifan lokal turun-temurun, produk kami adalah bukti bahwa bumi Batak mampu menghasilkan yang terbaik.',
      'Dari tangan petani Batak yang gigih hingga meja makan keluarga Anda — rantai yang tidak putus dari tradisi, kepercayaan, dan rasa syukur kepada sang pencipta.',
    ]
  },
  kecantikan: {
    prefixes: ['Nauli', 'Hasina', 'Boru', 'Inang', 'Tondi'],
    suffixes: ['Beauty', 'Cantik', 'Sehat', 'Glowing', 'Herbal'],
    motifs: ['Tumtuman', 'Sibolang', 'Ragidup'],
    palettes: [
      { colors: ['#F2C0D4','#D4A04A','#2C1810','#F5E6C8'], name: 'Ulos Bunga Merah Muda' },
      { colors: ['#4A2060','#D4A04A','#F5E6C8','#1A0F08'], name: 'Ulos Ungu Mistis' },
    ],
    stories: [
      'Diformulasikan dari ramuan herbal tanah Batak yang telah digunakan selama berabad-abad oleh para inang untuk merawat kecantikan alami dari dalam maupun luar.',
      'Rahasia kecantikan perempuan Batak kini hadir dalam botol modern — menghadirkan keajaiban alam Sumatra langsung ke rutinitas perawatan Anda.',
    ]
  },
  lainnya: {
    prefixes: ['Horas', 'Martabe', 'Toba', 'Batak', 'Sihotang'],
    suffixes: ['Kreasi', 'Karya', 'Usaha', 'Mandiri', 'Maju'],
    motifs: ['Sibolang', 'Bintang Maratur', 'Ragi Hotang'],
    palettes: [
      { colors: ['#8B1A1A','#D4A04A','#F5E6C8','#2C1810'], name: 'Ulos Merah Emas' },
      { colors: ['#1A3A5C','#D4A04A','#FFFFFF','#0D0A08'], name: 'Ulos Biru Emas' },
    ],
    stories: [
      'Dibangun di atas fondasi nilai Dalihan Na Tolu — saling mendukung, menghargai, dan bersama membangun — usaha ini adalah wujud nyata semangat gotong-royong masyarakat Batak.',
      'Setiap produk kami membawa semangat horas — selamat dan sejahtera — sebagai doa tulus kepada setiap pelanggan yang menjadi bagian dari keluarga besar kami.',
    ]
  }
};

function getValues() {
  const nama = document.getElementById('inputNama').value.trim();
  const produk = document.getElementById('inputProduk').value;
  const cerita = document.getElementById('inputCerita').value.trim();
  const budaya = [];
  if (document.getElementById('cbUlos').checked) budaya.push('ulos');
  if (document.getElementById('cbDalihan').checked) budaya.push('dalihan');
  if (document.getElementById('cbTortor').checked) budaya.push('tor-tor');
  if (document.getElementById('cbToba').checked) budaya.push('toba');
  return { nama, produk, cerita, budaya };
}

function generateBrandName(nama, produk) {
  const data = brandData[produk] || brandData.lainnya;
  const prefix = data.prefixes[Math.floor(Math.random() * data.prefixes.length)];
  const suffix = data.suffixes[Math.floor(Math.random() * data.suffixes.length)];

  // Use part of the user's name if provided
  if (nama) {
    const words = nama.split(' ');
    const key = words[words.length - 1];
    return `${prefix} ${key}`;
  }
  return `${prefix} ${suffix}`;
}

function generateTagline(produk, budaya) {
  const taglines = {
    makanan: [
      'Cita Rasa Warisan Leluhur',
      'Dari Dapur Nenek, Untuk Dunia',
      'Lezatnya Tradisi, Hangatnya Hati',
    ],
    kerajinan: [
      'Karya Tangan, Jiwa Budaya',
      'Seni yang Bercerita',
      'Motif Kuno, Makna Abadi',
    ],
    fashion: [
      'Gaya Modern, Jiwa Batak',
      'Indah dari Dalam, Bangga di Luar',
      'Busana Berbudaya, Berkarakter',
    ],
    pertanian: [
      'Dari Bumi Toba untuk Anda',
      'Segar Alami, Berkah Ilahi',
      'Panen Kepercayaan, Tanam Tradisi',
    ],
    kecantikan: [
      'Cantik Alami dari Alam Batak',
      'Rahasia Kecantikan Leluhur',
      'Keindahan yang Merawat Jiwa',
    ],
    lainnya: [
      'Horas! Bersama Kita Maju',
      'Berakar Budaya, Meraih Dunia',
      'Karya Batak, Kualitas Terbaik',
    ]
  };
  const list = taglines[produk] || taglines.lainnya;
  if (budaya.includes('dalihan')) return 'Bersama Kita Kuat, Bersatu Kita Maju';
  if (budaya.includes('toba')) return 'Keindahan Toba dalam Setiap Sentuhan';
  return list[Math.floor(Math.random() * list.length)];
}

function generateStory(produk, cerita, budaya) {
  const data = brandData[produk] || brandData.lainnya;
  let base = data.stories[Math.floor(Math.random() * data.stories.length)];

  const additions = [];
  if (budaya.includes('dalihan')) {
    additions.push('Filosofi Dalihan Na Tolu — Somba Marhula-hula, Manat Mardongan Tubu, Elek Marboru — menjadi landasan kami dalam melayani setiap pelanggan dengan penuh hormat dan ketulusan.');
  }
  if (budaya.includes('ulos')) {
    additions.push('Motif ulos yang kami usung bukan sekadar dekorasi — ia adalah bahasa budaya yang mengungkapkan kehangatan, perlindungan, dan doa tulus dari tangan pengrajin kepada penerimanya.');
  }
  if (budaya.includes('toba')) {
    additions.push('Danau Toba sebagai pusaka dunia menjadi inspirasi kami — kedalaman, keindahan, dan keajaiban alamnya tercermin dalam setiap produk yang kami hadirkan.');
  }

  if (cerita) {
    additions.push(`Perjalanan kami dimulai dari ${cerita.toLowerCase().slice(0, 80)}...`);
  }

  return additions.length > 0 ? `${base}\n\n${additions[0]}` : base;
}

function getMotif(produk) {
  const data = brandData[produk] || brandData.lainnya;
  return data.motifs[Math.floor(Math.random() * data.motifs.length)];
}

function getPalette(produk) {
  const data = brandData[produk] || brandData.lainnya;
  return data.palettes[Math.floor(Math.random() * data.palettes.length)];
}

function getScore() {
  return Math.floor(Math.random() * 15) + 82; // 82-96
}

function getInitials(nama) {
  if (!nama) return 'HL';
  const words = nama.split(' ');
  if (words.length >= 2) return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  return nama.slice(0, 2).toUpperCase();
}

async function generateBrand() {
  const { nama, produk, cerita, budaya } = getValues();

  if (!produk) {
    alert('Pilih jenis produk terlebih dahulu!');
    return;
  }

  const btn = document.getElementById('generateBtn');
  const btnText = document.getElementById('btnText');
  const resultPlaceholder = document.getElementById('resultPlaceholder');
  const resultContent = document.getElementById('resultContent');
  const resultLoading = document.getElementById('resultLoading');
  const resultOutput = document.getElementById('resultOutput');

  // Start loading
  btn.disabled = true;
  btnText.textContent = '⏳ Menganalisis...';
  resultPlaceholder.style.display = 'none';
  resultContent.style.display = 'block';
  resultLoading.style.display = 'block';
  resultOutput.style.display = 'none';

  // Update demo result container alignment
  document.getElementById('demoResult').style.alignItems = 'flex-start';

  // Simulate AI processing
  await new Promise(resolve => setTimeout(resolve, 2200));

  // Generate brand data
  const brandName = generateBrandName(nama, produk);
  const tagline = generateTagline(produk, budaya);
  const story = generateStory(produk, cerita, budaya);
  const motif = getMotif(produk);
  const palette = getPalette(produk);
  const score = getScore();
  const initials = getInitials(nama || brandName);

  // Build result HTML
  resultOutput.innerHTML = `
    <div class="brand-result">
      <div class="brand-result-header">
        <div class="brand-result-logo">${initials}</div>
        <div class="brand-result-name">${brandName}</div>
        <div class="brand-result-tagline">"${tagline}"</div>
      </div>

      <div class="brand-result-section">
        <h4>🎨 Motif Ulos Rekomendasi</h4>
        <p><strong style="color:var(--emas)">${motif}</strong> — Motif ini melambangkan harapan, keberuntungan, dan ikatan yang kuat antara pemberi dan penerima. Cocok untuk brand yang ingin menonjolkan nilai tradisi dan kepercayaan.</p>
      </div>

      <div class="brand-result-section">
        <h4>🎨 Palet Warna Brand</h4>
        <div class="brand-palette">
          ${palette.colors.map(c => `<div class="brand-swatch" style="background:${c}" title="${c}"></div>`).join('')}
          <span style="font-size:0.78rem;color:var(--abu);margin-left:8px">${palette.name}</span>
        </div>
      </div>

      <div class="brand-result-section">
        <h4>📖 Brand Story</h4>
        <p>${story}</p>
      </div>

      <div class="brand-result-section">
        <h4>📊 Brand Strength Score</h4>
        <div class="brand-score">
          <span class="brand-score-number">${score}</span>
          <div class="brand-score-bar">
            <div class="brand-score-fill" id="scoreBar" style="width:0%"></div>
          </div>
          <span style="font-size:0.8rem;color:var(--abu)">/100</span>
        </div>
        <p style="font-size:0.8rem;color:rgba(253,250,246,0.5);margin-top:8px">
          ${score >= 90 ? '🔥 Luar Biasa! Brand Anda memiliki potensi tinggi di pasar.' : score >= 80 ? '✅ Sangat Baik! Beberapa optimasi kecil untuk sempurna.' : '⭐ Baik! Dengan sedikit penyesuaian brand Anda akan semakin kuat.'}
        </p>
      </div>

      <div class="brand-result-section">
        <h4>💡 Rekomendasi Implementasi</h4>
        <p>
          1. Gunakan motif <strong style="color:var(--emas)">${motif}</strong> sebagai elemen visual utama di packaging dan media sosial.<br/>
          2. Terapkan palet warna <strong style="color:var(--emas)">${palette.name}</strong> secara konsisten di semua touchpoint.<br/>
          3. Sertakan tagline <em>"${tagline}"</em> di semua materi komunikasi merek.<br/>
          4. Bagikan brand story di halaman "Tentang Kami" dan konten Instagram.
        </p>
      </div>
    </div>
  `;

  resultLoading.style.display = 'none';
  resultOutput.style.display = 'block';

  // Animate score bar
  setTimeout(() => {
    const bar = document.getElementById('scoreBar');
    if (bar) bar.style.width = score + '%';
  }, 100);

  // Reset button
  btn.disabled = false;
  btnText.textContent = '✨ Generate Ulang';
}

// --- EMAIL SUBMIT ---
function submitEmail() {
  const email = document.getElementById('emailInput').value;
  if (!email || !email.includes('@')) {
    alert('Masukkan alamat email yang valid!');
    return;
  }
  const btn = event.target;
  btn.textContent = '✅ Terdaftar!';
  btn.style.background = '#4CAF50';
  btn.disabled = true;
  document.getElementById('emailInput').value = '';
  setTimeout(() => {
    btn.textContent = 'Daftar Gratis';
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}

// --- SMOOTH SCROLL ACTIVE NAV ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--emas)';
    }
  });
});

// --- COUNTER ANIMATION ---
function animateCounters() {
  const stats = document.querySelectorAll('.stat strong');
  stats.forEach(stat => {
    const text = stat.textContent;
    const num = parseInt(text);
    if (!isNaN(num)) {
      let start = 0;
      const end = num;
      const duration = 1500;
      const step = (end / duration) * 16;
      const suffix = text.replace(/[0-9]/g, '');
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          stat.textContent = end + suffix;
          clearInterval(timer);
        } else {
          stat.textContent = Math.floor(start) + suffix;
        }
      }, 16);
    }
  });
}

// Trigger counter when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    setTimeout(animateCounters, 500);
    heroObserver.disconnect();
  }
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

console.log('🎉 HorasLab loaded! Horas!');
