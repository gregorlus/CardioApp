import { NgModule } from '@angular/core';
import {
  MatSlideToggleModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
