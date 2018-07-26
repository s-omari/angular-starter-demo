import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-components',
  templateUrl: './custom-components.component.html',
  styleUrls: ['./custom-components.component.scss']
})


export class CustomComponentsComponent implements OnInit {

  user: any = {
    'avatar': 'https://lh6.googleusercontent.com/-aSC0Dcj7tIg/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7rul_P8FT8_8B5Rl6ki3yY9ztGYcg/s96-c/photo.jpg',
    'email': 'saleh.omari@247labs.com',
    'firstName': 'Saleh',
    'id': '101671379837217301555',
    'lastName': 'Omari',
    'name': 'Saleh Omari',
    'provider': 'GOOGLE'
  };

  menuItems: any = [
    {
      'title': 'Dynamic Form',
      'route': 'demo/dynamic-form',
      'icon': 'chrome_reader_mode'
    },
    {
      'title': 'UI Components',
      'route': 'demo/ui-components',
      'icon': 'important_devices',
      'children': [
        {
          'title': 'material components',
          'route': 'demo/ui-components/material-components',
          'icon': 'table'
        },
        {
          'title': 'custom components',
          'route': 'demo/ui-components/custom-components',
          'icon': 'table'
        }
      ]
    }
  ];

  breadcrumbs: any = [
    {
      'title': 'Menu',
      'type': 'menu',
      'menu-items': [{ title: 'item 1' }, { title: 'item 1' }],
    },
    {
      'title': 'Category',
      'type': 'button',
    },
  ];


  tsCode = `import { HighlightModule } from 'ngx-highlightjs';

  @NgModule({
    imports: [
      HighlightModule.forRoot({ theme: 'agate' })
    ]
  })
  export class AppModule { }`;


  constructor() {
  }

  ngOnInit() {
  }


}

