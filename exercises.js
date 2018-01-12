// Do not change any of the function names

function makeCat(name, age) {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  var cat = {};
    cat.name = name, //all in dot notation
    cat.age = age,
    cat.meow = function () {
      return ('Meow!'); 
  }; return cat;
}

function addProperty(object, property) {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
  object[property] = null; // 47 in Notes -- bracket notation used, since actual key name is not known.
  return object;
}

function invokeMethod(object, method) {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  object[method](); // Only bracket notation will work for this.
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  return mysteryNumberObject.mysteryNumber*5; // Notice here that bracket notation does not work.
}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  delete object[property]; //Only bracket notation works
  return object;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  var user = {};
  user.name = name,
  user.email = email,
  user.password = password;
  return user;
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  if (user.email) {
    return true;
  } else return false;
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  if (object[property]) { //make sure you don't forget the brackets otherwise you will get a 'Parsing error'
    return true;
  } else return false;
} 

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  if (password === user.password) {
    return true;
  } else return false;
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user.password = newPassword; // WOW!  Very simple!
  return user;
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array -- means you must use bracket notation
  // add newFriend to the end of the friends array
  // return the user object
  user.friends.push (newFriend);
  return user; // Remember that you can only have one return within a function!

}

function setUsersToPremium(users) { // Just like line 108 from exercises.js homework2
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  for (var i = 0 ; i < users.length ; i++) {
    users[i].isPremium = true;
  } return users;

}

function sumUserPostLikes(user) {
  // user has an array property called 'posts' ----------------- 'user.posts'
  // posts is an array of post objects ------------------------- 'user.posts[i]'
  // each post object has an integer property called 'likes' --- 'user.posts[i].likes'
  // sum together the likes from all the post objects
  // return the sum
  var sum = 0;
  for (var i = 0 ; i < user.posts.length ; i++) {
  sum = sum + user.posts[i].likes; // Originally had user 'user.posts[post.likes[i]]' here.  Know the difference!
} return sum;
}

// Is it possible to use the method below to achieve the same results?

/*

for (var key in user.posts) { 
  console.log('>>>key', key);
  console.log('>>>value', user[key]) 

*/


function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example: 
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)


  storeItem.calculateDiscountPrice = function(/*price, discountPercentage*/) {  // These arguments are not necessary...why?
                                                                                //Is it because these arguments have been 
                                                                                //declared already in the storeItem object?

    var discountPrice = this.price - (this.price*this.discountPercentage);

    //var discount = (this.price)*(this.discountPercentage);
    //var discountPrice = this.price - discount;           //THIS (step-by-step approach) WORKS in place of the single line above too!


    return discountPrice;
  }; return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
