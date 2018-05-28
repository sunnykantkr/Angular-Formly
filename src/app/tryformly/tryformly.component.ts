import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig,FormlyFormOptions } from '@ngx-formly/core';

import { Subject } from 'rxjs';
import { takeUntil, startWith, tap } from 'rxjs/operators';  // helps in cascade of ddl

@Component({
  selector: 'my-app',
  templateUrl: './tryformly.component.html',
})
export class TryformlyComponent implements OnDestroy{

  onDestroy$ = new Subject<void>(); // created for cascade ddl service

  form = new FormGroup({});
  model :any = {};
  options : FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        //required: true,
        label: 'Name',
      }
    },
    {
      key: 'iLikeCode',
      type: 'checkbox',
      templateOptions: {
        label: 'I like to code',
      },
      hideExpression: '!model.name',
    },
    {
      key: 'country',
      type: 'select',
      templateOptions: {
        label: 'Select Country',
        options: [
          {label: 'India', value: 'india'},
          {label: 'USA', value: 'us'},
          {label: 'Canada', value: 'canada'}
        ],
        valueProp: 'value',
        labelProp: 'label',
      },
     //hideExpression: '!model.iLikeCode' // commented as cascade does not work get error :: Cannot read property 'valueChanges' of null
    },
    {
      key: 'city',
      type: 'select',
      templateOptions: {
        label: 'Select City',
        options: [],
        valueProp: 'id',
        labelProp: 'name',
      },
      lifecycle: {
        onInit: (form, field) => {
          const cities = [
            { id: '1', name: 'New Delhi', countryId: 'india' },
            { id: '2', name: 'Noida', countryId: 'india' },
            { id: '3', name: 'Seattle', countryId: 'us' },
            { id: '4', name: 'Toronto', countryId: 'canada' },
          ];

          form.get('country').valueChanges.pipe(
            takeUntil(this.onDestroy$),
            startWith(form.get('country').value),
            tap(countryId => {
              field.formControl.setValue('');
              field.templateOptions.options = cities.filter(city => city.countryId === countryId);
            }),
          ).subscribe();
        },
      },
     //hideExpression: '!model.iLikeCode' // commented as cascade does not work get error :: Cannot read property 'valueChanges' of null
    },    
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        "label": "GenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGenderGender GenderGenderGenderGenderGenderGenderGenderGenderGender",
        "inline":true,
        "options": [
          {
            "label": "Male",
            "value": "m"
          },
          {
            "label": "Female",
            "value": "f"
          }
        ]
      },
      hideExpression: '!model.iLikeCode',
    },
  ];

  submit() {
    console.log(this.model);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}