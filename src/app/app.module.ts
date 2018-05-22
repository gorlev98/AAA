import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WindowHeaderComponent } from './window-header/window-header.component';
import { SearchBlockComponent } from './search-block/search-block.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { RankedBlockComponent } from './ranked-block/ranked-block.component';
import { TagBlockComponent } from './tag-block/tag-block.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import {MatFormFieldModule, MatToolbarModule, MatIconModule, MatTabsModule, MatInputModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WindowHeaderComponent,
    SearchBlockComponent,
    MainBlockComponent,
    RankedBlockComponent,
    TagBlockComponent,
    NewsBlockComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
