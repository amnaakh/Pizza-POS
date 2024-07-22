import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FeathericonsModule } from '../../icons/feathericons/feathericons.module';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-change-password',
    standalone: true,
    imports: [
        RouterLink,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        FeathericonsModule,
        ReactiveFormsModule,
        CommonModule // Import CommonModule here
    ],
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
    // Reactive form
    changePasswordForm: FormGroup;

    // Password visibility
    hide = true;
    hide2 = true;
    hide3 = true;

    constructor(private fb: FormBuilder) {
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validators: this.passwordMatchValidator });
    }

    // Custom validator to check if new password and confirm password match
    passwordMatchValidator(formGroup: FormGroup) {
        const newPassword = formGroup.get('newPassword')?.value;
        const confirmPassword = formGroup.get('confirmPassword')?.value;

        return newPassword === confirmPassword ? null : { mismatch: true };
    }

    onSubmit() {
        if (this.changePasswordForm.valid) {
            // Handle form submission
            console.log('Form Submitted', this.changePasswordForm.value);
        } else {
            // Display validation errors
            console.log('Form is invalid');
        }
    }
}
