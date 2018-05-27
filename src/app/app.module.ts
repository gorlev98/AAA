import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { WindowHeaderModule } from './window-header/window-header.module';
import { SearchBlockModule } from './search-block/search-block.module';
import { MainBlockModule } from './main-block/main-block.module';
import {TagBlockModule } from './tag-block/tag-block.module';
import {MatFormFieldModule, MatToolbarModule,  MatTabsModule, MatMenuModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FlexLayoutModule, MatButtonModule, SearchBlockModule,MainBlockModule, WindowHeaderModule,ReactiveFormsModule,
    BrowserModule, BrowserAnimationsModule,MatCardModule,CommonModule, TagBlockModule,FormsModule,
    MatToolbarModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
