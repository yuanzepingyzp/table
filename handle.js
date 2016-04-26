var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope,$filter){
  $scope.stu=[
      {name:"孙行者",id:1261710125, math:100,chinese:80,english:70},
      {name:"者行孙",id:1261710126, math:90,chinese:85,english:75},
      {name:"行者孙",id:1261710127, math:80,chinese:90,english:85},
      {name:"孙悟空",id:1261710128, math:100,chinese:80,english:65},
      {name:"悟空孙",id:1261710129, math:90,chinese:85,english:80},
      {name:"悟空孙",id:1261710130, math:80,chinese:90,english:80},
      {name:"猪五戒",id:1261710131, math:60,chinese:80,english:95},
    {name:"猪六戒",id:1261710132, math:70,chinese:85,english:100},
    {name:"猪七戒",id:1261710133, math:60,chinese:90,english:90},
    {name:"猪八戒",id:1261710134, math:80,chinese:80,english:95},
    {name:"猪九戒",id:1261710135, math:70,chinese:85,english:100},
    {name:"猪十戒",id:1261710136, math:50,chinese:90,english:90},
      {name:"唐三藏",id:1261710137, math:60,chinese:85,english:95},
    {name:"唐四藏",id:1261710138, math:60,chinese:85,english:100},
    {name:"唐五藏",id:1261710139, math:60,chinese:90,english:90},
    {name:"唐六藏",id:1261710140, math:70,chinese:100,english:95},
    {name:"唐七藏",id:1261710141, math:70,chinese:100,english:100},
    {name:"唐八藏",id:1261710142, math:70,chinese:100,english:90}
  ];
  $scope.showstu=$scope.stu.slice(0,6);
  $scope.isreverse=false;
  $scope.orderbyname=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'name',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,6);
  }
  $scope.orderbyid=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'id',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,6);
  }
  $scope.orderbymath=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'math',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,6);
  }
  $scope.orderbychinese=function(){
  $scope.stu=$filter('orderBy')($scope.stu,'chinese',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,6);
  }
  $scope.orderbyenglish=function(){
    $scope.stu=$filter('orderBy')($scope.stu,'english',$scope.isreverse);
    $scope.isreverse=!($scope.isreverse);
    $scope.showstu=$scope.stu.slice(0,6);
  }
 $scope.pagenumber=0;
   $scope.prevarray=function(){
     $scope.pagenumber=$scope.pagenumber-6;
     $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+6);
   }
   $scope.nextarray=function(){
     $scope.pagenumber=$scope.pagenumber+6;
     $scope.showstu=$scope.stu.slice($scope.pagenumber,$scope.pagenumber+6);
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
     if($scope.pagenumber+6==$scope.stu.length)
     return true;
     else {
       return false;
     }
   };
});
