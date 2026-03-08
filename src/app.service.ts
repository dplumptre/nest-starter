import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {

  private appName: string = 'Nest';
  getHello(): string {
    return `${this.appName} is the new api now!`;
  }



}
