import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CenterCardComponent } from './components/center-card/center-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { FormatLanguagePipe } from './pipes/format-language.pipe';
import { SuccessComponent } from './components/success/success.component';
import { TitleComponent } from './components/title/title.component';

import { MatFormFieldModule } from '@angular/material/form-field';
 
import { MatTableModule } from '@angular/material/table'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

 
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';


import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragScrollModule } from 'ngx-drag-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { StatsComponent } from '../stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { DisplayErrorPipe } from './pipes/display-error.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    CenterCardComponent,
    FooterComponent,
    HeaderComponent,
    HorizontalScrollComponent,
    SuccessComponent,
    TitleComponent,
    FormatDatePipe,
    FormatLanguagePipe,
    StatsComponent,
    DisplayErrorPipe
  ],
  imports: [
    CommonModule,
    DragScrollModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatInputModule,
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
     MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
    NgsRevealModule
  ],
  exports: [
    LoaderComponent,
    CenterCardComponent,
    FooterComponent,
    HeaderComponent,
    HorizontalScrollComponent,
    SuccessComponent,
    TitleComponent,
    FormatDatePipe,
    FormatLanguagePipe,
    CommonModule,
    DragScrollModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatInputModule,
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
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    NgsRevealModule,
    HttpClientModule,
    DisplayErrorPipe
  ],
  entryComponents: [
    SuccessComponent
  ],
  providers: [
    ConfigService
  ]
})
export class SharedModule { }
