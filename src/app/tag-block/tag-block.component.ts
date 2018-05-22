import { Component, OnInit } from '@angular/core';

import {Tags} from '../tags';
import {TagMass} from '../mock-tags';
@Component({
  selector: 'app-tag-block',
  templateUrl: './tag-block.component.html',
  styleUrls: ['./tag-block.component.css']
})
export class TagBlockComponent implements OnInit {
  TAGS=TagMass;
  constructor() { }

  ngOnInit() {
  }

}
