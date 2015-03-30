(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.LoginViewModel = (function() {
    function LoginViewModel(form) {
      this._email = __bind(this._email, this);
      this._params = __bind(this._params, this);
      this.failure = __bind(this.failure, this);
      this.success = __bind(this.success, this);
      this.login = __bind(this.login, this);
      this.form = $(form);
      this.form.find('.email').focus();
      this.form.find('.submit-form button').unbind('click').click(this.login);
    }

    LoginViewModel.prototype.login = function() {
      var settings, url;
      url = "" + svApi + "/v1/token_sign_in.json";
      settings = {
        type: "POST",
        data: this._params(),
        success: this.success,
        error: this.failure
      };
      $.ajax(url, settings);
      return false;
    };

    LoginViewModel.prototype.success = function(response) {
      return window.location = "" + svApp + "/users/token_sign_in?email=" + (this._email()) + "&token=" + response.data.sess_token;
    };

    LoginViewModel.prototype.failure = function(data) {
      var text, title;
      text = 'Please try again later';
      if (data.responseJSON != null) {
        title = "";
        text = data.responseJSON.info;
      }
      $.pnotify({
        text: text,
        type: "error",
        history: false,
        stack: false,
        hide: true,
        icon: 'fa fa-exclamation',
        delay: 800
      });
      return false;
    };

    LoginViewModel.prototype._params = function() {
      return {
        user: {
          email: this._email(),
          password: this.form.find('.password').val()
        }
      };
    };

    LoginViewModel.prototype._email = function() {
      return this.form.find('.email').val();
    };

    return LoginViewModel;

  })();

}).call(this);
