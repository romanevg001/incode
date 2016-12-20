angular.module('phones')

.component('phones', {
    template: '<h2>Phones</h2><ng-outlet></ng-outlet>',

    $routeConfig: [
      {path: '/',    name: 'PhoneList',   component: 'phoneList', useAsDefault: true},
      {path: '/:id', name: 'PhoneDetail', component: 'phoneDetail'}
    ]
})