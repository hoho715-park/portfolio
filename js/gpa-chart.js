/* ===================================
   GPA Chart - 학점 변화 그래프
   =================================== */

(function() {
  const ctx = document.getElementById('gpaChart');
  if (!ctx) return;

  // 학기별 학점 데이터
  const gpaData = {
    labelsShort: ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1'],
    labelsFull: ['1학년 1학기', '1학년 2학기', '2학년 1학기', '2학년 2학기', '3학년 1학기', '3학년 2학기', '4학년 1학기'],
    values: [1.76, 3.18, 3.00, 2.15, 4.18, 4.33, 4.29]
  };

  // 최고점 인덱스
  const maxIndex = gpaData.values.indexOf(Math.max(...gpaData.values));

  // 반응형 감지
  function isMobile() {
    return window.innerWidth <= 480;
  }

  function isTablet() {
    return window.innerWidth <= 768 && window.innerWidth > 480;
  }

  // 반응형에 따른 라벨 선택
  function getLabels() {
    if (isMobile() || isTablet()) {
      return gpaData.labelsShort;
    }
    return gpaData.labelsFull;
  }

  // 반응형 설정값
  function getResponsiveConfig() {
    if (isMobile()) {
      return {
        barThickness: 18,
        valueFontSize: 9,
        fontSize: 9,
        yFontSize: 9,
        padding: 8,
        layoutPadding: { left: 5, right: 10, top: 20, bottom: 5 }
      };
    } else if (isTablet()) {
      return {
        barThickness: 28,
        valueFontSize: 10,
        fontSize: 10,
        yFontSize: 10,
        padding: 10,
        layoutPadding: { left: 5, right: 15, top: 22, bottom: 5 }
      };
    }
    return {
      barThickness: 44,
      valueFontSize: 12,
      fontSize: 11,
      yFontSize: 11,
      padding: 12,
      layoutPadding: { left: 10, right: 20, top: 24, bottom: 10 }
    };
  }

  const config = getResponsiveConfig();

  // 막대 색상: 최고 학기 = 초록, 장학금 학기(3-1 ~ 4-1) = 진한 인디고, 그 외 = 옅은 인디고
  const scholarshipIndexes = [4, 5, 6];
  const barColors = gpaData.values.map((val, idx) => {
    if (idx === maxIndex) return '#10b981';
    if (scholarshipIndexes.includes(idx)) return '#6366f1';
    return 'rgba(99, 102, 241, 0.45)';
  });
  const barHoverColors = gpaData.values.map((val, idx) => {
    if (idx === maxIndex) return '#34d399';
    return '#818cf8';
  });

  // 막대 위 학점 숫자 표시 플러그인 (이 차트에만 적용)
  const valueLabelPlugin = {
    id: 'gpaValueLabel',
    afterDatasetsDraw: function(chart) {
      const chartCtx = chart.ctx;
      const meta = chart.getDatasetMeta(0);
      const fontSize = getResponsiveConfig().valueFontSize;

      chartCtx.save();
      chartCtx.textAlign = 'center';
      chartCtx.textBaseline = 'bottom';
      chartCtx.font = '700 ' + fontSize + 'px Inter, sans-serif';

      meta.data.forEach(function(bar, idx) {
        chartCtx.fillStyle = idx === maxIndex ? '#34d399' : 'rgba(255, 255, 255, 0.85)';
        chartCtx.fillText(gpaData.values[idx].toFixed(2), bar.x, bar.y - 6);
      });
      chartCtx.restore();
    }
  };

  // 차트 인스턴스
  let chartInstance = new Chart(ctx, {
    type: 'bar',
    plugins: [valueLabelPlugin],
    data: {
      labels: getLabels(),
      datasets: [{
        label: '학점',
        data: gpaData.values,
        backgroundColor: barColors,
        hoverBackgroundColor: barHoverColors,
        borderRadius: 6,
        borderSkipped: 'bottom',
        barThickness: config.barThickness,
        maxBarThickness: 56
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      resizeDelay: 100,
      layout: {
        padding: config.layoutPadding
      },
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
          padding: config.padding,
          displayColors: false,
          callbacks: {
            title: function(context) {
              return gpaData.labelsFull[context[0].dataIndex];
            },
            label: function(context) {
              const idx = context.dataIndex;
              const value = context.parsed.y.toFixed(2);
              let lines = ['학점: ' + value + ' / 4.5'];

              // 3학년 1학기 (index 4)
              if (idx === 4) {
                lines.push('창조장학금 (전액 60%)');
              }
              // 3학년 2학기 (index 5)
              else if (idx === 5) {
                lines.push('자주장학금 (전액 80%)');
              }
              // 4학년 1학기 (index 6)
              else if (idx === 6) {
                lines.push('창조장학금 (전액 60%)');
              }

              return lines;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.6)',
            font: {
              size: config.fontSize,
              weight: '500'
            },
            maxRotation: 0,
            autoSkip: false
          }
        },
        y: {
          min: 0,
          max: 4.5,
          grid: {
            color: function(context) {
              if (context.tick.value === 1) {
                return 'rgba(255, 255, 255, 0.04)';
              }
              return 'rgba(255, 255, 255, 0.08)';
            },
            drawBorder: false,
            borderDash: function(context) {
              if (context.tick.value === 1) {
                return [3, 3];
              }
              return [5, 5];
            }
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.6)',
            font: {
              size: config.yFontSize
            },
            stepSize: 0.5,
            callback: function(value) {
              if (value === 0 || value === 1 || value === 2 || value === 3 || value === 4 || value === 4.5) {
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
      },
      animation: {
        duration: 1000,
        easing: 'easeOutQuart'
      }
    }
  });

  // 리사이즈 핸들러
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      const newConfig = getResponsiveConfig();
      const newLabels = getLabels();

      // 라벨 업데이트
      chartInstance.data.labels = newLabels;

      // 레이아웃 패딩 업데이트
      chartInstance.options.layout.padding = newConfig.layoutPadding;

      // 차트 옵션 업데이트
      chartInstance.options.scales.x.ticks.font.size = newConfig.fontSize;
      chartInstance.options.scales.y.ticks.font.size = newConfig.yFontSize;
      chartInstance.options.plugins.tooltip.padding = newConfig.padding;

      // 데이터셋 업데이트
      chartInstance.data.datasets[0].barThickness = newConfig.barThickness;

      chartInstance.update('none');
    }, 150);
  });
})();
