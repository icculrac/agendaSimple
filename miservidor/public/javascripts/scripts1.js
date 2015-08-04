var myApp = angular.module('myApp',[]);

myApp.controller('AlumnosController',['$scope',function($scope){
	$scope.alumnos=[
		{nombre:"Rafael Carlucci", telefono: "123", curso: "UCAB"},
		{nombre:"Amavelys Millan", telefono: "123", curso: "UDO"},
		{nombre:"icculrac", telefono: "123", curso: "UCAB"},
		{nombre:"seranemloc", telefono: "123", curso: "UCAB"}];


$scope.Save=function(){
	$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso});
	$scope.nuevoAlumno="";
	$scope.formVisibility=false;
	console.log($scope.formVisibility)
}

$scope.formVisibility=false;

$scope.ShowForm=function(){
	$scope.formVisibility=true;
	console.log($scope.formVisibility)
}

}]);

