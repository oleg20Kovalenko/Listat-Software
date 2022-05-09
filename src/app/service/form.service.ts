import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  createCrypto = [
    {
      company: {
        value: 'My company',
        text: 'My company',
      },
      myToken: {
        value: 'My token',
      },
      symbol: {
        value: 'MTKN',
      },
      maxToken: {
        value: '100000000',
      },
      blockchain: [{ value: 'Enthereum' }, { value: 'Binance Smart Chain' }],
    },
  ];

  constructor() {}
}
