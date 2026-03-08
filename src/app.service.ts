import { Injectable } from '@nestjs/common';

interface User {
  name: string;
  age: number;
}

@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World now!' + this.userData({ name: 231, age: 'thirty' });
  }


 private  userData=( data: User): string => {
    return `User ${data.name} is ${data.age} years old.`;
 }


}
