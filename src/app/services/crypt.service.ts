import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { FifaModule } from '../modules/fifa/fifa.module';
import { CryptContract } from '../models/services-contracts/crypt-contract';

@Injectable({
    providedIn: FifaModule
    })


export class Decrypt extends CryptContract {

    key = "encrypt!135790";
    
    public encrypt(password: string): string {
      return CryptoJS.AES.encrypt(password, this.key).toString();
    }
    
    decrypt = (encryptedData: string, ) => {
        return CryptoJS.AES.decrypt(encryptedData, this.key).toString(CryptoJS.enc.Utf8);
      };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}