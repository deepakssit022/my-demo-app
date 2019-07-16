import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'user',
        loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }