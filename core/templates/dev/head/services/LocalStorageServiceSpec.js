// Copyright 2017 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview unit tests for the local save services.
 */

 describe('LocalStorageService', function() {
   beforeEach(module('oppia'));

   describe('behavior in editor', function() {
     var LocalStorageService = null;
     var explorationIdOne = '100';
     var draftChangeListIdOne = 2;
     var changeListOne = [{change: 'A change'}];
     var changeListTwo = [{change: 'A different change'}];
     var explorationIdTwo = '101';
     var draftChangeListIdTwo = 1;
     var saveOne = {
       draftChanges: changeList,
       draftChangeListId: draftChangeListIdOne
     };
     var saveTwo = {
       draftChanges: changeList,
       draftChangeListId: draftChangeListIdTwo
     };
     var saveOneObject = null;
     var saveTwoObject = null;

     beforeEach(inject(function($injector) {
       LocalStorageService = $injector.get('LocalStorageService');
       ExplorationDraftObjectFactory = $injector.get(
         'ExplorationDraftObjectFactory');
       saveOneObject = ExplorationDraftObjectFactory.createFromDict(saveOne);
       saveTwoObject = ExplorationDraftObjectFactory.createFromDict(saveTwo);
     }));

     it('should correctly save the draft', function() {
       LocalStorageService.saveExplorationDraft(explorationIdOne,
         changeList, draftChangeListIdOne);
       LocalStorageService.saveExplorationDraft(explorationIdTwo,
         changeList, draftChangeListIdTwo);
       expect(LocalStorageService.getExplorationDraft(
         explorationIdOne)).toEqual(saveOneObject);
       expect(LocalStorageService.getExplorationDraft(
         explorationIdTwo)).toEqual(saveTwoObject);
     });

     it('should correctly remove the draft', function() {
       LocalStorageService.saveExplorationDraft(explorationIdTwo,
         changeList, draftChangeListIdTwo);
       LocalStorageService.removeExplorationDraft(explorationIdTwo);
       expect(LocalStorageService.getExplorationDraft(
         explorationIdTwo)).toBeNull();
     });
   });
 });
