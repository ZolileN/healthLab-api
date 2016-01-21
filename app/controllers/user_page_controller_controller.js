module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Model = Nodal.require('app/models/user.js');

  class UserPageControllerController extends Nodal.Controller {

    get() {

      this.render();

    }

    post() {

      this.render();

    }

    put() {

      this.render();

    }

    del() {

      this.render();

    }

  }

  return UserPageControllerController;

})();
