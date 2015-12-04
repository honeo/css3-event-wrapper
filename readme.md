# css3-event-wrapper
Wrapper for CSS3 AnimationEvent and TransitionEvent.  
[honeo/css3-event-wrapper](https://github.com/honeo/css3-event-wrapper)  
[css3-event-wrapper](https://www.npmjs.com/package/css3-event-wrapper)  

## DEMO
[Edit fiddle - JSFiddle](http://jsfiddle.net/e3bxstu5/)

## Example
```bash
$ npm i css3-event-wrapper
```
```js
const css3EvtWrap = require('css3-event-wrapper'),
const onAnimationStart = css3EvtWrap.onAnimationStart;

onAnimationStart.add(element, (e)=>{
    console.log(e.type); //animationstart
});
```

## Method
onAnimationStart.add(element, listener [,useCapture])  
onAnimationStart.remove(element, listener [,useCapture])  
onAnimationEnd.add(element, listener [,useCapture])  
onAnimationEnd.remove(element, listener [,useCapture])  
onAnimationIteration.add(element, listener [,useCapture])  
onAnimationIteration.remove(element, listener [,useCapture])  
onTransitionEnd.add(element, listener [,useCapture])  
onTransitionEnd.remove(element, listener [,useCapture])  

## Reference
[EventTarget.addEventListener() - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  
[EventTarget.removeEventListener() - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)  
[AnimationEvent - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent)  
[transitionend - Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)  
