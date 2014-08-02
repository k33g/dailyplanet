export default class Router {
  constructor(properties) {
    this.routes = []
  }

  add (routeTemplate, method) { /*ie: routeTemplate = "/human/{v}/ok/{v}"*/

    routeTemplate+="/";

    var parametersPositions = [];
    var templatesPart = routeTemplate.split("/");

    templatesPart.forEach((part, index) => {
      if(part === "{v}") parametersPositions.push(index);
    });

    var routePattern = new RegExp(
      routeTemplate
        .replace(new RegExp("\/","g"),"\\\/")
        .replace(new RegExp("{v}","g"),".*")
    );

    this.routes.push({
      pattern: routePattern,
      method: method,
      parametersPositions: parametersPositions
    });

  }

  match (uri) {
    uri+="/";

    var selectedRoute = this.routes.filter((route) => {
      return uri.match(route.pattern)
    })[0];

    if(selectedRoute!== undefined) {
      var uriParts = uri.split("/");
      selectedRoute.parametersValues = [];

      selectedRoute.parametersPositions.forEach((position) => {
        selectedRoute.parametersValues.push(uriParts[position]);
      });

      if(selectedRoute!== undefined) selectedRoute.method(selectedRoute.parametersValues);

      //var clonedSelectedRoute = {};
      //Object.assign(clonedSelectedRoute, selectedRoute);
      //return clonedSelectedRoute;

      return selectedRoute.parametersValues; /* for tests */

      /*TODO: return only selectedRoute and call method on listen*/

    } else {
      /*TODO: explain what to do*/
    }

  }

  listen () { /* add filters */
    window.onpopstate = (event)=> { /*each time, JSON.stringify(event.state)*/
      this.match(window.location.hash.replace("#","/"));
    };

  }

  stop () {

  }

}

