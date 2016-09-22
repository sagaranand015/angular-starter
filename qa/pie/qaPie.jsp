<div class="col-lg-12">

	<!-- Front end testing -->
	<h1 class="page-header">Some Random Testing again</h1>

	<ul class="fes-list">
		<li class="list-item">Either download a dummy script <a
			href="app/scripts/FES-test-qa.sh">HERE</a> Or <b>Use the following buttons for Testing</b>
		</li>
		<li ng-repeat="(k, v) in fesContent.nodeName">
			<button class="btn btn-lg btn-primary btn-block" ng-click="checkFesNodes(v)">{{v}}</button>
		</li>
	</ul>

</div>