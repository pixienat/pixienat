var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_az_count70 = new ol.format.GeoJSON();
var features_az_count70 = format_az_count70.readFeatures(json_az_count70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_az_count70 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_az_count70.addFeatures(features_az_count70);var lyr_az_count70 = new ol.layer.Vector({
                source:jsonSource_az_count70, 
                style: style_az_count70,
                title: "az_count7"
            });

lyr_az_count70.setVisible(true);
var layersList = [baseLayer,lyr_az_count70];
lyr_az_count70.set('fieldAliases', {'FID_': 'FID_', 'NAME': 'NAME', 'diab_2010': 'diab_2010', 'obes_cnty': 'obes_cnty', 'groc_strs': 'groc_strs', 'conv_strs': 'conv_strs', });
lyr_az_count70.set('fieldImages', {'FID_': 'TextEdit', 'NAME': 'TextEdit', 'diab_2010': 'TextEdit', 'obes_cnty': 'TextEdit', 'groc_strs': 'TextEdit', 'conv_strs': 'TextEdit', });
lyr_az_count70.set('fieldLabels', {'FID_': 'no label', 'NAME': 'no label', 'diab_2010': 'header label', 'obes_cnty': 'header label', 'groc_strs': 'header label', 'conv_strs': 'header label', });
lyr_az_count70.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});