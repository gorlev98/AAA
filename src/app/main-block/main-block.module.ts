/**
 * Created by Лев on 22.05.2018.
 */
import {NgModule} from '@angular/core';

import {MainBlockComponent} from './main-block.component'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [MatButtonModule, MatButtonModule,MatCardModule, MatIconModule, CommonModule,
    ReactiveFormsModule,MatInputModule,FormsModule],
  exports: [MatButtonModule,MatCardModule,MatIconModule,MatInputModule,
    MatButtonModule,FormsModule,ReactiveFormsModule, CommonModule, MainBlockComponent],
  declarations: [MainBlockComponent],
  providers: [],
})
export class MainBlockModule {
}
