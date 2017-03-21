# appear-on-scroll
Appearing elements on scroll. Built with jQuery.
## Prerequisites
You need to include **jQuery** before including **scroll-appear**.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="scroll_appear.js"></script>
```
## Use
Example:
```javascript
<div class="object-to-appear"></div>

<script>
  $(".object-to-appear").appear("swipeLeft", 400, 150);
</script>
```
###### 1st argument ("swipeLeft")
Defines an animation that will be used for this element/elements. So far there are 5 animations:
> fadeIn (default), swipeLeft, swipeRight, zoomIn, zoomOut

###### 2nd argument (400)
Describes animation duration[ms].

###### 3rd argument (150)
Tells what height[px] from bottom of the window is needed to trigger animation.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
