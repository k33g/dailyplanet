import achilles from '../../vendors/achilles/achilles';

class Content  extends achilles.Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "data/contents.json");
  }
}

export default Content;