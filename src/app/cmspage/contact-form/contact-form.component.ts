import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(
    private route: Router,
    private cmspageService: CmspageService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    return this.cmspageService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  gotoHome() {
    this.route.navigate(['/']);
  }


}
