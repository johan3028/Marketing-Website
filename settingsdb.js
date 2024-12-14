// Fungsi untuk memuat pengaturan yang disimpan
function loadSettings() {
    const theme = localStorage.getItem('theme');
    const notifications = localStorage.getItem('notifications');
    const privacy = localStorage.getItem('privacy');

    // Terapkan tema gelap jika diset
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme').checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme').checked = false;
    }

    // Terapkan pengaturan lainnya
    if (notifications === 'true') {
        document.getElementById('notifications').checked = true;
    } else {
        document.getElementById('notifications').checked = false;
    }

    if (privacy === 'high') {
        document.getElementById('privacy').checked = true;
    } else {
        document.getElementById('privacy').checked = false;
    }
}

// Fungsi untuk toggle tema
function toggleTheme() {
    const themeCheckbox = document.getElementById("theme");
    if (themeCheckbox.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem('theme', 'dark'); // Simpan tema gelap
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem('theme', 'light'); // Simpan tema terang
    }
}

// Fungsi untuk menyimpan pengaturan
function saveSettings() {
    const theme = document.getElementById("theme").checked ? 'dark' : 'light';
    const notifications = document.getElementById("notifications").checked ? 'true' : 'false';
    const privacy = document.getElementById("privacy").checked ? 'high' : 'normal';

    // Simpan pengaturan di localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('notifications', notifications);
    localStorage.setItem('privacy', privacy);

    alert(`Pengaturan Disimpan:\nTema: ${theme}\nNotifikasi: ${notifications === 'true' ? 'Aktif' : 'Nonaktif'}\nPrivasi: ${privacy === 'high' ? 'Privasi Tinggi' : 'Privasi Normal'}`);

    // Kembali ke dashboard utama setelah menyimpan
    document.getElementById("settings-dashboard").style.display = "none";
    document.getElementById("main-dashboard").style.display = "block";

    // Terapkan perubahan tema langsung setelah penyimpanan
    loadSettings();
}

// Fungsi untuk pergi ke pengaturan
function goToSettings() {
    document.getElementById("main-dashboard").style.display = "none";
    document.getElementById("settings-dashboard").style.display = "block";
}

// Fungsi untuk kembali ke dashboard tanpa menyimpan pengaturan
function goToDashboard() {
    document.getElementById("settings-dashboard").style.display = "none";
    document.getElementById("main-dashboard").style.display = "block";
}

// Panggil loadSettings untuk memuat pengaturan saat halaman pertama kali dimuat
window.onload = loadSettings;
