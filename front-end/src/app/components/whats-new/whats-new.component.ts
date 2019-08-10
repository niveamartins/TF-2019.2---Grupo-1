import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements OnInit {

    cards: Array<string> = [
        'Post 1',
        'Post 2',
        'Post 3',
        'Post 4'
    ];

  constructor() { }

  ngOnInit() {}

}
