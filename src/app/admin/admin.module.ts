import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {MatButtonModule, MatToolbarModule} from "@angular/material";
import {AdminRoutingModule} from "./admin-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent]
})
export class AdminModule { }
