import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page-module/components/landing-page-component/landing-page-component';
import { WhoAreYouComponent } from './landing-page-module/components/who-are-you-component/who-are-you-component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'who-are-you',
        component: WhoAreYouComponent
    }
];
