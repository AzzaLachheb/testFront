import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './model/person';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService  implements InMemoryDbService {

    createDb() {
      const personsList = [
        { id: 11, firstName: 'Terry', lastName: 'TK', emailAddress: 'terry@gmail.com'},
        { id: 12, firstName: 'Narco' , lastName: 'LN', emailAddress: 'narco@gmail.com' },
        { id: 13, firstName: 'Nicolas' , lastName: 'Alquier', emailAddress: 'nico@gmail.com' },
        { id: 14, firstName: 'Asma' , lastName: 'Riahi', emailAddress: 'asma@gmail.com' },
        { id: 15, firstName: 'Azza' , lastName: 'Lacb', emailAddress: 'azza@gmail.com' },
        { id: 16, firstName: 'Philippe' , lastName: 'Foroux', emailAddress: 'phi@gmail.com' },
        { id: 17, firstName: 'Amira' , lastName: 'Ouennich', emailAddress: 'amira@gmail.com' },
        { id: 18, firstName: 'Ahmed' , lastName: 'Lazreg', emailAddress: 'ahmed@gmail.com' },
        { id: 19, firstName: 'Hamza' , lastName: 'Tabib', emailAddress: 'hamza@gmail.com' },
        { id: 20, firstName: 'Mouna' , lastName: 'Melki', emailAddress: 'mouna@gmail.com' }
      ];
      return { personsList }
    }
}
  