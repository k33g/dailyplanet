#Achilles - MV* ES6 fashion

##Let's talk about Achilles!

**Achilles** is a **MV*** Javascript framework *"à la Backbone"*. **Another one?!**, yes but written with **ECMAScript 6**!.

Achilles has 5 major components:

- Model
- Collection
- Router
- Request (ajax features) used by Model and Collection
- *View (not available, work in progress)*

... and a very little dom selector (see `selector.js`), and a dom selector ability (see `selector.ability.js`) to add selector ability to any node of the dom. It's useful when working with **Polymer** inside a component:

    Object.assign(this.$.content, achilles.selectorAbility);
    this.$.content.find("pre").all().forEach((block) => {
        /* do something with block */
    })

Achilles is **"View" agnostic**, you can use with what you want (I use it with **Polymer** and it's a great combo).

**Achilles is a baby, it still lacks a lot of features**.

###Model

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

###Collection

    class Contents extends achilles.Collection {
    
      constructor (contents) {
        super(Content,"data/contents.json",contents);
      }
    }
    
###Router

    var router = new achilles.Router()
    
    router.add("/humans/{v}", (args)=>{
      /* v == args[0] */ 
    });
    
    router.add("/humans", (args)=>{ /* foo */ });
    
    router.add("/humans/firstname/{v}/lastname/{v}", 
        (args)=>{
            console.log("some humans", args)
    });
        
    router.listen();

###Request

    new achilles.Request("/humans/bob")
        .get()
        .then((data) => {})
        .catch((error) => {});


##Backlog
    
 - View
 - ???