import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements OnInit {

    homeNews = [
        {
            'title': 'Post 1'
        },
        {
            'title': 'Post 2'
        },
        {
            'title': 'Post 3'
        },
        {
            'title': 'Post 4'
        }
    ];

  constructor() { }

  ngOnInit() {}

}
