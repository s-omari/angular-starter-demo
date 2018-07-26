import { CategoryFormModel , UsersFormModel} from './crudFormModels';

export const categoriesConfig = {
    apiPath: 'http://restful.api/categories',   // api url of entity
    FormConfig: CategoryFormModel,                // form fields object
    entityTitle: 'category',                      // title
    entityTitlePlural: 'categories',              // plural title
    showColumns: [ 'title' , 'description']       // choose which columns to display in table
  };

  export const usersConfig = {
    apiPath: 'http://restful.api/users',
    FormConfig: UsersFormModel,
    entityTitle: 'user',
    entityTitlePlural: 'users',
    showColumns: [ 'first_name' , 'email']
  };









// replace with db
  export const categoriesList = [
      {'id' : 1, 'title': 'shoes' , 'description': 'fast shoes'} ,
      {'id' : 2, 'title': 'cars' , 'description': 'lorem ipsum'} ,
  ];

  export const usersList = [
    {'id' : 1, 'first_name': 'mike ike' , 'last_name': 'ike' , 'email': 'mike@ike.com'} ,
    {'id' : 2, 'first_name': 'joe' , 'last_name': 'moe' , 'email': 'joe@ipsum.com'} ,
    {'id' : 3, 'first_name': 'moe' , 'last_name': 'moe' , 'email': 'joe@ipsum.com'} ,
    {'id' : 4, 'first_name': 'joe' , 'last_name': 'moe' , 'email': 'joe@ipsum.com'} ,
    {'id' : 5, 'first_name': 'joe' , 'last_name': 'moe' , 'email': 'joe@ipsum.com'} ,
  ];
