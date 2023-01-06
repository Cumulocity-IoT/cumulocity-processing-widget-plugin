/*
* Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */

import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SELECTION_MODEL_FACTORY } from '@ng-select/ng-select';
import { DefaultSelectionModelFactory } from './icon-selector/selection-model';
@Component({
    selector: 'lib-gp-lib-processing-widget-config',
    templateUrl: './gp-lib-processing-widget-config.component.html',
    styleUrls: ['./../node_modules/@ng-select/ng-select/themes/default.theme.css', './gp-lib-processing-widget-config.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [FormBuilder,
      { provide: SELECTION_MODEL_FACTORY, useValue: DefaultSelectionModelFactory }
    ],
})
// tslint:disable-next-line: component-class-suffix
export class GpLibProcessingConfig implements OnInit {
  @Input() config: any = {};
  dataLoaded: any;
  displayedColumns = ['displayStatus', 'fieldValue', 'icon', 'action'];
    constructor() {
  }
  ngOnInit() {
    if (this.config.innerChild === undefined) {

      this.config.innerChild = false;

    }
    if (this.config.dataSource === undefined) {
      this.config.dataSource = [{displayStatus: '', fieldValue: '', matIcon: 'bathtub'}];
    }
    this.dataLoaded =  Promise.resolve(true);
  }
  deleteRow(i) {
    this.config.dataSource.splice(i, 1);
    this.dataLoaded =  Promise.resolve(true);
  }
  addNewRow(i) {
    this.config.dataSource.splice(i + 1, 0, {displayStatus: '', fieldValue: '', matIcon: 'bathtub'});
    this.dataLoaded =  Promise.resolve(true);
  }
}
