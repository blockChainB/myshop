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

var _base = require("../../../bases/base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
}];
var COUNT_LINE = 3;

var Menu = (_temp2 = _class = function (_AtBase) {
  _inherits(Menu, _AtBase);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray12", "MENU_LIST"], _this.handleClick = function (menu) {
      // NOTE 时间关系，此处只实现帮助中心，用于演示多端 webview
      if (menu.key === 'order') {
        // jump({ url: menu.url, title: menu.text })
        _index2.default.navigateTo({
          url: 'order/list/index'
        });
      } else if (menu.key === 'coupon') {
        _this.getYHQuan();
      } else {
        //coupon 
        _index2.default.showToast({
          title: '目前只实现了我的订单~优惠券等',
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
    key: "getYHQuan",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, title;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(".getYHQuan.", this.state.getYHMoney);
                //添加进去,然后查询是否成功了 
                _context.next = 3;
                return _index2.default.cloud.callFunction({
                  name: 'userYHQ',
                  data: {
                    $url: 'findYHQuan'

                  }
                });

              case 3:
                res = _context.sent;

                // 成功调用
                console.log(res, "userYHQ");
                if (this.successCode(res) && res.result.data !== -200) {
                  console.log(res, "findYHQuan");
                  title = res.result.data.data[0].userYHQ.YHM;


                  _index2.default.showToast({
                    title: "你有一张" + title + '元优惠券',
                    icon: 'none',
                    duration: 2000
                  });
                } else if (this.successCode(res) && res.result.data === -200) {
                  _index2.default.showToast({
                    title: '还没有领取过呢',
                    icon: 'none',
                    duration: 2000
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getYHQuan() {
        return _ref2.apply(this, arguments);
      }

      return getYHQuan;
    }()
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var loopArray12 = MENU_LIST.map(function (menu, index) {
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
        loopArray12: loopArray12,
        MENU_LIST: MENU_LIST
      });
      return this.__state;
    }
  }]);

  return Menu;
}(_base2.default), _class.$$events = ["handleClick"], _class.$$componentPath = "pages/mine/menu/index", _temp2);
exports.default = Menu;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Menu));