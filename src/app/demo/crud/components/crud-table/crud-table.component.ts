import { Component, OnInit , AfterViewInit , Input ,
  Output , EventEmitter , ViewChild , OnChanges , SimpleChanges , SimpleChange
, ChangeDetectionStrategy} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudTableComponent implements OnInit , AfterViewInit , OnChanges {

  // material table properties
  displayedColumns = [];
  dataSource: MatTableDataSource<any>;
  selectedRowId = -1;


  @Input() entities: any;
  @Input() selectedEntityId: number;
  @Input() columns: any;
  @Output() onEntitySelect = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() {

   }

   ngOnChanges(changes: SimpleChanges) {

    const columns: SimpleChange = changes.columns;
    const entities: SimpleChange = changes.entities;

    this.displayedColumns = columns.currentValue;
    this.dataSource = new MatTableDataSource(entities.currentValue);


}

  ngOnInit() {
    this.displayedColumns = this.columns;
    this.dataSource = new MatTableDataSource(this.entities);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectEntity(event) {
    this.onEntitySelect.emit(event);
  }
  highlight(row) {
    this.selectedRowId = row.id;
}

}
