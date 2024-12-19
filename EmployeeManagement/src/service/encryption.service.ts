import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../app/app.config';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }
  private key = CryptoJS.enc.Utf8.parse(environment.key); // 32 bytes key
  private iv = CryptoJS.enc.Utf8.parse(environment.iv); // 16 bytes IV

  // Encrypt data
  encrypt(data: string): string {
    const encrypted = CryptoJS.AES.encrypt(data, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  }

  // Decrypt data
  decrypt(encryptedData: string): string {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
