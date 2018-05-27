/**
 * Created by Лев on 22.05.2018.
 */
import {NgModule} from '@angular/core';

import {SearchBlockComponent} from './search-block.component';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatInputModule, MatButtonModule],
  exports: [MatInputModule, SearchBlockComponent, MatButtonModule],
  declarations: [SearchBlockComponent],
  providers: [],
})
export class SearchBlockModule {
}
