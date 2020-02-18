import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements  OnInit {
  product = [
    {
      name: 'Cafe',
      price: 12000
    },
    {
      name: 'Tings',
      price: 12000
    }
  ];
  items: {'hoa'};
  ngOnInit(): void {
    console.log(this.product);

  }
}
