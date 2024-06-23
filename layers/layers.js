var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGraydark_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIStandard_2 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRISatellite_3 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Jangkauan_Fasilitas_Kesehatan_4 = new ol.format.GeoJSON();
var features_Jangkauan_Fasilitas_Kesehatan_4 = format_Jangkauan_Fasilitas_Kesehatan_4.readFeatures(json_Jangkauan_Fasilitas_Kesehatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan_Fasilitas_Kesehatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan_Fasilitas_Kesehatan_4.addFeatures(features_Jangkauan_Fasilitas_Kesehatan_4);
var lyr_Jangkauan_Fasilitas_Kesehatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan_Fasilitas_Kesehatan_4, 
                style: style_Jangkauan_Fasilitas_Kesehatan_4,
                popuplayertitle: "Jangkauan_Fasilitas_Kesehatan",
                interactive: true,
    title: 'Jangkauan_Fasilitas_Kesehatan<br />\
    <img src="styles/legend/Jangkauan_Fasilitas_Kesehatan_4_0.png" /> Lokasi sangat dekat<br />\
    <img src="styles/legend/Jangkauan_Fasilitas_Kesehatan_4_1.png" /> Lokasi dekat<br />\
    <img src="styles/legend/Jangkauan_Fasilitas_Kesehatan_4_2.png" /> Lokasi sedang<br />\
    <img src="styles/legend/Jangkauan_Fasilitas_Kesehatan_4_3.png" /> Lokasi jauh<br />\
    <img src="styles/legend/Jangkauan_Fasilitas_Kesehatan_4_4.png" /> Lokasi sangat jauh<br />'
        });
var format_Pemukiman_5 = new ol.format.GeoJSON();
var features_Pemukiman_5 = format_Pemukiman_5.readFeatures(json_Pemukiman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_5.addFeatures(features_Pemukiman_5);
var lyr_Pemukiman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_5, 
                style: style_Pemukiman_5,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_5.png" /> Pemukiman'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_6.png" /> Jalan'
            });
var format_DataFaskes_7 = new ol.format.GeoJSON();
var features_DataFaskes_7 = format_DataFaskes_7.readFeatures(json_DataFaskes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataFaskes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataFaskes_7.addFeatures(features_DataFaskes_7);
var lyr_DataFaskes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataFaskes_7, 
                style: style_DataFaskes_7,
                popuplayertitle: "Data Faskes",
                interactive: true,
    title: 'Data Faskes<br />\
    <img src="styles/legend/DataFaskes_7_0.png" /> Puskesmas<br />\
    <img src="styles/legend/DataFaskes_7_1.png" /> Puskesmas Pembantu<br />\
    <img src="styles/legend/DataFaskes_7_2.png" /> Rumah Sakit<br />'
        });
var format_batas_administrasi_kecamatan_8 = new ol.format.GeoJSON();
var features_batas_administrasi_kecamatan_8 = format_batas_administrasi_kecamatan_8.readFeatures(json_batas_administrasi_kecamatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_administrasi_kecamatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_administrasi_kecamatan_8.addFeatures(features_batas_administrasi_kecamatan_8);
var lyr_batas_administrasi_kecamatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_administrasi_kecamatan_8, 
                style: style_batas_administrasi_kecamatan_8,
                popuplayertitle: "batas_administrasi_kecamatan",
                interactive: true,
                title: '<img src="styles/legend/batas_administrasi_kecamatan_8.png" /> batas_administrasi_kecamatan'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_ESRIGraydark_1.setVisible(true);lyr_ESRIStandard_2.setVisible(true);lyr_ESRISatellite_3.setVisible(true);lyr_Jangkauan_Fasilitas_Kesehatan_4.setVisible(true);lyr_Pemukiman_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_DataFaskes_7.setVisible(true);lyr_batas_administrasi_kecamatan_8.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_ESRIGraydark_1,lyr_ESRIStandard_2,lyr_ESRISatellite_3,lyr_Jangkauan_Fasilitas_Kesehatan_4,lyr_Pemukiman_5,lyr_Jalan_6,lyr_DataFaskes_7,lyr_batas_administrasi_kecamatan_8];
lyr_Jangkauan_Fasilitas_Kesehatan_4.set('fieldAliases', {'fid': 'fid', 'Jang_fkes': 'Jang_fkes', 'fid_2': 'fid_2', 'Jangkauan_jln': 'Jangkauan_jln', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'nilai': 'nilai', });
lyr_Pemukiman_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_6.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_DataFaskes_7.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_batas_administrasi_kecamatan_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_Jangkauan_Fasilitas_Kesehatan_4.set('fieldImages', {'fid': 'TextEdit', 'Jang_fkes': 'TextEdit', 'fid_2': 'TextEdit', 'Jangkauan_jln': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'nilai': 'TextEdit', });
lyr_Pemukiman_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_6.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_DataFaskes_7.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_batas_administrasi_kecamatan_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Jangkauan_Fasilitas_Kesehatan_4.set('fieldLabels', {'fid': 'no label', 'Jang_fkes': 'inline label - visible with data', 'fid_2': 'no label', 'Jangkauan_jln': 'inline label - visible with data', 'NAMOBJ': 'no label', 'REMARK': 'inline label - visible with data', 'nilai': 'no label', });
lyr_Pemukiman_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_DataFaskes_7.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', });
lyr_batas_administrasi_kecamatan_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', });
lyr_batas_administrasi_kecamatan_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});