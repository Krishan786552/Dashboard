import { NgModule } from '@angular/core';
import { SharedModule } from './shared/share.module';


const MODULES = [
  SharedModule
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class CoreModule { }
