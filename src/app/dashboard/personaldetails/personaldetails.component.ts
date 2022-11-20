import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent {
  availableColors: ChipColor[] = [
    {name: 'Name: Rajni M Padhiyar', color: undefined},
    {name: 'Experience: 17 Years', color: 'primary'},
    {name: 'Educatioin: Computer Engineering', color: 'accent'},
    {name: 'Phone: +91-9824684725', color: 'warn'},
    {name: 'Email: rajni_cby@hotmail.com', color: 'warn'},
    {name: 'Location: Gandhinagar, Gujarat, India.', color: 'warn'},
  ];
}
