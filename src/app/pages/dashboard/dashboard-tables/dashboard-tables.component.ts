import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-tables',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-tables.component.html'
})
export class DashboardTablesComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
