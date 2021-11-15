import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Contact Us</h1>
      </div>
    </div>
  </section>


  <!-- {{ nameInput.errors | json}} -->

  <section class="section">
  <div class="container">


    <!-- contact form -->
    <form (ngSubmit)="submitForm()" #contactForm="ngForm">

    {{ contactForm.valid | json }}
      <!-- name -->

      <div class="field">
        <label class="label">Name</label>
        <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required>
        <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">your name is required</div>
      </div>

      <!-- emai --> 

      <div class="field">
        <label class="label">Email</label>
        <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required email>
        <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">a valid email is required</div>
      </div>

      {{ emailInput.errors | json}}

      <!-- message -->

      <div class="field">
        <label class="label">Name</label>
        <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
      </div>

      <!-- submit button -->

      <button type="submit" class="button is-large is-warning" [disabled]="contactForm.invalid">
        Send!
      </button>

    </form>

  </div>
  </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {}

  submitForm(){
    //grab all the fields and their values
    //alert("i am submitting the form")
    //const message = `${this.name} | ${this.email} | ${this.message} `;
    //alert(message);

  }

}
