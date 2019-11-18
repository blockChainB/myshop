"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

// import jump from '@utils/jump'


var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MENU_LIST = [{
  key: 'order',
  text: '我的订单',
  img: "/pages/mine/menu/assets/order.png"
}, {
  key: 'pin',
  text: '我的拼团',
  img: "/pages/mine/menu/assets/pin.png"
}, {
  key: 'bargain',
  text: '我的砍价',
  img: "/pages/mine/menu/assets/bargain.png"
}, {
  key: 'credit',
  text: '我的积分',
  img: "/pages/mine/menu/assets/credit.png"
}, {
  key: 'service',
  text: '退换/售后',
  img: "/pages/mine/menu/assets/service.png"
}, {
  key: 'coupon',
  text: '优惠券',
  img: "/pages/mine/menu/assets/coupon.png"
}, {
  key: 'red-packet',
  text: '红包',
  img: "/pages/mine/menu/assets/red-packet.png"
}, {
  key: 'allowance',
  text: '津贴',
  img: "/pages/mine/menu/assets/allowance.png"
}, {
  key: 'gif-card',
  text: '礼品卡',
  img: "/pages/mine/menu/assets/gif-card.png"
}, {
  key: 'location',
  text: '地址管理',
  img: "/pages/mine/menu/assets/location.png"
}, {
  key: 'safe',
  text: '账号安全',
  img: "/pages/mine/menu/assets/safe.png"
}, {
  key: 'contact',
  text: '联系客服',
  img: "/pages/mine/menu/assets/contact.png"
}, {
  key: 'feedback',
  text: '用户反馈',
  img: "/pages/mine/menu/assets/feedback.png"
}, {
  key: 'help',
  text: '帮助中心',
  url: 'http://m.you.163.com/help',
  img: "/pages/mine/menu/assets/help.png"
}];
var COUNT_LINE = 3;

var Menu = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Menu, _BaseComponent);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray14", "MENU_LIST"], _this.handleClick = function (menu) {
      // NOTE 时间关系，此处只实现帮助中心，用于演示多端 webview
      if (menu.key === 'order') {
        // jump({ url: menu.url, title: menu.text })
        _index2.default.navigateTo({
          url: 'order/list/index'
        });
      } else {
        _index2.default.showToast({
          title: '目前只实现了我的订单~',
          icon: 'none'
        });
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Menu.prototype.__proto__ || Object.getPrototypeOf(Menu.prototype), "_constructor", this).call(this, props);

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
      var loopArray14 = MENU_LIST.map(function (menu, index) {
        menu = {
          $original: (0, _index.internal_get_original)(menu)
        };

        // NOTE 不用伪元素选择器，需自行计算
        var nth = (index + 1) % COUNT_LINE === 0;
        var lastLine = parseInt(index / COUNT_LINE) === parseInt(MENU_LIST.length / COUNT_LINE);
        var $loopState__temp2 = (0, _index4.default)('user-menu__item', nth && 'user-menu__item--nth', lastLine && 'user-menu__item--last');
        return {
          nth: nth,
          lastLine: lastLine,
          $loopState__temp2: $loopState__temp2,
          $original: menu.$original
        };
      });
      Object.assign(this.__state, {
        loopArray14: loopArray14,
        MENU_LIST: MENU_LIST
      });
      return this.__state;
    }
  }]);

  return Menu;
}(_index.Component), _class.$$events = ["handleClick"], _class.$$componentPath = "pages/mine/menu/index", _temp2);
exports.default = Menu;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Menu));