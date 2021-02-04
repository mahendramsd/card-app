import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Payment} from '../model/request/payment';
import {Constants} from '../constants';
import {environment} from '../../environments/environment';
import { PaymentState } from '../payment/store/reducer/payment.reducer';
import { Store } from '@ngrx/store';
import { addPayment } from '../payment/store/action/payment.actions';
declare let iziToast:any;

@Injectable({
    providedIn: 'root',
})
export class AppService {

    constructor(    private router: Router,private store: Store<PaymentState>, private httpClient: HttpClient) {
    }

    /**
     * Add Card to Store
     * @param payment 
     */
    public addCard(payment: Payment) {
        this.store.dispatch(addPayment(payment));
        iziToast.success({
            title: 'Ok',
            position: 'bottomRight',
            message: 'Successfully added',
        });
    }


    public logOut() {
        sessionStorage.removeItem('username');
        this.router.navigate(['/login']);
      }
}
