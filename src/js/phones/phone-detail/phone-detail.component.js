angular.module('phones')

.component('phoneDetail', {
   templateUrl: './js/phones/phone-detail/phone-detail.template.html',
   bindings: { $router: '<' },
   controller: function(phoneApi, $uibModal){
      
      this.$routerOnActivate = function(next) {  
        phoneApi.getPhone(next.params.id).then((res)=>{
          this.phone = _.find(res.data.phones, function(o) { return o.id == next.params.id; });
        });   
      }
     
      this.open = () =>{
        $uibModal.open({
          component: "phoneModal",
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


;