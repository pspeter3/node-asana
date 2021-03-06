/**
 * This file is auto-generated by our openapi spec.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

function Users(dispatcher) {
    Resource.call(this, dispatcher);
}
util.inherits(Users, Resource);


/**
 * Get a user's favorites
 * @param {String} userGid: (required) A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
 * @param {Object} params: Parameters for the request
     - resourceType {String}:  (required) The resource type of favorites to be returned.
     - workspace {String}:  (required) The workspace in which to get favorites.
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.getFavoritesForUser = function(
    userGid,
    params,
    dispatchOptions
) {
    var path = "/users/{user_gid}/favorites".replace("{user_gid}", userGid);

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Get a user
 * @param {String} userGid: (required) A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
 * @param {Object} params: Parameters for the request
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.getUser = function(
    userGid,
    params,
    dispatchOptions
) {
    var path = "/users/{user_gid}".replace("{user_gid}", userGid);

    return this.dispatchGet(path, params, dispatchOptions)
};


/**
 * Get multiple users
 * @param {Object} params: Parameters for the request
     - workspace {String}:  The workspace or organization ID to filter users on.
     - team {String}:  The team ID to filter users on.
     - offset {String}:  Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     - limit {Number}:  Results per page. The number of objects to return per page. The value must be between 1 and 100.
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.getUsers = function(
    params,
    dispatchOptions
) {
    var path = "/users";

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Get users in a team
 * @param {String} teamGid: (required) Globally unique identifier for the team.
 * @param {Object} params: Parameters for the request
     - offset {String}:  Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.getUsersForTeam = function(
    teamGid,
    params,
    dispatchOptions
) {
    var path = "/teams/{team_gid}/users".replace("{team_gid}", teamGid);

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Get users in a workspace or organization
 * @param {String} workspaceGid: (required) Globally unique identifier for the workspace or organization.
 * @param {Object} params: Parameters for the request
     - offset {String}:  Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Users.prototype.getUsersForWorkspace = function(
    workspaceGid,
    params,
    dispatchOptions
) {
    var path = "/workspaces/{workspace_gid}/users".replace("{workspace_gid}", workspaceGid);

    return this.dispatchGetCollection(path, params, dispatchOptions)
};

module.exports = Users;
/* jshint ignore:end */
