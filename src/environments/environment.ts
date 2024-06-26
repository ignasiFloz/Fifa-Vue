import {Decrypt} from '../../src/app/services/crypt.service';
const decrypt = new Decrypt()
export const environment = {
    production: true,
    DATA_PLAYERS: decrypt.decrypt('U2FsdGVkX19u++34AY7OVl2cYW5eAGOgbqsrUN5/INiSbojHuFf8+41wvz/3EHVZ')   ,
};
