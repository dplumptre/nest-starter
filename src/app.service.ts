import { Injectable } from '@nestjs/common';



@Injectable()
export class AppService {

  private appName: string = 4;
  getHello(): string {
    return `${this.appName} is the new api now!`;
  }



}
