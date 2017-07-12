import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {

  @ViewChild('searchBox')
  searchBoxInput;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    // this.searchBoxInput.nativeElement.addEventListener('keyup', (e) => {
    //   console.log('ping!');
    //   console.log(this.searchService.event);
    //   console.log(this.searchService.event.emit(e.target.value));
    // });

    Observable.fromEvent(
      this.searchBoxInput.nativeElement,
      'keyup'
    )
    .subscribe((el:any) => {
        console.log('ping!');
        console.log(el.target.value);
        console.log(this.searchService.event.emit(el.target.value));
    })

  }

}
