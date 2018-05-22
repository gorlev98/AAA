import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { WindowHeaderComponent } from './window-header/window-header.component';
import { SearchBlockModule } from './search-block/search-block.module';
import { MainBlockComponent } from './main-block/main-block.component';
import { RankedBlockComponent } from './ranked-block/ranked-block.component';
import { TagBlockComponent } from './tag-block/tag-block.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import {
  MatFormFieldModule, MatToolbarModule, MatIconModule, MatTabsModule, MatInputModule, MatMenuModule,MatButtonModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WindowHeaderComponent,
    MainBlockComponent,
    RankedBlockComponent,
    TagBlockComponent,
    NewsBlockComponent
  ],
  imports: [
    FlexLayoutModule, MatButtonModule, SearchBlockModule,
    BrowserModule, BrowserAnimationsModule,
    MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
