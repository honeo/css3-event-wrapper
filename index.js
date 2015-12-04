// 使い回し
function add(element, callback, useCapture){
	this.eventNameArray.forEach( (v)=>{
		element.addEventListener(v, callback, !!useCapture);
	});
}

function remove(element, callback, useCapture){
	this.eventNameArray.forEach( (v)=>{
		element.removeEventListener(v, callback, !!useCapture);
	});
}

// animationstart
const onAnimationStart = {
	add,
	remove,
	eventNameArray: ['webkitAnimationStart', 'MSAnimationStart', 'oanimationstart', 'animationstart']
}

// animationend
const onAnimationEnd = {
	add,
	remove,
	eventNameArray: ['webkitAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend']
}

// animationiteration
const onAnimationIteration = {
	add,
	remove,
	eventNameArray: ['webkitAnimationIteration', 'MSAnimationIteration', 'oanimationiteration', 'animationiteration']
}

// transitionend
const onTransitionEnd = {
	add,
	remove,
	eventNameArray: ['webkitTransitionEnd', 'MSTransitionEnd', 'oTransitionEnd', 'otransitionend', 'transitionend']
}

module.exports {
	onAnimationStart,
    onAnimationEnd,
    onAnimationIteration,
    onTransitionEnd
}
