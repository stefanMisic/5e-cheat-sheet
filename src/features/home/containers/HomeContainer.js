import React from 'react';
import { connect } from 'react-redux';

import { testRedux as testReduxAction } from '../modules';

const HomeContainer = ({ testData, testRedux }) => (
  <div>
    <h1>Hello, Redux: {testData}!</h1>
    <button onClick={() => testRedux('success')}>test redux</button>
  </div>
);

const mapDispatchToProps = {
  testRedux: testReduxAction,
};

const mapStateToProps = ({ home }) => ({
  testData: home.testData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
