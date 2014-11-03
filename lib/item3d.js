/** @module item3d */

module.exports = item3d;

var find = require( 'dom-select' ),
	css = require( 'dom-style' );

/**
 * Ideally you should instantiate item3d's through `lookin`
 * 
 * To instantiate item3ds you must pass in a settings object:
 * ```javascript
 * {
 * 	/// required ///
 * 	el: 'itemTo3D', // this is the item we'd like to make 3d
 * 	container: parentContainer // this will be passed from `lookin`
 * 	perspective: 1000, // this will be passed form `lookin`
 * 
 * 	/// optional ///
 * 	inverseScale: false, // if this value is passed then element
 *
 * 	// if any of these are passed the item will be rotated
 * 	rotateX: 0,
 * 	rotateY: 0,
 * 	rotateZ: 0,
 *
 *	// if any of these are passed the item will be scaled
 * 	scaleX: 1,
 * 	scaleY: 1
 * }
 * ```
 *
 * @class item3d
 * @param  {Object} settings This settings object is described above
 * @return {item3d} This will return an item3d
 */
function item3d( settings ) {

	if( !( this instanceof item3d ) )
		return new item3d( settings );

	var s = this.s = settings || {};

	s.z = s.z === undefined ? 0 : s.z;
	s.scaleX = s.scaleX === undefined ? 1 : s.scaleX;
	s.scaleY = s.scaleY === undefined ? 1 : s.scaleY;

	console.log( s.el, s.container );

	if( typeof s.el == 'string' )
		s.el = find( s.el, s.container );

	if( !s.el )
		throw new Error( 'el is not defined. You must pass in el which will be either a string or an element' );

	css( s.el, {

		'transform-origin': '0% 0%'
	});

	this.apply();
}

item3d.prototype = {

	/**
	 * rotateX will change the rotation z value of the element
	 * 
	 * @param  {Number} amount rotation z value
	 * @chainable
	 */
	rotateX: function( amount ) {

		this.s.rotateX = amount;

		return this;
	},

	/**
	 * rotateY will change the rotation z value of the element
	 * 
	 * @param  {Number} amount rotation z value
	 * @chainable
	 */
	rotateY: function( amount ) {

		this.s.rotateY = amount;

		return this;
	},

	/**
	 * rotateZ will change the rotation z value of the element
	 * 
	 * @param  {Number} amount rotation z value
	 * @chainable
	 */
	rotateZ: function( amount ) {

		this.s.rotateZ = amount;

		return this;
	},

	/**
	 * scaleX will change the scale x value of the element
	 * 
	 * @param  {Number} amount scale x value
	 * @chainable
	 */
	scaleX: function( amount ) {

		this.s.scaleX = amount;

		return this;
	},

	/**
	 * scaleY will change the scale y value of the element
	 * 
	 * @param  {Number} amount scale y value
	 * @chainable
	 */
	scaleY: function( amount ) {

		this.s.scaleX = amount;

		return this;
	},

	/**
	 * apply will apply the css to make the item 3d
	 */
	apply: function() {

		var s = this.s,
			trans = 'translateZ(' + s.z + 'px)',
			scale = 1;

		if( s.inverseScale ) {

			scale = ( 1 + ( s.z * -1 ) / s.perspective );
		}

		trans += ' scale(' + ( scale * s.scaleX ) + ', ' + ( scale * s.scaleY ) + ')';

		if( s.rotateX ) {

			trans += ' rotateX(' + s.rotateX + 'deg)';
		}

		if( s.rotateY ) {

			trans += ' rotateY(' + s.rotateY + 'deg)';
		}

		if( s.rotateZ ) {

			trans += ' rotateY(' + s.rotateZ + 'deg)';
		}

		css( s.el, {

			transform: trans,
			'z-index': s.z
		});

		return this;
	}
};