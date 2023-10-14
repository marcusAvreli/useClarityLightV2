import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/debounceTime';

import 'rxjs/add/operator/skip';

import 'rxjs/add/operator/takeUntil';

//import 'rxjs/add/observable/map';

 

import {Subscription} from 'rxjs/Subscription';

import { Injectable } from '@angular/core';

import { Effect, Actions, toPayload } from '@ngrx/effects';

import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { empty } from 'rxjs/observable/empty';

import { of } from 'rxjs/observable/of';

import { map, switchMap, catchError } from "rxjs/operators";

 

import { CsvService } from './csvService';

//import * as book from '../actions/book';

import {ReportEntityModel} from '../models/reportEntity.model';

//import {ReportFieldModel} from '../models/ReportField.model';

import  {from} from 'rxjs/observable/from';

//import * as TaskResultActions from '../actions/taskResult';

import * as ReportEntityActions from  '../actions/reportEntityActions';

//import * as ReportFieldActions from  '../actions/ReportFieldActions';

 

 

 

/**

* Effects offer a way to isolate and easily test side-effects within your

* application.

* The `toPayload` helper function returns just

* the payload of the currently dispatched action, useful in

* instances where the current state is not necessary.

*

* Documentation on `toPayload` can be found here:

* https://github.com/ngrx/effects/blob/master/docs/api.md#topayload

*

* If you are unfamiliar with the operators being used in these examples, please

* check out the sources below:

*

* Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators

* RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35

*/

//https://medium.com/front-end-weekly/an-intro-to-ngrx-effects-ngrx-store-with-angular-4-c55c4d1d5baf

//https://github.com/ngrx/example-app/blob/ee0f331bf808525e003efa264b5065964c7f942b/src/app/effects/book.ts

 

@Injectable()

export class Effects {

               

                ReportEntityModel: ReportEntityModel[] =  [];

                //ReportFieldModel: ReportFieldModel[] =  [];

constructor(private actions$: Actions, private CsvService: CsvService) { }

 

                         //     Original

 

@Effect()

  searchTaskResult$: Observable<Action> = this.actions$

    .ofType(ReportEntityActions.GET_REPORT_ENTITY)

    .debounceTime(300)

    .map(toPayload)

    .switchMap(query => {

                return this.CsvService.csvRead(query)//.takeUntil(nextSearch$)

    .map(results => {                         

		results.shift();

		let  obs = from(results);                

		var subscription= new Subscription();

		subscription.add(

				obs.subscribe((response:any) => {           

				let csvToRowArray=response.split('\n');                                                                

				csvToRowArray.forEach(rowData =>{                                                     
						var data = rowData.split(',');
						this.ReportEntityModel.push({id:parseInt(data[0],10),name:data[1],displayName:data[2],description:data[3]});
					}
				)
			})

		);                            

		return new ReportEntityActions.ReportEntityCompleteAction(this.ReportEntityModel);



	});

 });
}
               