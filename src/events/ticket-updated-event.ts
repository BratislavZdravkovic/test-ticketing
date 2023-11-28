import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    version: number;
    orderId?: string; // moze da se desi da update-ujemo ticket tako da ga na ne rezervisemo (npr. update-ujemo cenu)
  };
}
