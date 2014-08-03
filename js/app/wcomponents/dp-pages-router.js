import Pages from '../models/Pages';
import achilles from '../../vendors/achilles/achilles';

Polymer("dp-pages-router", {
  ready() {

    var pages = new Pages();

    /* Load pages collection */
    pages.fetch().then(() => {

      this.pages = pages.models;

      var router = new achilles.Router();

      router.add("/pages/{v}", (args)=>{
        //console.log("page-> ", args)

        var pageToDisplay = pages.filter((page)=>{
          return page.id == args[0]
        })[0]

        this.asyncFire('core-signal', {name: "pageclicked", data: pageToDisplay});
      });

      router.listen()

    });
  }
});
