import React, { Component } from 'react';
import Landing from '../../components/Landing/Landing';
import UserOnboarding from '../../components/UserOnboarding/UserOnboarding';

import ls from 'local-storage';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  scrollToRef = () => {
    window.scrollTo({
      top: this.scrollRef.current.offsetTop,
      left: 0,
      behavior: 'smooth'})
  }

  clearPreviousGroups = () => {
    console.log('clearing previous groups')
    ls.remove('groupings');
    ls.remove('data');
    ls.remove('studentArr');
  }

  render() {
    return (
      <main>
        <Landing 
          handleOnboarding={this.scrollToRef}
          handleMakeGroupsButton={this.clearPreviousGroups}
        />
        <UserOnboarding passRef={this.scrollRef} />
      </main>
    );
  }
}

export default LandingPage;