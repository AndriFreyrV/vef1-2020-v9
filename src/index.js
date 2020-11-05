import { el, element, formatDate } from './lib/utils';
// importa öðru sem þarf...
import {fetchEarthquakes} from './lib/earthquakes';

import {createPopup, init, addMarker} from './lib/map';

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  init(document.getElementsByClassName('map')[0]);
  let map = document.getElementById("mapid");
  const dat = await fetchEarthquakes();
  console.log(dat.features);
  for(let f of dat.features){
    addMarker(f.geometry.coordinates[1],f.geometry.coordinates[0]);
    console.log(f.properties.mag);
    const eq = el(
      'li',
      el(
        'div',
        el(
          'h2',
          `M ${f.properties.mag} - ${f.properties.place}`
        ),
        el(
          'dl',
          el(
            'dt',
            'Tímitímitími'
          ),
          el(
            'dd',
            formatDate(f.properties.time)
          ),
          el(
            'dt',
            "Styrkur"
          ),
          el(
            'dd',
            `${f.properties.mag} á richter`
          )
        ),
        element(
          'div',
          {'class': 'buttons'},
          null,
          element(
            'button',
            null,
            {click: () => createPopup(f.geometry.coordinates[1],f.geometry.coordinates[0], `${f.properties.mag} á richter`)},
            "Sjá á korti"
          ),
          element(
            'a',
            {'href' : f.properties.url, 'target': '_blank'},
            null,
            "Skoða nánar"
          )
        )
        
      )
    );
    document.getElementsByClassName("earthquakes")[0].appendChild(eq);
  }
});
