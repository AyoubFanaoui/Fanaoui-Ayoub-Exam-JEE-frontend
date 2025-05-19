import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remboursement',
  imports: [],
  templateUrl: './remboursement.component.html',
  styleUrl: './remboursement.component.css'
})
export class RemboursementComponent implements OnInit {
  reimbursement = {
    date: '2025-05-04',
    amount: 12,
    type: '',
    credit: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.reimbursement);
    // You would typically call a service here to send the data to your backend
  }
}
