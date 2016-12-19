angular.module('phoneList')

.component('phones', {
    template: '<h2>Phones</h2><ng-outlet></ng-outlet>',

    $routeConfig: [
      {path: '/',    name: 'PhoneList',   component: 'phoneList', useAsDefault: true},
      {path: '/:id', name: 'PhoneDetail', component: 'phoneDetail'}
    ]
  })

.component('phoneList', {
    templateUrl: './js/phone-list/phone-list.template.html',
    controller: function(phoneService){
      phoneService.getPhones().then((res)=>{
          this.phones = res.data.phones;
      })
    }
})

.component('phoneDetail', {
   templateUrl: './js/phone-list/phone-detail.template.html',
   bindings: { $router: '<' },
   controller: function(phoneService, $uibModal){
      
      this.$routerOnActivate = function(next) {  
        phoneService.getPhone(next.params.id).then((res)=>{
          this.phone = _.find(res.data.phones, function(o) { return o.id == next.params.id; });
        });   
      }
     
      this.open = () =>{
        $uibModal.open({
          component: "phonecatModal",
          resolve: {
            modalData: ()=>{
               return this.phone;
            }
          }
        }).result.then(function(result) {
          console.info("I was closed, so do what I need to do myContent's controller now.  Result was->");
          console.info(result);
        }, function(reason) {
          console.info("I was dimissed, so do what I need to do myContent's controller now.  Reason was->" + reason);
        });
      };
    },
})



.filter('phoneFilter', function(){
   return function (arr, ...filters) {
          
     if(filters[0] == undefined || filters[1] == undefined) return arr;

     let foundSmth = _.filter(arr, function(o) { return o[filters[0].toLowerCase()].indexOf(filters[1]) != -1; });

     return foundSmth || arr
  
   }
})
;