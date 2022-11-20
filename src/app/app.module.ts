import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPageComponent } from './Dashboard/no-page/no-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { TabsComponent } from './dashboard/tabs/tabs.component';
import { ExperienceComponent } from './dashboard/experience/experience.component';
import { PersonaldetailsComponent } from './dashboard/personaldetails/personaldetails.component';
import { SkillsetComponent } from './dashboard/skillset/skillset.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NoPageComponent,
    TabsComponent,
    ExperienceComponent,
    PersonaldetailsComponent,
    SkillsetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
