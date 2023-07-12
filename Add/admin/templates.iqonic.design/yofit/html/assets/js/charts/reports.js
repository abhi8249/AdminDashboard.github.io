
  /*---------------------------------------------------------------------
   reoprt layout charts
  ---------------------------------------------------------------------*/

if (jQuery("#customer-chart-01").length) {
    var options = {
      series: [{
      name: 'series1',
      data: [50, 240, 600, 400, 500,400, 220, 500, 150, 600, 730, 500],
    }, {
      name: 'series2',
      data: [30, 150, 400,100, 250,550,140, 190, 590, 340, 530, 400],
    }],
       colors: ['#2081DF','#DF4020'],
      chart: {
      height: 262,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'top',
      show:false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        gradientToColors: [' #f566924d','#5454964d'],
        shade: 'dark',
        type: "vertical",
        shadeIntensity: 0.2,
        gradientToColors: undefined, 
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: .04,
        stops: [0, 50, 100],
        colorStops: []
      }
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
     
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug' , 'Sep' , 'Oct', 'Nov' , 'Dec'],
      labels: {
         
        minHeight: 20,
        maxHeight: 20,
      }
    },
    yaxis: {
      labels: {
        offsetY: 0,
        minWidth: 20,
        maxWidth: 20,
        formatter: function (val, index) {
          return '$' + val;
        }
  
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    };
  
    var chart = new ApexCharts(document.querySelector("#customer-chart-01"), options);
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
    if (jQuery("#dash-chart-04").length) {
        var options = {
            series: [{
                name: 'Jogging',
                data: [40, 30, 30, 50, 40, 20,30,50,20]
              }],
              colors: ["#081523"],
              chart: {
                height: 280,
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
        fill: {
                colors:['#081523'],
                type:'solid',
                opacity: 0.7
            },
            colors:['#081523'],
            grid: {
              borderColor: '#f4f4f4',
              xaxis: {
                lines: {
                  show: true
                }
              }
            },
            yaxis: {
              labels: {
              offsetY:0,
              minWidth: 20,
              maxWidth: 20
              },
            },
            responsive: [{
                breakpoint: 575,
                options: {
                    chart: {
                        height: 280,
                    }
                }
             }]
        };
    
        var chart = new ApexCharts(document.querySelector("#dash-chart-04"), options);
        chart.render();
      }
      if (jQuery("#dash-chart-05").length) {
        var options = {
        series: [{
            name: 'Riding',
            data: [50, 50, 20, 60, 30, 50,20,40,30]
          }],
          colors: ["#081523"],
          chart: {
            height: 280,
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
          
        fill: {
                colors:['#FFB100'],
                type:'solid',
                opacity: 0.7
            },
            colors:['#FFB100'],
            grid: {
              borderColor: '#f4f4f4',
              xaxis: {
                lines: {
                  show: true
                }
              }
            },
            yaxis: {
              labels: {
              show:false
              },
            },
            responsive: [{
                breakpoint: 575,
                options: {
                    chart: {
                        height: 280,
                    }
                }
             }]
        };
    
        var chart = new ApexCharts(document.querySelector("#dash-chart-05"), options);
        chart.render();
      }
      if (jQuery("#dash-chart-06").length) {
        var options = {
            series: [{
                name: 'Yoga Session',
                data: [20, 20, 40, 20, 50, 30,40,50,30]
              }],
              colors: ["#081523"],
              chart: {
                height: 280,
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
             fill: {
                colors:['#66101F'],
                type:'solid',
                opacity: 0.7
            },
            colors:['#66101F'],
            grid: {
              borderColor: '#f4f4f4',
              xaxis: {
                lines: {
                  show: true
                }
              }
            },
            yaxis: {
              labels: {
              offsetY:0,
              minWidth: 20,
              maxWidth: 20
              },
            },
            responsive: [{
                breakpoint: 575,
                options: {
                    chart: {
                        height: 280,
                    }
                }
             }]
        };
    
        var chart = new ApexCharts(document.querySelector("#dash-chart-06"), options);
        chart.render();
      }
     