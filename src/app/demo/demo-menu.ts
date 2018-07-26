export const Items = [

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
    },
    {
        'title': 'CRUD',
        'type': 'crud',
        'route': '',
        'icon': 'dns',
        'children': [
            {
                'title': 'Categories',
                'route': 'demo/crud',
                'params': { 'entityType': 'category' },
                'icon': 'user'
            },
            {
                'title': 'Users',
                'route': 'demo/crud',
                'params': { 'entityType': 'user' },
                'icon': 'star'
            }
        ]
    },
    {
        'title': 'Dynamic Form',
        'route': 'demo/dynamic-form',
        'icon': 'chrome_reader_mode'
    },
    {
        'title': 'Localization',
        'route': 'demo/localization',
        'icon': 'language'
    }

];


