import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { Car } from 'src/app/shared/models';
import { CarDataService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-hm-dropdown-search-async3',
  templateUrl: './hm.dropdown.search.async.component3.html',
  styleUrls: ['./hm.dropdown.search.async.component3.scss'],
})
export class HomeMadeDropdownSearchAsyncComponent3 implements OnInit, OnDestroy {
  @ViewChild('searchText') searchTextElement: ElementRef;

  private onDestroy$: Subject<boolean> = new Subject();

  displaying$: Observable<Car[]>;
  searchText: string;
  selectedItem;
  showItems = false;

  private displayingLookup$: Subject<string> = new Subject();

  constructor(private carDataService: CarDataService) {}

  ngOnInit() {
    this.displaying$ = this.displayingLookup$.pipe(
      tap((searching) => {
        console.log(`tapping 1 ........... search = `, searching);
        this.searchText = searching && searching.trim();
      }),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap(() => {
        return this.carDataService.getCarItems(20, 500).pipe(
          map((data) => {
            console.log(`switchMap ........... data.length = `, (data && data.length) || 0);
            let result: Car[] = [];
            result = data || [];

            result.forEach((item: Car) => {
              item.description = item.brand + ' - ' + item.model + ' : ' + item.year; // update each item here if necessary
            });

            if (this.searchText && this.searchText.length > 0) {
              result = result.filter((item: Car) => {
                return item.description.toLowerCase().includes(this.searchText);
              });
              if (result.length === 0) {
                console.log(`No item found with searchText = `, this.searchText);
              }
            }

            this.showItems = true;
            console.log(`switchMap ........... result.length = `, (result && result.length) || 0);
            return result;
          })
        );
      }),
      catchError((err) => {
        console.error(err);
        let result: Car[] = [];
        return of(result);
      })
      // takeUntil(this.onDestroy$)
    );
    // this.displayingLookup$.next('');
  }

  filterDropdown(e) {
    console.log('e in filterDropdown -------> ', e);
    this.displayingLookup$.next(e);
  }

  inputOnFocus() {
    console.log('inputOnFocus ');
    this.showItems = true;
    setTimeout(() => {
      this.displayingLookup$.next('');
    });
  }

  inputOnBlur() {
    console.log('inputOnBlur ');
    this.showItems = false;
  }

  selectValue(event, option) {
    console.log('selectValue: ', option);
    this.selectedItem = option;
    this.showItems = false;
    this.searchText = option.description;
    // event.preventDefault(); // see comments in src\app\homemade\hm-search-modal\hm.search.modal.component.ts!!!
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
