import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatsService } from './cats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html'
})

export class CatsComponent implements OnInit, OnDestroy{
  catList: string[];
  private catListSub: Subscription;
//  private catService: CatsService

  constructor(private felineService: CatsService) {
  //  this.catList = felineService.cats;
  }

  ngOnInit() {
    this.catList = this.felineService.cats;
    this.catListSub = this.felineService.catsChanged.subscribe(cats => {
      this.catList = cats;
    });
  }

  onRemoveCat(catName: string){
    this.felineService.removeCat(catName);
  }

  ngOnDestroy() {
    this.catListSub.unsubscribe();
  }
}
