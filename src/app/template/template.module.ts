import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { SwitchesComponent } from './switches/switches.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicsComponent,
    SwitchesComponent,
    DynamicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }