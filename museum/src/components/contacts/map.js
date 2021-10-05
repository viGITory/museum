mapboxgl.accessToken = 'pk.eyJ1IjoicGFudG9yeSIsImEiOiJja3RvdWtrcTcwZ2JmMnVvYXhzcTJ1Ymx2In0.iHARQCH0cLkTZ2s52LQ-HQ';

const map = new mapboxgl.Map(
  {
    container: 'map',
    style: 'mapbox://styles/pantory/ckuepyadb72eu17mpjtnk0huw/draft',
    center: [2.3364, 48.86091],
    zoom: 15.77
  }
);

const marker1 = new mapboxgl.Marker({ color: '#171717', scale: 0.8 })
.setLngLat([2.3364, 48.86091])
.addTo(map);

const marker2 = new mapboxgl.Marker({ color: '#757575', scale: 0.8 })
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker3 = new mapboxgl.Marker({ color: '#757575', scale: 0.8 })
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker4 = new mapboxgl.Marker({ color: '#757575', scale: 0.8 })
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({ color: '#757575', scale: 0.8 })
.setLngLat([2.3365, 48.8625])
.addTo(map);

map.addControl(new mapboxgl.NavigationControl());
