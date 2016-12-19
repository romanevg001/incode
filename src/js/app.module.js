angular.module('phonecatApp', [
  'ngComponentRouter',
  'phoneList'
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
// .component('phoneMenu', {
//   template: `
//     <nav>
//       <a ng-link="['PhoneList']">Phone list</a>
//     </nav>
//   `,
//   $routeConfig: [
//     {path: '/...', name: 'PhonecatApp', component: 'phonecatApp', useAsDefault: true}
//   ]
// })
;