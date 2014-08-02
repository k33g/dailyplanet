import achilles from '../../vendors/achilles/achilles';
import Content from './Content';

class Contents extends achilles.Collection {

  constructor (contents) {
    super(Content,"data/contents.json",contents);
  }
}

export default Contents;