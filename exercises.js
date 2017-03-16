'use strict';

//Do not change any of the function names

function makeCat(name, age) {
  var lily = {
    name: name,
    age: age,
    meow: function() {
      return 'Meow!';
    }
  };
  return lily;
  //create a new object with a name property with the value set to the name argument
  //add an age property to the object with the value set to the age argument
  //add a method called meow that returns the string 'Meow!'
  //return the object
}

function addProperty(object, property) {
  object[property] = null;
  return object;
  //add the property to the object with a value of null
  //return the object
  //note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
}

function invokeMethod(object, method) {
  object[method]();
  //method is a string that contains the name of a method on the object
  //invoke this method
  //nothing needs to be returned
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
  //mysteryNumberObject has a property called mysteryNumber
  //multiply the mysteryNumber property by 5 and return the product
}

function deleteProperty(object, property) {
  delete object[property];
  return object;
  //remove the property from the object
  //return the object
}

function newUser(name, email, password) {
  var user = {
    name: name,
    email: email,
    password: password
  };
  return user;
  //create a new object with properties matching the arguments passed in.
  //return the new object
}

function hasEmail(user) {
  if (user.email) {
    return true;
  } else {
    return false;
  }
  //return true if the user has a value for the property 'email'
  //otherwise return false
}

function hasProperty(object, property) {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
  //return true if the object has the value of the property argument
  //property is a string
  //otherwise return false
}

function verifyPassword(user, password) {
  if (user.password === password) {
    return true;
  } else {
    return false;
  }
  //check to see if the provided password matches the password property on the user object
  //return true if they match
  //otherwise return false
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
  //replace the existing password on the user object with the value of newPassword
  //return the object
}

function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
  //user has a property called friends that is an array
  //add newFriend to the end of the friends array
  //return the user object
}

function setUsersToPremium(users) {
  for (var i = 0 ; i < users.length; i ++) {
    users[i].isPremium = true;
  }
  return users;
  //users is an array of user objects.
  //each user object has the property 'isPremium'
  //set each user's isPremium property to true
  //return the users array
}

function sumUserPostLikes(user) {
  var count = 0;
  for (var i = 0; i < user.posts.length; i++) {
    count += user.posts[i].likes;
  }
  return count;
  //user has an array property called 'posts'
  //posts is an array of post objects
  //each post object has an integer property called 'likes'
  //sum together the likes from all the post objects
  //return the sum
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
    var discount = storeItem.price * storeItem.discountPercentage;
    var discountPrice = storeItem.price - discount;
    return discountPrice;  
  };
  return storeItem;

  
  //add a method to the storeItem object called 'calculateDiscountPrice'
  //this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  //the method then subtracts the discount from the price and returns the discounted price
  //example: 
  //price -> 20
  //discountPercentage -> .2
  //discountPrice = 20 - (20 * .2)
}

//Do not modify code below this line.
////--------------------------------

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
