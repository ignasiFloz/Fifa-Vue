import {Decrypt} from '../../src/app/services/crypt.service';
const decrypt = new Decrypt()
export const environment = {
    production: false,
    DATA_PLAYERS: decrypt.encrypt('../assets/db/players.json'),
};
