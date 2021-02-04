import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersRoutingModule } from './containers-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardAddComponent } from './card-add/card-add.component';
import { CardViewComponent } from './card-view/card-view.component';
import { StoreModule } from '@ngrx/store';
import { paymentFeatureKey, reducer } from '../payment/store/reducer/payment.reducer';


@NgModule({
    declarations: [
        CardAddComponent,
        CardViewComponent
    ],
    imports: [
        CommonModule,
        ContainersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        StoreModule.forFeature(paymentFeatureKey, reducer),
    ],
    exports: [
        CardAddComponent,
        CardViewComponent
      ]
})
export class ContainersModule {
}
