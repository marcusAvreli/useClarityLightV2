import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import {skip} from 'rxjs/operators';

import {ReplaySubject} from 'rxjs';

import  {from} from 'rxjs/observable/from';

@Injectable()

export class CsvService {                              

	public myReports: Observable<any[]> ;

	private dataObs$ = new ReplaySubject(1);

	private myArray : any[] = [];

	private firstRun : boolean = true;

	constructor(private http : HttpClient){}

	public csvRead(fileName:string):Observable<any>{                          

	   

		this.http.get('assets/'+fileName+'.csv',{responseType : 'text'}).subscribe(data => {

						if(data !=''){

						let csvToRowArray=data.split('\r\n');

	   

						this.dataObs$.next(csvToRowArray);     

						}

	   

					   

		});

		return this.dataObs$;

   

	}

}

 