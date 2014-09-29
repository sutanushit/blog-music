var blogApp = angular.module('homeControllers',[]);


blogApp.controller('homeControllers', function homeControllers($scope) {
  $scope.oddposts = [
  {
    "title":"title of tehe post",
    "time":"24 sept, 14",
    "image_url":"image/post.jpg",
    "description":"post details",
    "post_link":"www.google.com"
  },
  {
    "title":"Priyanka",
    "time":"25 sept, 14",
    "image_url":"image/m2.jpg",
    "description":"about the post",
    "post_link":"www.google.com"
  },
  
  {
    "title":"Enrique",
    "time":"26 sept, 14",
    "image_url":"image/Enrique1.jpg",
    "description":"encourage readers to keep coming back",
    "post_link":"htttp://www.google.com"
  }
];
$scope.evenposts = [
  {
    "title":"Priyanka and Pittbull ",
    "time":"26 sept, 14",
    "image_url":"image/m1.jpg",
    "description":" I'm so exotic",
    "post_link":"htttp://www.google.com"
  },
  {
    "title":"Enrique2",
    "time":"25 sept, 14",
    "image_url":"image/enrique2.jpg",
    "description":"sing with me",
    "post_link":"www.google.com"
  },
  {
    "title":"3.Launching a startup in foreign country",
    "time":"24 sept, 14",
    "image_url":"image/post.jpg",
    "description":"To create your first image blog post, click here and select 'Add & Edit Posts' > All Posts > This is the title of your first image post. Great looking images make your blog posts more visually compelling for your audience, and encourage readers to keep coming back",
    "post_link":"www.google.com"
  }
];
 $scope.populerPosts = [
  {
    "title":"1.Launching a startup in foreign country",
    "time":"26 sept, 14",
    "image_url":"image/post.jpg",
    "description":"To create your first image blog post, click here and select 'Add & Edit Posts' > All Posts > This is the title of your first image post. Great looking images make your blog posts more visually compelling for your audience, and encourage readers to keep coming back",
    "post_link":"www.google.com"
  },
  
  {
    "title":"3.Launching a startup in foreign country",
    "time":"24 sept, 14",
    "image_url":"image/post.jpg",
    "description":"To create your first image blog post, click here and select 'Add & Edit Posts' > All Posts > This is the title of your first image post. Great looking images make your blog posts more visually compelling for your audience, and encourage readers to keep coming back",
    "post_link":"www.google.com"
  }
];
 $scope.bloggerProfile = [
  {
    "full_name":"Stu Smith..",
    "profile_photo":"image/me.jpg",
    "bio":"Happy to serve you best Music Videos. Thanks for supporting...",
    "about": ":) I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
    "contact_description":"I'm always interested in connecting with innovative people. If you have a pitch, a book I may be interested in or simply want feedback on an venture – please fill out the following contact form and state the reason for contacting me in the message box.",
    "phoneNo":"895122520X",
    "email":"sutanushit@gmail.com",
    "facebook":"www.facebook.com",
    "twitter":"www.twitter.com",
    "gplus":"plus.google.com"
  }
];
$scope.friends = [
  {
    "name":"MusiFyre",
    "link":""
  },
   {
    "name":"HeartBeats",
    "link":""
  },
   {
    "name":"DieForMusic",
    "link":""
  }
];
});
