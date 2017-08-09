app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8090/back1/registration",user)
		
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8090/back1/login",user)
		
	}
	
	userService.logout=function(){
		return $http.get("http://localhost:8090/back1/logout")
	}
	
	userService.getUserByUsername=function(){
		return $http.get("http://localhost:8090/back1/getuserdetails")
	}
	
	userService.updateUserProfile=function(user){
		return $http.put("http://localhost:8090/back1/updateprofile",user)
	}
	
	
	
	return userService;
	
})