import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomeComponent , data: { showBanner: true }},
    { path: 'about', component: AboutComponent, data: { showBanner: false } },
    { path: 'signup', component: SignupComponent , data: { showBanner: false } },
    { path: '**', redirectTo: '' }  // Redirect unknown routes to home
]
