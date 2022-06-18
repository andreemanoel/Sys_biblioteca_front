import React from 'react';
import { Route } from 'react-router-dom';

const RoutesPrivate = ({ component: Component, ...rest}) => {

  return (
    <Route
      {...rest}
      render={() => <Component {...rest} />
      }
    />
  )
}

export default RoutesPrivate;