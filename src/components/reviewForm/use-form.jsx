import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: '',
  review: '',
  grade: 0
};

const SET_NAME_ACTION_TYPE = 'setName';
const SET_REVIEW_ACTION_TYPE = 'setReview';
const SET_INCREASE_GRADE_ACTION_TYPE = 'setIncreaseGrade';
const SET_DECREASE_GRADE_ACTION_TYPE = 'setDecreaseGrade';
const SET_DEFAULT_VALUE = 'setDefaultValue';
const SEND_RESULT = 'sendResult';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_NAME_ACTION_TYPE:
      return {
        ...state,
        name: payload
      };
    case SET_REVIEW_ACTION_TYPE:
      return {
        ...state,
        review: payload
      };
    case SET_INCREASE_GRADE_ACTION_TYPE: {
      const newValue = state.grade + 1 >= 5 ? 5 : state.grade + 1;
      return {
        ...state,
        grade: newValue
      }
    }
    case SET_DECREASE_GRADE_ACTION_TYPE: {
      const newValue = state.grade - 1 <= 0 ? 0 : state.grade - 1;
      return {
        ...state,
        grade: newValue
      }
    }
    case SET_DEFAULT_VALUE: {
      return {
        ...DEFAULT_FORM_VALUE
      }
    }
    case SEND_RESULT: {
      console.log('Result:', state);
      return state;
    }
    default:
      return state;
  }
}

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  const { name, review, grade } = form;

  const setName = (value) => {
    dispatch({type: SET_NAME_ACTION_TYPE, payload: value});
  };
  const setReview = (value) => {
    dispatch({type: SET_REVIEW_ACTION_TYPE, payload: value});
  };
  const setIncreaseGrade = () => {
    dispatch({type: SET_INCREASE_GRADE_ACTION_TYPE});
  };
  const setDecreaseGrade = () => {
    dispatch({type: SET_DECREASE_GRADE_ACTION_TYPE});
  }
  const setDefaultValue = () => {
    dispatch({type: SET_DEFAULT_VALUE});
  };
  const sendResult = () => {
    dispatch({type: SEND_RESULT , payload: null});
  };
  return {
    name,
    review,
    grade,
    setName,
    setReview,
    setIncreaseGrade,
    setDecreaseGrade,
    setDefaultValue,
    sendResult
  }

}