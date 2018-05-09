$(document).ready(function() {
  $('.parallax').parallax();

  mapboxgl.accessToken = 'pk.eyJ1IjoiZWRpc29udG9vbGUiLCJhIjoiY2pncXdnajM2MGg2ejJ4cGUzdW92bDNzcCJ9.YG4_JLO78bqmlpBcLHzuWw';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-105.28348305225111, 40.013099904813714], // starting position [lng, lat]
    zoom: 1 // starting zoom
  });
  var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  });
  map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  }));
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }));
  map.addControl(new mapboxgl.FullscreenControl());


  // document.getElementById('info').appendChild(geocoder.onAdd('map'));
  // map.on('mousemove', function(e) {
  //   document.getElementById('info').innerHTML =
  //     // e.point is the x, y coordinates of the mousemove event relative
  //     // to the top-left corner of the map
  //     JSON.stringify(e.point) + '<br />' +
  //     // e.lngLat is the longitude, latitude geographical position of the event
  //     JSON.stringify(e.lngLat);
  // });


  map.on('load', function() {
    map.addSource('paid', {
        type: 'line',
        url: '#lines.source.data.features.properties.color'
    });
    map.addLayer({
      'id': 'lines',
      'type': 'line',
      'source': {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
              'type': 'Feature',
              'properties': {
                'color': '#0433FF' // blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.2837018042221,40.016564673234825],
                  [-105.28326258501241, 40.015153801444825],
                  [-105.28356532867943,40.016072218759916],
                  [-105.28078491700212, 40.01663948741316],
                  [-105.27583517116472, 40.017658628511896]
                ]
              }
            }, {
              'type': 'Feature',
              'properties': {
                'color': '#0433FF' // blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.27631497220557, 40.01952742658128],
                  [-105.27597683690172, 40.01872613925792],
                  [-105.27216719155857, 40.01949388255309]


                ]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'color': '#00FDFF' // light blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.28371010032444, 40.016032557560465],
                  [-105.2859144330055, 40.01557317635502]
                ]
              }
            }, {
              'type': 'Feature',
              'properties': {
                'color': '#00F900' // green
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.27872741561804, 40.01406576845193],
                  [-105.28348305225111, 40.013099904813714],
                  [-105.28427811645813, 40.012959380593344],
                  [-105.28707103431526, 40.01292815295338]

                ]
              }
            }, {
              'type': 'Feature',
              'properties': {
                'color': '#00FDFF' // light blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.2842499479499, 40.01911915893464],
                  [-105.27685060802743, 40.020674174337046],
                  [-105.27042570207286, 40.02200824817879]

                ]
              }
            }, {
              'type': 'Feature',
              'properties': {
                'color': '#00F900' // green
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.28321936397032, 40.01251408094018],
                  [-105.28297767585381, 40.011936971134276],
                  [-105.27837480134144, 40.01285715039489],
                  [-105.28418703230207, 40.011659304504406],
                  [-105.28721432653008, 40.011664744848825],
                  [-105.28718589263214, 40.01289518856575]
                ]
              }
            }, {
              'type': 'Feature',
              'properties': {
                'color': '#00FDFF' // light blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.28531789555299, 40.017880709836334],
                  [-105.28172208547981, 40.01863961056429],
                  [-105.27662110557027, 40.01966032690248]

                ]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'color': '#0433FF' // blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.28145632608522, 40.01758759440182],
                  [-105.28647876091595, 40.016518823554804]
                ]
              }
            },
            {
              'type': 'Feature',
              'properties': {
                'color': '#FF2600' // red
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.28121841344827,40.01761392603933],
                  [-105.27609755897231,40.01868721212625]


                ]
              }
            }
          ]
        }



      },
      'paint': {
        'line-width': 2,
        // Use a get expression (https://www.mapbox.com/mapbox-gl-js/style-spec/#expressions-get)
        // to set the line-color to a feature property value.
        'line-color': ['get', 'color']
      }
    });
  });

  var toggleableLayerIds = [ 'paid', 'free' ];




});
