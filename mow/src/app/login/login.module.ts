import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginrestaurentComponent } from './loginrestaurent/loginrestaurent.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms";
import { DashboardComponent} from './dashboard/dashboard.component'
@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    RouterModule.forChild([{
      path:"",
      redirectTo:"customer",
      pathMatch:"full"
    },
  {
    path:"customer",
    component:LogincustomerComponent
  },
{
  path:"restaurent",
  component:LoginrestaurentComponent
},
 {path : "dashboard",
 component:DashboardComponent
}])
  ],
  declarations: [LogincustomerComponent, LoginrestaurentComponent,DashboardComponent]
})
export class LoginModule { }
