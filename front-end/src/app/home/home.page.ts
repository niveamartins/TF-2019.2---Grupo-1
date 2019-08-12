import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

        homeLists = [
            {
                'title': "Título do Post",
                'subtitle': "Descrição do Post"
            },
            {
                'title': "Título do Post",
                'subtitle': "Descrição do Post"
            },
            {
                'title': "Título do Post",
                'subtitle': "Descrição do Post"
            },
            {
                'title': "Título do Post",
                'subtitle': "Descrição do Post"
            }
        ]

  constructor() {}

}
