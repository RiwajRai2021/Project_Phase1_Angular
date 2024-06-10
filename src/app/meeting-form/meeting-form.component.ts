import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-meeting-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './meeting-form.component.html',
  styleUrl: './meeting-form.component.css',
})
export class MeetingFormComponent {
  // submitted: boolean = false;
  // model: Meeting;
  // constructor(){
  //   this.model = new Meeting("New Project, New Opportunity", ')
  // }

 
}
