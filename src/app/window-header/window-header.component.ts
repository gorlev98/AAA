import { Component, Inject} from '@angular/core';
@Component({
  selector: 'app-window-header',
  templateUrl: './window-header.component.html',
  styleUrls: ['./window-header.component.css']
})
export class WindowHeaderComponent{
  constructor() { }

  menuSelect(temp: number): void{
    //this.menuConfig=temp;
  }

}
