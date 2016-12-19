 angular.module('phonecatApp')
 .component('phonecatModal', {
    templateUrl: './js/modal/modal.template.html',
    bindings: {
      modalInstance: "<",
      resolve: "<"
    },
    controller: function() {    
      
      // this.phone = this.resolve.modalData;
      // console.log(this.phone);

      this.handleClose = () =>{
        this.modalInstance.close();
      };

      this.send = function() {
         console.log("in handle dismiss");
        this.modalInstance.close();
      }

    //   $ctrl.handleDismiss = function() {
    //     console.info("in handle dismiss");
    //     $ctrl.modalInstance.dismiss("cancel");
    //   };
    }
  });