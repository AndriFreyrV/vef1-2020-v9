import { el, element, formatDate } from './lib/utils';
// importa öðru sem þarf...
import { fetchEarthquakes } from './lib/earthquakes';

import { createPopup, init, addMarker } from './lib/map';

function addEarthquakes(f) {
  const marker = addMarker(f);
  const eq = el(
    'li',
    el(
      'div',
      el(
        'h2',
        `M ${f.properties.mag} - ${f.properties.place}`,
      ),
      el(
        'dl',
        el(
          'dt',
          'Tími',
        ),
        el(
          'dd',
          formatDate(f.properties.time),
        ),
        el(
          'dt',
          'Styrkur',
        ),
        el(
          'dd',
          `${f.properties.mag} á richter`,
        ),
      ),
      element(
        'div',
        { class: 'buttons' },
        null,
        element(
          'button',
          null,
          { click: () => createPopup(marker) },
          'Sjá á korti',
        ),
        element(
          'a',
          { href: f.properties.url, target: '_blank' },
          null,
          'Skoða nánar',
        ),
      ),

    ),
  );
  document.getElementsByClassName('earthquakes')[0].appendChild(eq);
}

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  init(document.getElementsByClassName('map')[0]);
  const dat = await fetchEarthquakes();
  document.querySelector('.loading').remove(); // remove loading
  dat.features.forEach(addEarthquakes);
});
