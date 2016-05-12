/**
 * Created by Misaka on 2016-04-27.
 */
var FacebookUserAuthorization = (function() {
    function FacebookUserAuthorization() {
    };

    var _client_id = '';
    var _response_type = '';
    var _redirect_uri = '';
    var _scope = '';
    var _state = '';

    FacebookUserAuthorization.prototype = {
        setClientId: function(client_id) {
            _client_id = client_id;
        },

        getClientId: function() {
            return _client_id;
        },

        setResponseType: function(response_type) {
            _response_type = response_type;
        },

        getResponseType: function() {
            return _response_type;
        },

        setRedirectUri: function(redirect_url) {
            _redirect_uri = redirect_url;
        },

        getRedirectUri: function() {
            return _redirect_uri;
        },

        setScope: function(scope) {
            _scope = scope;
        },

        getScope: function() {
            return _scope;
        },

        setState: function(state) {
            _state = state;
        },

        getState: function() {
            return _state;
        },

        createUri: function() {
            this.prototype.setUri(OAuthComponent.FACEBOOK_SERVER + OAuthComponent.AUTHORIZE + '?client_id=' + this.getClientId() + '&response_type=' + this.getResponseType() +
                    '&redirect_uri=' + this.getRedirectUri() + '&scope=' + this.getScope() + '&state=' + this.getState());
        },

        view: function(authorizationToken) {
            var authorizationTokenJSON = JSON.parse(authorizationToken);
            document.getElementById('accessToken').value = authorizationTokenJSON.access_token;
            document.getElementById('refreshToken').value = authorizationTokenJSON.refresh_token;
        }
    };

    return FacebookUserAuthorization;
})();