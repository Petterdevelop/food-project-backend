import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFoods(): string {

    const foods: any = [
      {
        name: 'Salteña',
        image:
          'https://viajerocasual.com/wp-content/uploads/2019/05/empanadas-salte%C3%B1as.webp',
      },
      {
        name: 'Tucumana',
        image:
          'https://viajerocasual.com/wp-content/uploads/2019/05/Tucumanas.webp',
      },
      {
        name: 'Chairo',
        image:
          'https://viajerocasual.com/wp-content/uploads/2019/05/Chairo-Pace%C3%B1o.webp',
      },
      {
        name: 'Cuñape',
        image:
          'https://viajerocasual.com/wp-content/uploads/2019/05/Cu%C3%B1ap%C3%A9.webp',
      },
      {
        name: 'Silpancho',
        image:
          'https://viajerocasual.com/wp-content/uploads/2019/05/Silpancho.jpg',
      },
      {
        name: 'Sandwich de chola',
        image:
          'https://viajerocasual.com/wp-content/uploads/2019/05/S%C3%A1ndwich-de-chola.webp',
      },
      {
        name: 'Fricase',
        image:
          'https://viajerocasual.com/wp-content/uploads/2019/05/Fricase.jpg',
      },
    ];

    return foods;
  }
}
