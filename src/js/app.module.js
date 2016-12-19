angular.module('phonecatApp', [
  'ngComponentRouter',
  'phoneList',
  'ui.bootstrap'
])
// .config(function($locationProvider) {
//   $locationProvider.html5Mode(true);
// })
.value('$routerRootComponent', 'phonecatApp')
.constant('api', {
      url: config.url
})

.component('phonecatApp', {
  template: `
  <div class="container">
    <ng-outlet></ng-outlet>
  </div>
  `,

  $routeConfig: [
    {path: '/phones/...', name: 'Phones', component: 'phones', useAsDefault: true}
  ]
})

;