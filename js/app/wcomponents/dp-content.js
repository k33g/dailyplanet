import Contents from '../models/Contents';
import achilles from '../../vendors/achilles/achilles';

Polymer("dp-content", {
  ready() {
    Object.assign(this.$.content, achilles.selectorAbility);

    this.converter = new Showdown.converter();

    /*
      Load content, then highlight source code
    */

    var loadContent = (source) => {

      new achilles.Request(source).get().then((data) => {
        this.$.content.innerHTML = this.converter.makeHtml(data);

        this.$.content.find("pre").all().forEach((block) => {
          hljs.highlightBlock(block);
        }).catch((error) => {
          console.log("error", error)
        });
      });
    }

    if (this.source !== null) {
      loadContent(this.source);
    } else {

      var contents = new Contents();

      contents.fetch().then(() => {
        var source = contents.filter((content) => {
          return content.get("location") == this.location;
        })[0].get("source");

        loadContent(source);

      }).catch((error) => {
        console.log("error contents collection", error)
      });
    }

  }
});

