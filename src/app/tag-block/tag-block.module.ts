/**
 * Created by Лев on 22.05.2018.
 */
import {NgModule} from '@angular/core';

import {TagBlockComponent} from './tag-block.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material';
import {CommonModule} from '@angular/common';
@NgModule({
  imports: [MatInputModule, MatButtonModule, CommonModule],
  exports: [MatInputModule, TagBlockComponent, MatButtonModule, CommonModule],
  declarations: [TagBlockComponent],
  providers: [],
})
export class TagBlockModule {
}
