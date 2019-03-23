import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { PaginatorComponent } from './paginator/paginator.component'
import {FilterBoxComponent} from './filter-box/filter-box.component'
import {SplitterComponent} from './splitter/splitter.component';

import { MoneyPipe } from './money.pipe';
import { OutsideDirective } from './outside.directive'

const components = [
  PaginatorComponent,
  FilterBoxComponent,
  SplitterComponent,
  MoneyPipe,
  FilterBoxComponent,
  OutsideDirective
];
@NgModule({
  declarations: [components  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [components,
    FormsModule,
    HttpClientModule]
})
export class SharedModule { }
