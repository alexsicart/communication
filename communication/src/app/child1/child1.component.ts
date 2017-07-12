import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  text: String;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.event.subscribe((string) => {
      this.text = string;
    });
  }

}
