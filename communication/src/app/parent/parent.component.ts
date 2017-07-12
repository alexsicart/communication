import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [SearchService]
})
export class ParentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
