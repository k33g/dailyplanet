import Request from './Request';

class Collection {
  constructor (model, url, models) {
    this.model = model;
    this.url = url !== undefined ? url : "";
    this.models = models !== undefined ? models : [];

    this.observers = [];
  }

  addObserver (observer) {
    this.observers.push(observer);
  }

  notifyObservers (context) {
    this.observers.forEach((observer) => {
      observer.update(context)
    })
  }


  add (model) {
    this.models.push(model);
    return this;
  }

  each (callbck) {
    this.models.forEach(callbck)
  }

  filter (callbck) {
    return this.models.filter(callbck)
  }

  size () { return this.models.length; }

  fetch () {

    return new Request(this.url).get().then((models) => {
      this.models = []; /* empty list */
      models.forEach((fields) => {
        this.add(new this.model(fields));
      })
      this.notifyObservers("fetch");
    })

  }

}

export default Collection;

