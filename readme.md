About
---
Wrapper of CSS3 AnimationEvent and TransitionEvent.

DEMO
---
[Edit fiddle - JSFiddle](http://jsfiddle.net/e3bxstu5/)

Sample
---
```js
var css3EvtWrap = require('css3-event-wrapper'),
	onAnimationStart = css3EvtWrap.onAnimationStart;
	
onAnimationStart.add(element, function(e){
    console.log(e.type); //animationstart
});
```

Method
---
onAnimationStart.add(element, listener [,useCapture])  
onAnimationStart.remove(element, listener [,useCapture])  
onAnimationEnd.add(element, listener [,useCapture])  
onAnimationEnd.remove(element, listener [,useCapture])  
onAnimationIteration.add(element, listener [,useCapture])  
onAnimationIteration.remove(element, listener [,useCapture])  
onTransitionEnd.add(element, listener [,useCapture])  
onTransitionEnd.remove(element, listener [,useCapture])  

Reference
---
[EventTarget.addEventListener() - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  
[EventTarget.removeEventListener() - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)  
[AnimationEvent - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent)  
[transitionend - Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)  
