# Angular6 Material Starter Application
Angular 6 starter application 
# See [Live Demo](https://s-omari.github.io/angular-starter-demo/)
#



Consumes http://resto.thedemo.co/api/documentation as restful api.

- email : admin@admin.com
- password : password

## Main Features
- Angular Material with custom theming and theme switcher
- user signup / login / logout / authentication
- Social login (facebook , google)
- Reactive and dynamic form builder
- Localization , support multiple languages
- CRUD opperations
- Responsive Design
- landing page seperate from main application


## Suggested Implementation Libraries

| Feature | Implementation Library | Status |
| --- | --- | --- |
| Grid/layout system | [bootstrap-grid](https://getbootstrap.com/docs/4.0/layout/grid/) , [bootstrap-utilities](https://getbootstrap.com/docs/4.0/utilities/) | Implemented |
| Dynamic form builder | [ng-dynamic-forms](https://github.com/udos86/ng-dynamic-forms)   | Implemented |
| UI Library | [Angular Material](https://material.angular.io/)   | Implemented |
| Material Theme Switcher | [Angular Material](https://material.angular.io/guide/theming#multiple-themes)   | Implemented |
| Social login| [angularx-social-login](https://github.com/abacritt/angularx-social-login.git)   | Implemented |
| Styling / SCSS  | [sass-boilerplate](https://github.com/HugoGiraudel/sass-boilerplate.git) , [css3 mixins](../master/src/assets/scss/abstracts/_css3-mixins.scss)  | Implemented |
| Common Validators | --  | -- |
| Localization  | [ngx-translate](https://github.com/ngx-translate/core) | Implemented |




## Styling

[Main application styling (SCSS)](../master/src/assets/scss)
* be sure to use provided [css3 mixins](../master/src/assets/scss/abstracts/_css3-mixins.scss) for cross browser support ([documentation](https://github.com/matthieua/sass-css3-mixins)) 


[Add/Customize Material Themes](../master/src/assets/material/theme.scss)


## Development server

Run `npm run start` , Navigate to `http://localhost:4200/`. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.