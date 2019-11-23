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
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    NgsRevealModule,
    HttpClientModule,
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
