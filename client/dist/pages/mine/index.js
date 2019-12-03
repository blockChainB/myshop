"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;
// import { connect } from '@tarojs/redux'
// import * as actions from '@actions/user'
// import { dispatchCartNum } from '@actions/cart'
// import { getWindowHeight } from '@utils/style'

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _base = require("../../bases/base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @connect(state => state.user, { ...actions, dispatchCartNum })

var mine = (_temp2 = _class = function (_AtBase) {
  _inherits(mine, _AtBase);

  function mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mine.__proto__ || Object.getPrototypeOf(mine)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__5", "userInfo"], _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.handleLogin = function () {
      console.log('handleLogin');
      if (!_this.state.userInfo.nickName) {}
    }, _this.customComponents = ["Profile", "Menu"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mine, [{
    key: "_constructor",
    value: function _constructor() {
      _get(mine.prototype.__proto__ || Object.getPrototypeOf(mine.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        userInfo: {}
      };
      this.$$refs = [];
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      try {
        var value = _index2.default.getStorageSync('userInfo');
        if (value) {
          console.log("value", value);

          this.setState({
            userInfo: value
          });
          //  this.render();
        }
      } catch (e) {
        // Do something when catch error
      }
      _index2.default.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#000000',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__5 = (0, _index.genCompid)(__prefix + "$compid__5");

      var userInfo = this.__state.userInfo;

      console.log("userInfo", userInfo);
      _index.propsManager.set({
        "userInfo": userInfo
      }, $compid__5);
      Object.assign(this.__state, {
        $compid__5: $compid__5
      });
      return this.__state;
    }
  }]);

  return mine;
}(_base2.default), _class.$$events = [], _class.$$componentPath = "pages/mine/index", _temp2);

// {userInfo.nickName &&
//   // <View className='user__logout' onClick={this.handleLogin}>
//   //   {/* <Text className='user__logout-txt'>切换账号</Text> */}
//   // </View>
// }


exports.default = mine;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(mine, true));