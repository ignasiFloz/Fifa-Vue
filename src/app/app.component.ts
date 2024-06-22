import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fifa-Vue';
  selectedLanguage = 'es';
 
  /* constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.selectedLanguage = 'en';
    this.translateService.use(this.selectedLanguage);
  }

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage)
  } */
}
