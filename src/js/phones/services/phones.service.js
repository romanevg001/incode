angular.module('phones')

.filter('phoneListFilter', function(){
   return function (arr, filterBy, filterField) {
          
     if(filterBy == undefined || filterField == undefined) return arr;

     let foundSmth = _.filter(arr, function(o) { return o[filterBy.toLowerCase()].toLowerCase().indexOf(filterField.toLowerCase()) != -1; });

     return foundSmth || arr
  
   }
})
;