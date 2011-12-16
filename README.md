# Three state button jQuery Plugin

## Demo & Example
[http://nuwansh.github.com/action-button/](http://nuwansh.github.com/action-button/)

## Example Usage

### HTML


``` html
<a href="#" title="Click me">
<img src="images/clickme_btn.png" data-active="images/clickme_active_btn.png" data-hover="images/clickme_hover_btn.png" alt="Click Me" class="action" />
</a>
```

You have to design three state button using Fireworks or Photoshop. You can find lot of examples three statues buttons desinging tutorials

``` jQuery 
$(function(){
  $('.action').actionbtn();
});

Image class (class="action") attribute used to add button functionality to the button  
``` 


## Notes

* Works in all A-grade browsers, including IE6.
* Don't worry about the CSS3 styles

## License

This plugin is dual licensed under the MIT and GPL licenses, just like jQuery itself.
