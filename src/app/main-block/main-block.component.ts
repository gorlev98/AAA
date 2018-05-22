import { Component, OnInit } from '@angular/core';
import {News} from '../news';
import {Pictures} from '../pictures';
import {NewsMass} from '../mock-news';
import {PictureMass} from '../mock-pictures';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';
@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent implements OnInit {
  step=0;
  size=2;
  NEWS=NewsMass;
  PICTURES=PictureMass;
  constructor() { }
  ngOnInit() {
  }
  getUrl(i){
    return PictureMass[i].url;
  }
  /*nextStep(i){
    this.step=this.step+i;
    alert(this.step);
    this.getNews(i);
  }*/
  /*
   getNews(i){
    this.a=NewsMass.filter(function(item, index, NewsMass){
      if(index-this.size<this.step*this.size){
        this.a.push(item);
      }
    });
    if(this.a.length==0){
      this.step=this.step-i;
      this.getNews(0);
    }
    else{
      this.NEWS=this.a;
    }
  }*/
}
