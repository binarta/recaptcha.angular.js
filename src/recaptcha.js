angular.module('bin.recaptcha', ['vcRecaptcha'])
    .config(['configProvider', function(configProvider) {
        configProvider.add({recaptchaPublicKey: '6LeHfkUUAAAAAMPb3ijamARFhQyh6e16ezW4S2t5'});
    }])
;