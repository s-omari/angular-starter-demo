import {
    DynamicFormControlModel,
    DynamicCheckboxModel,
    DynamicInputModel,
    DynamicRadioGroupModel
  } from '@ng-dynamic-forms/core';

  export const CategoryFormModel: DynamicFormControlModel[] = [
    new DynamicInputModel({
      id: 'title',
      label: 'Category Title',
      placeholder: 'Enter category title'
    }),
    new DynamicInputModel({
      id: 'description',
      label: 'Category Description',
      placeholder: 'Enter description of category'
    }),
    ];

    export const UsersFormModel: DynamicFormControlModel[] = [
      new DynamicInputModel({
        id: 'first_name',
        label: 'First name',
        placeholder: 'Enter first name'
      }),
      new DynamicInputModel({
        id: 'last_name',
        label: 'Last name',
        placeholder: 'Enter last name'
      }),
      new DynamicInputModel({
        id: 'email',
        label: 'Email',
        placeholder: 'Enter email'
      })
      ];
