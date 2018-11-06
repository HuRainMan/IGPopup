'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    name: 'Popup',
    props: {
        mask: {
            type: Boolean,
            default: true,
        },
        value: {
            required: true,
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: 'show',
        },
        position: {
            type: String,
            default: 'center', // center top left right, bottom
        },
        styles: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    data() {
        return {
        };
    },
    mounted() {
        const arr = [ 'center', 'top', 'left', 'right', 'bottom', ];
        if (!arr.find(i => this.position === i)) throw new Error('[ popup ] popup的 position 必须是 center top left right bottom之一'); 
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            if (this.position !== 'center') {
                el.style.transition = `${this.position} 5s linear`;
            } else {
                el.style.transition = null;
            }
        },
        enter(el, done) {
            switch(this.position) {
                case 'left': el.style.left = - 20 *  el.offsetWidth + 'px'; break;
                case 'right': el.style.right = - 20 * el.offsetWidth + 'px'; break;
                case 'bottom': el.style.bottom = - 20 * el.offsetHeight + 'px'; break;
                case 'top': el.style.top = - 20 * el.offsetHeight + 'px'; break;
            }            if (this.position !== 'center') {
                setTimeout(() => {
                    el.style.opacity = 1;
                    switch(this.position) {
                        case 'left': el.style.left = 0; break;
                        case 'right': el.style.right = 0; break;
                        case 'bottom': el.style.bottom = 0; break;
                        case 'top': el.style.top = 0; break;
                    }                    done();
                }, 200);
            } else {
                el.style.opacity = 1;
            }
        },
        afterEnter(el) {},
        enterCancelled(el) {},
        beforeLeave(el) {
            el.style.opacity = 0;
        },
        leave(el, done) {
            done();
        },
        afterLeave(el) {},
        leaveCancelled(el) {},
        /*
        * 点击 mask 关闭 popup
        */
        onclickMaskToClosepopup(e) {
            if (this.mask && e.target.className.indexOf('popup-mask') !== -1) {
                this.$emit('input', false);
            }
        },
    },
};

/* script */
            const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "popup-boss" },
    [
      _vm.value
        ? _c("div", {
            class: [_vm.mask ? "popup-mask" : ""],
            on: {
              click: function($event) {
                $event.stopPropagation();
                return _vm.onclickMaskToClosepopup($event)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "transition",
        {
          on: {
            "before-enter": _vm.beforeEnter,
            enter: _vm.enter,
            "after-enter": _vm.afterEnter,
            "enter-cancelled": _vm.enterCancelled,
            "before-leave": _vm.beforeLeave,
            leave: _vm.leave,
            "after-leave": _vm.afterLeave,
            "leave-cancelled": _vm.leaveCancelled
          }
        },
        [
          _vm.type === "if" && _vm.value
            ? _c(
                "div",
                {
                  staticClass: "popup-container",
                  class: [_vm.position + "-class"],
                  style: _vm.styles,
                  attrs: { position: _vm.position }
                },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.type === "show" && _vm.value,
                  expression: "type === 'show' && value"
                }
              ],
              staticClass: "popup-container",
              class: [_vm.position + "-class"],
              style: _vm.styles,
              attrs: { position: _vm.position }
            },
            [_vm._t("default")],
            2
          )
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "C:\\Users\\ivygate\\Desktop\\popup\\popup\\popup.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var popup = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

exports.Popup = popup;
