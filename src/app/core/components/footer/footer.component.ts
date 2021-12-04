import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
     <footer class="footer">
      <div class="container content has-text-centered">
        <p>Made with Love by sudipto from dev</p>
      </div>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  //test
  constructor() { }

  ngOnInit(): void {
  }

}
