import { 
  ESTIMATION_HOUSING_UPDATE,
  ESTIMATION_HOUSING_VALIDATION_ERROR,
  ESTIMATION_HOUSING_VALIDATION_SUCCESS,
  ESTIMATION_BENEFIT_VALIDATION_SUCCESS,
  ESTIMATION_BENEFIT_VALIDATION_ERROR,
  ESTIMATION_BENEFIT_UPDATE,
  FETCH_ESTIMATION,
} from '../actions/typesAction';

const initState = {
  calculation: {
    totalDuration: 0,
    totalPrice: 0,
  },
  settings: {
    serviceId: 1,
    housingCategoryId: 1,
    housingSizeId: null,
    housingSpecificity: null,
    houseworkFrequencyId: null,
    houseworkPersonalization: {     
      oven: 0,
      fridge: 0,
      bed: 0,
      vacuum: false,
      product_ecological: false,
      product_standard: false,
      cat: '',
      dog: '',
    },
  },
  housingSuccess: false,
  housingError: false,
  housingErrorsList: {},
  benefitSuccess: false,
  benefitError: false,
  benefitErrorsList: {},
};

const estimationReducer = (state = initState, action) => {
  switch (action.type) {
    case ESTIMATION_HOUSING_UPDATE:
      return {
        ...state,
        ...{ settings: action.payload },
      };

    case ESTIMATION_HOUSING_VALIDATION_SUCCESS:
      return {
        ...state,
        housingSuccess: true,
        housingError: false,
        housingErrorsList: {},
      };

    case ESTIMATION_HOUSING_VALIDATION_ERROR:
      return {
        ...state,
        housingSuccess: false,
        housingError: true,
        housingErrorsList: action.payload,
      };

    case ESTIMATION_BENEFIT_UPDATE:
      return {
        ...state,
        ...{ settings: action.payload },
      };

    case ESTIMATION_BENEFIT_VALIDATION_SUCCESS:
      return {
        ...state,
        benefitSuccess: true,
        benefitError: false,
        benefitErrorsList: {},
      };

    case ESTIMATION_BENEFIT_VALIDATION_ERROR:
      return {
        ...state,
        benefitSuccess: false,
        benefitError: true,
        benefitErrorsList: action.payload,
      };

    case FETCH_ESTIMATION:
      return {
        ...state,
        ...{ calculation: action.payload },
      };

    default:
      return {
        ...state,
      };
  }
};

export default estimationReducer;
