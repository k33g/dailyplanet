class Request {

  constructor (url) {
    this.request = new XMLHttpRequest();
    this.url = url;
  }

  url (url) {
    this.url = url;
    return this;
  }

  jsonp (params) {

    return new Promise((resolve, reject) => {

      this.callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());

      var script = document.createElement('script');
      script.id = this.callbackName;

      window[this.callbackName] = (data) => {
        delete window[this.callbackName];
        var findScript = document.querySelector("#"+this.callbackName);
        findScript.parentElement.removeChild(findScript);
        resolve(data);
      };

      script.src = this.url
        + (this.url.indexOf('?') >= 0 ? '&' : '?')
        + 'callback=' + this.callbackName +(params === undefined ? "" : "&"+params);

      document.body.appendChild(script);

      script.onerror = (error) => {
        reject(error);
      }
    });

  }

  sendRequest () { /*json or text only*/

    return new Promise((resolve, reject) => {
      this.request.open(this.method, this.url);
      this.request.onload = () => {
        // If the request was successful
        if (this.request.status === 200) {
          // Get the type of the response
          var type = this.request.getResponseHeader("Content-Type");
          // Check type
          if (type === "application/json") {
            resolve(JSON.parse(this.request.response)); // JSON response
          } else {
            resolve(this.request.response); // String response
          }
        } else { /* oups */
          reject(Error(this.request.statusText));
        }
      }
      // Handle network errors
      this.request.onerror = function() {
        reject(Error("Network Error"));
      };

      this.request.setRequestHeader("Content-Type", "application/json");
      this.request.send(this.method === undefined ? null : JSON.stringify(this.data));
    });
  }

  get (id) {
    this.url = id === undefined ? this.url : this.url + "/" + id;
    this.method = "GET";
    return this.sendRequest();
  }

  post (jsonData) {
    this.method = "POST";
    this.data = jsonData;
    return this.sendRequest();
  }

  put (jsonData, id) {
    this.url = id === undefined ? this.url : this.url + "/" + id;
    this.method = "PUT";
    this.data = jsonData;
    return this.sendRequest();
  }

  delete (id) {
    this.url = id === undefined ? this.url : this.url + "/" + id;
    this.method = "DELETE";
    return this.sendRequest();
  }
}

export default Request;
