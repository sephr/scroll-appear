# appear-on-scroll
Appearing elements on scroll. Built with jQuery.
## Prerequisites
You need to include **jQuery** before including **scroll-appear**
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
