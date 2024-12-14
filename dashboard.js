// Dummy data for statistics
document.getElementById('userCount').textContent = 1200;
document.getElementById('transactionCount').textContent = 75;
document.getElementById('orderCount').textContent = 5;

// Example chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Pengguna Baru',
            data: [30, 45, 50, 60, 90, 120, 150],
            borderColor: 'rgba(52, 152, 219, 1)',
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
