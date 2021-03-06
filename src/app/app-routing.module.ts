import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'about/:id',
      component: AboutComponent
    }
  ];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)