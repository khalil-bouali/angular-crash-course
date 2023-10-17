import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({name:"Khalil", email:"khalil@mail.com", message:"hello from Khalil"});
    this.insert({name:"Nassim", email:"nassim@mail.com", message:"hello from Nassim"});
    this.insert({name:"Selman", email:"selman@mail.com", message:"hello from Selman"});
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }

}
