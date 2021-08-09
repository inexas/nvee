const handler = (e: Event): void => {
	console.log(`4/7: got ${e.type} event in event handler (imported)`);
};

window.addEventListener("load", handler);
window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
	console.log(`got ${e.type} event in onload function (imported)`);
};

window.onunload = (e: Event): void => {
	console.log(`got ${e.type} event in onunload function (imported)`);
};

console.log("1: log from imported script");