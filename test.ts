console.log('2: =====')

import "./imported.ts"	// Hoisted

const handler = (e: Event): void => {
	console.log(`6/9: got ${e.type} event in event handler (main)`);
};

window.addEventListener("load", handler);

window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
	console.log(`5:  got ${e.type} event in onload function (main)`);
};

window.onunload = (e: Event): void => {
	console.log(`8: got ${e.type} event in onunload function (main)`);
};

console.log("3: log from main script");