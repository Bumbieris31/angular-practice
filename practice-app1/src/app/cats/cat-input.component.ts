import { Component } from '@angular/core';
import { CatsService } from './cats.service';

@Component({
  selector: 'app-cat-input',
  templateUrl: './cat-input.component.html',
  styleUrls: ['./cat-input.component.css']
})
export class CatInputComponent {
  enteredCatName = '';

  constructor(private felineService: CatsService) {}

  onCreateCat() {
    console.log("Created a cat " + this.enteredCatName);
    this.felineService.addCat(this.enteredCatName);
    this.enteredCatName = '';
  }
}
