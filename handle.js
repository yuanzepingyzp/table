var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope,$filter,$http){
    $http.get("data.json").success(function(response){
    $scope.stu=response.students;
    $scope.showstu=$scope.stu.slice(0,9);
  })
  $scope.isreverse=false;
  $scope.orderbyname=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'name',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,9);
  }
  $scope.orderbyid=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'id',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,9);
  }
  $scope.orderbymath=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'math',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,9);
  }
  $scope.orderbychinese=function(){
  $scope.stu=$filter('orderBy')($scope.stu,'chinese',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,9);
  }
  $scope.orderbyenglish=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'english',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,9);
  }
 $scope.pagenumber=0;
   $scope.prevarray=function(){
     $scope.pagenumber=$scope.pagenumber-9;
     $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+9);
   }
   $scope.nextarray=function(){
     $scope.pagenumber=$scope.pagenumber+9;
     $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+9);
   }

   $scope.ishide=true;
   $scope.changeishide=function(){
     $scope.ishide=!($scope.ishide);
   }
   $scope.isfirst=function(){
     if($scope.pagenumber==0)
     return true;
     else {
       return false;
     }
   };
   $scope.islast=function(){
     if($scope.pagenumber+9==$scope.stu.length)
     return true;
     else {
       return false;
     }
   };
   $scope.searchname=function(){
      if($scope.key!="")
      $scope.showstu=$filter('filter')($scope.stu,{name:$scope.key});
      else {
        $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+9);
      }

   }
   $scope.searchid=function(){
      if($scope.key1!="")
      $scope.showstu=$filter('filter')($scope.stu,{id:$scope.key1});
      else {
        $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+9);
      }

   }
   $scope.searchmath=function(){
      if($scope.key2!="")
      $scope.showstu=$filter('filter')($scope.stu,{math:$scope.key2});
      else {
        $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+9);
      }

   }
   $scope.searchchinese=function(){
      if($scope.key3!="")
      $scope.showstu=$filter('filter')($scope.stu,{chinese:$scope.key3});
      else {
        $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+9);
      }

   }
   $scope.searchenglish=function(){
      if($scope.key4!="")
      $scope.showstu=$filter('filter')($scope.stu,{english:$scope.key4});
      else {
        $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+9);
      }
   }
   $scope.boxhide=true;
   $scope.changebox=function(){
     $scope.boxhide=!($scope.boxhide);
   }
});
