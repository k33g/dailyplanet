import achilles from '../../vendors/achilles/achilles';

class Page  extends achilles.Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "data/pages.json");

    //Getters and Setters : properties

    Object.defineProperty(this, "label", {
      get() { return this.get("label")} ,
      set(value) { this.set("label",value); }
    });

    Object.defineProperty(this, "url", {
      get() { return this.get("url")} ,
      set(value) { this.set("url",value); }
    });

    Object.defineProperty(this, "source", {
      get() { return this.get("source")} ,
      set(value) { this.set("source",value); }
    });

    Object.defineProperty(this, "id", {
      get() { return this.get("_id")} ,
      set (value) { this.set("_id",value); }
    });
  }
}

export default Page;
