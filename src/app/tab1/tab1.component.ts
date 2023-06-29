import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component {
  constructor(private router:Router){

  }
  go(){
    this.router.navigateByUrl("info");
  }
}
