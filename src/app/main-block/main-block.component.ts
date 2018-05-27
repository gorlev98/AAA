import { Component, OnInit } from '@angular/core';
import {News} from '../news';
import {Pictures} from '../pictures';
import {NewsMass} from '../mock-news';
import {PictureMass} from '../mock-pictures';
@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})

export class MainBlockComponent implements OnInit {
  //@ViewChild('name') nameInput: ElementRef;
  step=0;
  size=2;
  NEWS=NewsMass;
  PICTURES=PictureMass;
  pictureNumber=0;
  newsText="";
  constructor() { }
  ngOnInit() {
  }
  getUrl(i){
    return PictureMass[i].url;
  }
  selectedNews: News;

  onSelect(news: News): void{

    this.newsText=news.text;
    this.selectedNews = news;

  }
  onDeSelect():void{
    this.pictureNumber=0;this.newsText="";
    this.selectedNews=undefined;
  }
  onSave():void{
  }
  changePicture():void{
    this.pictureNumber++;
    if(this.pictureNumber==this.PICTURES.length){
      this.pictureNumber=0;
    }
  }
}

