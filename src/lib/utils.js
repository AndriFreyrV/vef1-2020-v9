
/**
 * Create an element with attributes and events, and append elements or
 * strings to it.
 * 
 * Usage:
 *  const el = element(
 *    'button',
 *    { 'class': 'button' },
 *    { click: () => { ... } },
 *    'Takki'
 *   );
 *  returns
 *  <button class="button">Takki</button> with a click handler.
 * 
 * @param {string} name Element name
 * @param {object} attributes Object containing attributes to attach to element.
 * @param {object} events Object of events to add to element.
 * @param  {...any} children List of elements or strings to append to element.
 * @returns {object} HTML element.
 */
export function element(name, attributes = null, events = null,...children) {
  const el = document.createElement(name);

  for (const child of children) {
    if (!child) {
      continue;
    }

    if (attributes) {
      for (const attrib in attributes) {
        el.setAttribute(attrib, attributes[attrib]);
      }
    }

    if (events) {
      for (const event in events) {
        el.addEventListener(event, events[event]);
      }
    }

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }

  return el;
}

/**
 * Simplified element function.
 * Creates an element and append elements or strings to it.
 * 
 * @param {string} name Element name
 * @param  {...any} children List of elements or strings to append to element.
 * @returns {object} HTML element.
 */
export function el(name, ...children) {
  return element(name, null, null, ...children);
}

/**
 * Format a timestamp as dd.mm.yyyy hh:mm:ss e.g. "01.11.2020 12:00:00".
 * 
 * @param {number} timestamp Unix timestamp to format
 * @returns {string} Formatted string.
 */
export function formatDate(timestamp) {
  let d = new Date(timestamp);
  let seconds = d.getSeconds();
  let seconds_string = seconds >=10 ? String(seconds): `0${seconds}`;
  let day = d.getDate();
  let day_string = day >=10 ? String(day): `0${day}`;
  let month = d.getMonth()+1;
  let month_string = month >=10 ? String(month): `0${month}`;
  let year = String(d.getFullYear());
  let hour = d.getHours();
  let hour_string = hour >=10 ? String(hour): `0${hour}`;
  let minute = d.getMinutes();
  let minute_string = minute >=10 ? String(minute): `0${minute}`;
  let second = d.getSeconds();
  let secondString = minute >=10 ? String(second): `0${second}`;


  return `${day_string}.${month_string}.${year} ${hour_string}:${minute_string}:${secondString}`;
  
}
