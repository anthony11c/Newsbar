import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { VijestiListComponent } from './vijesti-list/vijesti-list.component';
import { VijestDetailsComponent } from './vijest-details/vijest-details.component';
import { AddVijestComponent } from './add-vijest/add-vijest.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'vijesti', component: VijestiListComponent },
  { path: 'vijesti/:id', component: VijestDetailsComponent },
  { path: 'add', component: AddVijestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
