import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meeting } from '../meeting';
import { Client } from '../client';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css',
})
export class MeetingComponent {
  submitted: boolean = false;

  model: Meeting;
  participants: any;

  constructor() {
    this.model = new Meeting('testString', -1, new Date());
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}
