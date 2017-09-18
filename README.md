# Homework #3

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Objects --- Almost everything is an object in Javascript but at its core, an object is just a collection of properties, which consist of key, value pairs.  

	* Properties  ---  Properties exist on objects and consist of a key and a value for that key.  For example:  firstname: John   If this is a property on an object literal, the key is firstName and the value of firstName is John.  This pair together is the property.

	* Methods  ---  Methods are functions that exist only on objects.  They are actions that can be performed on objects.


	* for in loop  ---  A for in loop can be used to iterate over an object and access its properties.  It will check each property on an object to see if a particular key exists and then do something with that property.

	* Dot notation vs bracket notation  --- Dot notation and bracket notation are just two different ways of writing code to access object properties.  In most cases, both will achieve the same result, but the syntax is different.  For example, in dot notation, we could write --- object.propertyName --- however, in bracket notation, we would need to write  --- object['propertyName'] --- in order to access the same property.  If we are passing an object as an argument to a function and we want to create a new property on that object, but don't know the name of that property, we can must use bracket notation (without quotes) to take the argument named property and add it to the object.  For example:  object[property]


2. Fork and clone this repo.  When you need to commit use the following commands.
		
	* `git status`
	* `git add --all`
	* `git status`
	* `git commit -m "your commit message"`
	* `git push origin master`

3. Install dependencies using `npm install`.  Run tests using `npm test`.

4. Make the tests pass!


#### Congratulations on finishing Homework #3!

For more information about Lambda School's six month CS program visit: https://lambdaschool.com
