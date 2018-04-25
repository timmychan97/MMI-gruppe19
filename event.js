function Event() {
	var listeners = [];

	this.subscribe = function(listener) {
		listeners.push(listener);
	}

	this.unsubscribe = function(listener) {
		listeners = listeners.filter((el) => {
			return el !== listener;
		})
	}

	this.fire = function(...args) {
		for(let index in listeners) {
			listeners[index](...args);
		}
	}
}