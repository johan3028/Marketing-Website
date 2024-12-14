// Fungsi untuk menavigasi ke halaman penawaran tertentu berdasarkan ID
function goToOfferPage(offerId) {
    // Misalnya, ini adalah ID halaman penawaran untuk setiap produk
    switch(offerId) {
        case 'offer1':
            window.location.href = 'https://www.example.com/offer1'; // Ganti dengan URL penawaran produk 1
            break;
        case 'offer2':
            window.location.href = 'https://www.example.com/offer2'; // Ganti dengan URL penawaran produk 2
            break;
        case 'offer3':
            window.location.href = 'https://www.example.com/offer3'; // Ganti dengan URL penawaran produk 3
            break;
        default:
            alert('Penawaran tidak ditemukan');
    }
}
