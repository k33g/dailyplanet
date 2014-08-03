export default class Router {
  constructor(properties) {
    this.routes = [];

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

      selectedRoute.method(selectedRoute.parametersValues, window.location.hash);

      //var clonedSelectedRoute = {};
      //Object.assign(clonedSelectedRoute, selectedRoute);
      //return clonedSelectedRoute;

      return selectedRoute.parametersValues; /* for tests */

    } else {
      /* something todo */
      return null
    }

  }

  listen () { /* add filters */

    /*first time*/
    this.match(window.location.hash.replace("#","/"));

    window.onpopstate = (event)=> { /*each time, JSON.stringify(event.state)*/
      this.match(window.location.hash.replace("#","/"));
    };

  }

  stop () {
    /* something todo*/
  }

}

/*
 var router = new Router()

 router.add("/humans/{v}", (args)=>{
 // v == args[0]
 })

 router.add("/humans", (args)=>{

 })

 router.add("/humans/firstname/{v}/lastname/{v}", (args)=>{
 console.log("some humans", args)
 })

 router.add("/", (args)=>{
 // href="#/"
 })

 router.add("", (args, hash)=>{ //all
 console.log("others uries", args, hash)
 })

 router.listen()

*/