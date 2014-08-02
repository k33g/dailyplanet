import achilles from '../../vendors/achilles/achilles';

Polymer("dp-page", {

  loadContent (source) {
    console.log("source", source)
    /*
     Load content, then highlight source code
    */
    new achilles.Request(source).get().then((data) => {
      this.$.content.innerHTML = this.converter.makeHtml(data);
      this.$.content.find("pre").all().forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
  },

  ready () {

    Object.assign(this.$.content, achilles.selectorAbility);

    this.converter = new Showdown.converter();

    if (this.source !== null) {
      this.loadContent(this.source);
    }

  },

  pageclickedSignal (e, pageToDisplay, sender) {
    this.loadContent(pageToDisplay.source);
  }

});
