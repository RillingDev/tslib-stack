var myLib = (function (exports) {
    'use strict';

    /**
     * Person class
     *
     * @public
     * @class
     * @name Person
     * @memberof People
     * @param {string} name
     * @param {number} age
     */
    class Person {
      constructor(name, age = 0) {
        this.species = "Human"
        /* human */
        ;
        this.name = name;
        this.age = age;
      }
      /**
       * Returns formatted person string
       *
       * @public
       * @param {string} [msg=MSG_DEFAULT]
       * @returns {string}
       */


      say(msg = "Hello!") {
        return `${this.name}(${this.age}): ${msg}`;
      }

    }

    /**
     * Betty
     *
     * @public
     * @name betty
     * @memberof People
     */

    const betty = new Person("Betty", 20);

    /**
     * Steve
     *
     * @public
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
