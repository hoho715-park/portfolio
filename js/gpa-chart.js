/* ===================================
   GPA Chart - 학점 변화 그래프
   =================================== */

(function() {
  const ctx = document.getElementById('gpaChart');
  if (!ctx) return;

  // 학기별 학점 데이터
  const gpaData = {
    labels: ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2'],
    values: [1.76, 3.18, 3.00, 2.15, 4.18, 4.33]
  };

  // 그라데이션 생성
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, ctx.width, 0);
  gradient.addColorStop(0, '#6366f1');
  gradient.addColorStop(1, '#06b6d4');

  // 영역 채우기 그라데이션
  const areaGradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
  areaGradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
  areaGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: gpaData.labels,
      datasets: [{
        label: '학점',
        data: gpaData.values,
        borderColor: gradient,
        borderWidth: 3,
        backgroundColor: areaGradient,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#06b6d4',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          titleColor: '#fff',
          bodyColor: '#fff',
          borderColor: 'rgba(99, 102, 241, 0.5)',
          borderWidth: 1,
          cornerRadius: 8,
          padding: 12,
          displayColors: false,
          callbacks: {
            title: function(context) {
              const semesterNames = ['1학년 1학기', '1학년 2학기', '2학년 1학기', '2학년 2학기', '3학년 1학기', '3학년 2학기'];
              return semesterNames[context[0].dataIndex];
            },
            label: function(context) {
              return '학점: ' + context.parsed.y.toFixed(2) + ' / 4.5';
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.6)',
            font: {
              size: 12,
              weight: '500'
            }
          }
        },
        y: {
          min: 0,
          max: 4.5,
          grid: {
            color: 'rgba(255, 255, 255, 0.08)',
            drawBorder: false,
            borderDash: [5, 5]
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.6)',
            font: {
              size: 11
            },
            stepSize: 1,
            callback: function(value) {
              if (value === 0 || value === 2 || value === 3 || value === 4 || value === 4.5) {
                return value.toFixed(1);
              }
              return '';
            }
          }
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  });
})();
