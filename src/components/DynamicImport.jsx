import React from 'react';
import PropTypes from 'prop-types';

const DynamicImport = (props) => {
  const LazyComponent = React.lazy(props.loader);
  return (
    <React.Suspense fallback={props.loading}>
      <LazyComponent />
    </React.Suspense>
  );
};

DynamicImport.propTypes = {
  loader: PropTypes.any,
  loading: PropTypes.any,
};

export default DynamicImport;
