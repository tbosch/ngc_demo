import {NgModule} from '@angular/core';

import {MyComp, NgForm, NgModel} from './my_comp';

@NgModule({
  declarations: [MyComp, NgForm, NgModel],
  bootstrap: [MyComp]
})
export class MyApp {}
