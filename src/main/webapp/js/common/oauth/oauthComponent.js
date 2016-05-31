/**
 * Created by Misaka on 2016-04-18.
 */
class OAuthComponent {
    constructor(rendererClass, rendererFunction) {
        this._uri = '';
        this._type = '';
        this._parameter = '';
        this._rendererClass = rendererClass;
        this._rendererFunction = rendererFunction;
    }

    set uri(uri) {
        this._uri = uri;
    }

    get uri() {
        return this._uri;
    }

    set type(type) {
        this._type = type;
    }

    get type() {
        return this._type;
    }

    set parameter(parameter) {
        this._parameter = parameter;
    }

    get parameter() {
        return this._parameter;
    }

    set rendererClass(rendererClass) {
        this._rendererClass = rendererClass;
    }

    get rendererClass() {
        return this._rendererClass;
    }

    set rendererFunction(rendererFunction) {
        this._rendererFunction = rendererFunction;
    }

    get rendererFunction() {
        return this._rendererFunction;
    }

    callRest(reflectObject) {
        let commonRequest = new CommonRequest();

        commonRequest.type = this.type;
        commonRequest.uri = this.uri;
        commonRequest.parameter = this.parameter;
        commonRequest.load(reflectObject);
    }

    create(data) {
        let render = this.rendererFunction.bind(this.rendererClass);
        render(data);
    }

    verify() {
        let form = document.form;
        let width = '600';
        let height = '600';

        let wTop = window.screenTop ? window.screenTop : window.screenY;
        let wLeft = window.screenLeft ? window.screenLeft : window.screenX;

        let top = wTop + (window.innerHeight / 2) - (height / 2);
        let left = wLeft + (window.innerWidth / 2) - (width / 2);

        let popUri = '/oauth/popup/authorization';
        let popOption = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

        window.open('','Authorize',popOption);

        form.target = 'Authorize';
        form.action = popUri;
        form.method = "post";
        form.uri.value = this.uri;
        form.submit();
    }
}

OAuthComponent.FACEBOOK_SERVER = 'https://graph.facebook.com/';

OAuthComponent.MANAGEMENT_SERVER = 'http://52.79.164.208:8080';
OAuthComponent.ACCESS_TOKEN = '/oauth/access_token';
OAuthComponent.AUTHORIZE = '/oauth/authorize';