import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import BottomNavigation from 'react-md/lib/BottomNavigations';

import LoremIpsum from 'components/LoremIpsum';
import PhoneDemo from './PhoneDemo';

export default class SimpleExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { page: 0, bottomNav: null };
  }

  componentDidMount() {
    this.content = findDOMNode(this).querySelector('.demo-content');
    this.setState({ bottomNav: this.refs.bottomNav }); // eslint-disable-line react/no-did-mount-set-state
  }

  setPage = (page) => {
    this.content.scrollTop = 0;
    this.setState({ page });
  };

  render() {
    const { bottomNav, page } = this.state;
    const actions = [{
      label: 'Recents',
      iconChildren: 'access_time',
    }, {
      label: 'Favorites',
      iconChildren: 'favorite',
    }, {
      label: 'Nearby',
      iconChildren: 'place',
    }];

    return (
      <PhoneDemo inset={false} bottomNav={bottomNav} className="fixed-example">
        <CSSTransitionGroup
          component="div"
          transitionName="cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
        >
          <LoremIpsum key={page} count={6} className="container text-container" />
        </CSSTransitionGroup>
        <BottomNavigation
          actions={actions}
          ref="bottomNav"
          dynamic={false}
          onChange={this.setPage}
        />
      </PhoneDemo>
    );
  }
}
