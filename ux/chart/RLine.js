Ext.define('Ux.chart.RLine',{
    extend: 'Ext.Component',

    xtype: 'rchartline',

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
    initialize: function(){
      
      this.canvas = Raphael(this.innerElement.createChild({tag: "div", cls: 'raphael-chartWrapper'}).dom);

      this.on('painted',function(){
          var data = this.getChartData();     
          
          this.canvas.linechart(10,10,390,180,data.x,data.y,this.getChartCfg());
        });

    }
});