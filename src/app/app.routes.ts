import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/main-page/component/main-page.component').then(
        (m) => m.MainPagecomponent
      ),
  },
  {
    path: 'favoritos',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/favorites/component/favorites.component').then(
        (m) => m.FavoritesComponent
      ),
  },
  {
    path: 'assistidos',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/watched/component/watched.component').then(
        (m) => m.WatchedComponent
      ),
  },
  {
    path: 'dislike',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/black-list/component/black-list.component').then(
        (m) => m.BlackListComponent
      ),
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/register/component/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'import',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/import/component/import.component').then(
        (m) => m.ImportComponent
      ),
  },
];
