import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DelayedInputDirective } from './directives/delayed-input/delayed-input.directive';

@NgModule({
  declarations: [NavigationComponent, FilterComponent, DelayedInputDirective],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [NavigationComponent, FilterComponent, DelayedInputDirective]
})
export class SharedModule {}
