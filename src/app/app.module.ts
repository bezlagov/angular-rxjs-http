import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Database } from './third-task/database.service';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ThirdTaskComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(Database, { delay: 500 },)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
