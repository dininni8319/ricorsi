import { useReducer, useCallback } from 'react';
import axios from 'axios';
import { FETCHING, SUCCESS, ERROR } from "./actionTypes";
import ricorsiReducer, { initialState } from './ricorsiRedurer';
import { Methods } from "../interfaces/interfaces";

const useApiRequest = (endpoint: string, { verb = 'get', params = {} } = {}) => {

  const [ state, dispatch ] = useReducer(ricorsiReducer, initialState);

  const makeRequest = useCallback(async () => {

      dispatch({ type: FETCHING });
      
      try {
        
        const response = await axios[verb as Methods](endpoint, params);
        
        dispatch({ type: SUCCESS, response });
      } catch (error: unknown) {
       
        // dispatch({ type: ERROR, error});
      } 
      
  },[endpoint, verb, params])
  
  return [state, makeRequest]
  
}

export default useApiRequest;
