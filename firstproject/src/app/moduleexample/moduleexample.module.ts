import { NgModule } from '@angular/core';
import {UsersModule} from '../users/users.module';
import { DifferentComponent } from './different/different.component'

@NgModule({
  declarations: [
    DifferentComponent,
  ],
  imports: [
    UsersModule
  ]
})
export class ModuleexampleModule { }
