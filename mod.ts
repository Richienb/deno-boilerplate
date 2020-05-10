/**
My awesome module.
@param input Lorem ipsum.
@param postfix Lorem ipsum.
@example
```
const theModule = require("the-module");
theModule("unicorns");
//=> 'unicorns & rainbows'
```
*/
export default (input: string, { postfix = "rainbows" }: { postfix?: string } = {}): string => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	return `${input} & ${postfix}`
}
