import React from 'react';
import PropTypes from 'prop-types';

const App = ({ header, main }) => (
  <div className="container">
    {header}
    {main}
  </div>
);

export default App;

App.propTypes = {
  header: PropTypes.object.isRequired,
  main: PropTypes.object.isRequired
};
