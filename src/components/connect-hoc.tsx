import React, { Component } from 'react';

import hoistStatics from 'hoist-non-react-statics';

import Connect from '../components/connect';
import { IMutation, IQuery } from '../interfaces/index';

export interface IHOCProps {
  query?: IQuery | IQuery[]; // Query or queries
  subscription?: IQuery; // Subscription Query object
  mutation?: IMutation; // Mutation map
  updateSubscription?: (
    prev: object | null,
    next: object | null
  ) => object | null; // Update query with subscription data
  cacheInvalidation?: boolean;
  cache?: boolean;
}

function connect(opts?: IHOCProps | ((_) => IHOCProps)) {
  return (Comp: any) => {
    const componentName = Comp.displayName || Comp.name || 'Component';

    class ConnectHOC extends Component {
      static displayName = `Connect(${componentName})`;
      props: any;

      constructor(props) {
        super(props);

        this.renderComponent = this.renderComponent.bind(this);
      }

      renderComponent(data) {
        return <Comp {...data} {...this.props} />;
      }

      render() {
        const connectProps =
          typeof opts === 'function' ? opts(this.props) : opts;

        return <Connect {...connectProps} children={this.renderComponent} />;
      }
    }

    return hoistStatics(ConnectHOC, Comp);
  };
}

export default connect;
