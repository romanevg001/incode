angular.module('phonecatApp')

.component('phonecatApp', {
  template: `
    <div class="container"><ng-outlet></ng-outlet></div>
  `,
  $routeConfig: [
    {path: '/phones/...', name: 'Phones', component: 'phones', useAsDefault: true}
  ]
})

;