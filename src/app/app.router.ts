import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './header/search/search.component';
import { HomePageComponent } from './header/home-page/home-page.component';
import { AuthGaurd } from './service/auth-gaurd.service';


export const routes : Routes = [
    {path :'' , component:LoginComponent},
    {path :'login' , component:LoginComponent},
    {path :'register' , component:RegisterComponent},
    {path: 'homepage', component:HomePageComponent,canActivate:[AuthGaurd]},
    {path : 'friends' , component:SearchComponent,canActivate:[AuthGaurd]},
    {path :'**' , component:LoginComponent}
]

