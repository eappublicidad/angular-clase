import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {CompraComponent} from './compra/compra.component';

const routerModule:Routes = [{
    path:"compra",
    component:ProductComponent

},{
    path:"producto",
    component:ProductComponent

}]

export const appRouter = RouterModule.forRoot(routerModule);