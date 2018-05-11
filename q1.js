$(document).ready(function() {
  $('.parallax').parallax();
  $('.sidenav').sidenav();

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
  map.addControl(geocoder);
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
    // map.addSource('paid', {
    //     type: 'line',
    //     url: '#lines.source.data.features.properties.color'
    // });
    map.addLayer({
      'id': 'paid',
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
                  'color': '#0433FF' // blue
                },
                'geometry': {
                  'type': 'LineString',
                  'coordinates': [
                    [-105.28062926091508,40.01569653408774],
                    [-105.2809438966849,40.016571508660576],
                    [-105.28129076324107,40.01755654371817],
                    [-105.28159260595864,40.018397207049134]
                  ]
                }
              },{
                'type': 'Feature',
                'properties': {
                  'color': '#0433FF' // blue
                },
                'geometry': {
                  'type': 'LineString',
                  'coordinates': [
                    [-105.2805830960439,40.01566929194962],
                    [-105.27934720497915,40.015933387514764],
                    [-105.27804369351013,40.01619831668623]
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
                    [-105.27570328231147,40.017655990459104],
                    [-105.27542061146882,40.01677225602228]
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
                    [-105.27797329167466,40.016204657645744],
                    [-105.2754315801184,40.01673596374184]
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
                      [-105.27800955195346,40.01626812644179],
                      [-105.27806172454105,40.01640061530989],
                      [-105.27806172454105,40.016665592280305],
                      [-105.27822922608946,40.016878444420655],
                      [-105.27901340111454,40.01915336973801]
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
                    [-105.28264409267116,40.017403340994775],
                    [-105.28295515524904,40.018309319531]
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
                  [-105.29147012605384,40.01169327310822],
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
                  [-105.27662110557027, 40.01966032690248],
                  [-105.27007494060508,40.02102017064203]

                ]
              }
            },{
              'type': 'Feature',
              'properties': {
                'color': '#00FDFF' // light blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.28670870331922,40.0165513867224],
                  [-105.2914906544681,40.015558747981686]


                ]
              }
            },{
              'type': 'Feature',
              'properties': {
                'color': '#00FDFF' // light blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.29146096851576,40.015480178673215],
                  [-105.28669937136652,40.01645306002197]


                ]
              }
            },{
              'type': 'Feature',
              'properties': {
                'color': '#00FDFF' // light blue
              },
              'geometry': {
                'type': 'LineString',
                'coordinates': [
                  [-105.28651906249193,40.01649591125303],
                  [-105.2862448809349,40.01562140623372]


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
                  [-105.27609755897231,40.01868721212625],
                  [-105.27577831828472,40.01786552696984]



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
                  [-105.2836929521471,40.016568877932656],
                  [-105.27592039128209,40.01818307487474],



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
                  [-105.27797329167466,40.016204657645744],
                  [-105.27628024452514, 40.016550373083476]



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
                  [-105.27928974262802,40.01596401434014],
                  [-105.28030305278686,40.01886951875579]



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
                  [-105.28319429353674,40.015130166409165],
                  [-105.28067862348745,40.015648301794954]



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
                  [-105.28322151681448,40.01495645989456],
                  [-105.28343285157256,40.01406641337695],
                  [-105.28348196508868,40.01354293123646],
                  [-105.2831799359197,40.01261842180932]



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

  // var toggleableLayerIds = [ 'paid', 'free' ];




});
