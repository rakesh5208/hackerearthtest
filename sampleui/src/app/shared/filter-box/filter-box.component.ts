import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit , OnChanges {

  _options = [];
  _selectedFilter = [];

  set options(options){
    this._options = options;
  }
  @Input() get options(){
    return this._options;
  }  
  
  @Output() onChange = new EventEmitter();

  @Input() selectedFilters = [];
  @Output() selectedFiltersChange = new EventEmitter();
  @Input() isOpen = false;
  @Output() isOpenChange =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes:SimpleChanges){
    
  }

  getCheckedStatus(o){
    return this.selectedFilters.indexOf(o) !== -1;
  }

  selectOption(o:string){
    const idx = this.selectedFilters.indexOf(o);
    if(idx != -1){
      this.selectedFilters.splice(idx,1);
    }else{
      this.selectedFilters.push(o);
    }
    this.onChange.emit([...this.selectedFilters]);
  }

  outsideHandler(event){
    if(this.isOpen){
      this.isOpen = false;
      this.isOpenChange.emit(this.isOpen);
     
    }
  }
}
