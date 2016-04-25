var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope){
  $scope.isreverse=false;
  $scope.orderbyname=function(){
    $scope.ordercol="name";
      $scope.isreverse=!($scope.isreverse);
  }
  $scope.orderbyid=function(){
    $scope.ordercol="id";
    $scope.isreverse=!($scope.isreverse);
  }
  $scope.orderbymath=function(){
    $scope.ordercol="math";
    $scope.isreverse=!($scope.isreverse);
  }
  $scope.orderbychinese=function(){
    $scope.ordercol="chinese";
    $scope.isreverse=!($scope.isreverse);
  }
  $scope.orderbyenglish=function(){
    $scope.ordercol="english";
    $scope.isreverse=!($scope.isreverse);
  }
  $scope.arraynumber=0;
 $scope.stu=[[
     {name:"孙行者",id:1261710137, math:100,chinese:80,english:95},
     {name:"者行孙",id:1261710138, math:90,chinese:85,english:100},
     {name:"行者孙",id:1261710139, math:80,chinese:90,english:90}
   ],[{name:"猪八戒",id:1261710137, math:100,chinese:80,english:95},
   {name:"猪九戒",id:1261710138, math:90,chinese:85,english:100},
   {name:"猪十戒",id:1261710139, math:80,chinese:90,english:90}]]
   $scope.prevarray=function(){
     $scope.arraynumber=$scope.arraynumber-1;
   }
   $scope.nextarray=function(){
     $scope.arraynumber=$scope.arraynumber+1;
   }
   $scope.ishide=true;
   $scope.changeishide=function(){
     $scope.ishide=!($scope.ishide);
   }
});
