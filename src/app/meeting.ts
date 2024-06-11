import { Time } from '@angular/common';

export class Meeting {
  constructor(
    public title: string,
    public participants: number,
    // public time: Time,
    public startTime: Date
  ) {}
}
