import { Routes,RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";
import { AppComponent } from "./app.component";


const route:Routes=[
    {path:'',component:AppComponent},
    
]
@NgModule({
 imports:[RouterModule.forRoot(route)],
 exports:[],
})
export class AppRouting{

}