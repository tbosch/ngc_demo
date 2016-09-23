import {Component, Directive, Input} from '@angular/core';

@Component({
  selector: 'my-comp',
  templateUrl: './my_comp.html'
})
export class MyComp {
  user = {
    wrongName: 'Tobias'
  };
}

@Directive({
  selector: '[form]'
})
export class NgForm {}

@Directive({
  selector: '[ngModel]'
})
export class NgModel {
  @Input()
  ngModel: any;
}