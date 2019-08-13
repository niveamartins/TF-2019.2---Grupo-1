import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements OnInit {

    homeNews = [
        {
            'title': 'Post 1',
            'description': 'Descrevendo o post 1. Analisando o espaço que eu tenho.'
        },
        {
            'title': 'Post 2',
            'description': 'Descrevendo o post 2. Analisando o espaço que eu tenho.'
        },
        {
            'title': 'Post 3',
            'description': 'Descrevendo o post 3. Analisando o espaço que eu tenho.'
        },
        {
            'title': 'Post 4',
            'description': 'Descrevendo o post 4. Analisando o espaço que eu tenho.'
        }
    ];

  constructor() { }

  ngOnInit() {}

}
