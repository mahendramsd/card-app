import { createAction, props } from '@ngrx/store';
import { Payment } from 'src/app/model/request/payment';

export const addPayment = createAction(
  '[Payment] Add Payment Card',
  (payment: Payment) => ({ payment })
);




