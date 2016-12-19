 angular.module('phonecatApp')
 .component('phonecatModal', {
    templateUrl: './js/modal/modal.template.html',
    bindings: {
      modalInstance: "<",
      resolve: "<"
    },
    controller: function() {    

      this.handleClose = () =>{
        this.modalInstance.close();
      };

      this.send = () =>{

        this.modalInstance.close();
      }

    }
  });