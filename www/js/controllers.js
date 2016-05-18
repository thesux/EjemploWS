angular.module('starter.controllers', [])

.controller('pruebaCtrl',function($scope,$timeout,ws)
{


  $scope.onChange=function(id)
  {
    console.log("Buscando estados");
    ws.getEstados(id).then(function(arrEstados){
      $scope.estados=arrEstados;
      $scope.estadoSelect=$scope.estados[0];
    },function(error){
      console.log(error);
    });

  };

  ws.getPaises().then(function(arrPaises)
  {
    console.log(arrPaises);
    $scope.paises=arrPaises;
    $scope.paisSelect=$scope.paises[0];

    ws.getEstados(1).then(function(arrEstados){
      $scope.estados=arrEstados;
      $scope.estadoSelect=$scope.estados[0];
    },function(error){
      console.log(error);
    });
  });




  //console.log($scope.paises);

})
