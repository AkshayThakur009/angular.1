import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
// import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { BasicModule } from './basic/basic.module';

@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    RegisterModule,
    BasicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
