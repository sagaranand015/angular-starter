<div class="modal-content" ng-show="request.enabled==true">
	<div class="modal-header">
	    <h3 class="modal-title" id="modal-title">{{request.heading}}</h3>
	</div>
	<div class="modal-body" id="modal-body">
		<div ng-repeat="(k, n) in request.nodeName">
			<p>
				<b>
					echo {{n}}
				</b>
			</p>
			<p>
				{{request.curlCmds[k]}}
			</p>
			<button class="btn btn-lg btn-primary btn-block btn-encryption" ng-click="checkStNode(request.request[k])">
				<b>{{n}}</b>
			</button>
			<hr />
		</div>
		
		<!-- <div ng-repeat="(k, n) in pieNodes" ng-show="pie.enabled==false">	
			<hr />
		</div> -->
	</div>
	<div class="modal-footer">
	    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
	</div>
</div>

<!-- <div class="modal-content" ng-show="pie.enabled==false">
	<div class="modal-header">
	    <h3 class="modal-title" id="modal-title">{{pieNodes.pieNodeHeading}}</h3>
	</div>
	<div class="modal-body" id="modal-body">
		
	</div>
	<div class="modal-footer">
	    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
	</div>
</div> -->

