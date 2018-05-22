import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CdkTableModule} from '@angular/cdk/table';
import { MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { PersonAttributesComponent } from './person-attributes/person-attributes.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GenderPipe } from './pipes/gender.pipe';
import { EcgPipe } from './pipes/ecg.pipe';
import { ExercisePainPipe } from './pipes/exercisePain.pipe';
import { PainTypePipe } from './pipes/painType.pipe';
import { ScyntographyPipe } from './pipes/scyntography.pipe';
import { SlopePipe } from './pipes/slope.pipe';
import { SugarPipe } from './pipes/sugar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonAttributesComponent,
    HomeComponent,
    GenderPipe,
    EcgPipe,
    ExercisePainPipe,
    PainTypePipe,
    ScyntographyPipe,
    SlopePipe,
    SugarPipe
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'attributes', component: PersonAttributesComponent},
      { path: 'home', component: HomeComponent},
      { path: 'index', redirectTo: 'home', pathMatch: 'full'},
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
