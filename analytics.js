// Sales Chart Data (Bar Chart)
const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
        label: 'Sales ($)',
        data: [500, 700, 800, 600, 950, 1200, 1300],
        backgroundColor: 'rgba(255, 126, 95, 0.5)',
        borderColor: 'rgba(255, 126, 95, 1)',
        borderWidth: 2,
    }]
};

// Traffic Chart Data (Line Chart)
const trafficData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
        label: 'Traffic (Visits)',
        data: [1000, 1200, 1500, 1400, 1700, 1800, 2000],
        backgroundColor: 'rgba(240, 128, 128, 0.5)',
        borderColor: 'rgba(240, 128, 128, 1)',
        borderWidth: 2,
        fill: true,
    }]
};

// Create Sales Chart (Bar Chart)
const ctxSales = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctxSales, {
    type: 'bar',
    data: salesData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 200,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
});

// Create Traffic Chart (Line Chart)
const ctxTraffic = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(ctxTraffic, {
    type: 'line',
    data: trafficData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 500,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    },
});

// Dynamic Summary Data (JavaScript)
document.getElementById('total-sales').textContent = '1200';
document.getElementById('traffic').textContent = '2500';
document.getElementById('conversion-rate').textContent = '4.5%';
