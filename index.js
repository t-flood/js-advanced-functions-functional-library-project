const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
      return collection;
    },

    map: function () {},

    reduce: function () {},

    functions: function () {},
  };
})();

fi.libraryMethod();
