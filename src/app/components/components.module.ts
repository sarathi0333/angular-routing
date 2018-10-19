import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoComponent, TitleComponent],
  exports: [LogoComponent, TitleComponent]
})
export class ComponentsModule { }
