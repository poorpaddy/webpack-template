import {combineReducers}  from 'redux';
import {routerReducer}  from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as uiReducer} from 'redux-ui';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  ui: uiReducer
});
