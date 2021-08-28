/**
    * Renders a <AuthButton/> component
    * @param {String}  url - url to perform the POST method
    * @param  {Object} data - object to send after JSON.stringify
    * @return {Promise} Promise, API response with status code 2xx 
    */
export async function postJSON (url, data) {
    return await fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
}