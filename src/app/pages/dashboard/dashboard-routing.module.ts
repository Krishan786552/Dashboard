import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from 'src/app/core/layout/layout-main/layout-main.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutMainComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'todo',
                loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule)
            }
        ]

    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
