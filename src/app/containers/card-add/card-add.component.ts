import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {Payment} from '../../model/request/payment';
import {CustomDateAdapter} from 'src/app/utils/custom-date-adapter';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


declare let iziToast:any;

@Component({
    selector: 'app-card-add',
    templateUrl: './card-add.component.html',
    styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {


    public PaymentForm: FormGroup;
    public submitted = false;
    public expireDate: any;
    private today : any;

    constructor(
        private appService: AppService,
        private customDateAdapter: CustomDateAdapter,
        public activeModal: NgbActiveModal,

    ) {
    }

    ngOnInit(): void {
        this.initValidation();
    }


   /**
     * Validation form
     */
    public initValidation() {
        this.PaymentForm = new FormGroup({
            cardNumber: new FormControl('', Validators.required),
            cardHolder: new FormControl('', Validators.required),
            expireDate: new FormControl('', Validators.required),
            securityCode: new FormControl(''),
            amount: new FormControl('', Validators.required),
        });
    }

    get form() {
        return this.PaymentForm.controls;
    }


    /**
     * Add Card to store
     */
    public paymentSubmit(){
         this.today = new Date();
        if (this.PaymentForm.valid) {
            this.submitted = false;
            const payment = new Payment();
            payment.cardNumber = this.form.cardNumber.value;
            payment.cardHolder = this.form.cardHolder.value;
            payment.expireDate = this.customDateAdapter.toModel(this.expireDate);
            payment.securityCode = this.form.securityCode.value;
            payment.amount = this.form.amount.value;

            if(this.today > new Date(payment.expireDate)) {
                iziToast.info({
                    title: 'Failed',
                    position: 'bottomRight',
                    message: 'Card is Expired',
                });
                return;
            }
            this.appService.addCard(payment);
            this.activeModal.dismiss();  
        } else {
            this.submitted = true;
            iziToast.info({
                title: 'Input Error',
                position: 'bottomRight',
                message: 'Please Fill the form correctly ',
            });
        }
    }
}
