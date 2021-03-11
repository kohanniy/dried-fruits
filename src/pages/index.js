import './index.css';

import MainNav from '../components/MainNav';
import Search from '../components/Search';

import {
  mainNavSelectors,
  searchSelectors,
} from '../utils/constants';

import {
  scrollTo,
} from '../utils/utils';

const handleLinkClick = () => {
  console.log('ghbdtn');
};

const mainNav = new MainNav(mainNavSelectors, handleLinkClick);
const search = new Search(searchSelectors, scrollTo);

mainNav.enable();
search.enable();
