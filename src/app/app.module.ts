import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatIconModule,
  MatSnackBarModule,
  MatTabsModule,
  MatInputModule,
  MatSidenavModule,
  MatChipsModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
} from '@angular/material';


import { CenterCardComponent } from './center-card/center-card.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { BioComponent } from './bio/bio.component';
import { BioInfoComponent } from './bio-info/bio-info.component';

import { StripCardComponent } from './strip-card/strip-card.component';
import { SkillsItemComponent } from './skills-item/skills-item.component';
import { WebsiteCardComponent } from './website-card/website-card.component';
import { AppCardComponent } from './app-card/app-card.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NoContentComponent } from './no-content/no-content.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './title/title.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SuccessComponent } from './success/success.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { StatsComponent } from './stats/stats.component';
import { FormatDatePipe } from './format-date.pipe';
import { FormatLanguagePipe } from './format-language.pipe';
import { ExperiencesComponent } from './experiences/experiences.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenterCardComponent,
    HeaderComponent,
    SkillsComponent,
    BioComponent,
    BioInfoComponent,
    StripCardComponent,
    SkillsItemComponent,
    WebsiteCardComponent,
    AppCardComponent,
    HorizontalScrollComponent,
    ProjectComponent,
    ContactComponent,
    NoContentComponent,
    TitleComponent,
    EducationComponent,
    HobbiesComponent,
    SuccessComponent,
    CertificatesComponent,
    StatsComponent,
    FormatDatePipe,
    FormatLanguagePipe,
    ExperiencesComponent
  ],
  imports: [
    DragScrollModule,
    MatSidenavModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  entryComponents: [SuccessComponent],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
