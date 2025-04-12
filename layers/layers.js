var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_shape_terreno_2 = new ol.format.GeoJSON();
var features_shape_terreno_2 = format_shape_terreno_2.readFeatures(json_shape_terreno_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shape_terreno_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shape_terreno_2.addFeatures(features_shape_terreno_2);
var lyr_shape_terreno_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shape_terreno_2, 
                style: style_shape_terreno_2,
                popuplayertitle: 'shape_terreno',
                interactive: true,
                title: '<img src="styles/legend/shape_terreno_2.png" /> shape_terreno'
            });
var format_rioblancopredial_3 = new ol.format.GeoJSON();
var features_rioblancopredial_3 = format_rioblancopredial_3.readFeatures(json_rioblancopredial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rioblancopredial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rioblancopredial_3.addFeatures(features_rioblancopredial_3);
var lyr_rioblancopredial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rioblancopredial_3, 
                style: style_rioblancopredial_3,
                popuplayertitle: 'rioblancopredial',
                interactive: true,
    title: 'rioblancopredial<br />\
    <img src="styles/legend/rioblancopredial_3_0.png" /> A<br />\
    <img src="styles/legend/rioblancopredial_3_1.png" /> D<br />\
    <img src="styles/legend/rioblancopredial_3_2.png" /> G<br />\
    <img src="styles/legend/rioblancopredial_3_3.png" /> H<br />\
    <img src="styles/legend/rioblancopredial_3_4.png" /> I<br />\
    <img src="styles/legend/rioblancopredial_3_5.png" /> J<br />\
    <img src="styles/legend/rioblancopredial_3_6.png" /> L<br />\
    <img src="styles/legend/rioblancopredial_3_7.png" /> <br />' });

lyr_WazeWorld_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_shape_terreno_2.setVisible(true);lyr_rioblancopredial_3.setVisible(true);
var layersList = [lyr_WazeWorld_0,lyr_GoogleHybrid_1,lyr_shape_terreno_2,lyr_rioblancopredial_3];
lyr_shape_terreno_2.set('fieldAliases', {'codigo': 'codigo', 'vereda_cod': 'vereda_cod', 'codigo_ant': 'codigo_ant', 'codigo_nue': 'codigo_nue', 'c': 'c', 'NOMBRE': 'NOMBRE', 'ESTADO CIVIL': 'ESTADO CIVIL', 'COMUNA': 'COMUNA', 'DESTINO ECONOMICO': 'DESTINO ECONOMICO', 'AREA TERRENO': 'AREA TERRENO', 'AREA CONSTRUIDA': 'AREA CONSTRUIDA', 'AVALUO': 'AVALUO', });
lyr_rioblancopredial_3.set('fieldAliases', {'codigo_nue': 'codigo_nue', 'NOMBRE': 'NOMBRE', 'ESTADO CIV': 'ESTADO CIV', 'COMUNA': 'COMUNA', 'DESTINO EC': 'DESTINO EC', 'AREA TERRE': 'AREA TERRE', 'AREA CONST': 'AREA CONST', 'AVALUO': 'AVALUO', });
lyr_shape_terreno_2.set('fieldImages', {'codigo': 'TextEdit', 'vereda_cod': 'TextEdit', 'codigo_ant': 'TextEdit', 'codigo_nue': 'TextEdit', 'c': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO CIVIL': 'TextEdit', 'COMUNA': 'TextEdit', 'DESTINO ECONOMICO': 'TextEdit', 'AREA TERRENO': 'Range', 'AREA CONSTRUIDA': 'Range', 'AVALUO': 'Range', });
lyr_rioblancopredial_3.set('fieldImages', {'codigo_nue': 'TextEdit', 'NOMBRE': 'TextEdit', 'ESTADO CIV': 'TextEdit', 'COMUNA': 'TextEdit', 'DESTINO EC': 'TextEdit', 'AREA TERRE': 'TextEdit', 'AREA CONST': 'TextEdit', 'AVALUO': 'TextEdit', });
lyr_shape_terreno_2.set('fieldLabels', {'codigo': 'no label', 'vereda_cod': 'no label', 'codigo_ant': 'no label', 'codigo_nue': 'no label', 'c': 'no label', 'NOMBRE': 'no label', 'ESTADO CIVIL': 'no label', 'COMUNA': 'no label', 'DESTINO ECONOMICO': 'no label', 'AREA TERRENO': 'no label', 'AREA CONSTRUIDA': 'no label', 'AVALUO': 'no label', });
lyr_rioblancopredial_3.set('fieldLabels', {'codigo_nue': 'no label', 'NOMBRE': 'no label', 'ESTADO CIV': 'no label', 'COMUNA': 'no label', 'DESTINO EC': 'no label', 'AREA TERRE': 'no label', 'AREA CONST': 'no label', 'AVALUO': 'no label', });
lyr_rioblancopredial_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});