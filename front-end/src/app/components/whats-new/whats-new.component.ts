import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.scss'],
})
export class WhatsNewComponent implements OnInit {

 @Input() homeNews;

  constructor() { }

  ngOnInit() {}

}
