import { Action } from '@ngrx/store'

import {ReportEntityModel} from "../models/reportEntity.model";

import * as MyReportActions from '../actions/reportEntityActions';

import { createSelector } from 'reselect';

import {Observable} from 'rxjs/Observable';

import {Subscription} from 'rxjs/Subscription';

export interface ReportEntityState {

    ReportEntityModel: ReportEntityModel[];

               

    isLoadingCourses: boolean;

    selectedCourse: any;

    error: any;

    //courseLessons: Lesson[];

}

 

const ReportEntityInitialState: ReportEntityState = {

               

                ReportEntityModel : [{id:null,name:null,displayName:null,description:null}],

               

               

               

    isLoadingCourses: true,

               

    selectedCourse: "check_this",

    error: null,

    //courseLessons: null

}

 

export function reportEntityReducer(state2=ReportEntityInitialState, action2: MyReportActions.Actions) {

                switch(action2.type) {

        case MyReportActions.GET_REPORT_ENTITY:

                                                //console.log("GET_REPORT_ENTITY"); 

                                                //const book = action2.payload;

 

                                                //return book;

                                                return Object.assign({}, state2, {

                                                                ReportEntityModel: [{id:-1,name:"n/a",displayName:"n/a",description:"n/a"}],

                                                               

                                                               

                                                                isLoadingCourses: true,

                                                                selectedCourse: null,

                                                                error: null

                                                }); 

                                               

 

                                case MyReportActions.REPORT_ENTITY_COMPLETE:

                                                //console.log("REPORT_ENITY_COMPLETE:"+action2.payload);

                                                let  obs = action2.payload;                          

                                                return Object.assign({}, state2, {

                                                                ReportEntityModel: action2.payload,

                                                                isLoadingCourses: false,

                                                                selectedCourse: null,

                                                                error: null

                                                });          

                                default:

                                                //console.log("default");

           return state2;

                }

}

export const getReducerReportEntity = (state2: ReportEntityState) => state2.ReportEntityModel