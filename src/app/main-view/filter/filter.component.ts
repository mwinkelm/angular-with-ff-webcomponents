import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {


  public lang = 'en';

  public searchFor = 'Search for';

  constructor(
) {
  }

  ngOnInit() {
  }

}
