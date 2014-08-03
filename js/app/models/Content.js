import achilles from '../../vendors/achilles/achilles';

class Content  extends achilles.Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "data/contents.json");

    Object.defineProperty(this, "location", {
      get() { return this.get("location")} ,
      set(value) { this.set("location",value); }
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

export default Content;