import { combineReducers, ActionReducer } from '@ngrx/store';

import {compose} from "@ngrx/core";
import {createSelector} from 'reselect';



import * as fromReportEntityReducer from "../../reducers/reportEntityReducer";


export interface State{
reportEntity : fromReportEntityReducer.ReportEntityState;
}


const reducers = {
reportEntity : fromReportEntityReducer.reportEntityReducer
};

const combinedReducer : ActionReducer<State> = combineReducers(reducers);

export function reducer(state : any,action : any){
	return combinedReducer(state,action);
}
export const getReportEntityState = (state : State) => state.reportEntity;
export const getReportEntity = createSelector(getReportEntityState,fromReportEntityReducer.getReducerReportEntity);
