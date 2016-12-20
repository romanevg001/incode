angular.module('phones')
.component('phoneModal', {
  templateUrl: './js/phones/modal/modal.template.html',
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