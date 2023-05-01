import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LoadingService } from '../../services/loading';

@Component({
    selector     : 'loader-spinner',
    templateUrl  : './loader-spinner.component.html',
    styleUrls    : ['./loader-spinner.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'fuseLoadingBar'
})
export class LoaderSpinnerComponent implements OnInit, OnDestroy
{
    show: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _loadingService: LoadingService,
        private _changeDetectorRef: ChangeDetectorRef
    ){}

    ngOnInit(): void
    {
        this._loadingService.show$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.show = value;
                this._changeDetectorRef.detectChanges();
            });

    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
