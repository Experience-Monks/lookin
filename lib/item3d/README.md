<a name="module_item3d"></a>
#item3d
<a name="module_item3d..item3d"></a>
##class: item3d~item3d
**Members**

* [class: item3d~item3d](#module_item3d..item3d)
  * [new item3d~item3d(settings)](#new_module_item3d..item3d)
  * [item3d.rotateX(amount)](#module_item3d..item3d#rotateX)
  * [item3d.rotateY(amount)](#module_item3d..item3d#rotateY)
  * [item3d.rotateZ(amount)](#module_item3d..item3d#rotateZ)
  * [item3d.scaleX(amount)](#module_item3d..item3d#scaleX)
  * [item3d.scaleY(amount)](#module_item3d..item3d#scaleY)
  * [item3d.apply()](#module_item3d..item3d#apply)

<a name="new_module_item3d..item3d"></a>
###new item3d~item3d(settings)
Ideally you should instantiate item3d's through `lookin`

To instantiate item3ds you must pass in a settings object:
```javascript
{
	/// required ///
	el: 'itemTo3D', // this is the item we'd like to make 3d
	container: parentContainer // this will be passed from `lookin`
	perspective: 1000, // this will be passed form `lookin`

	/// optional ///
	inverseScale: false, // if this value is passed then element

	// if any of these are passed the item will be rotated
	rotateX: 0,
	rotateY: 0,
	rotateZ: 0,

	// if any of these are passed the item will be scaled
	scaleX: 1,
	scaleY: 1
}
```

**Params**

- settings `Object` - This settings object is described above  

**Scope**: inner class of [item3d](#module_item3d)  
**Returns**: `item3d` - This will return an item3d  
<a name="module_item3d..item3d#rotateX"></a>
###item3d.rotateX(amount)
rotateX will change the rotation z value of the element

**Params**

- amount `Number` - rotation z value  

<a name="module_item3d..item3d#rotateY"></a>
###item3d.rotateY(amount)
rotateY will change the rotation z value of the element

**Params**

- amount `Number` - rotation z value  

<a name="module_item3d..item3d#rotateZ"></a>
###item3d.rotateZ(amount)
rotateZ will change the rotation z value of the element

**Params**

- amount `Number` - rotation z value  

<a name="module_item3d..item3d#scaleX"></a>
###item3d.scaleX(amount)
scaleX will change the scale x value of the element

**Params**

- amount `Number` - scale x value  

<a name="module_item3d..item3d#scaleY"></a>
###item3d.scaleY(amount)
scaleY will change the scale y value of the element

**Params**

- amount `Number` - scale y value  

<a name="module_item3d..item3d#apply"></a>
###item3d.apply()
apply will apply the css to make the item 3d

