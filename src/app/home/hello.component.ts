import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RandomItem, UsState } from '../shared/models';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  projectDescription: String = 'Testing Angular Lib Sharing';
  randomItems$: Observable<RandomItem[]>;
  states$: Observable<UsState[]>;

  constructor(private router: Router) {}

  ngOnInit() {}

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
