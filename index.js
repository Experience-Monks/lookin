/** @module lookin */

module.exports = lookin;

var find = require( 'dom-select' ),
	css = require( 'dom-style' ),
	item3d = require( './lib/item3d' );

var countItems = 0;

/**
 * lookin allows you to create parallaxed scenes where you're rotating the camera easily.
 *
 * It will adhere to the original css defined for the element as much as possible.
 *
 * To instantiate lookin you must pass in a settings object.
 *
 * This settings object must contain a "container" dom element or a selector string for that dom
 * element. After this all items to be made 3d should exist in this container.
 *
 * Here are settings you can pass to lookin:
 * ```javascript
 * {
 * 	/// required ///
 * 
 * 	/// optional //
 * 	el: 'body', // this is a dom element or selector to the container which will contain items
 * 				// to parallax or make 3d. By default the body will be used if nothing is passed
 * 	perspective: 1000 // the perspective value for the 3d camera. By default this is 1000
 * }
 * ```
 *
 * @class lookin
 * @param  {Object} settings The properties what you can send in via settings is described above
 * @return {lookin} An instance of lookin
 *
 * @example
 * ```javascript
 * var lookin = require( 'lookin' );
 *
 * var scene = lookin();
 *
 * scene.create( {
 * 	el: 'item3d',
 * 	z: -1000,
 * 	inverseScale: true // will compensate items scale to keep it original scale
 * })
 * .create( {
 * 	el: 'item3d2',
 * 	z: -300,
 * 	inverseScale: false // will not scale item to remain at original size
 * });
 * ```
 */
function lookin( settings ) {

	if( !( this instanceof lookin ) )
		return new lookin( settings );

	var s = this.s = settings || {};

	this.items = {};

	s.el = s.el || 'body';
	s.perspective = s.perspective || 1000;

	if( typeof s.el == 'string' )
		this.container = find( s.el );
	else
		this.container = s.el;

	if( !s.el )
		throw new Error( 'el must be defined' );

	css( this.container, {

		position: 'relative',
		width: '100vw',
		height: '100vh',
		perspective: s.perspective
	});

	this.origin( 0.5, 0.5 );
}

lookin.prototype = {

	/**
	 * create will make a new "3d item". 
	 *
	 * create expects a settings object. This object may contain
	 * `name` which can be used as a key to reference 3d items after.
	 * 
	 * Other settings which you can pass are defined in the
	 * [README.md for item3d](./lib/item3d/README.md).
	 * 
	 * @param  {Object} settings See above for description of settings
	 * @chainable
	 */
	create: function( settings ) {

		var s = this.s,
			name = settings.name;

		settings.container = this.container;
		settings.perspective = s.perspective;

		if( name )
			this.items[ name ] = item3d( settings );
		else
			item3d( settings );

		return this;
	},

	/**
	 *	using get you can query the 3d items which the lookin scene
	 *	contains. Pass in a string which is a key to a 3d item defined
	 *	in the create function.
	 * 
	 * @param  {String} name a key to the 3d item previously created in create
	 * @return {item3d} this is an item3d object if found and undefined if not found
	 */
	get: function( name ) {

		return this.items[ name ];
	},

	/**
	 * this function will change the perspective-origin of the container element passed
	 * when setting up `lookin`.
	 *
	 * For example if using with a mobile device as the accelerometer sends data you would
	 * send in percentages for the amount of rotation.
	 * 
	 * @param  {Number} x the x value for perspective origin. Typically between 0 - 1 however theres
	 *                    nothing stopping you from sending smaller or larger values.
	 * @param  {Number} y the y value for perspective origin. Typically between 0 - 1 however theres
	 *                    nothing stopping you from sending smaller or larger values.
	 */
	origin: function( x, y ) {

		css( this.container, {

			'perspective-origin': ( x * 100 ) + '% ' + ( y * 100 ) + '% '			
		});
	}
};