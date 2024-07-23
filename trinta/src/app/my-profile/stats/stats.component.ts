import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RouterLink, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatCardModule, CommonModule, FeathericonsModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  users = [
    { id: 1, username: 'Adam K', firstName: 'Adam', lastName: 'K', Due: 22 },
    { id: 2, username: 'Manuel M', firstName: 'Manuel', lastName: 'M', Due: 67 },
    { id: 3, username: 'Ciser C', firstName: 'Ciser', lastName: 'C', Due: 70 },
    { id: 4, username: 'Sara P', firstName: 'Sara', lastName: 'P', Due: 92 },
    { id: 5, username: 'Juthi M', firstName: 'Juthi', lastName: 'M', Due: 28 },
  ];

  selectedUserId: number | null = null;
  selectedUsername: string | null = null;
  selectedFirstName: string | null = null;
  selectedLastName: string | null = null;
  selectedDue: number | null = null;
  selectedFromDate: string | null = null;
  selectedToDate: string | null = null;
  ReportTime: string | null = null;

  get totalDue(): number {
    return this.users.reduce((total, user) => total + user.Due, 0);
  }

  constructor() { }

  ngOnInit(): void {
    this.setReportTime();
  }

  setReportTime(): void {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('fr-FR', { month: 'short' });
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: true });
    this.ReportTime = `${day} ${month} ${year}, ${time}`;
  }

  onUserSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.options).filter(option => option.selected);

    if (selectedOptions.some(option => option.value === '')) {
      // Si "All" est sélectionné
      this.selectedUserId = null;
      this.selectedUsername = null;
      this.selectedFirstName = null;
      this.selectedLastName = null;
      this.selectedDue = null;
    } else {
      // Si un utilisateur spécifique est sélectionné
      const userId = parseInt(selectedOptions[0].value, 10);
      const user = this.users.find(user => user.id === userId);

      if (user) {
        this.selectedUserId = user.id;
        this.selectedUsername = user.username;
        this.selectedFirstName = user.firstName;
        this.selectedLastName = user.lastName;
        this.selectedDue = user.Due;
      } else {
        this.selectedUserId = null;
        this.selectedUsername = null;
      }
    }
  }

  showDeclareTips() {

  }

  onFromDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFromDate = inputElement.value;
  }

  onToDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.selectedToDate = inputElement.value;
  }
  printContent() {
    const printWindow = window.open('', '', 'height=600,width=800');
    const content = document.getElementById('printableContent')?.innerHTML || '';

    printWindow?.document.write('<html><head><title>Print</title>');
    printWindow?.document.write('<style> /* Add any specific styles you need for printing */ </style>');
    printWindow?.document.write('</head><body >');
    printWindow?.document.write(content);
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  }


  printContent1() {
    const printWindow = window.open('', '', 'height=600,width=800');
    const content = document.getElementById('printableContent1')?.innerHTML || '';

    printWindow?.document.write('<html><head><title>Print</title>');
    printWindow?.document.write('<style> /* Add any specific styles you need for printing */ </style>');
    printWindow?.document.write('</head><body >');
    printWindow?.document.write(content);
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  }



}
