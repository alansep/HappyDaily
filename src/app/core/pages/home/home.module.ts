import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import { ProjectModule } from '../../common/project.module';
import { MyFormsModule } from '../../forms/forms.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ProjectModule,
    MyFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
