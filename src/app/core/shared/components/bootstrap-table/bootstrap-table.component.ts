import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/Country';
import { CountryService } from 'src/app/services/country.service';

@Component({
    selector: 'app-bootstrap-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './bootstrap-table.component.html'
})
export class BootstrapTableComponent implements OnInit {
    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    total$!: Observable<number>;

    constructor(
        public countryService: CountryService,
    ) {}

    ngOnInit() {
        this.countryService.pageSize = this.pageSize;
        this.countries$ = this.countryService.countries$;
        this.total$ = this.countryService.total$;
    }

}
