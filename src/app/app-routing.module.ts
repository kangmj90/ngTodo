import {IndexComponent} from "./index/index.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {JqueryComponent} from "./jquery/jquery.component";
import {NgModule} from "@angular/core";
import {AngularComponent} from "./angular/angular.component";

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'jquery', component: JqueryComponent},
    {path: 'angular', component: AngularComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
