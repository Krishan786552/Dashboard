import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormatDate } from './pipes/app.pipes';
import { BootstrapTableComponent } from './components/bootstrap-table/bootstrap-table.component';
import { CardViewDetailsComponent } from './components/card-view-details/card-view-details.component';
import { CardComponent } from './components/card/card.component';
import { ChartsBarComponent } from './components/charts-bar/charts-bar.component';
import { ChartsAreaComponent } from './components/charts-area/charts-area.component';


const MODULES = [
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  NgbModule,
  NgbPaginationModule,
  LayoutModule
]

const PIPES = [
  FormatDate
]

const COMPONENTS = [
  CardComponent,
  CardViewDetailsComponent,
  BootstrapTableComponent,
  ChartsBarComponent,
  ChartsAreaComponent
]


@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
    
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ],
  providers: [DecimalPipe],
})
export class SharedModule { }
