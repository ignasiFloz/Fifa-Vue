import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { FifaModule } from '../modules/fifa/fifa.module';

@Injectable({
    providedIn: FifaModule
    })


export class Decrypt {
    key = "encrypt!135790";
    
    public encrypt(password: string): string {
      return CryptoJS.AES.encrypt(password, this.key).toString();
    }
    
    decrypt = (encryptedData: string, ) => {
        return CryptoJS.AES.decrypt(encryptedData, this.key).toString(CryptoJS.enc.Utf8);
      };
   
}