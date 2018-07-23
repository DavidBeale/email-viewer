import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

/*
 * Wrap a Pure Functional component in a HOC with connect (for redux)
 */
export default function withContainer(
  Component,
  stateToProps,
  actionsToProps,
  lifecycle
) {
  class Container extends PureComponent {
    componentDidMount() {
      if (lifecycle.componentDidMount) {
        lifecycle.componentDidMount.call(this);
      }
    }

    render() {
      return (
        <Component {...this.props} />
      );
    }
  }

  return connect(
    stateToProps,
    actionsToProps
  )(Container);
}
