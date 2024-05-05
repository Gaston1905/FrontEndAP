import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavbarComponent } from './icon-navbar/icon-navbar.component';
import { NavbarComponent } from './navbar.component';
import { OptionNavbarComponent } from './option-navbar/option-navbar.component';
import { RrssNavbarComponent } from './rrss-navbar/rrss-navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    IconNavbarComponent,
    OptionNavbarComponent,
    RrssNavbarComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    IconNavbarComponent,
    OptionNavbarComponent,
    RrssNavbarComponent,
  ],
})
export class NavbarModule {}
