export enum MessageType {
  DIRECT = <any> 'Direct Message',
  OFFER = <any> 'Campaign Offer'
  // DIRECT = 0,
  // OFFER = 1
}

export interface Notification {
  _id?: string;
  title?: string;
  picture?: string;
  lastMessage?: Message;
}

export interface Message {
  _id?: string;
  chatId?: string;
  content?: string;
  addresser: string; // for test
  createdAt?: Date;
  type?: MessageType;
  ownership?: string;
}
