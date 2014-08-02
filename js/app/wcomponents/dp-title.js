import achilles from '../../vendors/achilles/achilles';

Polymer("dp-title", {
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
        });
      });
    }

    if (this.source !== null) {
      loadContent(this.source);
    }

  }

});
