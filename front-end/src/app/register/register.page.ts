import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

    public registerForm: FormGroup;

    constructor(public formbuilder: FormBuilder, public authservice: AuthService, public router: Router) {

        this.registerForm = this.formbuilder.group({
            name: ['', Validators.compose([
                Validators.minLength(4),
                Validators.maxLength(36),
                Validators.pattern('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$'),
                Validators.required
            ])],
            email: ['', Validators.compose([
                Validators.email,
                Validators.required
            ])],
            user: ['', Validators.compose([
                Validators.minLength(4),
                Validators.maxLength(16),
                Validators.pattern('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$'),
                Validators.required
            ])],
            password: ['', Validators.compose([
                Validators.minLength(6),
                Validators.required
            ])],
            c_password: ['', Validators.compose([
                Validators.minLength(6),
                Validators.required
            ])]

        });
    }

    ngOnInit() {
    }

    registerUser(form) {

        console.log(this.registerForm);

        if (form.status == "VALID") {

            this.authservice.registerUser(form.value).subscribe(
                (res) => {
                    console.log(res);
                    this.router.navigate(['login']);
                }
            );
        }
    }
}
