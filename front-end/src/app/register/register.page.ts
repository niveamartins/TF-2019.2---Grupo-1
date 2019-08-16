import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

    public registerForm: FormGroup;

    constructor(public formbuilder: FormBuilder, public authservice: AuthService, public router: Router, public toastcontroller: ToastController) {

        this.registerForm = this.formbuilder.group({
            name: ['', Validators.compose([
                Validators.minLength(4),
                Validators.maxLength(16),
                Validators.pattern('^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$'),
                Validators.required
            ])],
            email: ['', Validators.compose([
                Validators.email,
                Validators.required
            ])],
            password: ['', Validators.compose([
                Validators.minLength(8),
                Validators.required
            ])],
            c_password: ['', Validators.compose([
                Validators.minLength(8),
                Validators.required
            ])]
        });
    }

    ngOnInit() {
    }

    async presentToast() {
        const toast = await this.toastcontroller.create({
            message: "Cadastrado com sucesso!",
            duration: 2000
        });
        toast.present();
    }

    registerUser(form) {

        console.log(this.registerForm);

        if (form.status == "VALID") {

            this.presentToast();

            this.authservice.registerUser(form.value).subscribe(
                (res) => {
                    console.log(res);
                    this.router.navigate(['login']);
                }
            );
        }
    }
}
