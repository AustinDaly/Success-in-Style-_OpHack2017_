$scope.sendscore = function() {
$http.post('/signup-success', $scope.credentials).success(function(response){
  Authentication.user = response;

  email.to = User.email;
  email.text = "Test";
  email.html = "Another Test";
  transporter.sendMail(email, function(err, info){

  });
}).error(function(response){
  $scope.error = response.message;
});

}
