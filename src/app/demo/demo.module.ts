import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from '../directives/sortable.directive';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [
    DemoComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    NgbModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
