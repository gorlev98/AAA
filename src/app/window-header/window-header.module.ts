import {NgModule} from '@angular/core';

import {WindowHeaderComponent} from './window-header.component';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule, MatToolbarModule,  MatTabsModule, MatMenuModule} from '@angular/material';
import {CommonModule} from '@angular/common';
@NgModule({
  imports: [MatButtonModule, CommonModule,MatFormFieldModule, MatToolbarModule,  MatTabsModule, MatMenuModule],
  exports: [WindowHeaderComponent, MatButtonModule, CommonModule,MatFormFieldModule, MatToolbarModule,  MatTabsModule, MatMenuModule],
  declarations: [WindowHeaderComponent],
  providers: [],
})
export class WindowHeaderModule {
}
