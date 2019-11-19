"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import defaultAvatar from '@assets/default-avatar.png'

var Profile = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Profile, _BaseComponent);

  function Profile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "bgImag", "userInfo", "icon", "leve"], _this.handleLogin = function () {
      console.log('handleLogin');
      if (!_this.props.userInfo.nickName) {
        // Taro.navigateTo({
        //   url: '/pages/user-login/user-login'
        // })
        _index2.default.login({
          success: function success(res) {
            if (res.code) {
              //发起网络请求
              // Taro.request({
              //   url: 'https://test.com/onLogin',
              //   data: {
              //     code: res.code
              //   }
              // })
              console.log(res.code, "code");
              _index2.default.getUserInfo({
                success: function success(resp) {
                  var userInfo = resp.userInfo;
                  // var nickName = userInfo.nickName
                  // var avatarUrl = userInfo.avatarUrl
                  // var gender = userInfo.gender //性别 0：未知、1：男、2：女
                  // var province = userInfo.province
                  // var city = userInfo.city
                  // var country = userInfo.country
                  _this.defaultProps = {
                    userInfo: userInfo
                  };
                }
              });
            } else {
              console.log('登录失败！' + res.errMsg);
            }
          }
        });
      }
    }, _this.getUid = function (uid) {
      if (!uid || !/@/.test(uid)) {
        return '';
      }

      var _uid$split = uid.split('@'),
          _uid$split2 = _slicedToArray(_uid$split, 2),
          username = _uid$split2[0],
          suffix = _uid$split2[1];

      var firstLetter = username[0];
      var lastLetter = username[username.length - 1];
      return firstLetter + "****" + lastLetter + "@" + suffix;
    }, _this.customComponents = ["Vip"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Profile, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Profile.prototype.__proto__ || Object.getPrototypeOf(Profile.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var userInfo = this.__props.userInfo;

      var bgImag = "/pages/mine/profile/assets/bg.png";
      var leve = "/pages/mine/profile/assets/level-01.png";
      var qrcode = "/pages/mine/profile/assets/qr-code.png";
      var icon = "/pages/mine/profile/assets/default-avatar.png";
      console.log("...", userInfo);
      var anonymousState__temp = userInfo.nickName ? this.getUid(userInfo.uid) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        bgImag: bgImag,
        userInfo: userInfo,
        icon: icon,
        leve: leve
      });
      return this.__state;
    }
  }]);

  return Profile;
}(_index.Component), _class.$$events = ["handleLogin"], _class.defaultProps = {
  userInfo: {}
}, _class.$$componentPath = "pages/mine/profile/index", _temp2);
exports.default = Profile;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Profile));