"use strict";

module.exports = function(packageJson) {
    return `/**
 * ${packageJson.module.name} ${packageJson.version}
 * Author: ${packageJson.author}
 * Repository: ${packageJson.repository.url}
 */

`;
};
