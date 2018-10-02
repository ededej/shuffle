import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const router: Routes = [
    { path: '', component: HomeComponent  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);