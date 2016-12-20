angular.module('phones')

.component('phoneList', {
    templateUrl: './js/phones/phone-list/phone-list.template.html',
    controller: function(phoneApi){
      phoneApi.getPhones().then((res)=>{
          this.phones = res.data.phones;
      })
    }
})

;