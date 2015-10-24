"use strict";angular.module("concertedWebsiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angular-loading-bar","gsmarkdown"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/docs",{templateUrl:"views/docs.html"}).when("/releases",{templateUrl:"views/releases.html",controller:"ReleasesCtrl",controllerAs:"releases"}).when("/news",{templateUrl:"views/news.html",controller:"PostsCtrl"}).when("/contribute",{templateUrl:"views/contribute.html",controller:"ContributeCtrl",controllerAs:"contribute"}).when("/news/:year",{templateUrl:"views/news.html",controller:"YearlyCtrl"}).when("/pages/:type/:year/:month/:date/:title",{templateUrl:"views/post.html",controller:"OnepostCtrl"}).when("/markdown-pages/:folder/:name",{resolve:{check:["$route","$http","$location",function(a,b,c){return b.get(a.current.params.folder+"/"+a.current.params.name).success(function(a){return!0}).error(function(a){return c.path("/404")})}]},templateUrl:"views/page.html",controller:"MarkdownPagesCtrl"}).when("/404",{templateUrl:"/404.html"}).otherwise({redirectTo:"/"})}]),angular.module("concertedWebsiteApp").controller("PostsCtrl",["$scope","$http",function(a,b){a.postlist,a.archive;var c=function(){b.get("../../news/list.json").then(function(b){a.postlist=b.data,a.$parent.postlist=b.data})};c();var d=function(){b.get("../../news/archive.json").then(function(b){a.archive=b.data})};d()}]).controller("OnepostCtrl",["$scope","$routeParams","$http",function(a,b,c){var d=b.type+"/"+b.year+"-"+b.month+"-"+b.date+"-"+b.title.replace(/ /g,"_")+".md";console.log(d),a.posturl=d}]).controller("YearlyCtrl",["$scope","$routeParams","$http",function(a,b,c){var d=b.year;a.archive={};var e=function(){console.log(d),c.get("../../news/archive.json").then(function(b){a.postlist=b.data[d],console.log(a.postlist)})};e();var f=function(){c.get("../../news/archive.json").then(function(b){a.archive[d]=b.data[d],console.log(a.archive),a.$parent.archive=b.data})};f()}]),angular.module("concertedWebsiteApp").controller("MarkdownPagesCtrl",["$scope","$routeParams","$http",function(a,b,c){a.posturl="/"+b.folder+"/"+b.name,a.pages;var d=function(){c.get("../../"+b.folder+"/list.json").then(function(b){a.pages=b.data})};d()}]);var app=angular.module("gsmarkdown",[]);app.directive("markdown",["$window",function(a){var b=new a.showdown.Converter;return{restrict:"A",link:function(a,c,d){var e=b.makeHtml(c.text());c.html(e)}}}]),angular.module("concertedWebsiteApp").controller("ReleasesCtrl",["$scope","$http",function(a,b){var c="https://api.github.com/repos/apache/incubator-concerted";a.curr_page=1,a.releasedata=[],a.commitdata=[],a.loadreleases=function(){var d=c+"/tags?page="+a.curr_page;a.curr_page=a.curr_page+1,b.get(d).then(function(b){a.releasedata=a.releasedata.concat(b.data),0!=b.data.length&&a.loadreleases()})},a.loadcommits=function(){var d=c+"/commits";console.log(d),b.get(d).then(function(b){a.commitdata=a.commitdata.concat(b.data)})}}]),angular.module("concertedWebsiteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("concertedWebsiteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("concertedWebsiteApp").controller("ContributeCtrl",["$scope",function(a){a.members=[{name:"Jake Ferral",apacheid:"jfarrell",role:"Mentor"},{name:"Julian Hyde",apacheid:"jhyde",github_handle:"julianhyde",role:"Mentor"},{name:"Roman Shaposhnik",apacheid:"rvs",role:"Champion"}]}]),angular.module("concertedWebsiteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/contribute.html",'<div class="well col-md-9"> <h1 class="page-header">Want To Help ?</h1> <h2 class="text-right text-info"> We would love to have you on board !</h2> <div class="well" markdown ng-include="\'../markdown-pages/contribute.md\'"> </div> <div class="well"> <h3>Wiki</h3> <p> Wiki (Confluence) for this Project is Available at <a href="https://cwiki.apache.org/confluence/display/CONCERTED/Apache+Concerted+Home">Concerted Confluence.</a> </p> </div> <div class="well"> <h3>Mailing Lists</h3> <p> Most of the discussion happens on mailing lists so subscribe them to stay informed. <table class="table table-responsive table-condensed"> <tr> <th>Name</th> <th>Mailing Address</th> <th>Archive</th> </tr> <tr> <td>Developer</td> <td>dev@concerted.incubator.apache.org</td> <td>http://mail-archives.apache.org/mod_mbox/incubator-concerted-dev</td> </tr> <tr> <td>Commits</td> <td>commits@concerted.incubator.apache.org</td> <td>http://mail-archives.apache.org/mod_mbox/incubator-concerted-commits</td> </tr> <tr> <td>Issues</td> <td>issues@concerted.incubator.apache.org</td> <td>http://mail-archives.apache.org/mod_mbox/incubator-concerted-issues</td> </tr> </table> </p> <p>To subscribe send an email at listname-subscribe@concerted.incubator.apache.org<br> To unsubscribe send an email at listname-unsubscribe@concerted.incubator.apache.org<br> </p> </div> </div> <div class="col-md-3"> <table class="table"> <tr ng-repeat="member in members"> <td> <p ng-bind="member.name"></p> <p ng-bind="member.role"></p> <p ng-bind="member.apacheid"></p> </td> <td> <img class="img-circle" height="50" width="50" ng-src="https://avatars.githubusercontent.com/{{member.github_handle}}"> </td> </tr> </table> </div>'),a.put("views/docs.html",""),a.put("views/main.html",'<div class="jumbotron"><h1 class="text-info text-center">Your Apps ... Accelerated !</h1> <p class="well lead">Apache Concerted is a Do-It-Yourself toolkit for building in-memory data engines. Concerted provides ability to query large data sets efficiently and in high concurrency while maintaining semantics such as immediate consistency.</p> </div> <div class="card col-sm-12 col-md-3"> <div class="card-header"> <span class="glyphicon glyphicon-screenshot"></span> Efficiency </div> <div class="card-block"> <p class="card-text"> Concerted aims to give expected performance under vast variety of workloads and aims to have as low footprint as possible.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> </div> <div class="card col-sm-12 col-md-3 col-md-offset-1"> <div class="card-header"> <span class="glyphicon glyphicon-stats"></span> High Performance </div> <div class="card-block"> <p class="card-text">To provide high performance access to data from a large number of rows, Concerted uses efficient representation and in memory indexing of data coupled with high performance transactions, custom transactions and lightweight locking and lockless techniques and an intelligent locking manager.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> </div> <div class="card col-sm-12 col-md-3 col-md-offset-1"> <div class="card-header"> <span class="glyphicon glyphicon-resize-full"></span> Scalability </div> <div class="card-block"> <p class="card-text">Concerted is built with extreme concurrency and scalability in mind.So you don\'t have to worry if you move from thousand to million.</p> <a href="#" class="btn btn-primary">Go somewhere</a> </div> </div> <br> <br> <br>'),a.put("views/news.html",'<div class="col-md-9"> <div ng-repeat="post in postlist|orderBy: \'+post.year\'"> <div class="well"> <div markdown class="well" ng-include="post.url"> </div> <p class="text-info">{{post.year}}-{{post.month}}-{{post.date}}</p> </div> </div> </div> <div class="col-md-3"> <ul ng-repeat="(key,value) in archive"> <li><a ng-href="#/news/{{key}}">{{key}}</a><br><ul><li ng-repeat="post in value|orderBy: \'+post.month\'"><a ng-href="#/pages/news/{{key}}/{{post.month}}/{{post.date}}/{{post.title}}">{{post.title}}</a></li></ul></li> </ul> </div>'),a.put("views/page.html",'<div class="col-md-9 well" markdown class="well" ng-include="posturl"> </div> <div class="col-md-3 well"> <h2 class="text-info">Other Pages</h2> <ul class="unstyled"><li ng-repeat="page in pages"><a ng-href="#/markdown-pages/{{page.url}}">{{page.title}}</a></li></ul> </div>'),a.put("views/post.html",'<div class="well" markdown class="well" ng-include="posturl"> </div>'),a.put("views/releases.html",'<div class="well col-md-8" ng-init="loadreleases();loadcommits();"> <div class="page-header"> <h1 id="timeline">Release Timeline</h1> </div> <h3 class="text-info text-center" ng-if="releasedata.length==0">No releases yet.<br>Stay Tuned !</h3> <ul class="timeline"> <li ng-repeat="release in releasedata" class="timeline-inverted"> <div ng-if="$odd" class="timeline-badge info"><i class="glyphicon glyphicon-tags"></i></div> <div ng-if="$even" class="timeline-badge warning"><i class="glyphicon glyphicon-paperclip"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h4 class="timeline-title" ng-bind="release.name"></h4> <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>10 hrs ago</small></p> </div> <div class="timeline-body"> <p><a ng-href="release.zipball_url"><i class="glyphicon glyphicon-download-alt"></i>Download Zip </a><a ng-href="release.tarball_url"><i class="glyphicon glyphicon-download-alt"></i>Download Tarball</a> <a ng-href="https://github.com/apache/incubator-concerted/commits/{{release.commit.sha}}"><i class="glyphicon glyphicon-info-sign"></i>Commit...</a> </p> <p ng-if="$odd" class="text-warning"> <button><i class="glyphicon glyphicon-file"></i>Release Notes</button> </p> </div> </div> </li></ul></div>    <div class="col-md-4"> <div class="page-header"> <h1 id="timeline">Recent Commits</h1> </div> <ul class="timeline"> <li ng-repeat="commit in commitdata"> <div class="timeline-badge"><i class="glyphicon glyphicon-pushpin"></i></div> <div class="timeline-panel"> <div class="timeline-heading"> <h5 class="timeline-title oneline" ng-bind="commit.commit.message"></h5> <p><small class="text-muted"><i class="glyphicon glyphicon-time">{{commit.commit.author.date}}</i></small></p> </div> <div class="timeline-body"> <p><a ng-href="commit.commiter.html_url"><img class="img-circle img-thumbnail" height="50" width="50" ng-src="{{commit.committer.avatar_url}}"> <span ng-bind="commit.commit.committer.name"></span></a> <a ng-href="https://github.com/apache/incubator-concerted/commits/{{commit.sha}}"><i class="glyphicon glyphicon-info-sign"></i>Commit...</a> </p> </div> </div> </li></ul></div>   ')}]);