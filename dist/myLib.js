var myLib = (function (exports) {
    'use strict';

    const MSG_DEFAULT = "Hello!";

    /**
     * Person class
     *
     * @class
     * @name Person
     * @memberof People
     * @param {string} name
     * @param {number} age
     */

    class Person {
      constructor(name, age = 0) {
        this.species = "Human";
        this.name = name;
        this.age = age;
      }
      /**
       * Returns formatted person string
       *
       * @param {string} [msg=MSG_DEFAULT]
       * @returns {string}
       */


      say(msg = MSG_DEFAULT) {
        return `${this.name}(${this.age}): ${msg}`;
      }

    }

    /**
     * Betty
     *
     * @name betty
     * @memberof People
     */

    const betty = new Person("Betty", 20);

    /**
     * Steve
     *
     * @name steve
     * @memberof People
     */

    const steve = new Person("Steve", 19);

    /**
     * Person instances
     * @namespace People
     */

    exports.Person = Person;
    exports.betty = betty;
    exports.steve = steve;

    return exports;

}({}));
//# sourceMappingURL=myLib.js.map
