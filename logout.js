// Fungsi untuk logout
function logout() {
    // Simulasi proses logout (misalnya, menghapus session storage atau cookies)
    alert('Anda telah keluar dari akun.');

    // Redirect ke halaman login setelah logout
    window.location.href = 'login.html';  // Ubah sesuai dengan halaman login Anda
}

// Fungsi untuk membatalkan logout dan kembali ke halaman sebelumnya
function cancelLogout() {
    window.history.back();  // Mengembalikan pengguna ke halaman sebelumnya
}
