import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './components/containers/bio/bio.component';
import { CertificatesComponent } from './components/containers/certificates/certificates.component';
import { ContactComponent } from './components/containers/contact/contact.component';
import { EducationComponent } from './components/containers/education/education.component';
import { ExperiencesComponent } from './components/containers/experiences/experiences.component';
import { HobbiesComponent } from './components/containers/hobbies/hobbies.component';
import { ProjectComponent } from './components/containers/project/project.component';
import { SkillsComponent } from './components/containers/skills/skills.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NoContentComponent } from './components/pages/no-content/no-content.component';
import { AppCardComponent } from './components/presenters/app-card/app-card.component';
import { BioInfoComponent } from './components/presenters/bio-info/bio-info.component';
import { SkillsItemComponent } from './components/presenters/skills-item/skills-item.component';
import { StripCardComponent } from './components/presenters/strip-card/strip-card.component';
import { WebsiteCardComponent } from './components/presenters/website-card/website-card.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main.routing';
import { DownloadCVComponent } from './components/containers/download-cv/download-cv.component';

@NgModule({
  declarations: [
    BioComponent,
    CertificatesComponent,
    ContactComponent,
    EducationComponent,
    ExperiencesComponent,
    HobbiesComponent,
    ProjectComponent,
    SkillsComponent,
    HomeComponent,
    NoContentComponent,
    AppCardComponent,
    BioInfoComponent,
    SkillsItemComponent,
    StripCardComponent,
    WebsiteCardComponent,
    DownloadCVComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  providers: [
  ]
})
export class MainModule { }
