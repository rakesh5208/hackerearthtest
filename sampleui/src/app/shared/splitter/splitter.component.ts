import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-splitter',
  templateUrl: './splitter.component.html',
  styleUrls: ['./splitter.component.scss']
})
export class SplitterComponent implements OnInit {

 
  @Input() value = '';
  
  spillted:string[] = []
  constructor() { }

  ngOnInit() {
    this.spillted = this.value.split('|');
  }

}
