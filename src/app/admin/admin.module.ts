import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule,
  MatSnackBarModule, MatToolbarModule
} from "@angular/material";
import {AdminRoutingModule} from "./admin-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AdminService} from "./admin.service";
import { ViewComponent } from './news/view/view.component';
import { WriteComponent } from './news/write/write.component';
import {FormsModule} from "@angular/forms";
import {CKEditorModule} from "ng2-ckeditor";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    MatSnackBarModule
  ],
  providers: [AdminService],
  declarations: [AdminComponent, HomeComponent, NewsComponent, ViewComponent, WriteComponent]
})
export class AdminModule { }
