import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// My components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// shared libs
import {MyMaterialModuleModule} from './shared/lib/my-material-module/my-material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.router';
import { SearchComponent } from './home/search/search.component';

import {ServiceService} from './home/search/service/service.service';
import { FiltersPipe } from './shared/filters/filters.pipe';
import { ShufflePipe } from './shared/filters/shuffle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FiltersPipe,
    ShufflePipe
  ],
  imports: [
    BrowserModule,
    MyMaterialModuleModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    routes,
    FormsModule
  ],
  providers: [ServiceService, HttpClientModule, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
