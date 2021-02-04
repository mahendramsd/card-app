import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';

declare let iziToast: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public submitted = false;

    constructor(
        private router: Router,
    ) {
    }

    public initValidation() {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
    }

    ngOnInit() {
        this.initValidation();
    }

    get form() {
        return this.loginForm.controls;
    }


    public loginSubmit() {
        if (!this.loginForm.invalid) {
            this.submitted = false;
            const username = this.form.username.value;
            const password = this.form.password.value;
            if (username === 'admin' && password === 'admin') {
                sessionStorage.setItem('username', username);
                this.router.navigate([Constants.URL.CREDIT_CARD_VIEW]);
            } else {
                this.submitted = true;
                iziToast.error({
                    title: 'Failed',
                    position: 'bottomRight',
                    message: 'Username or Password incorrect',
                });
            }

        } else {
            this.submitted = true;
            iziToast.info({
                title: 'Error',
                position: 'bottomRight',
                message: 'Username & Password are mandatory',
            });
        }
    }
}
