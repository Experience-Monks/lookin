var lookin = require( './..' ),
	css = require( 'dom-style' ),
	HEIGHT = 500;

var lWall = document.createElement( 'div' ),
	rWall = document.createElement( 'div' ),
	floor = document.createElement( 'div' );

document.body.appendChild( floor );
document.body.appendChild( lWall );
document.body.appendChild( rWall );

floor.id = 'floor';
lWall.id = 'lWall';
rWall.id = 'rWall';

css( floor, {

	background: '#EEE',
	position: 'absolute',
	left: '0%',
	top: '50%',
	'margin-top': ( HEIGHT * -0.5 ) + 'px',
	width: '100%',
	height: HEIGHT + 'px'
});

css( lWall, {

	background: '#333',
	position: 'absolute',
	left: '0%',
	top: '50%',
	'margin-top': ( HEIGHT * -0.5 ) + 'px',
	width: '200px',
	height: HEIGHT + 'px'
});

css( rWall, {

	background: '#333',
	position: 'absolute',
	left: '100%',
	top: '50%',
	'margin-top': ( HEIGHT * -0.5 ) + 'px',
	width: '200px',
	height: HEIGHT + 'px'
});



var scene = lookin()
	.create( {

		name: 'lWall',
		el: '#lWall',
	})
	.create( {

		name: 'floor',
		el: '#floor',
		z: -200
	})
	.create( {

		name: 'rWall',
		el: '#rWall'
	});

scene.get( 'lWall' ).rotateY( 90 ).apply();
scene.get( 'rWall' ).rotateY( 90 ).apply();

window.onmousemove = function( ev ) {

	scene.origin( ev.pageX / window.innerWidth, ev.pageY / window.innerHeight );
};