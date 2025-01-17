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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stats:not(2)',
  standalone: true,
  imports: [RouterLink, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatCardModule, CommonModule, FeathericonsModule, MatDatepickerModule, MatSelectModule, FormsModule],
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
  declaredTips: { time: string, amount: number }[] = [
    { time: '01/08/24, 06:34:35 PM', amount: 0 },
    { time: '01/08/24, 06:34:56 PM', amount: 5 }
  ];

  selectedTipIndex: number | null = null;
  selectedUserId: number | null = null;
  selectedUsername: string | null = null;
  selectedlastname: string | null = null;
  selectedfirstname: string | null = null;
  selectedDue: number | null = null;
  selectedFromDate: string | null = null;
  selectedToDate: string | null = null;
  ReportTime: string | null = null;
  calculatorInput: string = '';
  calculatorInput1: string = '';
  calculatorInput2: string = '';
  calculatorInput3: string = '';
  calculatorInput4: string = '';
  Assigned: boolean = false ;
  payoutReason: string = '';
  payoutRecipient: string = '';
  payoutNote: string = '';
  recipientInput: string = '';
  recipientInput1: string = '';
  recipientInput2: string = '';
  payoutReasons: string[] = [];
  recipients: string[] = [];
  isPayoutSuccessVisible = false;
  isCashInSuccessVisible= false;
  get totalDue(): number {
    return this.users.reduce((total, user) => total + user.Due, 0);
  }

  constructor() { }

  ngOnInit(): void {
    this.setReportTime();
  }

  changestatus1(): void {
    // Your logic here
  }

  setReportTime(): void {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('fr-FR', { month: 'short' });
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: true });
    this.ReportTime = `${day} ${month} ${year} ${time}`;
  }

  addDeclaredTip() {
   
    const amount = parseFloat(this.calculatorInput);
    
    if (!isNaN(amount)) {
      const currentTime = new Date().toLocaleString();
      this.declaredTips.push({ time: currentTime ,amount: amount });
      this.clearInput();
    }
  }

  openEditModal(index: number) {
    this.selectedTipIndex = index;
   
  }

  updateTip() {
    if (this.selectedTipIndex !== null) {
      this.declaredTips[this.selectedTipIndex].amount = parseFloat(this.calculatorInput);
    }
    this.clearInput();
  }
  clearInputx() {
    this.calculatorInput = '';
    this.selectedTipIndex = null;
  }



 

  appendNumber(number: number): void {
    this.calculatorInput += number;
  }

  appendComma(): void {
    if (!this.calculatorInput.includes('.')) {
      this.calculatorInput += '.';
    }
  }

  clearInput(): void {
    this.calculatorInput = '';
  }

  increment(): void {
    let value = parseFloat(this.calculatorInput.replace(',', '.')) || 0;
    this.calculatorInput = (value + 1).toString().replace('.', ',');
  }

  decrement(): void {
    let value = parseFloat(this.calculatorInput.replace(',', '.')) || 0;
    if (value > 0) {
      this.calculatorInput = (value - 1).toString().replace('.', ',');
    }
  }


//////////////////////////////////////////////////////////////////////
  appendNumber1(number: number): void {
    this.calculatorInput1 += number;
  }

  appendComma1(): void {
    if (!this.calculatorInput1.includes('.')) {
      this.calculatorInput1 += '.';
    }
  }

  clearInput1(): void {
    this.calculatorInput1 = '';
  }

  increment1(): void {
    let value = parseFloat(this.calculatorInput1.replace(',', '.')) || 0;
    this.calculatorInput1 = (value + 1).toString().replace('.', ',');
  }

  decrement1(): void {
    let value = parseFloat(this.calculatorInput1.replace(',', '.')) || 0;
    if (value > 0) {
      this.calculatorInput1 = (value - 1).toString().replace('.', ',');
    }
  }

//////////////////////////////////////////////////////////////////////
  appendNumber2(number: number): void {
    this.calculatorInput2 += number;
  }

  appendComma2(): void {
    if (!this.calculatorInput2.includes('.')) {
      this.calculatorInput2 += '.';
    }
  }

  clearInput2(): void {
    this.calculatorInput2 = '';
  }

  increment2(): void {
    let value = parseFloat(this.calculatorInput2.replace(',', '.')) || 0;
    this.calculatorInput2 = (value + 1).toString().replace('.', ',');
  }

  decrement2(): void {
    let value = parseFloat(this.calculatorInput2.replace(',', '.')) || 0;
    if (value > 0) {
      this.calculatorInput2 = (value - 1).toString().replace('.', ',');
    }
  }

  //////////////////////////////////////////////////////////////////////
  appendNumber3(number: number): void {
    this.calculatorInput3 += number;
  }

  appendComma3(): void {
    if (!this.calculatorInput3.includes('.')) {
      this.calculatorInput3 += '.';
    }
  }

  clearInput3(): void {
    this.calculatorInput3 = '';
  }

  increment3(): void {
    let value = parseFloat(this.calculatorInput3.replace(',', '.')) || 0;
    this.calculatorInput3 = (value + 1).toString().replace('.', ',');
  }

  decrement3(): void {
    let value = parseFloat(this.calculatorInput3.replace(',', '.')) || 0;
    if (value > 0) {
      this.calculatorInput3 = (value - 1).toString().replace('.', ',');
    }
  }
  //////////////////////////////////////////////////////////////////////
  appendNumber4(number: number): void {
    this.calculatorInput4 += number;
  }

  appendComma4(): void {
    if (!this.calculatorInput4.includes('.')) {
      this.calculatorInput4 += '.';
    }
  }

  clearInput4(): void {
    this.calculatorInput4 = '';
    this.payoutReason = '';
    this.payoutRecipient = '';
    this.payoutNote = '';
  }

  increment4(): void {
    let value = parseFloat(this.calculatorInput4.replace(',', '.')) || 0;
    this.calculatorInput4 = (value + 1).toString().replace('.', ',');
  }

  decrement4(): void {
    let value = parseFloat(this.calculatorInput4.replace(',', '.')) || 0;
    if (value > 0) {
      this.calculatorInput4 = (value - 1).toString().replace('.', ',');
    }
  }

  handlePayoutOk() {
    if (!this.calculatorInput4 || this.calculatorInput4.trim() === '') {
        alert('Please enter payout amount');
    } else {
      
      this.closePayoutModal();
        this.isPayoutSuccessVisible = true;
    }
}
closePayoutModal() {
  const payoutModal = document.getElementById('payout');
  if (payoutModal) {
      payoutModal.classList.remove('show');
      payoutModal.setAttribute('aria-hidden', 'true');
      payoutModal.setAttribute('style', 'display: none;');
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
          modalBackdrop.parentNode?.removeChild(modalBackdrop);
      }
  }}
  handleCashInOk() {
    if (!this.calculatorInput3 || this.calculatorInput3.trim() === '' || this.calculatorInput3 === '0') {
      alert('Amount must be greater than zero');
  }  else {
      this.closeCashInModal();
        this.isCashInSuccessVisible = true;
    }
}

