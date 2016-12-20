angular.module('phones')

.service('phoneApi',function(api, $http){
  return {
    getPhones: function(){
      return $http({
          method: 'GET',
          url: api.url + '/data/phonesList.json'
      })
    },
    getPhone: function(id){
      return $http({
          method: 'GET',
          url: api.url + '/data/phonesList.json'
      })   
    }
  }
})
;