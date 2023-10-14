// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { ReportEntityModel } from '../models/reportEntity.model'

// Section 2
export const GET_REPORT_ENTITY       = '[MY_REPORT] GET_REPORT_ENTITY'
export const  REPORT_ENTITY_COMPLETE = '[MY_REPORT] REPORT_ENTITY_COMPLETE'

// Section 3
export class GetRprtEntity implements Action {
    readonly type = GET_REPORT_ENTITY

    constructor() {}
}
export class ReportEntityCompleteAction implements Action {
  readonly type = REPORT_ENTITY_COMPLETE;

  constructor(public payload: ReportEntityModel[]) { }
}



// Section 4
export type Actions = GetRprtEntity|ReportEntityCompleteAction