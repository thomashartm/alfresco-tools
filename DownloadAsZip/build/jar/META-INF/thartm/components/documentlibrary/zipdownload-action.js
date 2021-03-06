(function() {

	/**
	 * Triggers the zip stream webscript
	 * 
	 * @method onActionDownloadAsZip
	 * @param file
	 *            {object} Object literal representing one or more file(s) or
	 *            folder(s) to be actioned
	 */
	Alfresco.DocListToolbar.prototype.onActionDownloadAsZip = function DLTB_onActionDownloadAsZip(assets) {

		var me = this, fileNames = [];
		var httpMethod = "POST";
		var zipStreamWebscript = Alfresco.constants.PROXY_URI + "stream/zipfile";
		var paramObj = {
			files: new Array(),
			parent:  this.doclistMetadata.parent.nodeRef
		};		
				
		for ( var i = 0, j = assets.length; i < j; i++) {
			if(assets[i].isFolder !== true && assets[i].isLink !== true){
				paramObj.files.push(assets[i].nodeRef);
			}
		}
		
		if(paramObj.files.length > 0){
			Alfresco.util.navigateTo(zipStreamWebscript, httpMethod, paramObj);
		}
	};
})();