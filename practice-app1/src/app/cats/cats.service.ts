import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CatsService {
  catsChanged = new Subject<string[]>();
  cats: string[] = ['Chackie', 'Luckie', 'Snuffles'];

  addCat(name: string) {
    this.cats.push(name);
    this.catsChanged.next(this.cats)
  }

  removeCat(name: string) {
    this.cats = this.cats.filter(cat => {
      return cat !== name;
    });
    this.catsChanged.next(this.cats)
  }
}
