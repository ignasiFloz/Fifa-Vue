import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translateService = inject(TranslateService)

  constructor() {
    this.translateService.addLangs(['en', 'es']);
    this.translateService.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
  }


}
