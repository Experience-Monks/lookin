<a name="module_lookin"></a>
#lookin
<a name="module_lookin..lookin"></a>
##class: lookin~lookin
**Members**

* [class: lookin~lookin](#module_lookin..lookin)
  * [new lookin~lookin(settings)](#new_module_lookin..lookin)
  * [lookin.create(settings)](#module_lookin..lookin#create)
  * [lookin.get(name)](#module_lookin..lookin#get)
  * [lookin.origin(x, y)](#module_lookin..lookin#origin)

<a name="new_module_lookin..lookin"></a>
###new lookin~lookin(settings)
lookin allows you to create parallaxed scenes where you're rotating the camera easily.

It will adhere to the original css defined for the element as much as possible.

To instantiate lookin you must pass in a settings object.

This settings object must contain a "container" dom element or a selector string for that dom
element. After this all items to be made 3d should exist in this container.

Here are settings you can pass to lookin:
```javascript
{
	/// required ///

	/// optional //
	el: 'body', // this is a dom element or selector to the container which will contain items
				// to parallax or make 3d. By default the body will be used if nothing is passed
	perspective: 1000 // the perspective value for the 3d camera. By default this is 1000
}
```

**Params**

- settings `Object` - The properties what you can send in via settings is described above  

**Scope**: inner class of [lookin](#module_lookin)  
**Returns**: `lookin` - An instance of lookin  
**Example**  
The following will create a parallax scene where one item is being inverse scaled and the
other is not.

```javascript
var lookin = require( 'lookin' );

var scene = lookin();

scene.create( {
	el: 'item3d',
	z: -1000,
	inverseScale: true // will compensate items scale to keep it original scale
})
.create( {
	el: 'item3d2',
	z: -300,
	inverseScale: false // will not scale item to remain at original size
});

window.onmousemove = function( ev ) {

	scene.origin( ev.pageX / window.innerWidth, ev.pageY / window.innerHeight );
};
```

<a name="module_lookin..lookin#create"></a>
###lookin.create(settings)
create will make a new "3d item". 

create expects a settings object. This object may contain
`name` which can be used as a key to reference 3d items after.

Other settings which you can pass are defined in the
[README.md for item3d](./lib/item3d/README.md).

**Params**

- settings `Object` - See above for description of settings  

<a name="module_lookin..lookin#get"></a>
###lookin.get(name)
using get you can query the 3d items which the lookin scene
	contains. Pass in a string which is a key to a 3d item defined
	in the create function.

**Params**

- name `String` - a key to the 3d item previously created in create  

**Returns**: `item3d` - this is an item3d object if found and undefined if not found  
<a name="module_lookin..lookin#origin"></a>
###lookin.origin(x, y)
this function will change the perspective-origin of the container element passed
when setting up `lookin`.

For example if using with a mobile device as the accelerometer sends data you would
send in percentages for the amount of rotation.

**Params**

- x `Number` - the x value for perspective origin. Typically between 0 - 1 however theres
                   nothing stopping you from sending smaller or larger values.  
- y `Number` - the y value for perspective origin. Typically between 0 - 1 however theres
                   nothing stopping you from sending smaller or larger values.  

