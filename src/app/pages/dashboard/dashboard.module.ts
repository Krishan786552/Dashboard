import { CommonModule, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/core/shared/share.module';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTablesComponent } from './dashboard-tables/dashboard-tables.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardTablesComponent,
    DashboardChartsComponent
  ],
  imports: [
    CommonModule ,
    CoreModule,
    DashboardRoutingModule
  ],
  providers: [DecimalPipe],
})
export class DashboardModule { }
