import { Component } from '@angular/core';
import { IGridColumnDef } from 'sd-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  cols: IGridColumnDef[] = [
    {
      name: 'First Name',
      prop: 'firstName',
      width: 100
    },
    {
      name: 'Last Name',
      prop: 'lastName',
      width: 100
    }
  ];

  rows = [
    {
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ];
}
