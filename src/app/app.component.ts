
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { HttpServiceService } from 'src/http-service.service';
@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent {

  totalCount: number = 0
  productList: any[] = []
  @Output() fn: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: HttpServiceService) {
    
  }

  ngOnInit() {
    this.service.getData().subscribe((ele) => {
      this.totalCount = ele.limit
      this.productList = ele.products
    })
  }

  
}

// //Action
// import { createAction } from '@ngrx/store'; 
// export const increment = createAction('[Counter] Increment'); 
// export const decrement = createAction('[Counter] Decrement'); 
// export const reset = createAction('[Counter] Reset');

// //Reducer
// import { createReducer, on } from '@ngrx/store'; 
// import { increment, decrement, reset } from './app.actions'; 
// import { AppState } from './app.state'; 
// export const initialState: AppState = { counter: 0 }; 

// export const appReducer = createReducer(initialState, on(increment, state => ({ ...state, counter: state.counter + 1 })), 
//                                                       on(decrement, state => ({ ...state, counter: state.counter - 1 })), 
//                                                       on(reset, state => ({ ...state, counter: 0 }))
//                                                     );

// //Selector
// import { createSelector } from '@ngrx/store'; 
// import { AppState } from './app.state'; 
// export const selectAppState = (state: { app: AppState }) => state.app; 
// export const selectCounter = createSelector( selectAppState, (state: AppState) => state.counter );

