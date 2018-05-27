import { Component, OnInit } from '@angular/core';
import {News} from '../news';
import {Pictures} from '../pictures';
import {Comment} from '../comment';
import {User} from '../user';
import {NewsMass} from '../mock-news';
import {PictureMass} from '../mock-pictures';
import {CommentMass} from '../mock-comment';
import {UserMass} from '../mock-user';
import {forEach} from "@angular/router/src/utils/collection";
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
  USERMASS=UserMass;
  COMMENTS=CommentMass;
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
    //this.COMMENTS=CommentMass.filter(Comment => Comment.newsId=this.selectedNews.newsId);

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

