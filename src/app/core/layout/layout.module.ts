import { NgModule } from '@angular/core';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { RouterModule } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { CommonModule, DecimalPipe } from '@angular/common';


const MODULES = [
  CommonModule,
  RouterModule
]

@NgModule({
  declarations: [
    LayoutLoginComponent,
    LayoutMainComponent,
    TopHeaderComponent,
    LeftSidebarComponent
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
})
export class LayoutModule { }