closeCashInModal() {
  const cashinModal = document.getElementById('cashIn');
  if (cashinModal) {
    cashinModal.classList.remove('show');
      cashinModal.setAttribute('aria-hidden', 'true');
      cashinModal.setAttribute('style', 'display: none;');
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
          modalBackdrop.parentNode?.removeChild(modalBackdrop);
      }
  }}

validateDrawerBleed() {
  if (!this.calculatorInput2 || this.calculatorInput2.trim() === '') {
      alert('Invalid number');
  } 
}




  onUserSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOptions = Array.from(selectElement.options).filter(option => option.selected);

    if (selectedOptions.some(option => option.value === '')) {
      // If "All" is selected
      this.selectedUserId = null;
      this.selectedUsername = null;
      this.selectedfirstname = null;
      this.selectedlastname = null;
      this.selectedDue = null;
    } else {
      // If a specific user is selected
      const userId = parseInt(selectedOptions[0].value, 10);
      const user = this.users.find(user => user.id === userId);

      if (user) {
        this.selectedUserId = user.id;
        this.selectedUsername = user.username;
        this.selectedfirstname = user.firstName;
        this.selectedlastname = user.lastName;
        this.selectedDue = user.Due;
      } else {
        this.selectedUserId = null;
        this.selectedUsername = null;
      }
    }
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

  printContent2() {
    const printWindow = window.open('', '', 'height=600,width=800');
    const content = document.getElementById('printableContent2')?.innerHTML || '';
    
    printWindow?.document.write('<html><head><title>Print</title>');
    printWindow?.document.write('<style> /* Add any specific styles you need for printing */ </style>');
    printWindow?.document.write('</head><body >');
    printWindow?.document.write(content);
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  }

  printContent3() {
    const printWindow = window.open('', '', 'height=600,=800');
    const content = document.getElementById('printableContent3')?.innerHTML || '';
    
    printWindow?.document.write('<html><head><title>Print</title>');
    printWindow?.document.write('<style> /* Add any specific styles you need for printing */ </style>');
    printWindow?.document.write('</head><body >');
    printWindow?.document.write(content);
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  }

  showAssignmentAlert(): void {
   
      this.Assigned = true;
    
  }


  changestatus(): void {
   
      this.Assigned = false;  }

////////////////////////////////////////////////////////
addReason(): void {
    if (this.recipientInput.trim()) {
      this.payoutReasons.push(this.recipientInput.trim());
      this.payoutReason = this.recipientInput.trim();
      this.recipientInput = '';
    }
  }
  appendChar(char: string): void {
    this.recipientInput += char;
  }

  clearRecipientInput(): void {
    if (this.recipientInput.length > 0) {
      this.recipientInput = this.recipientInput.slice(0, -1);
    }
  }

  clearInputre(): void {
    this.recipientInput = '';
  }
  
////////////////////////////////////////////////////////
  addRecipient(): void {
    if (this.recipientInput1.trim()) {
      this.recipients.push(this.recipientInput1.trim());
      this.payoutRecipient = this.recipientInput1.trim();
      this.recipientInput1 = '';
    }
  }
  appendChar1(char: string): void {
    this.recipientInput1 += char;
  }

  clearRecipientInput1(): void {
    if (this.recipientInput1.length > 0) {
      this.recipientInput1 = this.recipientInput1.slice(0, -1);
    }
  }

  clearInputre1(): void {
    this.recipientInput1 = '';
  }
////////////////////////////////////////////////////////
addnote(): void {
  if (this.recipientInput2.trim()) {
   
    this.payoutNote = this.recipientInput2.trim();
    this.recipientInput2 = '';
  }
}
appendChar2(char: string): void {
  this.recipientInput2 += char;
}

clearRecipientInput2(): void {
  if (this.recipientInput2.length > 0) {
    this.recipientInput2 = this.recipientInput2.slice(0, -1);
  }
}

clearInputre2(): void {
  this.recipientInput2 = '';
}

}


