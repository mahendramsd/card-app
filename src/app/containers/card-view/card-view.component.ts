import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/model/request/payment';
import { PaymentState } from 'src/app/payment/store/reducer/payment.reducer';
import { selectPayments } from 'src/app/payment/store/selector/payment.selectors';
import {AppService} from '../../services/app.service';
import { CardAddComponent } from '../card-add/card-add.component';

@Component({
    selector: 'app-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

    paymnets$: Observable<Payment[]>


    constructor(
        private modalService: NgbModal,
        private store: Store<PaymentState>
    ) {
        this.paymnets$ = this.store.pipe(select(selectPayments))
    }

    ngOnInit(): void {
    }

    /**
     * Load popup add card window
     */
    addCard() {
        const modalRef = this.modalService.open(CardAddComponent, { size: 'lg', backdrop: 'static' });
    }

}
