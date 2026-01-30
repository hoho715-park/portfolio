/* ===================================
   GPA Chart - 학점 변화 그래프
   =================================== */

(function() {
  const ctx = document.getElementById('gpaChart');
  if (!ctx) return;

  // 학기별 학점 데이터
  const gpaData = {
    labelsShort: ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2'],
    labelsFull: ['1학년 1학기', '1학년 2학기', '2학년 1학기', '2학년 2학기', '3학년 1학기', '3학년 2학기'],
    values: [1.76, 3.18, 3.00, 2.15, 4.18, 4.33]
  };

  // 상승 구간 체크 함수
  function isRisingSegment(index) {
    if (index === 0) return false;
    const diff = gpaData.values[index] - gpaData.values[index - 1];
    return diff > 1.0;
  }

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
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        fontSize: 9,
        yFontSize: 9,
        padding: 8,
        layoutPadding: { left: 5, right: 15, top: 10, bottom: 5 }
      };
    } else if (isTablet()) {
      return {
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2.5,
        fontSize: 10,
        yFontSize: 10,
        padding: 10,
        layoutPadding: { left: 5, right: 20, top: 10, bottom: 5 }
      };
    }
    return {
      pointRadius: 6,
      pointHoverRadius: 8,
      borderWidth: 3,
      fontSize: 11,
      yFontSize: 11,
      padding: 12,
      layoutPadding: { left: 10, right: 25, top: 15, bottom: 10 }
    };
  }

  const config = getResponsiveConfig();

  // 그라데이션 생성
  const context = ctx.getContext('2d');
  const lineGradient = context.createLinearGradient(0, 0, ctx.offsetWidth || 400, 0);
  lineGradient.addColorStop(0, '#6366f1');
  lineGradient.addColorStop(0.5, '#8b5cf6');
  lineGradient.addColorStop(0.75, '#06b6d4');
  lineGradient.addColorStop(1, '#10b981');

  // 영역 채우기 그라데이션
  const areaGradient = context.createLinearGradient(0, 0, 0, 200);
  areaGradient.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
  areaGradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.15)');
  areaGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

  // 포인트 색상 배열
  const pointColors = gpaData.values.map((val, idx) => {
    if (idx === maxIndex) return '#10b981';
    if (isRisingSegment(idx)) return '#06b6d4';
    return '#6366f1';
  });

  // 포인트 크기 배열
  const pointRadii = gpaData.values.map((val, idx) => {
    if (idx === maxIndex) return config.pointRadius + 2;
    if (isRisingSegment(idx)) return config.pointRadius + 1;
    return config.pointRadius;
  });

  // 차트 인스턴스
  let chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: getLabels(),
      datasets: [{
        label: '학점',
        data: gpaData.values,
        borderColor: lineGradient,
        borderWidth: config.borderWidth,
        backgroundColor: areaGradient,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: pointColors,
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: pointRadii,
        pointHoverRadius: config.pointHoverRadius,
        pointHoverBackgroundColor: pointColors,
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3,
        clip: false,
        segment: {
          borderColor: function(ctx) {
            const idx = ctx.p1DataIndex;
            if (isRisingSegment(idx)) {
              return '#10b981';
            }
            return undefined;
          },
          borderWidth: function(ctx) {
            const idx = ctx.p1DataIndex;
            if (isRisingSegment(idx)) {
              return config.borderWidth + 1;
            }
            return undefined;
          }
        }
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
              let label = '학점: ' + value + ' / 4.5';

              if (idx === maxIndex) {
                label += '\n최고 학점 달성!';
              } else if (isRisingSegment(idx)) {
                const diff = (gpaData.values[idx] - gpaData.values[idx - 1]).toFixed(2);
                label += '\n+' + diff + ' 대폭 상승!';
              }
              return label;
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

  // 최고점 glow 효과 플러그인
  const glowPlugin = {
    id: 'glowEffect',
    afterDraw: function(chart) {
      const chartCtx = chart.ctx;
      const meta = chart.getDatasetMeta(0);
      const maxPoint = meta.data[maxIndex];

      if (maxPoint) {
        chartCtx.save();
        chartCtx.beginPath();
        chartCtx.arc(maxPoint.x, maxPoint.y, 12, 0, Math.PI * 2);
        chartCtx.fillStyle = 'rgba(16, 185, 129, 0.2)';
        chartCtx.fill();

        chartCtx.beginPath();
        chartCtx.arc(maxPoint.x, maxPoint.y, 18, 0, Math.PI * 2);
        chartCtx.fillStyle = 'rgba(16, 185, 129, 0.1)';
        chartCtx.fill();
        chartCtx.restore();
      }
    }
  };

  Chart.register(glowPlugin);

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
      chartInstance.data.datasets[0].borderWidth = newConfig.borderWidth;
      chartInstance.data.datasets[0].pointRadius = gpaData.values.map((val, idx) => {
        if (idx === maxIndex) return newConfig.pointRadius + 2;
        if (isRisingSegment(idx)) return newConfig.pointRadius + 1;
        return newConfig.pointRadius;
      });
      chartInstance.data.datasets[0].pointHoverRadius = newConfig.pointHoverRadius;

      chartInstance.update('none');
    }, 150);
  });
})();
