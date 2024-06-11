import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  // onSubmit() {
  //   this.submitted = true;
  //   console.log(this.model);
  // }

  onSubmit(meetingForm: NgForm) {
    // this.submitted = true; //redundant, as ngSubmit sets to true
    console.log(this.model);
    this.model = new Meeting('testString', -1, new Date()); // Reset model
    meetingForm.resetForm(); // Reset the form using ngForm directive method
    this.submitted = false; // Reset submitted flag
  }
}
