import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-charts',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-charts.component.html'
})
export class DashboardChartsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
