import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function reduxHelper (component, actions) {
  function mapStateToProps (state) {
    return {
      ...state
    };
  }

  function mapDispatchToProps (dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
}
