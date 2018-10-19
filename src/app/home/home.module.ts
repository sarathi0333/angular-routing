import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '../components/title/title.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [SettingsComponent, DashboardComponent, ProductsComponent, TitleComponent]
})
export class HomeModule { }
