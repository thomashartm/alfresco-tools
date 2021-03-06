/**
 * Copyright (C) 2005-2010 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Dashboard SiteLinks component.
 * 
 * @namespace Alfresco.dashlet
 * @class Alfresco.dashlet.SiteLinks
 */
(function() {

	   /**
	    * YUI Library aliases
	    */
	   var Dom = YAHOO.util.Dom,
	      Event = YAHOO.util.Event;

	/**
	 * Site dashboard ProcurementActions.
	 * 
	 * @param {String} htmlId The HTML id of the parent element
	 * @return {Alfresco.dashlet.SupplierToolbox} The new component instance
	 * @constructor
	 */
	Alfresco.dashlet.ProcurementActions = function ProcurementActions_constructor(
			htmlId) {
		Alfresco.dashlet.ProcurementActions.superclass.constructor.call(
				this, "Alfresco.dashlet.ProcurementActions", htmlId);
		return this;
	};

	YAHOO.extend(Alfresco.dashlet.ProcurementActions, Alfresco.component.Base, {
		/**
		 * Object container for initialization options
		 *
		 * @property options
		 * @type {object} object literal
		 */
		options : {
			/**
			 * @property siteId
			 * @type String
			 * */
			siteId : "",
			destinationNodeRef : ""
		},

		formConfig : {
			type : "create-procurement-request"
			
		},
		
		/**
		 * Fired by YUI when parent element is available for scripting
		 * @method onReady
		 */
		onReady : function SL_onReady() {
			Event.on(this.id + "-procurementActions-button", "click",
					this.onCreateProcurementRequestClick, null, this);
		},

		/**
		 * Fired by YUI Link when the "Create link" link is clicked
		 * 
		 * @method onCreateProcurementRequestClick Executes on a link click
		 * @param event {domEvent} DOM event
		 */
		onCreateProcurementRequestClick : function SL_onCreateProcurementRequestButtonClick(e) {
			Event.stopEvent(e);
			window.location = this.createRedirectToFromUri("proc:request");
		},

		/**
		 * Creates a redirect URI to a creation form
		 * 
		 * @method createRedirectToFromUri
		 * @param itemId The content model type to create
		 */
		createRedirectToFromUri : function SL_createRedirectToFormUri(itemId) {
			var redirectUri = Alfresco.util.uriTemplate("sitepage", {
                site : this.options.siteId,
                pageid : "create-procurement-request"
            });	

	        return YAHOO.lang.substitute(redirectUri + "?itemId={itemId}&destination={destination}", {
	        	itemId: itemId,
	        	destination: this.options.destinationNodeRef
	    	});
		}
	});
})();