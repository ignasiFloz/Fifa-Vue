import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CoreModule } from './core/core.module';
import { FifaModule } from './modules/fifa/fifa.module';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { GlobalErrorHandler } from './global-error-handler';
import { ServerErrorInterceptor } from './server-error.interceptor';
=======
import { ErrorPageComponent } from './shared/error-page/error-page.component';
>>>>>>> f994a5c2c12951b88677ada1d04f9a202e66d73f



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FifaModule,
    CommonModule
    
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
