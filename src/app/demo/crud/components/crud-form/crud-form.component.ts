import { Component, OnInit, Input } from '@angular/core';

import { FormGroup , FormsModule , ReactiveFormsModule} from '@angular/forms';
import { DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';

@Component({
  selector: 'crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss']
})
export class CrudFormComponent implements OnInit {

//  formModel: DynamicFormControlModel[];
  formGroup: FormGroup;

  @Input() formModel: DynamicFormControlModel[];
  @Input() entity: any;
  @Input() rightContent: string;
  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.formGroup = this.dynamicFormService.createFormGroup(this.formModel);
  }

}
