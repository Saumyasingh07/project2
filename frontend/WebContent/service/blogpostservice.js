/**
 *blogpostservice
 */

app.factory('BlogPostService',function($http){
	var blogPostService={}
	
	blogPostService.saveBlog=function(blogPost){
		return $http.post("http://localhost:8090/back1/saveblogpost",blogPost)
	}
	
	blogPostService.blogsApproved=function(){
		return $http.get("http://localhost:8090/back1/listofblogs/"+1)
	}
	
	blogPostService.blogsWaitingForApproval=function(){
		return $http.get("http://localhost:8090/back1/listofblogs/"+0)
	}
	
	blogPostService.getBlogPost=function(id){
		return $http.get("http://localhost:8090/back1/getblogpost/"+id)
	}
	
	blogPostService.updateBlogPost=function(blogpost){
		return $http.put("http://localhost:8090/back1/updateblogpost",blogpost)
	}
	
	blogPostService.addComment=function(blogComment){
		return $http.post("http://localhost:8090/back1/addblogcomment",blogComment)
	}
	
	blogPostService.getBlogComments=function(blogId){
		return $http.get("http://localhost:8090/back1/getblogcomments/"+blogId)
	}
	return blogPostService;
})
