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

 describe('ExplorationDraftObjectFactory', function() {
   beforeEach(module('oppia'));

   describe('exploration draft object factory', function() {
     var ExplorationDraftObjectFactory = null;
     var explorationIdOne = '100';
     var draftChangeListIdOne = 2;
     var changeList = [];
     var saveOne = {
       draftChanges: changeList,
       draftChangeListId: draftChangeListIdOne
     };
     var saveOneObject = null;

     beforeEach(inject(function($injector) {
       ExplorationDraftObjectFactory = $injector.get(
         'ExplorationDraftObjectFactory');
       saveOneObject = ExplorationDraftObjectFactory.createFromDict(saveOne);
     }));

     fit('should determine if the draft is valid', function() {
       expect(saveOneObject.isDraftValid(draftChangeListIdOne)).toBeTruthy();
       expect(saveOneObject.isDraftValid(draftChangeListIdOne + 1)).toBeFalsy();
     });

     it('should return the correct changeList', function() {
       expect(saveOneObject.getDraftChanges()).toEqual(changeList);
     });
   });
 });
