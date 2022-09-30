(function(){
angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;

      }
  );
});

angular.module('post', []);

angular.module('post').controller('MyController', function ($scope, $http, $location){
  var absUrl = $location.absUrl();
  var url = absUrl.split("#/");
  console.log(url);
  $http({
     method: 'GET',
     url: 'https://api-fake-blog.herokuapp.com/postagem/'+url[1]
  }).then(function (data){
    $scope.publicacao = data.data;
    console.log(data.data);
    
  },function (error){

  });
})
})()