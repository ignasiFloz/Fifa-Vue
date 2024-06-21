import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fifa-Vue';
  selectedLanguage = 'es';
  translateService = Inject(TranslateService);
 
  constructor( ){
  this.translateService.setDefaultLang('en');
  this.selectedLanguage = 'en';
  this.translateService.use(this.selectedLanguage);
 }

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage)
  }
}
