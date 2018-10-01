import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Guard
// import { OauthGuardServiceGuard } from './services/oauthfire/oauthGuard.service.guard';

export const router: Routes = [
    { path: '', component: HomeComponent  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);