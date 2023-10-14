import { Component,ElementRef,VERSION,OnInit,OnDestroy,ViewChild,AfterViewInit } from '@angular/core';
import {DropDown,ComboBox} from 'ui-components-light';
import {Store} from '@ngrx/store';
import * as fromRoot from './common/reducers';
import { ReportEntityModel } from './models/reportEntity.model';
//import { ReportFieldModel } from './models/ReportField.model';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import * as myReportActions from './actions/reportEntityActions';
//import * as ReportFieldActions from './actions/ReportFieldActions';
import { map, switchMap, catchError } from "rxjs/operators";

@Component({

  selector: 'app-root',

  template: `
    <div #divNote >
    </div>
    <br/>
<div id="x1" #divNote2 >
    </div>
    <div #DragAndDrop >
    </div>
  `,

  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit,AfterViewInit,OnDestroy{

  title = 'app';

  private myReports: Observable<ReportEntityModel[]>;
private  combobox:ComboBox;
private  comboboxFields:DropDown; 
  //private reportFieldsObs: Observable<ReportFieldModel[]>;

  //private reportFieldsFiltered: Observable<ReportFieldModel[]> = new Observable<ReportFieldModel[]>();

  private reportEntities : ReportEntityModel[] = [];

  //private ReportFields : ReportFieldModel[] = [];

  private subscription= new Subscription();

  versionAngular = `Angular version: v${VERSION.full}`;

    componentRef;
@ViewChild('divNote') input: ElementRef;
@ViewChild('divNote2') input2: ElementRef;

constructor(private store: Store<fromRoot.State>) {             
	this.loadReports();
	this.myReports = this.store.select(fromRoot.getReportEntity);
}




//https://angular.io/guide/observables


	public ngOnInit() : void{
		this.combobox = new ComboBox(this.input.nativeElement);
		this.combobox.selectedIndexChanged.addHandler(() => {
			this.reportEntitySelected(this.combobox.selectedIndex);
			//this.combobox.removeAt(this.combobox.selectedIndex);
		});
		
		this.subscription.add(
			this.myReports.subscribe(data =>{
			this.reportEntities = data;
			this.combobox.itemsSource = this.reportEntities;
			this.combobox.displayMemberPath = 'name';
		}));
		

	}

private reportEntitySelected(index:number){
	var selectedObject = this.combobox.selectedItem;	
	console.log("selected");
	
}
                public ngOnDestroy() : void{

                                this.subscription.unsubscribe();

                }

 

                public ngAfterViewInit(): void {                 

                               

                }

 

                private changed(selectedIndex : number) : void{

                                //report selected

                                console.log("report_selected");

                                let selectedObject = this.reportEntities[selectedIndex];

                                if(selectedObject){                                         

                                               
/*
                                                this.subscription.add(

                                                                filteredListObs.subscribe(filteredList => {                                              

                                                                                this.ReportFields= (filteredList);

                                                                                this.comboboxFields.itemsSource = this.ReportFields;

                                                                                this.comboboxFields.displayMemberPath = 'displayName';

                                                                               

                                                                })

                                                );
												*/

                                }

                }

                loadReports(){                 

                                this.store.dispatch({type: myReportActions.GET_REPORT_ENTITY,payload: "report_entity"});

                               // this.store.dispatch({type: ReportFieldActions.GET_REPORT_FIELDS,payload: "fields"});

                }

                private changedField(selectedIndex : number)    {

                                                //field of report selected

                                               

                                               // const selectedObject = this.ReportFields[selectedIndex];

                                                //this.comboboxFields.itemsSource =     this.ReportFields.splice(selectedIndex,1);

                                                //this.comboboxFields.itemsSource.removeAt(selectedIndex);

                                                //const ecv = <IEditableCollectionView>tryCast(this._cv, 'IEditableCollectionView');

                                                //console.log("=======EDITABLE_COLLECTION===========" +this.comboboxFields.listBox.editableCollection);

                                                console.log("selected_index_is:"+selectedIndex);
/*
                                                if(selectedIndex >-1){

                                                                this.comboboxFields.listBox.removeAt(selectedIndex);

                                                }
*/
                                                //this.comboboxFields.itemsSource.splice(selectedIndex,1);

                                                //var index = this.comboboxFields.collectionView.findIndex((item) => item.displayName === selectedObject.displayName);

                                                //  if(index >= 0) {

                                                //this.comboboxFields.collectionView.splice(index, 1);

                                // }

                                /*

                                                var example = {

                                               

                                                                name : selectedObject.name,

                                                                InputValue : selectedObject.displayName

                                                  }

                                               

                                                if(this.dragAndDrop){

                                                                this.dragAndDrop.appendDraggable(example);

                                                }else{

                                                                this.dragAndDrop = new DragAndDrop(this.DragAndDropEl.nativeElement,example);

                                                }

                                                */

                                               

                                               

                                               

                }

}

 