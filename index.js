module.exports = lookin;

var find = require( 'dom-select' ),
	css = require( 'dom-style' ),
	item3d = require( './lib/item3d' );

var countItems = 0;

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

	get: function( name ) {

		return this.items[ name ];
	},

	origin: function( x, y ) {

		css( this.container, {

			'perspective-origin': ( x * 100 ) + '% ' + ( y * 100 ) + '% '			
		});
	}
};