import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = {
    name: '',
    contactMethod: 'Choose',
    contactInfo: '',
    message: ''
  };

  responseMessage = '';
  isLoading = false;
  formSubmitted = false;  // ✅ ADDED: Tracks if form has been submitted

  private apiUrl = 'https://xpwx6ugfb0.execute-api.us-east-1.amazonaws.com/prod/UserMessageToEmail';


  constructor(private http: HttpClient) {}

  onSubmit() {
    this.formSubmitted = true;  // ✅ Marks form as submitted

    if (!this.validateForm()) return;

    this.isLoading = true;

    this.http.post(this.apiUrl, this.formData).pipe(
        finalize(() => this.isLoading = false)
    ).subscribe(
        (response) => {
          this.responseMessage = 'Form submitted successfully!';
          console.log('Success:', response);
          this.resetForm();
        },
        (error) => {
          this.responseMessage = 'Error submitting form. Please try again.';
          console.error('Error:', error);
        }
    );
  }

  validateForm(): boolean {
    return this.formData.name.trim() !== '' &&
        this.formData.contactMethod !== 'Choose' &&
        this.formData.contactInfo.trim() !== '' &&
        this.formData.message.trim() !== '';
  }

  resetForm() {
    this.formData = { name: '', contactMethod: 'Choose', contactInfo: '', message: '' };
    this.formSubmitted = false;  // ✅ Resets submission state
  }
}
