import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { RandomItem, UsState } from '../shared/models';
import { SharedDataService } from '../shared/services/shared.data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  projectDescription: String = 'Testing Angular Lib Sharing';
  randomItems$: Observable<RandomItem[]>;

  constructor(private sharedDataService: SharedDataService, private router: Router) {}

  ngOnInit() {
    this.randomItems$ = this.sharedDataService.getRandomItems(10, 500);
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
