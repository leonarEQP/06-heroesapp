import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing-module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HeroPageComponent } from '../heroes/pages/hero-page/hero-page.component';
import { ListPageComponent } from '../heroes/pages/list-page/list-page.component';
import { NewPageComponent } from '../heroes/pages/new-page/new-page.component';
import { SearchPageComponent } from '../heroes/pages/search-page/search-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
