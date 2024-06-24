import {Decrypt} from '../../src/app/services/crypt.service';
const decrypt = new Decrypt()
export const environment = {
    production: true,
    DATA_PLAYERS: decrypt.encrypt('../assets/db/players.json'),
};
