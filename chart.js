document.addEventListener('DOMContentLoaded', function() {
    const eventData = {
      labels: ['Tech Conference', 'Product Launch', 'Workshop', 'Networking', 'Annual Meet'],
      datasets: [{
        label: 'Registrations',
        data: [1200, 800, 450, 600, 950],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderWidth: 1
      }]
    };
  
    const ctx = document.getElementById('registrationsChart');
    let chart = new Chart(ctx, {
      type: 'bar',
      data: eventData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              drawBorder: false
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  
    // Toggle between chart types
    document.querySelectorAll('[data-chart-type]').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelector('[data-chart-type].active').classList.remove('active');
        this.classList.add('active');
        chart.destroy();
        chart = new Chart(ctx, {
          type: this.dataset.chartType,
          data: eventData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: 0
            }
          }
        });
      });
    });
  });

//chart 2
document.addEventListener('DOMContentLoaded', function() {
    // Existing registration chart code...
  
    // 1. Seats Filled Gauge Chart
    const seatsCtx = document.getElementById('seatsChart').getContext('2d');
    new Chart(seatsCtx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [75, 25],
          backgroundColor: ['#28a745', '#e9ecef'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '80%',
        rotation: -90,
        circumference: 180,
        plugins: { legend: { display: false } }
      }
    });
  
    // 3. Sales Trend Chart
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Daily Revenue',
          data: [20000, 35000, 25000, 40000, 30000],
          borderColor: '#007bff',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  
    // Event selectors functionality
    document.querySelectorAll('[id^="eventSelect"]').forEach(select => {
      select.addEventListener('change', function() {
        // Add your data filtering logic here
        console.log(`Filter changed for ${this.id}: ${this.value}`);
      });
    });
  });