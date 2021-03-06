/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ux': 'ux'
});
 Ext.Loader.setConfig({ disableCaching: false });
//</debug>

Ext.application({
    name: 'LineChartDemo',

    requires: [
        'Ux.chart.Line',
        'Ux.chart.RLine'
    ],

    launch: function() {
        // Initialize the main view
        Ext.Viewport.add({
                xtype: 'tabpanel',
                fullscreen: true,
                tabBarPosition: 'bottom',

                items: [
                    {
                        title: 'NVD3',
                        xtype: 'chartline'
                    },
                    {
                        title: 'Raphael',
                        xtype: 'rchartline',
                        chartData: {
                            x: [1, 2, 3, 4, 5, 6, 7],
                            y: [12, 32, 23, 15, 17, 27, 22]
                        }
                    }
                ]
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
