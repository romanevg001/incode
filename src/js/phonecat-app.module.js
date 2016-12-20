angular.module('phonecatApp', [
  'ngComponentRouter',
  'phones',
  'ui.bootstrap'
])
.value('$routerRootComponent', 'phonecatApp')
.constant('api', {
      url: config.url
})
;