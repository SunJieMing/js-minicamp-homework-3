# Feynman Writing Prompts for Homework 3

Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.

##My Definitions:
---
		
1.  `Objects`: Objects are a lot like what you interact with on facebook.  Although you and your friends all have different names, emails, and passwords -- each of you has a value associated with each of those 'properties' that is specificaly associated with your FB profile.  In Javascript, your FB profile can be compared to an 'Object', which contains different 'properties', such as you name, your email, and your password.  Objects have the potential to store an infinite amount of information within each of these properties in the form of text, numbers, or booleans, not to mention arrays and even other objects!  
2.  `Properties`:  See definition in `Objects`.  Additionally, 'property' is somewhat ambiguously used to refer to the `key` specifically (the `key` being 'apples' in the following code: var object = {'apples': 5}) OR both the `key` and its associated `value` -- ('apples : 5').  
3.  `Methods`: Properties can include variables that represent functions, which, in the context of an `Object` are called `Methods`.
4.  `for in loop`: Allows you to iterate over each of the `keys` in an `object`, conceptually in much the same way that we have used `for loops` to iterate over each of the `elements` in an `array` in previous assignments.
5.  `Dot notation vs bracket notation`: There are two notations that you can use (both will work in the majority of cases) called dot notation and bracket notation.  Nevertheless, dot notation is used the vast majority of time, except in instances where using it presents issues.  
			*One example of an instance like this is when you want to console.log a `value` (as opposed to its associated `key`) within a `for in loop`.  In this case, you would need to use bracket notation rather than dot notation, as dot notation will return as undefined. 
	*You could use bracket notation ALL the time by replacing, for example, user.name with user ['name']; however, dot notation remains cleaner and thus, in addition to being visually less complicated, will likely reduce the occurance of typing errors.
