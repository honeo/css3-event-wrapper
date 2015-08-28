// 使い回し
var add = function(element, callback, useCapture){
	this.eventNameArray.forEach(function(v,i,a){
		element.addEventListener(v, callback, !!useCapture);
	});
}

var remove = function(element, callback, useCapture){
	this.eventNameArray.forEach(function(v,i,a){
		element.removeEventListener(v, callback, !!useCapture);
	});
}

// animationstart
var onAnimationStart = {
	add: add,
	remove: remove,
	eventNameArray: ['webkitAnimationStart', 'MSAnimationStart', 'oanimationstart', 'animationstart']
}

// animationend
var onAnimationEnd = {
	add: add,
	remove: remove,
	eventNameArray: ['webkitAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend']
}

// animationiteration
var onAnimationIteration = {
	add: add,
	remove: remove,
	eventNameArray: ['webkitAnimationIteration', 'MSAnimationIteration', 'oanimationiteration', 'animationiteration']
}

// transitionend
var onTransitionEnd = {
	add: add,
	remove: remove,
	eventNameArray: ['webkitTransitionEnd', 'MSTransitionEnd', 'oTransitionEnd', 'otransitionend', 'transitionend']
}

export default {
	onAnimationStart: 		onAnimationStart,
    onAnimationEnd: 		onAnimationEnd,
    onAnimationIteration:	onAnimationIteration,
    onTransitionEnd: 		onTransitionEnd
}
