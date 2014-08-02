import achilles from '../../vendors/achilles/achilles';

class Page  extends achilles.Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "data/pages.json");

    //Getters and Setters : properties

    Object.defineProperty(this, "label", {
      get: function (){ return this.get("label")} ,
      set: function (value) { this.set("label",value); }
    });

    Object.defineProperty(this, "url", {
      get: function (){ return this.get("url")} ,
      set: function (value) { this.set("url",value); }
    });

    Object.defineProperty(this, "source", {
      get: function (){ return this.get("source")} ,
      set: function (value) { this.set("source",value); }
    });

    Object.defineProperty(this, "id", {
      get: function (){ return this.get("_id")} ,
      set: function (value) { this.set("_id",value); }
    });
  }
}

export default Page;

/*
 [
 {"_id":"home", "label":"Home", "url":"/"},
 {"_id":"page1", "label":"Page 1", "url":"pages/page1"},
 {"_id":"page2", "label":"Page 2", "url":"pages/page2"}
 ]
 */