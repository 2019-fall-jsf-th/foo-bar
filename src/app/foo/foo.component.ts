import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  // DI via TS automatic properties...
  constructor(private sdSvc: SharedDataService) { }

  ngOnInit() {
  }

  // Temporary property just to show the data binding was working.
  //sharedData = 'Foo Shared Data';

  // TS getter property... Getter means we can run code when it is requested...
  get sharedData() {
    return this.sdSvc.data;
  }

  changeSharedData = () => {
    console.log('changeSharedData()');
    this.sdSvc.data = 'Foo';
  }
}
