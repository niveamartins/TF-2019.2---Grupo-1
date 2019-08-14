import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
        },
        {
            title: 'Criar post',
            url: '/create',
            icon: 'list'
        },
        {
            title: 'Perfil',
            url: '/profile',
            icon: 'list'
        },
        {
            title: 'Post',
            url: '/post',
            icon: 'list'
        },
        {
            title: 'Entrar',
            url: '/login',
            icon: 'bookmark'
        },
        {
            title: 'Registrar',
            url: '/register',
            icon: 'book'
        },
        {
            title: 'Comentários',
            url: '/comment',
            icon: 'text'
        }


    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
