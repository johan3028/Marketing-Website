// Mendapatkan referensi kalender
const calendarContainer = document.getElementById('calendar');

// Daftar nama bulan
const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

// Daftar nama hari
const daysOfWeek = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

// Fungsi untuk membuat kalender untuk tahun 2025
function createCalendar(year) {
    let calendarHTML = `<div class="months-container">`;

    // Iterasi melalui setiap bulan dari Januari hingga Desember
    for (let month = 0; month < 12; month++) {
        const monthName = months[month];
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDateOfMonth = new Date(year, month + 1, 0);
        const totalDaysInMonth = lastDateOfMonth.getDate();
        const firstDayIndex = firstDayOfMonth.getDay(); // Index hari pertama bulan (0 = Sunday, 1 = Monday, dll.)

        // Menambahkan bulan ke kalender
        calendarHTML += `<div class="month">
                            <div class="month-name">${monthName} ${year}</div>
                            <div class="days">`;

        // Menampilkan nama hari
        daysOfWeek.forEach(day => {
            calendarHTML += `<div class="day">${day}</div>`;
        });

        // Menambahkan kosong sebelum tanggal pertama agar tanggal pertama jatuh pada hari yang sesuai
        for (let i = 0; i < (firstDayIndex === 0 ? 6 : firstDayIndex - 1); i++) {
            calendarHTML += `<div class="day"></div>`;
        }

        // Menambahkan tanggal bulan
        for (let day = 1; day <= totalDaysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayName = daysOfWeek[date.getDay()];

            calendarHTML += `<div class="date" title="${dayName}, ${day} ${monthName} ${year}" onclick="selectDate(this)">${day}</div>`;

            // Menambahkan baris baru jika sudah mencapai akhir minggu
            if ((firstDayIndex + day - 1) % 7 === 6) {
                calendarHTML += `</div><div class="days">`;
            }
        }

        // Menutup div untuk bulan
        calendarHTML += `</div></div>`;
    }

    // Menutup container bulan
    calendarHTML += `</div>`;

    // Menampilkan kalender di halaman
    calendarContainer.innerHTML = calendarHTML;
}

// Fungsi untuk memilih tanggal
function selectDate(dateElement) {
    // Menghapus seleksi sebelumnya
    const selectedDate = document.querySelector('.date.selected');
    if (selectedDate) {
        selectedDate.classList.remove('selected');
    }

    // Menandai tanggal yang dipilih
    dateElement.classList.add('selected');
}

// Memanggil fungsi untuk menampilkan kalender 2025
createCalendar(2025);

