import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { SingleDatePickerComponent } from './single-date-picker/single-date-picker.component';
import 'react-dates/initialize';

@NgModule({
  declarations: [DateRangePickerComponent,SingleDatePickerComponent],
  imports: [
    CommonModule
  ],
  exports: [DateRangePickerComponent,SingleDatePickerComponent]
})
export class AngularReactDatesModule { 
  static forRoot(): ModuleWithProviders<AngularReactDatesModule> {
    return {
      ngModule: AngularReactDatesModule
    };
  }
}
