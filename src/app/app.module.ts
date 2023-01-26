import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './components/parent/parent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { AddOrderComponent } from './pages/Angular/angular-first/add-order/add-order.component';
import { AngularFirstComponent } from './pages/Angular/angular-first/angular-first.component';
import { EditOrderComponent } from './pages/Angular/angular-first/edit-order/edit-order.component';
import { OrdersComponent } from './pages/Angular/angular-first/services/advanced-data';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AngularFirstComponent,
    AddOrderComponent,
    EditOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  entryComponents: [AddOrderComponent, EditOrderComponent],
  providers: [OrdersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
