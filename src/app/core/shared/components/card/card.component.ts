import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
    @Input() background!: string;
    @Input() color!: string;

    customClasses: string[] = [];

    constructor() {}
    ngOnInit() {
        if (this.background) {
            this.customClasses.push(this.background);
        }
        if (this.color) {
            this.customClasses.push(this.color);
        }
    }
}
