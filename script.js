// Toggle menu mobile sederhana
// Ambil elemen tombol hamburger dan navigasi utama
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  // Saat tombol hamburger diklik, ubah nilai aria-expanded dan tampilkan/sembunyikan menu
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show'); // class .show akan membuat menu tampil di mobile
  });

  // Tutup menu saat salah satu link di dalam nav diklik
  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll sederhana
// Menangani klik pada tautan anchor (href yang diawali dengan #)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault(); // cegah perilaku default agar kita bisa scroll halus
    target.scrollIntoView({ behavior: 'smooth' }); // scroll halus ke elemen tujuan
  });
});

// Tahun otomatis footer
// Mengisi span#year dengan tahun saat ini agar tidak perlu update manual
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
