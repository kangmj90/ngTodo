import {IndexComponent} from "./index/index.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {JqueryComponent} from "./jquery/jquery.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', component: IndexComponent, children: [
    {path: '', component: HomeComponent},
    {path: '', component: JqueryComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
