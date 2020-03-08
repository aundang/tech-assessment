import React, { PureComponent } from 'react';

class AppLayout extends PureComponent {
  render() {
    return (
      <div className="AppLayoutContainer">
        <div className="content">{ this.props.children }</div>
      </div>
    );
  }
}

export default AppLayout;
