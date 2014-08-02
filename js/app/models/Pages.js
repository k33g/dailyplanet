import achilles from '../../vendors/achilles/achilles';
import Page from './Page';

class Pages extends achilles.Collection {

  constructor (pages) {
    super(Page,"data/pages.json",pages);
  }
}

export default Pages;