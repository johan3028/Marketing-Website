// Menampilkan Modal dengan Detail Anggota Tim
function showDetails(memberId) {
    const modal = document.getElementById("modal");
    const name = document.getElementById("modal-name");
    const position = document.getElementById("modal-position");
    const description = document.getElementById("modal-description");

    // Detail setiap anggota tim
    const teamDetails = {
        member1: {
            name: "John Doe",
            position: "Manajer Pemasaran",
            description: "John memiliki pengalaman lebih dari 10 tahun di industri pemasaran, membantu membangun strategi sukses yang meningkatkan penjualan produk."
        },
        member2: {
            name: "Jane Smith",
            position: "Koordinator Konten",
            description: "Jane adalah seorang ahli dalam pembuatan konten kreatif yang meningkatkan keterlibatan pelanggan dan mempromosikan merek dengan cara yang menarik."
        },
        member3: {
            name: "Michael Johnson",
            position: "Spesialis Media Sosial",
            description: "Michael mengelola kampanye media sosial dan membantu memperluas jangkauan produk kami di berbagai platform digital."
        },
        member4: {
            name: "Amanda Lee",
            position: "Analisis Pemasaran",
            description: "Amanda adalah seorang analis yang mendalami data untuk memahami tren pasar dan membuat keputusan pemasaran yang cerdas."
        }
    };

    // Mengisi modal dengan data yang sesuai
    name.textContent = teamDetails[memberId].name;
    position.textContent = teamDetails[memberId].position;
    description.textContent = teamDetails[memberId].description;

    // Menampilkan modal
    modal.style.display = "flex";
}

// Menutup Modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Menutup modal ketika klik di luar modal
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
