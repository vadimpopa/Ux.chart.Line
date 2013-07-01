// Based on http://jsfiddle.net/kaliatech/4TMMD/

Ext.define('Ux.chart.Line',{
    extend: 'Ext.Component',

    xtype: 'chartline',

    initialize: function(){

      // Init and add a line chart
      nv.addGraph(Ext.bind(function(){
          var chart = nv.models.lineChart();

          chart.xAxis.tickFormat(function (d) {
            return d3.time.format('%x')(new Date(d))
          });

          chart.yAxis.tickFormat(d3.format(',.1%'));

          d3.select(this.innerElement.dom).append('svg');
          
          nv.utils.windowResize(chart.update);

          this.chart = chart;

          return chart;
      },this));

      this.on('painted',function(){
          this.redraw();

          setInterval(Ext.bind(function () {
            var long = this.getData()[0].values,
                next = new Date(long[long.length - 1].x);

            next.setDate(next.getDate() + 1);
            long.shift();
            long.push({x:next.getTime(), y:Math.random() * 100});

            this.redraw();

          },this), 1500);
      },this)

    },

    redraw: function() {
      d3.select(this.innerElement.down('svg').dom)
            .datum(this.getData())
            .transition().duration(500)
            .call(this.chart);
    },
    generateData: function() {
        var arr = [],
            theDate = new Date(2012, 01, 01, 0, 0, 0, 0);

        for (var x = 0; x < 30; x++) {
            arr.push({x: theDate.getTime(), y: Math.random() * 100});
            theDate.setDate(theDate.getDate() + 1);
        }
        return arr;
    },
    getData: function() {
      return [{
        "key": "Long",
        "values": this.generateData()
      }];
    }
});



/*
Ext.define('Ux.chart.Line',{
    extend: 'Ext.Component',

    xtype: 'chartline',

    config: {
        chartCfg:  {
           nostroke: false,   // lines between points are drawn
           axis: "0 0 1 1",   // draw axes on the left and bottom
           symbol: "circle",    // use a filled circle as the point symbol
           smooth: true,      // curve the lines to smooth turns on the chart
           dash: "-",         // draw the lines dashed
           colors: [
             "#995555",       // the first line is red  
             "#555599"        // the second line is blue
           ]
         },
         chartData: {
            x: [],
            y: []
         }
    },

    updateChartData: function(data, oldData) {
        var el = this.element;

        if(oldData && oldData.x.length > 0){
            this.canvas.clear();
        }

        if(data && data.x.length > 0){
            if(!Ext.isDefined(this.canvas))
                this.canvas = Raphael(this.innerElement.createChild({tag: "div"}).dom);
          
            this.canvas.linechart(10,10,390,180,data.x,data.y,this.getChartCfg());
        }
    }
});
*/