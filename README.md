<a name="module_lookin"></a>
#lookin
<a name="module_lookin..lookin"></a>
##lookin~lookin(settings)
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

**Scope**: inner function of [lookin](#module_lookin)  
**Returns**: `lookin` - An instance of lookin  
