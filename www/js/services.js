angular.module('starter.services', [])


.factory('ws',function($http,$q,$timeout){

  var paises=[{id: 1,nombre: 'Mexico'},{id: 2,nombre:'Argentina'},{id: 3,nombre: 'USA'},{id: 4,nombre: 'España'},{id: 5, nombre: 'Japon'}];
  var estados2=[[{id: 1,nombre: 'Estado1', idPais: 1},{id: 2,nombre: 'Estado2',idPais: 1}],
                  [{id: 3,nombre: 'Estado3',idPais: 2},{id: 4,nombre: 'Estado4',idPais: 2}],
                  [{id: 5,nombre: 'Estado5', idPais: 3},{id: 6,nombre: 'Estado6', idPais: 3}],
                  [{id: 7,nombre: 'Estado7', idPais: 4}],
                  [{id: 8,nombre: 'Estado8', idPais: 5}]];

  function getPaises()
  {
    var diferido=$q.defer();
    $timeout(function(){
      diferido.resolve(paises);
    },2000);
    return diferido.promise;
  }

  function getEstados(id)
  {

    var diferido=$q.defer();
    if(((id<1)||(id>5))||(id==null))
    {
      diferido.reject("Error: Pais no existente");
      return diferido.promise;
    }
    $timeout(function(){
      diferido.resolve(estados2[id-1]);
    },2000);
    return diferido.promise;

  }

  return {
    getPaises: getPaises,
    getEstados: getEstados
  };
})
