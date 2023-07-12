 
  if (jQuery("#dash-chart-1").length) {
    var options = {
      series: [{
        name: 'series1',
        data: [10, 15, 20, 20, 25, 13, 20, 15, 12]
      }],
      colors: ["#081523"],
      chart: {
        height: 107,
        type: 'area',
        sparkline: {
          enabled: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    };
  
    var chart = new ApexCharts(document.querySelector("#dash-chart-1"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }
  
    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
}
if(jQuery('#dash-chart-02').length){
  var options = {
    series: [{
    name: 'Net Profit',
    data: [50, 35, 45, 80, 65, 50]
  },],
    colors: ["#081523"],
    chart: {
    type: 'bar',
    height: 70,
    width: 100,
      sparkline: {
        enabled: true,
      }
  },
  legend: {
    show: false
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['02:30', '02:45', '03:00', '03:15'],
  },
  yaxis: {
    title: {
      text: ''
    },
    labels: {
    offsetX: -20,
    offsetY: 0
  },
  },
  grid: {
  padding: {
    left: -5,
    right: 0
  }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    enabled: false
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#dash-chart-02"), options);
  chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }
  
    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
};
if(jQuery("#chart-page-2").length){
    new Chartist.Bar('#chart-page-2', {
      labels: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul'],
      series: [
        [800000, 1200000, 1400000, 1300000,800000, 1200000, 1400000],
        [200000, 400000, 500000, 300000, 200000, 400000, 500000],
        [100000, 200000, 400000, 600000, 100000, 200000, 400000]
      ]
    },
      {
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function(value) {
          return (value / 10000) + '$';
        }
      },
    }).on('draw', function(data) {
      if(data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 15px; stroke-linecap: round;transform:translateY(-15px);'
        });
      }
    });

}    
if(jQuery('#dash-chart-09').length){
var options = {
 series: [{
 name: 'Net Profit',
 data: [50, 35, 45, 80, 65, 50]
},],
  colors: ["#39C651"],
 chart: {
 type: 'bar',
 height: 70,
 width: 100,
   sparkline: {
     enabled: true,
   }
},
legend: {
 show: false
},
plotOptions: {
 bar: {
   horizontal: false,
   columnWidth: '55%',
   endingShape: 'rounded'
 },
},
dataLabels: {
 enabled: false
},
stroke: {
 show: true,
 width: 2,
 colors: ['transparent']
},
xaxis: {
 categories: ['02:30', '02:45', '03:00', '03:15'],
},
yaxis: {
 title: {
   text: ''
 },
 labels: {
 offsetX: -20,
 offsetY: 0
},
},
grid: {
padding: {
 left: -5,
 right: 0
}
},
fill: {
 opacity: 1
},
tooltip: {
  enabled: false
}
};

var chart = new ApexCharts(document.querySelector("#dash-chart-09"), options);
chart.render();
  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
};
