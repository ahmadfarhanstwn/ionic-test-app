import React, { ReactElement } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface RouteWrapperProps extends RouteProps {
  component: React.ComponentType<any>;
  layout: React.ComponentType<any>;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}: RouteWrapperProps): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;