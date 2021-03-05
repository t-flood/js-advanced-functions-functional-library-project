const fi = (function () {
  function each(collection, callback) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
    return collection;
  }

  function map(collection, callback) {
    const result = [];
    each(collection, (value) => {
      result.push(callback(value));
    });
    return result;
  }

  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each,
    map,

    reduce: function () {},

    functions: function () {},
  };
})();

fi.libraryMethod();
