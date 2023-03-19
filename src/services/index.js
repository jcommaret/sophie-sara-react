/** This file is used to define all services
 ** that will be used in the application
 **/

/** API_URL LOCALHOST, change this when in production */
const API_URL = "http://www.sophie-sara.com/wp-json/wp/v2"

/**
 * This function to create a fetch request to the API and return the data in json format
 * @param {string} API_URL api public url
 * @param {string} url service defined routes
 * @returns data from API
 */

export function getData(url) {
  if (url) {
    return fetch(`${API_URL}/${url}`).then(
      async (res) => await res.json()
    )
  } else {
    return fetch(`${API_URL}/`).then(async (res) => await res.json())
  }
}
