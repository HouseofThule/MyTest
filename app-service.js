/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
	"customComponents": true,
	"fixZeroRpx": true,
	"propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx41 = function(path, global) {
	if (typeof global === 'undefined') global = {};
	if (typeof __WXML_GLOBAL__ === 'undefined') {
		__WXML_GLOBAL__ = {};
	}
	__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
	$gwx('init', global);
	function _(a, b) {
		if (typeof(b) != 'undefined') a.children.push(b);
	}
	function _v(k) {
		if (typeof(k) != 'undefined') return {
			tag: 'virtual',
			'wxKey': k,
			children: []
		};
		return {
			tag: 'virtual',
			children: []
		};
	}
	function _n(tag) {
		$gwxc++;
		if ($gwxc >= 16000) {
			throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
		};
		return {
			tag: 'wx-' + tag,
			attr: {},
			children: [],
			n: [],
			raw: {},
			generics: {}
		}
	}
	function _p(a, b) {
		b && a.properities.push(b);
	}
	function _s(scope, env, key) {
		return typeof(scope[key]) != 'undefined' ? scope[key] : env[key]
	}
	function _wp(m) {
		console.warn("WXMLRT_$gwx41:" + m)
	}
	function _wl(tname, prefix) {
		_wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
	}
	$gwn = console.warn;
	$gwl = console.log;
	function $gwh() {
		function x() {}
		x.prototype = {
			hn: function(obj, all) {
				if (typeof(obj) == 'object') {
					var cnt = 0;
					var any1 = false,
					any2 = false;
					for (var x in obj) {
						any1 = any1 | x === '__value__';
						any2 = any2 | x === '__wxspec__';
						cnt++;
						if (cnt > 2) break;
					}
					return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h": "n";
				}
				return "n";
			},
			nh: function(obj, special) {
				return {
					__value__: obj,
					__wxspec__: special ? special: true
				}
			},
			rv: function(obj) {
				return this.hn(obj, true) === 'n' ? obj: this.rv(obj.__value__);
			},
			hm: function(obj) {
				if (typeof(obj) == 'object') {
					var cnt = 0;
					var any1 = false,
					any2 = false;
					for (var x in obj) {
						any1 = any1 | x === '__value__';
						any2 = any2 | x === '__wxspec__';
						cnt++;
						if (cnt > 2) break;
					}
					return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
				}
				return false;
			}
		}
		return new x;
	}
	wh = $gwh();
	function $gstack(s) {
		var tmp = s.split('\n ' + ' ' + ' ' + ' ');
		for (var i = 0; i < tmp.length; ++i) {
			if (0 == i) continue;
			if (")" === tmp[i][tmp[i].length - 1]) tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
			else tmp[i] = "at anonymous function";
		}
		return tmp.join('\n ' + ' ' + ' ' + ' ');
	}
	function $gwrt(should_pass_type_info) {
		function ArithmeticEv(ops, e, s, g, o) {
			var _f = false;
			var rop = ops[0][1];
			var _a, _b, _c, _d, _aa, _bb;
			switch (rop) {
			case '?:':
				_a = rev(ops[1], e, s, g, o, _f);
				_c = should_pass_type_info && (wh.hn(_a) === 'h');
				_d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
				_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
				return _d;
				break;
			case '&&':
				_a = rev(ops[1], e, s, g, o, _f);
				_c = should_pass_type_info && (wh.hn(_a) === 'h');
				_d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
				_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
				return _d;
				break;
			case '||':
				_a = rev(ops[1], e, s, g, o, _f);
				_c = should_pass_type_info && (wh.hn(_a) === 'h');
				_d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
				_d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
				return _d;
				break;
			case '+':
			case '*':
			case '/':
			case '%':
			case '|':
			case '^':
			case '&':
			case '===':
			case '==':
			case '!=':
			case '!==':
			case '>=':
			case '<=':
			case '>':
			case '<':
			case '<<':
			case '>>':
				_a = rev(ops[1], e, s, g, o, _f);
				_b = rev(ops[2], e, s, g, o, _f);
				_c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
				switch (rop) {
				case '+':
					_d = wh.rv(_a) + wh.rv(_b);
					break;
				case '*':
					_d = wh.rv(_a) * wh.rv(_b);
					break;
				case '/':
					_d = wh.rv(_a) / wh.rv(_b);
					break;
				case '%':
					_d = wh.rv(_a) % wh.rv(_b);
					break;
				case '|':
					_d = wh.rv(_a) | wh.rv(_b);
					break;
				case '^':
					_d = wh.rv(_a) ^ wh.rv(_b);
					break;
				case '&':
					_d = wh.rv(_a) & wh.rv(_b);
					break;
				case '===':
					_d = wh.rv(_a) === wh.rv(_b);
					break;
				case '==':
					_d = wh.rv(_a) == wh.rv(_b);
					break;
				case '!=':
					_d = wh.rv(_a) != wh.rv(_b);
					break;
				case '!==':
					_d = wh.rv(_a) !== wh.rv(_b);
					break;
				case '>=':
					_d = wh.rv(_a) >= wh.rv(_b);
					break;
				case '<=':
					_d = wh.rv(_a) <= wh.rv(_b);
					break;
				case '>':
					_d = wh.rv(_a) > wh.rv(_b);
					break;
				case '<':
					_d = wh.rv(_a) < wh.rv(_b);
					break;
				case '<<':
					_d = wh.rv(_a) << wh.rv(_b);
					break;
				case '>>':
					_d = wh.rv(_a) >> wh.rv(_b);
					break;
				default:
					break;
				}
				return _c ? wh.nh(_d, "c") : _d;
				break;
			case '-':
				_a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
				_b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
				_c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
				_d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
				return _c ? wh.nh(_d, "c") : _d;
				break;
			case '!':
				_a = rev(ops[1], e, s, g, o, _f);
				_c = should_pass_type_info && (wh.hn(_a) == 'h');
				_d = !wh.rv(_a);
				return _c ? wh.nh(_d, "c") : _d;
			case '~':
				_a = rev(ops[1], e, s, g, o, _f);
				_c = should_pass_type_info && (wh.hn(_a) == 'h');
				_d = ~wh.rv(_a);
				return _c ? wh.nh(_d, "c") : _d;
			default:
				$gwn('unrecognized op' + rop);
			}
		}
		function rev(ops, e, s, g, o, newap) {
			var op = ops[0];
			var _f = false;
			if (typeof newap !== "undefined") o.ap = newap;
			if (typeof(op) === 'object') {
				var vop = op[0];
				var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
				switch (vop) {
				case 2:
					return ArithmeticEv(ops, e, s, g, o);
					break;
				case 4:
					return rev(ops[1], e, s, g, o, _f);
					break;
				case 5:
					switch (ops.length) {
					case 2:
						_a = rev(ops[1], e, s, g, o, _f);
						return should_pass_type_info ? [_a] : [wh.rv(_a)];
						return [_a];
						break;
					case 1:
						return [];
						break;
					default:
						_a = rev(ops[1], e, s, g, o, _f);
						_b = rev(ops[2], e, s, g, o, _f);
						_a.push(should_pass_type_info ? _b: wh.rv(_b));
						return _a;
						break;
					}
					break;
				case 6:
					_a = rev(ops[1], e, s, g, o);
					var ap = o.ap;
					_ta = wh.hn(_a) === 'h';
					_aa = _ta ? wh.rv(_a) : _a;
					o.is_affected |= _ta;
					if (should_pass_type_info) {
						if (_aa === null || typeof(_aa) === 'undefined') {
							return _ta ? wh.nh(undefined, 'e') : undefined;
						}
						_b = rev(ops[2], e, s, g, o, _f);
						_tb = wh.hn(_b) === 'h';
						_bb = _tb ? wh.rv(_b) : _b;
						o.ap = ap;
						o.is_affected |= _tb;
						if (_bb === null || typeof(_bb) === 'undefined' || _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
							return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
						}
						_d = _aa[_bb];
						if (typeof _d === 'function' && !ap) _d = undefined;
						_td = wh.hn(_d) === 'h';
						o.is_affected |= _td;
						return (_ta || _tb) ? (_td ? _d: wh.nh(_d, 'e')) : _d;
					} else {
						if (_aa === null || typeof(_aa) === 'undefined') {
							return undefined;
						}
						_b = rev(ops[2], e, s, g, o, _f);
						_tb = wh.hn(_b) === 'h';
						_bb = _tb ? wh.rv(_b) : _b;
						o.ap = ap;
						o.is_affected |= _tb;
						if (_bb === null || typeof(_bb) === 'undefined' || _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
							return undefined;
						}
						_d = _aa[_bb];
						if (typeof _d === 'function' && !ap) _d = undefined;
						_td = wh.hn(_d) === 'h';
						o.is_affected |= _td;
						return _td ? wh.rv(_d) : _d;
					}
				case 7:
					switch (ops[1][0]) {
					case 11:
						o.is_affected |= wh.hn(g) === 'h';
						return g;
					case 3:
						_s = wh.rv(s);
						_e = wh.rv(e);
						_b = ops[1][1];
						if (g && g.f && g.f.hasOwnProperty(_b)) {
							_a = g.f;
							o.ap = true;
						} else {
							_a = _s && _s.hasOwnProperty(_b) ? s: (_e && _e.hasOwnProperty(_b) ? e: undefined);
						}
						if (should_pass_type_info) {
							if (_a) {
								_ta = wh.hn(_a) === 'h';
								_aa = _ta ? wh.rv(_a) : _a;
								_d = _aa[_b];
								_td = wh.hn(_d) === 'h';
								o.is_affected |= _ta || _td;
								_d = _ta && !_td ? wh.nh(_d, 'e') : _d;
								return _d;
							}
						} else {
							if (_a) {
								_ta = wh.hn(_a) === 'h';
								_aa = _ta ? wh.rv(_a) : _a;
								_d = _aa[_b];
								_td = wh.hn(_d) === 'h';
								o.is_affected |= _ta || _td;
								return wh.rv(_d);
							}
						}
						return undefined;
					}
					break;
				case 8:
					_a = {};
					_a[ops[1]] = rev(ops[2], e, s, g, o, _f);
					return _a;
					break;
				case 9:
					_a = rev(ops[1], e, s, g, o, _f);
					_b = rev(ops[2], e, s, g, o, _f);
					function merge(_a, _b, _ow) {
						var ka, _bbk;
						_ta = wh.hn(_a) === 'h';
						_tb = wh.hn(_b) === 'h';
						_aa = wh.rv(_a);
						_bb = wh.rv(_b);
						for (var k in _bb) {
							if (_ow || !_aa.hasOwnProperty(k)) {
								_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
							}
						}
						return _a;
					}
					var _c = _a
					var _ow = true
					if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
						_a = _b _b = _c _ow = false
					}
					if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
						var _r = {}
						return merge(merge(_r, _a, _ow), _b, _ow);
					} else return merge(_a, _b, _ow);
					break;
				case 10:
					_a = rev(ops[1], e, s, g, o, _f);
					_a = should_pass_type_info ? _a: wh.rv(_a);
					return _a;
					break;
				case 12:
					var _r;
					_a = rev(ops[1], e, s, g, o);
					if (!o.ap) {
						return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
					}
					var ap = o.ap;
					_b = rev(ops[2], e, s, g, o, _f);
					o.ap = ap;
					_ta = wh.hn(_a) === 'h';
					_tb = _ca(_b);
					_aa = wh.rv(_a);
					_bb = wh.rv(_b);
					snap_bb = $gdc(_bb, "nv_");
					try {
						_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
					} catch(e) {
						e.message = e.message.replace(/nv_/g, "");
						e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
						e.stack = e.stack.replace(/\snv_/g, " ");
						e.stack = $gstack(e.stack);
						if (g.debugInfo) {
							e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
							console.error(e);
						}
						_r = undefined;
					}
					return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
				}
			} else {
				if (op === 3 || op === 1) return ops[1];
				else if (op === 11) {
					var _a = '';
					for (var i = 1; i < ops.length; i++) {
						var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
						_a += typeof(xp) === 'undefined' ? '': xp;
					}
					return _a;
				}
			}
		}
		function wrapper(ops, e, s, g, o, newap) {
			if (ops[0] == '11182016') {
				g.debugInfo = ops[2];
				return rev(ops[1], e, s, g, o, newap);
			} else {
				g.debugInfo = null;
				return rev(ops, e, s, g, o, newap);
			}
		}
		return wrapper;
	}
	gra = $gwrt(true);
	grb = $gwrt(false);
	function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
		{
			var o = {
				is_affected: false
			};
			var a = gra(ops, e, s, g, o);
			if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
				console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
			}
		} {
			var o = {
				is_affected: false
			};
			var a = grb(ops, e, s, g, o);
			if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
				console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
			}
		}
	}
	function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
		var _n = wh.hn(to_iter) === 'n';
		var scope = wh.rv(_s);
		var has_old_item = scope.hasOwnProperty(itemname);
		var has_old_index = scope.hasOwnProperty(indexname);
		var old_item = scope[itemname];
		var old_index = scope[indexname];
		var full = Object.prototype.toString.call(wh.rv(to_iter));
		var type = full[8];
		if (type === 'N' && full[10] === 'l') type = 'X';
		var _y;
		if (_n) {
			if (type === 'A') {
				var r_iter_item;
				for (var i = 0; i < to_iter.length; i++) {
					scope[itemname] = to_iter[i];
					scope[indexname] = _n ? i: wh.nh(i, 'h');
					r_iter_item = wh.rv(to_iter[i]);
					var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item: wh.rv(r_iter_item[keyname])) : undefined;
					_y = _v(key);
					_(father, _y);
					func(env, scope, _y, global);
				}
			} else if (type === 'O') {
				var i = 0;
				var r_iter_item;
				for (var k in to_iter) {
					scope[itemname] = to_iter[k];
					scope[indexname] = _n ? k: wh.nh(k, 'h');
					r_iter_item = wh.rv(to_iter[k]);
					var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item: wh.rv(r_iter_item[keyname])) : undefined;
					_y = _v(key);
					_(father, _y);
					func(env, scope, _y, global);
					i++;
				}
			} else if (type === 'S') {
				for (var i = 0; i < to_iter.length; i++) {
					scope[itemname] = to_iter[i];
					scope[indexname] = _n ? i: wh.nh(i, 'h');
					_y = _v(to_iter[i] + i);
					_(father, _y);
					func(env, scope, _y, global);
				}
			} else if (type === 'N') {
				for (var i = 0; i < to_iter; i++) {
					scope[itemname] = i;
					scope[indexname] = _n ? i: wh.nh(i, 'h');
					_y = _v(i);
					_(father, _y);
					func(env, scope, _y, global);
				}
			} else {}
		} else {
			var r_to_iter = wh.rv(to_iter);
			var r_iter_item, iter_item;
			if (type === 'A') {
				for (var i = 0; i < r_to_iter.length; i++) {
					iter_item = r_to_iter[i];
					iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
					r_iter_item = wh.rv(iter_item);
					scope[itemname] = iter_item scope[indexname] = _n ? i: wh.nh(i, 'h');
					var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item: wh.rv(r_iter_item[keyname])) : undefined;
					_y = _v(key);
					_(father, _y);
					func(env, scope, _y, global);
				}
			} else if (type === 'O') {
				var i = 0;
				for (var k in r_to_iter) {
					iter_item = r_to_iter[k];
					iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
					r_iter_item = wh.rv(iter_item);
					scope[itemname] = iter_item;
					scope[indexname] = _n ? k: wh.nh(k, 'h');
					var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item: wh.rv(r_iter_item[keyname])) : undefined;
					_y = _v(key);
					_(father, _y);
					func(env, scope, _y, global);
					i++
				}
			} else if (type === 'S') {
				for (var i = 0; i < r_to_iter.length; i++) {
					iter_item = wh.nh(r_to_iter[i], 'h');
					scope[itemname] = iter_item;
					scope[indexname] = _n ? i: wh.nh(i, 'h');
					_y = _v(to_iter[i] + i);
					_(father, _y);
					func(env, scope, _y, global);
				}
			} else if (type === 'N') {
				for (var i = 0; i < r_to_iter; i++) {
					iter_item = wh.nh(i, 'h');
					scope[itemname] = iter_item;
					scope[indexname] = _n ? i: wh.nh(i, 'h');
					_y = _v(i);
					_(father, _y);
					func(env, scope, _y, global);
				}
			} else {}
		}
		if (has_old_item) {
			scope[itemname] = old_item;
		} else {
			delete scope[itemname];
		}
		if (has_old_index) {
			scope[indexname] = old_index;
		} else {
			delete scope[indexname];
		}
	}
	function _ca(o) {
		if (wh.hn(o) == 'h') return true;
		if (typeof o !== "object") return false;
		for (var i in o) {
			if (o.hasOwnProperty(i)) {
				if (_ca(o[i])) return true;
			}
		}
		return false;
	}
	function _da(node, attrname, opindex, raw, o) {
		var isaffected = false;
		var value = $gdc(raw, "", 2);
		if (o.ap && value && value.constructor === Function) {
			attrname = "$wxs:" + attrname;
			node.attr["$gdc"] = $gdc;
		}
		if (o.is_affected || _ca(raw)) {
			node.n.push(attrname);
			node.raw[attrname] = raw;
		}
		node.attr[attrname] = value;
	}
	function _r(node, attrname, opindex, env, scope, global) {
		global.opindex = opindex;
		var o = {},
		_env;
		var a = grb(z[opindex], env, scope, global, o);
		_da(node, attrname, opindex, a, o);
	}
	function _rz(z, node, attrname, opindex, env, scope, global) {
		global.opindex = opindex;
		var o = {},
		_env;
		var a = grb(z[opindex], env, scope, global, o);
		_da(node, attrname, opindex, a, o);
	}
	function _o(opindex, env, scope, global) {
		global.opindex = opindex;
		var nothing = {};
		var r = grb(z[opindex], env, scope, global, nothing);
		return (r && r.constructor === Function) ? undefined: r;
	}
	function _oz(z, opindex, env, scope, global) {
		global.opindex = opindex;
		var nothing = {};
		var r = grb(z[opindex], env, scope, global, nothing);
		return (r && r.constructor === Function) ? undefined: r;
	}
	function _1(opindex, env, scope, global, o) {
		var o = o || {};
		global.opindex = opindex;
		return gra(z[opindex], env, scope, global, o);
	}
	function _1z(z, opindex, env, scope, global, o) {
		var o = o || {};
		global.opindex = opindex;
		return gra(z[opindex], env, scope, global, o);
	}
	function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
		var o = {};
		var to_iter = _1(opindex, env, scope, global);
		wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
	}
	function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
		var o = {};
		var to_iter = _1z(z, opindex, env, scope, global);
		wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
	}
	function _m(tag, attrs, generics, env, scope, global) {
		var tmp = _n(tag);
		var base = 0;
		for (var i = 0; i < attrs.length; i += 2) {
			if (base + attrs[i + 1] < 0) {
				tmp.attr[attrs[i]] = true;
			} else {
				_r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
				if (base === 0) base = attrs[i + 1];
			}
		}
		for (var i = 0; i < generics.length; i += 2) {
			if (base + generics[i + 1] < 0) {
				tmp.generics[generics[i]] = "";
			} else {
				var $t = grb(z[base + generics[i + 1]], env, scope, global);
				if ($t != "") $t = "wx-" + $t;
				tmp.generics[generics[i]] = $t;
				if (base === 0) base = generics[i + 1];
			}
		}
		return tmp;
	}
	function _mz(z, tag, attrs, generics, env, scope, global) {
		var tmp = _n(tag);
		var base = 0;
		for (var i = 0; i < attrs.length; i += 2) {
			if (base + attrs[i + 1] < 0) {
				tmp.attr[attrs[i]] = true;
			} else {
				_rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
				if (base === 0) base = attrs[i + 1];
			}
		}
		for (var i = 0; i < generics.length; i += 2) {
			if (base + generics[i + 1] < 0) {
				tmp.generics[generics[i]] = "";
			} else {
				var $t = grb(z[base + generics[i + 1]], env, scope, global);
				if ($t != "") $t = "wx-" + $t;
				tmp.generics[generics[i]] = $t;
				if (base === 0) base = generics[i + 1];
			}
		}
		return tmp;
	}
	var nf_init = function() {
		if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
			nf_init_Object();
			nf_init_Function();
			nf_init_Array();
			nf_init_String();
			nf_init_Boolean();
			nf_init_Number();
			nf_init_Math();
			nf_init_Date();
			nf_init_RegExp();
		}
		if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
	};
	var nf_init_Object = function() {
		Object.defineProperty(Object.prototype, "nv_constructor", {
			writable: true,
			value: "Object"
		}) Object.defineProperty(Object.prototype, "nv_toString", {
			writable: true,
			value: function() {
				return "[object Object]"
			}
		})
	}
	var nf_init_Function = function() {
		Object.defineProperty(Function.prototype, "nv_constructor", {
			writable: true,
			value: "Function"
		}) Object.defineProperty(Function.prototype, "nv_length", {
			get: function() {
				return this.length;
			},
			set: function() {}
		});
		Object.defineProperty(Function.prototype, "nv_toString", {
			writable: true,
			value: function() {
				return "[function Function]"
			}
		})
	}
	var nf_init_Array = function() {
		Object.defineProperty(Array.prototype, "nv_toString", {
			writable: true,
			value: function() {
				return this.nv_join();
			}
		}) Object.defineProperty(Array.prototype, "nv_join", {
			writable: true,
			value: function(s) {
				s = undefined == s ? ',': s;
				var r = "";
				for (var i = 0; i < this.length; ++i) {
					if (0 != i) r += s;
					if (null == this[i] || undefined == this[i]) r += '';
					else if (typeof this[i] == 'function') r += this[i].nv_toString();
					else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
					else r += this[i].toString();
				}
				return r;
			}
		}) Object.defineProperty(Array.prototype, "nv_constructor", {
			writable: true,
			value: "Array"
		}) Object.defineProperty(Array.prototype, "nv_concat", {
			writable: true,
			value: Array.prototype.concat
		}) Object.defineProperty(Array.prototype, "nv_pop", {
			writable: true,
			value: Array.prototype.pop
		}) Object.defineProperty(Array.prototype, "nv_push", {
			writable: true,
			value: Array.prototype.push
		}) Object.defineProperty(Array.prototype, "nv_reverse", {
			writable: true,
			value: Array.prototype.reverse
		}) Object.defineProperty(Array.prototype, "nv_shift", {
			writable: true,
			value: Array.prototype.shift
		}) Object.defineProperty(Array.prototype, "nv_slice", {
			writable: true,
			value: Array.prototype.slice
		}) Object.defineProperty(Array.prototype, "nv_sort", {
			writable: true,
			value: Array.prototype.sort
		}) Object.defineProperty(Array.prototype, "nv_splice", {
			writable: true,
			value: Array.prototype.splice
		}) Object.defineProperty(Array.prototype, "nv_unshift", {
			writable: true,
			value: Array.prototype.unshift
		}) Object.defineProperty(Array.prototype, "nv_indexOf", {
			writable: true,
			value: Array.prototype.indexOf
		}) Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
			writable: true,
			value: Array.prototype.lastIndexOf
		}) Object.defineProperty(Array.prototype, "nv_every", {
			writable: true,
			value: Array.prototype.every
		}) Object.defineProperty(Array.prototype, "nv_some", {
			writable: true,
			value: Array.prototype.some
		}) Object.defineProperty(Array.prototype, "nv_forEach", {
			writable: true,
			value: Array.prototype.forEach
		}) Object.defineProperty(Array.prototype, "nv_map", {
			writable: true,
			value: Array.prototype.map
		}) Object.defineProperty(Array.prototype, "nv_filter", {
			writable: true,
			value: Array.prototype.filter
		}) Object.defineProperty(Array.prototype, "nv_reduce", {
			writable: true,
			value: Array.prototype.reduce
		}) Object.defineProperty(Array.prototype, "nv_reduceRight", {
			writable: true,
			value: Array.prototype.reduceRight
		}) Object.defineProperty(Array.prototype, "nv_length", {
			get: function() {
				return this.length;
			},
			set: function(value) {
				this.length = value;
			}
		});
	}
	var nf_init_String = function() {
		Object.defineProperty(String.prototype, "nv_constructor", {
			writable: true,
			value: "String"
		}) Object.defineProperty(String.prototype, "nv_toString", {
			writable: true,
			value: String.prototype.toString
		}) Object.defineProperty(String.prototype, "nv_valueOf", {
			writable: true,
			value: String.prototype.valueOf
		}) Object.defineProperty(String.prototype, "nv_charAt", {
			writable: true,
			value: String.prototype.charAt
		}) Object.defineProperty(String.prototype, "nv_charCodeAt", {
			writable: true,
			value: String.prototype.charCodeAt
		}) Object.defineProperty(String.prototype, "nv_concat", {
			writable: true,
			value: String.prototype.concat
		}) Object.defineProperty(String.prototype, "nv_indexOf", {
			writable: true,
			value: String.prototype.indexOf
		}) Object.defineProperty(String.prototype, "nv_lastIndexOf", {
			writable: true,
			value: String.prototype.lastIndexOf
		}) Object.defineProperty(String.prototype, "nv_localeCompare", {
			writable: true,
			value: String.prototype.localeCompare
		}) Object.defineProperty(String.prototype, "nv_match", {
			writable: true,
			value: String.prototype.match
		}) Object.defineProperty(String.prototype, "nv_replace", {
			writable: true,
			value: String.prototype.replace
		}) Object.defineProperty(String.prototype, "nv_search", {
			writable: true,
			value: String.prototype.search
		}) Object.defineProperty(String.prototype, "nv_slice", {
			writable: true,
			value: String.prototype.slice
		}) Object.defineProperty(String.prototype, "nv_split", {
			writable: true,
			value: String.prototype.split
		}) Object.defineProperty(String.prototype, "nv_substring", {
			writable: true,
			value: String.prototype.substring
		}) Object.defineProperty(String.prototype, "nv_toLowerCase", {
			writable: true,
			value: String.prototype.toLowerCase
		}) Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
			writable: true,
			value: String.prototype.toLocaleLowerCase
		}) Object.defineProperty(String.prototype, "nv_toUpperCase", {
			writable: true,
			value: String.prototype.toUpperCase
		}) Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
			writable: true,
			value: String.prototype.toLocaleUpperCase
		}) Object.defineProperty(String.prototype, "nv_trim", {
			writable: true,
			value: String.prototype.trim
		}) Object.defineProperty(String.prototype, "nv_length", {
			get: function() {
				return this.length;
			},
			set: function(value) {
				this.length = value;
			}
		});
	}
	var nf_init_Boolean = function() {
		Object.defineProperty(Boolean.prototype, "nv_constructor", {
			writable: true,
			value: "Boolean"
		}) Object.defineProperty(Boolean.prototype, "nv_toString", {
			writable: true,
			value: Boolean.prototype.toString
		}) Object.defineProperty(Boolean.prototype, "nv_valueOf", {
			writable: true,
			value: Boolean.prototype.valueOf
		})
	}
	var nf_init_Number = function() {
		Object.defineProperty(Number, "nv_MAX_VALUE", {
			writable: false,
			value: Number.MAX_VALUE
		}) Object.defineProperty(Number, "nv_MIN_VALUE", {
			writable: false,
			value: Number.MIN_VALUE
		}) Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
			writable: false,
			value: Number.NEGATIVE_INFINITY
		}) Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
			writable: false,
			value: Number.POSITIVE_INFINITY
		}) Object.defineProperty(Number.prototype, "nv_constructor", {
			writable: true,
			value: "Number"
		}) Object.defineProperty(Number.prototype, "nv_toString", {
			writable: true,
			value: Number.prototype.toString
		}) Object.defineProperty(Number.prototype, "nv_toLocaleString", {
			writable: true,
			value: Number.prototype.toLocaleString
		}) Object.defineProperty(Number.prototype, "nv_valueOf", {
			writable: true,
			value: Number.prototype.valueOf
		}) Object.defineProperty(Number.prototype, "nv_toFixed", {
			writable: true,
			value: Number.prototype.toFixed
		}) Object.defineProperty(Number.prototype, "nv_toExponential", {
			writable: true,
			value: Number.prototype.toExponential
		}) Object.defineProperty(Number.prototype, "nv_toPrecision", {
			writable: true,
			value: Number.prototype.toPrecision
		})
	}
	var nf_init_Math = function() {
		Object.defineProperty(Math, "nv_E", {
			writable: false,
			value: Math.E
		}) Object.defineProperty(Math, "nv_LN10", {
			writable: false,
			value: Math.LN10
		}) Object.defineProperty(Math, "nv_LN2", {
			writable: false,
			value: Math.LN2
		}) Object.defineProperty(Math, "nv_LOG2E", {
			writable: false,
			value: Math.LOG2E
		}) Object.defineProperty(Math, "nv_LOG10E", {
			writable: false,
			value: Math.LOG10E
		}) Object.defineProperty(Math, "nv_PI", {
			writable: false,
			value: Math.PI
		}) Object.defineProperty(Math, "nv_SQRT1_2", {
			writable: false,
			value: Math.SQRT1_2
		}) Object.defineProperty(Math, "nv_SQRT2", {
			writable: false,
			value: Math.SQRT2
		}) Object.defineProperty(Math, "nv_abs", {
			writable: false,
			value: Math.abs
		}) Object.defineProperty(Math, "nv_acos", {
			writable: false,
			value: Math.acos
		}) Object.defineProperty(Math, "nv_asin", {
			writable: false,
			value: Math.asin
		}) Object.defineProperty(Math, "nv_atan", {
			writable: false,
			value: Math.atan
		}) Object.defineProperty(Math, "nv_atan2", {
			writable: false,
			value: Math.atan2
		}) Object.defineProperty(Math, "nv_ceil", {
			writable: false,
			value: Math.ceil
		}) Object.defineProperty(Math, "nv_cos", {
			writable: false,
			value: Math.cos
		}) Object.defineProperty(Math, "nv_exp", {
			writable: false,
			value: Math.exp
		}) Object.defineProperty(Math, "nv_floor", {
			writable: false,
			value: Math.floor
		}) Object.defineProperty(Math, "nv_log", {
			writable: false,
			value: Math.log
		}) Object.defineProperty(Math, "nv_max", {
			writable: false,
			value: Math.max
		}) Object.defineProperty(Math, "nv_min", {
			writable: false,
			value: Math.min
		}) Object.defineProperty(Math, "nv_pow", {
			writable: false,
			value: Math.pow
		}) Object.defineProperty(Math, "nv_random", {
			writable: false,
			value: Math.random
		}) Object.defineProperty(Math, "nv_round", {
			writable: false,
			value: Math.round
		}) Object.defineProperty(Math, "nv_sin", {
			writable: false,
			value: Math.sin
		}) Object.defineProperty(Math, "nv_sqrt", {
			writable: false,
			value: Math.sqrt
		}) Object.defineProperty(Math, "nv_tan", {
			writable: false,
			value: Math.tan
		})
	}
	var nf_init_Date = function() {
		Object.defineProperty(Date.prototype, "nv_constructor", {
			writable: true,
			value: "Date"
		}) Object.defineProperty(Date, "nv_parse", {
			writable: true,
			value: Date.parse
		}) Object.defineProperty(Date, "nv_UTC", {
			writable: true,
			value: Date.UTC
		}) Object.defineProperty(Date, "nv_now", {
			writable: true,
			value: Date.now
		}) Object.defineProperty(Date.prototype, "nv_toString", {
			writable: true,
			value: Date.prototype.toString
		}) Object.defineProperty(Date.prototype, "nv_toDateString", {
			writable: true,
			value: Date.prototype.toDateString
		}) Object.defineProperty(Date.prototype, "nv_toTimeString", {
			writable: true,
			value: Date.prototype.toTimeString
		}) Object.defineProperty(Date.prototype, "nv_toLocaleString", {
			writable: true,
			value: Date.prototype.toLocaleString
		}) Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
			writable: true,
			value: Date.prototype.toLocaleDateString
		}) Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
			writable: true,
			value: Date.prototype.toLocaleTimeString
		}) Object.defineProperty(Date.prototype, "nv_valueOf", {
			writable: true,
			value: Date.prototype.valueOf
		}) Object.defineProperty(Date.prototype, "nv_getTime", {
			writable: true,
			value: Date.prototype.getTime
		}) Object.defineProperty(Date.prototype, "nv_getFullYear", {
			writable: true,
			value: Date.prototype.getFullYear
		}) Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
			writable: true,
			value: Date.prototype.getUTCFullYear
		}) Object.defineProperty(Date.prototype, "nv_getMonth", {
			writable: true,
			value: Date.prototype.getMonth
		}) Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
			writable: true,
			value: Date.prototype.getUTCMonth
		}) Object.defineProperty(Date.prototype, "nv_getDate", {
			writable: true,
			value: Date.prototype.getDate
		}) Object.defineProperty(Date.prototype, "nv_getUTCDate", {
			writable: true,
			value: Date.prototype.getUTCDate
		}) Object.defineProperty(Date.prototype, "nv_getDay", {
			writable: true,
			value: Date.prototype.getDay
		}) Object.defineProperty(Date.prototype, "nv_getUTCDay", {
			writable: true,
			value: Date.prototype.getUTCDay
		}) Object.defineProperty(Date.prototype, "nv_getHours", {
			writable: true,
			value: Date.prototype.getHours
		}) Object.defineProperty(Date.prototype, "nv_getUTCHours", {
			writable: true,
			value: Date.prototype.getUTCHours
		}) Object.defineProperty(Date.prototype, "nv_getMinutes", {
			writable: true,
			value: Date.prototype.getMinutes
		}) Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
			writable: true,
			value: Date.prototype.getUTCMinutes
		}) Object.defineProperty(Date.prototype, "nv_getSeconds", {
			writable: true,
			value: Date.prototype.getSeconds
		}) Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
			writable: true,
			value: Date.prototype.getUTCSeconds
		}) Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
			writable: true,
			value: Date.prototype.getMilliseconds
		}) Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
			writable: true,
			value: Date.prototype.getUTCMilliseconds
		}) Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
			writable: true,
			value: Date.prototype.getTimezoneOffset
		}) Object.defineProperty(Date.prototype, "nv_setTime", {
			writable: true,
			value: Date.prototype.setTime
		}) Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
			writable: true,
			value: Date.prototype.setMilliseconds
		}) Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
			writable: true,
			value: Date.prototype.setUTCMilliseconds
		}) Object.defineProperty(Date.prototype, "nv_setSeconds", {
			writable: true,
			value: Date.prototype.setSeconds
		}) Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
			writable: true,
			value: Date.prototype.setUTCSeconds
		}) Object.defineProperty(Date.prototype, "nv_setMinutes", {
			writable: true,
			value: Date.prototype.setMinutes
		}) Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
			writable: true,
			value: Date.prototype.setUTCMinutes
		}) Object.defineProperty(Date.prototype, "nv_setHours", {
			writable: true,
			value: Date.prototype.setHours
		}) Object.defineProperty(Date.prototype, "nv_setUTCHours", {
			writable: true,
			value: Date.prototype.setUTCHours
		}) Object.defineProperty(Date.prototype, "nv_setDate", {
			writable: true,
			value: Date.prototype.setDate
		}) Object.defineProperty(Date.prototype, "nv_setUTCDate", {
			writable: true,
			value: Date.prototype.setUTCDate
		}) Object.defineProperty(Date.prototype, "nv_setMonth", {
			writable: true,
			value: Date.prototype.setMonth
		}) Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
			writable: true,
			value: Date.prototype.setUTCMonth
		}) Object.defineProperty(Date.prototype, "nv_setFullYear", {
			writable: true,
			value: Date.prototype.setFullYear
		}) Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
			writable: true,
			value: Date.prototype.setUTCFullYear
		}) Object.defineProperty(Date.prototype, "nv_toUTCString", {
			writable: true,
			value: Date.prototype.toUTCString
		}) Object.defineProperty(Date.prototype, "nv_toISOString", {
			writable: true,
			value: Date.prototype.toISOString
		}) Object.defineProperty(Date.prototype, "nv_toJSON", {
			writable: true,
			value: Date.prototype.toJSON
		})
	}
	var nf_init_RegExp = function() {
		Object.defineProperty(RegExp.prototype, "nv_constructor", {
			writable: true,
			value: "RegExp"
		}) Object.defineProperty(RegExp.prototype, "nv_exec", {
			writable: true,
			value: RegExp.prototype.exec
		}) Object.defineProperty(RegExp.prototype, "nv_test", {
			writable: true,
			value: RegExp.prototype.test
		}) Object.defineProperty(RegExp.prototype, "nv_toString", {
			writable: true,
			value: RegExp.prototype.toString
		}) Object.defineProperty(RegExp.prototype, "nv_source", {
			get: function() {
				return this.source;
			},
			set: function() {}
		});
		Object.defineProperty(RegExp.prototype, "nv_global", {
			get: function() {
				return this.global;
			},
			set: function() {}
		});
		Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
			get: function() {
				return this.ignoreCase;
			},
			set: function() {}
		});
		Object.defineProperty(RegExp.prototype, "nv_multiline", {
			get: function() {
				return this.multiline;
			},
			set: function() {}
		});
		Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
			get: function() {
				return this.lastIndex;
			},
			set: function(v) {
				this.lastIndex = v;
			}
		});
	}
	nf_init();
	var nv_getDate = function() {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(Date);
		return new(Function.prototype.bind.apply(Date, args));
	}
	var nv_getRegExp = function() {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(RegExp);
		return new(Function.prototype.bind.apply(RegExp, args));
	}
	var nv_console = {}
	nv_console.nv_log = function() {
		var res = "WXSRT:";
		for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
		console.log(res);
	}
	var nv_parseInt = parseInt,
	nv_parseFloat = parseFloat,
	nv_isNaN = isNaN,
	nv_isFinite = isFinite,
	nv_decodeURI = decodeURI,
	nv_decodeURIComponent = decodeURIComponent,
	nv_encodeURI = encodeURI,
	nv_encodeURIComponent = encodeURIComponent;
	function $gdc(o, p, r) {
		o = wh.rv(o);
		if (o === null || o === undefined) return o;
		if (typeof o === "string" || typeof o === "boolean" || typeof o === "number") return o;
		if (o.constructor === Object) {
			var copy = {};
			for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
			else copy[p + k] = $gdc(o[k], p, r);
			return copy;
		}
		if (o.constructor === Array) {
			var copy = [];
			for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
			return copy;
		}
		if (o.constructor === Date) {
			var copy = new Date();
			copy.setTime(o.getTime());
			return copy;
		}
		if (o.constructor === RegExp) {
			var f = "";
			if (o.global) f += "g";
			if (o.ignoreCase) f += "i";
			if (o.multiline) f += "m";
			return (new RegExp(o.source, f));
		}
		if (r && typeof o === "function") {
			if (r == 1) return $gdc(o(), undefined, 2);
			if (r == 2) return o;
		}
		return null;
	}
	var nv_JSON = {}
	nv_JSON.nv_stringify = function(o) {
		JSON.stringify(o);
		return JSON.stringify($gdc(o));
	}
	nv_JSON.nv_parse = function(o) {
		if (o === undefined) return undefined;
		var t = JSON.parse(o);
		return $gdc(t, 'nv_');
	}
	function _af(p, a, r, c) {
		p.extraAttr = {
			"t_action": a,
			"t_rawid": r
		};
		if (typeof(c) != 'undefined') p.extraAttr.t_cid = c;
	}
	function _ai(i, p, e, me, r, c) {
		var x = _grp(p, e, me);
		if (x) i.push(x);
		else {
			i.push('');
			_wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
		}
	}
	function _grp(p, e, me) {
		if (p[0] != '/') {
			var mepart = me.split('/');
			mepart.pop();
			var ppart = p.split('/');
			for (var i = 0; i < ppart.length; i++) {
				if (ppart[i] == '..') mepart.pop();
				else if (!ppart[i] || ppart[i] == '.') continue;
				else mepart.push(ppart[i]);
			}
			p = mepart.join('/');
		}
		if (me[0] == '.' && p[0] == '/') p = '.' + p;
		if (e[p]) return p;
		if (e[p + '.wxml']) return p + '.wxml';
	}
	function _gd(p, c, e, d) {
		if (!c) return;
		if (d[p][c]) return d[p][c];
		for (var x = e[p].i.length - 1; x >= 0; x--) {
			if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
		};
		for (var x = e[p].ti.length - 1; x >= 0; x--) {
			var q = _grp(e[p].ti[x], e, p);
			if (q && d[q][c]) return d[q][c]
		}
		var ii = _gapi(e, p);
		for (var x = 0; x < ii.length; x++) {
			if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
		}
		for (var k = e[p].j.length - 1; k >= 0; k--) if (e[p].j[k]) {
			for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
				var pp = _grp(e[e[p].j[k]].ti[q], e, p);
				if (pp && d[pp][c]) {
					return d[pp][c]
				}
			}
		}
	}
	function _gapi(e, p) {
		if (!p) return [];
		if ($gaic[p]) {
			return $gaic[p]
		};
		var ret = [],
		q = [],
		h = 0,
		t = 0,
		put = {},
		visited = {};
		q.push(p);
		visited[p] = true;
		t++;
		while (h < t) {
			var a = q[h++];
			for (var i = 0; i < e[a].ic.length; i++) {
				var nd = e[a].ic[i];
				var np = _grp(nd, e, a);
				if (np && !visited[np]) {
					visited[np] = true;
					q.push(np);
					t++;
				}
			}
			for (var i = 0; a != p && i < e[a].ti.length; i++) {
				var ni = e[a].ti[i];
				var nm = _grp(ni, e, a);
				if (nm && !put[nm]) {
					put[nm] = true;
					ret.push(nm);
				}
			}
		}
		$gaic[p] = ret;
		return ret;
	}
	var $ixc = {};
	function _ic(p, ent, me, e, s, r, gg) {
		var x = _grp(p, ent, me);
		ent[me].j.push(x);
		if (x) {
			if ($ixc[x]) {
				_wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
				return;
			}
			$ixc[x] = true;
			try {
				ent[x].f(e, s, r, gg)
			} catch(e) {}
			$ixc[x] = false;
		} else {
			_wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
		}
	}
	function _w(tn, f, line, c) {
		_wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
	}
	function _ev(dom) {
		var changed = false;
		delete dom.properities;
		delete dom.n;
		if (dom.children) {
			do {
				changed = false;
				var newch = [];
				for (var i = 0; i < dom.children.length; i++) {
					var ch = dom.children[i];
					if (ch.tag == 'virtual') {
						changed = true;
						for (var j = 0; ch.children && j < ch.children.length; j++) {
							newch.push(ch.children[j]);
						}
					} else {
						newch.push(ch);
					}
				}
				dom.children = newch;
			} while ( changed );
			for (var i = 0; i < dom.children.length; i++) {
				_ev(dom.children[i]);
			}
		}
		return dom;
	}
	function _tsd(root) {
		if (root.tag == "wx-wx-scope") {
			root.tag = "virtual";
			root.wxCkey = "11";
			root['wxScopeData'] = root.attr['wx:scope-data'];
			delete root.n;
			delete root.raw;
			delete root.generics;
			delete root.attr;
		}
		for (var i = 0; root.children && i < root.children.length; i++) {
			_tsd(root.children[i]);
		}
		return root;
	}
	var e_ = {}
	if (typeof(global.entrys) === 'undefined') global.entrys = {};
	e_ = global.entrys;
	var d_ = {}
	if (typeof(global.defines) === 'undefined') global.defines = {};
	d_ = global.defines;
	var f_ = {}
	if (typeof(global.modules) === 'undefined') global.modules = {};
	f_ = global.modules || {};
	var p_ = {}
	__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
	__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
	__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
	var z = __WXML_GLOBAL__.ops_set.$gwx41 || [];
	function gz$gwx41_1() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_1) return __WXML_GLOBAL__.ops_cached.$gwx41_1 __WXML_GLOBAL__.ops_cached.$gwx41_1 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'active-class']) Z([3, 'onCancel']) Z([3, 'onChange']) Z([3, 'onConfirm']) Z([[7], [3, 'cancelButtonText']]) Z([3, 'van-area__picker']) Z([3, 'column-class']) Z([[12], [[6], [[7], [3, 'computed']], [3, 'displayColumns']], [[5], [[5], [[7], [3, 'columns']]], [[7], [3, 'columnsNum']]]]) Z([[7], [3, 'confirmButtonText']]) Z([[7], [3, 'itemHeight']]) Z([[7], [3, 'loading']]) Z([[7], [3, 'showToolbar']]) Z([[7], [3, 'title']]) Z([3, 'toolbar-class']) Z([3, 'name']) Z([[7], [3, 'visibleItemCount']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_1);
		return __WXML_GLOBAL__.ops_cached.$gwx41_1
	}
	function gz$gwx41_2() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_2) return __WXML_GLOBAL__.ops_cached.$gwx41_2 __WXML_GLOBAL__.ops_cached.$gwx41_2 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'daysIndex']) Z([[7], [3, 'days']]) Z(z[0]) Z([3, 'dayIndex']) Z([3, 'dayItem']) Z([[7], [3, 'item']]) Z(z[3]) Z([3, 'onDayTap']) Z([a, [[2, '&&'], [[2, '==='], [[7], [3, 'dayIndex']], [1, 4]], [1, 'friday']], [3, ' '], [[2, '&&'], [[6], [[12], [[6], [[7], [3, 'm']], [3, 'isSigned']], [[5], [[5], [[6], [[7], [3, 'dayItem']], [3, 'date']]], [[7], [3, 'signDays']]]], [3, 'signed']], [1, 'signed']]]) Z([[7], [3, 'dayItem']]) Z([[6], [[12], [[6], [[7], [3, 'm']], [3, 'isSigned']], [[5], [[5], [[6], [[7], [3, 'dayItem']], [3, 'date']]], [[7], [3, 'signDays']]]], [3, 'signed']]) Z(z[10])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_2);
		return __WXML_GLOBAL__.ops_cached.$gwx41_2
	}
	function gz$gwx41_3() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_3) return __WXML_GLOBAL__.ops_cached.$gwx41_3 __WXML_GLOBAL__.ops_cached.$gwx41_3 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'result-dialog']) Z([[2, '&&'], [[6], [[7], [3, 'resultData']], [3, 'longCoin']], [[7], [3, 'coinGifShow']]]) Z([[2, '||'], [[2, '!'], [[6], [[7], [3, 'resultData']], [3, 'longCoin']]], [[7], [3, 'isGetLongCoin']]])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_3);
		return __WXML_GLOBAL__.ops_cached.$gwx41_3
	}
	function gz$gwx41_4() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_4) return __WXML_GLOBAL__.ops_cached.$gwx41_4 __WXML_GLOBAL__.ops_cached.$gwx41_4 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_4);
		return __WXML_GLOBAL__.ops_cached.$gwx41_4
	}
	function gz$gwx41_5() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_5) return __WXML_GLOBAL__.ops_cached.$gwx41_5 __WXML_GLOBAL__.ops_cached.$gwx41_5 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([a, [3, 'custom-class '], [[12], [[6], [[7], [3, 'utils']], [3, 'bem']], [[5], [[5], [1, 'loading']], [[8], 'vertical', [[7], [3, 'vertical']]]]]]) Z([[7], [3, 'array12']]) Z([3, 'index']) Z([[2, '==='], [[7], [3, 'type']], [1, 'spinner']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_5);
		return __WXML_GLOBAL__.ops_cached.$gwx41_5
	}
	function gz$gwx41_6() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_6) return __WXML_GLOBAL__.ops_cached.$gwx41_6 __WXML_GLOBAL__.ops_cached.$gwx41_6 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_6);
		return __WXML_GLOBAL__.ops_cached.$gwx41_6
	}
	function gz$gwx41_7() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_7) return __WXML_GLOBAL__.ops_cached.$gwx41_7 __WXML_GLOBAL__.ops_cached.$gwx41_7 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'van-picker custom-class']) Z([[2, '==='], [[7], [3, 'toolbarPosition']], [1, 'top']]) Z([[7], [3, 'loading']]) Z([3, '#1989fa']) Z([3, 'noop']) Z([3, 'van-picker__columns']) Z([[12], [[6], [[7], [3, 'computed']], [3, 'columnsStyle']], [[5], [[9], [[8], 'itemHeight', [[7], [3, 'itemHeight']]], [[8], 'visibleItemCount', [[7], [3, 'visibleItemCount']]]]]]) Z([[12], [[6], [[7], [3, 'computed']], [3, 'columns']], [[5], [[7], [3, 'columns']]]]) Z([3, 'index']) Z([3, 'active-class']) Z([3, 'onChange']) Z([3, 'van-picker__column']) Z([3, 'column-class']) Z([[7], [3, 'index']]) Z([[2, '||'], [[6], [[7], [3, 'item']], [3, 'defaultIndex']], [[7], [3, 'defaultIndex']]]) Z([[6], [[7], [3, 'item']], [3, 'values']]) Z([[7], [3, 'itemHeight']]) Z([[7], [3, 'valueKey']]) Z([[7], [3, 'visibleItemCount']]) Z([[2, '==='], [[7], [3, 'toolbarPosition']], [1, 'bottom']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_7);
		return __WXML_GLOBAL__.ops_cached.$gwx41_7
	}
	function gz$gwx41_8() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_8) return __WXML_GLOBAL__.ops_cached.$gwx41_8 __WXML_GLOBAL__.ops_cached.$gwx41_8 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([[7], [3, 'showToolbar']]) Z([[7], [3, 'title']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_8);
		return __WXML_GLOBAL__.ops_cached.$gwx41_8
	}
	function gz$gwx41_9() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_9) return __WXML_GLOBAL__.ops_cached.$gwx41_9 __WXML_GLOBAL__.ops_cached.$gwx41_9 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([[7], [3, 'show']]) Z([[7], [3, 'areaList']]) Z([3, 'onClose']) Z([3, 'change']) Z([3, 'confirmSite'])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_9);
		return __WXML_GLOBAL__.ops_cached.$gwx41_9
	}
	function gz$gwx41_10() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_10) return __WXML_GLOBAL__.ops_cached.$gwx41_10 __WXML_GLOBAL__.ops_cached.$gwx41_10 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'reservation-dialog']) Z([3, 'dialog-content']) Z([[2, '&&'], [[2, '>'], [[6], [[7], [3, 'list']], [3, 'length']], [1, 1]], [[7], [3, 'currentIndex']]]) Z([[2, '&&'], [[2, '>'], [[6], [[7], [3, 'list']], [3, 'length']], [1, 1]], [[2, '<'], [[7], [3, 'currentIndex']], [[2, '-'], [[6], [[7], [3, 'list']], [3, 'length']], [1, 1]]]]) Z([[7], [3, 'phoneFormVisible']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_10);
		return __WXML_GLOBAL__.ops_cached.$gwx41_10
	}
	function gz$gwx41_11() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_11) return __WXML_GLOBAL__.ops_cached.$gwx41_11 __WXML_GLOBAL__.ops_cached.$gwx41_11 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'game-box']) Z([a, [3, 'background-image: url(\x27'], [[7], [3, 'gameBoxBg']], [3, '\x27)']]) Z([3, '']) Z([[2, '||'], [[2, '!'], [[7], [3, 'isStart']]], [[7], [3, 'isOver']]]) Z([3, 'rowIndex']) Z([3, 'cols']) Z([[7], [3, 'map']]) Z(z[4]) Z([3, 'colIndex']) Z([3, 'blockItem']) Z([[7], [3, 'cols']]) Z(z[8]) Z([a, [3, 'block '], [[2, '?:'], [[2, '=='], [[7], [3, 'blockItem']], [1, 3]], [1, 'head-block'], [1, '']]]) Z([[7], [3, 'colIndex']]) Z([[7], [3, 'rowIndex']]) Z([a, [3, 'width: '], [[7], [3, 'blockSize']], [3, 'px;height: '], [[7], [3, 'blockSize']], [3, 'px;max-width: '], [[7], [3, 'blockSize']], [3, 'px;min-width: '], [[7], [3, 'blockSize']], [3, 'px']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, 2]]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, 3]]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '4-1']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '4-2']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '5-1']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '5-2']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '5-3']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '5-4']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '6-1']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '6-2']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '6-3']]) Z([[2, '=='], [[7], [3, 'blockItem']], [1, '6-4']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_11);
		return __WXML_GLOBAL__.ops_cached.$gwx41_11
	}
	function gz$gwx41_12() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_12) return __WXML_GLOBAL__.ops_cached.$gwx41_12 __WXML_GLOBAL__.ops_cached.$gwx41_12 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'hidePopup']) Z([3, 'handleAddress']) Z([[7], [3, 'showPopup']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_12);
		return __WXML_GLOBAL__.ops_cached.$gwx41_12
	}
	function gz$gwx41_13() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_13) return __WXML_GLOBAL__.ops_cached.$gwx41_13 __WXML_GLOBAL__.ops_cached.$gwx41_13 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_13);
		return __WXML_GLOBAL__.ops_cached.$gwx41_13
	}
	function gz$gwx41_14() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_14) return __WXML_GLOBAL__.ops_cached.$gwx41_14 __WXML_GLOBAL__.ops_cached.$gwx41_14 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_14);
		return __WXML_GLOBAL__.ops_cached.$gwx41_14
	}
	function gz$gwx41_15() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_15) return __WXML_GLOBAL__.ops_cached.$gwx41_15 __WXML_GLOBAL__.ops_cached.$gwx41_15 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_15);
		return __WXML_GLOBAL__.ops_cached.$gwx41_15
	}
	function gz$gwx41_16() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_16) return __WXML_GLOBAL__.ops_cached.$gwx41_16 __WXML_GLOBAL__.ops_cached.$gwx41_16 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'game']) Z([[7], [3, 'resultVisible']]) Z([3, 'handleDialogClose']) Z([[7], [3, 'resultData']]) Z([3, 'auth'])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_16);
		return __WXML_GLOBAL__.ops_cached.$gwx41_16
	}
	function gz$gwx41_17() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_17) return __WXML_GLOBAL__.ops_cached.$gwx41_17 __WXML_GLOBAL__.ops_cached.$gwx41_17 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'key']) Z([3, 'url']) Z([[7], [3, 'titleImages']]) Z(z[0]) Z([[2, '&&'], [[6], [[7], [3, 'listDataGroupData']], [[7], [3, 'key']]], [[6], [[6], [[7], [3, 'listDataGroupData']], [[7], [3, 'key']]], [3, 'length']]]) Z([3, 'listLineIndex']) Z([3, 'lineItem']) Z([[6], [[7], [3, 'listDataGroupData']], [[7], [3, 'key']]]) Z(z[5]) Z([3, 'listItemIndex']) Z([3, 'item']) Z([[7], [3, 'listDataKeys']]) Z(z[9]) Z([3, 'data-item']) Z([a, [3, 'width: '], [[6], [[7], [3, 'item']], [3, 'width']], [3, 'rpx']]) Z([[2, '==='], [[6], [[7], [3, 'item']], [3, 'key']], [1, 'prizeImageUrl']]) Z([[2, '&&'], [[2, '<'], [[6], [[7], [3, 'lineItem']], [1, 'rank']], [1, 4]], [[2, '==='], [[6], [[7], [3, 'item']], [3, 'key']], [1, 'rank']]]) Z([[2, '&&'], [[2, '!=='], [[6], [[7], [3, 'item']], [3, 'key']], [1, 'prizeImageUrl']], [[2, '||'], [[2, '>'], [[6], [[7], [3, 'lineItem']], [1, 'rank']], [1, 3]], [[2, '!=='], [[6], [[7], [3, 'item']], [3, 'key']], [1, 'rank']]]]) Z([[2, '==='], [[6], [[7], [3, 'item']], [3, 'key']], [1, 'score']])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_17);
		return __WXML_GLOBAL__.ops_cached.$gwx41_17
	}
	function gz$gwx41_18() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_18) return __WXML_GLOBAL__.ops_cached.$gwx41_18 __WXML_GLOBAL__.ops_cached.$gwx41_18 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'page-container']) Z([a, [3, 'background-image: url(\x27'], [[7], [3, 'containerBackground']], [3, '\x27)']]) Z([[7], [3, 'loading']]) Z([3, 'onRemedy']) Z([3, 'calendar-comoponent']) Z([3, 'pIndex']) Z([[4], [[5], [[5], [[5], [[5], [[5], [1, 5]], [1, 15]], [1, 30]], [1, 50]], [1, 55]]]) Z([3, 'item']) Z([3, 'handleDraw']) Z([a, [3, 'progress-pointer '], [[2, '&&'], [[6], [[12], [[6], [[7], [3, 'gift']], [3, 'giftIcon']], [[5], [[5], [[5], [[7], [3, 'ossUrl']]], [[7], [3, 'pIndex']]], [[7], [3, 'signInfo']]]], [3, 'opened']], [1, 'opened']]]) Z([[12], [[6], [[7], [3, 'gift']], [3, 'giftIcon']], [[5], [[5], [[5], [[7], [3, 'ossUrl']]], [[7], [3, 'pIndex']]], [[7], [3, 'signInfo']]]]) Z([[6], [[12], [[6], [[7], [3, 'gift']], [3, 'giftIcon']], [[5], [[5], [[5], [[7], [3, 'ossUrl']]], [[7], [3, 'pIndex']]], [[7], [3, 'signInfo']]]], [3, 'opened']]) Z([[7], [3, 'resultVisible']]) Z([3, 'handleDialogClose']) Z([[7], [3, 'resultData']]) Z([[7], [3, 'remedyDialogVisible']]) Z([[7], [3, 'noRemedyDialogVisible']]) Z([3, 'auth'])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_18);
		return __WXML_GLOBAL__.ops_cached.$gwx41_18
	}
	function gz$gwx41_19() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_19) return __WXML_GLOBAL__.ops_cached.$gwx41_19 __WXML_GLOBAL__.ops_cached.$gwx41_19 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_19);
		return __WXML_GLOBAL__.ops_cached.$gwx41_19
	}
	function gz$gwx41_20() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_20) return __WXML_GLOBAL__.ops_cached.$gwx41_20 __WXML_GLOBAL__.ops_cached.$gwx41_20 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_20);
		return __WXML_GLOBAL__.ops_cached.$gwx41_20
	}
	function gz$gwx41_21() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_21) return __WXML_GLOBAL__.ops_cached.$gwx41_21 __WXML_GLOBAL__.ops_cached.$gwx41_21 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([3, 'page-container']) Z([a, [3, 'background-image: url(\x27'], [[7], [3, 'pageBackground']], [3, '\x27)']]) Z([3, 'ranking-info']) Z([a, z[1][1], [[7], [3, 'rankingInfoBackground']], z[1][3]]) Z([3, 'info-block rank']) Z([[2, '<'], [[6], [[7], [3, 'rankingInfo']], [3, 'rank']], [1, 0]]) Z([[2, '>'], [[6], [[7], [3, 'rankingInfo']], [3, 'rank']], [1, 9999]]) Z([[2, '&&'], [[2, '<='], [[6], [[7], [3, 'rankingInfo']], [3, 'rank']], [1, 9999]], [[2, '>='], [[6], [[7], [3, 'rankingInfo']], [3, 'rank']], [1, 0]]]) Z([3, 'info-block']) Z([[2, '<'], [[6], [[7], [3, 'rankingInfo']], [3, 'score']], [1, 0]]) Z([[2, '>='], [[6], [[7], [3, 'rankingInfo']], [3, 'score']], [1, 0]]) Z([3, 'itemIndex']) Z([3, 'listItem']) Z([[7], [3, 'listData']]) Z(z[11]) Z([3, 'listDataIndex']) Z([3, 'item']) Z([[7], [3, 'listDataKeys']]) Z(z[15]) Z([a, [3, 'width: '], [[6], [[7], [3, 'item']], [3, 'width']], [3, 'rpx']]) Z([[2, '&&'], [[2, '<'], [[6], [[7], [3, 'listItem']], [3, 'order']], [1, 4]], [[2, '==='], [[6], [[7], [3, 'item']], [3, 'key']], [1, 'order']]]) Z([[2, '||'], [[2, '!=='], [[6], [[7], [3, 'item']], [3, 'key']], [1, 'order']], [[2, '>'], [[6], [[7], [3, 'listItem']], [3, 'order']], [1, 3]]])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_21);
		return __WXML_GLOBAL__.ops_cached.$gwx41_21
	}
	function gz$gwx41_22() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_22) return __WXML_GLOBAL__.ops_cached.$gwx41_22 __WXML_GLOBAL__.ops_cached.$gwx41_22 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
			Z([[7], [3, 'dialogVisible']]) Z([3, 'onDialogClose']) Z([[7], [3, 'reservationList']]) Z([3, 'auth'])
		})(__WXML_GLOBAL__.ops_cached.$gwx41_22);
		return __WXML_GLOBAL__.ops_cached.$gwx41_22
	}
	function gz$gwx41_23() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_23) return __WXML_GLOBAL__.ops_cached.$gwx41_23 __WXML_GLOBAL__.ops_cached.$gwx41_23 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_23);
		return __WXML_GLOBAL__.ops_cached.$gwx41_23
	}
	function gz$gwx41_24() {
		if (__WXML_GLOBAL__.ops_cached.$gwx41_24) return __WXML_GLOBAL__.ops_cached.$gwx41_24 __WXML_GLOBAL__.ops_cached.$gwx41_24 = []; (function(z) {
			var a = 11;
			function Z(ops) {
				z.push(ops)
			}
		})(__WXML_GLOBAL__.ops_cached.$gwx41_24);
		return __WXML_GLOBAL__.ops_cached.$gwx41_24
	}
	__WXML_GLOBAL__.ops_set.$gwx41 = z;
	__WXML_GLOBAL__.ops_init.$gwx41 = true;
	var nv_require = function() {
		var nnm = {
			"p_./package2024CNY/components/area/index.wxs": np_0,
			"p_./package2024CNY/components/calendar/calendar.wxs": np_1,
			"p_./package2024CNY/components/loading/index.wxs": np_2,
			"p_./package2024CNY/components/picker-column/index.wxs": np_3,
			"p_./package2024CNY/components/picker/index.wxs": np_4,
			"p_./package2024CNY/components/snake-game/wxs.wxs": np_5,
			"p_./package2024CNY/components/wxs/add-unit.wxs": np_6,
			"p_./package2024CNY/components/wxs/array.wxs": np_7,
			"p_./package2024CNY/components/wxs/bem.wxs": np_8,
			"p_./package2024CNY/components/wxs/memoize.wxs": np_9,
			"p_./package2024CNY/components/wxs/object.wxs": np_10,
			"p_./package2024CNY/components/wxs/style.wxs": np_11,
			"p_./package2024CNY/components/wxs/utils.wxs": np_12,
			"p_./package2024CNY/pages/game-prize/prize.wxs": np_13,
			"p_./package2024CNY/pages/historical-ranking/ranking.wxs": np_14,
			"p_./package2024CNY/pages/index/index.wxs": np_15,
			"p_./package2024CNY/pages/prize/prize.wxs": np_16,
			"p_./package2024CNY/pages/ranking/ranking.wxs": np_17,
		};
		var nom = {};
		return function(n) {
			if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
			return function() {
				if (!nnm[n]) return undefined;
				try {
					if (!nom[n]) nom[n] = nnm[n]();
					return nom[n];
				} catch(e) {
					e.message = e.message.replace(/nv_/g, '');
					var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
					e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
					e.stack = e.stack.replace(/\snv_/g, ' ');
					e.stack = $gstack(e.stack);
					e.stack += '\n    at ' + n.substring(2);
					console.error(e);
				}
			}
		}
	} () f_['./package2024CNY/components/area/index.wxml'] = {};
	f_['./package2024CNY/components/area/index.wxml']['computed'] = f_['./package2024CNY/components/area/index.wxs'] || nv_require("p_./package2024CNY/components/area/index.wxs");
	f_['./package2024CNY/components/area/index.wxml']['computed']();
	f_['./package2024CNY/components/area/index.wxs'] = nv_require("p_./package2024CNY/components/area/index.wxs");
	function np_0() {
		var nv_module = {
			nv_exports: {}
		};
		function nv_displayColumns(nv_columns, nv_columnsNum) {
			return (nv_columns.nv_slice(0, +nv_columnsNum))
		};
		nv_module.nv_exports = ({
			nv_displayColumns: nv_displayColumns,
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/calendar/calendar.wxml'] = {};
	f_['./package2024CNY/components/calendar/calendar.wxml']['m'] = f_['./package2024CNY/components/calendar/calendar.wxs'] || nv_require("p_./package2024CNY/components/calendar/calendar.wxs");
	f_['./package2024CNY/components/calendar/calendar.wxml']['m']();
	f_['./package2024CNY/components/calendar/calendar.wxs'] = nv_require("p_./package2024CNY/components/calendar/calendar.wxs");
	function np_1() {
		var nv_module = {
			nv_exports: {}
		};
		nv_module.nv_exports.nv_isSigned = (function(nv_date, nv_signDays) {
			var nv_index = nv_signDays.nv_map((function(nv_item) {
				return (nv_item.nv_date)
			})).nv_indexOf(nv_date);
			return (({
				nv_signed: nv_index !== -1,
				nv_remedy: nv_signDays[((nt_0 = (nv_index), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))] && nv_signDays[((nt_1 = (nv_index), null == nt_1 ? undefined: 'number' === typeof nt_1 ? nt_1: "nv_" + nt_1))].nv_remedy,
			}))
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/loading/index.wxml'] = {};
	f_['./package2024CNY/components/loading/index.wxml']['utils'] = f_['./package2024CNY/components/wxs/utils.wxs'] || nv_require("p_./package2024CNY/components/wxs/utils.wxs");
	f_['./package2024CNY/components/loading/index.wxml']['utils']();
	f_['./package2024CNY/components/loading/index.wxml']['computed'] = f_['./package2024CNY/components/loading/index.wxs'] || nv_require("p_./package2024CNY/components/loading/index.wxs");
	f_['./package2024CNY/components/loading/index.wxml']['computed']();
	f_['./package2024CNY/components/loading/index.wxs'] = nv_require("p_./package2024CNY/components/loading/index.wxs");
	function np_2() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_style = nv_require('p_./package2024CNY/components/wxs/style.wxs')();
		var nv_addUnit = nv_require('p_./package2024CNY/components/wxs/add-unit.wxs')();
		function nv_spinnerStyle(nv_data) {
			return (nv_style(({
				nv_color: nv_data.nv_color,
				nv_width: nv_addUnit(nv_data.nv_size),
				nv_height: nv_addUnit(nv_data.nv_size),
			})))
		};
		function nv_textStyle(nv_data) {
			return (nv_style(({
				'nv_font-size': nv_addUnit(nv_data.nv_textSize),
			})))
		};
		nv_module.nv_exports = ({
			nv_spinnerStyle: nv_spinnerStyle,
			nv_textStyle: nv_textStyle,
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/picker-column/index.wxml'] = {};
	f_['./package2024CNY/components/picker-column/index.wxml']['utils'] = f_['./package2024CNY/components/wxs/utils.wxs'] || nv_require("p_./package2024CNY/components/wxs/utils.wxs");
	f_['./package2024CNY/components/picker-column/index.wxml']['utils']();
	f_['./package2024CNY/components/picker-column/index.wxml']['computed'] = f_['./package2024CNY/components/picker-column/index.wxs'] || nv_require("p_./package2024CNY/components/picker-column/index.wxs");
	f_['./package2024CNY/components/picker-column/index.wxml']['computed']();
	f_['./package2024CNY/components/picker-column/index.wxs'] = nv_require("p_./package2024CNY/components/picker-column/index.wxs");
	function np_3() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_style = nv_require('p_./package2024CNY/components/wxs/style.wxs')();
		var nv_addUnit = nv_require('p_./package2024CNY/components/wxs/add-unit.wxs')();
		function nv_isObj(nv_x) {
			var nv_type = typeof nv_x;
			return (nv_x !== null && (nv_type === 'object' || nv_type === 'function'))
		};
		function nv_optionText(nv_option, nv_valueKey) {
			return (nv_isObj(nv_option) && nv_option[((nt_0 = (nv_valueKey), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))] != null ? nv_option[((nt_1 = (nv_valueKey), null == nt_1 ? undefined: 'number' === typeof nt_1 ? nt_1: "nv_" + nt_1))] : nv_option)
		};
		function nv_rootStyle(nv_data) {
			return (nv_style(({
				nv_height: nv_addUnit(nv_data.nv_itemHeight * nv_data.nv_visibleItemCount),
			})))
		};
		function nv_wrapperStyle(nv_data) {
			var nv_offset = nv_addUnit(nv_data.nv_offset + (nv_data.nv_itemHeight * (nv_data.nv_visibleItemCount - 1)) / 2);
			return (nv_style(({
				nv_transition: 'transform ' + nv_data.nv_duration + 'ms',
				'nv_line-height': nv_addUnit(nv_data.nv_itemHeight),
				nv_transform: 'translate3d(0, ' + nv_offset + ', 0)',
			})))
		};
		nv_module.nv_exports = ({
			nv_optionText: nv_optionText,
			nv_rootStyle: nv_rootStyle,
			nv_wrapperStyle: nv_wrapperStyle,
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/picker/index.wxml'] = {};
	f_['./package2024CNY/components/picker/index.wxml']['computed'] = f_['./package2024CNY/components/picker/index.wxs'] || nv_require("p_./package2024CNY/components/picker/index.wxs");
	f_['./package2024CNY/components/picker/index.wxml']['computed']();
	f_['./package2024CNY/components/picker/index.wxs'] = nv_require("p_./package2024CNY/components/picker/index.wxs");
	function np_4() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_style = nv_require('p_./package2024CNY/components/wxs/style.wxs')();
		var nv_addUnit = nv_require('p_./package2024CNY/components/wxs/add-unit.wxs')();
		var nv_array = nv_require('p_./package2024CNY/components/wxs/array.wxs')();
		function nv_columnsStyle(nv_data) {
			return (nv_style(({
				nv_height: nv_addUnit(nv_data.nv_itemHeight * nv_data.nv_visibleItemCount),
			})))
		};
		function nv_maskStyle(nv_data) {
			return (nv_style(({
				'nv_background-size': '100% ' + nv_addUnit((nv_data.nv_itemHeight * (nv_data.nv_visibleItemCount - 1)) / 2),
			})))
		};
		function nv_frameStyle(nv_data) {
			return (nv_style(({
				nv_height: nv_addUnit(nv_data.nv_itemHeight),
			})))
		};
		function nv_columns(nv_columns) {
			if (!nv_array.nv_isArray(nv_columns)) {
				return ([])
			};
			if (nv_columns.nv_length && !nv_columns[(0)].nv_values) {
				return ([({
					nv_values: nv_columns,
				})])
			};
			return (nv_columns)
		};
		nv_module.nv_exports = ({
			nv_columnsStyle: nv_columnsStyle,
			nv_frameStyle: nv_frameStyle,
			nv_maskStyle: nv_maskStyle,
			nv_columns: nv_columns,
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/snake-game/snake-game.wxml'] = {};
	f_['./package2024CNY/components/snake-game/snake-game.wxml']['snakeWxs'] = f_['./package2024CNY/components/snake-game/wxs.wxs'] || nv_require("p_./package2024CNY/components/snake-game/wxs.wxs");
	f_['./package2024CNY/components/snake-game/snake-game.wxml']['snakeWxs']();
	f_['./package2024CNY/components/snake-game/wxs.wxs'] = nv_require("p_./package2024CNY/components/snake-game/wxs.wxs");
	function np_5() {
		var nv_module = {
			nv_exports: {}
		};
		nv_module.nv_exports = ({
			'nv_headRotate': (function(nv_dir) {
				var nv_degObj = ({
					nv_right: 0,
					nv_down: 90,
					nv_left: 180,
					nv_up: 270,
				});
				var nv_degObj2 = ({
					nv_right: 0,
					nv_down: 0,
					nv_left: 180,
					nv_up: 0,
				});
				return ("rotate(" + nv_degObj[((nt_0 = (nv_dir), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))] + "deg) rotateX(" + nv_degObj2[((nt_1 = (nv_dir), null == nt_1 ? undefined: 'number' === typeof nt_1 ? nt_1: "nv_" + nt_1))] + "deg)")
			}),
			'nv_calcRote': (function(nv_snakes, nv_row, nv_col) {
				nv_console.nv_log([nv_row, nv_col]);
				return (0)
			}),
			nv_formatSeconds: (function(nv_seconds) {
				nv_seconds = Number(nv_seconds);
				if (nv_isNaN(nv_seconds) || nv_seconds < 0) {
					return ("00:00")
				};
				var nv_minutes = Math.nv_floor(nv_seconds / 60);
				var nv_remainingSeconds = nv_seconds % 60;
				nv_minutes = nv_minutes < 10 ? "0" + nv_minutes: nv_minutes;
				nv_remainingSeconds = nv_remainingSeconds < 10 ? "0" + nv_remainingSeconds: nv_remainingSeconds;
				return (nv_minutes + ":" + nv_remainingSeconds)
			}),
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/wxs/add-unit.wxs'] = nv_require("p_./package2024CNY/components/wxs/add-unit.wxs");
	function np_6() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_REGEXP = nv_getRegExp('^-?\x5cd+(\x5c.\x5cd+)?$');
		function nv_addUnit(nv_value) {
			if (nv_value == null) {
				return (undefined)
			};
			return (nv_REGEXP.nv_test('' + nv_value) ? nv_value + 'px': nv_value)
		};
		nv_module.nv_exports = nv_addUnit;
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/wxs/array.wxs'] = nv_require("p_./package2024CNY/components/wxs/array.wxs");
	function np_7() {
		var nv_module = {
			nv_exports: {}
		};
		function nv_isArray(nv_array) {
			return (nv_array && nv_array.nv_constructor === 'Array')
		};
		nv_module.nv_exports.nv_isArray = nv_isArray;
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/wxs/bem.wxs'] = nv_require("p_./package2024CNY/components/wxs/bem.wxs");
	function np_8() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_array = nv_require('p_./package2024CNY/components/wxs/array.wxs')();
		var nv_object = nv_require('p_./package2024CNY/components/wxs/object.wxs')();
		var nv_PREFIX = 'van-';
		function nv_join(nv_name, nv_mods) {
			nv_name = nv_PREFIX + nv_name;
			nv_mods = nv_mods.nv_map((function(nv_mod) {
				return (nv_name + '--' + nv_mod)
			}));
			nv_mods.nv_unshift(nv_name);
			return (nv_mods.nv_join(' '))
		};
		function nv_traversing(nv_mods, nv_conf) {
			if (!nv_conf) {
				return
			};
			if (typeof nv_conf === 'string' || typeof nv_conf === 'number') {
				nv_mods.nv_push(nv_conf)
			} else if (nv_array.nv_isArray(nv_conf)) {
				nv_conf.nv_forEach((function(nv_item) {
					nv_traversing(nv_mods, nv_item)
				}))
			} else if (typeof nv_conf === 'object') {
				nv_object.nv_keys(nv_conf).nv_forEach((function(nv_key) {
					nv_conf[((nt_0 = (nv_key), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))] && nv_mods.nv_push(nv_key)
				}))
			}
		};
		function nv_bem(nv_name, nv_conf) {
			var nv_mods = [];
			nv_traversing(nv_mods, nv_conf);
			return (nv_join(nv_name, nv_mods))
		};
		nv_module.nv_exports = nv_bem;
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/wxs/memoize.wxs'] = nv_require("p_./package2024CNY/components/wxs/memoize.wxs");
	function np_9() {
		var nv_module = {
			nv_exports: {}
		};
		function nv_isPrimitive(nv_value) {
			var nv_type = typeof nv_value;
			return ((nv_type === 'boolean' || nv_type === 'number' || nv_type === 'string' || nv_type === 'undefined' || nv_value === null))
		};
		function nv_call(nv_fn, nv_args) {
			if (nv_args.nv_length === 2) {
				return (nv_fn(nv_args[(0)], nv_args[(1)]))
			};
			if (nv_args.nv_length === 1) {
				return (nv_fn(nv_args[(0)]))
			};
			return (nv_fn())
		};
		function nv_serializer(nv_args) {
			if (nv_args.nv_length === 1 && nv_isPrimitive(nv_args[(0)])) {
				return (nv_args[(0)])
			};
			var nv_obj = ({});
			for (var nv_i = 0; nv_i < nv_args.nv_length; nv_i++) {
				nv_obj[((nt_5 = ('key' + nv_i), null == nt_5 ? undefined: 'number' === typeof nt_5 ? nt_5: "nv_" + nt_5))] = nv_args[((nt_6 = (nv_i), null == nt_6 ? undefined: 'number' === typeof nt_6 ? nt_6: "nv_" + nt_6))]
			};
			return (nv_JSON.nv_stringify(nv_obj))
		};
		function nv_memoize(nv_fn) {
			arguments.nv_length = arguments.length;
			var nv_cache = ({});
			return ((function() {
				arguments.nv_length = arguments.length;
				var nv_key = nv_serializer(arguments);
				if (nv_cache[((nt_7 = (nv_key), null == nt_7 ? undefined: 'number' === typeof nt_7 ? nt_7: "nv_" + nt_7))] === undefined) {
					nv_cache[((nt_8 = (nv_key), null == nt_8 ? undefined: 'number' === typeof nt_8 ? nt_8: "nv_" + nt_8))] = nv_call(nv_fn, arguments)
				};
				return (nv_cache[((nt_9 = (nv_key), null == nt_9 ? undefined: 'number' === typeof nt_9 ? nt_9: "nv_" + nt_9))])
			}))
		};
		nv_module.nv_exports = nv_memoize;
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/wxs/object.wxs'] = nv_require("p_./package2024CNY/components/wxs/object.wxs");
	function np_10() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_REGEXP = nv_getRegExp('{|}|\x22', 'g');
		function nv_keys(nv_obj) {
			return (nv_JSON.nv_stringify(nv_obj).nv_replace(nv_REGEXP, '').nv_split(',').nv_map((function(nv_item) {
				return (nv_item.nv_split(':')[(0)])
			})))
		};
		nv_module.nv_exports.nv_keys = nv_keys;
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/wxs/style.wxs'] = nv_require("p_./package2024CNY/components/wxs/style.wxs");
	function np_11() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_object = nv_require('p_./package2024CNY/components/wxs/object.wxs')();
		var nv_array = nv_require('p_./package2024CNY/components/wxs/array.wxs')();
		function nv_kebabCase(nv_word) {
			var nv_newWord = nv_word.nv_replace(nv_getRegExp("[A-Z]", 'g'), (function(nv_i) {
				return ('-' + nv_i)
			})).nv_toLowerCase();
			return (nv_newWord)
		};
		function nv_style(nv_styles) {
			if (nv_array.nv_isArray(nv_styles)) {
				return (nv_styles.nv_filter((function(nv_item) {
					return (nv_item != null && nv_item !== '')
				})).nv_map((function(nv_item) {
					return (nv_style(nv_item))
				})).nv_join(';'))
			};
			if ('Object' === nv_styles.nv_constructor) {
				return (nv_object.nv_keys(nv_styles).nv_filter((function(nv_key) {
					return (nv_styles[((nt_0 = (nv_key), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))] != null && nv_styles[((nt_1 = (nv_key), null == nt_1 ? undefined: 'number' === typeof nt_1 ? nt_1: "nv_" + nt_1))] !== '')
				})).nv_map((function(nv_key) {
					return ([nv_kebabCase(nv_key), [nv_styles[((nt_2 = (nv_key), null == nt_2 ? undefined: 'number' === typeof nt_2 ? nt_2: "nv_" + nt_2))]]].nv_join(':'))
				})).nv_join(';'))
			};
			return (nv_styles)
		};
		nv_module.nv_exports = nv_style;
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/components/wxs/utils.wxs'] = nv_require("p_./package2024CNY/components/wxs/utils.wxs");
	function np_12() {
		var nv_module = {
			nv_exports: {}
		};
		var nv_bem = nv_require('p_./package2024CNY/components/wxs/bem.wxs')();
		var nv_memoize = nv_require('p_./package2024CNY/components/wxs/memoize.wxs')();
		var nv_addUnit = nv_require('p_./package2024CNY/components/wxs/add-unit.wxs')();
		nv_module.nv_exports = ({
			nv_bem: nv_memoize(nv_bem),
			nv_memoize: nv_memoize,
			nv_addUnit: nv_addUnit,
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/pages/game-prize/index.wxml'] = {};
	f_['./package2024CNY/pages/game-prize/index.wxml']['wxs'] = f_['./package2024CNY/pages/game-prize/prize.wxs'] || nv_require("p_./package2024CNY/pages/game-prize/prize.wxs");
	f_['./package2024CNY/pages/game-prize/index.wxml']['wxs']();
	f_['./package2024CNY/pages/game-prize/prize.wxs'] = nv_require("p_./package2024CNY/pages/game-prize/prize.wxs");
	function np_13() {
		var nv_module = {
			nv_exports: {}
		};
		nv_module.nv_exports = ({
			nv_getTagImage: (function(nv_ossUrl, nv_pool) {
				return (nv_ossUrl + 'game/prize/' + nv_pool + '.png')
			}),
			nv_getStatus: (function(nv_item) {
				if (nv_item.nv_prizeType === 1) return (({
					nv_label: '瀹告彃褰傞弨?,}));;if (nv_item.nv_prizeType === 2)return(({nv_label:'缁斿宓嗘担璺ㄦ暏',nv_primary:true,}));;var nv_statusText = ({"nv_0":'閺堫亜鍘幑 ? ,
					"nv_1": '瀹告彃鍘幑?,"nv_2":'閸忔垶宕叉径杈Е',});var nv_isAddress = nv_item.nv_receiveInfo && nv_item.nv_receiveInfo.nv_city;return(({nv_label:!nv_item.nv_status ? '妫板棗褰囨總鏍ф惂':(nv_isAddress ? '瀹告煡顣崣 ? :nv_statusText[((nt_0 = (nv_item.nv_status), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))]), nv_primary: !nv_item.nv_status,
				}))
			}),
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/pages/historical-ranking/index.wxml'] = {};
	f_['./package2024CNY/pages/historical-ranking/index.wxml']['ranking'] = f_['./package2024CNY/pages/historical-ranking/ranking.wxs'] || nv_require("p_./package2024CNY/pages/historical-ranking/ranking.wxs");
	f_['./package2024CNY/pages/historical-ranking/index.wxml']['ranking']();
	f_['./package2024CNY/pages/historical-ranking/ranking.wxs'] = nv_require("p_./package2024CNY/pages/historical-ranking/ranking.wxs");
	function np_14() {
		var nv_module = {
			nv_exports: {}
		};
		nv_module.nv_exports = ({
			nv_getTopImage: (function(nv_ossUrl, nv_order) {
				return (nv_ossUrl + 'ranking/history/top_' + nv_order + '.png')
			}),
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/pages/index/index.wxml'] = {};
	f_['./package2024CNY/pages/index/index.wxml']['gift'] = f_['./package2024CNY/pages/index/index.wxs'] || nv_require("p_./package2024CNY/pages/index/index.wxs");
	f_['./package2024CNY/pages/index/index.wxml']['gift']();
	f_['./package2024CNY/pages/index/index.wxs'] = nv_require("p_./package2024CNY/pages/index/index.wxs");
	function np_15() {
		var nv_module = {
			nv_exports: {}
		};
		function nv_getProgress(nv_signedDays) {
			var nv_steps = [5, 15, 30, 50, 55];
			var nv_step = 0;
			var nv_flag = false;
			if (nv_signedDays >= 55) {
				nv_step = 5
			} else {
				for (var nv_i = 0; nv_i < nv_steps.nv_length; nv_i++) {
					if ((nv_steps[((nt_0 = (nv_i), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))] > nv_signedDays) && !nv_flag) {
						nv_step = nv_i;
						nv_flag = true
					}
				}
			};
			var nv_offset = nv_signedDays > 0 ? (!nv_step ? 60 : (nv_signedDays > nv_steps[((nt_1 = (nv_step - 1), null == nt_1 ? undefined: 'number' === typeof nt_1 ? nt_1: "nv_" + nt_1))] ? (50 + (nv_step > 3 ? 30 : 0)) : 0)) : 0;
			var nv__w = (576 / 5) * (nv_step || 0) - 20 + nv_offset;
			return (({
				nv_width: nv__w > 576 ? 576 : nv__w,
				nv_step: nv_step,
			}))
		};
		nv_module.nv_exports = ({
			nv_giftIcon: (function(nv_ossUrl, nv_index, nv_signInfo) {
				var nv_image = nv_index ? (nv_index > 2 ? 'gift_2': 'gift_1') : 'gift_0';
				var nv_drawnChance = nv_signInfo.nv_drawnChance;
				var nv_signedItem = nv_getProgress(nv_signInfo.nv_signedDays);
				var nv_opened = +nv_drawnChance > +nv_index;
				var nv_unlock = nv_index >= nv_signedItem.nv_step;
				if (nv_unlock) return (({
					nv_url: nv_ossUrl + 'unlock/' + nv_image + '.png',
					nv_lock: true,
				}));;
				return (({
					nv_url: nv_ossUrl + (nv_opened ? 'opend/': '') + nv_image + '.png',
					nv_opened: nv_opened,
				}))
			}),
			'nv_getProgress': nv_getProgress,
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/pages/prize/index.wxml'] = {};
	f_['./package2024CNY/pages/prize/index.wxml']['wxs'] = f_['./package2024CNY/pages/prize/prize.wxs'] || nv_require("p_./package2024CNY/pages/prize/prize.wxs");
	f_['./package2024CNY/pages/prize/index.wxml']['wxs']();
	f_['./package2024CNY/pages/prize/prize.wxs'] = nv_require("p_./package2024CNY/pages/prize/prize.wxs");
	function np_16() {
		var nv_module = {
			nv_exports: {}
		};
		nv_module.nv_exports = ({
			nv_getTagImage: (function(nv_ossUrl, nv_pool) {
				return (nv_ossUrl + 'tag_' + nv_pool + '.png')
			}),
			nv_getStatus: (function(nv_item) {
				if (nv_item.nv_prizeType === 1) return (({
					nv_label: '瀹告彃褰傞弨?,}));;if (nv_item.nv_prizeType === 2)return(({nv_label:'缁斿宓嗘担璺ㄦ暏',nv_primary:true,}));;var nv_statusText = ({"nv_0":'閺堫亜鍘幑 ? ,
					"nv_1": '瀹告彃鍘幑?,"nv_2":'閸忔垶宕叉径杈Е',});var nv_isAddress = nv_item.nv_receiveInfo && nv_item.nv_receiveInfo.nv_city;return(({nv_label:!nv_item.nv_status ? '妫板棗褰囨總鏍ф惂':(nv_isAddress ? '瀹告煡顣崣 ? :nv_statusText[((nt_0 = (nv_item.nv_status), null == nt_0 ? undefined: 'number' === typeof nt_0 ? nt_0: "nv_" + nt_0))]), nv_primary: !nv_item.nv_status,
				}))
			}),
		});
		return nv_module.nv_exports;
	}
	f_['./package2024CNY/pages/ranking/ranking.wxml'] = {};
	f_['./package2024CNY/pages/ranking/ranking.wxml']['ranking'] = f_['./package2024CNY/pages/ranking/ranking.wxs'] || nv_require("p_./package2024CNY/pages/ranking/ranking.wxs");
	f_['./package2024CNY/pages/ranking/ranking.wxml']['ranking']();
	f_['./package2024CNY/pages/ranking/ranking.wxs'] = nv_require("p_./package2024CNY/pages/ranking/ranking.wxs");
	function np_17() {
		var nv_module = {
			nv_exports: {}
		};
		nv_module.nv_exports = ({
			nv_getTopImage: (function(nv_ossUrl, nv_order) {
				return (nv_ossUrl + 'ranking/t_' + nv_order + '.png')
			}),
		});
		return nv_module.nv_exports;
	}
	var x = ['./package2024CNY/components/area/index.wxml', './package2024CNY/components/calendar/calendar.wxml', './package2024CNY/components/dialog/dialog.wxml', './package2024CNY/components/game-dialog/dialog.wxml', './package2024CNY/components/loading/index.wxml', './package2024CNY/components/picker-column/index.wxml', './package2024CNY/components/picker/index.wxml', './toolbar.wxml', './package2024CNY/components/picker/toolbar.wxml', './package2024CNY/components/popup/popup.wxml', './package2024CNY/components/reservation-dialog/reservation-dialog.wxml', './package2024CNY/components/snake-game/snake-game.wxml', './package2024CNY/pages/address/address.wxml', './package2024CNY/pages/game-prize/index.wxml', './package2024CNY/pages/game-record/game-record.wxml', './package2024CNY/pages/game-rule/rule.wxml', './package2024CNY/pages/game/game.wxml', './package2024CNY/pages/historical-ranking/index.wxml', './package2024CNY/pages/index/index.wxml', './package2024CNY/pages/inviteRecord/index.wxml', './package2024CNY/pages/prize/index.wxml', './package2024CNY/pages/ranking/ranking.wxml', './package2024CNY/pages/reservation/reservation.wxml', './package2024CNY/pages/rule/rule.wxml', './package2024CNY/pages/webview/webview.wxml'];
	d_[x[0]] = {}
	var m0 = function(e, s, r, gg) {
		var z = gz$gwx41_1() var oB = _mz(z, 'van-picker', ['activeClass', 0, 'bind:cancel', 1, 'bind:change', 1, 'bind:confirm', 2, 'cancelButtonText', 3, 'class', 4, 'columnClass', 5, 'columns', 6, 'confirmButtonText', 7, 'itemHeight', 8, 'loading', 9, 'showToolbar', 10, 'title', 11, 'toolbarClass', 12, 'valueKey', 13, 'visibleItemCount', 14], [], e, s, gg) _(r, oB) return r
	}
	e_[x[0]] = {
		f: m0,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[1]] = {}
	var m1 = function(e, s, r, gg) {
		var z = gz$gwx41_2() var oD = _v() _(r, oD) var fE = function(hG, cF, oH, gg) {
			var oJ = _v() _(oH, oJ) var lK = function(tM, aL, eN, gg) {
				var oP = _mz(z, 'view', ['bindtap', 7, 'class', 1, 'data-day', 2, 'data-signed', 3], [], tM, aL, gg) var xQ = _v() _(oP, xQ) if (_oz(z, 11, tM, aL, gg)) {
					xQ.wxVkey = 1
				}
				xQ.wxXCkey = 1 _(eN, oP) return eN
			}
			oJ.wxXCkey = 2 _2z(z, 5, lK, hG, cF, gg, oJ, 'dayItem', 'dayIndex', 'dayIndex') return oH
		}
		oD.wxXCkey = 2 _2z(z, 1, fE, e, s, gg, oD, 'item', 'daysIndex', 'daysIndex') return r
	}
	e_[x[1]] = {
		f: m1,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[2]] = {}
	var m2 = function(e, s, r, gg) {
		var z = gz$gwx41_3() var fS = _n('view') _rz(z, fS, 'class', 0, e, s, gg) var cT = _v() _(fS, cT) if (_oz(z, 1, e, s, gg)) {
			cT.wxVkey = 1
		}
		var hU = _v() _(fS, hU) if (_oz(z, 2, e, s, gg)) {
			hU.wxVkey = 1
		}
		cT.wxXCkey = 1 hU.wxXCkey = 1 _(r, fS) return r
	}
	e_[x[2]] = {
		f: m2,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[3]] = {}
	var m3 = function(e, s, r, gg) {
		var z = gz$gwx41_4() return r
	}
	e_[x[3]] = {
		f: m3,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[4]] = {}
	var m4 = function(e, s, r, gg) {
		var z = gz$gwx41_5() var oX = _n('view') _rz(z, oX, 'class', 0, e, s, gg) var lY = _v() _(oX, lY) var aZ = function(e2, t1, b3, gg) {
			var x5 = _v() _(b3, x5) if (_oz(z, 3, e2, t1, gg)) {
				x5.wxVkey = 1
			}
			x5.wxXCkey = 1
			return b3
		}
		lY.wxXCkey = 2 _2z(z, 1, aZ, e, s, gg, lY, 'item', 'index', 'index') var o6 = _n('slot') _(oX, o6) _(r, oX) return r
	}
	e_[x[4]] = {
		f: m4,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[5]] = {}
	var m5 = function(e, s, r, gg) {
		var z = gz$gwx41_6() return r
	}
	e_[x[5]] = {
		f: m5,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[6]] = {}
	var m6 = function(e, s, r, gg) {
		var z = gz$gwx41_7() var h9 = _n('view') _rz(z, h9, 'class', 0, e, s, gg) var o0 = _v() _(h9, o0) if (_oz(z, 1, e, s, gg)) {
			o0.wxVkey = 1
			var lCB = e_[x[6]].j _ic(x[7], e_, x[6], e, s, o0, gg);
			lCB.pop()
		}
		var cAB = _v() _(h9, cAB) if (_oz(z, 2, e, s, gg)) {
			cAB.wxVkey = 1
			var aDB = _n('loading') _rz(z, aDB, 'color', 3, e, s, gg) _(cAB, aDB)
		}
		var tEB = _mz(z, 'view', ['catch:touchmove', 4, 'class', 1, 'style', 2], [], e, s, gg) var eFB = _v() _(tEB, eFB) var bGB = function(xIB, oHB, oJB, gg) {
			var cLB = _mz(z, 'picker-column', ['activeClass', 9, 'bind:change', 1, 'class', 2, 'customClass', 3, 'data-index', 4, 'defaultIndex', 5, 'initialOptions', 6, 'itemHeight', 7, 'valueKey', 8, 'visibleItemCount', 9], [], xIB, oHB, gg) _(oJB, cLB) return oJB
		}
		eFB.wxXCkey = 4 _2z(z, 7, bGB, e, s, gg, eFB, 'item', 'index', 'index') _(h9, tEB) var oBB = _v() _(h9, oBB) if (_oz(z, 19, e, s, gg)) {
			oBB.wxVkey = 1
			var hMB = e_[x[6]].j _ic(x[7], e_, x[6], e, s, oBB, gg);
			hMB.pop()
		}
		o0.wxXCkey = 1 cAB.wxXCkey = 1 cAB.wxXCkey = 3 oBB.wxXCkey = 1 _(r, h9) return r
	}
	e_[x[6]] = {
		f: m6,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[8]] = {}
	var m7 = function(e, s, r, gg) {
		var z = gz$gwx41_8() var cOB = _v() _(r, cOB) if (_oz(z, 0, e, s, gg)) {
			cOB.wxVkey = 1
			var oPB = _v() _(cOB, oPB) if (_oz(z, 1, e, s, gg)) {
				oPB.wxVkey = 1
			}
			oPB.wxXCkey = 1
		}
		cOB.wxXCkey = 1
		return r
	}
	e_[x[8]] = {
		f: m7,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[9]] = {}
	var m8 = function(e, s, r, gg) {
		var z = gz$gwx41_9() var aRB = _v() _(r, aRB) if (_oz(z, 0, e, s, gg)) {
			aRB.wxVkey = 1
			var tSB = _mz(z, 'van-area', ['areaList', 1, 'bind:cancel', 1, 'bind:change', 2, 'bind:confirm', 3], [], e, s, gg) _(aRB, tSB)
		}
		aRB.wxXCkey = 1 aRB.wxXCkey = 3
		return r
	}
	e_[x[9]] = {
		f: m8,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[10]] = {}
	var m9 = function(e, s, r, gg) {
		var z = gz$gwx41_10() var bUB = _n('view') _rz(z, bUB, 'class', 0, e, s, gg) var xWB = _n('view') _rz(z, xWB, 'class', 1, e, s, gg) var oXB = _v() _(xWB, oXB) if (_oz(z, 2, e, s, gg)) {
			oXB.wxVkey = 1
		}
		var fYB = _v() _(xWB, fYB) if (_oz(z, 3, e, s, gg)) {
			fYB.wxVkey = 1
		}
		oXB.wxXCkey = 1 fYB.wxXCkey = 1 _(bUB, xWB) var oVB = _v() _(bUB, oVB) if (_oz(z, 4, e, s, gg)) {
			oVB.wxVkey = 1
		}
		oVB.wxXCkey = 1 _(r, bUB) return r
	}
	e_[x[10]] = {
		f: m9,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[11]] = {}
	var m10 = function(e, s, r, gg) {
		var z = gz$gwx41_11() var h1B = _mz(z, 'view', ['class', 0, 'style', 1, 'xmlns:wx', 1], [], e, s, gg) var o2B = _v() _(h1B, o2B) if (_oz(z, 3, e, s, gg)) {
			o2B.wxVkey = 1
		}
		var c3B = _v() _(h1B, c3B) var o4B = function(a6B, l5B, t7B, gg) {
			var b9B = _v() _(t7B, b9B) var o0B = function(oBC, xAC, fCC, gg) {
				var hEC = _mz(z, 'view', ['class', 12, 'data-col', 1, 'data-row', 2, 'style', 3], [], oBC, xAC, gg) var oFC = _v() _(hEC, oFC) if (_oz(z, 16, oBC, xAC, gg)) {
					oFC.wxVkey = 1
				}
				var cGC = _v() _(hEC, cGC) if (_oz(z, 17, oBC, xAC, gg)) {
					cGC.wxVkey = 1
				}
				var oHC = _v() _(hEC, oHC) if (_oz(z, 18, oBC, xAC, gg)) {
					oHC.wxVkey = 1
				}
				var lIC = _v() _(hEC, lIC) if (_oz(z, 19, oBC, xAC, gg)) {
					lIC.wxVkey = 1
				}
				var aJC = _v() _(hEC, aJC) if (_oz(z, 20, oBC, xAC, gg)) {
					aJC.wxVkey = 1
				}
				var tKC = _v() _(hEC, tKC) if (_oz(z, 21, oBC, xAC, gg)) {
					tKC.wxVkey = 1
				}
				var eLC = _v() _(hEC, eLC) if (_oz(z, 22, oBC, xAC, gg)) {
					eLC.wxVkey = 1
				}
				var bMC = _v() _(hEC, bMC) if (_oz(z, 23, oBC, xAC, gg)) {
					bMC.wxVkey = 1
				}
				var oNC = _v() _(hEC, oNC) if (_oz(z, 24, oBC, xAC, gg)) {
					oNC.wxVkey = 1
				}
				var xOC = _v() _(hEC, xOC) if (_oz(z, 25, oBC, xAC, gg)) {
					xOC.wxVkey = 1
				}
				var oPC = _v() _(hEC, oPC) if (_oz(z, 26, oBC, xAC, gg)) {
					oPC.wxVkey = 1
				}
				var fQC = _v() _(hEC, fQC) if (_oz(z, 27, oBC, xAC, gg)) {
					fQC.wxVkey = 1
				}
				oFC.wxXCkey = 1 cGC.wxXCkey = 1 oHC.wxXCkey = 1 lIC.wxXCkey = 1 aJC.wxXCkey = 1 tKC.wxXCkey = 1 eLC.wxXCkey = 1 bMC.wxXCkey = 1 oNC.wxXCkey = 1 xOC.wxXCkey = 1 oPC.wxXCkey = 1 fQC.wxXCkey = 1 _(fCC, hEC) return fCC
			}
			b9B.wxXCkey = 2 _2z(z, 10, o0B, a6B, l5B, gg, b9B, 'blockItem', 'colIndex', 'colIndex') return t7B
		}
		c3B.wxXCkey = 2 _2z(z, 6, o4B, e, s, gg, c3B, 'cols', 'rowIndex', 'rowIndex') o2B.wxXCkey = 1 _(r, h1B) return r
	}
	e_[x[11]] = {
		f: m10,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[12]] = {}
	var m11 = function(e, s, r, gg) {
		var z = gz$gwx41_12() var hSC = _mz(z, 'popup', ['bind:close', 0, 'bind:confirm', 1, 'show', 1], [], e, s, gg) _(r, hSC) return r
	}
	e_[x[12]] = {
		f: m11,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[13]] = {}
	var m12 = function(e, s, r, gg) {
		var z = gz$gwx41_13() return r
	}
	e_[x[13]] = {
		f: m12,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[14]] = {}
	var m13 = function(e, s, r, gg) {
		var z = gz$gwx41_14() return r
	}
	e_[x[14]] = {
		f: m13,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[15]] = {}
	var m14 = function(e, s, r, gg) {
		var z = gz$gwx41_15() return r
	}
	e_[x[15]] = {
		f: m14,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[16]] = {}
	var m15 = function(e, s, r, gg) {
		var z = gz$gwx41_16() var tYC = _n('snake-game') _rz(z, tYC, 'id', 0, e, s, gg) _(r, tYC) var aXC = _v() _(r, aXC) if (_oz(z, 1, e, s, gg)) {
			aXC.wxVkey = 1
			var eZC = _mz(z, 'result-dialog', ['bindclose', 2, 'resultData', 1], [], e, s, gg) _(aXC, eZC)
		}
		var b1C = _mz(z, 'comp-auth', ['fullScreen', -1, 'id', 4], [], e, s, gg) _(r, b1C) aXC.wxXCkey = 1 aXC.wxXCkey = 3
		return r
	}
	e_[x[16]] = {
		f: m15,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[17]] = {}
	var m16 = function(e, s, r, gg) {
		var z = gz$gwx41_17() var x3C = _v() _(r, x3C) var o4C = function(c6C, f5C, h7C, gg) {
			var c9C = _v() _(h7C, c9C) if (_oz(z, 4, c6C, f5C, gg)) {
				c9C.wxVkey = 1
				var o0C = _v() _(c9C, o0C) var lAD = function(tCD, aBD, eDD, gg) {
					var oFD = _v() _(eDD, oFD) var xGD = function(fID, oHD, cJD, gg) {
						var oLD = _mz(z, 'view', ['class', 13, 'style', 1], [], fID, oHD, gg) var cMD = _v() _(oLD, cMD) if (_oz(z, 15, fID, oHD, gg)) {
							cMD.wxVkey = 1
						}
						var oND = _v() _(oLD, oND) if (_oz(z, 16, fID, oHD, gg)) {
							oND.wxVkey = 1
						}
						var lOD = _v() _(oLD, lOD) if (_oz(z, 17, fID, oHD, gg)) {
							lOD.wxVkey = 1
							var aPD = _v() _(lOD, aPD) if (_oz(z, 18, fID, oHD, gg)) {
								aPD.wxVkey = 1
							}
							aPD.wxXCkey = 1
						}
						cMD.wxXCkey = 1 oND.wxXCkey = 1 lOD.wxXCkey = 1 _(cJD, oLD) return cJD
					}
					oFD.wxXCkey = 2 _2z(z, 11, xGD, tCD, aBD, gg, oFD, 'item', 'listItemIndex', 'listItemIndex') return eDD
				}
				o0C.wxXCkey = 2 _2z(z, 7, lAD, c6C, f5C, gg, o0C, 'lineItem', 'listLineIndex', 'listLineIndex')
			}
			c9C.wxXCkey = 1
			return h7C
		}
		x3C.wxXCkey = 2 _2z(z, 2, o4C, e, s, gg, x3C, 'url', 'key', 'key') return r
	}
	e_[x[17]] = {
		f: m16,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[18]] = {}
	var m17 = function(e, s, r, gg) {
		var z = gz$gwx41_18() var eRD = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg) var bSD = _v() _(eRD, bSD) if (_oz(z, 2, e, s, gg)) {
			bSD.wxVkey = 1
			var fWD = _mz(z, 'calendar', ['bindremedy', 3, 'class', 1], [], e, s, gg) _(bSD, fWD)
		}
		var cXD = _v() _(eRD, cXD) var hYD = function(c1D, oZD, o2D, gg) {
			var a4D = _mz(z, 'view', ['bindtap', 8, 'class', 1, 'data-info', 2], [], c1D, oZD, gg) var t5D = _v() _(a4D, t5D) if (_oz(z, 11, c1D, oZD, gg)) {
				t5D.wxVkey = 1
			}
			t5D.wxXCkey = 1 _(o2D, a4D) return o2D
		}
		cXD.wxXCkey = 2 _2z(z, 6, hYD, e, s, gg, cXD, 'item', 'pIndex', 'item') var oTD = _v() _(eRD, oTD) if (_oz(z, 12, e, s, gg)) {
			oTD.wxVkey = 1
			var e6D = _mz(z, 'result-dialog', ['bindclose', 13, 'resultData', 1], [], e, s, gg) _(oTD, e6D)
		}
		var xUD = _v() _(eRD, xUD) if (_oz(z, 15, e, s, gg)) {
			xUD.wxVkey = 1
		}
		var oVD = _v() _(eRD, oVD) if (_oz(z, 16, e, s, gg)) {
			oVD.wxVkey = 1
		}
		bSD.wxXCkey = 1 bSD.wxXCkey = 3 oTD.wxXCkey = 1 oTD.wxXCkey = 3 xUD.wxXCkey = 1 oVD.wxXCkey = 1 _(r, eRD) var b7D = _mz(z, 'comp-auth', ['fullScreen', -1, 'id', 17], [], e, s, gg) _(r, b7D) return r
	}
	e_[x[18]] = {
		f: m17,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[19]] = {}
	var m18 = function(e, s, r, gg) {
		var z = gz$gwx41_19() return r
	}
	e_[x[19]] = {
		f: m18,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[20]] = {}
	var m19 = function(e, s, r, gg) {
		var z = gz$gwx41_20() return r
	}
	e_[x[20]] = {
		f: m19,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[21]] = {}
	var m20 = function(e, s, r, gg) {
		var z = gz$gwx41_21() var fAE = _mz(z, 'view', ['class', 0, 'style', 1], [], e, s, gg) var cBE = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg) var hCE = _n('view') _rz(z, hCE, 'class', 4, e, s, gg) var oDE = _v() _(hCE, oDE) if (_oz(z, 5, e, s, gg)) {
			oDE.wxVkey = 1
		}
		var cEE = _v() _(hCE, cEE) if (_oz(z, 6, e, s, gg)) {
			cEE.wxVkey = 1
		}
		var oFE = _v() _(hCE, oFE) if (_oz(z, 7, e, s, gg)) {
			oFE.wxVkey = 1
		}
		oDE.wxXCkey = 1 cEE.wxXCkey = 1 oFE.wxXCkey = 1 _(cBE, hCE) var lGE = _n('view') _rz(z, lGE, 'class', 8, e, s, gg) var aHE = _v() _(lGE, aHE) if (_oz(z, 9, e, s, gg)) {
			aHE.wxVkey = 1
		}
		var tIE = _v() _(lGE, tIE) if (_oz(z, 10, e, s, gg)) {
			tIE.wxVkey = 1
		}
		aHE.wxXCkey = 1 tIE.wxXCkey = 1 _(cBE, lGE) _(fAE, cBE) var eJE = _v() _(fAE, eJE) var bKE = function(xME, oLE, oNE, gg) {
			var cPE = _v() _(oNE, cPE) var hQE = function(cSE, oRE, oTE, gg) {
				var aVE = _n('view') _rz(z, aVE, 'style', 19, cSE, oRE, gg) var tWE = _v() _(aVE, tWE) if (_oz(z, 20, cSE, oRE, gg)) {
					tWE.wxVkey = 1
				}
				var eXE = _v() _(aVE, eXE) if (_oz(z, 21, cSE, oRE, gg)) {
					eXE.wxVkey = 1
				}
				tWE.wxXCkey = 1 eXE.wxXCkey = 1 _(oTE, aVE) return oTE
			}
			cPE.wxXCkey = 2 _2z(z, 17, hQE, xME, oLE, gg, cPE, 'item', 'listDataIndex', 'listDataIndex') return oNE
		}
		eJE.wxXCkey = 2 _2z(z, 13, bKE, e, s, gg, eJE, 'listItem', 'itemIndex', 'itemIndex') _(r, fAE) return r
	}
	e_[x[21]] = {
		f: m20,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[22]] = {}
	var m21 = function(e, s, r, gg) {
		var z = gz$gwx41_22() var oZE = _v() _(r, oZE) if (_oz(z, 0, e, s, gg)) {
			oZE.wxVkey = 1
			var x1E = _mz(z, 'reservation-dialog', ['bindclose', 1, 'list', 1], [], e, s, gg) _(oZE, x1E)
		}
		var o2E = _mz(z, 'comp-auth', ['fullScreen', -1, 'id', 3], [], e, s, gg) _(r, o2E) oZE.wxXCkey = 1 oZE.wxXCkey = 3
		return r
	}
	e_[x[22]] = {
		f: m21,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[23]] = {}
	var m22 = function(e, s, r, gg) {
		var z = gz$gwx41_23() return r
	}
	e_[x[23]] = {
		f: m22,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	d_[x[24]] = {}
	var m23 = function(e, s, r, gg) {
		var z = gz$gwx41_24() return r
	}
	e_[x[24]] = {
		f: m23,
		j: [],
		i: [],
		ti: [],
		ic: []
	}
	if (path && e_[path]) {
		return function(env, dd, global) {
			$gwxc = 0;
			var root = {
				"tag": "wx-page"
			};
			root.children = []
			var main = e_[path].f
			if (typeof global === "undefined") global = {};
			global.f = $gdc(f_[path], "", 1);
			try {
				main(env, {},
				root, global);
				_tsd(root)
			} catch(err) {
				console.log(err)
			}
			return root;
		}
	}
}
__wxAppCode__['package2024CNY/components/area/index.json'] = {
	"component": true,
	"usingComponents": {
		"van-picker": "../picker/index",
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/area/index.wxml'] = [$gwx41, './package2024CNY/components/area/index.wxml'];
else __wxAppCode__['package2024CNY/components/area/index.wxml'] = $gwx41('./package2024CNY/components/area/index.wxml');__wxAppCode__['package2024CNY/components/calendar/calendar.json'] = {
	"component": true,
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/calendar/calendar.wxml'] = [$gwx41, './package2024CNY/components/calendar/calendar.wxml'];
else __wxAppCode__['package2024CNY/components/calendar/calendar.wxml'] = $gwx41('./package2024CNY/components/calendar/calendar.wxml');__wxAppCode__['package2024CNY/components/dialog/dialog.json'] = {
	"component": true,
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/dialog/dialog.wxml'] = [$gwx41, './package2024CNY/components/dialog/dialog.wxml'];
else __wxAppCode__['package2024CNY/components/dialog/dialog.wxml'] = $gwx41('./package2024CNY/components/dialog/dialog.wxml');__wxAppCode__['package2024CNY/components/game-dialog/dialog.json'] = {
	"component": true,
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/game-dialog/dialog.wxml'] = [$gwx41, './package2024CNY/components/game-dialog/dialog.wxml'];
else __wxAppCode__['package2024CNY/components/game-dialog/dialog.wxml'] = $gwx41('./package2024CNY/components/game-dialog/dialog.wxml');__wxAppCode__['package2024CNY/components/loading/index.json'] = {
	"component": true,
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/loading/index.wxml'] = [$gwx41, './package2024CNY/components/loading/index.wxml'];
else __wxAppCode__['package2024CNY/components/loading/index.wxml'] = $gwx41('./package2024CNY/components/loading/index.wxml');__wxAppCode__['package2024CNY/components/picker-column/index.json'] = {
	"component": true,
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/picker-column/index.wxml'] = [$gwx41, './package2024CNY/components/picker-column/index.wxml'];
else __wxAppCode__['package2024CNY/components/picker-column/index.wxml'] = $gwx41('./package2024CNY/components/picker-column/index.wxml');__wxAppCode__['package2024CNY/components/picker/index.json'] = {
	"component": true,
	"usingComponents": {
		"picker-column": "../picker-column/index",
		"loading": "../loading/index",
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/picker/index.wxml'] = [$gwx41, './package2024CNY/components/picker/index.wxml'];
else __wxAppCode__['package2024CNY/components/picker/index.wxml'] = $gwx41('./package2024CNY/components/picker/index.wxml');__wxAppCode__['package2024CNY/components/popup/popup.json'] = {
	"component": true,
	"usingComponents": {
		"van-area": "../area/index",
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/popup/popup.wxml'] = [$gwx41, './package2024CNY/components/popup/popup.wxml'];
else __wxAppCode__['package2024CNY/components/popup/popup.wxml'] = $gwx41('./package2024CNY/components/popup/popup.wxml');__wxAppCode__['package2024CNY/components/reservation-dialog/reservation-dialog.json'] = {
	"component": true,
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/reservation-dialog/reservation-dialog.wxml'] = [$gwx41, './package2024CNY/components/reservation-dialog/reservation-dialog.wxml'];
else __wxAppCode__['package2024CNY/components/reservation-dialog/reservation-dialog.wxml'] = $gwx41('./package2024CNY/components/reservation-dialog/reservation-dialog.wxml');__wxAppCode__['package2024CNY/components/snake-game/snake-game.json'] = {
	"component": true,
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/components/snake-game/snake-game.wxml'] = [$gwx41, './package2024CNY/components/snake-game/snake-game.wxml'];
else __wxAppCode__['package2024CNY/components/snake-game/snake-game.wxml'] = $gwx41('./package2024CNY/components/snake-game/snake-game.wxml');__wxAppCode__['package2024CNY/pages/address/address.json'] = {
	"usingComponents": {
		"popup": "../../components/popup/popup",
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/address/address.wxml'] = [$gwx41, './package2024CNY/pages/address/address.wxml'];
else __wxAppCode__['package2024CNY/pages/address/address.wxml'] = $gwx41('./package2024CNY/pages/address/address.wxml');__wxAppCode__['package2024CNY/pages/game-prize/index.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/game-prize/index.wxml'] = [$gwx41, './package2024CNY/pages/game-prize/index.wxml'];
else __wxAppCode__['package2024CNY/pages/game-prize/index.wxml'] = $gwx41('./package2024CNY/pages/game-prize/index.wxml');__wxAppCode__['package2024CNY/pages/game-record/game-record.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/game-record/game-record.wxml'] = [$gwx41, './package2024CNY/pages/game-record/game-record.wxml'];
else __wxAppCode__['package2024CNY/pages/game-record/game-record.wxml'] = $gwx41('./package2024CNY/pages/game-record/game-record.wxml');__wxAppCode__['package2024CNY/pages/game-rule/rule.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/game-rule/rule.wxml'] = [$gwx41, './package2024CNY/pages/game-rule/rule.wxml'];
else __wxAppCode__['package2024CNY/pages/game-rule/rule.wxml'] = $gwx41('./package2024CNY/pages/game-rule/rule.wxml');__wxAppCode__['package2024CNY/pages/game/game.json'] = {
	"usingComponents": {
		"snake-game": "../../components/snake-game/snake-game",
		"result-dialog": "../../components/game-dialog/dialog",
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/game/game.wxml'] = [$gwx41, './package2024CNY/pages/game/game.wxml'];
else __wxAppCode__['package2024CNY/pages/game/game.wxml'] = $gwx41('./package2024CNY/pages/game/game.wxml');__wxAppCode__['package2024CNY/pages/historical-ranking/index.json'] = {
	"navigationBarTextStyle": "black",
	"navigationStyle": "default",
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/historical-ranking/index.wxml'] = [$gwx41, './package2024CNY/pages/historical-ranking/index.wxml'];
else __wxAppCode__['package2024CNY/pages/historical-ranking/index.wxml'] = $gwx41('./package2024CNY/pages/historical-ranking/index.wxml');__wxAppCode__['package2024CNY/pages/index/index.json'] = {
	"navigationBarTextStyle": "black",
	"navigationStyle": "default",
	"usingComponents": {
		"calendar": "../../components/calendar/calendar",
		"result-dialog": "../../components/dialog/dialog",
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/index/index.wxml'] = [$gwx41, './package2024CNY/pages/index/index.wxml'];
else __wxAppCode__['package2024CNY/pages/index/index.wxml'] = $gwx41('./package2024CNY/pages/index/index.wxml');__wxAppCode__['package2024CNY/pages/inviteRecord/index.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/inviteRecord/index.wxml'] = [$gwx41, './package2024CNY/pages/inviteRecord/index.wxml'];
else __wxAppCode__['package2024CNY/pages/inviteRecord/index.wxml'] = $gwx41('./package2024CNY/pages/inviteRecord/index.wxml');__wxAppCode__['package2024CNY/pages/prize/index.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/prize/index.wxml'] = [$gwx41, './package2024CNY/pages/prize/index.wxml'];
else __wxAppCode__['package2024CNY/pages/prize/index.wxml'] = $gwx41('./package2024CNY/pages/prize/index.wxml');__wxAppCode__['package2024CNY/pages/ranking/ranking.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/ranking/ranking.wxml'] = [$gwx41, './package2024CNY/pages/ranking/ranking.wxml'];
else __wxAppCode__['package2024CNY/pages/ranking/ranking.wxml'] = $gwx41('./package2024CNY/pages/ranking/ranking.wxml');__wxAppCode__['package2024CNY/pages/reservation/reservation.json'] = {
	"usingComponents": {
		"reservation-dialog": "../../components/reservation-dialog/reservation-dialog",
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/reservation/reservation.wxml'] = [$gwx41, './package2024CNY/pages/reservation/reservation.wxml'];
else __wxAppCode__['package2024CNY/pages/reservation/reservation.wxml'] = $gwx41('./package2024CNY/pages/reservation/reservation.wxml');__wxAppCode__['package2024CNY/pages/rule/rule.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/rule/rule.wxml'] = [$gwx41, './package2024CNY/pages/rule/rule.wxml'];
else __wxAppCode__['package2024CNY/pages/rule/rule.wxml'] = $gwx41('./package2024CNY/pages/rule/rule.wxml');__wxAppCode__['package2024CNY/pages/webview/webview.json'] = {
	"usingComponents": {
		"comp-privacy": "/components/privacy/index",
		"comp-auth": "/components/auth/index",
		"comp-button": "/components/button/index",
		"comp-back-app": "/components/back-app/index",
		"wxml-to-canvas": "../../../miniprogram_npm/wxml-to-canvas/index"
	}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['package2024CNY/pages/webview/webview.wxml'] = [$gwx41, './package2024CNY/pages/webview/webview.wxml'];
else __wxAppCode__['package2024CNY/pages/webview/webview.wxml'] = $gwx41('./package2024CNY/pages/webview/webview.wxml');define("package2024CNY/components/common/component.js",
function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: !0
	}),
	exports.VantComponent = function(s) {
		var a = {}; (function(e, s, a) {
			Object.keys(a).forEach((function(t) {
				e[t] && (s[a[t]] = e[t])
			}))
		})(s, a, {
			data: "data",
			props: "properties",
			mixins: "behaviors",
			methods: "methods",
			beforeCreate: "created",
			created: "attached",
			mounted: "ready",
			destroyed: "detached",
			classes: "externalClasses"
		}),
		a.externalClasses = a.externalClasses || [],
		a.externalClasses.push("custom-class"),
		a.behaviors = a.behaviors || [],
		a.behaviors.push(e.basic);
		var t = s.relation;
		t && (a.relations = t.relations, a.behaviors.push(t.mixin)),
		s.field && a.behaviors.push("wx://form-field"),
		a.options = {
			multipleSlots: !0,
			addGlobalClass: !0
		},
		Component(a)
	};
	var e = require("../mixins/basic");
});define("package2024CNY/components/common/utils.js",
function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: !0
	}),
	exports.addUnit = function(e) {
		if ((0, t.isDef)(e)) return e = String(e),
		(0, t.isNumber)(e) ? "".concat(e, "px") : e
	},
	exports.getAllRect = function(e, t) {
		return new Promise((function(n) {
			wx.createSelectorQuery(). in (e).selectAll(t).boundingClientRect().exec((function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return n(e[0])
			}))
		}))
	},
	exports.getCurrentPage = function() {
		var e = getCurrentPages();
		return e[e.length - 1]
	},
	exports.getRect = function(e, t) {
		return new Promise((function(n) {
			wx.createSelectorQuery(). in (e).select(t).boundingClientRect().exec((function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return n(e[0])
			}))
		}))
	},
	exports.getSystemInfoSync = r,
	exports.groupSetData = function(e, t) { (0, n.canIUseGroupSetData)() ? e.groupSetData(t) : t()
	},
	Object.defineProperty(exports, "isDef", {
		enumerable: !0,
		get: function() {
			return t.isDef
		}
	}),
	exports.nextTick = function(e) { (0, n.canIUseNextTick)() ? wx.nextTick(e) : setTimeout((function() {
			e()
		}), 1e3 / 30)
	},
	exports.pickExclude = function(e, n) {
		return (0, t.isPlainObject)(e) ? Object.keys(e).reduce((function(t, r) {
			return n.includes(r) || (t[r] = e[r]),
			t
		}), {}) : {}
	},
	exports.range = function(e, t, n) {
		return Math.min(Math.max(e, t), n)
	},
	exports.requestAnimationFrame = function(e) {
		return "devtools" === r().platform ? setTimeout((function() {
			e()
		}), 1e3 / 30) : wx.createSelectorQuery().selectViewport().boundingClientRect().exec((function() {
			e()
		}))
	},
	exports.toPromise = function(e) {
		return (0, t.isPromise)(e) ? e: Promise.resolve(e)
	},
	require("../../../@babel/runtime/helpers/Arrayincludes");
	var e, t = require("./validator"),
	n = require("./version");
	function r() {
		return null == e && (e = wx.getSystemInfoSync()),
		e
	}
});define("package2024CNY/components/common/validator.js",
function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: !0
	}),
	exports.isBoolean = function(e) {
		return "boolean" == typeof e
	},
	exports.isDef = function(e) {
		return null != e
	},
	exports.isFunction = t,
	exports.isImageUrl = function(e) {
		return n.test(e)
	},
	exports.isNumber = function(e) {
		return /^\d+(\.\d+)?$/.test(e)
	},
	exports.isObj = function(t) {
		var r = e(t);
		return null !== t && ("object" === r || "function" === r)
	},
	exports.isPlainObject = r,
	exports.isPromise = function(e) {
		return r(e) && t(e.then) && t(e.
		catch)
	},
	exports.isVideoUrl = function(e) {
		return o.test(e)
	};
	var e = require("../../../@babel/runtime/helpers/typeof");
	function t(e) {
		return "function" == typeof e
	}
	function r(t) {
		return null !== t && "object" == e(t) && !Array.isArray(t)
	}
	var n = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,
	o = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
});define("package2024CNY/components/common/version.js",
function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: !0
	}),
	exports.canIUseAnimate = function() {
		return t("2.9.0")
	},
	exports.canIUseCanvas2d = function() {
		return t("2.9.0")
	},
	exports.canIUseFormFieldButton = function() {
		return t("2.10.3")
	},
	exports.canIUseGetUserProfile = function() {
		return !! wx.getUserProfile
	},
	exports.canIUseGroupSetData = function() {
		return t("2.4.0")
	},
	exports.canIUseModel = function() {
		return t("2.9.3")
	},
	exports.canIUseNextTick = function() {
		return wx.canIUse("nextTick")
	};
	var e = require("./utils");
	function t(t) {
		return function(e, t) {
			e = e.split("."),
			t = t.split(".");
			for (var n = Math.max(e.length, t.length); e.length < n;) e.push("0");
			for (; t.length < n;) t.push("0");
			for (var r = 0; r < n; r++) {
				var s = parseInt(e[r], 10),
				o = parseInt(t[r], 10);
				if (s > o) return 1;
				if (s < o) return - 1
			}
			return 0
		} ((0, e.getSystemInfoSync)().SDKVersion, t) >= 0
	}
});define("package2024CNY/components/mixins/basic.js",
function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: !0
	}),
	exports.basic = void 0;
	var e = Behavior({
		methods: {
			$emit: function(e, t, i) {
				this.triggerEvent(e, t, i)
			},
			set: function(e) {
				return this.setData(e),
				new Promise((function(e) {
					return wx.nextTick(e)
				}))
			}
		}
	});
	exports.basic = e;
});define("package2024CNY/components/picker/shared.js",
function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	Object.defineProperty(exports, "__esModule", {
		value: !0
	}),
	exports.pickerProps = void 0;
	var e = {
		title: String,
		loading: Boolean,
		showToolbar: Boolean,
		cancelButtonText: {
			type: String,
			value: "閸欐牗绉?
		},
		confirmButtonText: {
			type: String,
			value: "绾喛顓 ?
		},
		visibleItemCount: {
			type: Number,
			value: 6
		},
		itemHeight: {
			type: Number,
			value: 44
		}
	};
	exports.pickerProps = e;
});define("package2024CNY/components/popup/addressLib.js",
function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	module.exports = {
		addressList: [{
			province: "閸栨ぞ鍚?,
			areaId: "
			110000 ",
			cityList: [{
				city: "閸栨ぞ鍚敮 ? ,
			areaId: "
				110100 ",
			areaList: [{
				area: "娑撴粌鐓勯崠 ? ,
				areaId: "
				110101 "
			},
			{
				area: "鐟楀灝鐓勯崠 ? ,
				areaId: "
				110102 "
			},
			{
				area: "閺堟繈妲奸崠 ? ,
				areaId: "
				110105 "
			},
			{
				area: "娑撴澘褰撮崠 ? ,
				areaId: "
				110106 "
			},
			{
				area: "閻櫕娅欑仦鍗炲隘",
				areaId: "
				110107 "
			},
			{
				area: "濞撮攱绌╅崠 ? ,
				areaId: "
				110108 "
			},
			{
				area: "闂傘劌銇斿▽鐔峰隘",
				areaId: "
				110109 "
			},
			{
				area: "閹村灝鍖楅崠 ? ,
				areaId: "
				110111 "
			},
			{
				area: "闁艾绐為崠 ? ,
				areaId: "
				110112 "
			},
			{
				area: "妞よ桨绠熼崠 ? ,
				areaId: "
				110113 "
			},
			{
				area: "閺勫苯閽╅崠 ? ,
				areaId: "
				110114 "
			},
			{
				area: "婢堆冨彺閸 ? ,
				areaId: "
				110115 "
			},
			{
				area: "閹偓閺屾柨灏?,areaId:"
				110116 "},{area:"楠炲疇鑳洪崠 ? ,
				areaId: "110117"
			},
			{
				area: "鐎靛棔绨崠?,areaId:"
				110118 "},{area:"瀵よ泛绨￠崠 ? ,
				areaId: "110119"
			},
			{
				area: "娑擃厼鍙ч弶鎴狀潠閹垛偓閸ヮ厼灏?,
				areaId: "
				110120 "
			}]
		}]
	},
	{
		province: "婢垛晜瑙 ? ,
				areaId: "120000",
				cityList: [{
					city: "婢垛晜瑙︾敮?,areaId:"
					120100 ",areaList:[{area:"閸滃苯閽╅崠 ? ,
					areaId: "120101"
				},
				{
					area: "濞屽厖绗㈤崠?,areaId:"
					120102 "},{area:"濞屽疇銈块崠 ? ,
					areaId: "120103"
				},
				{
					area: "閸楁绱戦崠?,areaId:"
					120104 "},{area:"濞屽啿瀵抽崠 ? ,
					areaId: "120105"
				},
				{
					area: "缁俱垺藟閸?,areaId:"
					120106 "},{area:"娑撴粈闄勯崠 ? ,
					areaId: "120110"
				},
				{
					area: "鐟楀潡娼氶崠?,areaId:"
					120111 "},{area:"濞层儱宕￠崠 ? ,
					areaId: "120112"
				},
				{
					area: "閸栨鏅崠?,areaId:"
					120113 "},{area:"濮濓附绔婚崠 ? ,
					areaId: "120114"
				},
				{
					area: "鐎规繂婢旈崠?,areaId:"
					120115 "},{area:"濠娿劍鎹ｉ弬鏉垮隘",areaId:"
					120116 "},{area:"鐎逛焦娓ら崠 ? ,
					areaId: "120117"
				},
				{
					area: "闂堟瑦鎹ｉ崠?,areaId:"
					120118 "},{area:"閽冪喎绐為崠 ? ,
					areaId: "120225"
				},
				{
					area: "濠娿劍鎹ｆ妯绘煀閸?,areaId:"
					120226 "}]}]},{province:"濞屽啿瀵抽惇 ? ,
					areaId: "130000",
					cityList: [{
						city: "閻啿顔嶆惔鍕",
						areaId: "130100",
						areaList: [{
							area: "闂€鍨暔閸?,areaId:"
							130102 "},{area:"濡椼儴銈块崠 ? ,
							areaId: "130104"
						},
						{
							area: "閺傛澘宕曢崠?,areaId:"
							130105 "},{area:"娴滄洟妾抽惌鍨隘",areaId:"
							130107 "},{area:"鐟佹洖宕曢崠 ? ,
							areaId: "130108"
						},
						{
							area: "閽樹礁鐓勯崠?,areaId:"
							130109 "},{area:"妤ｆ寧纭ラ崠 ? ,
							areaId: "130110"
						},
						{
							area: "閺嶆儳鐓勯崠?,areaId:"
							130111 "},{area:"娴滄洟妾抽崢 ? ,
							areaId: "130121"
						},
						{
							area: "濮濓絽鐣鹃崢?,areaId:"
							130123 "},{area:"鐞涘苯鏀奸崢 ? ,
							areaId: "130125"
						},
						{
							area: "閻忛潧顕撮崢?,areaId:"
							130126 "},{area:"妤傛﹢鍊崢 ? ,
							areaId: "130127"
						},
						{
							area: "濞ｈ鲸杈伴崢?,areaId:"
							130128 "},{area:"鐠х偟娈楅崢 ? ,
							areaId: "130129"
						},
						{
							area: "閺冪姵鐎崢?,areaId:"
							130130 "},{area:"楠炲啿鍖楅崢 ? ,
							areaId: "130131"
						},
						{
							area: "閸忓啯鐨崢?,areaId:"
							130132 "},{area:"鐠ч潧骞 ? ,
							areaId: "
					130133 "
						},
						{
							area: "鏉堟盯娉︾敮 ? ,
					areaId: "
							130181 "
				},
				{
					area: "閺呭绐炵敮 ? ,
							areaId: "
					130183 "
						},
						{
							area: "閺傞绠扮敮 ? ,
					areaId: "
							130184 "
				},
				{
					area: "妤傛ɑ鏌婇崠 ? ,
							areaId: "
					130185 "
						},
						{
							area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,areaId:"
							130186 "}]},{city:"閸炴劕鍖楃敮 ? ,
							areaId: "130200",
							areaList: [{
								area: "鐠侯垰宕￠崠?,areaId:"
								130202 "},{area:"鐠侯垰瀵抽崠 ? ,
								areaId: "130203"
							},
							{
								area: "閸欍倕鍠嶉崠?,areaId:"
								130204 "},{area:"瀵偓楠炲啿灏 ? ,
								areaId: "
						130205 "
							},
							{
								area: "娑撴澘宕￠崠 ? ,
						areaId: "
								130207 "
					},
					{
						area: "娑撶増榧庨崠 ? ,
								areaId: "
						130208 "
							},
							{
								area: "閺囩懓顩ㄩ悽绋垮隘",
								areaId: "
						130209 "
							},
							{
								area: "濠婏箑骞?,areaId:"
								130223 "},{area:"濠婏箑宕￠崢 ? ,
								areaId: "130224"
							},
							{
								area: "娑旀劒娑甸崢?,areaId:"
								130225 "},{area:"鏉╀浇銈块崢 ? ,
								areaId: "130227"
							},
							{
								area: "閻滃鏁崢?,areaId:"
								130229 "},{area:"闁潧瀵茬敮 ? ,
								areaId: "130281"
							},
							{
								area: "鏉╀礁鐣ㄧ敮?,areaId:"
								130283 "}]},{city:"缁夛妇娈楀畝娑樼",areaId:"
								130300 ",areaList:[{area:"濞撮攱鑵愰崠 ? ,
								areaId: "130302"
							},
							{
								area: "鐏炶鲸鎹ｉ崗鍐插隘",
								areaId: "130303"
							},
							{
								area: "閸栨鍩撳▽鍐插隘",
								areaId: "130304"
							},
							{
								area: "閹舵艾鐣為崠?,areaId:"
								130306 "},{area:"闂堟帡绶冲鈩冩閼奉亝涓嶉崢 ? ,
								areaId: "130321"
							},
							{
								area: "閺勫矂绮犻崢?,areaId:"
								130322 "},{area:"閸椼垽绶抽崢 ? ,
								areaId: "130324"
							},
							{
								area: "閸栨鍩撳▽铏煀閸?,areaId:"
								130325 "}]},{city:"闁垶鍏忕敮 ? ,
								areaId: "130400",
								areaList: [{
									area: "闁垰鍖楅崠?,areaId:"
									130402 "},{area:"娑撴稑褰撮崠 ? ,
									areaId: "130403"
								},
								{
									area: "婢跺秴鍙撮崠?,areaId:"
									130404 "},{area:"瀹勬澘鍢查惌鍨隘",areaId:"
									130406 "},{area:"娑撳瓨姹查崢 ? ,
									areaId: "130423"
								},
								{
									area: "閹存劕鐣ㄩ崢?,areaId:"
									130424 "},{area:"婢堆冩倳閸 ? ?,
									areaId: "130425"
								},
								{
									area: "濞戝骞?,
							areaId: "
									130426 "
						},
						{
							area: "绾句礁骞 ? ,
									areaId: "130427"
								},
								{
									area: "閼层儰鍩傞崠?,areaId:"
									130428 "},{area:"濮樼鍕鹃崠 ? ,
									areaId: "130429"
								},
								{
									area: "闁崬骞?,
							areaId: "
									130430 "
						},
						{
							area: "妤︹剝杈伴崢 ? ,
									areaId: "
							130431 "
								},
								{
									area: "楠炲灝閽╅崢 ? ,
							areaId: "
									130432 "
						},
						{
							area: "妫ｅ棝娅犻崢 ? ,
									areaId: "
							130433 "
								},
								{
									area: "姒勫繐骞?,areaId:"
									130434 "},{area:"閺囨彃鎳嗛崢 ? ,
									areaId: "130435"
								},
								{
									area: "濮濓箑鐣ㄧ敮?,areaId:"
									130481 "},{area:"妤傛ɑ鏌婇幎鈧張顖欓獓娑撴艾绱戦崣鎴濆隘",areaId:"
									130482 "}]},{city:"闁垹褰寸敮 ? ,
									areaId: "130500",
									areaList: [{
										area: "濡椼儰绗㈤崠?,areaId:"
										130502 "},{area:"濡椼儴銈块崠 ? ,
										areaId: "130503"
									},
									{
										area: "闁垹褰撮崢?,areaId:"
										130521 "},{area:"娑撴潙鐓勯崢 ? ,
										areaId: "130522"
									},
									{
										area: "閸愬懍绗滈崢?,areaId:"
										130523 "},{area:"閺屽繋鍩傞崢 ? ,
										areaId: "130524"
									},
									{
										area: "闂呭棗鍝€閸?,areaId:"
										130525 "},{area:"娴犺骞 ? ,
										areaId: "
								130526 "
									},
									{
										area: "閸楁鎷伴崢 ? ,
								areaId: "
										130527 "
							},
							{
								area: "鐎逛焦妾甸崢 ? ,
										areaId: "
								130528 "
									},
									{
										area: "瀹搞劑绠嶉崢 ? ,
								areaId: "
										130529 "
							},
							{
								area: "閺傜増娓ら崢 ? ,
										areaId: "
								130530 "
									},
									{
										area: "楠炲灝鐣婚崢 ? ,
								areaId: "
										130531 "
							},
							{
								area: "楠炲厖鍩傞崢 ? ,
										areaId: "
								130532 "
									},
									{
										area: "婵炰礁骞?,areaId:"
										130533 "},{area:"濞撳懏娓ら崢 ? ,
										areaId: "130534"
									},
									{
										area: "娑撶銈块崢?,areaId:"
										130535 "},{area:"閸楁顔傜敮 ? ,
										areaId: "130581"
									},
									{
										area: "濞屾瑦娓ょ敮?,areaId:"
										130582 "}]},{city:"娣囨繂鐣剧敮 ? ,
										areaId: "130600",
										areaList: [{
											area: "缁旂偟顫呴崠?,areaId:"
											130602 "},{area:"閼惧弶鐫滈崠 ? ,
											areaId: "130606"
										},
										{
											area: "濠娾€崇厔閸?,areaId:"
											130607 "},{area:"濞撳懓瀚呴崠 ? ,
											areaId: "130608"
										},
										{
											area: "瀵版劖鎸夐崠?,areaId:"
											130609 "},{area:"濞戠偞鎸夐崢 ? ,
											areaId: "130623"
										},
										{
											area: "闂冩粌閽╅崢?,areaId:"
											130624 "},{area:"鐎规艾鍙撮崢 ? ,
											areaId: "130626"
										},
										{
											area: "閸炴劕骞?,
									areaId: "
											130627 "
								},
								{
									area: "妤傛﹢妲奸崢 ? ,
											areaId: "
									130628 "
										},
										{
											area: "鐎圭懓鐓勯崢 ? ,
									areaId: "
											130629 "
								},
								{
									area: "濞戠偞绨崢 ? ,
											areaId: "
									130630 "
										},
										{
											area: "閺堟盯鍏橀崢 ? ,
									areaId: "
											130631 "
								},
								{
									area: "鐎瑰鏌婇崢 ? ,
											areaId: "
									130632 "
										},
										{
											area: "閺勬挸骞?,areaId:"
											130633 "},{area:"閺囨煡妲奸崢 ? ,
											areaId: "130634"
										},
										{
											area: "閿犫€冲箼",
											areaId: "130635"
										},
										{
											area: "妞ゅ搫閽╅崢?,areaId:"
											130636 "},{area:"閸楁岸鍣归崢 ? ,
											areaId: "130637"
										},
										{
											area: "闂嗗嫬骞?,
									areaId: "
											130638 "
								},
								{
									area: "濞戝灝绐炵敮 ? ,
											areaId: "
									130681 "
										},
										{
											area: "鐎规艾绐炵敮 ? ,
									areaId: "
											130682 "
								},
								{
									area: "鐎瑰娴楃敮 ? ,
											areaId: "
									130683 "
										},
										{
											area: "妤傛顣舵惔妤€绔?,areaId:"
											130684 "}]},{city:"瀵姴顔嶉崣锝呯",areaId:"
											130700 ",areaList:[{area:"濡椼儰绗㈤崠 ? ,
											areaId: "130702"
										},
										{
											area: "濡椼儴銈块崠?,areaId:"
											130703 "},{area:"鐎癸絽瀵查崠 ? ,
											areaId: "130705"
										},
										{
											area: "娑撳濮抽崶顓炲隘",
											areaId: "130706"
										},
										{
											area: "娑撳洤鍙忛崠?,areaId:"
											130708 "},{area:"瀹曞洨銇滈崠 ? ,
											areaId: "130709"
										},
										{
											area: "瀵姴瀵抽崢?,areaId:"
											130722 "},{area:"鎼磋渹绻氶崢 ? ,
											areaId: "130723"
										},
										{
											area: "濞岃姤绨崢?,areaId:"
											130724 "},{area:"鐏忔矮绠熼崢 ? ,
											areaId: "130725"
										},
										{
											area: "閽勬艾骞?,
									areaId: "
											130726 "
								},
								{
									area: "闂冨啿甯崢 ? ,
											areaId: "
									130727 "
										},
										{
											area: "閹偓鐎瑰骞?,areaId:"
											130728 "},{area:"閹偓閺夈儱骞 ? ,
											areaId: "
									130730 "
										},
										{
											area: "濞戝潡绠嶉崢 ? ,
									areaId: "
											130731 "
								},
								{
									area: "鐠с倕鐓勯崢 ? ,
											areaId: "
									130732 "
										}]
									},
									{
										city: "閹靛灝鐥夌敮 ? ,
									areaId: "
										130800 ",
									areaList: [{
										area: "閸欏本藟閸 ? ,
										areaId: "
										130802 "
									},
									{
										area: "閸欏本娌崠 ? ,
										areaId: "
										130803 "
									},
									{
										area: "妤ｇ増澧滈拃銉ョ摍閻灝灏 ? ,
										areaId: "130804"
									},
									{
										area: "閹靛灝鐥夐崢?,areaId:"
										130821 "},{area:"閸忔挳娈曢崢 ? ,
										areaId: "130822"
									},
									{
										area: "楠炶櫕纭ラ崢?,areaId:"
										130823 "},{area:"濠婏箑閽╅崢 ? ,
										areaId: "130824"
									},
									{
										area: "闂呭棗瀵查崢?,areaId:"
										130825 "},{area:"娑撴澘鐣炲鈩冩閼奉亝涓嶉崢 ? ,
										areaId: "130826"
									},
									{
										area: "鐎硅棄鐓勫鈩冩閼奉亝涓嶉崢?,areaId:"
										130827 "},{area:"閸ユ潙婧€濠娾剝妫岄拏娆忓綔閺冨繗鍤滃▽璇插箼",areaId:"
										130828 "}]},{city:"濞屟冪獮鐢 ? ?,
										areaId: "130900",
										areaList: [{
											area: "閺傛澘宕曢崠?,areaId:"
											130902 "},{area:"鏉╂劖娓ら崠 ? ,
											areaId: "130903"
										},
										{
											area: "濞屟冨箼",
											areaId: "130921"
										},
										{
											area: "闂堟帒骞?,
											areaId: "
											130922 "
										},
										{
											area: "娑撴粌鍘滈崢 ? ,
											areaId: "
											130923 "
										},
										{
											area: "濞村嘲鍙撮崢 ? ,
											areaId: "
											130924 "
										},
										{
											area: "閻╂劕鍖楅崢 ? ,
											areaId: "
											130925 "
										},
										{
											area: "閼插啫鐣為崢 ? ,
											areaId: "
											130926 "
										},
										{
											area: "閸楁姣婇崢 ? ,
											areaId: "
											130927 "
										},
										{
											area: "閸氬瓨藟閸?? ,
											areaId: "
											130928 "
										},
										{
											area: "閻氼喖骞 ? ,
											areaId: "130929"
										},
										{
											area: "鐎涚喐娼欓崶鐐存閼奉亝涓嶉崢?,areaId:"
											130930 "},{area:"濞夊﹤銇旂敮 ? ,
											areaId: "130981"
										},
										{
											area: "娴犺绗滅敮?,areaId:"
											130982 "},{area:"姒涘嫰鐛忕敮 ? ,
											areaId: "130983"
										},
										{
											area: "濞屾娊妫跨敮?,areaId:"
											130984 "},{area:"濞撱倖鎹ｉ弬鏉垮隘",areaId:"
											130985 "},{area:"娑撳瓨鑵愮紒蹇旂ス閹垛偓閺堫垰绱戦崣鎴濆隘",areaId:"
											130986 "}]},{city:"瀵ゅ﹤娼戠敮 ? ,
											areaId: "131000",
											areaList: [{
												area: "鐎瑰顐奸崠?,areaId:"
												131002 "},{area:"楠炲潡妲奸崠 ? ,
												areaId: "131003"
											},
											{
												area: "閸ュ搫鐣ㄩ崢?,areaId:"
												131022 "},{area:"濮樺憡绔婚崢 ? ,
												areaId: "131023"
											},
											{
												area: "妫ｆ瑦娓ら崢?,areaId:"
												131024 "},{area:"婢堆冪厔閸 ? ?,
												areaId: "131025"
											},
											{
												area: "閺傚洤鐣ㄩ崢?,areaId:"
												131026 "},{area:"婢堆冨范閸ョ偞妫岄懛顏呬笉閸 ? ?,
												areaId: "131028"
											},
											{
												area: "闂囩绐炵敮?,areaId:"
												131081 "},{area:"娑撳娓ょ敮 ? ,
												areaId: "131082"
											},
											{
												area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,
												areaId: "
												131083 "
											}]
										},
										{
											city: "鐞涒剝鎸夌敮 ? ,
												areaId: "
											131100 ",
												areaList: [{
													area: "濡楀啫鐓勯崠 ? ,
											areaId: "
													131102 "
										},
										{
											area: "閸愨偓瀹哥偛灏 ? ,
													areaId: "131103"
												},
												{
													area: "閺嬶絽宸遍崢?,areaId:"
													131121 "},{area:"濮濓箓鍊崢 ? ,
													areaId: "131122"
												},
												{
													area: "濮濓箑宸遍崢?,areaId:"
													131123 "},{area:"妤楀爼妲奸崢 ? ,
													areaId: "131124"
												},
												{
													area: "鐎瑰閽╅崢?,areaId:"
													131125 "},{area:"閺佸懎鐓勯崢 ? ,
													areaId: "131126"
												},
												{
													area: "閺咁垰骞?,
											areaId: "
													131127 "
										},
										{
											area: "闂冩粌鐓勯崢 ? ,
													areaId: "
											131128 "
												},
												{
													area: "濞ｅ崬绐炵敮 ? ,
											areaId: "
													131182 "
										}]
									}]
								},
								{
									province: "鐏炶精銈块惇 ? ,
													areaId: "
									140000 ",
													cityList: [{
														city: "婢额亜甯敮 ? ,
									areaId: "
														140100 ",
									areaList: [{
										area: "鐏忓繐绨甸崠 ? ,
														areaId: "
										140105 "
													},
													{
														area: "鏉╁孩杈伴崠 ? ,
										areaId: "
														140106 "
									},
									{
										area: "閺夊繗濮冲畝顓炲隘",
										areaId: "
														140107 "
									},
									{
										area: "鐏忔牞宕忛崸顏勫隘",
										areaId: "
														140108 "
									},
									{
										area: "娑撳洦鐓嗛弸妤€灏 ? ,
														areaId: "140109"
													},
													{
														area: "閺呭绨崠?,areaId:"
														140110 "},{area:"濞撳懎绶崢 ? ,
														areaId: "140121"
													},
													{
														area: "闂冭櫕娲搁崢?,areaId:"
														140122 "},{area:"婵炲嫮鍎查崢 ? ,
														areaId: "140123"
													},
													{
														area: "閸欍倓姘︾敮?,areaId:"
														140181 "},{area:"妤傛ɑ鏌婇梼铏锤閸ヮ厼灏 ? ,
														areaId: "
										140182 "
													},
													{
														area: "妤傛ɑ鏌婂Ч鍙ョ閸ヮ厼灏?,areaId:"
														140183 "},{area:"妤傛ɑ鏌婃慨姘綑閸ヮ厼灏 ? ,
														areaId: "
										140184 "
													}]
												},
												{
													city: "婢堆冩倱鐢?? ,
										areaId: "
													140200 ",
										areaList: [{
											area: "楠炲啿鐓勯崠 ? ,
													areaId: "
											140202 "
												},
												{
													area: "閻灝灏?,areaId:"
													140203 "},{area:"閸楁鍎曢崠 ? ,
													areaId: "140211"
												},
												{
													area: "閺傛媽宕抽崠?,areaId:"
													140212 "},{area:"闂冩娊鐝崢 ? ,
													areaId: "140221"
												},
												{
													area: "婢垛晠鏅ｉ崢?,areaId:"
													140222 "},{area:"楠炶法浼掗崢 ? ,
													areaId: "140223"
												},
												{
													area: "閻忓吀绗滈崢?,areaId:"
													140224 "},{area:"濞存垶绨崢 ? ,
													areaId: "140225"
												},
												{
													area: "瀹革缚绨崢?,areaId:"
													140226 "},{area:"婢堆冩倱閸 ? ?,
													areaId: "140227"
												},
												{
													area: "缂佸繑绁瑰鈧崣鎴濆隘",
													areaId: "140228"
												},
												{
													area: "娴滄垵鍞搁崠?,areaId:"
													140229 "},{area:"娴滄垵绐為崠 ? ,
													areaId: "140230"
												}]
											},
											{
												city: "闂冭櫕纭ョ敮?,areaId:"
												140300 ",areaList:[{area:"閸╁骸灏 ? ,
												areaId: "
										140302 "
											},
											{
												area: "閻灝灏?,areaId:"
												140303 "},{area:"闁﹤灏 ? ,
												areaId: "
										140311 "
											},
											{
												area: "楠炲啿鐣鹃崢 ? ,
										areaId: "
												140321 "
									},
									{
										area: "閻╁倸骞 ? ,
												areaId: "140322"
											}]
										},
										{
											city: "闂€鎸庝笉鐢?,areaId:"
											140400 ",areaList:[{area:"閸╁骸灏 ? ,
											areaId: "
									140402 "
										},
										{
											area: "闁﹤灏?,areaId:"
											140411 "},{area:"闂€鎸庝笉閸 ? ?,
											areaId: "140421"
										},
										{
											area: "鐟楀嫬鐏掗崢?,areaId:"
											140423 "},{area:"鐏烆垳鏆€閸 ? ?,
											areaId: "140424"
										},
										{
											area: "楠炴娊銆庨崢?,areaId:"
											140425 "},{area:"姒涘骸鐓勯崢 ? ,
											areaId: "140426"
										},
										{
											area: "婢硅泛鍙ч崢?,areaId:"
											140427 "},{area:"闂€鍨摍閸 ? ?,
											areaId: "140428"
										},
										{
											area: "濮濓缚鍩傞崢?,areaId:"
											140429 "},{area:"濞屼礁骞 ? ,
											areaId: "
									140430 "
										},
										{
											area: "濞屼焦绨崢 ? ,
									areaId: "
											140431 "
								},
								{
									area: "濞肩偛鐓勭敮 ? ,
											areaId: "
									140481 "
										}]
									},
									{
										city: "閺呭鐓勭敮 ? ,
									areaId: "
										140500 ",
									areaList: [{
										area: "閸╁骸灏 ? ,
										areaId: "140502"
									},
									{
										area: "濞屼焦鎸夐崢?,areaId:"
										140521 "},{area:"闂冨啿鐓勯崢 ? ,
										areaId: "140522"
									},
									{
										area: "闂勯潧绐涢崢?,areaId:"
										140524 "},{area:"濞夎棄绐為崢 ? ,
										areaId: "140525"
									},
									{
										area: "妤傛ê閽╃敮?,areaId:"
										140581 "},{area:"缂佸繑绁瑰鈧崣鎴濆隘",areaId:"
										140582 "}]},{city:"閺堟柨绐炵敮 ? ,
										areaId: "140600",
										areaList: [{
											area: "閺堟柨鐓勯崠?,areaId:"
											140602 "},{area:"楠炴娊鐬鹃崠 ? ,
											areaId: "140603"
										},
										{
											area: "鐏為亶妲鹃崢?,areaId:"
											140621 "},{area:"鎼存柨骞 ? ,
											areaId: "
											140622 "
										},
										{
											area: "閸欏磭甯€閸?? ,
											areaId: "
											140623 "
										},
										{
											area: "閹偓娴犱礁绔 ? ,
											areaId: "140624"
										}]
									},
									{
										city: "閺呭鑵戠敮?,areaId:"
										140700 ",areaList:[{area:"濮掑棙顐奸崠 ? ,
										areaId: "140702"
									},
									{
										area: "濮掑棛銇為崢?,areaId:"
										140721 "},{area:"瀹革附娼堥崢 ? ,
										areaId: "140722"
									},
									{
										area: "閸滃矂銆庨崢?,areaId:"
										140723 "},{area:"閺勬棃妲奸崢 ? ,
										areaId: "140724"
									},
									{
										area: "鐎靛潡妲奸崢?,areaId:"
										140725 "},{area:"婢额亣鑳洪崢 ? ,
										areaId: "140726"
									},
									{
										area: "缁佷礁骞?,
										areaId: "
										140727 "
									},
									{
										area: "楠炴娊浠撮崢 ? ,
										areaId: "
										140728 "
									},
									{
										area: "閻忕數鐓堕崢 ? ,
										areaId: "
										140729 "
									},
									{
										area: "娴犲绱ょ敮 ? ,
										areaId: "
										140781 "
									}]
								},
								{
									city: "鏉╂劕鐓勭敮 ? ,
										areaId: "
									140800 ",
										areaList: [{
											area: "閻╂劖绠归崠 ? ,
									areaId: "
											140802 "
								},
								{
									area: "娑撳瀵抽崢 ? ,
											areaId: "
									140821 "
										},
										{
											area: "娑撳洩宕抽崢 ? ,
									areaId: "
											140822 "
								},
								{
									area: "闂傝鏋╅崢 ? ,
											areaId: "
									140823 "
										},
										{
											area: "缁嬪嘲鍖楅崢 ? ,
									areaId: "
											140824 "
								},
								{
									area: "閺傛壆绮甸崢 ? ,
											areaId: "
									140825 "
										},
										{
											area: "缂佹稑骞 ? ,
									areaId: "140826"
								},
								{
									area: "閸絾娲搁崢?,areaId:"
									140827 "},{area:"婢跺繐骞 ? ,
									areaId: "
											140828 "
								},
								{
									area: "楠炴娊妾伴崢 ? ,
											areaId: "
									140829 "
										},
										{
											area: "閼侯喖鐓勯崢 ? ,
									areaId: "
											140830 "
								},
								{
									area: "濮樺憡绁圭敮 ? ,
											areaId: "
									140881 "
										},
										{
											area: "濞岃櫕瑙︾敮 ? ,
									areaId: "
											140882 "
								}]
							},
							{
								city: "韫囪绐炵敮 ? ,
											areaId: "
								140900 ",
											areaList: [{
												area: "韫囪绨婚崠 ? ,
								areaId: "
												140902 "
							},
							{
								area: "鐎规俺顨夐崢 ? ,
												areaId: "
								140921 "
											},
											{
												area: "娴滄柨褰撮崢 ? ,
								areaId: "
												140922 "
							},
							{
								area: "娴狅絽骞?,areaId:"
								140923 "},{area:"缁讳礁纭婚崢 ? ,
								areaId: "140924"
							},
							{
								area: "鐎逛焦顒熼崢?,areaId:"
								140925 "},{area:"闂堟瑤绠伴崢 ? ,
								areaId: "140926"
							},
							{
								area: "缁佺偞鐫滈崢?,areaId:"
								140927 "},{area:"娴滄柨顕濋崢 ? ,
								areaId: "140928"
							},
							{
								area: "瀹€銏犵煔閸?,areaId:"
								140929 "},{area:"濞岃櫕娲搁崢 ? ,
								areaId: "140930"
							},
							{
								area: "娣囨繂鐥夐崢?,areaId:"
								140931 "},{area:"閸嬪繐鍙ч崢 ? ,
								areaId: "140932"
							},
							{
								area: "閸樼喎閽╃敮?,areaId:"
								140981 "}]},{city:"娑撳瓨鏈敮 ? ,
								areaId: "141000",
								areaList: [{
									area: "鐏徰囧厴閸?,areaId:"
									141002 "},{area:"閺囧弶鐭侀崢 ? ,
									areaId: "141021"
								},
								{
									area: "缂堢厧鐓勯崢?,areaId:"
									141022 "},{area:"鐟楀嫭鏈崢 ? ,
									areaId: "141023"
								},
								{
									area: "濞差亝绀婇崢?,areaId:"
									141024 "},{area:"閸欍倕骞 ? ,
									areaId: "
													141025 "
								},
								{
									area: "鐎瑰杈伴崢 ? ,
													areaId: "
									141026 "
												},
												{
													area: "濞搭喖鍖楅崢 ? ,
									areaId: "
													141027 "
								},
								{
									area: "閸氬骞?,areaId:"
									141028 "},{area:"娑斺€崇暈閸 ? ?,
									areaId: "141029"
								},
								{
									area: "婢堆冪暈閸?,areaId:"
									141030 "},{area:"闂呮澘骞 ? ,
									areaId: "
													141031 "
								},
								{
									area: "濮樼鎷伴崢 ? ,
													areaId: "
									141032 "
												},
												{
													area: "閽傛彃骞 ? ,
									areaId: "141033"
								},
								{
									area: "濮规崘銈块崢?,areaId:"
									141034 "},{area:"娓氼垶鈹堢敮 ? ,
									areaId: "141081"
								},
								{
									area: "闂囧秴绐炵敮?,areaId:"
									141082 "}]},{city:"閸氭洘顣︾敮 ? ,
									areaId: "141100",
									areaList: [{
										area: "缁傝崵鐓堕崠?,areaId:"
										141102 "},{area:"閺傚洦鎸夐崢 ? ,
										areaId: "141121"
									},
									{
										area: "娴溿倕鐓勯崢?,areaId:"
										141122 "},{area:"閸忔潙骞 ? ,
										areaId: "
														141123 "
									},
									{
										area: "娑撴潙骞?,areaId:"
										141124 "},{area:"閺岃櫕鐏勯崢 ? ,
										areaId: "141125"
									},
									{
										area: "閻櫕銈奸崢?,areaId:"
										141126 "},{area:"瀹€姘箼",areaId:"
										141127 "},{area:"閺傜懓鍖楅崢 ? ,
										areaId: "141128"
									},
									{
										area: "娑擃參妲奸崢?,areaId:"
										141129 "},{area:"娴溿倕褰涢崢 ? ,
										areaId: "141130"
									},
									{
										area: "鐎涙繀绠熺敮?,areaId:"
										141181 "},{area:"濮归箖妲肩敮 ? ,
										areaId: "141182"
									}]
								}]
							},
							{
								province: "閸愬懓鎸嬮崣銈堝殰濞岃灏?,
												areaId: "
								150000 ",
												cityList: [{
													city: "閸涚厧鎷板ù鈺冨鐢 ? ,
								areaId: "
													150100 ",
								areaList: [{
									area: "閺傛澘鐓勯崠 ? ,
													areaId: "
									150102 "
												},
												{
													area: "閸ョ偞鐨崠 ? ,
									areaId: "
													150103 "
								},
								{
									area: "閻滃纭ラ崠 ? ,
													areaId: "
									150104 "
												},
												{
													area: "鐠ф稓缍嶉崠 ? ,
									areaId: "
													150105 "
								},
								{
									area: "閸︾喖绮悧鐟颁箯閺?? ,
													areaId: "
									150121 "
												},
												{
													area: "閹垫ê鍘犻幍妯哄箼",
													areaId: "
									150122 "
												},
												{
													area: "閸滃本鐏勯弽鐓庣毜閸 ? ,
									areaId: "
													150123 "
								},
								{
									area: "濞撳懏鎸夊▽鍐插箼",
									areaId: "
													150124 "
								},
								{
									area: "濮濓箑绐涢崢 ? ,
													areaId: "
									150125 "
												}]
											},
											{
												city: "閸栧懎銇旂敮 ? ,
									areaId: "
												150200 ",
									areaList: [{
										area: "娑撴粍娓ら崠 ? ,
												areaId: "
										150202 "
											},
											{
												area: "閺勫棝鍏樻禒鎴濆隘",
												areaId: "
										150203 "
											},
											{
												area: "闂堟帒鍖楅崠 ? ,
										areaId: "
												150204 "
									},
									{
										area: "閻櫕瀚勯崠 ? ,
												areaId: "
										150205 "
											},
											{
												area: "閻ф垝绨柉鍌氬触閻灝灏 ? ,
										areaId: "150206"
									},
									{
										area: "娑旀繂甯崠?,areaId:"
										150207 "},{area:"閸︾喖绮悧鐟板礁閺 ? ?,
										areaId: "150221"
									},
									{
										area: "閸ユ椽妲奸崢?,areaId:"
										150222 "},{area:"鏉堟儳鐨电純鏇″瘯閺勫骸鐣ㄩ懕鏂挎値閺 ? ?,
										areaId: "150223"
									}]
								},
								{
									city: "娑斿本鎹ｇ敮?,areaId:"
									150300 ",areaList:[{area:"濞村嘲濯板﹢鎯у隘",areaId:"
									150302 "},{area:"濞村嘲宕￠崠 ? ,
									areaId: "150303"
								},
								{
									area: "娑斿矁鎻崠?,areaId:"
									150304 "}]},{city:"鐠с倕鍢茬敮 ? ,
									areaId: "150400",
									areaList: [{
										area: "缁俱垹鍖楅崠?,areaId:"
										150402 "},{area:"閸忓啫鐤傜仦鍗炲隘",areaId:"
										150403 "},{area:"閺夋儳鍖楅崠 ? ,
										areaId: "150404"
									},
									{
										area: "闂冨潡鐬剧粔鎴濈毜濞屼焦妫?,
												areaId: "
										150421 "
											},
											{
												area: "瀹稿瓨鐏勫锔芥",
												areaId: "
										150422 "
											},
											{
												area: "瀹稿瓨鐏勯崣铏",
												areaId: "
										150423 "
											},
											{
												area: "閺嬫銈块崢 ? ,
										areaId: "
												150424 "
									},
									{
										area: "閸忓绮堥崗瀣悩閺?? ,
												areaId: "
										150425 "
											},
											{
												area: "缂堜胶澧伴悧瑙勬",
												areaId: "
										150426 "
											},
											{
												area: "閸犫偓閸犲洦鐬鹃弮 ? ,
										areaId: "
												150428 "
									},
									{
										area: "鐎逛礁鐓勯崢 ? ,
												areaId: "
										150429 "
											},
											{
												area: "閺佹牗鐪介弮 ? ,
										areaId: "
												150430 "
									}]
								},
								{
									city: "闁俺绐樼敮 ? ,
												areaId: "
									150500 ",
												areaList: [{
													area: "缁夋垵鐨靛▽浣稿隘",
													areaId: "
									150502 "
												},
												{
													area: "缁夋垵鐨靛▽浣镐箯缂堥棿鑵戦弮 ? ,
									areaId: "
													150521 "
								},
								{
									area: "缁夋垵鐨靛▽浣镐箯缂堢厧鎮楅弮 ? ,
													areaId: "
									150522 "
												},
												{
													area: "瀵偓妞翠礁骞 ? ,
									areaId: "150523"
								},
								{
									area: "鎼存挷楦￠弮?,areaId:"
									150524 "},{area:"婵傚牊娴栭弮 ? ,
									areaId: "150525"
								},
								{
									area: "閹靛酣鐬鹃悧瑙勬",
									areaId: "150526"
								},
								{
									area: "闂囧秵鐏勯柈顓炲珕鐢?,areaId:"
									150581 "}]},{city:"闁倸鐨垫径姘焿鐢 ? ?,
									areaId: "150600",
									areaList: [{
										area: "娑撴粏鍎ㄩ崠?,areaId:"
										150602 "},{area:"鏉堢偓濯洪悧瑙勬",areaId:"
										150621 "},{area:"閸戝棙鐗哥亸鏃€妫 ? ,
										areaId: "
														150622 "
									},
									{
										area: "闁倹澧崗瀣閺?? ,
														areaId: "
										150623 "
													},
													{
														area: "闁倹澧崗瀣",
														areaId: "
										150624 "
													},
													{
														area: "閺夘參鏁犻弮 ? ,
										areaId: "
														150625 "
									},
									{
										area: "娑斿苯顓搁弮 ? ,
														areaId: "
										150626 "
													},
													{
														area: "娴煎﹪鍣鹃棁宥嗙閺 ? ,
										areaId: "
														150627 "
									},
									{
										area: "鎼村嘲鍙嶆禒鈧崠 ? ,
														areaId: "
										150628 "
													}]
												},
												{
													city: "閸涢棿楦＄拹婵嗙毜鐢 ? ,
										areaId: "
													150700 ",
										areaList: [{
											area: "濞撮攱濯虹亸鏂垮隘",
											areaId: "
													150702 "
										},
										{
											area: "閹靛氦绁茬拠鍝勭毜閸?? ,
													areaId: "
											150703 "
												},
												{
													area: "闂冭儻宕抽弮 ? ,
											areaId: "
													150721 "
										},
										{
											area: "閼绢偄濮忔潏鍓ф憹鏉堢偓鏋寸亸鏃€妫岄懛顏呬笉閺?? ,
													areaId: "
											150722 "
												},
												{
													area: "闁倷楦￠弰銉ㄥ殰濞岀粯妫 ? ,
											areaId: "150723"
										},
										{
											area: "闁倹淇崗瀣閼奉亝涓嶉弮?,areaId:"
											150724 "},{area:"闂勫牆鍙嶇亸鏃囨閺 ? ?,
											areaId: "150725"
										},
										{
											area: "閺傛澘鍙嶇亸鏃囨瀹革附妫?,
													areaId: "
											150726 "
												},
												{
													area: "閺傛澘鍙嶇亸鏃囨閸欒櫕妫 ? ,
											areaId: "150727"
										},
										{
											area: "濠娾剝搴婇柌灞界",
											areaId: "150781"
										},
										{
											area: "閻楁瑥鍘犻惌鍐茬",
											areaId: "150782"
										},
										{
											area: "閹靛骸鍙炵仦顖氱",
											areaId: "150783"
										},
										{
											area: "妫版繂鐨甸崣銈囨捈鐢?,areaId:"
											150784 "},{area:"閺嶈娓ょ敮 ? ,
											areaId: "150785"
										}]
									},
									{
										city: "瀹告潙婧呭ǎ鏍х毜鐢?,areaId:"
										150800 ",areaList:[{area:"娑撳瓨娓ら崠 ? ,
										areaId: "150802"
									},
									{
										area: "娴滄柨甯崢?,areaId:"
										150821 "},{area:"绾炬潙褰涢崢 ? ,
										areaId: "150822"
									},
									{
										area: "娑斿本濯洪悧鐟板閺?,areaId:"
										150823 "},{area:"娑斿本濯洪悧閫涜厬閺 ? ?,
										areaId: "150824"
									},
									{
										area: "娑斿本濯洪悧鐟版倵閺?,areaId:"
										150825 "},{area:"閺夘參鏁犻崥搴㈡",areaId:"
										150826 "}]},{city:"娑斿苯鍙炵€电喎绔风敮 ? ,
										areaId: "150900",
										areaList: [{
											area: "闂嗗棗鐣為崠?,areaId:"
											150902 "},{area:"閸楁捁绁崢 ? ,
											areaId: "150921"
										},
										{
											area: "閸栨牕鐥夐崢?,areaId:"
											150922 "},{area:"閸熷棝鍏橀崢 ? ,
											areaId: "150923"
										},
										{
											area: "閸忔潙鎷伴崢?,areaId:"
											150924 "},{area:"閸戝鐓勯崢 ? ,
											areaId: "150925"
										},
										{
											area: "鐎电喎鎼辩亸鏂垮礁缂堢厧澧犻弮?,areaId:"
											150926 "},{area:"鐎电喎鎼辩亸鏂垮礁缂堥棿鑵戦弮 ? ,
											areaId: "150927"
										},
										{
											area: "鐎电喎鎼辩亸鏂垮礁缂堢厧鎮楅弮?,areaId:"
											150928 "},{area:"閸ユ稑鐡欓悳瀣",areaId:"
											150929 "},{area:"娑撲即鏅ｇ敮 ? ,
											areaId: "150981"
										}]
									},
									{
										city: "閸忔潙鐣ㄩ惄?,areaId:"
										152200 ",areaList:[{area:"娑斿苯鍙炲ù鈺冨鐢 ? ?,
										areaId: "152201"
									},
									{
										area: "闂冨灝鐨电仦鍗炵",
										areaId: "152202"
									},
									{
										area: "缁夋垵鐨靛▽浣稿礁缂堢厧澧犻弮?,areaId:"
										152221 "},{area:"缁夋垵鐨靛▽浣稿礁缂堥棿鑵戦弮 ? ,
										areaId: "152222"
									},
									{
										area: "閹靛氦绁查悧瑙勬",
										areaId: "152223"
									},
									{
										area: "缁愪焦纭ラ崢?,areaId:"
										152224 "}]},{city:"闁库剝鐏勯柈顓炲珕閻 ? ?,
										areaId: "152500",
										areaList: [{
											area: "娴滃矁绻涘ù鈺冨鐢?,areaId:"
											152501 "},{area:"闁库剝鐏勫ù鈺冨鐢 ? ?,
											areaId: "152502"
										},
										{
											area: "闂冨灝鍙嶉崲搴㈡",
											areaId: "152522"
										},
										{
											area: "閼诲繐鍑归悧鐟颁箯閺?,areaId:"
											152523 "},{area:"閼诲繐鍑归悧鐟板礁閺 ? ?,
											areaId: "152524"
										},
										{
											area: "娑撴粈绠ら悵鐘碉供濞屼焦妫?,
													areaId: "
											152525 "
												},
												{
													area: "鐟楀じ绠ら悵鐘碉供濞屼焦妫 ? ,
											areaId: "152526"
										},
										{
											area: "婢额亙绮忕€电儤妫?,
													areaId: "
											152527 "
												},
												{
													area: "闂€鍫曠矋閺 ? ,
											areaId: "
													152528 "
										},
										{
											area: "濮濓綁鏆ラ惂鑺ユ",
											areaId: "
													152529 "
										},
										{
											area: "濮濓綀鎽戦弮 ? ,
													areaId: "
											152530 "
												},
												{
													area: "婢舵矮楦￠崢 ? ,
											areaId: "
													152531 "
										}]
									},
									{
										city: "闂冩寧濯洪崰鍕礃",
										areaId: "
													152900 ",
										areaList: [{
											area: "闂冩寧濯洪崰鍕箯閺?? ,
													areaId: "
											152921 "
												},
												{
													area: "闂冩寧濯洪崰鍕礁閺 ? ,
											areaId: "
													152922 "
										},
										{
											area: "妫版繃绁圭痪铏",
											areaId: "
													152923 "
										}]
									}]
								},
								{
									province: "鏉堣棄鐣為惇 ? ,
													areaId: "
									210000 ",
													cityList: [{
														city: "濞屽牓妲肩敮 ? ,
									areaId: "
														210100 ",
									areaList: [{
										area: "閸滃苯閽╅崠 ? ,
														areaId: "
										210102 "
													},
													{
														area: "濞屽牊娓ら崠 ? ,
										areaId: "
														210103 "
									},
									{
										area: "婢堆傜閸?? ,
														areaId: "
										210104 "
													},
													{
														area: "閻ㄥ洤顫栭崠 ? ,
										areaId: "
														210105 "
									},
									{
										area: "闁句浇銈块崠 ? ,
														areaId: "
										210106 "
													},
													{
														area: "閼诲繐顔嶇仦顖氬隘",
														areaId: "
										210111 "
													},
													{
														area: "濞存垵宕￠崠 ? ,
										areaId: "
														210112 "
									},
									{
										area: "濞屽牆瀵抽弬鏉垮隘",
										areaId: "
														210113 "
									},
									{
										area: "娴滃孩妞介崠 ? ,
														areaId: "
										210114 "
													},
													{
														area: "鏉堟垝鑵戦崠 ? ,
										areaId: "
														210115 "
									},
									{
										area: "鎼村嘲閽╅崢 ? ,
														areaId: "
										210123 "
													},
													{
														area: "濞夋洖绨遍崢 ? ,
										areaId: "
														210124 "
									},
									{
										area: "閺傜増鐨敮 ? ,
														areaId: "
										210181 "
													},
													{
														area: "妤傛ɑ鏌婇崠 ? ,
										areaId: "
														210182 "
									}]
								},
								{
									city: "婢堆嗙箾鐢?? ,
														areaId: "
									210200 ",
														areaList: [{
															area: "娑擃厼鍖楅崠 ? ,
									areaId: "
															210202 "
								},
								{
									area: "鐟楀灝鐭栭崠 ? ,
															areaId: "
									210203 "
														},
														{
															area: "濞屾瑦娓ら崣锝呭隘",
															areaId: "
									210204 "
														},
														{
															area: "閻㈡ü绨崇€涙劕灏 ? ,
									areaId: "210211"
								},
								{
									area: "閺冨懘銆庨崣锝呭隘",
									areaId: "210212"
								},
								{
									area: "闁叉垵绐為崠?,areaId:"
									210213 "},{area:"閺咁喖鍙炴惔妤€绔 ? ,
									areaId: "
															210214 "
								},
								{
									area: "闂€鎸庢崳閸?? ,
															areaId: "
									210224 "
														},
														{
															area: "閻★附鍩ф惔妤€绔 ? ,
									areaId: "210281"
								},
								{
									area: "鎼村嫭娓ょ敮?,areaId:"
									210283 "},{area:"妤傛ɑ鏌婇崠 ? ,
									areaId: "210284"
								},
								{
									area: "缂佸繑绁瑰鈧崣鎴濆隘",
									areaId: "210285"
								},
								{
									area: "闁叉垶娅橀弬鏉垮隘",
									areaId: "210286"
								}]
							},
							{
								city: "闂夊秴鍖楃敮?,areaId:"
								210300 ",areaList:[{area:"闁句椒绗㈤崠 ? ,
								areaId: "210302"
							},
							{
								area: "闁句浇銈块崠?,areaId:"
								210303 "},{area:"缁斿鍖楅崠 ? ,
								areaId: "210304"
							},
							{
								area: "閸楀啫鍖楅崠?,areaId:"
								210311 "},{area:"閸欐澘鐣ㄩ崢 ? ,
								areaId: "210321"
							},
							{
								area: "瀹€顐㈠崥濠娾剝妫岄懛顏呬笉閸?,areaId:"
								210323 "},{area:"濞村嘲鐓勭敮 ? ,
								areaId: "210381"
							},
							{
								area: "妤傛ɑ鏌婇崠?,areaId:"
								210382 "}]},{city:"閹舵岸銆庣敮 ? ,
								areaId: "210400",
								areaList: [{
									area: "閺傜増濮庨崠?,areaId:"
									210402 "},{area:"娑撴粍搴婇崠 ? ,
									areaId: "210403"
								},
								{
									area: "閺堟稖濮抽崠?,areaId:"
									210404 "},{area:"妞ゅ搫鐓勯崠 ? ,
									areaId: "210411"
								},
								{
									area: "閹舵岸銆庨崢?,areaId:"
									210421 "},{area:"閺傛澘顔曞鈩冩閼奉亝涓嶉崢 ? ,
									areaId: "210422"
								},
								{
									area: "濞撳懎甯鈩冩閼奉亝涓嶉崢?,areaId:"
									210423 "}]},{city:"閺堫剚閭敮 ? ,
									areaId: "210500",
									areaList: [{
										area: "楠炲啿鍖楅崠?,areaId:"
										210502 "},{area:"濠ь亝绠归崠 ? ,
										areaId: "210503"
									},
									{
										area: "閺勫骸鍖楅崠?,areaId:"
										210504 "},{area:"閸楁濮崠 ? ,
										areaId: "210505"
									},
									{
										area: "閺堫剚閭鈩冩閼奉亝涓嶉崢?,areaId:"
										210521 "},{area:"濡楁挷绮婂鈩冩閼奉亝涓嶉崢 ? ,
										areaId: "210522"
									}]
								},
								{
									city: "娑撻€涚鐢?,areaId:"
									210600 ",areaList:[{area:"閸忓啫鐤傞崠 ? ,
									areaId: "210602"
								},
								{
									area: "閹割垰鍙撮崠?,areaId:"
									210603 "},{area:"閹割垰鐣ㄩ崠 ? ,
									areaId: "210604"
								},
								{
									area: "鐎圭晫鏁诲鈩冩閼奉亝涓嶉崢?,areaId:"
									210624 "},{area:"娑撴粍鑵愮敮 ? ,
									areaId: "210681"
								},
								{
									area: "閸戙倕鐓勭敮?,areaId:"
									210682 "}]},{city:"闁匡箑绐炵敮 ? ,
									areaId: "210700",
									areaList: [{
										area: "閸欍倕顢欓崠?,areaId:"
										210702 "},{area:"閸戝本娓ら崠 ? ,
										areaId: "210703"
									},
									{
										area: "婢额亜鎷伴崠?,areaId:"
										210711 "},{area:"姒涙垵鍖楅崢 ? ,
										areaId: "210726"
									},
									{
										area: "娑斿骞?,
																areaId: "
										210727 "
															},
															{
																area: "閸戝本鎹ｇ敮 ? ,
										areaId: "
																210781 "
									},
									{
										area: "閸栨鏅ｇ敮 ? ,
																areaId: "
										210782 "
															},
															{
																area: "閺夋儳鍖楅弬鏉垮隘",
																areaId: "
										210783 "
															},
															{
																area: "姒瑦鐖惧﹢鐐煀閸 ? ,
										areaId: "
																210784 "
									},
									{
										area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,areaId:"
										210785 "}]},{city:"閽€銉ュ經鐢 ? ?,
										areaId: "210800",
										areaList: [{
											area: "缁旀瑥澧犻崠?,areaId:"
											210802 "},{area:"鐟楀灝绔堕崠 ? ,
											areaId: "210803"
										},
										{
											area: "妞村懘濂旈崷鍫濆隘",
											areaId: "210804"
										},
										{
											area: "閼颁浇绔熼崠?,areaId:"
											210811 "},{area:"閻╂牕绐炵敮 ? ,
											areaId: "210881"
										},
										{
											area: "婢堆呯叾濡椼儱绔?,
																	areaId: "
											210882 "
																}]
															},
															{
																city: "闂冩粍鏌婄敮 ? ,
											areaId: "
																210900 ",
											areaList: [{
												area: "濞村嘲绐為崠 ? ,
																areaId: "
												210902 "
															},
															{
																area: "閺備即鍋欓崠 ? ,
												areaId: "
																210903 "
											},
											{
												area: "婢额亜閽╅崠 ? ,
																areaId: "
												210904 "
															},
															{
																area: "濞撳懏娓ら梻銊ュ隘",
																areaId: "
												210905 "
															},
															{
																area: "缂佸棙娓ら崠 ? ,
												areaId: "
																210911 "
											},
											{
												area: "闂冩粍鏌婇拏娆忓綔閺冨繗鍤滃▽璇插箼",
												areaId: "
																210921 "
											},
											{
												area: "瑜扮増顒熼崢 ? ,
																areaId: "
												210922 "
															}]
														},
														{
															city: "鏉堜粙妲肩敮 ? ,
												areaId: "
															211000 ",
												areaList: [{
													area: "閻ц棄顢欓崠 ? ,
															areaId: "
													211002 "
														},
														{
															area: "閺傚洤婀ラ崠 ? ,
													areaId: "
															211003 "
												},
												{
													area: "鐎瑰繋绱甸崠 ? ,
															areaId: "
													211004 "
														},
														{
															area: "瀵捇鏆卞畝顓炲隘",
															areaId: "
													211005 "
														},
														{
															area: "婢额亜鐡欏▽鍐插隘",
															areaId: "
													211011 "
														},
														{
															area: "鏉堜粙妲奸崢 ? ,
													areaId: "
															211021 "
												},
												{
													area: "閻忣垰顢欑敮 ? ,
															areaId: "
													211081 "
														}]
													},
													{
														city: "閻╂﹢鏁犵敮 ? ,
													areaId: "
														211100 ",
													areaList: [{
														area: "閸欏苯褰寸€涙劕灏?,areaId:"
														211102 "},{area:"閸忔挳娈曢崣鏉垮隘",areaId:"
														211103 "},{area:"婢堆勯唶閸 ? ?,
														areaId: "211104"
													},
													{
														area: "閻╂ê鍖楅崢?,areaId:"
														211122 "}]},{city:"闁句礁绠旂敮 ? ,
														areaId: "211200",
														areaList: [{
															area: "闁捐泛绐為崠?,areaId:"
															211202 "},{area:"濞撳懏娓ら崠 ? ,
															areaId: "211204"
														},
														{
															area: "闁句礁绠旈崢?,areaId:"
															211221 "},{area:"鐟楀じ璧撮崢 ? ,
															areaId: "211223"
														},
														{
															area: "閺勫苯娴橀崢?,areaId:"
															211224 "},{area:"鐠嬪啫鍙虹仦鍗炵",areaId:"
															211281 "},{area:"瀵偓閸樼喎绔 ? ,
															areaId: "
															211282 "
														}]
													},
													{
														city: "閺堟繈妲肩敮 ? ,
															areaId: "
														211300 ",
															areaList: [{
																area: "閸欏苯顢欓崠 ? ,
														areaId: "
																211302 "
													},
													{
														area: "姒瑥鐓勯崠 ? ,
																areaId: "
														211303 "
															},
															{
																area: "閺堟繈妲奸崢 ? ,
														areaId: "
																211321 "
													},
													{
														area: "瀵ゅ搫閽╅崢 ? ,
																areaId: "
														211322 "
															},
															{
																area: "閸犫偓閸犲洦鐬惧锔捐€冮拏娆忓綔閺冨繗鍤滃▽璇插箼",
																areaId: "
														211324 "
															},
															{
																area: "閸栨銈ㄧ敮 ? ,
														areaId: "
																211381 "
													},
													{
														area: "閸戝本绨敮 ? ,
																areaId: "
														211382 "
															}]
														},
														{
															city: "閽侇偉濮﹀畝娑樼",
															areaId: "
														211400 ",
															areaList: [{
																area: "鏉╃偛鍖楅崠 ? ,
														areaId: "
																211402 "
													},
													{
														area: "姒瑦鑵愰崠 ? ,
																areaId: "
														211403 "
															},
															{
																area: "閸楁銈ㄩ崠 ? ,
														areaId: "
																211404 "
													},
													{
														area: "缂併儰鑵戦崢 ? ,
																areaId: "
														211421 "
															},
															{
																area: "瀵ょ儤妲嶉崢 ? ,
														areaId: "
																211422 "
													},
													{
														area: "閸忔潙鐓勭敮 ? ,
																areaId: "
														211481 "
															}]
														}]
													},
													{
														province: "閸氬鐏勯惇 ? ,
														areaId: "
														220000 ",
														cityList: [{
															city: "闂€鎸庢К鐢?? ,
														areaId: "
															220100 ",
														areaList: [{
															area: "閸楁鍙ч崠 ? ,
															areaId: "
															220102 "
														},
														{
															area: "鐎硅棄鐓勯崠 ? ,
															areaId: "
															220103 "
														},
														{
															area: "閺堟繈妲奸崠 ? ,
															areaId: "
															220104 "
														},
														{
															area: "娴滃矂浜鹃崠 ? ,
															areaId: "
															220105 "
														},
														{
															area: "缂佸灝娲崠 ? ,
															areaId: "
															220106 "
														},
														{
															area: "閸欏矂妲奸崠 ? ,
															areaId: "
															220112 "
														},
														{
															area: "娑旀繂褰撮崠 ? ,
															areaId: "
															220113 "
														},
														{
															area: "閸愭粌鐣ㄩ崢 ? ,
															areaId: "
															220122 "
														},
														{
															area: "濮掑棙鐖茬敮 ? ,
															areaId: "
															220182 "
														},
														{
															area: "瀵伴攱鍎敮 ? ,
															areaId: "
															220183 "
														},
														{
															area: "闂€鎸庢К閺傛澘灏 ? ,
															areaId: "220184"
														},
														{
															area: "妤傛ɑ鏌婇幎鈧張顖欓獓娑撴艾绱戦崣鎴濆隘",
															areaId: "220185"
														},
														{
															area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,
															areaId: "
															220186 "
														},
														{
															area: "濮瑰€熸簠娴溠傜瑹瀵偓閸欐垵灏 ? ,
															areaId: "220187"
														},
														{
															area: "閸忔挳娈曠紒鐓庢値娣囨繄鈼ｉ崠?,areaId:"
															220188 "}]},{city:"閸氬鐏勭敮 ? ,
															areaId: "220200",
															areaList: [{
																area: "閺勫矂鍊崠?,areaId:"
																220202 "},{area:"姒瑦姹熼崠 ? ,
																areaId: "220203"
															},
															{
																area: "閼哥鎯€閸?,areaId:"
																220204 "},{area:"娑撶増寮ч崠 ? ,
																areaId: "220211"
															},
															{
																area: "濮樼鎮忛崢?,areaId:"
																220221 "},{area:"閾旂喐娓ょ敮 ? ,
																areaId: "220281"
															},
															{
																area: "濡楋妇鏁荤敮?,areaId:"
																220282 "},{area:"閼告帒鍙炵敮 ? ,
																areaId: "220283"
															},
															{
																area: "绾炬劗鐓剁敮?,areaId:"
																220284 "},{area:"妤傛ɑ鏌婇崠 ? ,
																areaId: "220285"
															}]
														},
														{
															city: "閸ユ稑閽╃敮?,areaId:"
															220300 ",areaList:[{area:"闁句浇銈块崠 ? ,
															areaId: "220302"
														},
														{
															area: "闁句椒绗㈤崠?,areaId:"
															220303 "},{area:"濮娿劍鐖查崢 ? ,
															areaId: "220322"
														},
														{
															area: "娴煎﹪鈧碍寮ч弮蹇氬殰濞岃骞?,
															areaId: "
															220323 "
														},
														{
															area: "閸忣兛瀵屽畝顓炵",
															areaId: "
															220381 "
														},
														{
															area: "閸欏矁绐樼敮 ? ,
															areaId: "
															220382 "
														}]
													},
													{
														city: "鏉堣姤绨敮 ? ,
															areaId: "
														220400 ",
															areaList: [{
																area: "姒瑥鍖楅崠 ? ,
														areaId: "
																220402 "
													},
													{
														area: "鐟楀灝鐣ㄩ崠 ? ,
																areaId: "
														220403 "
															},
															{
																area: "娑撴粈璧撮崢 ? ,
														areaId: "
																220421 "
													},
													{
														area: "娑撴粏绐橀崢 ? ,
																areaId: "
														220422 "
															}]
														},
														{
															city: "闁艾瀵茬敮 ? ,
														areaId: "
															220500 ",
														areaList: [{
															area: "娑撴粍妲嶉崠 ? ,
															areaId: "
															220502 "
														},
														{
															area: "娴滃矂浜惧Ч鐔峰隘",
															areaId: "
															220503 "
														},
														{
															area: "闁艾瀵查崢 ? ,
															areaId: "
															220521 "
														},
														{
															area: "鏉堝宕￠崢 ? ,
															areaId: "
															220523 "
														},
														{
															area: "閺岃櫕娓ら崢 ? ,
															areaId: "
															220524 "
														},
														{
															area: "濮婂懏娓ら崣锝呯",
															areaId: "
															220581 "
														},
														{
															area: "闂嗗棗鐣ㄧ敮 ? ,
															areaId: "
															220582 "
														}]
													},
													{
														city: "閻ц棄鍖楃敮 ? ,
															areaId: "
														220600 ",
															areaList: [{
																area: "濞存垶鐫欓崠 ? ,
														areaId: "
																220602 "
													},
													{
														area: "濮圭喐绨崠 ? ,
																areaId: "
														220605 "
															},
															{
																area: "閹舵碍婢楅崢 ? ,
														areaId: "
																220621 "
													},
													{
														area: "闂堟牕鐣ら崢 ? ,
																areaId: "
														220622 "
															},
															{
																area: "闂€璺ㄦ閺堟繈鐭為弮蹇氬殰濞岃骞?,areaId:"
																220623 "},{area:"娑撳瓨鐫欑敮 ? ,
																areaId: "220681"
															}]
														},
														{
															city: "閺夋儳甯敮?,areaId:"
															220700 ",areaList:[{area:"鐎逛焦鐫欓崠 ? ,
															areaId: "220702"
														},
														{
															area: "閸撳秹鍎圭亸鏃傜稄閺傤垵鎸嬮崣銈嗘閼奉亝涓嶉崢?,areaId:"
															220721 "},{area:"闂€鍨當閸 ? ?,
															areaId: "220722"
														},
														{
															area: "娑旀儳鐣ㄩ崢?,areaId:"
															220723 "},{area:"閹垫湹缍戠敮 ? ,
															areaId: "220781"
														}]
													},
													{
														city: "閻ц棄鐓勭敮?,areaId:"
														220800 ",areaList:[{area:"濞差喖瀵抽崠 ? ,
														areaId: "220802"
													},
													{
														area: "闂€鍥ゲ閸?,areaId:"
														220821 "},{area:"闁碍顩崢 ? ,
														areaId: "220822"
													},
													{
														area: "濞差喖宕＄敮?,areaId:"
														220881 "},{area:"婢堆冪暔鐢 ? ?,
														areaId: "220882"
													}]
												},
												{
													city: "瀵ゆ儼绔熼張婵嬬煘閺冨繗鍤滃▽璇茬獮",
													areaId: "222400",
													areaList: [{
														area: "瀵よ泛鎮忕敮?,areaId:"
														222401 "},{area:"閸ュ彞婊戠敮 ? ,
														areaId: "222402"
													},
													{
														area: "閺侊箑瀵茬敮?,areaId:"
														222403 "},{area:"閻濆弶妲敮 ? ,
														areaId: "222404"
													},
													{
														area: "姒瑤绨崇敮?,areaId:"
														222405 "},{area:"閸滃矂绶崇敮 ? ,
														areaId: "222406"
													},
													{
														area: "濮诡亝绔婚崢?,areaId:"
														222424 "},{area:"鐎瑰娴橀崢 ? ,
														areaId: "222426"
													}]
												}]
											},
											{
												province: "姒涙垿绶冲Ч鐔烘阜",
												areaId: "230000",
												cityList: [{
													city: "閸濆牆鐨靛銊ョ",
													areaId: "230100",
													areaList: [{
														area: "闁捇鍣烽崠?,areaId:"
														230102 "},{area:"閸楁鐭栭崠 ? ,
														areaId: "230103"
													},
													{
														area: "闁挸顦婚崠?,areaId:"
														230104 "},{area:"楠炶櫕鍩ч崠 ? ,
														areaId: "230108"
													},
													{
														area: "閺夋儳瀵抽崠?,areaId:"
														230109 "},{area:"妫ｆ瑥娼戦崠 ? ,
														areaId: "230110"
													},
													{
														area: "閸涚厧鍙為崠?,areaId:"
														230111 "},{area:"闂冨灝鐓勯崠 ? ,
														areaId: "230112"
													},
													{
														area: "閸欏苯鐓勯崠?,areaId:"
														230113 "},{area:"娓氭繂鍙為崢 ? ,
														areaId: "230123"
													},
													{
														area: "閺傝顒滈崢?,areaId:"
														230124 "},{area:"鐎规儳骞 ? ,
														areaId: "
												230125 "
													},
													{
														area: "瀹告潙婧呴崢 ? ,
												areaId: "
														230126 "
											},
											{
												area: "閺堛劌鍙為崢 ? ,
														areaId: "
												230127 "
													},
													{
														area: "闁碍娓ら崢 ? ,
												areaId: "
														230128 "
											},
											{
												area: "瀵よ泛顕撮崢 ? ,
														areaId: "
												230129 "
													},
													{
														area: "鐏忔艾绻旂敮 ? ,
												areaId: "
														230183 "
											},
											{
												area: "娴滄柨鐖剁敮 ? ,
														areaId: "
												230184 "
													},
													{
														area: "閸濆牆鐨靛銊︽煀閸?? ,
												areaId: "
														230185 "
											},
											{
												area: "妤傛ɑ鏌婇崠 ? ,
														areaId: "
												230186 "
													}]
												},
												{
													city: "姒绘劙缍堥崫鍫濈毜鐢?? ,
												areaId: "
													230200 ",
												areaList: [{
													area: "姒瑦鐭欓崠 ? ,
													areaId: "
													230202 "
												},
												{
													area: "瀵ゅ搫宕曢崠 ? ,
													areaId: "
													230203 "
												},
												{
													area: "闁句線鏀遍崠 ? ,
													areaId: "
													230204 "
												},
												{
													area: "閺勫倹妲€濠ь亜灏?,areaId:"
													230205 "},{area:"鐎靛本濯虹亸鏂跨唨閸 ? ?,
													areaId: "230206"
												},
												{
													area: "绾版儳鐡欑仦鍗炲隘",
													areaId: "230207"
												},
												{
													area: "濮婂懘鍣烽弬顖濇彧閺傗€崇毜閺冨繐灏?,
													areaId: "
													230208 "
												},
												{
													area: "姒瑦鐫欓崢 ? ,
													areaId: "
													230221 "
												},
												{
													area: "娓氭繂鐣ㄩ崢 ? ,
													areaId: "
													230223 "
												},
												{
													area: "濞夌増娼甸崢 ? ,
													areaId: "
													230224 "
												},
												{
													area: "閻㈡ê宕￠崢 ? ,
													areaId: "
													230225 "
												},
												{
													area: "鐎靛矁顥氶崢 ? ,
													areaId: "
													230227 "
												},
												{
													area: "閸忓鍖楅崢 ? ,
													areaId: "
													230229 "
												},
												{
													area: "閸忓绗㈤崢 ? ,
													areaId: "
													230230 "
												},
												{
													area: "閹锋粍纭ラ崢 ? ,
													areaId: "
													230231 "
												},
												{
													area: "鐠侀攱娓ょ敮 ? ,
													areaId: "
													230281 "
												},
												{
													area: "妤傛ɑ鏌婇崠 ? ,
													areaId: "
													230282 "
												}]
											},
											{
												city: "妤βゃ偪鐢 ? ,
													areaId: "
												230300 ",
													areaList: [{
														area: "妤︹€冲暆閸?? ,
												areaId: "
														230302 "
											},
											{
												area: "閹帒鍖楅崠 ? ,
														areaId: "
												230303 "
													},
													{
														area: "濠婃挳浜鹃崠 ? ,
												areaId: "
														230304 "
											},
											{
												area: "濮娿劍鐖查崠 ? ,
														areaId: "
												230305 "
													},
													{
														area: "閸╁骸鐡欏▽鍐插隘",
														areaId: "
												230306 "
													},
													{
														area: "妤硅鍖楅崠 ? ,
												areaId: "
														230307 "
											},
											{
												area: "妤︹€茬閸 ? ,
														areaId: "
												230321 "
													},
													{
														area: "閾忓孩鐏勭敮 ? ,
												areaId: "
														230381 "
											},
											{
												area: "鐎靛棗鍖楃敮 ? ,
														areaId: "
												230382 "
													}]
												},
												{
													city: "妤ｃ倕鐭栫敮 ? ,
												areaId: "
													230400 ",
												areaList: [{
													area: "閸氭垿妲奸崠 ? ,
													areaId: "
													230402 "
												},
												{
													area: "瀹搞儱鍟橀崠 ? ,
													areaId: "
													230403 "
												},
												{
													area: "閸楁鍖楅崠 ? ,
													areaId: "
													230404 "
												},
												{
													area: "閸忔潙鐣ㄩ崠 ? ,
													areaId: "
													230405 "
												},
												{
													area: "娑撴粌鍖楅崠 ? ,
													areaId: "
													230406 "
												},
												{
													area: "閸忔潙鍖楅崠 ? ,
													areaId: "
													230407 "
												},
												{
													area: "閽€婵嗗閸 ? ,
													areaId: "
													230421 "
												},
												{
													area: "缂併儲鑺遍崢 ? ,
													areaId: "
													230422 "
												}]
											},
											{
												city: "閸欏矂鑵戠仦鍗炵",
												areaId: "
													230500 ",
												areaList: [{
													area: "鐏忔牕鍖楅崠 ? ,
													areaId: "
													230502 "
												},
												{
													area: "瀹€顓濈閸?? ,
													areaId: "
													230503 "
												},
												{
													area: "閸ユ稒鏌熼崣鏉垮隘",
													areaId: "
													230505 "
												},
												{
													area: "鐎规繂鍖楅崠 ? ,
													areaId: "
													230506 "
												},
												{
													area: "闂嗗棜鎼愰崢 ? ,
													areaId: "
													230521 "
												},
												{
													area: "閸欏鐨ч崢 ? ,
													areaId: "
													230522 "
												},
												{
													area: "鐎规繃绔婚崢 ? ,
													areaId: "
													230523 "
												},
												{
													area: "妤楄埖娓ら崢 ? ,
													areaId: "
													230524 "
												}]
											},
											{
												city: "婢堆冪啊鐢?? ,
													areaId: "
												230600 ",
													areaList: [{
														area: "閽€銊ョ毜閸ユ儳灏 ? ,
												areaId: "230602"
											},
											{
												area: "姒瑥鍤栭崠?,areaId:"
												230603 "},{area:"鐠佲晞鍎捄顖氬隘",areaId:"
												230604 "},{area:"缁俱垹鐭栭崠 ? ,
												areaId: "230605"
											},
											{
												area: "婢堆冩倱閸?,areaId:"
												230606 "},{area:"閼插洤绐為崢 ? ,
												areaId: "230621"
											},
											{
												area: "閼插洦绨崢?,areaId:"
												230622 "},{area:"閺嬫鏁婚崢 ? ,
												areaId: "230623"
											},
											{
												area: "閺夋粌鐨垫导顖滃閽傛瑥褰滈弮蹇氬殰濞岃骞?,
														areaId: "
												230624 "
													},
													{
														area: "妤傛ɑ鏌婇崠 ? ,
												areaId: "
														230625 "
											}]
										},
										{
											city: "娴煎﹥妲敮 ? ,
														areaId: "
											230700 ",
														areaList: [{
															area: "娴煎﹥妲崠 ? ,
											areaId: "
															230702 "
										},
										{
											area: "閸楁鐭撻崠 ? ,
															areaId: "
											230703 "
														},
														{
															area: "閸欏銈介崠 ? ,
											areaId: "
															230704 "
										},
										{
											area: "鐟楁寧鐏勯崠 ? ,
															areaId: "
											230705 "
														},
														{
															area: "缂堢姴鑲犻崠 ? ,
											areaId: "
															230706 "
										},
										{
											area: "閺備即娼氶崠 ? ,
															areaId: "
											230707 "
														},
														{
															area: "缂囧孩閭崠 ? ,
											areaId: "
															230708 "
										},
										{
											area: "闁叉垵鍖楃仦顖氬隘",
											areaId: "
															230709 "
										},
										{
											area: "娴滄棁鎯€閸?? ,
															areaId: "
											230710 "
														},
														{
															area: "娑斿矂鈹堝▽鍐插隘",
															areaId: "
											230711 "
														},
														{
															area: "濮广倖妞囧▽鍐插隘",
															areaId: "
											230712 "
														},
														{
															area: "鐢箑绠旈崠 ? ,
											areaId: "
															230713 "
										},
										{
											area: "娑斿奔绱涘畝顓炲隘",
											areaId: "
															230714 "
										},
										{
											area: "缁俱垺妲﹂崠 ? ,
															areaId: "
											230715 "
														},
														{
															area: "娑撳﹦鏁囧畝顓炲隘",
															areaId: "
											230716 "
														},
														{
															area: "閸㈠宕奸崢 ? ,
											areaId: "
															230722 "
										},
										{
											area: "闁句礁濮忕敮 ? ,
															areaId: "
											230781 "
														}]
													},
													{
														city: "娴ｈ櫕婀弬顖氱",
														areaId: "
											230800 ",
														areaList: [{
															area: "閸氭垿妲奸崠 ? ,
											areaId: "
															230803 "
										},
										{
											area: "閸撳秷绻橀崠 ? ,
															areaId: "
											230804 "
														},
														{
															area: "娑撴粓顥撻崠 ? ,
											areaId: "
															230805 "
										},
										{
											area: "闁﹤灏?,areaId:"
											230811 "},{area:"濡楋箑宕￠崢 ? ,
											areaId: "230822"
										},
										{
											area: "濡楋箑绐涢崢?,areaId:"
											230826 "},{area:"濮广倕甯崢 ? ,
											areaId: "230828"
										},
										{
											area: "閸氬本鐫欑敮?,areaId:"
											230881 "},{area:"鐎靛矂鏁犵敮 ? ,
											areaId: "230882"
										},
										{
											area: "閹舵俺绻欑敮?,areaId:"
											230883 "}]},{city:"娑撳啫褰村▽鍐茬",areaId:"
											230900 ",areaList:[{area:"閺傛澘鍙撮崠 ? ,
											areaId: "230902"
										},
										{
											area: "濡楀啫鍖楅崠?,areaId:"
											230903 "},{area:"閼煎嫬鐡欏▽鍐插隘",areaId:"
											230904 "},{area:"閸曞啫鍩勯崢 ? ,
											areaId: "230921"
										}]
									},
									{
										city: "閻椻€茶吂濮圭喎绔?,
														areaId: "
										231000 ",
														areaList: [{
															area: "娑撴粌鐣ㄩ崠 ? ,
										areaId: "
															231002 "
									},
									{
										area: "闂冭櫕妲戦崠 ? ,
															areaId: "
										231003 "
														},
														{
															area: "閻栬鲸鐨崠 ? ,
										areaId: "
															231004 "
									},
									{
										area: "鐟楀灝鐣ㄩ崠 ? ,
															areaId: "
										231005 "
														},
														{
															area: "閺嬫褰涢崢 ? ,
										areaId: "
															231025 "
									},
									{
										area: "缂併儴濮▽鍐茬",
										areaId: "
															231081 "
									},
									{
										area: "濞撮攱鐏勭敮 ? ,
															areaId: "
										231083 "
														},
														{
															area: "鐎逛礁鐣ㄧ敮 ? ,
										areaId: "
															231084 "
									},
									{
										area: "缁屽棙锛戠敮 ? ,
															areaId: "
										231085 "
														},
														{
															area: "娑撴粌鐣炵敮 ? ,
										areaId: "
															231086 "
									}]
								},
								{
									city: "姒涙垶娓ょ敮 ? ,
															areaId: "
									231100 ",
															areaList: [{
																area: "閻栬精绶ｉ崠 ? ,
									areaId: "
																231102 "
								},
								{
									area: "鐎氣晜鐫欓崢 ? ,
																areaId: "
									231121 "
															},
															{
																area: "闁﹤鍘犻崢 ? ,
									areaId: "
																231123 "
								},
								{
									area: "鐎涙瑥鎯旈崢 ? ,
																areaId: "
									231124 "
															},
															{
																area: "閸栨鐣ㄧ敮 ? ,
									areaId: "
																231181 "
								},
								{
									area: "娴滄柨銇囨潻鐐寸潨鐢?? ,
																areaId: "
									231182 "
															}]
														},
														{
															city: "缂併儱瀵茬敮 ? ,
									areaId: "
															231200 ",
									areaList: [{
										area: "閸栨鐏勯崠 ? ,
															areaId: "
										231202 "
														},
														{
															area: "閺堟稑顨撻崢 ? ,
										areaId: "
															231221 "
									},
									{
										area: "閸忔媽銈块崢 ? ,
															areaId: "
										231222 "
														},
														{
															area: "闂堟帒鍞搁崢 ? ,
										areaId: "
															231223 "
									},
									{
										area: "鎼村棗鐣ㄩ崢 ? ,
															areaId: "
										231224 "
														},
														{
															area: "閺勫孩鎸夐崢 ? ,
										areaId: "
															231225 "
									},
									{
										area: "缂併儲锛戦崢 ? ,
															areaId: "
										231226 "
														},
														{
															area: "鐎瑰鎻敮 ? ,
										areaId: "
															231281 "
									},
									{
										area: "閼插洣绗㈢敮 ? ,
															areaId: "
										231282 "
														},
														{
															area: "濞磋渹楦＄敮 ? ,
										areaId: "
															231283 "
									}]
								},
								{
									city: "婢堆冨彺鐎瑰绠旈崷鏉垮隘",
									areaId: "
															232700 ",
									areaList: [{
										area: "閸旂姵鐗告潏鎯ь殞閸?? ,
															areaId: "
										232701 "
														},
														{
															area: "閺傜増鐏勯崠 ? ,
										areaId: "
															232702 "
									},
									{
										area: "閺夋儳绠旈崠 ? ,
															areaId: "
										232703 "
														},
														{
															area: "閸涢棿鑵戦崠 ? ,
										areaId: "
															232704 "
									},
									{
										area: "閸涜偐甯ラ崢 ? ,
															areaId: "
										232721 "
														},
														{
															area: "婵夋梹娓ら崢 ? ,
										areaId: "
															232722 "
									},
									{
										area: "濠曠姵娓ら崢 ? ,
															areaId: "
										232723 "
														}]
													}]
												},
												{
													province: "娑撳﹥鎹 ? ,
										areaId: "310000",
										cityList: [{
											city: "娑撳﹥鎹ｇ敮?,areaId:"
											310100 ",areaList:[{area:"姒涘嫭閮搁崠 ? ,
											areaId: "310101"
										},
										{
											area: "瀵版劖鐪归崠?,areaId:"
											310104 "},{area:"闂€鍨暈閸 ? ?,
											areaId: "310105"
										},
										{
											area: "闂堟瑥鐣ㄩ崠?,areaId:"
											310106 "},{area:"閺咁噣妾ч崠 ? ,
											areaId: "310107"
										},
										{
											area: "閾忕懓褰涢崠?,areaId:"
											310109 "},{area:"閺夈劍閮搁崠 ? ,
											areaId: "310110"
										},
										{
											area: "闂備絻顢戦崠?,areaId:"
											310112 "},{area:"鐎规繂鍖楅崠 ? ,
											areaId: "310113"
										},
										{
											area: "閸㈠鐣鹃崠?,areaId:"
											310114 "},{area:"濞达缚绗㈤弬鏉垮隘",areaId:"
											310115 "},{area:"闁叉垵鍖楅崠 ? ,
											areaId: "310116"
										},
										{
											area: "閺夌偓鐫欓崠?,areaId:"
											310117 "},{area:"闂堟帗閮搁崠 ? ,
											areaId: "310118"
										},
										{
											area: "婵傚鎼愰崠?,areaId:"
											310120 "},{area:"瀹曞洦妲戦崠 ? ,
											areaId: "310151"
										},
										{
											area: "瀵姵鐫欐妯绘煀閸?,areaId:"
											310231 "},{area:"缁鳖偆顏舵妯绘煀閸 ? ?,
											areaId: "310232"
										},
										{
											area: "濠曟洘娓ゅ▔鎯х磻閸欐垵灏?,
														areaId: "
											310233 "
													}]
												}]
											},
											{
												province: "濮圭喕瀚冮惇 ? ,
											areaId: "
												320000 ",
											cityList: [{
												city: "閸楁ぞ鍚敮 ? ,
												areaId: "
												320100 ",
												areaList: [{
													area: "閻滃嫭顒熼崠 ? ,
												areaId: "
													320102 "
											},
											{
												area: "缁夛附妯婇崠 ? ,
													areaId: "
												320104 "
												},
												{
													area: "瀵ゆ椽鍋ら崠 ? ,
												areaId: "
													320105 "
											},
											{
												area: "姒ф挻銈奸崠 ? ,
													areaId: "
												320106 "
												},
												{
													area: "濞达箑褰涢崠 ? ,
												areaId: "
													320111 "
											},
											{
												area: "閺嶆牠婀犻崠 ? ,
													areaId: "
												320113 "
												},
												{
													area: "闂嗐劏濮抽崣鏉垮隘",
													areaId: "
												320114 "
												},
												{
													area: "濮圭喎鐣為崠 ? ,
												areaId: "
													320115 "
											},
											{
												area: "閸忣厼鎮庨崠 ? ,
													areaId: "
												320116 "
												},
												{
													area: "濠а勬寜閸 ? ,
												areaId: "
													320117 "
											},
											{
												area: "妤傛ɑ鐑﹂崠 ? ,
													areaId: "
												320118 "
												},
												{
													area: "濮圭喎瀵抽弬鏉垮隘",
													areaId: "
												320119 "
												}]
											},
											{
												city: "閺冪娀鏁楃敮 ? ,
												areaId: "
												320200 ",
												areaList: [{
													area: "闁库€冲寳閸?? ,
												areaId: "
													320205 "
											},
											{
												area: "閹姴鍖楅崠 ? ,
													areaId: "
												320206 "
												},
												{
													area: "濠娿劍绠归崠 ? ,
												areaId: "
													320211 "
											},
											{
												area: "濮婁焦閭崠 ? ,
													areaId: "
												320213 "
												},
												{
													area: "閺傛澘鎯旈崠 ? ,
												areaId: "
													320214 "
											},
											{
												area: "濮圭喖妲剧敮 ? ,
													areaId: "
												320281 "
												},
												{
													area: "鐎规粌鍙寸敮 ? ,
												areaId: "
													320282 "
											}]
										},
										{
											city: "瀵版劕绐炵敮 ? ,
													areaId: "
											320300 ",
													areaList: [{
														area: "姒ф挻銈奸崠 ? ,
											areaId: "
														320302 "
										},
										{
											area: "娴滄垿绶抽崠 ? ,
														areaId: "
											320303 "
													},
													{
														area: "鐠愮偓璞归崠 ? ,
											areaId: "
														320305 "
										},
										{
											area: "濞夊鍖楅崠 ? ,
														areaId: "
											320311 "
													},
													{
														area: "闁炬粌鍖楅崠 ? ,
											areaId: "
														320312 "
										},
										{
											area: "娑撴澘骞 ? ,
														areaId: "320321"
													},
													{
														area: "濞屾稑骞?,
											areaId: "
														320322 "
										},
										{
											area: "閻垹鐣為崢 ? ,
														areaId: "
											320324 "
													},
													{
														area: "閺傜増鐭€鐢?? ,
											areaId: "
														320381 "
										},
										{
											area: "闁啿绐炵敮 ? ,
														areaId: "
											320382 "
													},
													{
														area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,areaId:"
														320383 "},{area:"妤傛ɑ鏌婇幎鈧張顖欓獓娑撴艾绱戦崣鎴濆隘",areaId:"
														320384 "},{area:"鏉烆垯娆㈤崶 ? ,
														areaId: "320385"
													}]
												},
												{
													city: "鐢绐炵敮?,areaId:"
													320400 ",areaList:[{area:"婢垛晛鐣為崠 ? ,
													areaId: "320402"
												},
												{
													area: "闁界喐銈奸崠?,areaId:"
													320404 "},{area:"閺傛澘瀵抽崠 ? ,
													areaId: "320411"
												},
												{
													area: "濮濓箒绻橀崠?,areaId:"
													320412 "},{area:"闁叉垵娼ч崠 ? ,
													areaId: "320413"
												},
												{
													area: "濠а囨Ъ鐢?,areaId:"
													320481 "},{area:"妤傛ɑ鏌婇崠 ? ,
													areaId: "320482"
												}]
											},
											{
												city: "閼诲繐绐炵敮?,areaId:"
												320500 ",areaList:[{area:"閾忓簼绗滈崠 ? ,
												areaId: "320505"
											},
											{
												area: "閸氱繝鑵戦崠?,areaId:"
												320506 "},{area:"閻╃鐓勯崠 ? ,
												areaId: "320507"
											},
											{
												area: "婵垼瀚冮崠?,areaId:"
												320508 "},{area:"閸氬瓨鐫欓崠 ? ,
												areaId: "320509"
											},
											{
												area: "鐢摜鍟涚敮?,areaId:"
												320581 "},{area:"瀵姴顔嶅〒顖氱",areaId:"
												320582 "},{area:"閺勫棗鍖楃敮 ? ,
												areaId: "320583"
											},
											{
												area: "婢额亙绮ㄧ敮?,areaId:"
												320585 "},{area:"閼诲繐绐炲銉ょ瑹閸ヮ厼灏 ? ,
												areaId: "
									320587 "
											},
											{
												area: "妤傛ɑ鏌婇崠 ? ,
									areaId: "
												320588 "
								}]
							},
							{
								city: "閸楁鈧艾绔 ? ,
												areaId: "320600",
												areaList: [{
													area: "瀹曞洤绐涢崠?,areaId:"
													320602 "},{area:"濞擃垶妞勯崠 ? ,
													areaId: "320611"
												},
												{
													area: "闁艾绐為崠?,areaId:"
													320612 "},{area:"濞村嘲鐣ㄧ敮 ? ,
													areaId: "320621"
												},
												{
													area: "婵″倷绗㈤崢?,areaId:"
													320623 "},{area:"閸氼垯绗㈢敮 ? ,
													areaId: "320681"
												},
												{
													area: "婵″倻娈濈敮?,areaId:"
													320682 "},{area:"濞寸兘妫敮 ? ,
													areaId: "320684"
												},
												{
													area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,
									areaId: "
													320685 "
								}]
							},
							{
								city: "鏉╃偘绨〒顖氱",
								areaId: "
													320700 ",
								areaList: [{
									area: "鏉╃偘绨崠 ? ,
													areaId: "
									320703 "
												},
												{
													area: "濞村嘲绐為崠 ? ,
									areaId: "
													320706 "
								},
								{
									area: "鐠э絾顩崠 ? ,
													areaId: "
									320707 "
												},
												{
													area: "娑撴粍鎹ｉ崢 ? ,
									areaId: "
													320722 "
								},
								{
									area: "閻忓奔绨崢 ? ,
													areaId: "
									320723 "
												},
												{
													area: "閻忓苯宕￠崢 ? ,
									areaId: "
													320724 "
								}]
							},
							{
								city: "濞ｎ喖鐣ㄧ敮 ? ,
													areaId: "
								320800 ",
													areaList: [{
														area: "濞ｎ喖鐣ㄩ崠 ? ,
								areaId: "
														320803 "
							},
							{
								area: "濞ｎ噣妲鹃崠 ? ,
														areaId: "
								320804 "
													},
													{
														area: "濞撳懏鐫欏ù锕€灏?,areaId:"
														320811 "},{area:"濞差亝杈伴崠 ? ,
														areaId: "320813"
													},
													{
														area: "濞戠喐鎸夐崢?,areaId:"
														320826 "},{area:"閻╄京婀欓崢 ? ,
														areaId: "320830"
													},
													{
														area: "闁叉垶绠归崢?,areaId:"
														320831 "},{area:"缂佸繑绁瑰鈧崣鎴濆隘",areaId:"
														320832 "}]},{city:"閻╂劕鐓勭敮 ? ,
														areaId: "320900",
														areaList: [{
															area: "娴滎厽绠归崠?,areaId:"
															320902 "},{area:"閻╂劙鍏橀崠 ? ,
															areaId: "320903"
														},
														{
															area: "婢堆傝荡閸?,areaId:"
															320904 "},{area:"閸濆秵鎸夐崢 ? ,
															areaId: "320921"
														},
														{
															area: "濠娿劍鎹ｉ崢?,areaId:"
															320922 "},{area:"闂冩粌鐣為崢 ? ,
															areaId: "320923"
														},
														{
															area: "鐏忓嫰妲奸崢?,areaId:"
															320924 "},{area:"瀵ょ儤绠归崢 ? ,
															areaId: "320925"
														},
														{
															area: "娑撴粌褰寸敮?,areaId:"
															320981 "}]},{city:"閹殿剙绐炵敮 ? ,
															areaId: "321000",
															areaList: [{
																area: "楠炲潡娅熼崠?,areaId:"
																321002 "},{area:"闁鐫欓崠 ? ,
																areaId: "321003"
															},
															{
																area: "濮圭喖鍏橀崠?,areaId:"
																321012 "},{area:"鐎规繂绨查崢 ? ,
																areaId: "321023"
															},
															{
																area: "娴狀亜绶涚敮?,areaId:"
																321081 "},{area:"妤傛﹢鍋栫敮 ? ,
																areaId: "321084"
															}]
														},
														{
															city: "闂€鍥ㄧ潤鐢?,areaId:"
															321100 ",areaList:[{area:"娴滎剙褰涢崠 ? ,
															areaId: "321102"
														},
														{
															area: "濞戯箑绐為崠?,areaId:"
															321111 "},{area:"娑撶懓绶崠 ? ,
															areaId: "321112"
														},
														{
															area: "娑撳綊妲肩敮?,areaId:"
															321181 "},{area:"閹殿兛鑵戠敮 ? ,
															areaId: "321182"
														},
														{
															area: "閸欍儱顔愮敮?,areaId:"
															321183 "},{area:"闂€鍥ㄧ潤閺傛澘灏 ? ,
															areaId: "
									321184 "
														},
														{
															area: "闂€鍥ㄧ潤閺傛澘灏?,areaId:"
															321185 "},{area:"缂佸繑绁瑰鈧崣鎴濆隘",areaId:"
															321186 "}]},{city:"濞夋澘绐炵敮 ? ,
															areaId: "321200",
															areaList: [{
																area: "濞寸兘娅熼崠?,areaId:"
																321202 "},{area:"妤傛ɑ鑵愰崠 ? ,
																areaId: "321203"
															},
															{
																area: "婵粌鐗ラ崠?,areaId:"
																321204 "},{area:"閸忔潙瀵茬敮 ? ,
																areaId: "321281"
															},
															{
																area: "闂堟牗鐫欑敮?,areaId:"
																321282 "},{area:"濞夋澘鍙寸敮 ? ,
																areaId: "321283"
															}]
														},
														{
															city: "鐎硅儻绺肩敮?,areaId:"
															321300 ",areaList:[{area:"鐎瑰灝鐓勯崠 ? ,
															areaId: "321302"
														},
														{
															area: "鐎硅儻椴嶉崠?,areaId:"
															321311 "},{area:"濞岊參妲奸崢 ? ,
															areaId: "321322"
														},
														{
															area: "濞夋妲奸崢?,areaId:"
															321323 "},{area:"濞夋妞介崢 ? ,
															areaId: "321324"
														},
														{
															area: "缂佸繑绁瑰鈧崣鎴濆隘",
															areaId: "321325"
														}]
													}]
												},
												{
													province: "濞存瑦鐫欓惇?,areaId:"
													330000 ",cityList:[{city:"閺夘厼绐炵敮 ? ,
													areaId: "330100",
													areaList: [{
														area: "娑撳﹤鐓勯崠?,areaId:"
														330102 "},{area:"娑撳鐓勯崠 ? ,
														areaId: "330103"
													},
													{
														area: "濮圭喎鍏遍崠?,areaId:"
														330104 "},{area:"閹峰崬顣崠 ? ,
														areaId: "330105"
													},
													{
														area: "鐟楁寧绠归崠?,areaId:"
														330106 "},{area:"濠娿劍鐫欓崠 ? ,
														areaId: "330108"
													},
													{
														area: "閽€褍鍖楅崠?,areaId:"
														330109 "},{area:"娴ｆ瑦婢€閸 ? ?,
														areaId: "330110"
													},
													{
														area: "鐎靛矂妲奸崠?,areaId:"
														330111 "},{area:"闁藉崬顢濋崠 ? ,
														areaId: "330114"
													},
													{
														area: "濡楁劕绨崢?,areaId:"
														330122 "},{area:"濞ｅ啿鐣ㄩ崢 ? ,
														areaId: "330127"
													},
													{
														area: "瀵ゅ搫鐥夌敮?,areaId:"
														330182 "},{area:"娑撴潙鐣ㄩ崠 ? ,
														areaId: "330185"
													},
													{
														area: "妤傛ɑ鏌婇崠?,areaId:"
														330186 "}]},{city:"鐎逛焦灏濈敮 ? ,
														areaId: "330200",
														areaList: [{
															area: "濞撮攱娲愰崠?,areaId:"
															330203 "},{area:"濮圭喎瀵抽崠 ? ,
															areaId: "330205"
														},
														{
															area: "閸栨ぞ绮﹂崠?,areaId:"
															330206 "},{area:"闂€鍥ㄦ崳閸 ? ?,
															areaId: "330211"
														},
														{
															area: "闁偛绐為崠?,areaId:"
															330212 "},{area:"鐠炩€冲寳閸 ? ?,
															areaId: "330225"
														},
														{
															area: "鐎逛焦鎹ｉ崢?,areaId:"
															330226 "},{area:"娴ｆ瑥顫熺敮 ? ,
															areaId: "330281"
														},
														{
															area: "閹卞牊閭敮?,areaId:"
															330282 "},{area:"婵傚瀵查崠 ? ,
															areaId: "330283"
														},
														{
															area: "閺夘厼绐炲﹢鐐煀閸?,areaId:"
															330284 "},{area:"妤傛ɑ鏌婇崠 ? ,
															areaId: "330285"
														}]
													},
													{
														city: "濞撯晛绐炵敮?,areaId:"
														330300 ",areaList:[{area:"妤ｅ灝鐓勯崠 ? ,
														areaId: "330302"
													},
													{
														area: "姒瑦鍜曢崠?,areaId:"
														330303 "},{area:"閻☆垱鎹ｉ崠 ? ,
														areaId: "330304"
													},
													{
														area: "濞茬偛銇旈崠?,areaId:"
														330305 "},{area:"濮樼妲堥崢 ? ,
														areaId: "330324"
													},
													{
														area: "楠炴娊妲奸崢?,areaId:"
														330326 "},{area:"閼诲秴宕￠崢 ? ,
														areaId: "330327"
													},
													{
														area: "閺傚洦鍨氶崢?,areaId:"
														330328 "},{area:"濞変即銆庨崢 ? ,
														areaId: "330329"
													},
													{
														area: "閻熺偛鐣ㄧ敮?,areaId:"
														330381 "},{area:"娑旀劖绔荤敮 ? ,
														areaId: "330382"
													}]
												},
												{
													city: "閸㈠鍙寸敮?,areaId:"
													330400 ",areaList:[{area:"閸楁绠归崠 ? ,
													areaId: "330402"
												},
												{
													area: "缁夆偓濞叉彃灏?,
							areaId: "
													330411 "
						},
						{
							area: "閸㈠鏉介崢 ? ,
													areaId: "
							330421 "
												},
												{
													area: "濞撮娲傞崢 ? ,
							areaId: "
													330424 "
						},
						{
							area: "濞村嘲鐣炵敮 ? ,
													areaId: "
							330481 "
												},
												{
													area: "楠炶櫕绠圭敮 ? ,
							areaId: "
													330482 "
						},
						{
							area: "濡楁劒鍩傜敮 ? ,
													areaId: "
							330483 "
												}]
											},
											{
												city: "濠€鏍х獮鐢?? ,
							areaId: "
												330500 ",
							areaList: [{
								area: "閸氭潙鍙撮崠 ? ,
												areaId: "
								330502 "
											},
											{
												area: "閸楁绂傞崠 ? ,
								areaId: "
												330503 "
							},
							{
								area: "瀵伴攱绔婚崢 ? ,
												areaId: "
								330521 "
											},
											{
												area: "闂€鍨彺閸?? ,
								areaId: "
												330522 "
							},
							{
								area: "鐎瑰鎮忛崢 ? ,
												areaId: "
								330523 "
											}]
										},
										{
											city: "缂佸秴鍙寸敮 ? ,
								areaId: "
											330600 ",
								areaList: [{
									area: "鐡掑﹤鐓勯崠 ? ,
											areaId: "
									330602 "
										},
										{
											area: "閺岊垱藟閸?? ,
									areaId: "
											330603 "
								},
								{
									area: "娑撳﹨娅堥崠 ? ,
											areaId: "
									330604 "
										},
										{
											area: "閺傜増妲嶉崢 ? ,
									areaId: "
											330624 "
								},
								{
									area: "鐠囧憡姣冪敮 ? ,
											areaId: "
									330681 "
										},
										{
											area: "瀹撳﹤绐炵敮 ? ,
									areaId: "
											330683 "
								}]
							},
							{
								city: "闁叉垵宕曠敮 ? ,
											areaId: "
								330700 ",
											areaList: [{
												area: "婵犲搫鐓勯崠 ? ,
								areaId: "
												330702 "
							},
							{
								area: "闁叉垳绗㈤崠 ? ,
												areaId: "
								330703 "
											},
											{
												area: "濮濓缚绠熼崢 ? ,
								areaId: "
												330723 "
							},
							{
								area: "濞达附鐫欓崢 ? ,
												areaId: "
								330726 "
											},
											{
												area: "绾炬劕鐣ㄩ崢 ? ,
								areaId: "
												330727 "
							},
							{
								area: "閸忕増閭敮 ? ,
												areaId: "
								330781 "
											},
											{
												area: "娑斿绠ょ敮 ? ,
								areaId: "
												330782 "
							},
							{
								area: "娑撴粓妲肩敮 ? ,
												areaId: "
								330783 "
											},
											{
												area: "濮樼鎮嶇敮 ? ,
								areaId: "
												330784 "
							}]
						},
						{
							city: "鐞涖垹绐炵敮 ? ,
												areaId: "
							330800 ",
												areaList: [{
													area: "閺岊垰鐓勯崠 ? ,
							areaId: "
													330802 "
						},
						{
							area: "鐞涖垺鐫欓崠 ? ,
													areaId: "
							330803 "
												},
												{
													area: "鐢鍖楅崢 ? ,
							areaId: "
													330822 "
						},
						{
							area: "瀵偓閸栨牕骞 ? ,
													areaId: "330824"
												},
												{
													area: "姒瑦鐖堕崢?,areaId:"
													330825 "},{area:"濮圭喎鍖楃敮 ? ,
													areaId: "330881"
												}]
											},
											{
												city: "閼哥喎鍖楃敮?,areaId:"
												330900 ",areaList:[{area:"鐎规碍鎹ｉ崠 ? ,
												areaId: "330902"
											},
											{
												area: "閺咁噣妾ч崠?,areaId:"
												330903 "},{area:"瀹€鍗炲寳閸 ? ?,
												areaId: "330921"
											},
											{
												area: "瀹撳﹥纭归崢?,areaId:"
												330922 "}]},{city:"閸欐澘绐炵敮 ? ,
												areaId: "331000",
												areaList: [{
													area: "濡炴帗鐫欓崠?,areaId:"
													331002 "},{area:"姒涘嫬鍗氶崠 ? ,
													areaId: "331003"
												},
												{
													area: "鐠侯垱藟閸?,areaId:"
													331004 "},{area:"閻滃骞嗛崢 ? ,
													areaId: "331021"
												},
												{
													area: "娑撳妫崢?,areaId:"
													331022 "},{area:"婢垛晛褰撮崢 ? ,
													areaId: "331023"
												},
												{
													area: "娴犳瑥鐪抽崢?,areaId:"
													331024 "},{area:"濞撯晛绠旂敮 ? ,
													areaId: "331081"
												},
												{
													area: "娑撳瓨鎹ｇ敮?,areaId:"
													331082 "}]},{city:"娑撹姤鎸夌敮 ? ,
													areaId: "331100",
													areaList: [{
														area: "閼炬煡鍏橀崠?,areaId:"
														331102 "},{area:"闂堟帞鏁崢 ? ,
														areaId: "331121"
													},
													{
														area: "缂傛瑤绨崢?,areaId:"
														331122 "},{area:"闁倹妲嶉崢 ? ,
														areaId: "331123"
													},
													{
														area: "閺夐箖妲奸崢?,areaId:"
														331124 "},{area:"娴滄垵鎷伴崢 ? ,
														areaId: "331125"
													},
													{
														area: "鎼村棗鍘撻崢?,areaId:"
														331126 "},{area:"閺咁垰鐣為悾鍙夋閼奉亝涓嶉崢 ? ,
														areaId: "331127"
													},
													{
														area: "姒瑦纭ョ敮?,areaId:"
														331181 "}]},{city:"閼哥喎鍖楃紘銈呯煗閺傛澘灏 ? ,
														areaId: "
								331200 ",
														areaList: [{
															area: "闁叉垵顢濆畝 ? ,
								areaId: "
															331201 "
							},
							{
								area: "閸忣厽铆瀹€ ? ,
															areaId: "
								331202 "
														},
														{
															area: "鐞涖垹鍖楀畝 ? ,
								areaId: "
															331203 "
							},
							{
								area: "閼哥喎鍖楅張顒€鐭濈憲鍨闁 ? ,
															areaId: "
								331204 "
														},
														{
															area: "瀹€鍗炲寳瀹€娑溿偪閸楁鍎?,areaId:"
															331205 "},{area:"濞夋顦﹀畝 ? ,
															areaId: "331206"
														},
														{
															area: "閺堝崬顔嶇亸鏍х煗",
															areaId: "331207"
														},
														{
															area: "濞插鍖楀畝?,areaId:"
															331208 "},{area:"闂€鎸庣П瀹€ ? ,
															areaId: "331209"
														},
														{
															area: "閾忔儳纭诲畝?,areaId:"
															331210 "}]}]},{province:"鐎瑰绐橀惇 ? ,
															areaId: "340000",
															cityList: [{
																city: "閸氬牐鍋夌敮?,areaId:"
																340100 ",areaList:[{area:"閻熻埖鎹ｉ崠 ? ,
																areaId: "340102"
															},
															{
																area: "鎼存劙妲奸崠?,areaId:"
																340103 "},{area:"閾氣偓鐏炲崬灏 ? ,
																areaId: "
									340104 "
															},
															{
																area: "閸栧懏娓ら崠 ? ,
									areaId: "
																340111 "
								},
								{
									area: "闂€澶歌荡閸 ? ,
																areaId: "
									340121 "
															},
															{
																area: "閼层儰绗㈤崢 ? ,
									areaId: "
																340122 "
								},
								{
									area: "閼层儴銈块崢 ? ,
																areaId: "
									340123 "
															},
															{
																area: "鎼存劖鐫欓崢 ? ,
									areaId: "
																340124 "
								},
								{
									area: "瀹搞垺绠圭敮 ? ,
																areaId: "
									340181 "
															},
															{
																area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,areaId:"
																340184 "},{area:"妤傛ɑ鏌婇幎鈧張顖氱磻閸欐垵灏 ? ,
																areaId: "
									340185 "
															},
															{
																area: "閸栨鐓勯弬鏉垮隘",
																areaId: "
									340186 "
															},
															{
																area: "濠娿劍绠归弬鏉垮隘",
																areaId: "
									340187 "
															},
															{
																area: "閺€鍨閺傚洤瀵查弬鏉垮隘",
																areaId: "
									340188 "
															},
															{
																area: "閺傛壆鐝紒鐓庢値瀵偓閸欐垼鐦灞藉隘",
																areaId: "
									340189 "
															}]
														},
														{
															city: "閼烘粍绠圭敮 ? ,
									areaId: "
															340200 ",
									areaList: [{
										area: "闂€婊勭閸 ? ,
															areaId: "
										340202 "
														},
														{
															area: "瀵鐫欓崠 ? ,
										areaId: "
															340203 "
									},
									{
										area: "妤︾姵鐫欓崠 ? ,
															areaId: "
										340207 "
														},
														{
															area: "娑撳鍖楅崠 ? ,
										areaId: "
															340208 "
									},
									{
										area: "閼烘粍绠归崢 ? ,
															areaId: "
										340221 "
														},
														{
															area: "缁讳焦妲嶉崢 ? ,
										areaId: "
															340222 "
									},
									{
										area: "閸楁娅熼崢 ? ,
															areaId: "
										340223 "
														},
														{
															area: "閺冪姳璐熼崢 ? ,
										areaId: "
															340225 "
									},
									{
										area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏 ? ,
															areaId: "340226"
														}]
													},
													{
														city: "閾撳苯鐓氱敮?,areaId:"
														340300 ",areaList:[{area:"姒瑥鐡欏﹢鏍у隘",areaId:"
														340302 "},{area:"閾撳苯鍖楅崠 ? ,
														areaId: "340303"
													},
													{
														area: "缁傞€涚窗閸?,areaId:"
														340304 "},{area:"濞ｎ喕绗傞崠 ? ,
														areaId: "340311"
													},
													{
														area: "閹偓鏉╂粌骞?,
									areaId: "
														340321 "
								},
								{
									area: "娴滄梹娓ら崢 ? ,
														areaId: "
									340322 "
													},
													{
														area: "閸ユ椽鏅ｉ崢 ? ,
									areaId: "
														340323 "
								},
								{
									area: "妤傛ɑ鏌婇崠 ? ,
														areaId: "
									340324 "
													}]
												},
												{
													city: "濞ｎ喖宕＄敮 ? ,
									areaId: "
													340400 ",
									areaList: [{
										area: "婢堆団偓姘隘",
										areaId: "
													340402 "
									},
									{
										area: "閻㈡澘顔嶆惔闈涘隘",
										areaId: "
													340403 "
									},
									{
										area: "鐠嬨垹顔嶉梿鍡楀隘",
										areaId: "
													340404 "
									},
									{
										area: "閸忣偄鍙曠仦鍗炲隘",
										areaId: "
													340405 "
									},
									{
										area: "濞兼﹢娉﹂崠 ? ,
													areaId: "
										340406 "
												},
												{
													area: "閸戙倕褰撮崢 ? ,
										areaId: "
													340421 "
									},
									{
										area: "鐎靛灝骞 ? ,
													areaId: "340422"
												},
												{
													area: "鐏炲崬宕￠弬鏉垮隘",
													areaId: "340423"
												},
												{
													area: "濮ｆ盯娉︾€圭偤鐛欓崠?,areaId:"
													340424 "},{area:"缂佸繑绁瑰鈧崣鎴濆隘",areaId:"
													340425 "}]},{city:"妞诡剟鐎虹仦鍗炵",areaId:"
													340500 ",areaList:[{area:"閼哄崬鍖楅崠 ? ,
													areaId: "340503"
												},
												{
													area: "闂嗐劌鍖楅崠?,areaId:"
													340504 "},{area:"閸楁碍婀滈崠 ? ,
													areaId: "340506"
												},
												{
													area: "瑜版挻绉遍崢?,areaId:"
													340521 "},{area:"閸氼偄鍖楅崢 ? ,
													areaId: "340522"
												},
												{
													area: "閸滃苯骞?,
										areaId: "
													340523 "
									}]
								},
								{
									city: "濞ｎ喖瀵崇敮 ? ,
													areaId: "
									340600 ",
													areaList: [{
														area: "閺夋粓娉﹂崠 ? ,
									areaId: "
														340602 "
								},
								{
									area: "閻╃鍖楅崠 ? ,
														areaId: "
									340603 "
													},
													{
														area: "閻戝牆鍖楅崠 ? ,
									areaId: "
														340604 "
								},
								{
									area: "濠靛閭崢 ? ,
														areaId: "
									340621 "
													}]
												},
												{
													city: "闁炬粓娅熺敮 ? ,
									areaId: "
													340700 ",
									areaList: [{
										area: "闁炬粌鐣奸崠 ? ,
													areaId: "
										340705 "
												},
												{
													area: "娑斿鐣ㄩ崠 ? ,
										areaId: "
													340706 "
									},
									{
										area: "闁﹤灏 ? ,
													areaId: "340711"
												},
												{
													area: "閺嬬偤妲奸崢?,areaId:"
													340722 "}]},{city:"鐎瑰绨＄敮 ? ,
													areaId: "340800",
													areaList: [{
														area: "鏉╁孩鐫欓崠?,areaId:"
														340802 "},{area:"婢堆嗩潎閸 ? ?,
														areaId: "340803"
													},
													{
														area: "鐎规粎顫呴崠?,areaId:"
														340811 "},{area:"閹偓鐎逛礁骞 ? ,
														areaId: "
											340822 "
													},
													{
														area: "濞兼粌鍖楅崢 ? ,
											areaId: "
														340824 "
										},
										{
											area: "婢额亝绠归崢 ? ,
														areaId: "
											340825 "
													},
													{
														area: "鐎规寧婢楅崢 ? ,
											areaId: "
														340826 "
										},
										{
											area: "閺堟稒鐫欓崢 ? ,
														areaId: "
											340827 "
													},
													{
														area: "瀹€瀹犮偪閸?? ,
											areaId: "
														340828 "
										},
										{
											area: "濡楁劕鐓勭敮 ? ,
														areaId: "
											340881 "
													}]
												},
												{
													city: "姒涘嫬鍖楃敮 ? ,
											areaId: "
													341000 ",
											areaList: [{
												area: "鐏烆垱閭崠 ? ,
													areaId: "
												341002 "
												},
												{
													area: "姒涘嫬鍖楅崠 ? ,
												areaId: "
													341003 "
											},
											{
												area: "瀵拌棄绐為崠 ? ,
													areaId: "
												341004 "
												},
												{
													area: "濮濇瑥骞?,areaId:"
													341021 "},{area:"娴兼垵鐣為崢 ? ,
													areaId: "341022"
												},
												{
													area: "姒涚喎骞?,
												areaId: "
													341023 "
											},
											{
												area: "缁佷線妫崢 ? ,
													areaId: "
												341024 "
												}]
											},
											{
												city: "濠婁礁绐炵敮 ? ,
												areaId: "
												341100 ",
												areaList: [{
													area: "閻炲懐鎮愰崠 ? ,
												areaId: "
													341102 "
											},
											{
												area: "閸楁闅橀崠 ? ,
													areaId: "
												341103 "
												},
												{
													area: "閺夈儱鐣ㄩ崢 ? ,
												areaId: "
													341122 "
											},
											{
												area: "閸忋劍顦烽崢 ? ,
													areaId: "
												341124 "
												},
												{
													area: "鐎规俺绻欓崢 ? ,
												areaId: "
													341125 "
											},
											{
												area: "閸戙倝妲奸崢 ? ,
													areaId: "
												341126 "
												},
												{
													area: "婢垛晠鏆辩敮 ? ,
												areaId: "
													341181 "
											},
											{
												area: "閺勫骸鍘滅敮 ? ,
													areaId: "
												341182 "
												}]
											},
											{
												city: "闂冩粓妲肩敮 ? ,
												areaId: "
												341200 ",
												areaList: [{
													area: "妫板秴绐為崠 ? ,
												areaId: "
													341202 "
											},
											{
												area: "妫板秳绗㈤崠 ? ,
													areaId: "
												341203 "
												},
												{
													area: "妫板秵纭ラ崠 ? ,
												areaId: "
													341204 "
											},
											{
												area: "娑撳瓨纭ラ崢 ? ,
													areaId: "
												341221 "
												},
												{
													area: "婢额亜鎷伴崢 ? ,
												areaId: "
													341222 "
											},
											{
												area: "闂冩粌宕￠崢 ? ,
													areaId: "
												341225 "
												},
												{
													area: "妫板秳绗傞崢 ? ,
												areaId: "
													341226 "
											},
											{
												area: "閻ｅ矂顩荤敮 ? ,
													areaId: "
												341282 "
												},
												{
													area: "缂佸繑绁瑰鈧崣鎴濆隘",
													areaId: "
												341283 "
												}]
											},
											{
												city: "鐎瑰灝绐炵敮 ? ,
												areaId: "
												341300 ",
												areaList: [{
													area: "閸╁洦藟閸 ? ,
												areaId: "
													341302 "
											},
											{
												area: "閻偓鐏炲崬骞?,areaId:"
												341321 "},{area:"閽€褍骞 ? ,
												areaId: "
													341322 "
											},
											{
												area: "閻忕數鎸ч崢 ? ,
													areaId: "
												341323 "
												},
												{
													area: "濞夋骞 ? ,
												areaId: "341324"
											},
											{
												area: "缂佸繑绁瑰鈧崣鎴濆隘",
												areaId: "341325"
											}]
										},
										{
											city: "閸忣厼鐣ㄧ敮?,areaId:"
											341500 ",areaList:[{area:"闁叉垵鐣ㄩ崠 ? ,
											areaId: "341502"
										},
										{
											area: "鐟佹洖鐣ㄩ崠?,areaId:"
											341503 "},{area:"閸欏爼娉﹂崠 ? ,
											areaId: "341504"
										},
										{
											area: "闂囧秹鍋欓崢?,areaId:"
											341522 "},{area:"閼告帒鐓勯崢 ? ,
											areaId: "341523"
										},
										{
											area: "闁叉垵顕濋崢?,areaId:"
											341524 "},{area:"闂囧秴鍖楅崢 ? ,
											areaId: "341525"
										}]
									},
									{
										city: "娴滃啿绐炵敮?,areaId:"
										341600 ",areaList:[{area:"鐠嬵垰鐓勯崠 ? ,
										areaId: "341602"
									},
									{
										area: "濞戯繝妲奸崢?,areaId:"
										341621 "},{area:"閽傛瑥鐓勯崢 ? ,
										areaId: "341622"
									},
									{
										area: "閸掆晞绶甸崢?,areaId:"
										341623 "}]},{city:"濮圭姴绐炵敮 ? ,
										areaId: "341700",
										areaList: [{
											area: "鐠愬灚鐫滈崠?,areaId:"
											341702 "},{area:"娑撴粏鍤﹂崢 ? ,
											areaId: "341721"
										},
										{
											area: "閻啿褰撮崢?,areaId:"
											341722 "},{area:"闂堟帡妲奸崢 ? ,
											areaId: "341723"
										}]
									},
									{
										city: "鐎癸絽鐓勭敮?,areaId:"
										341800 ",areaList:[{area:"鐎癸絽绐為崠 ? ,
										areaId: "341802"
									},
									{
										area: "闁孩閭崢?,areaId:"
										341821 "},{area:"楠炲灝鐥夐崢 ? ,
										areaId: "341822"
									},
									{
										area: "濞夋儳骞?,
											areaId: "
										341823 "
										},
										{
											area: "缂佲晜閭崢 ? ,
										areaId: "
											341824 "
									},
									{
										area: "閺冨苯鐥夐崢 ? ,
											areaId: "
										341825 "
										},
										{
											area: "鐎逛礁娴楃敮 ? ,
										areaId: "
											341881 "
									}]
								}]
							},
							{
								province: "缁傚繐缂撻惇 ? ,
											areaId: "
								350000 ",
											cityList: [{
												city: "缁傚繐绐炵敮 ? ,
								areaId: "
												350100 ",
								areaList: [{
									area: "姒ф挻銈奸崠 ? ,
												areaId: "
									350102 "
											},
											{
												area: "閸欑増鐫欓崠 ? ,
									areaId: "
												350103 "
								},
								{
									area: "娴犳挸鍖楅崠 ? ,
												areaId: "
									350104 "
											},
											{
												area: "妞诡剙鐔崠 ? ,
									areaId: "
												350105 "
								},
								{
									area: "閺呭鐣ㄩ崠 ? ,
												areaId: "
									350111 "
											},
											{
												area: "闂傛垝璀﹂崢 ? ,
									areaId: "
												350121 "
								},
								{
									area: "鏉╃偞鐫欓崢 ? ,
												areaId: "
									350122 "
											},
											{
												area: "缂冩绨崢 ? ,
									areaId: "
												350123 "
								},
								{
									area: "闂傝姤绔婚崢 ? ,
												areaId: "
									350124 "
											},
											{
												area: "濮樺憡鍢查崢 ? ,
									areaId: "
												350125 "
								},
								{
									area: "楠炶櫕姹熼崢 ? ,
												areaId: "
									350128 "
											},
											{
												area: "缁傚繑绔荤敮 ? ,
									areaId: "
												350181 "
								},
								{
									area: "闂€澶哥閸?? ,
												areaId: "
									350182 "
											},
											{
												area: "缁傚繐绐為弬鏉垮隘",
												areaId: "
									350183 "
											}]
										},
										{
											city: "閸橈箓妫敮 ? ,
									areaId: "
											350200 ",
									areaList: [{
										area: "閹繃妲戦崠 ? ,
											areaId: "
										350203 "
										},
										{
											area: "濞撮攱閽甸崠 ? ,
										areaId: "
											350205 "
									},
									{
										area: "濠€鏍櫡閸?? ,
											areaId: "
										350206 "
										},
										{
											area: "闂嗗棛绶ㄩ崠 ? ,
										areaId: "
											350211 "
									},
									{
										area: "閸氬苯鐣ㄩ崠 ? ,
											areaId: "
										350212 "
										},
										{
											area: "缂堟柨鐣ㄩ崠 ? ,
										areaId: "
											350213 "
									}]
								},
								{
									city: "閼惧棛鏁敮 ? ,
											areaId: "
									350300 ",
											areaList: [{
												area: "閸╁骸甯伴崠 ? ,
									areaId: "
												350302 "
								},
								{
									area: "濞戝灚鐫欓崠 ? ,
												areaId: "
									350303 "
											},
											{
												area: "閼芥柨鐓勯崠 ? ,
									areaId: "
												350304 "
								},
								{
									area: "缁夆偓鐏炲灝灏?,areaId:"
									350305 "},{area:"娴犳瑦鐖堕崢 ? ,
									areaId: "350322"
								}]
							},
							{
								city: "娑撳妲戠敮?,areaId:"
								350400 ",areaList:[{area:"濮婂懎鍨崠 ? ,
								areaId: "350402"
							},
							{
								area: "娑撳鍘撻崠?,areaId:"
								350403 "},{area:"閺勫孩閭崢 ? ,
								areaId: "350421"
							},
							{
								area: "濞撳懏绁﹂崢?,areaId:"
								350423 "},{area:"鐎逛礁瀵查崢 ? ,
								areaId: "350424"
							},
							{
								area: "婢堆呮暞閸?,areaId:"
								350425 "},{area:"鐏忋倖閭崢 ? ,
								areaId: "350426"
							},
							{
								area: "濞屾瑥骞?,
											areaId: "
								350427 "
										},
										{
											area: "鐏忓棔绠伴崢 ? ,
								areaId: "
											350428 "
							},
							{
								area: "濞夋澘鐣為崢 ? ,
											areaId: "
								350429 "
										},
										{
											area: "瀵ゅ搫鐣為崢 ? ,
								areaId: "
											350430 "
							},
							{
								area: "濮樼鐣ㄧ敮 ? ,
											areaId: "
								350481 "
										}]
									},
									{
										city: "濞夊绐炵敮 ? ,
								areaId: "
										350500 ",
								areaList: [{
									area: "妞淬倕鐓勯崠 ? ,
										areaId: "
									350502 "
									},
									{
										area: "娑撶増杈伴崠 ? ,
									areaId: "
										350503 "
								},
								{
									area: "濞叉稒鐫欓崠 ? ,
										areaId: "
									350504 "
									},
									{
										area: "濞夊鑵愰崠 ? ,
									areaId: "
										350505 "
								},
								{
									area: "閹姴鐣ㄩ崢 ? ,
										areaId: "
									350521 "
									},
									{
										area: "鐎瑰閭崢 ? ,
									areaId: "
										350524 "
								},
								{
									area: "濮樺憡妲崢 ? ,
										areaId: "
									350525 "
									},
									{
										area: "瀵板嘲瀵查崢 ? ,
									areaId: "
										350526 "
								},
								{
									area: "闁叉垿妫崢 ? ,
										areaId: "
									350527 "
									},
									{
										area: "閻磭瀚敮 ? ,
									areaId: "
										350581 "
								},
								{
									area: "閺呭鐫欑敮 ? ,
										areaId: "
									350582 "
									},
									{
										area: "閸楁鐣ㄧ敮 ? ,
									areaId: "
										350583 "
								},
								{
									area: "閸欐澘鏅㈤幎鏇＄カ閸?? ,
										areaId: "
									350584 "
									},
									{
										area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏 ? ,
									areaId: "350585"
								},
								{
									area: "妤傛ɑ鏌婇幎鈧張顖氱磻閸欐垵灏?,
										areaId: "
									350586 "
									},
									{
										area: "缂佺厧鎮庢穱婵堚棧閸 ? ,
									areaId: "
										350587 "
								}]
							},
							{
								city: "濠曞啿绐炵敮 ? ,
										areaId: "
								350600 ",
										areaList: [{
											area: "閼烘鐓勯崠 ? ,
								areaId: "
											350602 "
							},
							{
								area: "姒瑦鏋冮崠 ? ,
											areaId: "
								350603 "
										},
										{
											area: "娴滄垿娓奸崢 ? ,
								areaId: "
											350622 "
							},
							{
								area: "濠曡櫕閮搁崢 ? ,
											areaId: "
								350623 "
										},
										{
											area: "鐠囧繐鐣ㄩ崢 ? ,
								areaId: "
											350624 "
							},
							{
								area: "闂€鎸庡槻閸?? ,
											areaId: "
								350625 "
										},
										{
											area: "娑撴粌鍖楅崢 ? ,
								areaId: "
											350626 "
							},
							{
								area: "閸楁娼犻崢 ? ,
											areaId: "
								350627 "
										},
										{
											area: "楠炲啿鎷伴崢 ? ,
								areaId: "
											350628 "
							},
							{
								area: "閸楀骸鐣ㄩ崢 ? ,
											areaId: "
								350629 "
										},
										{
											area: "姒瑦鎹ｇ敮 ? ,
								areaId: "
											350681 "
							}]
						},
						{
							city: "閸楁閽╃敮 ? ,
											areaId: "
							350700 ",
											areaList: [{
												area: "瀵よ泛閽╅崠 ? ,
							areaId: "
												350702 "
						},
						{
							area: "瀵ゆ椽妲奸崠 ? ,
												areaId: "
							350703 "
											},
											{
												area: "妞ょ儤妲嶉崢 ? ,
							areaId: "
												350721 "
						},
						{
							area: "濞达箑鐓勯崢 ? ,
												areaId: "
							350722 "
											},
											{
												area: "閸忓杈伴崢 ? ,
							areaId: "
												350723 "
						},
						{
							area: "閺夌偓閭崢 ? ,
												areaId: "
							350724 "
											},
											{
												area: "閺€鍨嫲閸 ? ,
							areaId: "
												350725 "
						},
						{
							area: "闁灚顒熺敮 ? ,
												areaId: "
							350781 "
											},
											{
												area: "濮濓箑銇楃仦鍗炵",
												areaId: "
							350782 "
											},
											{
												area: "瀵よ櫣鎽ㄧ敮 ? ,
							areaId: "
												350783 "
						}]
					},
					{
						city: "姒瑥鍗氱敮 ? ,
												areaId: "
						350800 ",
												areaList: [{
													area: "閺傛壆缍忛崠 ? ,
						areaId: "
													350802 "
					},
					{
						area: "濮樼鐣鹃崠 ? ,
													areaId: "
						350803 "
												},
												{
													area: "闂€鎸庣湰閸 ? ,
						areaId: "
													350821 "
					},
					{
						area: "娑撳﹥婢€閸?? ,
													areaId: "
						350823 "
												},
												{
													area: "濮濓箑閽╅崢 ? ,
						areaId: "
													350824 "
					},
					{
						area: "鏉╃偛鐓勯崢 ? ,
													areaId: "
						350825 "
												},
												{
													area: "濠曞啿閽╃敮 ? ,
						areaId: "
													350881 "
					}]
				},
				{
					city: "鐎逛礁鐥夌敮 ? ,
													areaId: "
					350900 ",
													areaList: [{
														area: "閽戝鐓勯崠 ? ,
					areaId: "
														350902 "
				},
				{
					area: "闂囩偞閮搁崢 ? ,
														areaId: "
					350921 "
													},
													{
														area: "閸欍倗鏁崢 ? ,
					areaId: "
														350922 "
				},
				{
					area: "鐏炲繐宕￠崢 ? ,
														areaId: "
					350923 "
													},
													{
														area: "鐎靛灝鐣為崢 ? ,
					areaId: "
														350924 "
				},
				{
					area: "閸涖劌鐣為崢 ? ,
														areaId: "
					350925 "
													},
													{
														area: "閺屾宕抽崢 ? ,
					areaId: "
														350926 "
				},
				{
					area: "缁傚繐鐣ㄧ敮 ? ,
														areaId: "
					350981 "
													},
													{
														area: "缁傚繘绱熺敮 ? ,
					areaId: "
														350982 "
				},
				{
					area: "娑撴粈椴稿鈧崣鎴濆隘",
					areaId: "
														350983 "
				}]
			}]
		},
		{
			province: "濮圭喕銈块惇 ? ,
														areaId: "
			360000 ",
														cityList: [{
															city: "閸楁妲嶇敮 ? ,
			areaId: "
															360100 ",
			areaList: [{
				area: "娑撴粍绠归崠 ? ,
															areaId: "
				360102 "
														},
														{
															area: "鐟楁寧绠归崠 ? ,
				areaId: "
															360103 "
			},
			{
				area: "闂堟帊绨拫鍗炲隘",
				areaId: "
															360104 "
			},
			{
				area: "濠€楣冨櫡閸?? ,
															areaId: "
				360105 "
														},
														{
															area: "闂堟帒鍖楀﹢鏍у隘",
															areaId: "
				360111 "
														},
														{
															area: "閺傛澘缂撻崠 ? ,
				areaId: "
															360112 "
			},
			{
				area: "閸楁妲嶉崢 ? ,
															areaId: "
				360121 "
														},
														{
															area: "鐎瑰绠熼崢 ? ,
				areaId: "
															360123 "
			},
			{
				area: "鏉╂稖鎼愰崢 ? ,
															areaId: "
				360124 "
														},
														{
															area: "缁俱垼鑳哄鈺傛煀閸 ? ,
				areaId: "
															360125 "
			},
			{
				area: "妤傛ɑ鏌婇崠 ? ,
															areaId: "
				360126 "
														},
														{
															area: "缂佸繑绁瑰鈧崣鎴濆隘",
															areaId: "
				360127 "
														},
														{
															area: "鐏忓繗鎽戝鈧崣鎴濆隘",
															areaId: "
				360128 "
														},
														{
															area: "濡楁垶鎹ｅ鈧崣鎴濆隘",
															areaId: "
				360129 "
														},
														{
															area: "閺堟稑鐓勯弬鏉垮隘",
															areaId: "
				360130 "
														},
														{
															area: "鐠э絾鐫欓弬鏉垮隘",
															areaId: "
				360131 "
														}]
													},
													{
														city: "閺咁垰鐥夐梹鍥х",
														areaId: "
				360200 ",
														areaList: [{
															area: "閺勫本鐫欓崠 ? ,
				areaId: "
															360202 "
			},
			{
				area: "閻濈姴鍖楅崠 ? ,
															areaId: "
				360203 "
														},
														{
															area: "濞搭喗顣﹂崢 ? ,
				areaId: "
															360222 "
			},
			{
				area: "娑旀劕閽╃敮 ? ,
															areaId: "
				360281 "
														}]
													},
													{
														city: "閽€宥勫焸鐢 ? ,
				areaId: "
														360300 ",
				areaList: [{
					area: "鐎瑰绨崠 ? ,
														areaId: "
					360302 "
													},
													{
														area: "濠€妯圭閸 ? ,
					areaId: "
														360313 "
				},
				{
					area: "閼捐尪濮抽崢 ? ,
														areaId: "
					360321 "
													},
													{
														area: "娑撳﹥鐗€閸 ? ,
					areaId: "
														360322 "
				},
				{
					area: "閼猴附閭崢 ? ,
														areaId: "
					360323 "
													}]
												},
												{
													city: "娑旀繃鐫欑敮 ? ,
					areaId: "
													360400 ",
					areaList: [{
						area: "濠靛倹閭崠 ? ,
													areaId: "
						360402 "
												},
												{
													area: "濞存棃妲奸崠 ? ,
						areaId: "
													360403 "
					},
					{
						area: "娑旀繃鐫欓崢 ? ,
													areaId: "
						360421 "
												},
												{
													area: "濮濓箑鐣為崢 ? ,
						areaId: "
													360423 "
					},
					{
						area: "娣囶喗鎸夐崢 ? ,
													areaId: "
						360424 "
												},
												{
													area: "濮橀晲鎱ㄩ崢 ? ,
						areaId: "
													360425 "
					},
					{
						area: "瀵板嘲鐣ㄩ崢 ? ,
													areaId: "
						360426 "
												},
												{
													area: "闁姤妲嶉崢 ? ,
						areaId: "
													360428 "
					},
					{
						area: "濠€鏍у經閸?? ,
													areaId: "
						360429 "
												},
												{
													area: "瑜邦厽杈伴崢 ? ,
						areaId: "
													360430 "
					},
					{
						area: "閻熺偞妲嶇敮 ? ,
													areaId: "
						360481 "
												},
												{
													area: "閸忛亶娼氶崺搴＄",
													areaId: "
						360482 "
												},
												{
													area: "鎼存劕鍖楃敮 ? ,
						areaId: "
													360483 "
					},
					{
						area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,areaId:"
						360484 "},{area:"閸忣偊鍣峰﹢鏍ㄦ煀閸 ? ?,
						areaId: "360485"
					},
					{
						area: "鎼存劕鍖楁搴㈡珯閸氬秷鍎ㄩ崠?,areaId:"
						360486 "},{area:"閺屽瓨顢栭崠 ? ,
						areaId: "360487"
					}]
				},
				{
					city: "閺傞缍戠敮?,areaId:"
					360500 ",areaList:[{area:"濞撴繃鎸夐崠 ? ,
					areaId: "360502"
				},
				{
					area: "閸掑棗鐤侀崢?,areaId:"
					360521 "}]},{city:"妤ｇ増姹熺敮 ? ,
					areaId: "360600",
					areaList: [{
						area: "閺堝牊绠归崠?,areaId:"
						360602 "},{area:"娴ｆ瑦鐫欓崢 ? ,
						areaId: "360622"
					},
					{
						area: "鐠愬灚閭敮?,areaId:"
						360681 "}]},{city:"鐠э絽绐炵敮 ? ,
						areaId: "360700",
						areaList: [{
							area: "缁旂姾纭€閸?,areaId:"
							360702 "},{area:"閸楁鎮嶉崠 ? ,
							areaId: "360703"
						},
						{
							area: "鐠э絽骞欓崠?,areaId:"
							360721 "},{area:"娣団€茶荡閸 ? ?,
							areaId: "360722"
						},
						{
							area: "婢堆傜稇閸?,areaId:"
							360723 "},{area:"娑撳﹦濮介崢 ? ,
							areaId: "360724"
						},
						{
							area: "瀹曞洣绠熼崢?,areaId:"
							360725 "},{area:"鐎瑰绻欓崢 ? ,
							areaId: "360726"
						},
						{
							area: "姒瑥宕￠崢?,areaId:"
							360727 "},{area:"鐎规艾宕￠崢 ? ,
							areaId: "360728"
						},
						{
							area: "閸忋劌宕￠崢?,areaId:"
							360729 "},{area:"鐎逛線鍏橀崢 ? ,
							areaId: "360730"
						},
						{
							area: "娴滃酣鍏橀崢?,areaId:"
							360731 "},{area:"閸忔潙娴楅崢 ? ,
							areaId: "360732"
						},
						{
							area: "娴兼碍妲嶉崢?,areaId:"
							360733 "},{area:"鐎佃绠ら崢 ? ,
							areaId: "360734"
						},
						{
							area: "閻啿鐓勯崢?,areaId:"
							360735 "},{area:"閻熺偤鍣剧敮 ? ,
							areaId: "360781"
						},
						{
							area: "缁旂姴鎮嶉弬鏉垮隘",
							areaId: "360782"
						}]
					},
					{
						city: "閸氬鐣ㄧ敮?,areaId:"
						360800 ",areaList:[{area:"閸氬绐為崠 ? ,
						areaId: "360802"
					},
					{
						area: "闂堟帒甯崠?,areaId:"
						360803 "},{area:"閸氬鐣ㄩ崢 ? ,
						areaId: "360821"
					},
					{
						area: "閸氬鎸夐崢?,areaId:"
						360822 "},{area:"瀹勨剝鐫欓崢 ? ,
						areaId: "360823"
					},
					{
						area: "閺傛澘鍏遍崢?,areaId:"
						360824 "},{area:"濮橀晲璧撮崢 ? ,
						areaId: "360825"
					},
					{
						area: "濞夋澘鎷伴崢?,areaId:"
						360826 "},{area:"闁倸绐涢崢 ? ,
						areaId: "360827"
					},
					{
						area: "娑撳洤鐣ㄩ崢?,areaId:"
						360828 "},{area:"鐎瑰顩撮崢 ? ,
						areaId: "360829"
					},
					{
						area: "濮樺憡鏌婇崢?,areaId:"
						360830 "},{area:"娴滄洖鍞哥仦鍗炵",areaId:"
						360881 "}]},{city:"鐎规粍妲敮 ? ,
						areaId: "360900",
						areaList: [{
							area: "鐞氫礁绐為崠?,areaId:"
							360902 "},{area:"婵傚鏌婇崢 ? ,
							areaId: "360921"
						},
						{
							area: "娑撳洩娴囬崢?,areaId:"
							360922 "},{area:"娑撳﹪鐝崢 ? ,
							areaId: "360923"
						},
						{
							area: "鐎规粈璧撮崢?,areaId:"
							360924 "},{area:"闂堟牕鐣ㄩ崢 ? ,
							areaId: "360925"
						},
						{
							area: "闁炬粓绱﹂崢?,areaId:"
							360926 "},{area:"娑撴澘鐓勭敮 ? ,
							areaId: "360981"
						},
						{
							area: "濡喐鐖茬敮?,areaId:"
							360982 "},{area:"妤傛ê鐣ㄧ敮 ? ,
							areaId: "360983"
						}]
					},
					{
						city: "閹舵艾绐炵敮?,areaId:"
						361000 ",areaList:[{area:"娑撴潙绐涢崠 ? ,
						areaId: "361002"
					},
					{
						area: "閸楁鐓勯崢?,areaId:"
						361021 "},{area:"姒涘骸绐涢崢 ? ,
						areaId: "361022"
					},
					{
						area: "閸楁ぞ璧撮崢?,areaId:"
						361023 "},{area:"瀹曞洣绮婇崢 ? ,
						areaId: "361024"
					},
					{
						area: "娑旀劕鐣ㄩ崢?,areaId:"
						361025 "},{area:"鐎规粓绮嶉崢 ? ,
						areaId: "361026"
					},
					{
						area: "闁叉垶閭崢?,areaId:"
						361027 "},{area:"鐠у嫭閭崢 ? ,
						areaId: "361028"
					},
					{
						area: "娑撴粈鍩傞崠?,areaId:"
						361029 "},{area:"楠炴寧妲嶉崢 ? ,
						areaId: "361030"
					}]
				},
				{
					city: "娑撳﹪銈剁敮?,areaId:"
					361100 ",areaList:[{area:"娣団€崇獮閸 ? ?,
					areaId: "361102"
				},
				{
					area: "楠炲じ璧撮崠?,areaId:"
					361103 "},{area:"娑撳﹪銈堕崢 ? ,
					areaId: "361121"
				},
				{
					area: "閻滃鍖楅崢?,areaId:"
					361123 "},{area:"闁惧懎鍖楅崢 ? ,
					areaId: "361124"
				},
				{
					area: "濡亜鍢查崢?,areaId:"
					361125 "},{area:"瀵妲奸崢 ? ,
					areaId: "361126"
				},
				{
					area: "娴ｆ瑥鍏遍崢?,areaId:"
					361127 "},{area:"闁亶妲奸崢 ? ,
					areaId: "361128"
				},
				{
					area: "娑撳洤鍕鹃崢?,areaId:"
					361129 "},{area:"婵犵儤绨崢 ? ,
					areaId: "361130"
				},
				{
					area: "瀵板嘲鍙寸敮?,areaId:"
					361181 "}]}]},{province:"鐏炲彉绗㈤惇 ? ,
					areaId: "370000",
					cityList: [{
						city: "濞村骸宕＄敮?,areaId:"
						370100 ",areaList:[{area:"閸樺棔绗呴崠 ? ,
						areaId: "370102"
					},
					{
						area: "鐢倷鑵戦崠?,areaId:"
						370103 "},{area:"濡叉劘宕奸崠 ? ,
						areaId: "370104"
					},
					{
						area: "婢垛晜藟閸?,areaId:"
						370105 "},{area:"閸樺棗鐓勯崠 ? ,
						areaId: "370112"
					},
					{
						area: "闂€鎸庣閸?,areaId:"
						370113 "},{area:"楠炴娊妲鹃崢 ? ,
						areaId: "370124"
					},
					{
						area: "濞村酣妲奸崢?,areaId:"
						370125 "},{area:"閸熷棙娓ら崢 ? ,
						areaId: "370126"
					},
					{
						area: "缁旂姳绗滈崠?,areaId:"
						370181 "},{area:"妤傛ɑ鏌婇崠 ? ,
						areaId: "370182"
					}]
				},
				{
					city: "闂堟帒鐭濈敮?,areaId:"
					370200 ",areaList:[{area:"鐢倸宕￠崠 ? ,
					areaId: "370202"
				},
				{
					area: "鐢倸瀵抽崠?,areaId:"
					370203 "},{area:"姒涘嫬鐭濋崠 ? ,
					areaId: "370211"
				},
				{
					area: "瀹曞倸鍖楅崠?,areaId:"
					370212 "},{area:"閺夊孩閽甸崠 ? ,
					areaId: "370213"
				},
				{
					area: "閸╁酣妲奸崠?,areaId:"
					370214 "},{area:"閼宠泛绐炵敮 ? ,
					areaId: "370281"
				},
				{
					area: "閸楀啿鈪烽崠?,areaId:"
					370282 "},{area:"楠炲啿瀹崇敮 ? ,
					areaId: "370283"
				},
				{
					area: "閼捐精銈跨敮?,areaId:"
					370285 "},{area:"鐟楁寧鎹ｅ畝鍛婃煀閸 ? ?,
					areaId: "370286"
				},
				{
					area: "妤傛ɑ鏌婇崠?,areaId:"
					370287 "}]},{city:"濞ｅ嫬宕ョ敮 ? ,
					areaId: "370300",
					areaList: [{
						area: "濞ｅ嫬绐涢崠?,areaId:"
						370302 "},{area:"瀵姴绨甸崠 ? ,
						areaId: "370303"
					},
					{
						area: "閸楁艾鍖楅崠?,areaId:"
						370304 "},{area:"娑撳瓨绌崠 ? ,
						areaId: "370305"
					},
					{
						area: "閸涖劍娼欓崠?,areaId:"
						370306 "},{area:"濡楁挸褰撮崢 ? ,
						areaId: "370321"
					},
					{
						area: "妤傛﹢娼氶崢?,areaId:"
						370322 "},{area:"濞屽倹绨崢 ? ,
						areaId: "370323"
					},
					{
						area: "妤傛ɑ鏌婇崠?,areaId:"
						370324 "}]},{city:"閺嬶絽绨炵敮 ? ,
						areaId: "370400",
						areaList: [{
							area: "鐢倷鑵戦崠?,areaId:"
							370402 "},{area:"閽栨稑鐓勯崠 ? ,
							areaId: "370403"
						},
						{
							area: "瀹勫嫬鐓勯崠?,areaId:"
							370404 "},{area:"閸欐澘鍔规惔鍕隘",areaId:"
							370405 "},{area:"鐏炲彉娑甸崠 ? ,
							areaId: "370406"
						},
						{
							area: "濠婃洖绐炵敮?,areaId:"
							370481 "},{area:"妤傛ɑ鏌婇崠 ? ,
							areaId: "370482"
						}]
					},
					{
						city: "娑撴粏鎯€鐢?,areaId:"
						370500 ",areaList:[{area:"娑撴粏鎯€閸 ? ?,
						areaId: "370502"
					},
					{
						area: "濞屽啿褰涢崠?,areaId:"
						370503 "},{area:"閸箑鍩勯崠 ? ,
						areaId: "370505"
					},
					{
						area: "閸掆晜瑙﹂崢?,areaId:"
						370522 "},{area:"楠炲潡銈堕崢 ? ,
						areaId: "370523"
					}]
				},
				{
					city: "閻戠喎褰寸敮?,areaId:"
					370600 ",areaList:[{area:"閼烘繄缍愰崠 ? ,
					areaId: "370602"
				},
				{
					area: "缁傚繐鍖楅崠?,areaId:"
					370611 "},{area:"閻楃喎閽╅崠 ? ,
					areaId: "370612"
				},
				{
					area: "閼惧崬鍖楅崠?,areaId:"
					370613 "},{area:"闂€鍨煗閸 ? ?,
					areaId: "370634"
				},
				{
					area: "姒瑥褰涚敮?,areaId:"
					370681 "},{area:"閼鹃亶妲肩敮 ? ,
					areaId: "370682"
				},
				{
					area: "閼惧崬绐炵敮?,areaId:"
					370683 "},{area:"閽冾剝骞堢敮 ? ,
					areaId: "370684"
				},
				{
					area: "閹锋稖绻欑敮?,areaId:"
					370685 "},{area:"閺嶆牠婀犵敮 ? ,
					areaId: "370686"
				},
				{
					area: "濞寸兘妲肩敮?,areaId:"
					370687 "},{area:"妤傛ɑ鏌婇崠 ? ,
					areaId: "370688"
				},
				{
					area: "缂佸繑绁瑰鈧崣鎴濆隘",
					areaId: "370689"
				}]
			},
			{
				city: "濞煎秴娼戠敮?,areaId:"
				370700 ",areaList:[{area:"濞煎秴鐓勯崠 ? ,
				areaId: "370702"
			},
			{
				area: "鐎垫帊娑甸崠?,areaId:"
				370703 "},{area:"閸у﹤鐡欓崠 ? ,
				areaId: "370704"
			},
			{
				area: "婵傚孩鏋冮崠?,areaId:"
				370705 "},{area:"娑撳瓨婀婇崢 ? ,
				areaId: "370724"
			},
			{
				area: "閺勫奔绠伴崢?,areaId:"
				370725 "},{area:"闂堟帒绐炵敮 ? ,
				areaId: "370781"
			},
			{
				area: "鐠囩鐓勭敮?,areaId:"
				370782 "},{area:"鐎靛灝鍘滅敮 ? ,
				areaId: "370783"
			},
			{
				area: "鐎瑰绗滅敮?,areaId:"
				370784 "},{area:"妤傛ê鐦戠敮 ? ,
				areaId: "370785"
			},
			{
				area: "閺勫矂鍊敮?,areaId:"
				370786 "},{area:"妤傛ɑ鏌婇崠 ? ,
				areaId: "370787"
			}]
		},
		{
			city: "濞村骸鐣炵敮?,areaId:"
			370800 ",areaList:[{area:"娴犺鐓勯崠 ? ,
			areaId: "370811"
		},
		{
			area: "閸忔牕绐為崠?,areaId:"
			370812 "},{area:"瀵邦喖鍖楅崢 ? ,
			areaId: "370826"
		},
		{
			area: "妤哥厧褰撮崢?,areaId:"
			370827 "},{area:"闁叉垳鍩傞崢 ? ,
			areaId: "370828"
		},
		{
			area: "閸㈠銈ラ崢?,areaId:"
			370829 "},{area:"濮规湹绗傞崢 ? ,
			areaId: "370830"
		},
		{
			area: "濞夋鎸夐崢?,areaId:"
			370831 "},{area:"濮婁礁鍖楅崢 ? ,
			areaId: "370832"
		},
		{
			area: "閺囨煡妲ｇ敮?,areaId:"
			370881 "},{area:"闁懓鐓勭敮 ? ,
			areaId: "370883"
		},
		{
			area: "妤傛ɑ鏌婇崠?,areaId:"
			370884 "}]},{city:"濞夋澘鐣ㄧ敮 ? ,
			areaId: "370900",
			areaList: [{
				area: "濞夋澘鍖楅崠?,areaId:"
				370902 "},{area:"瀹€鍗炴袱閸 ? ?,
				areaId: "370911"
			},
			{
				area: "鐎逛線妲奸崢?,areaId:"
				370921 "},{area:"娑撴粌閽╅崢 ? ,
				areaId: "370923"
			},
			{
				area: "閺傜増鍢茬敮?,areaId:"
				370982 "},{area:"閼层儱鐓勭敮 ? ,
				areaId: "370983"
			}]
		},
		{
			city: "婵炰焦鎹ｇ敮?,areaId:"
			371000 ",areaList:[{area:"閻滎垳绻濋崠 ? ,
			areaId: "371002"
		},
		{
			area: "閺傚洨娅ラ崠?,areaId:"
			371003 "},{area:"閼斤絾鍨氱敮 ? ,
			areaId: "371082"
		},
		{
			area: "娑斿啿鍖楃敮?,areaId:"
			371083 "}]},{city:"閺冦儳鍙庣敮 ? ,
			areaId: "371100",
			areaList: [{
				area: "娑撴粍鑵愰崠?,areaId:"
				371102 "},{area:"瀹€姘寳閸 ? ?,
				areaId: "371103"
			},
			{
				area: "娴滄棁骞夐崢?,areaId:"
				371121 "},{area:"閼炬帒骞 ? ,
				areaId: "
											371122 "
			}]
		},
		{
			city: "閼捐精濮曠敮 ? ,
											areaId: "
			371200 ",
											areaList: [{
												area: "閼惧崬鐓勯崠 ? ,
			areaId: "
												371202 "
		},
		{
			area: "闁姐垹鐓勯崠 ? ,
												areaId: "
			371203 "
											}]
										},
										{
											city: "娑撳瓨鐭€鐢 ? ,
			areaId: "
											371300 ",
			areaList: [{
				area: "閸忔澘鍖楅崠 ? ,
											areaId: "
				371302 "
										},
										{
											area: "缂冩绨為崠 ? ,
				areaId: "
											371311 "
			},
			{
				area: "濞屽厖绗㈤崠 ? ,
											areaId: "
				371312 "
										},
										{
											area: "濞屽倸宕￠崢 ? ,
				areaId: "
											371321 "
			},
			{
				area: "闁垰鐓勯崢 ? ,
											areaId: "
				371322 "
										},
										{
											area: "濞屽倹鎸夐崢 ? ,
				areaId: "
											371323 "
			},
			{
				area: "閸忎即娅熼崢 ? ,
											areaId: "
				371324 "
										},
										{
											area: "鐠愮懓骞 ? ,
				areaId: "371325"
			},
			{
				area: "楠炴娊鍊崢?,areaId:"
				371326 "},{area:"閼炬帒宕￠崢 ? ,
				areaId: "371327"
			},
			{
				area: "閽傛瑩妲鹃崢?,areaId:"
				371328 "},{area:"娑撳瓨绠旈崢 ? ,
				areaId: "371329"
			}]
		},
		{
			city: "瀵板嘲绐炵敮?,areaId:"
			371400 ",areaList:[{area:"瀵板嘲鐓勯崠 ? ,
			areaId: "371402"
		},
		{
			area: "闂勯潧鐓勯崠?,areaId:"
			371403 "},{area:"鐎逛焦瑙﹂崢 ? ,
			areaId: "371422"
		},
		{
			area: "鎼村棔绨崢?,areaId:"
			371423 "},{area:"娑撴挳鍊崢 ? ,
			areaId: "371424"
		},
		{
			area: "姒绘劖娓ら崢?,areaId:"
			371425 "},{area:"楠炲啿甯崢 ? ,
			areaId: "371426"
		},
		{
			area: "婢跺繑瑙﹂崢?,areaId:"
			371427 "},{area:"濮濓箑鐓勯崢 ? ,
			areaId: "371428"
		},
		{
			area: "娑旀劙娅熺敮?,areaId:"
			371481 "},{area:"缁傜懓鐓勭敮 ? ,
			areaId: "371482"
		}]
	},
	{
		city: "閼卞﹤鐓勭敮?,areaId:"
		371500 ",areaList:[{area:"娑撴粍妲嶆惔婊冨隘",areaId:"
		371502 "},{area:"闂冨疇鑳洪崢 ? ,
		areaId: "371521"
	},
	{
		area: "閼炬ê骞?,
									areaId: "
		371522 "
								},
								{
									area: "閼煎苯閽╅崢 ? ,
		areaId: "
									371523 "
	},
	{
		area: "娑撴粓妯嬮崢 ? ,
									areaId: "
		371524 "
								},
								{
									area: "閸愮姴骞 ? ,
		areaId: "371525"
	},
	{
		area: "妤傛ê鏀奸崢?,areaId:"
		371526 "},{area:"娑撳瓨绔荤敮 ? ,
		areaId: "371581"
	}]
},
{
	city: "濠娿劌绐炵敮?,areaId:"
	371600 ",areaList:[{area:"濠娿劌鐓勯崠 ? ,
	areaId: "371602"
},
{
	area: "濞屾儳瀵查崠?,areaId:"
	371603 "},{area:"閹姵鐨崢 ? ,
	areaId: "371621"
},
{
	area: "闂冨厖淇婇崢?,areaId:"
	371622 "},{area:"閺冪姵锛冮崢 ? ,
	areaId: "371623"
},
{
	area: "閸楁艾鍙撮崢?,areaId:"
	371625 "},{area:"闁懓閽╅崢 ? ,
	areaId: "371626"
},
{
	area: "閸栨鎹ｉ弬鏉垮隘",
	areaId: "371627"
}]
},
{
	city: "閼垮繑杈扮敮?,areaId:"
	371700 ",areaList:[{area:"閻椻€茶吂閸 ? ?,
	areaId: "371702"
},
{
	area: "鐎规岸娅犻崠?,areaId:"
	371703 "},{area:"閺囩懓骞 ? ,
	areaId: "
							371721 "
},
{
	area: "閸楁洖骞?,areaId:"
	371722 "},{area:"閹存劖顒熼崢 ? ,
	areaId: "371723"
},
{
	area: "瀹搞劑鍣归崢?,areaId:"
	371724 "},{area:"闁挸鐓勯崢 ? ,
	areaId: "371725"
},
{
	area: "闁嫬鐓勯崢?,areaId:"
	371726 "},{area:"娑撴粍妲戦崢 ? ,
	areaId: "371728"
}]
}]
},
{
	province: "濞屽啿宕￠惇?,areaId:"
	410000 ",cityList:[{city:"闁垵绐炵敮 ? ,
	areaId: "410100",
	areaList: [{
		area: "娑擃厼甯崠?,areaId:"
		410102 "},{area:"娴滃奔绔烽崠 ? ,
		areaId: "410103"
	},
	{
		area: "缁犫€崇厔閸ョ偞妫岄崠?,areaId:"
		410104 "},{area:"闁叉垶鎸夐崠 ? ,
		areaId: "410105"
	},
	{
		area: "娑撳﹨顢滈崠?,areaId:"
		410106 "},{area:"閹姵绁归崠 ? ,
		areaId: "410108"
	},
	{
		area: "娑擃厾澧撮崢?,areaId:"
		410122 "},{area:"瀹糕晙绠熺敮 ? ,
		areaId: "410181"
	},
	{
		area: "閼姐儵妲肩敮?,areaId:"
		410182 "},{area:"閺傛澘鐦戠敮 ? ,
		areaId: "410183"
	},
	{
		area: "閺備即鍎滅敮?,areaId:"
		410184 "},{area:"閻ц鐨濈敮 ? ,
		areaId: "410185"
	},
	{
		area: "闁垳绗㈤弬鏉垮隘",
		areaId: "410186"
	},
	{
		area: "闁垶璐濋弬鏉垮隘",
		areaId: "410187"
	},
	{
		area: "妤傛ɑ鏌婂鈧崣鎴濆隘",
		areaId: "410188"
	},
	{
		area: "缂佸繑绁瑰鈧崣鎴濆隘",
		areaId: "410189"
	}]
},
{
	city: "瀵偓鐏忎礁绔?,
					areaId: "
	410200 ",
					areaList: [{
						area: "姒瑤娑甸崠 ? ,
	areaId: "
						410202 "
},
{
	area: "妞ょ儤娓ら崶鐐存閸?? ,
						areaId: "
	410203 "
					},
					{
						area: "姒ф挻銈奸崠 ? ,
	areaId: "
						410204 "
},
{
	area: "缁傚湱甯囬崣鏉垮隘",
	areaId: "
						410205 "
},
{
	area: "缁併儳顑侀崠 ? ,
						areaId: "
	410212 "
					},
					{
						area: "閺夌偛骞 ? ,
	areaId: "410221"
},
{
	area: "闁俺顔忛崢?,areaId:"
	410222 "},{area:"鐏忓鐨崢 ? ,
	areaId: "410223"
},
{
	area: "閸忔媽鈧啫骞?,
						areaId: "
	410225 "
					},
					{
						area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏 ? ,
	areaId: "410226"
}]
},
{
	city: "濞叉盯妲肩敮?,areaId:"
	410300 ",areaList:[{area:"閼颁礁鐓勯崠 ? ,
	areaId: "410302"
},
{
	area: "鐟楀灝浼愰崠?,areaId:"
	410303 "},{area:"閻庡秵娓ら崶鐐存閸 ? ?,
	areaId: "410304"
},
{
	area: "濞懷嗐偪閸?,areaId:"
	410305 "},{area:"閸氬鍩勯崠 ? ,
	areaId: "410306"
},
{
	area: "濞叉盯绶抽崠?,areaId:"
	410311 "},{area:"鐎涚喐瑙﹂崢 ? ,
	areaId: "410322"
},
{
	area: "閺傛澘鐣ㄩ崢?,areaId:"
	410323 "},{area:"閺嶆儳绐涢崢 ? ,
	areaId: "410324"
},
{
	area: "瀹撯晛骞?,
					areaId: "
	410325 "
				},
				{
					area: "濮规繈妲奸崢 ? ,
	areaId: "
					410326 "
},
{
	area: "鐎规粓妲奸崢 ? ,
					areaId: "
	410327 "
				},
				{
					area: "濞叉稑鐣為崢 ? ,
	areaId: "
					410328 "
},
{
	area: "娴煎﹤绐涢崢 ? ,
					areaId: "
	410329 "
				},
				{
					area: "閸嬪啫绗€鐢 ? ,
	areaId: "
					410381 "
},
{
	area: "濞叉盯妲奸弬鏉垮隘",
	areaId: "
					410382 "
},
{
	area: "妤傛ɑ鏌婇崠 ? ,
					areaId: "
	410383 "
				}]
			},
			{
				city: "楠炴娊銆婄仦鍗炵",
				areaId: "
	410400 ",
				areaList: [{
					area: "閺傛澘宕曢崠 ? ,
	areaId: "
					410402 "
},
{
	area: "閸楊偂绗㈤崠 ? ,
					areaId: "
	410403 "
				},
				{
					area: "閻娊绶抽崠 ? ,
	areaId: "
					410404 "
},
{
	area: "濠€娑欐袱閸?? ,
					areaId: "
	410411 "
				},
				{
					area: "鐎规繀璧撮崢 ? ,
	areaId: "
					410421 "
},
{
	area: "閸欒泛骞?,areaId:"
	410422 "},{area:"妞翠礁鍖楅崢 ? ,
	areaId: "410423"
},
{
	area: "闁繐骞?,
					areaId: "
	410425 "
				},
				{
					area: "閼哥偤鎸楃敮 ? ,
	areaId: "
					410481 "
},
{
	area: "濮规繂绐炵敮 ? ,
					areaId: "
	410482 "
				}]
			},
			{
				city: "鐎瑰妲肩敮 ? ,
	areaId: "
				410500 ",
	areaList: [{
		area: "閺傚洤鍢查崠 ? ,
				areaId: "
		410502 "
			},
			{
				area: "閸栨鍙ч崠 ? ,
		areaId: "
				410503 "
	},
	{
		area: "濞堢兘鍏橀崠 ? ,
				areaId: "
		410505 "
			},
			{
				area: "姒瑥鐣ㄩ崠 ? ,
		areaId: "
				410506 "
	},
	{
		area: "鐎瑰妲奸崢 ? ,
				areaId: "
		410522 "
			},
			{
				area: "濮广倝妲鹃崢 ? ,
		areaId: "
				410523 "
	},
	{
		area: "濠婃垵骞?,areaId:"
		410526 "},{area:"閸愬懘绮嶉崢 ? ,
		areaId: "410527"
	},
	{
		area: "閺嬫绐炵敮?,areaId:"
		410581 "},{area:"鐎瑰妲奸弬鏉垮隘",areaId:"
		410582 "}]},{city:"妤ｃ倕顥嗙敮 ? ,
		areaId: "410600",
		areaList: [{
			area: "妤ｃ倕鍖楅崠?,areaId:"
			410602 "},{area:"鐏炲崬鐓勯崠 ? ,
			areaId: "410603"
		},
		{
			area: "濞ｅ洦鑺遍崠?,areaId:"
			410611 "},{area:"濞存艾骞 ? ,
			areaId: "
					410621 "
		},
		{
			area: "濞ｅ洤骞?,areaId:"
			410622 "}]},{city:"閺傞鍩傜敮 ? ,
			areaId: "410700",
			areaList: [{
				area: "缁俱垺妫楅崠?,areaId:"
				410702 "},{area:"閸楊偅鑺遍崠 ? ,
				areaId: "410703"
			},
			{
				area: "閸戙倖纭ラ崠?,areaId:"
				410704 "},{area:"閻椦囧櫣閸 ? ?,
				areaId: "410711"
			},
			{
				area: "閺傞鍩傞崢?,areaId:"
				410721 "},{area:"閼惧嘲妲堥崢 ? ,
				areaId: "410724"
			},
			{
				area: "閸樼喖妲奸崢?,areaId:"
				410725 "},{area:"瀵よ埖瑙﹂崢 ? ,
				areaId: "410726"
			},
			{
				area: "鐏忎椒绗滈崢?,areaId:"
				410727 "},{area:"闂€鍨亽閸 ? ?,
				areaId: "410728"
			},
			{
				area: "閸楊偉绶ｇ敮?,areaId:"
				410781 "},{area:"鏉堝骞欑敮 ? ,
				areaId: "410782"
			}]
		},
		{
			city: "閻掞缚缍旂敮?,areaId:"
			410800 ",areaList:[{area:"鐟欙絾鏂侀崠 ? ,
			areaId: "410802"
		},
		{
			area: "娑擃厾鐝崠?,areaId:"
			410803 "},{area:"妞诡剚娼欓崠 ? ,
			areaId: "410804"
		},
		{
			area: "鐏為亶妲奸崠?,areaId:"
			410811 "},{area:"娣囶喗顒熼崢 ? ,
			areaId: "410821"
		},
		{
			area: "閸楁氨鍩嶉崢?,areaId:"
			410822 "},{area:"濮濓箓娅夐崢 ? ,
			areaId: "410823"
		},
		{
			area: "濞撯晛骞?,
					areaId: "
			410825 "
				},
				{
					area: "濞屼線妲肩敮 ? ,
			areaId: "
					410882 "
		},
		{
			area: "鐎涚喎绐炵敮 ? ,
					areaId: "
			410883 "
				}]
			},
			{
				city: "濠殿噣妲肩敮 ? ,
			areaId: "
				410900 ",
			areaList: [{
				area: "閸楀酣绶抽崠 ? ,
				areaId: "
				410902 "
			},
			{
				area: "濞撳懍璧撮崢 ? ,
				areaId: "
				410922 "
			},
			{
				area: "閸楁ぞ绠伴崢 ? ,
				areaId: "
				410923 "
			},
			{
				area: "閼煎啫骞 ? ,
				areaId: "410926"
			},
			{
				area: "閸欐澘澧犻崢?,areaId:"
				410927 "},{area:"濠殿噣妲奸崢 ? ,
				areaId: "410928"
			}]
		},
		{
			city: "鐠佸憡妲嶇敮?,areaId:"
			411000 ",areaList:[{area:"姒勫繘鍏橀崠 ? ,
			areaId: "411002"
		},
		{
			area: "鐠佸憡妲嶉崢?,areaId:"
			411023 "},{area:"闁垽娅熼崢 ? ,
			areaId: "411024"
		},
		{
			area: "鐟楀嫬鐓勯崢?,areaId:"
			411025 "},{area:"缁傜懓绐炵敮 ? ,
			areaId: "411081"
		},
		{
			area: "闂€鑳喍鐢?,areaId:"
			411082 "}]},{city:"濠曨垱娓ょ敮 ? ,
			areaId: "411100",
			areaList: [{
				area: "濠ф劖鐪归崠?,areaId:"
				411102 "},{area:"闁儳鐓勯崠 ? ,
				areaId: "411103"
			},
			{
				area: "閸欘剟娅熼崠?,areaId:"
				411104 "},{area:"閼哥偤妲奸崢 ? ,
				areaId: "411121"
			},
			{
				area: "娑撴挳顣查崢?,areaId:"
				411122 "}]},{city:"娑撳妫畡鈥崇",areaId:"
				411200 ",areaList:[{area:"濠€鏍ㄨ姳閸 ? ?,
				areaId: "411202"
			},
			{
				area: "闂勬洖绐為崠?,areaId:"
				411203 "},{area:"濞撴垶鐫滈崢 ? ,
				areaId: "411221"
			},
			{
				area: "閸椼垺鐨崢?,areaId:"
				411224 "},{area:"娑斿鈹堢敮 ? ,
				areaId: "411281"
			},
			{
				area: "閻忛潧鐤傜敮?,areaId:"
				411282 "}]},{city:"閸楁妲肩敮 ? ,
				areaId: "411300",
				areaList: [{
					area: "鐎规稑鐓勯崠?,areaId:"
					411302 "},{area:"閸椦囩烦閸 ? ?,
					areaId: "411303"
				},
				{
					area: "閸楁褰崢?,areaId:"
					411321 "},{area:"閺傜懓鐓勯崢 ? ,
					areaId: "411322"
				},
				{
					area: "鐟楀灝鍦洪崢?,areaId:"
					411323 "},{area:"闂€鍥ч挬閸 ? ?,
					areaId: "411324"
				},
				{
					area: "閸愬懍鍩傞崢?,areaId:"
					411325 "},{area:"濞ｅ懎绐涢崢 ? ,
					areaId: "411326"
				},
				{
					area: "缁€鐐閸?,areaId:"
					411327 "},{area:"閸炴劖娓ら崢 ? ,
					areaId: "411328"
				},
				{
					area: "閺備即鍣归崢?,areaId:"
					411329 "},{area:"濡楁劖鐓嗛崢 ? ,
					areaId: "411330"
				},
				{
					area: "闁挸绐炵敮?,areaId:"
					411381 "}]},{city:"閸熷棔绗滅敮 ? ,
					areaId: "411400",
					areaList: [{
						area: "濮婁礁娲崠?,areaId:"
						411402 "},{area:"閻垽妲奸崠 ? ,
						areaId: "411403"
					},
					{
						area: "濮樻垶娼堥崢?,areaId:"
						411421 "},{area:"閻垹骞 ? ,
						areaId: "
						411422 "
					},
					{
						area: "鐎逛線娅熼崢 ? ,
						areaId: "
						411423 "
					},
					{
						area: "閺屾ê鐓勯崢 ? ,
						areaId: "
						411424 "
					},
					{
						area: "閾忕偛鐓勯崢 ? ,
						areaId: "
						411425 "
					},
					{
						area: "婢跺繘鍊崢 ? ,
						areaId: "
						411426 "
					},
					{
						area: "濮樼鐓勭敮 ? ,
						areaId: "
						411481 "
					}]
				},
				{
					city: "娣囷繝妲肩敮 ? ,
						areaId: "
					411500 ",
						areaList: [{
							area: "濞村娓ら崠 ? ,
					areaId: "
							411502 "
				},
				{
					area: "楠炶櫕藟閸 ? ,
							areaId: "
					411503 "
						},
						{
							area: "缂冩鍖楅崢 ? ,
					areaId: "
							411521 "
				},
				{
					area: "閸忓鍖楅崢 ? ,
							areaId: "
					411522 "
						},
						{
							area: "閺傛澘骞?,areaId:"
							411523 "},{area:"閸熷棗鐓勯崢 ? ,
							areaId: "411524"
						},
						{
							area: "閸ュ搫顫愰崢?,areaId:"
							411525 "},{area:"濞笺垹绐涢崢 ? ,
							areaId: "411526"
						},
						{
							area: "濞ｎ喗鑺遍崢?,areaId:"
							411527 "},{area:"閹垰骞 ? ,
							areaId: "
					411528 "
						}]
					},
					{
						city: "閸涖劌褰涚敮 ? ,
					areaId: "
						411600 ",
					areaList: [{
						area: "瀹告繃鐪归崠 ? ,
						areaId: "
						411602 "
					},
					{
						area: "閹佃埖鐭￠崢 ? ,
						areaId: "
						411621 "
					},
					{
						area: "鐟楀灝宕曢崢 ? ,
						areaId: "
						411622 "
					},
					{
						area: "閸熷棙鎸夐崢 ? ,
						areaId: "
						411623 "
					},
					{
						area: "濞屽牅绗滈崢 ? ,
						areaId: "
						411624 "
					},
					{
						area: "闁鐓勯崢 ? ,
						areaId: "
						411625 "
					},
					{
						area: "濞ｎ噣妲奸崢 ? ,
						areaId: "
						411626 "
					},
					{
						area: "婢额亜鎮嶉崢 ? ,
						areaId: "
						411627 "
					},
					{
						area: "妤ｅ潡鍊崢 ? ,
						areaId: "
						411628 "
					},
					{
						area: "妞ょ懓鐓勭敮 ? ,
						areaId: "
						411681 "
					},
					{
						area: "娑撴粍鏌婇崠 ? ,
						areaId: "
						411682 "
					},
					{
						area: "缂佸繑绁瑰鈧崣鎴濆隘",
						areaId: "
						411683 "
					}]
				},
				{
					city: "妞瑰鈹堟惔妤€绔?,areaId:"
					411700 ",areaList:[{area:"妞瑰灝鐓勯崠 ? ,
					areaId: "411702"
				},
				{
					area: "鐟楀灝閽╅崢?,areaId:"
					411721 "},{area:"娑撳﹨鏁楅崢 ? ,
					areaId: "411722"
				},
				{
					area: "楠炲疇鍨庨崢?,areaId:"
					411723 "},{area:"濮濓綁妲奸崢 ? ,
					areaId: "411724"
				},
				{
					area: "绾喖鍖楅崢?,areaId:"
					411725 "},{area:"濞夊矂妲奸崢 ? ,
					areaId: "411726"
				},
				{
					area: "濮规繂宕￠崢?,areaId:"
					411727 "},{area:"闁倸閽╅崢 ? ,
					areaId: "411728"
				},
				{
					area: "閺傛媽鏁楅崢?,areaId:"
					411729 "}]},{city:"濞村孩绨敮 ? ,
					areaId: "419001",
					areaList: [{
						area: "濞屼礁娲悰妤呬壕",
						areaId: "419011"
					},
					{
						area: "濞村孩鎸夌悰妤呬壕",
						areaId: "419012"
					},
					{
						area: "閸栨鎹ｇ悰妤呬壕",
						areaId: "419013"
					},
					{
						area: "婢垛晛娼х悰妤呬壕",
						areaId: "419014"
					},
					{
						area: "閻滃纭ョ悰妤呬壕",
						areaId: "419015"
					},
					{
						area: "閸忓绨抽梹?,areaId:"
						419016 "},{area:"娴滄棃绶抽崣锝夋櫍",areaId:"
						419017 "},{area:"濮娿劍鐏勯梹 ? ,
						areaId: "419018"
					},
					{
						area: "鏉為潧鐓勯梹?,areaId:"
						419019 "},{area:"閹佃法鏆€闂€ ? ,
						areaId: "419020"
					},
					{
						area: "閸р€炽仈闂€?,areaId:"
						419021 "},{area:"婢堆冨敱闂€ ? ,
						areaId: "419022"
					},
					{
						area: "闁潧甯梹?,areaId:"
						419023 "},{area:"閹繄銇滈梹 ? ,
						areaId: "419024"
					},
					{
						area: "閻滃鐪块梹?,areaId:"
						419025 "},{area:"娑撳鍠嶉梹 ? ,
						areaId: "419026"
					}]
				}]
			},
			{
				province: "濠€鏍у閻?,areaId:"
				420000 ",cityList:[{city:"濮濓附鐪界敮 ? ,
				areaId: "420100",
				areaList: [{
					area: "濮圭喎鍝洪崠?,areaId:"
					420102 "},{area:"濮圭喐鐪介崠 ? ,
					areaId: "420103"
				},
				{
					area: "绾艾褰涢崠?,areaId:"
					420104 "},{area:"濮瑰妲奸崠 ? ,
					areaId: "420105"
				},
				{
					area: "濮濓附妲嶉崠?,areaId:"
					420106 "},{area:"闂堟帒鍖楅崠 ? ,
					areaId: "420107"
				},
				{
					area: "濞差亜鍖楅崠?,areaId:"
					420111 "},{area:"娑撴粏銈垮﹢鏍у隘",areaId:"
					420112 "},{area:"濮瑰宕￠崠 ? ,
					areaId: "420113"
				},
				{
					area: "閽勶紕鏁婚崠?,areaId:"
					420114 "},{area:"濮圭喎顦撮崠 ? ,
					areaId: "420115"
				},
				{
					area: "姒涘嫰妾崠?,areaId:"
					420116 "},{area:"閺傜増搴婇崠 ? ,
					areaId: "420117"
				},
				{
					area: "缂佸繑绁归幎鈧張顖氱磻閸欐垵灏?,
						areaId: "
					420118 "
					}]
				},
				{
					city: "姒涘嫮鐓剁敮 ? ,
					areaId: "
					420200 ",
					areaList: [{
						area: "姒涘嫮鐓跺〒顖氬隘",
						areaId: "
					420202 "
					},
					{
						area: "鐟楀灝顢ｇ仦鍗炲隘",
						areaId: "
					420203 "
					},
					{
						area: "娑撳妾伴崠 ? ,
					areaId: "
						420204 "
				},
				{
					area: "闁句礁鍖楅崠 ? ,
						areaId: "
					420205 "
					},
					{
						area: "闂冭櫕鏌婇崢 ? ,
					areaId: "
						420222 "
				},
				{
					area: "婢堆冨枍鐢 ? ,
						areaId: "
					420281 "
					},
					{
						area: "缂佸繑绁瑰鈧崣鎴濆隘",
						areaId: "
					420282 "
					}]
				},
				{
					city: "閸椾礁鐗ョ敮 ? ,
					areaId: "
					420300 ",
					areaList: [{
						area: "閼煎懐顔勯崠 ? ,
					areaId: "
						420302 "
				},
				{
					area: "瀵姵鍜曢崠 ? ,
						areaId: "
					420303 "
					},
					{
						area: "闁囨Ъ閸 ? ,
					areaId: "
						420304 "
				},
				{
					area: "闁嗐偪閸?? ,
						areaId: "
					420322 "
					},
					{
						area: "缁旂懓鍖楅崢 ? ,
					areaId: "
						420323 "
				},
				{
					area: "缁旇閭崢 ? ,
						areaId: "
					420324 "
					},
					{
						area: "閹村灝骞 ? ,
					areaId: "420325"
				},
				{
					area: "娑撹鐫欓崣锝呯",
					areaId: "420381"
				}]
			},
			{
				city: "鐎规粍妲嶇敮?,areaId:"
				420500 ",areaList:[{area:"鐟楀潡娅熼崠 ? ,
				areaId: "420502"
			},
			{
				area: "娴煎秴顔嶅畝妤€灏?,
					areaId: "
				420503 "
				},
				{
					area: "閻愮懓鍟楅崠 ? ,
				areaId: "
					420504 "
			},
			{
				area: "閻氬洣娑甸崠 ? ,
					areaId: "
				420505 "
				},
				{
					area: "婢剁兘娅熼崠 ? ,
				areaId: "
					420506 "
			},
			{
				area: "鏉╂粌鐣ㄩ崢 ? ,
					areaId: "
				420525 "
				},
				{
					area: "閸忔潙鍖楅崢 ? ,
				areaId: "
					420526 "
			},
			{
				area: "缁夘厼缍婇崢 ? ,
					areaId: "
				420527 "
				},
				{
					area: "闂€鍧楁Ъ閸︾喎顔嶉弮蹇氬殰濞岃骞 ? ,
				areaId: "420528"
			},
			{
				area: "娴滄柨鍢查崷鐔奉啀閺冨繗鍤滃▽璇插箼",
				areaId: "420529"
			},
			{
				area: "鐎规粓鍏樼敮?,areaId:"
				420581 "},{area:"瑜版捇妲肩敮 ? ,
				areaId: "420582"
			},
			{
				area: "閺嬫繃鐫欑敮?,areaId:"
				420583 "},{area:"鐎规粍妲嶉弬鏉垮隘",areaId:"
				420584 "}]},{city:"鐟楀嫰妲肩敮 ? ,
				areaId: "420600",
				areaList: [{
					area: "鐟楀嫬鐓勯崠?,areaId:"
					420602 "},{area:"濡﹤鐓勯崠 ? ,
					areaId: "420606"
				},
				{
					area: "鐟楀嫬绐為崠?,areaId:"
					420607 "},{area:"閸楁姹查崢 ? ,
					areaId: "420624"
				},
				{
					area: "鐠嬪嘲鐓勯崢?,areaId:"
					420625 "},{area:"娣囨繂鎮嶉崢 ? ,
					areaId: "420626"
				},
				{
					area: "閼颁焦娓ら崣锝呯",
					areaId: "420682"
				},
				{
					area: "閺嬶綁妲肩敮?,areaId:"
					420683 "},{area:"鐎规粌鐓勭敮 ? ,
					areaId: "420684"
				},
				{
					area: "妤傛ɑ鏌婇崠?,areaId:"
					420685 "},{area:"缂佸繑绁瑰鈧崣鎴濆隘",areaId:"
					420686 "}]},{city:"闁倸绐炵敮 ? ,
					areaId: "420700",
					areaList: [{
						area: "濮婁礁鐡欏﹢鏍у隘",
						areaId: "420702"
					},
					{
						area: "閸楀骸顔愰崠?,areaId:"
						420703 "},{area:"闁倸鐓勯崠 ? ,
						areaId: "420704"
					}]
				},
				{
					city: "閼藉棝妫敮?,areaId:"
					420800 ",areaList:[{area:"娑撴粌鐤傞崠 ? ,
					areaId: "420802"
				},
				{
					area: "閹哄洤鍨侀崠?,areaId:"
					420804 "},{area:"娴滎剙鍖楃敮 ? ,
					areaId: "420821"
				},
				{
					area: "濞屾瑦纾遍崢?,areaId:"
					420822 "},{area:"闁界喓銈ョ敮 ? ,
					areaId: "420881"
				}]
			},
			{
				city: "鐎涙繃鍔呯敮?,areaId:"
				420900 ",areaList:[{area:"鐎涙繂宕￠崠 ? ,
				areaId: "420902"
			},
			{
				area: "鐎涙繃妲嶉崢?,areaId:"
				420921 "},{area:"婢堆勫亐閸 ? ?,
				areaId: "420922"
			},
			{
				area: "娴滄垶鈪甸崢?,areaId:"
				420923 "},{area:"鎼存柨鐓勭敮 ? ,
				areaId: "420981"
			},
			{
				area: "鐎瑰妾扮敮?,areaId:"
				420982 "},{area:"濮瑰绐涚敮 ? ,
				areaId: "420984"
			}]
		},
		{
			city: "閼藉棗绐炵敮?,areaId:"
			421000 ",areaList:[{area:"濞屾瑥绔堕崠 ? ,
			areaId: "421002"
		},
		{
			area: "閼藉棗绐為崠?,areaId:"
			421003 "},{area:"閸忣剙鐣ㄩ崢 ? ,
			areaId: "421022"
		},
		{
			area: "閻╂垵鍩勯崢?,areaId:"
			421023 "},{area:"濮圭喖娅熼崢 ? ,
			areaId: "421024"
		},
		{
			area: "閻娊顩荤敮?,areaId:"
			421081 "},{area:"濞差亝绠圭敮 ? ,
			areaId: "421083"
		},
		{
			area: "閺夌偓绮欑敮?,areaId:"
			421087 "}]},{city:"姒涘嫬鍞哥敮 ? ,
			areaId: "421100",
			areaList: [{
				area: "姒涘嫬绐為崠?,areaId:"
				421102 "},{area:"閸ャ垽顥撻崢 ? ,
				areaId: "421121"
			},
			{
				area: "缁俱垹鐣ㄩ崢?,areaId:"
				421122 "},{area:"缂冩鏁崢 ? ,
				areaId: "421123"
			},
			{
				area: "閼诲崬鍖楅崢?,areaId:"
				421124 "},{area:"濞寸姵鎸夐崢 ? ,
				areaId: "421125"
			},
			{
				area: "閽戝弶妲崢?,areaId:"
				421126 "},{area:"姒涘嫭顣崢 ? ,
				areaId: "421127"
			},
			{
				area: "妤硅鐓勭敮?,areaId:"
				421181 "},{area:"濮濓妇鈹愮敮 ? ,
				areaId: "421182"
			}]
		},
		{
			city: "閸滅鐣炵敮?,areaId:"
			421200 ",areaList:[{area:"閸滅鐣ㄩ崠 ? ,
			areaId: "421202"
		},
		{
			area: "閸㈠濂旈崢?,areaId:"
			421221 "},{area:"闁艾鐓勯崢 ? ,
			areaId: "421222"
		},
		{
			area: "瀹曞洭妲奸崢?,areaId:"
			421223 "},{area:"闁艾鍖楅崢 ? ,
			areaId: "421224"
		},
		{
			area: "鐠с倕顥嗙敮?,areaId:"
			421281 "}]},{city:"闂呭繐绐炵敮 ? ,
			areaId: "421300",
			areaList: [{
				area: "閺囬箖鍏橀崠?,areaId:"
				421303 "},{area:"闂呭繐骞 ? ,
				areaId: "
					421321 "
			},
			{
				area: "楠炴寧鎸夌敮 ? ,
					areaId: "
				421381 "
				}]
			},
			{
				city: "閹晜鏌﹂崷鐔奉啀閺冨繗瀚嶉弮蹇氬殰濞岃绐 ? ,
				areaId: "422800",
				areaList: [{
					area: "閹晜鏌︾敮?,areaId:"
					422801 "},{area:"閸掆晛绐涚敮 ? ,
					areaId: "422802"
				},
				{
					area: "瀵ゅ搫顫愰崢?,areaId:"
					422822 "},{area:"瀹哥繝绗㈤崢 ? ,
					areaId: "422823"
				},
				{
					area: "鐎癸絾浠奸崢?,areaId:"
					422825 "},{area:"閸滈晲璧撮崢 ? ,
					areaId: "422826"
				},
				{
					area: "閺夈儱鍤栭崢?,areaId:"
					422827 "},{area:"妤ｃ倕鍢查崢 ? ,
					areaId: "422828"
				}]
			},
			{
				city: "娴犳瑦顢堢敮?,areaId:"
				429004 ",areaList:[{area:"濞屾瑥妲剧悰妤呬壕",areaId:"
				429401 "},{area:"楠炲弶娓ょ悰妤呬壕",areaId:"
				429402 "},{area:"姒瑥宕曠仦杈敎闁 ? ?,
				areaId: "429403"
			},
			{
				area: "闁垵婧€闂€?,areaId:"
				429404 "},{area:"濮ｆ稑妲鹃梹 ? ,
				areaId: "429405"
			},
			{
				area: "鐠炲棙娓ら梹?,areaId:"
				429406 "},{area:"娑撳绱″顓㈡櫍",areaId:"
				429407 "},{area:"閼斥€虫簚闂€ ? ,
				areaId: "429408"
			},
			{
				area: "闂€鍨叓閸欙綁鏅?,
				areaId: "
				429409 "
			},
			{
				area: "鐟楁寧绁﹀▽鎶芥櫍",
				areaId: "
				429410 "
			},
			{
				area: "濞屾瑦绠归梹 ? ,
				areaId: "
				429411 "
			},
			{
				area: "閺夈劍鐏勭亸楣冩櫍",
				areaId: "
				429412 "
			},
			{
				area: "瑜邦厼婧€闂€ ? ,
				areaId: "
				429413 "
			},
			{
				area: "瀵姵鐭￠梹 ? ,
				areaId: "
				429414 "
			},
			{
				area: "闁厽娓ら梹 ? ,
				areaId: "
				429415 "
			},
			{
				area: "濞屾柨鐓勯梹 ? ,
				areaId: "
				429416 "
			},
			{
				area: "闁碍鎹ｉ崣锝夋櫍",
				areaId: "
				429417 "
			},
			{
				area: "闂勫牆婧€闂€ ? ,
				areaId: "
				429418 "
			},
			{
				area: "妤傛ɑ鏌婇崠 ? ,
				areaId: "
				429419 "
			},
			{
				area: "缂佸繑绁瑰鈧崣鎴濆隘",
				areaId: "
				429420 "
			},
			{
				area: "瀹搞儰绗熼崶顓炲隘",
				areaId: "
				429421 "
			},
			{
				area: "娑旀繂鎮庨崹绋垮斧缁夊秴婧€",
				areaId: "
				429422 "
			},
			{
				area: "濞屾瑦绠归崢鐔侯潚閸?? ,
				areaId: "
				429423 "
			},
			{
				area: "閹烘帗绠瑰〒鏂挎簚",
				areaId: "
				429424 "
			},
			{
				area: "娴滄梹绠瑰〒鏂挎簚",
				areaId: "
				429425 "
			},
			{
				area: "鐠т絻銈块崹鍛婄亜閸 ? ,
				areaId: "
				429426 "
			},
			{
				area: "閸掓ê顔嶉崹鍛婄亜閸?? ,
				areaId: "
				429427 "
			},
			{
				area: "閻ｆ粎顬夐懝顖滎潚閸 ? ,
				areaId: "
				429428 "
			}]
		},
		{
			city: "濞兼粍鐫欑敮 ? ,
				areaId: "
			429005 ",
				areaList: [{
					area: "閸ヮ厽鐏勭悰妤呬壕",
					areaId: "
			429501 "
				},
				{
					area: "楠炲灝宕 ? ,
			areaId: "429502"
		},
		{
			area: "閺夈劌绔?,
					areaId: "
			429503 "
				},
				{
					area: "閸涖劎鐓 ? ,
			areaId: "429504"
		},
		{
			area: "濞夎棄褰?,
					areaId: "
			429505 "
				},
				{
					area: "濞夐璧 ? ,
			areaId: "429506"
		},
		{
			area: "妤傛ê婧€",
			areaId: "429507"
		},
		{
			area: "閻斿﹤褰涢梹?,areaId:"
			429508 "},{area:"缁旇鐗村鈺呮櫍",areaId:"
			429509 "},{area:"妤傛鐓剁喊鎴︽櫍",areaId:"
			429510 "},{area:"閼颁焦鏌婇梹 ? ,
			areaId: "429511"
		},
		{
			area: "閻滃婧€闂€?,areaId:"
			429512 "},{area:"濞撴梹纾遍梹 ? ,
			areaId: "429513"
		},
		{
			area: "姒瑦鍜曢梹?,areaId:"
			429514 "},{area:"濞粹晛褰涢梹 ? ,
			areaId: "429515"
		},
		{
			area: "缁夘垳甯€閸欙綁鏅?,
					areaId: "
			429516 "
				},
				{
					area: "瀵娀鍣鹃梹 ? ,
			areaId: "
					429517 "
		},
		{
			area: "閻т粙寮撳﹢鏍吀閻炲棗灏?,areaId:"
			429518 "},{area:"閹褰涚粻锛勬倞閸 ? ?,
			areaId: "429519"
		},
		{
			area: "閻斿﹤褰涢崘婊冩簚缁狅紕鎮婇崠?,areaId:"
			429520 "},{area:"鏉╂劗浼﹢鏍吀閻炲棗灏 ? ,
			areaId: "
					429521 "
		},
		{
			area: "閸氬孩绠圭粻锛勬倞閸?? ,
					areaId: "
			429522 "
				},
				{
					area: "閸涖劎鐓荤粻锛勬倞閸 ? ,
			areaId: "
					429523 "
		},
		{
			area: "缂佸繑绁瑰鈧崣鎴濆隘",
			areaId: "
					429524 "
		}]
	},
	{
		city: "婢垛晠妫敮 ? ,
					areaId: "
		429006 ",
					areaList: [{
						area: "缁旂喖娅熺悰妤呬壕",
						areaId: "
		429601 "
					},
					{
						area: "閺夈劍鐏勭悰妤呬壕",
						areaId: "
		429602 "
					},
					{
						area: "娴ｆ稑鐡欑仦閬嶆櫍",
						areaId: "
		429603 "
					},
					{
						area: "婢舵艾鐤傞梹 ? ,
		areaId: "
						429604 "
	},
	{
		area: "閹锋牕绔堕梹 ? ,
						areaId: "
		429605 "
					},
					{
						area: "瀵姵鑵愰梹 ? ,
		areaId: "
						429606 "
	},
	{
		area: "閽傚婧€闂€ ? ,
						areaId: "
		429607 "
					},
					{
						area: "濮诡亜婧€闂€ ? ,
		areaId: "
						429608 "
	},
	{
		area: "濞撴棁鏌傞梹 ? ,
						areaId: "
		429609 "
					},
					{
						area: "姒涘嫭姹熼梹 ? ,
		areaId: "
						429610 "
	},
	{
		area: "瀹€鍐插經闂€ ? ,
						areaId: "
		429611 "
					},
					{
						area: "濡亝鐏勯梹 ? ,
		areaId: "
						429612 "
	},
	{
		area: "瑜邦厼绔堕梹 ? ,
						areaId: "
		429613 "
					},
					{
						area: "妤圭粯纾遍梹 ? ,
		areaId: "
						429614 "
	},
	{
		area: "婢舵氨銈ラ梹 ? ,
						areaId: "
		429615 "
					},
					{
						area: "楠炴煡鈹涢梹 ? ,
		areaId: "
						429616 "
	},
	{
		area: "妞诡剚鍜曢梹 ? ,
						areaId: "
		429617 "
					},
					{
						area: "閸椼垹绔堕梹 ? ,
		areaId: "
						429618 "
	},
	{
		area: "鐏忓繑婢橀梹 ? ,
						areaId: "
		429619 "
					},
					{
						area: "娑旀繄婀￠梹 ? ,
		areaId: "
						429620 "
	},
	{
		area: "閻ㄥ倸绔堕梹 ? ,
						areaId: "
		429621 "
					},
					{
						area: "閼斥€崇闂€ ? ,
		areaId: "
						429622 "
	},
	{
		area: "閻櫕娓ら梹 ? ,
						areaId: "
		429623 "
					},
					{
						area: "閸戔偓濞碱厺鍩 ? ,
		areaId: "429624"
	},
	{
		area: "閽傚绠归崘婊冩簚",
		areaId: "429625"
	},
	{
		area: "閻у€熷瘶濠€鏍у晿閸?,areaId:"
		429626 "},{area:"濞屽绠归弸妞剧瑹缁夋垶濡х粈楦垮瘱閸 ? ?,
		areaId: "429627"
	},
	{
		area: "婢垛晠妫銉ょ瑹閸?,areaId:"
		429628 "},{area:"娓氥劋鍩傜悰妤呬壕瀵偓閸欐垵灏 ? ,
		areaId: "
						429629 "
	}]
},
{
	city: "缁佺偛鍟橀弸鑸电亜閸?? ,
						areaId: "
	429021 ",
						areaList: [{
							area: "閺夌偓鐓嗛梹 ? ,
	areaId: "
							429022 "
},
{
	area: "闂冭櫕妫╅梹 ? ,
							areaId: "
	429023 "
						},
						{
							area: "閺堛劑濂旈梹 ? ,
	areaId: "
							429024 "
},
{
	area: "缁俱垹娼介梹 ? ,
							areaId: "
	429025 "
						},
						{
							area: "閺傛澘宕曢梹 ? ,
	areaId: "
							429026 "
},
{
	area: "婢堆傜瘈濠€ ? ,
							areaId: "
	429027 "
						},
						{
							area: "鐎瑰绀 ? ,
	areaId: "429028"
},
{
	area: "娑撳鑳洪崸顏冨焸",
	areaId: "429029"
}]
}]
},
{
	province: "濠€鏍у础閻?,areaId:"
	430000 ",cityList:[{city:"闂€鎸庣煓鐢 ? ?,
	areaId: "430100",
	areaList: [{
		area: "閼烘瑨鎼查崠?,areaId:"
		430102 "},{area:"婢垛晛绺鹃崠 ? ,
		areaId: "430103"
	},
	{
		area: "瀹€鎶界氨閸?,areaId:"
		430104 "},{area:"瀵偓缁傚繐灏 ? ,
		areaId: "
						430105 "
	},
	{
		area: "闂嗐劏濮抽崠 ? ,
						areaId: "
		430111 "
					},
					{
						area: "閺堟稑鐓勯崠 ? ,
		areaId: "
						430112 "
	},
	{
		area: "闂€鎸庣煓閸?? ,
						areaId: "
		430121 "
					},
					{
						area: "鐎逛椒鍩傞崢 ? ,
		areaId: "
						430124 "
	},
	{
		area: "濞村繘妲肩敮 ? ,
						areaId: "
		430181 "
					},
					{
						area: "濠€妯荤潤閺傛澘灏 ? ,
		areaId: "430182"
	}]
},
{
	city: "閺嶎亝搴婄敮?,areaId:"
	430200 ",areaList:[{area:"閼藉嘲顢濋崠 ? ,
	areaId: "430202"
},
{
	area: "閼猴附绐為崠?,areaId:"
	430203 "},{area:"閻啿鍢查崠 ? ,
	areaId: "430204"
},
{
	area: "婢垛晛鍘撻崠?,areaId:"
	430211 "},{area:"閺嶎亝搴婇崢 ? ,
	areaId: "430221"
},
{
	area: "閺€绋垮箼",
	areaId: "430223"
},
{
	area: "閼煎爼娅熼崢?,areaId:"
	430224 "},{area:"閻愬酣娅熼崢 ? ,
	areaId: "430225"
},
{
	area: "闁辨挳娅熺敮?,areaId:"
	430281 "}]},{city:"濠€妯绘睙鐢 ? ?,
	areaId: "430300",
	areaList: [{
		area: "闂嗐劍绠归崠?,areaId:"
		430302 "},{area:"瀹€鍐差敐閸 ? ?,
		areaId: "430304"
	},
	{
		area: "濠€妯绘睙閸?,areaId:"
		430321 "},{area:"濠€妯瑰焸鐢 ? ?,
		areaId: "430381"
	},
	{
		area: "闂婅泛鍖楃敮?,areaId:"
		430382 "},{area:"妤傛ɑ鏌婇崠 ? ,
		areaId: "430383"
	}]
},
{
	city: "鐞涳繝妲肩敮?,areaId:"
	430400 ",areaList:[{area:"閻濈姵娅€閸 ? ?,
	areaId: "430405"
},
{
	area: "闂嗕礁鍢查崠?,areaId:"
	430406 "},{area:"閻娊绱﹂崠 ? ,
	areaId: "430407"
},
{
	area: "閽傚憡绠婚崠?,areaId:"
	430408 "},{area:"閸楁娓ら崠 ? ,
	areaId: "430412"
},
{
	area: "鐞涳繝妲奸崢?,areaId:"
	430421 "},{area:"鐞涒€冲础閸 ? ?,
	areaId: "430422"
},
{
	area: "鐞涒€冲寳閸?,areaId:"
	430423 "},{area:"鐞涒€茬閸 ? ?,
	areaId: "430424"
},
{
	area: "缁佷椒绗㈤崢?,areaId:"
	430426 "},{area:"閼版帡妲肩敮 ? ,
	areaId: "430481"
},
{
	area: "鐢鐣炵敮?,areaId:"
	430482 "}]},{city:"闁敻妲肩敮 ? ,
	areaId: "430500",
	areaList: [{
		area: "閸欏本绔婚崠?,areaId:"
		430502 "},{area:"婢堆呫偉閸 ? ?,
		areaId: "430503"
	},
	{
		area: "閸栨顢欓崠?,areaId:"
		430511 "},{area:"闁吀绗㈤崢 ? ,
		areaId: "430521"
	},
	{
		area: "閺備即鍋熼崢?,areaId:"
		430522 "},{area:"闁敻妲奸崢 ? ,
		areaId: "430523"
	},
	{
		area: "闂呭棗娲栭崢?,areaId:"
		430524 "},{area:"濞茬偛褰涢崢 ? ,
		areaId: "430525"
	},
	{
		area: "缂併儱鐣為崢?,areaId:"
		430527 "},{area:"閺傛澘鐣為崢 ? ,
		areaId: "430528"
	},
	{
		area: "閸╁孩顒為懟妤佹閼奉亝涓嶉崢?,areaId:"
		430529 "},{area:"濮濓箑鍞哥敮 ? ,
		areaId: "430581"
	}]
},
{
	city: "瀹€鎶芥Ъ鐢?,areaId:"
	430600 ",areaList:[{area:"瀹€鎶芥Ъ濡ょ厧灏 ? ,
	areaId: "
					430602 "
},
{
	area: "娴滄垶閭崠 ? ,
					areaId: "
	430603 "
				},
				{
					area: "閸氭稑鍖楅崠 ? ,
	areaId: "
					430611 "
},
{
	area: "瀹€鎶芥Ъ閸?? ,
					areaId: "
	430621 "
				},
				{
					area: "閸楀骸顔愰崢 ? ,
	areaId: "
					430623 "
},
{
	area: "濠€姗€妲鹃崢 ? ,
					areaId: "
	430624 "
				},
				{
					area: "楠炶櫕鐫欓崢 ? ,
	areaId: "
					430626 "
},
{
	area: "濮广劎缍忕敮 ? ,
					areaId: "
	430681 "
				},
				{
					area: "娑撳瓨绠荤敮 ? ,
	areaId: "
					430682 "
}]
},
{
	city: "鐢鐥夌敮 ? ,
					areaId: "
	430700 ",
					areaList: [{
						area: "濮濓箓娅熼崠 ? ,
	areaId: "
						430702 "
},
{
	area: "姒у骸鐓勯崠 ? ,
						areaId: "
	430703 "
					},
					{
						area: "鐎瑰鍩傞崢 ? ,
	areaId: "
						430721 "
},
{
	area: "濮瑰顕撮崢 ? ,
						areaId: "
	430722 "
					},
					{
						area: "濠⒀冨箼",
						areaId: "
	430723 "
					},
					{
						area: "娑撳瓨鏅堕崢 ? ,
	areaId: "
						430724 "
},
{
	area: "濡楀啯绨崢 ? ,
						areaId: "
	430725 "
					},
					{
						area: "閻娊妫崢 ? ,
	areaId: "
						430726 "
},
{
	area: "濞层儱绔剁敮 ? ,
						areaId: "
	430781 "
					}]
				},
				{
					city: "瀵姴顔嶉悾灞界",
					areaId: "
	430800 ",
					areaList: [{
						area: "濮樼鐣鹃崠 ? ,
	areaId: "
						430802 "
},
{
	area: "濮濓箓娅熷┃鎰隘",
	areaId: "
						430811 "
},
{
	area: "閹卞牆鍩勯崢 ? ,
						areaId: "
	430821 "
					},
					{
						area: "濡楁垶顦查崢 ? ,
	areaId: "
						430822 "
}]
},
{
	city: "閻╁﹪妲肩敮 ? ,
						areaId: "
	430900 ",
						areaList: [{
							area: "鐠у嫰妲奸崠 ? ,
	areaId: "
							430902 "
},
{
	area: "鐠ь偄鍖楅崠 ? ,
							areaId: "
	430903 "
						},
						{
							area: "閸楁骞 ? ,
	areaId: "430921"
},
{
	area: "濡楀啯鐫欓崢?,areaId:"
	430922 "},{area:"鐎瑰瀵查崢 ? ,
	areaId: "430923"
},
{
	area: "濞屽懏鐫欑敮?,areaId:"
	430981 "}]},{city:"闁潙绐炵敮 ? ,
	areaId: "431000",
	areaList: [{
		area: "閸栨绠归崠?,areaId:"
		431002 "},{area:"閼诲繋绮伴崠 ? ,
		areaId: "431003"
	},
	{
		area: "濡楀倿妲奸崢?,areaId:"
		431021 "},{area:"鐎规粎鐝烽崢 ? ,
		areaId: "431022"
	},
	{
		area: "濮樼鍙撮崢?,areaId:"
		431023 "},{area:"閸㈠顬婇崢 ? ,
		areaId: "431024"
	},
	{
		area: "娑撳瓨顒熼崢?,areaId:"
		431025 "},{area:"濮规繂鐓勯崢 ? ,
		areaId: "431026"
	},
	{
		area: "濡楀倷绗㈤崢?,areaId:"
		431027 "},{area:"鐎瑰绮婇崢 ? ,
		areaId: "431028"
	},
	{
		area: "鐠у嫬鍙寸敮?,areaId:"
		431081 "}]},{city:"濮樼绐炵敮 ? ,
		areaId: "431100",
		areaList: [{
			area: "闂嗗爼娅熼崠?,areaId:"
			431102 "},{area:"閸愰攱鎸夊鈺佸隘",areaId:"
			431103 "},{area:"缁佷線妲奸崢 ? ,
			areaId: "431121"
		},
		{
			area: "娑撴粌鐣ㄩ崢?,areaId:"
			431122 "},{area:"閸欏瞼澧濋崢 ? ,
			areaId: "431123"
		},
		{
			area: "闁挸骞?,
									areaId: "
			431124 "
								},
								{
									area: "濮圭喐妗堥崢 ? ,
			areaId: "
									431125 "
		},
		{
			area: "鐎逛浇绻欓崢 ? ,
									areaId: "
			431126 "
								},
								{
									area: "閽冩繂鍖楅崢 ? ,
			areaId: "
									431127 "
		},
		{
			area: "閺傛壆鏁崢 ? ,
									areaId: "
			431128 "
								},
								{
									area: "濮圭喎宕曢悷鑸垫閼奉亝涓嶉崢 ? ,
			areaId: "
									431129 "
		}]
	},
	{
		city: "閹偓閸栨牕绔?,areaId:"
		431200 ",areaList:[{area:"妤ｃ倕鐓勯崠 ? ,
		areaId: "431202"
	},
	{
		area: "娑擃厽鏌熼崢?,areaId:"
		431221 "},{area:"濞屽懘娅熼崢 ? ,
		areaId: "431222"
	},
	{
		area: "鏉堢増閭崢?,areaId:"
		431223 "},{area:"濠у棙閮搁崢 ? ,
		areaId: "431224"
	},
	{
		area: "娴兼艾鎮撻崢?,areaId:"
		431225 "},{area:"妤瑰妲奸懟妤佹閼奉亝涓嶉崢 ? ,
		areaId: "431226"
	},
	{
		area: "閺傜増妾笟妤佹閼奉亝涓嶉崢?,areaId:"
		431227 "},{area:"閼洪攱鐫欐笟妤佹閼奉亝涓嶉崢 ? ,
		areaId: "431228"
	},
	{
		area: "闂堟牕绐為懟妤佹娓氭妫岄懛顏呬笉閸?,areaId:"
		431229 "},{area:"闁岸浜炬笟妤佹閼奉亝涓嶉崢 ? ,
		areaId: "431230"
	},
	{
		area: "濞差亝鐫欑敮?,areaId:"
		431281 "}]},{city:"婵炲嫬绨崇敮 ? ,
		areaId: "431300",
		areaList: [{
			area: "婵炲嫭妲﹂崠?,areaId:"
			431302 "},{area:"閸欏苯鍢查崢 ? ,
			areaId: "431321"
		},
		{
			area: "閺傛澘瀵查崢?,areaId:"
			431322 "},{area:"閸愰攱鎸夊Ч鐔风",areaId:"
			431381 "},{area:"濞戠喐绨敮 ? ,
			areaId: "431382"
		}]
	},
	{
		city: "濠€妯裤偪閸︾喎顔嶉弮蹇氬珝閺冨繗鍤滃▽璇茬獮",
		areaId: "433100",
		areaList: [{
			area: "閸氬顩荤敮?,areaId:"
			433101 "},{area:"濞夊憡閭崢 ? ,
			areaId: "433122"
		},
		{
			area: "閸戙倕鍤㈤崢?,areaId:"
			433123 "},{area:"閼哄崬鐏掗崢 ? ,
			areaId: "433124"
		},
		{
			area: "娣囨繈娼犻崢?,areaId:"
			433125 "},{area:"閸欍倓绗€閸 ? ?,
			areaId: "433126"
		},
		{
			area: "濮樻悂銆庨崢?,areaId:"
			433127 "},{area:"姒瑥鍖楅崢 ? ,
			areaId: "433130"
		}]
	}]
},
{
	province: "楠炲じ绗㈤惇?,areaId:"
	440000 ",cityList:[{city:"楠炲灝绐炵敮 ? ,
	areaId: "440100",
	areaList: [{
		area: "閼芥梹鍜曢崠?,areaId:"
		440103 "},{area:"鐡掑﹦顫呴崠 ? ,
		areaId: "440104"
	},
	{
		area: "濞撮褰旈崠?,areaId:"
		440105 "},{area:"婢垛晜娓ら崠 ? ,
		areaId: "440106"
	},
	{
		area: "閻ф垝绨崠?,areaId:"
		440111 "},{area:"姒涘嫬鐓嶉崠 ? ,
		areaId: "440112"
	},
	{
		area: "閻ｎ亞顬嗛崠?,areaId:"
		440113 "},{area:"閼洪亶鍏橀崠 ? ,
		areaId: "440114"
	},
	{
		area: "閸楁鐭欓崠?,areaId:"
		440115 "},{area:"娴犲骸瀵查崠 ? ,
		areaId: "440117"
	},
	{
		area: "婢х偛鐓勯崠?,areaId:"
		440118 "}]},{city:"闂婅泛鍙х敮 ? ,
		areaId: "440200",
		areaList: [{
			area: "濮濓附鐫欓崠?,areaId:"
			440203 "},{area:"濞村牊鐫欓崠 ? ,
			areaId: "440204"
		},
		{
			area: "閺囧弶鐫欓崠?,areaId:"
			440205 "},{area:"婵鍙撮崢 ? ,
			areaId: "440222"
		},
		{
			area: "娴犱礁瀵查崢?,areaId:"
			440224 "},{area:"缂堜焦绨崢 ? ,
			areaId: "440229"
		},
		{
			area: "娑旇櫕绨悷鑸垫閼奉亝涓嶉崢?,areaId:"
			440232 "},{area:"閺傞璧撮崢 ? ,
			areaId: "440233"
		},
		{
			area: "娑旀劖妲嶇敮?,areaId:"
			440281 "},{area:"閸楁娉熺敮 ? ,
			areaId: "440282"
		}]
	},
	{
		city: "濞ｅ崬婀风敮?,areaId:"
		440300 ",areaList:[{area:"缂冩绠归崠 ? ,
		areaId: "440303"
	},
	{
		area: "缁傚繒鏁崠?,areaId:"
		440304 "},{area:"閸楁鍖楅崠 ? ,
		areaId: "440305"
	},
	{
		area: "鐎规繂鐣ㄩ崠?,areaId:"
		440306 "},{area:"姒瑥鐭栭崠 ? ,
		areaId: "440307"
	},
	{
		area: "閻╂劗鏁崠?,areaId:"
		440308 "},{area:"姒瑥宕曢崠 ? ,
		areaId: "440309"
	},
	{
		area: "閸ь亜鍖楅崠?,areaId:"
		440310 "},{area:"閸忓妲戦崠 ? ,
		areaId: "440311"
	},
	{
		area: "婢堆囩閺傛澘灏?,
									areaId: "
		440312 "
								}]
							},
							{
								city: "閻濈姵鎹ｇ敮 ? ,
		areaId: "
								440400 ",
		areaList: [{
			area: "妫ｆ瑦搴婇崠 ? ,
								areaId: "
			440402 "
							},
							{
								area: "閺傛妫崠 ? ,
			areaId: "
								440403 "
		},
		{
			area: "闁叉垶鍜曢崠 ? ,
								areaId: "
			440404 "
							},
							{
								area: "濡亞鎯旈弬鏉垮隘",
								areaId: "
			440405 "
							},
							{
								area: "缂佸繑绁瑰鈧崣鎴濆隘",
								areaId: "
			440406 "
							}]
						},
						{
							city: "濮规洖銇旂敮 ? ,
			areaId: "
							440500 ",
			areaList: [{
				area: "姒瑦绠归崠 ? ,
							areaId: "
				440507 "
						},
						{
							area: "闁叉垵閽╅崠 ? ,
				areaId: "
							440511 "
			},
			{
				area: "濠电姵鐫欓崠 ? ,
							areaId: "
				440512 "
						},
						{
							area: "濞碱噣妲奸崠 ? ,
				areaId: "
							440513 "
			},
			{
				area: "濞碱喖宕￠崠 ? ,
							areaId: "
				440514 "
						},
						{
							area: "濠㈠嫭鎹ｉ崠 ? ,
				areaId: "
							440515 "
			},
			{
				area: "閸楁澧冮崢 ? ,
							areaId: "
				440523 "
						}]
					},
					{
						city: "娴ｆ稑鍖楃敮 ? ,
				areaId: "
						440600 ",
				areaList: [{
					area: "缁傚懎鐓勯崠 ? ,
						areaId: "
					440604 "
					},
					{
						area: "閸楁鎹ｉ崠 ? ,
					areaId: "
						440605 "
				},
				{
					area: "妞ゅ搫鐥夐崠 ? ,
						areaId: "
					440606 "
					},
					{
						area: "娑撳鎸夐崠 ? ,
					areaId: "
						440607 "
				},
				{
					area: "妤傛ɑ妲戦崠 ? ,
						areaId: "
					440608 "
					}]
				},
				{
					city: "濮圭喖妫敮 ? ,
					areaId: "
					440700 ",
					areaList: [{
						area: "閽冾剚鐫欓崠 ? ,
					areaId: "
						440703 "
				},
				{
					area: "濮圭喐鎹ｉ崠 ? ,
						areaId: "
					440704 "
					},
					{
						area: "閺傞绱伴崠 ? ,
					areaId: "
						440705 "
				},
				{
					area: "閸欐澘鍖楃敮 ? ,
						areaId: "
					440781 "
					},
					{
						area: "瀵偓楠炲啿绔?,areaId:"
						440783 "},{area:"妤ｃ倕鍖楃敮 ? ,
						areaId: "440784"
					},
					{
						area: "閹晛閽╃敮?,areaId:"
						440785 "}]},{city:"濠€娑欑潤鐢 ? ?,
						areaId: "440800",
						areaList: [{
							area: "鐠с倕娼曢崠?,areaId:"
							440802 "},{area:"闂囩偛鍖楅崠 ? ,
							areaId: "440803"
						},
						{
							area: "閸р€炽仈閸?,areaId:"
							440804 "},{area:"妤硅崵鐝烽崠 ? ,
							areaId: "440811"
						},
						{
							area: "闁倹閭崢?,areaId:"
							440823 "},{area:"瀵版劙妞堥崢 ? ,
							areaId: "440825"
						},
						{
							area: "瀵ゅ鐫欑敮?,areaId:"
							440881 "},{area:"闂嗗嘲绐炵敮 ? ,
							areaId: "440882"
						},
						{
							area: "閸氭潙绐涚敮?,areaId:"
							440883 "},{area:"缂佸繑绁瑰鈧崣鎴濆隘",areaId:"
							440884 "}]},{city:"閼煎倸鎮曠敮 ? ,
							areaId: "440900",
							areaList: [{
								area: "閼煎倸宕￠崠?,areaId:"
								440902 "},{area:"閻㈢數娅ч崠 ? ,
								areaId: "440904"
							},
							{
								area: "妤傛ê绐炵敮?,areaId:"
								440981 "},{area:"閸栨牕绐炵敮 ? ,
								areaId: "440982"
							},
							{
								area: "娣団€崇杹鐢?,areaId:"
								440983 "}]},{city:"閼插洤绨＄敮 ? ,
								areaId: "441200",
								areaList: [{
									area: "缁旑垰绐為崠?,areaId:"
									441202 "},{area:"姒у孩绠归崠 ? ,
									areaId: "441203"
								},
								{
									area: "妤傛顩﹂崠?,areaId:"
									441204 "},{area:"楠炲灝鐣為崢 ? ,
									areaId: "441223"
								},
								{
									area: "閹偓闂嗗棗骞?,
								areaId: "
									441224 "
							},
							{
								area: "鐏忎礁绱戦崢 ? ,
									areaId: "
								441225 "
								},
								{
									area: "瀵板嘲绨￠崢 ? ,
								areaId: "
									441226 "
							},
							{
								area: "閸ユ稐绱扮敮 ? ,
									areaId: "
								441284 "
								}]
							},
							{
								city: "閹姴绐炵敮 ? ,
								areaId: "
								441300 ",
								areaList: [{
									area: "閹姴鐓勯崠 ? ,
								areaId: "
									441302 "
							},
							{
								area: "閹娀妲奸崠 ? ,
									areaId: "
								441303 "
								},
								{
									area: "閸楁氨缍忛崢 ? ,
								areaId: "
									441322 "
							},
							{
								area: "閹姳绗㈤崢 ? ,
									areaId: "
								441323 "
								},
								{
									area: "姒瑩妫崢 ? ,
								areaId: "
									441324 "
							},
							{
								area: "婢堆傜肮濠€鎯у隘",
								areaId: "
									441325 "
							}]
						},
						{
							city: "濮婂懎绐炵敮 ? ,
									areaId: "
							441400 ",
									areaList: [{
										area: "濮婂懏鐫欓崠 ? ,
							areaId: "
										441402 "
						},
						{
							area: "濮婂懎骞欓崠 ? ,
										areaId: "
							441403 "
									},
									{
										area: "婢堆冪厤閸 ? ,
							areaId: "
										441422 "
						},
						{
							area: "娑撲即銆庨崢 ? ,
										areaId: "
							441423 "
									},
									{
										area: "娴滄柨宕曢崢 ? ,
							areaId: "
										441424 "
						},
						{
							area: "楠炲疇绻欓崢 ? ,
										areaId: "
							441426 "
									},
									{
										area: "閽戝绠旈崢 ? ,
							areaId: "
										441427 "
						},
						{
							area: "閸忔潙鐣炵敮 ? ,
										areaId: "
							441481 "
									}]
								},
								{
									city: "濮规洖鐔敮 ? ,
							areaId: "
									441500 ",
							areaList: [{
								area: "閸╁骸灏?,areaId:"
								441502 "},{area:"濞磋渹璧撮崢 ? ,
								areaId: "441521"
							},
							{
								area: "闂勫棙娓ら崢?,areaId:"
								441523 "},{area:"闂勫棔璧寸敮 ? ,
								areaId: "441581"
							}]
						},
						{
							city: "濞岃櫕绨敮?,areaId:"
							441600 ",areaList:[{area:"濠ф劕鐓勯崠 ? ,
							areaId: "441602"
						},
						{
							area: "缁鳖偊鍣鹃崢?,areaId:"
							441621 "},{area:"姒瑥绐涢崢 ? ,
							areaId: "441622"
						},
						{
							area: "鏉╃偛閽╅崢?,areaId:"
							441623 "},{area:"閸滃苯閽╅崢 ? ,
							areaId: "441624"
						},
						{
							area: "娑撴粍绨崢?,areaId:"
							441625 "}]},{city:"闂冭櫕鐫欑敮 ? ,
							areaId: "441700",
							areaList: [{
								area: "濮圭喎鐓勯崠?,areaId:"
								441702 "},{area:"闂冨厖绗㈤崠 ? ,
								areaId: "441704"
							},
							{
								area: "闂冨疇銈块崢?,areaId:"
								441721 "},{area:"闂冭櫕妲敮 ? ,
								areaId: "441781"
							}]
						},
						{
							city: "濞撳懓绻欑敮?,areaId:"
							441800 ",areaList:[{area:"濞撳懎鐓勯崠 ? ,
							areaId: "441802"
						},
						{
							area: "濞撳懏鏌婇崠?,areaId:"
							441803 "},{area:"娴ｆ稑鍞搁崢 ? ,
							areaId: "441821"
						},
						{
							area: "闂冨啿鍖楅崢?,areaId:"
							441823 "},{area:"鏉╃偛鍖楁竟顔芥閻熻埖妫岄懛顏呬笉閸 ? ?,
							areaId: "441825"
						},
						{
							area: "鏉╃偛宕￠悷鑸垫閼奉亝涓嶉崢?,areaId:"
							441826 "},{area:"閼诲崬鐥夌敮 ? ,
							areaId: "441881"
						},
						{
							area: "鏉╃偛绐炵敮?,areaId:"
							441882 "}]},{city:"娑撴粏甯敮 ? ,
							areaId: "441900",
							areaList: [{
								area: "閼剧偛鐓勭悰妤呬壕",
								areaId: "441901"
							},
							{
								area: "閸楁鐓勭悰妤呬壕",
								areaId: "441902"
							},
							{
								area: "娑撴粌鐓勯崠?,areaId:"
								441903 "},{area:"娑撳洦鐫欑悰妤呬壕",areaId:"
								441904 "},{area:"閻磭鈪查梹 ? ,
								areaId: "441905"
							},
							{
								area: "閻娊绶抽梹?,areaId:"
								441906 "},{area:"閼艰泛鍖楅梹 ? ,
								areaId: "441907"
							},
							{
								area: "閻櫕甯撻梹?,areaId:"
								441908 "},{area:"娴间胶鐓堕梹 ? ,
								areaId: "441909"
							},
							{
								area: "濡亝鎾梹?,areaId:"
								441910 "},{area:"濡椼儱銇旈梹 ? ,
								areaId: "441911"
							},
							{
								area: "鐠嬨垹鐭栭梹?,areaId:"
								441912 "},{area:"娑撴粌娼欓梹 ? ,
								areaId: "441913"
							},
							{
								area: "鐢閽╅梹?,areaId:"
								441914 "},{area:"鐎殿喗顒為梹 ? ,
								areaId: "441915"
							},
							{
								area: "婢堆勬箷闂€?,areaId:"
								441916 "},{area:"妤圭粯绉鹃梹 ? ,
								areaId: "441917"
							},
							{
								area: "娑擃厼鐖為梹?,areaId:"
								441918 "},{area:"妤傛ê鐓戦梹 ? ,
								areaId: "441919"
							},
							{
								area: "濡喐婀径鎾櫍",
								areaId: "441920"
							},
							{
								area: "婢堆冪當鐏為亶鏅?,
									areaId: "
								441921 "
								},
								{
									area: "閺堟稓澧版晶鈺呮櫍",
									areaId: "
								441922 "
								},
								{
									area: "姒涘嫭鐫欓梹 ? ,
								areaId: "
									441923 "
							},
							{
								area: "濞差亝顣梹 ? ,
									areaId: "
								441924 "
								},
								{
									area: "濞撳懏閭梹 ? ,
								areaId: "
									441925 "
							},
							{
								area: "濞屾瑧鏁梹 ? ,
									areaId: "
								441926 "
								},
								{
									area: "闁挻绮梹 ? ,
								areaId: "
									441927 "
							},
							{
								area: "婵夋ê甯甸梹 ? ,
									areaId: "
								441928 "
								},
								{
									area: "閾忓酣妫梹 ? ,
								areaId: "
									441929 "
							},
							{
								area: "閸樻俺顢滈梹 ? ,
									areaId: "
								441930 "
								},
								{
									area: "閸戙倕鐭栭梹 ? ,
								areaId: "
									441931 "
							},
							{
								area: "闂€鍨暔闂€ ? ,
									areaId: "
								441932 "
								},
								{
									area: "閺夋儳鍖楀﹢鏍吀婵柧绱 ? ,
								areaId: "441933"
							},
							{
								area: "閾忓酣妫〒顖滎吀婵柧绱?,
									areaId: "
								441934 "
								},
								{
									area: "娑撴粏甯悽鐔糕偓浣告疮",
									areaId: "
								441935 "
								}]
							},
							{
								city: "娑擃厼鍖楃敮 ? ,
								areaId: "
								442000 ",
								areaList: [{
									area: "閻啿鐭忛崠楦款敎闁?? ,
								areaId: "
									442001 "
							},
							{
								area: "娑撴粌灏悰妤呬壕",
								areaId: "
									442002 "
							},
							{
								area: "鐟楀灝灏悰妤呬壕",
								areaId: "
									442003 "
							},
							{
								area: "閸楁灏悰妤呬壕",
								areaId: "
									442004 "
							},
							{
								area: "娴滄梹顢囩仦杈敎闁 ? ,
									areaId: "
								442005 "
								},
								{
									area: "閻忣偆鍋撳鈧崣鎴濆隘鐞涙浜?,areaId:"
									442006 "},{area:"姒涘嫬娓婚梹 ? ,
									areaId: "442007"
								},
								{
									area: "閸楁銇旈梹?,areaId:"
									442008 "},{area:"娑撴粌鍤栭梹 ? ,
									areaId: "442009"
								},
								{
									area: "闂冩粍鐭欓梹?,areaId:"
									442010 "},{area:"鐏忓繑顩╅梹 ? ,
									areaId: "442011"
								},
								{
									area: "娑撴粌宕岄梹?,areaId:"
									442012 "},{area:"閸欍倝鏅ｉ梹 ? ,
									areaId: "442013"
								},
								{
									area: "濡亝鐖梹?,areaId:"
									442014 "},{area:"娑撳顫楅梹 ? ,
									areaId: "442015"
								},
								{
									area: "濮樻垳绱梹?,areaId:"
									442016 "},{area:"閸楁婀曢梹 ? ,
									areaId: "442017"
								},
								{
									area: "濞擃垰褰涢梹?,areaId:"
									442018 "},{area:"婢堆勭Ь闂€ ? ,
									areaId: "442019"
								},
								{
									area: "濞屾瑦閭梹?,areaId:"
									442020 "},{area:"娑撳鍩傞梹 ? ,
									areaId: "442021"
								},
								{
									area: "閺夎儻濮嶉梹?,areaId:"
									442022 "},{area:"缁佺偞鍜曢梹 ? ,
									areaId: "442023"
								},
								{
									area: "閸э附搴婇梹?,areaId:"
									442024 "}]},{city:"濞碱喖绐炵敮 ? ,
									areaId: "445100",
									areaList: [{
										area: "濠€妯凰夐崠?,areaId:"
										445102 "},{area:"濞碱喖鐣ㄩ崠 ? ,
										areaId: "445103"
									},
									{
										area: "妤楄泛閽╅崢?,areaId:"
										445122 "}]},{city:"閹活參妲肩敮 ? ,
										areaId: "445200",
										areaList: [{
											area: "濮掓洖鐓勯崠?,areaId:"
											445202 "},{area:"閹活厺绗㈤崠 ? ,
											areaId: "445203"
										},
										{
											area: "閹活叀銈块崢?,areaId:"
											445222 "},{area:"閹姵娼甸崢 ? ,
											areaId: "445224"
										},
										{
											area: "閺咁喖鐣炵敮?,areaId:"
											445281 "}]},{city:"娴滄垶璇炵敮 ? ,
											areaId: "445300",
											areaList: [{
												area: "娴滄垵鐓勯崠?,areaId:"
												445302 "},{area:"娴滄垵鐣ㄩ崠 ? ,
												areaId: "445303"
											},
											{
												area: "閺傛澘鍙撮崢?,areaId:"
												445321 "},{area:"闁礁宕￠崢 ? ,
												areaId: "445322"
											},
											{
												area: "缂冩鐣剧敮?,areaId:"
												445381 "}]}]},{province:"楠炶儻銈挎竟顔芥閼奉亝涓嶉崠 ? ,
												areaId: "450000",
												cityList: [{
													city: "閸楁鐣炵敮?,areaId:"
													450100 ",areaList:[{area:"閸忔潙鐣為崠 ? ,
													areaId: "450102"
												},
												{
													area: "闂堟帞顫呴崠?,areaId:"
													450103 "},{area:"濮圭喎宕￠崠 ? ,
													areaId: "450105"
												},
												{
													area: "鐟楀じ鍩傛繅妯哄隘",
													areaId: "450107"
												},
												{
													area: "閼诡垰绨￠崠?,areaId:"
													450108 "},{area:"闁洖鐣為崠 ? ,
													areaId: "450109"
												},
												{
													area: "濮濓箓绂忛崠?,areaId:"
													450110 "},{area:"闂呭棗鐣ㄩ崢 ? ,
													areaId: "450123"
												},
												{
													area: "妞诡剙鍖楅崢?,areaId:"
													450124 "},{area:"娑撳﹥鐏勯崢 ? ,
													areaId: "450125"
												},
												{
													area: "鐎归箖妲奸崢?,areaId:"
													450126 "},{area:"濡亜骞 ? ,
													areaId: "
												450127 "
												},
												{
													area: "閸╁奔绗㈤弬鏉垮隘",
													areaId: "
												450128 "
												}]
											},
											{
												city: "閺屽啿绐炵敮 ? ,
												areaId: "
												450200 ",
												areaList: [{
													area: "閸╁簼鑵戦崠 ? ,
												areaId: "
													450202 "
											},
											{
												area: "妤哥厧鍢查崠 ? ,
													areaId: "
												450203 "
												},
												{
													area: "閺屽啿宕￠崠 ? ,
												areaId: "
													450204 "
											},
											{
												area: "閺屽啿瀵抽崠 ? ,
													areaId: "
												450205 "
												},
												{
													area: "閺岃櫕鐫欓崠 ? ,
												areaId: "
													450221 "
											},
											{
												area: "閺屽啿鐓勯崢 ? ,
													areaId: "
												450222 "
												},
												{
													area: "妤ｅ灝顕濋崢 ? ,
												areaId: "
													450223 "
											},
											{
												area: "閾诲秴鐣ㄩ崢 ? ,
													areaId: "
												450224 "
												},
												{
													area: "閾诲秵鎸夐懟妤佹閼奉亝涓嶉崢 ? ,
												areaId: "
													450225 "
											},
											{
												area: "娑撳鐫欐笟妤佹閼奉亝涓嶉崢 ? ,
													areaId: "
												450226 "
												},
												{
													area: "閺屽厖绗㈤弬鏉垮隘",
													areaId: "
												450227 "
												}]
											},
											{
												city: "濡楀倹鐏勭敮 ? ,
												areaId: "
												450300 ",
												areaList: [{
													area: "缁夆偓瀹勬澘灏?,areaId:"
													450302 "},{area:"閸欑姴鍍甸崠 ? ,
													areaId: "450303"
												},
												{
													area: "鐠炩€冲寳閸?,areaId:"
													450304 "},{area:"娑撳啯妲﹂崠 ? ,
													areaId: "450305"
												},
												{
													area: "闂嗕礁鍖楅崠?,areaId:"
													450311 "},{area:"娑撳瓨顢囬崠 ? ,
													areaId: "450312"
												},
												{
													area: "闂冭櫕婀愰崢?,areaId:"
													450321 "},{area:"閻忛潧绐涢崢 ? ,
													areaId: "450323"
												},
												{
													area: "閸忋劌绐為崢?,areaId:"
													450324 "},{area:"閸忔潙鐣ㄩ崢 ? ,
													areaId: "450325"
												},
												{
													area: "濮樺摜顩撮崢?,areaId:"
													450326 "},{area:"閻忓矂妲奸崢 ? ,
													areaId: "450327"
												},
												{
													area: "姒瑨鍎ㄩ崥鍕閼奉亝涓嶉崢?,areaId:"
													450328 "},{area:"鐠у嫭绨崢 ? ,
													areaId: "450329"
												},
												{
													area: "楠炲厖绠伴崢?,areaId:"
													450330 "},{area:"閼芥梹閮搁崢 ? ,
													areaId: "450331"
												},
												{
													area: "閹厼鐓勯悷鑸垫閼奉亝涓嶉崢?,areaId:"
													450332 "}]},{city:"濮娧冪獮鐢 ? ?,
													areaId: "450400",
													areaList: [{
														area: "娑撳洨顫呴崠?,areaId:"
														450403 "},{area:"闂€鎸庡簥閸 ? ?,
														areaId: "450405"
													},
													{
														area: "姒瑥婀崠?,areaId:"
														450406 "},{area:"閼诲秵鈪堕崢 ? ,
														areaId: "450421"
													},
													{
														area: "閽樸倕骞?,
													areaId: "
														450422 "
												},
												{
													area: "閽傛瑥鍖楅崢 ? ,
														areaId: "
													450423 "
													},
													{
														area: "瀹€鎴為偗鐢?? ,
													areaId: "
														450481 "
												}]
											},
											{
												city: "閸栨鎹ｇ敮 ? ,
														areaId: "
												450500 ",
														areaList: [{
															area: "濞村嘲鐓勯崠 ? ,
												areaId: "
															450502 "
											},
											{
												area: "闁捐埖鎹ｉ崠 ? ,
															areaId: "
												450503 "
														},
														{
															area: "闁句礁鍖楀〒顖氬隘",
															areaId: "
												450512 "
														},
														{
															area: "閸氬牊閮搁崢 ? ,
												areaId: "
															450521 "
											}]
										},
										{
											city: "闂冩彃鐓勫〒顖氱",
											areaId: "
															450600 ",
											areaList: [{
												area: "濞擃垰褰涢崠 ? ,
															areaId: "
												450602 "
														},
														{
															area: "闂冩彃鐓勯崠 ? ,
												areaId: "
															450603 "
											},
											{
												area: "娑撳﹥鈧繂骞 ? ,
															areaId: "450621"
														},
														{
															area: "娑撴粌鍙寸敮?,areaId:"
															450681 "}]},{city:"闁斤箑绐炵敮 ? ,
															areaId: "450700",
															areaList: [{
																area: "闁斤箑宕￠崠?,areaId:"
																450702 "},{area:"闁斤箑瀵抽崠 ? ,
																areaId: "450703"
															},
															{
																area: "閻忛潧鍖楅崢?,areaId:"
																450721 "},{area:"濞达箑瀵抽崢 ? ,
																areaId: "450722"
															}]
														},
														{
															city: "鐠愬灚鑵愮敮?,areaId:"
															450800 ",areaList:[{area:"濞擃垰瀵抽崠 ? ,
															areaId: "450802"
														},
														{
															area: "濞擃垰宕￠崠?,areaId:"
															450803 "},{area:"鐟曞啫顢濋崠 ? ,
															areaId: "450804"
														},
														{
															area: "楠炲啿宕￠崢?,areaId:"
															450821 "},{area:"濡楀倸閽╃敮 ? ,
															areaId: "450881"
														}]
													},
													{
														city: "閻滃鐏勭敮?,areaId:"
														450900 ",areaList:[{area:"閻滃绐為崠 ? ,
														areaId: "450902"
													},
													{
														area: "缁傚繒鍧忛崠?,areaId:"
														450903 "},{area:"閻滃绗㈤弬鏉垮隘",areaId:"
														450904 "},{area:"鐎圭懓骞 ? ,
														areaId: "
											450921 "
													},
													{
														area: "闂勫棗绐涢崢 ? ,
											areaId: "
														450922 "
										},
										{
											area: "閸楁氨娅ч崢 ? ,
														areaId: "
											450923 "
													},
													{
														area: "閸忕繝绗熼崢 ? ,
											areaId: "
														450924 "
										},
										{
											area: "閸栨绁︾敮 ? ,
														areaId: "
											450981 "
													}]
												},
												{
													city: "閻ф崘澹婄敮 ? ,
											areaId: "
													451000 ",
											areaList: [{
												area: "閸欒櫕鐫欓崠 ? ,
													areaId: "
												451002 "
												},
												{
													area: "閻即妲奸崢 ? ,
												areaId: "
													451021 "
											},
											{
												area: "閻㈤绗㈤崢 ? ,
													areaId: "
												451022 "
												},
												{
													area: "楠炶櫕鐏夐崢 ? ,
												areaId: "
													451023 "
											},
											{
												area: "瀵拌渹绻氶崢 ? ,
													areaId: "
												451024 "
												},
												{
													area: "闁絽娼崢 ? ,
												areaId: "
													451026 "
											},
											{
												area: "閸戝奔绨崢 ? ,
													areaId: "
												451027 "
												},
												{
													area: "娑旀劒绗熼崢 ? ,
												areaId: "
													451028 "
											},
											{
												area: "閻㈢増鐏勯崢 ? ,
													areaId: "
												451029 "
												},
												{
													area: "鐟楁寧鐏勯崢 ? ,
												areaId: "
													451030 "
											},
											{
												area: "闂呭棙鐏勯崥鍕閼奉亝涓嶉崢 ? ,
													areaId: "
												451031 "
												},
												{
													area: "闂堟牞銈跨敮 ? ,
												areaId: "
													451081 "
											}]
										},
										{
											city: "鐠愬搫绐炵敮 ? ,
													areaId: "
											451100 ",
													areaList: [{
														area: "閸忣偅顒為崠 ? ,
											areaId: "
														451102 "
										},
										{
											area: "楠炶櫕顢囬崠 ? ,
														areaId: "
											451103 "
													},
													{
														area: "閺勵厼閽╅崢 ? ,
											areaId: "
														451121 "
										},
										{
											area: "闁界喎鍖楅崢 ? ,
														areaId: "
											451122 "
													},
													{
														area: "鐎靛苯绐涢悷鑸垫閼奉亝涓嶉崢 ? ,
											areaId: "
														451123 "
										}]
									},
									{
										city: "濞岃櫕鐫滅敮 ? ,
														areaId: "
										451200 ",
														areaList: [{
															area: "闁叉垵鐓勫Ч鐔峰隘",
															areaId: "
										451202 "
														},
														{
															area: "閸楁ぞ鑵归崢 ? ,
										areaId: "
															451221 "
									},
									{
										area: "婢垛晛鏁為崢 ? ,
															areaId: "
										451222 "
														},
														{
															area: "閸戙倕鍖楅崢 ? ,
										areaId: "
															451223 "
									},
									{
										area: "娑撴粌鍙為崢 ? ,
															areaId: "
										451224 "
														},
														{
															area: "缂冩鐓勬禒顐℃祮閺冨繗鍤滃▽璇插箼",
															areaId: "
										451225 "
														},
														{
															area: "閻滎垱鐫欏В娑樺础閺冨繗鍤滃▽璇插箼",
															areaId: "
										451226 "
														},
														{
															area: "瀹告挳鈹堥悷鑸垫閼奉亝涓嶉崢 ? ,
										areaId: "
															451227 "
									},
									{
										area: "闁棄鐣ㄩ悷鑸垫閼奉亝涓嶉崢 ? ,
															areaId: "
										451228 "
														},
														{
															area: "婢堆冨閻熻埖妫岄懛顏呬笉閸?? ,
										areaId: "
															451229 "
									},
									{
										area: "鐎规粌绐炵敮 ? ,
															areaId: "
										451281 "
														}]
													},
													{
														city: "閺夈儱顔曠敮 ? ,
										areaId: "
														451300 ",
										areaList: [{
											area: "閸忔潙顔曢崠 ? ,
														areaId: "
											451302 "
													},
													{
														area: "韫囪鐓勯崢 ? ,
											areaId: "
														451321 "
										},
										{
											area: "鐠炩€崇獮閸 ? ,
														areaId: "
											451322 "
													},
													{
														area: "濮濓箑顓洪崢 ? ,
											areaId: "
														451323 "
										},
										{
											area: "闁叉垹顫呴悷鑸垫閼奉亝涓嶉崢 ? ,
														areaId: "
											451324 "
													},
													{
														area: "閸氬牆鍖楃敮 ? ,
											areaId: "
														451381 "
										}]
									},
									{
										city: "瀹曞洤涔忕敮 ? ,
														areaId: "
										451400 ",
														areaList: [{
															area: "濮圭喎绐為崠 ? ,
										areaId: "
															451402 "
									},
									{
										area: "閹靛墎浜掗崢 ? ,
															areaId: "
										451421 "
														},
														{
															area: "鐎逛焦妲戦崢 ? ,
										areaId: "
															451422 "
									},
									{
										area: "姒瑥绐為崢 ? ,
															areaId: "
										451423 "
														},
														{
															area: "婢堆勬煀閸?? ,
										areaId: "
															451424 "
									},
									{
										area: "婢垛晝鐡戦崢 ? ,
															areaId: "
										451425 "
														},
														{
															area: "閸戭厾銈ョ敮 ? ,
										areaId: "
															451481 "
									}]
								}]
							},
							{
								province: "濞村嘲宕￠惇 ? ,
															areaId: "
								460000 ",
															cityList: [{
																city: "濞村嘲褰涚敮 ? ,
								areaId: "
																460100 ",
								areaList: [{
									area: "缁夆偓閼诲崬灏 ? ,
																areaId: "460105"
															},
															{
																area: "姒瑥宕曢崠?,areaId:"
																460106 "},{area:"閻炵厧鍖楅崠 ? ,
																areaId: "460107"
															},
															{
																area: "缂囧骸鍙為崠?,areaId:"
																460108 "}]},{city:"娑撳绨圭敮 ? ,
																areaId: "460200",
																areaList: [{
																	area: "濞撮攱顥ラ崠?,areaId:"
																	460202 "},{area:"閸氬妲奸崠 ? ,
																	areaId: "460203"
																},
																{
																	area: "婢垛晜鍔ㄩ崠?,areaId:"
																	460204 "},{area:"瀹曟牕绐為崠 ? ,
																	areaId: "460205"
																}]
															},
															{
																city: "娑撳鐭欑敮?,areaId:"
																460300 ",areaList:[{area:"鐟楁寧鐭欑紘銈呯煗",areaId:"
																460321 "},{area:"閸楁鐭欑紘銈呯煗",areaId:"
																460322 "},{area:"娑擃厽鐭欑紘銈呯煗",areaId:"
																460323 "}]},{city:"閸庡绐炵敮 ? ,
																areaId: "460400",
																areaList: [{
																	area: "濞插閮哥紒蹇旂ス瀵偓閸欐垵灏?,
										areaId: "
																	460401 "
									},
									{
										area: "闁絽銇囬梹 ? ,
																	areaId: "
										460402 "
																},
																{
																	area: "閸楁ぞ璧撮梹 ? ,
										areaId: "
																	460403 "
									},
									{
										area: "闂嗗懏妲﹂梹 ? ,
																	areaId: "
										460404 "
																},
																{
																	area: "閸滃苯绨￠梹 ? ,
										areaId: "
																	460405 "
									},
									{
										area: "婢堆勫灇闂€ ? ,
																	areaId: "
										460406 "
																},
																{
																	area: "閺傛澘绐為梹 ? ,
										areaId: "
																	460407 "
									},
									{
										area: "閸忓娼欓梹 ? ,
																	areaId: "
										460408 "
																},
																{
																	area: "娑撴粍鍨氶梹 ? ,
										areaId: "
																	460409 "
									},
									{
										area: "娑擃厼鎷伴梹 ? ,
																	areaId: "
										460410 "
																},
																{
																	area: "瀹勩劏鏁侀梹 ? ,
										areaId: "
																	460411 "
									},
									{
										area: "閸忕増纾遍梹 ? ,
																	areaId: "
										460412 "
																},
																{
																	area: "閻滃绨查梹 ? ,
										areaId: "
																	460413 "
									},
									{
										area: "閹烘帗閮搁梹 ? ,
																	areaId: "
										460414 "
																},
																{
																	area: "濞村嘲銇旈梹 ? ,
										areaId: "
																	460415 "
									},
									{
										area: "閺堛劍顥ラ梹 ? ,
																	areaId: "
										460416 "
																},
																{
																	area: "閻т粙鈹堟禍鏇㈡櫍",
																	areaId: "
										460417 "
																},
																{
																	area: "娑撳鍏橀梹 ? ,
										areaId: "
																	460418 "
									},
									{
										area: "鐟楀灝鐓块崘婊冩簚",
										areaId: "
																	460419 "
									},
									{
										area: "鐟楄儻浠堥崘婊冩簚",
										areaId: "
																	460420 "
									},
									{
										area: "閽冩繃纾遍崘婊冩簚",
										areaId: "
																	460421 "
									},
									{
										area: "閸忣偂绔撮崘婊冩簚",
										areaId: "
																	460422 "
									},
									{
										area: "鐟楀灝宕曢崘婊冩簚",
										areaId: "
																	460423 "
									},
									{
										area: "鐟楀灝绨￠崘婊冩簚",
										areaId: "
																	460424 "
									},
									{
										area: "鐟楁寧绁﹂崘婊冩簚",
										areaId: "
																	460425 "
									},
									{
										area: "閺傛壆娉╅崘婊冩簚",
										areaId: "
																	460426 "
									},
									{
										area: "姒瑥鍖楅崘婊冩簚",
										areaId: "
																	460427 "
									},
									{
										area: "缁俱垹绠旈崘婊冩簚",
										areaId: "
																	460428 "
									}]
								},
								{
									city: "娴滄梹瀵氱仦鍗炵",
									areaId: "
																	469001 ",
									areaList: [{
										area: "闁矮绮堥梹 ? ,
																	areaId: "
										469101 "
																},
																{
																	area: "閸楁婀ラ梹 ? ,
										areaId: "
																	469102 "
									},
									{
										area: "濮ｆ盯妲奸梹 ? ,
																	areaId: "
										469103 "
																},
																{
																	area: "閻ｎ亪妲奸梹 ? ,
										areaId: "
																	469104 "
									},
									{
										area: "閻ｅ懎銈芥稊 ? ,
																	areaId: "
										469105 "
																},
																{
																	area: "濮ｆ盯浜炬稊 ? ,
										areaId: "
																	469106 "
									},
									{
										area: "濮樺瓨寮ф稊 ? ,
																	areaId: "
										469107 "
																}]
															},
															{
																city: "閻炲吋鎹ｇ敮 ? ,
										areaId: "
																469002 ",
										areaList: [{
											area: "閸㈠袧闂€ ? ,
																areaId: "
											469201 "
															},
															{
																area: "娑撳洦纭ラ梹 ? ,
											areaId: "
																469202 "
										},
										{
											area: "閻啿顥嗛梹 ? ,
																areaId: "
											469203 "
															},
															{
																area: "娑擃厼甯梹 ? ,
											areaId: "
																469204 "
										},
										{
											area: "閸楁岸纭ㄩ梹 ? ,
																areaId: "
											469205 "
															},
															{
																area: "闂冭櫕鐫欓梹 ? ,
											areaId: "
																469206 "
										},
										{
											area: "姒瑦鐫欓梹 ? ,
																areaId: "
											469207 "
															},
															{
																area: "濞碱參妫梹 ? ,
											areaId: "
																469208 "
										},
										{
											area: "婵夋梹纾遍梹 ? ,
																areaId: "
											469209 "
															},
															{
																area: "闂€鍨蒋闂€ ? ,
											areaId: "
																469210 "
										},
										{
											area: "婢堆嗙熅闂€ ? ,
																areaId: "
											469211 "
															},
															{
																area: "娴兼艾鍖楅梹 ? ,
											areaId: "
																469212 "
										},
										{
											area: "娑撴粌銇婇崘婊冩簚",
											areaId: "
																469213 "
										},
										{
											area: "娑撴粎瀛╅崘婊冩簚",
											areaId: "
																469214 "
										},
										{
											area: "娑撴粌宕岄崘婊冩簚",
											areaId: "
																469215 "
										},
										{
											area: "閸楁ぞ鎵涢崘婊冩簚",
											areaId: "
																469216 "
										},
										{
											area: "瑜邦剚娼欑仦鍗炲磿娓氥劌鍟橀崷 ? ,
																areaId: "
											469217 "
															}]
														},
														{
															city: "閺傚洦妲嶇敮 ? ,
											areaId: "
															469005 ",
											areaList: [{
												area: "閺傚洤鐓勯梹 ? ,
															areaId: "
												469501 "
														},
														{
															area: "闁插秴鍙撮梹 ? ,
												areaId: "
															469502 "
											},
											{
												area: "閽冾剝骞堥梹 ? ,
															areaId: "
												469503 "
														},
														{
															area: "娴兼碍鏋冮梹 ? ,
												areaId: "
															469504 "
											},
											{
												area: "娑撴粏鐭鹃梹 ? ,
															areaId: "
												469505 "
														},
														{
															area: "濞碱厾澧伴梹 ? ,
												areaId: "
															469506 "
											},
											{
												area: "娑撴粓姒块梹 ? ,
															areaId: "
												469507 "
														},
														{
															area: "閺傚洦鏆€闂€ ? ,
												areaId: "
															469508 "
											},
											{
												area: "娑撴粓鍎曢梹 ? ,
															areaId: "
												469509 "
														},
														{
															area: "姒瑦銈奸梹 ? ,
												areaId: "
															469510 "
											},
											{
												area: "閺勫本纾奸梹 ? ,
															areaId: "
												469511 "
														},
														{
															area: "缂堜胶鏁梹 ? ,
												areaId: "
															469512 "
											},
											{
												area: "閹惰京缍忛梹 ? ,
															areaId: "
												469513 "
														},
														{
															area: "閸愵垰娼梹 ? ,
												areaId: "
															469514 "
											},
											{
												area: "闁匡箑鍖楅梹 ? ,
															areaId: "
												469515 "
														},
														{
															area: "闁惧搫澧犻梹 ? ,
												areaId: "
															469516 "
											},
											{
												area: "閸忣剙娼梹 ? ,
															areaId: "
												469517 "
														},
														{
															area: "鏉╁牆褰块梹 ? ,
												areaId: "
															469518 "
											},
											{
												area: "濞撳懓闉嶉梹 ? ,
															areaId: "
												469519 "
														},
														{
															area: "閸楁妲奸梹 ? ,
												areaId: "
															469520 "
											},
											{
												area: "閺傜増藟闂€ ? ,
															areaId: "
												469521 "
														},
														{
															area: "婢剁瀚呴梹 ? ,
												areaId: "
															469522 "
											},
											{
												area: "鐎规繆濮垫稊 ? ,
															areaId: "
												469523 "
														},
														{
															area: "姒瑩鈹堟稊 ? ,
												areaId: "
															469524 "
											},
											{
												area: "濠€鏍у寳娑 ? ,
															areaId: "
												469525 "
														},
														{
															area: "娑撴粏鐭鹃崘婊冩簚",
															areaId: "
												469526 "
														},
														{
															area: "閸楁妲奸崘婊冩簚",
															areaId: "
												469527 "
														},
														{
															area: "缂冩鐪撮崘婊冩簚",
															areaId: "
												469528 "
														}]
													},
													{
														city: "娑撳洤鐣炵敮 ? ,
												areaId: "
														469006 ",
												areaList: [{
													area: "娑撳洤鐓勯梹 ? ,
														areaId: "
													469601 "
													},
													{
														area: "姒瑦绮撮梹 ? ,
													areaId: "
														469602 "
												},
												{
													area: "閸滃奔绠伴梹 ? ,
														areaId: "
													469603 "
													},
													{
														area: "閸氬骸鐣ㄩ梹 ? ,
													areaId: "
														469604 "
												},
												{
													area: "婢堆嗗瘯闂€ ? ,
														areaId: "
													469605 "
													},
													{
														area: "娑撴粍澧冮梹 ? ,
													areaId: "
														469606 "
												},
												{
													area: "缁€鑲╅偗闂€ ? ,
														areaId: "
													469607 "
													},
													{
														area: "闂€澶歌荡闂€ ? ,
													areaId: "
														469608 "
												},
												{
													area: "鐏炶鲸鐗撮梹 ? ,
														areaId: "
													469609 "
													},
													{
														area: "閸栨銇囬梹 ? ,
													areaId: "
														469610 "
												},
												{
													area: "閸楁藟闂€ ? ,
														areaId: "
													469611 "
													},
													{
														area: "娑撳娲跨純妤呮櫍",
														areaId: "
													469612 "
													},
													{
														area: "娑撴粌绠旈崘婊冩簚",
														areaId: "
													469613 "
													},
													{
														area: "閸楁鐏勯崘婊冩簚",
														areaId: "
													469614 "
													},
													{
														area: "娑撴粌鍙撮崘婊冩簚",
														areaId: "
													469615 "
													},
													{
														area: "娑撴粌鎷伴崘婊冩簚",
														areaId: "
													469616 "
													},
													{
														area: "閺傞鑵戦崘婊冩簚",
														areaId: "
													469617 "
													},
													{
														area: "閸忔挳娈曢崡搴濋哺閸愭粌婧€",
														areaId: "
													469618 "
													}]
												},
												{
													city: "娑撴粍鏌熺敮 ? ,
													areaId: "
													469007 ",
													areaList: [{
														area: "閸忣偅澧嶉梹 ? ,
													areaId: "
														469701 "
												},
												{
													area: "娑撴粍娓ら梹 ? ,
														areaId: "
													469702 "
													},
													{
														area: "婢堆呮暞闂€ ? ,
													areaId: "
														469703 "
												},
												{
													area: "閹扮喎鐓勯梹 ? ,
														areaId: "
													469704 "
													},
													{
														area: "閺夋寧藟闂€ ? ,
													areaId: "
														469705 "
												},
												{
													area: "娑撳顔嶉梹 ? ,
														areaId: "
													469706 "
													},
													{
														area: "閸ユ稒娲块梹 ? ,
													areaId: "
														469707 "
												},
												{
													area: "閺備即绶抽梹 ? ,
														areaId: "
													469708 "
													},
													{
														area: "婢垛晛鐣ㄦ稊 ? ,
													areaId: "
														469709 "
												},
												{
													area: "濮圭喕绔熸稊 ? ,
														areaId: "
													469710 "
													},
													{
														area: "楠炲灝娼╅崘婊冩簚",
														areaId: "
													469711 "
													},
													{
														area: "娑撴粍鏌熼崡搴濋哺閸愭粌婧€",
														areaId: "
													469712 "
													}]
												},
												{
													city: "鐎规艾鐣ㄩ崢 ? ,
													areaId: "
													469021 ",
													areaList: [{
														area: "鐎规艾鐓勯梹 ? ,
													areaId: "
														469801 "
												},
												{
													area: "閺傛壆顏堕梹 ? ,
														areaId: "
													469802 "
													},
													{
														area: "姒瑦绠归梹 ? ,
													areaId: "
														469803 "
												},
												{
													area: "闂嗙兘绂忛梹 ? ,
														areaId: "
													469804 "
													},
													{
														area: "姒瑩妫梹 ? ,
													areaId: "
														469805 "
												},
												{
													area: "姒瑦娓ら梹 ? ,
														areaId: "
													469806 "
													},
													{
														area: "瀹€顓炲經闂€ ? ,
													areaId: "
														469807 "
												},
												{
													area: "缂堢増鐏勯梹 ? ,
														areaId: "
													469808 "
													},
													{
														area: "鐎靛本鏋冮梹 ? ,
													areaId: "
														469809 "
												},
												{
													area: "姒涘嫮顏堕梹 ? ,
														areaId: "
													469810 "
													},
													{
														area: "闁叉垿娴畝顓炲晿閸?? ,
													areaId: "
														469811 "
												},
												{
													area: "娑擃厾鎲洪崘婊冩簚",
													areaId: "
														469812 "
												},
												{
													area: "閸楁鎹ｉ崘婊冩簚",
													areaId: "
														469813 "
												},
												{
													area: "閸╁骸灏 ? ,
														areaId: "469814"
													}]
												},
												{
													city: "鐏烆垱妲嶉崢?,areaId:"
													469022 ",areaList:[{area:"鐏烆垰鐓勯梹 ? ,
													areaId: "469821"
												},
												{
													area: "閺傛澘鍙撮梹?,areaId:"
													469822 "},{area:"閺嬵偅婀梹 ? ,
													areaId: "469823"
												},
												{
													area: "娑斿苯娼梹?,areaId:"
													469824 "},{area:"閸楁鎮ら梹 ? ,
													areaId: "469825"
												},
												{
													area: "閸楁娼抽梹?,areaId:"
													469826 "},{area:"閸р€崇妇闂€ ? ,
													areaId: "469827"
												},
												{
													area: "鐟楁寧妲嶉梹?,areaId:"
													469828 "},{area:"娑擃厼缂撻崘婊冩簚",areaId:"
													469829 "},{area:"娑擃厼娼抽崘婊冩簚",areaId:"
													469830 "},{area:"閸樺灝鐓勯崘 ? ,
													areaId: "469831"
												}]
											},
											{
												city: "濠㈠嫯绻勯崢?,areaId:"
												469023 ",areaList:[{area:"闁叉垶鐫欓梹 ? ,
												areaId: "469841"
											},
											{
												area: "閼颁礁鐓勯梹?,areaId:"
												469842 "},{area:"閻熺偞閭梹 ? ,
												areaId: "469843"
											},
											{
												area: "濮樼褰傞梹?,areaId:"
												469844 "},{area:"閸旂姳绠伴梹 ? ,
												areaId: "469845"
											},
											{
												area: "閺傚洤鍓撮梹?,areaId:"
												469846 "},{area:"娑擃厼鍙撮梹 ? ,
												areaId: "469847"
											},
											{
												area: "娴犱礁鍙撮梹?,areaId:"
												469848 "},{area:"缁傚繐鍖楅梹 ? ,
												areaId: "469849"
											},
											{
												area: "濡椼儱銇旈梹?,areaId:"
												469850 "},{area:"婢堆傝荡闂€ ? ,
												areaId: "469851"
											},
											{
												area: "缁俱垹鍘滈崘婊冩簚",
												areaId: "469852"
											},
											{
												area: "鐟楄儻鎻崘婊冩簚",
												areaId: "469853"
											},
											{
												area: "闁叉垵鐣ㄩ崘婊冩簚",
												areaId: "469854"
											},
											{
												area: "閸╁骸灏?,
											areaId: "
												469855 "
										}]
									},
									{
										city: "娑撴挳鐝崢 ? ,
												areaId: "
										469024 ",
												areaList: [{
													area: "娑撴潙鐓勯梹 ? ,
										areaId: "
													469861 "
									},
									{
										area: "濞夈垼骞夐梹 ? ,
													areaId: "
										469862 "
												},
												{
													area: "娑撴粏瀚抽梹 ? ,
										areaId: "
													469863 "
									},
									{
										area: "閸楁艾甯ら梹 ? ,
													areaId: "
										469864 "
												},
												{
													area: "閻ㄥ洦顢曢梹 ? ,
										areaId: "
													469865 "
									},
									{
										area: "婢舵碍鏋冮梹 ? ,
													areaId: "
										469866 "
												},
												{
													area: "閸滃矁鍨楅梹 ? ,
										areaId: "
													469867 "
									},
									{
										area: "閸楁鐤傞梹 ? ,
													areaId: "
										469868 "
												},
												{
													area: "閺傛壆娉╅梹 ? ,
										areaId: "
													469869 "
									},
									{
										area: "鐠嬪啯銈奸梹 ? ,
													areaId: "
										469870 "
												},
												{
													area: "閸旂姵娼甸梹 ? ,
										areaId: "
													469871 "
									},
									{
										area: "缁俱垹宕曢崘婊冩簚",
										areaId: "
													469872 "
									},
									{
										area: "閸旂姵娼甸崘婊冩簚",
										areaId: "
													469873 "
									},
									{
										area: "閸╁骸灏 ? ,
													areaId: "469874"
												}]
											},
											{
												city: "閻ц姤鐭欐搴㈡閼奉亝涓嶉崢?,areaId:"
												469025 ",areaList:[{area:"閻楁瑥寮堕梹 ? ,
												areaId: "469881"
											},
											{
												area: "娑撳啫娼戦梹?,areaId:"
												469882 "},{area:"闁附閭梹 ? ,
												areaId: "469883"
											},
											{
												area: "閹垫挸鐣ㄩ梹?,areaId:"
												469884 "},{area:"缂佸棙鎸夋稊 ? ,
												areaId: "469885"
											},
											{
												area: "閸忓啴妫稊?,areaId:"
												469886 "},{area:"閸楁绱戞稊 ? ,
												areaId: "469887"
											},
											{
												area: "闂冩粓绶虫稊?,areaId:"
												469888 "},{area:"闂堟帗婢楁稊 ? ,
												areaId: "469889"
											},
											{
												area: "闁叉垶灏濇稊?,areaId:"
												469890 "},{area:"閼斤綁鍋婃稊 ? ,
												areaId: "469891"
											},
											{
												area: "閻ц姤鐭欓崘婊冩簚",
												areaId: "469892"
											},
											{
												area: "姒瑦鐫欓崘婊冩簚",
												areaId: "469893"
											},
											{
												area: "闁附閭崘婊冩簚",
												areaId: "469894"
											},
											{
												area: "閸╁骸灏?,
									areaId: "
												469895 "
								}]
							},
							{
								city: "閺勫本鐫欐搴㈡閼奉亝涓嶉崢 ? ,
												areaId: "
								469026 ",
												areaList: [{
													area: "閻磭顣遍梹 ? ,
								areaId: "
													469901 "
							},
							{
								area: "閸欏娓ら梹 ? ,
													areaId: "
								469902 "
												},
												{
													area: "閸椾焦婀€閻即鏅?,areaId:"
													469903 "},{area:"娑斿瞼鍎撻梹 ? ,
													areaId: "469904"
												},
												{
													area: "濞村嘲鐔梹?,areaId:"
													469905 "},{area:"閸楁缍忛梹 ? ,
													areaId: "469906"
												},
												{
													area: "婢额亜娼梹?,areaId:"
													469907 "},{area:"閺勫苯瀵查梹 ? ,
													areaId: "469908"
												},
												{
													area: "娑撳啫寮堕梹?,areaId:"
													469909 "},{area:"娣囨繂閽╂稊 ? ,
													areaId: "469910"
												},
												{
													area: "閺勫苯鐓勬稊?,areaId:"
													469911 "},{area:"閻滃绗呮稊 ? ,
													areaId: "469912"
												},
												{
													area: "闂囧摜甯囧畝顓熺亜閸?,areaId:"
													469913 "},{area:"缁俱垺鐏勯崘婊冩簚",areaId:"
													469914 "},{area:"閸╁骸灏 ? ,
													areaId: "
								469915 "
												}]
											},
											{
												city: "娑旀劒绗㈡搴㈡閼奉亝涓嶉崢 ? ,
								areaId: "
												469027 ",
								areaList: [{
									area: "閹惰京鏁遍梹 ? ,
												areaId: "
									469920 "
											},
											{
												area: "娑撳洤鍟块梹 ? ,
									areaId: "
												469921 "
								},
								{
									area: "婢堆冪暔闂€ ? ,
												areaId: "
									469922 "
											},
											{
												area: "韫囨ぞ寰婇梹 ? ,
									areaId: "
												469923 "
								},
								{
									area: "閸楀啫顔嶉梹 ? ,
												areaId: "
									469924 "
											},
											{
												area: "娑旀繃澧嶉梹 ? ,
									areaId: "
												469925 "
								},
								{
									area: "閸掆晛娴楅梹 ? ,
												areaId: "
									469926 "
											},
											{
												area: "姒涘嫭绁﹂梹 ? ,
									areaId: "
												469927 "
								},
								{
									area: "娴ｆ稓缍忛梹 ? ,
												areaId: "
									469928 "
											},
											{
												area: "鐏忔牕鍢查梹 ? ,
									areaId: "
												469929 "
								},
								{
									area: "閼剧儤鐡曞ù鐑芥櫍",
									areaId: "
												469930 "
								},
								{
									area: "娑旀劒鑵戦崘婊冩簚",
									areaId: "
												469931 "
								},
								{
									area: "鐏炶精宕抽崘婊冩簚",
									areaId: "
												469932 "
								},
								{
									area: "娑旀劕鍘滈崘婊冩簚",
									areaId: "
												469933 "
								},
								{
									area: "閹躲儰楦￠崘婊冩簚",
									areaId: "
												469934 "
								},
								{
									area: "缁傚繑濮ら崘婊冩簚",
									areaId: "
												469935 "
								},
								{
									area: "娣囨繂娴楅崘婊冩簚",
									areaId: "
												469936 "
								},
								{
									area: "娣囨繃妯夐崘婊冩簚",
									areaId: "
												469937 "
								},
								{
									area: "鐏忔牕鍢插畝顓熺亜娑 ? ,
												areaId: "
									469938 "
											},
											{
												area: "閼剧儤鐡曞ù椋庢磦閸?? ,
									areaId: "
												469939 "
								},
								{
									area: "閸╁骸灏 ? ,
												areaId: "469940"
											}]
										},
										{
											city: "闂勫灚鎸夋搴㈡閼奉亝涓嶉崢?,areaId:"
											469028 ",areaList:[{area:"濡炵増鐏勯梹 ? ,
											areaId: "469941"
										},
										{
											area: "閸忓娼梹?,areaId:"
											469942 "},{area:"娑撳澧犻梹 ? ,
											areaId: "469943"
										},
										{
											area: "閼诲崬绐為梹?,areaId:"
											469944 "},{area:"闂呭棗绠嶉梹 ? ,
											areaId: "469945"
										},
										{
											area: "閺傚洨缍忛梹?,areaId:"
											469946 "},{area:"閺堫剙褰块梹 ? ,
											areaId: "469947"
										},
										{
											area: "閺傜増娼欓梹?,areaId:"
											469948 "},{area:"姒涘骸鐣ㄩ梹 ? ,
											areaId: "469949"
										},
										{
											area: "閹绘劘鎸嬫稊?,areaId:"
											469950 "},{area:"缂囥倛瀚虫稊 ? ,
											areaId: "469951"
										},
										{
											area: "瀹€顓㈡，閸愭粌婧€",
											areaId: "469952"
										},
										{
											area: "閸楁閽╅崘婊冩簚",
											areaId: "469953"
										},
										{
											area: "閸╁骸灏?,
								areaId: "
											469954 "
							}]
						},
						{
							city: "娣囨繀娑垫搴㈡閼绘妫岄懛顏呬笉閸 ? ,
											areaId: "
							469029 ",
											areaList: [{
												area: "娣囨繂鐓勯梹 ? ,
							areaId: "
												469961 "
						},
						{
							area: "娴犫偓閻滄煡鏅 ? ,
												areaId: "469962"
											},
											{
												area: "閸旂姾瀵曢梹?,areaId:"
												469963 "},{area:"閸濆秵鎸夐梹 ? ,
												areaId: "469964"
											},
											{
												area: "閺傜増鏂傞梹?,areaId:"
												469965 "},{area:"娑撳浜鹃梹 ? ,
												areaId: "469966"
											},
											{
												area: "閸忣厼绱︽稊?,areaId:"
												469967 "},{area:"閸楁鐏勬稊 ? ,
												areaId: "469968"
											},
											{
												area: "濮ｆ稒鍔呮稊?,areaId:"
												469969 "},{area:"閺傜増妲﹂崘婊冩簚",areaId:"
												469970 "},{area:"闁叉垶鐫欓崘婊冩簚",areaId:"
												469971 "},{area:"娑撳浜鹃崘婊冩簚",areaId:"
												469972 "}]},{city:"閻為棿鑵戞搴㈡閼绘妫岄懛顏呬笉閸 ? ?,
												areaId: "469030",
												areaList: [{
													area: "閽€銉︾壌闂€?,areaId:"
													469981 "},{area:"濠€鎯х當闂€ ? ,
													areaId: "469982"
												},
												{
													area: "姒涘孩鐦濈仦閬嶆櫍",
													areaId: "469983"
												},
												{
													area: "閸滃苯閽╅梹?,areaId:"
													469984 "},{area:"闂€鍨窙闂€ ? ,
													areaId: "469985"
												},
												{
													area: "缁俱垺鐦洪梹?,areaId:"
													469986 "},{area:"娑擃厼閽╅梹 ? ,
													areaId: "469987"
												},
												{
													area: "娑撳﹤鐣ㄦ稊?,areaId:"
													469988 "},{area:"娴犫偓鏉╂劒鍩 ? ,
													areaId: "
								469989 "
												},
												{
													area: "閸氬﹦缍忕仦鍙樺焸",
													areaId: "
								469990 "
												},
												{
													area: "闂冭櫕鐫欓崘婊冩簚",
													areaId: "
								469991 "
												},
												{
													area: "娑斿瞼鐓堕崘婊冩簚",
													areaId: "
								469992 "
												},
												{
													area: "閸旂娀鎸嗛崘婊冩簚",
													areaId: "
								469993 "
												},
												{
													area: "闂€鍨窙閸愭粌婧€",
													areaId: "
								469994 "
												},
												{
													area: "閸╁骸灏?,areaId:"
													469995 "}]}]},{province:"闁插秴绨 ? ,
													areaId: "
								500000 ",
													cityList: [{
														city: "闁插秴绨＄敮 ? ,
								areaId: "
														500100 ",
								areaList: [{
									area: "娑撳洤绐為崠 ? ,
														areaId: "
									500101 "
													},
													{
														area: "濞戭亪娅熼崠 ? ,
									areaId: "
														500102 "
								},
								{
									area: "濞撴繀鑵戦崠 ? ,
														areaId: "
									500103 "
													},
													{
														area: "婢堆勬诞閸欙絽灏?,areaId:"
														500104 "},{area:"濮圭喎瀵抽崠 ? ,
														areaId: "500105"
													},
													{
														area: "濞屾瑥娼介崸婵嗗隘",
														areaId: "500106"
													},
													{
														area: "娑旀繈绶抽崸鈥冲隘",
														areaId: "500107"
													},
													{
														area: "閸楁鍝洪崠?,areaId:"
														500108 "},{area:"閸栨顣块崠 ? ,
														areaId: "500109"
													},
													{
														area: "缂嶏附鐫欓崠?,areaId:"
														500110 "},{area:"婢堆嗗喕閸 ? ?,
														areaId: "500111"
													},
													{
														area: "濞撴繂瀵抽崠?,areaId:"
														500112 "},{area:"瀹告潙宕￠崠 ? ,
														areaId: "500113"
													},
													{
														area: "姒涙梹鐫欓崠?,areaId:"
														500114 "},{area:"闂€鍨嚧閸 ? ?,
														areaId: "500115"
													},
													{
														area: "濮圭喐瑙﹂崠?,areaId:"
														500116 "},{area:"閸氬牆绐涢崠 ? ,
														areaId: "500117"
													},
													{
														area: "濮樼绐涢崠?,areaId:"
														500118 "},{area:"閸楁绐涢崠 ? ,
														areaId: "500119"
													},
													{
														area: "閻犙冨寳閸?,areaId:"
														500120 "},{area:"闁炬粍顣﹂崠 ? ,
														areaId: "500151"
													},
													{
														area: "濞肩厧宕￠崠?,areaId:"
														500152 "},{area:"閼斤絾妲嶉崠 ? ,
														areaId: "500153"
													},
													{
														area: "瀵偓瀹哥偛灏?,
									areaId: "
														500154 "
								},
								{
									area: "濮婁礁閽╅崢 ? ,
														areaId: "
									500228 "
													},
													{
														area: "閸╁骸褰涢崢 ? ,
									areaId: "
														500229 "
								},
								{
									area: "娑撲即鍏橀崢 ? ,
														areaId: "
									500230 "
													},
													{
														area: "閸偅鐫欓崢 ? ,
									areaId: "
														500231 "
								},
								{
									area: "濮濓箓娈曢崢 ? ,
														areaId: "
									500232 "
													},
													{
														area: "韫囩姴骞?,areaId:"
														500233 "},{area:"娴滄垿妲奸崢 ? ,
														areaId: "500235"
													},
													{
														area: "婵傚濡崢?,areaId:"
														500236 "},{area:"瀹割偄鍖楅崢 ? ,
														areaId: "500237"
													},
													{
														area: "瀹割偅閭崢?,areaId:"
														500238 "},{area:"閻櫕鐓撮崷鐔奉啀閺冨繗鍤滃▽璇插箼",areaId:"
														500240 "},{area:"缁夆偓鐏炲崬婀＄€硅埖妫岄懟妤佹閼奉亝涓嶉崢 ? ,
														areaId: "500241"
													},
													{
														area: "闁板妲奸崷鐔奉啀閺冨繗瀚嶉弮蹇氬殰濞岃骞?,
									areaId: "
														500242 "
								},
								{
									area: "瑜邦厽鎸夐懟妤佹閸︾喎顔嶉弮蹇氬殰濞岃骞 ? ,
														areaId: "500243"
													},
													{
														area: "娑撱倖鐫欓弬鏉垮隘",
														areaId: "500300"
													},
													{
														area: "妤傛ɑ鏌婇崠?,areaId:"
														500301 "},{area:"閻犙冨寳妤傛ɑ鏌婇崠 ? ,
														areaId: "500302"
													}]
												}]
											},
											{
												province: "閸ユ稑绐涢惇?,areaId:"
												510000 ",cityList:[{city:"閹存劙鍏樼敮 ? ,
												areaId: "510100",
												areaList: [{
													area: "闁匡附鐫欓崠?,areaId:"
													510104 "},{area:"闂堟帞绶ら崠 ? ,
													areaId: "510105"
												},
												{
													area: "闁叉垹澧伴崠?,areaId:"
													510106 "},{area:"濮濓缚璀﹂崠 ? ,
													areaId: "510107"
												},
												{
													area: "閹存劕宕曢崠?,areaId:"
													510108 "},{area:"姒瑦纭ユす鍨隘",areaId:"
													510112 "},{area:"闂堟帞娅уЧ鐔峰隘",areaId:"
													510113 "},{area:"閺備即鍏橀崠 ? ,
													areaId: "510114"
												},
												{
													area: "濞撯晜鐫欓崠?,areaId:"
													510115 "},{area:"閸欏本绁﹂崠 ? ,
													areaId: "510116"
												},
												{
													area: "闁叉垵鐖為崢?,areaId:"
													510121 "},{area:"闁偊鍏橀崠 ? ,
													areaId: "510124"
												},
												{
													area: "婢堆囧€崢?,areaId:"
													510129 "},{area:"閽傚弶鐫欓崢 ? ,
													areaId: "510131"
												},
												{
													area: "閺傜増瑙﹂崢?,areaId:"
													510132 "},{area:"缁犫偓闂冨啿绔 ? ,
													areaId: "
								510180 "
												},
												{
													area: "闁姤鐫欓崼鏉跨",
													areaId: "
								510181 "
												},
												{
													area: "瑜邦厼绐炵敮 ? ,
								areaId: "
													510182 "
							},
							{
								area: "闁稑纾х敮 ? ,
													areaId: "
								510183 "
												},
												{
													area: "瀹曞洤绐炵敮 ? ,
								areaId: "
													510184 "
							},
							{
								area: "婢垛晛绨婚弬鏉垮隘",
								areaId: "
													510186 "
							},
							{
								area: "妤傛ɑ鏌婇崡妤€灏 ? ,
													areaId: "510187"
												},
												{
													area: "妤傛ɑ鏌婄憲鍨隘",
													areaId: "510188"
												}]
											},
											{
												city: "閼奉亣纭€鐢?,areaId:"
												510300 ",areaList:[{area:"閼奉亝绁︽禍鏇炲隘",areaId:"
												510302 "},{area:"鐠愨€茬俺閸 ? ?,
												areaId: "510303"
											},
											{
												area: "婢堆冪暔閸?,areaId:"
												510304 "},{area:"濞屾寧鍝楅崠 ? ,
												areaId: "510311"
											},
											{
												area: "閼斤絽骞?,
							areaId: "
												510321 "
						},
						{
							area: "鐎靛矂銆庨崢 ? ,
												areaId: "
							510322 "
											}]
										},
										{
											city: "閺€鈧弸婵婂С鐢?? ,
							areaId: "
											510400 ",
							areaList: [{
								area: "娑撴粌灏 ? ,
											areaId: "510402"
										},
										{
											area: "鐟楀灝灏?,
								areaId: "
											510403 "
							},
							{
								area: "娴犱礁鎷伴崠 ? ,
											areaId: "
								510411 "
										},
										{
											area: "缁櫕妲楅崢 ? ,
								areaId: "
											510421 "
							},
							{
								area: "閻╂劘绔熼崢 ? ,
											areaId: "
								510422 "
										}]
									},
									{
										city: "濞夌绐炵敮 ? ,
								areaId: "
										510500 ",
								areaList: [{
									area: "濮圭喖妲奸崠 ? ,
										areaId: "
									510502 "
									},
									{
										area: "缁捐櫕閭崠 ? ,
									areaId: "
										510503 "
								},
								{
									area: "姒瑩鈹堝顓炲隘",
									areaId: "
										510504 "
								},
								{
									area: "濞夌骞 ? ,
										areaId: "510521"
									},
									{
										area: "閸氬牊鐫欓崢?,areaId:"
										510522 "},{area:"閸欐瑦妗堥崢 ? ,
										areaId: "510524"
									},
									{
										area: "閸欍倛鏁介崢?,areaId:"
										510525 "}]},{city:"瀵扮兘妲肩敮 ? ,
										areaId: "510600",
										areaList: [{
											area: "閺冨矂妲奸崠?,areaId:"
											510603 "},{area:"娑擃厽鐫欓崢 ? ,
											areaId: "510623"
										},
										{
											area: "缂冩鐫欓崠?,areaId:"
											510626 "},{area:"楠炴寧鐪界敮 ? ,
											areaId: "510681"
										},
										{
											area: "娴犫偓闁€崇",
											areaId: "510682"
										},
										{
											area: "缂佺數顏剁敮?,areaId:"
											510683 "}]},{city:"缂佺敻妲肩敮 ? ,
											areaId: "510700",
											areaList: [{
												area: "濞戭亜鐓勯崠?,areaId:"
												510703 "},{area:"濞撻晲绮伴崠 ? ,
												areaId: "510704"
											},
											{
												area: "鐎瑰绐為崠?,areaId:"
												510705 "},{area:"娑撳褰撮崢 ? ,
												areaId: "510722"
											},
											{
												area: "閻╂劒娑甸崢?,areaId:"
												510723 "},{area:"濮婃挻閮婇崢 ? ,
												areaId: "510725"
											},
											{
												area: "閸栨绐涚紘灞炬閼奉亝涓嶉崢?,areaId:"
												510726 "},{area:"楠炶櫕顒熼崢 ? ,
												areaId: "510727"
											},
											{
												area: "濮圭喐琛ョ敮?,areaId:"
												510781 "},{area:"妤傛ɑ鏌婇崠 ? ,
												areaId: "510782"
											},
											{
												area: "缂佸繐绱戦崠?,areaId:"
												510783 "}]},{city:"楠炲灝鍘撶敮 ? ,
												areaId: "510800",
												areaList: [{
													area: "閸掆晛绐為崠?,areaId:"
													510802 "},{area:"閺勵厼瀵查崠 ? ,
													areaId: "510811"
												},
												{
													area: "閺堟繂銇夐崠?,areaId:"
													510812 "},{area:"閺冮缚濯块崢 ? ,
													areaId: "510821"
												},
												{
													area: "闂堟帒绐涢崢?,areaId:"
													510822 "},{area:"閸撴垿姒块崢 ? ,
													areaId: "510823"
												},
												{
													area: "閼诲秵閭崢?,areaId:"
													510824 "}]},{city:"闁倸鐣炵敮 ? ,
													areaId: "510900",
													areaList: [{
														area: "閼哥懓鍖楅崠?,areaId:"
														510903 "},{area:"鐎瑰鐪抽崠 ? ,
														areaId: "510904"
													},
													{
														area: "閽冾剚閭崢?,areaId:"
														510921 "},{area:"鐏忓嫭妞介崢 ? ,
														areaId: "510922"
													},
													{
														area: "婢堆嗗閸?,areaId:"
														510923 "},{area:"缂佸繑绁归幎鈧張顖氱磻閸欐垵灏 ? ,
														areaId: "
													510924 "
													}]
												},
												{
													city: "閸愬懏鐫欑敮 ? ,
													areaId: "
													511000 ",
													areaList: [{
														area: "鐢倷鑵戦崠 ? ,
													areaId: "
														511002 "
												},
												{
													area: "娑撴粌鍙撮崠 ? ,
														areaId: "
													511011 "
													},
													{
														area: "婵炰浇绻欓崢 ? ,
													areaId: "
														511024 "
												},
												{
													area: "鐠у嫪鑵戦崢 ? ,
														areaId: "
													511025 "
													},
													{
														area: "闂呭棙妲嶉崢 ? ,
													areaId: "
														511028 "
												}]
											},
											{
												city: "娑旀劕鍖楃敮 ? ,
														areaId: "
												511100 ",
														areaList: [{
															area: "鐢倷鑵戦崠 ? ,
												areaId: "
															511102 "
											},
											{
												area: "濞屾瑦鍜曢崠 ? ,
															areaId: "
												511111 "
														},
														{
															area: "娴滄棃鈧碍藟閸 ? ,
												areaId: "
															511112 "
											},
											{
												area: "闁叉垵褰涘▽鍐插隘",
												areaId: "
															511113 "
											},
											{
												area: "閻樺秳璐熼崢 ? ,
															areaId: "
												511123 "
														},
														{
															area: "娴滄洜鐖洪崢 ? ,
												areaId: "
															511124 "
											},
											{
												area: "婢惰鐫欓崢 ? ,
															areaId: "
												511126 "
														},
														{
															area: "濞屾劕绐涢崢 ? ,
												areaId: "
															511129 "
											},
											{
												area: "瀹勩劏绔熻ぐ婵囨閼奉亝涓嶉崢 ? ,
															areaId: "
												511132 "
														},
														{
															area: "妞诡剝绔熻ぐ婵囨閼奉亝涓嶉崢 ? ,
												areaId: "
															511133 "
											},
											{
												area: "瀹勩劎婀佺仦鍗炵",
												areaId: "
															511181 "
											}]
										},
										{
											city: "閸楁鍘栫敮 ? ,
															areaId: "
											511300 ",
															areaList: [{
																area: "妞ゅ搫绨￠崠 ? ,
											areaId: "
																511302 "
										},
										{
											area: "妤傛ê娼介崠 ? ,
																areaId: "
											511303 "
															},
															{
																area: "閸㈠娅熼崠 ? ,
											areaId: "
																511304 "
										},
										{
											area: "閸楁鍎撮崢 ? ,
																areaId: "
											511321 "
															},
															{
																area: "閽€銉ュ寳閸 ? ,
											areaId: "
																511322 "
										},
										{
											area: "閽冾剙鐣ㄩ崢 ? ,
																areaId: "
											511323 "
															},
															{
																area: "娴狀亪妾遍崢 ? ,
											areaId: "
																511324 "
										},
										{
											area: "鐟楀灝鍘栭崢 ? ,
																areaId: "
											511325 "
															},
															{
																area: "闂冨棔鑵戠敮 ? ,
											areaId: "
																511381 "
										}]
									},
									{
										city: "閻鍖楃敮 ? ,
																areaId: "
										511400 ",
																areaList: [{
																	area: "娑撴粌娼崠 ? ,
										areaId: "
																	511402 "
									},
									{
										area: "瑜邦厼鍖楅崠 ? ,
																	areaId: "
										511403 "
																},
																{
																	area: "娴犱礁顕撮崢 ? ,
										areaId: "
																	511421 "
									},
									{
										area: "濞差亪娉ら崢 ? ,
																	areaId: "
										511423 "
																},
																{
																	area: "娑撹锛戦崢 ? ,
										areaId: "
																	511424 "
									},
									{
										area: "闂堟帞顨ｉ崢 ? ,
																	areaId: "
										511425 "
																}]
															},
															{
																city: "鐎规粌顔曠敮 ? ,
										areaId: "
																511500 ",
										areaList: [{
											area: "缂堢姴鐫嗛崠 ? ,
																areaId: "
											511502 "
															},
															{
																area: "閸楁閭崠 ? ,
											areaId: "
																511503 "
										},
										{
											area: "鐎规粌顔曢崢 ? ,
																areaId: "
											511521 "
															},
															{
																area: "濮圭喎鐣ㄩ崢 ? ,
											areaId: "
																511523 "
										},
										{
											area: "闂€鍨暈閸?? ,
																areaId: "
											511524 "
															},
															{
																area: "妤傛ê骞 ? ,
											areaId: "511525"
										},
										{
											area: "閻濇瑥骞?,
																areaId: "
											511526 "
															},
															{
																area: "缁涚姾绻涢崢 ? ,
											areaId: "
																511527 "
										},
										{
											area: "閸忓瓨鏋冮崢 ? ,
																areaId: "
											511528 "
															},
															{
																area: "鐏炲繐鍖楅崢 ? ,
											areaId: "
																511529 "
										},
										{
											area: "閸欐瑥绐為崠 ? ,
																areaId: "
											511530 "
															}]
														},
														{
															city: "楠炲灝鐣ㄧ敮 ? ,
											areaId: "
															511600 ",
											areaList: [{
												area: "楠炲灝鐣ㄩ崠 ? ,
															areaId: "
												511602 "
														},
														{
															area: "閸撳秹鏀遍崠 ? ,
												areaId: "
															511603 "
											},
											{
												area: "瀹€铏潨閸?? ,
															areaId: "
												511621 "
														},
														{
															area: "濮濓箒鍎ㄩ崢 ? ,
												areaId: "
															511622 "
											},
											{
												area: "闁粯鎸夐崢 ? ,
															areaId: "
												511623 "
														},
														{
															area: "閸楀氦鎽滅敮 ? ,
												areaId: "
															511681 "
											}]
										},
										{
											city: "鏉堟儳绐炵敮 ? ,
															areaId: "
											511700 ",
															areaList: [{
																area: "闁艾绐涢崠 ? ,
											areaId: "
																511702 "
										},
										{
											area: "鏉堟儳绐涢崠 ? ,
																areaId: "
											511703 "
															},
															{
																area: "鐎癸絾鐪介崢 ? ,
											areaId: "
																511722 "
										},
										{
											area: "瀵偓濮圭喎骞?,areaId:"
											511723 "},{area:"婢堆咁伓閸 ? ?,
											areaId: "511724"
										},
										{
											area: "濞撶姴骞?,
																areaId: "
											511725 "
															},
															{
																area: "娑撳洦绨敮 ? ,
											areaId: "
																511781 "
										}]
									},
									{
										city: "闂嗗懎鐣ㄧ敮 ? ,
																areaId: "
										511800 ",
																areaList: [{
																	area: "闂嗐劌鐓勯崠 ? ,
										areaId: "
																	511802 "
									},
									{
										area: "閸氬秴鍖楅崠 ? ,
																	areaId: "
										511803 "
																},
																{
																	area: "閼姐儳绮￠崢 ? ,
										areaId: "
																	511822 "
									},
									{
										area: "濮瑰绨崢 ? ,
																	areaId: "
										511823 "
																},
																{
																	area: "閻櫕顥庨崢 ? ,
										areaId: "
																	511824 "
									},
									{
										area: "婢垛晛鍙忛崢 ? ,
																	areaId: "
										511825 "
																},
																{
																	area: "閼猴箑鍖楅崢 ? ,
										areaId: "
																	511826 "
									},
									{
										area: "鐎规繂鍙撮崢 ? ,
																	areaId: "
										511827 "
																}]
															},
															{
																city: "瀹哥繝鑵戠敮 ? ,
										areaId: "
																511900 ",
										areaList: [{
											area: "瀹告潙绐為崠 ? ,
																areaId: "
											511902 "
															},
															{
																area: "閹晠妲奸崠 ? ,
											areaId: "
																511903 "
										},
										{
											area: "闁碍鐫欓崢 ? ,
																areaId: "
											511921 "
															},
															{
																area: "閸楁鐫欓崢 ? ,
											areaId: "
																511922 "
										},
										{
											area: "楠炶櫕妲嶉崢 ? ,
																areaId: "
											511923 "
															}]
														},
														{
															city: "鐠у嫰妲肩敮 ? ,
											areaId: "
															512000 ",
											areaList: [{
												area: "闂嗕焦鐫欓崠 ? ,
															areaId: "
												512002 "
														},
														{
															area: "鐎瑰娓ら崢 ? ,
												areaId: "
															512021 "
											},
											{
												area: "娑旀劘鍤﹂崢 ? ,
															areaId: "
												512022 "
														}]
													},
													{
														city: "闂冨灝娼╅挊蹇旀缂囧本妫岄懛顏呬笉瀹 ? ,
												areaId: "
														513200 ",
												areaList: [{
													area: "妞诡剙鐨垫惔宄扮",
													areaId: "
														513201 "
												},
												{
													area: "濮硅泛绐涢崢 ? ,
														areaId: "
													513221 "
													},
													{
														area: "閻炲棗骞 ? ,
													areaId: "513222"
												},
												{
													area: "閼煎倸骞?,
														areaId: "
													513223 "
													},
													{
														area: "閺夌偓缍愰崢 ? ,
													areaId: "
														513224 "
												},
												{
													area: "娑旀繂顕濆▽鐔峰箼",
													areaId: "
														513225 "
												},
												{
													area: "闁叉垵绐涢崢 ? ,
														areaId: "
													513226 "
													},
													{
														area: "鐏忓繘鍣鹃崢 ? ,
													areaId: "
														513227 "
												},
												{
													area: "姒涙垶鎸夐崢 ? ,
														areaId: "
													513228 "
													},
													{
														area: "婢广倕顢濋崢 ? ,
													areaId: "
														513230 "
												},
												{
													area: "闂冨灝娼╅崢 ? ,
														areaId: "
													513231 "
													},
													{
														area: "閼汇儱鐨甸惄鏍у箼",
														areaId: "
													513232 "
													},
													{
														area: "缁俱垹甯崢 ? ,
													areaId: "
														513233 "
												}]
											},
											{
												city: "閻㈡ê鐡挊蹇旀閼奉亝涓嶅 ? ,
														areaId: "
												513300 ",
														areaList: [{
															area: "鎼村嘲鐣剧敮 ? ,
												areaId: "
															513301 "
											},
											{
												area: "濞夌鐣鹃崢 ? ,
															areaId: "
												513322 "
														},
														{
															area: "娑撶懓鍙嶉崢 ? ,
												areaId: "
															513323 "
											},
											{
												area: "娑旀繈绶抽崢 ? ,
															areaId: "
												513324 "
														},
														{
															area: "闂嗗懏鐫欓崢 ? ,
												areaId: "
															513325 "
											},
											{
												area: "闁挸鐡崢 ? ,
															areaId: "
												513326 "
														},
														{
															area: "閻愬婀囬崢 ? ,
												areaId: "
															513327 "
											},
											{
												area: "閻㈡ê鐡崢 ? ,
															areaId: "
												513328 "
														},
														{
															area: "閺備即绶抽崢 ? ,
												areaId: "
															513329 "
											},
											{
												area: "瀵伴攱鐗搁崢 ? ,
															areaId: "
												513330 "
														},
														{
															area: "閻х晫甯€閸 ? ,
												areaId: "
															513331 "
											},
											{
												area: "閻櫕绗崢 ? ,
															areaId: "
												513332 "
														},
														{
															area: "閼硅尪鎻崢 ? ,
												areaId: "
															513333 "
											},
											{
												area: "閻炲棗顢濋崢 ? ,
															areaId: "
												513334 "
														},
														{
															area: "瀹告潙顢濋崢 ? ,
												areaId: "
															513335 "
											},
											{
												area: "娑斺€崇厔閸?? ,
															areaId: "
												513336 "
														},
														{
															area: "缁嬭鐓勯崢 ? ,
												areaId: "
															513337 "
											},
											{
												area: "瀵版宕抽崢 ? ,
															areaId: "
												513338 "
														}]
													},
													{
														city: "閸戝鍖楄ぐ婵囨閼奉亝涓嶅 ? ,
												areaId: "
														513400 ",
												areaList: [{
													area: "鐟楁寧妲嶇敮 ? ,
														areaId: "
													513401 "
													},
													{
														area: "閺堛劑鍣烽挊蹇旀閼奉亝涓嶉崢 ? ,
													areaId: "
														513422 "
												},
												{
													area: "閻╂劖绨崢 ? ,
														areaId: "
													513423 "
													},
													{
														area: "瀵伴攱妲嶉崢 ? ,
													areaId: "
														513424 "
												},
												{
													area: "娴兼氨鎮婇崢 ? ,
														areaId: "
													513425 "
													},
													{
														area: "娴兼矮绗㈤崢 ? ,
													areaId: "
														513426 "
												},
												{
													area: "鐎逛礁宕￠崢 ? ,
														areaId: "
													513427 "
													},
													{
														area: "閺咁喗鐗搁崢 ? ,
													areaId: "
														513428 "
												},
												{
													area: "鐢啯瀚嬮崢 ? ,
														areaId: "
													513429 "
													},
													{
														area: "闁叉垿妲奸崢 ? ,
													areaId: "
														513430 "
												},
												{
													area: "閺勵叀顫庨崢 ? ,
														areaId: "
													513431 "
													},
													{
														area: "閸犳粌鐥夐崢 ? ,
													areaId: "
														513432 "
												},
												{
													area: "閸愭洖鐣為崢 ? ,
														areaId: "
													513433 "
													},
													{
														area: "鐡掑﹨銈块崢 ? ,
													areaId: "
														513434 "
												},
												{
													area: "閻㈡ɑ绀囬崢 ? ,
														areaId: "
													513435 "
													},
													{
														area: "缂囧骸顫栭崢 ? ,
													areaId: "
														513436 "
												},
												{
													area: "闂嗛攱灏濋崢 ? ,
														areaId: "
													513437 "
													}]
												}]
											},
											{
												province: "鐠愰潧绐為惇 ? ,
													areaId: "
												520000 ",
													cityList: [{
														city: "鐠愮敻妲肩敮 ? ,
												areaId: "
														520100 ",
												areaList: [{
													area: "閸楁妲戦崠 ? ,
														areaId: "
													520102 "
													},
													{
														area: "娴滄垵鍗氶崠 ? ,
													areaId: "
														520103 "
												},
												{
													area: "閼鸿鲸閭崠 ? ,
														areaId: "
													520111 "
													},
													{
														area: "娑斿苯缍嬮崠 ? ,
													areaId: "
														520112 "
												},
												{
													area: "閻ф垝绨崠 ? ,
														areaId: "
													520113 "
													},
													{
														area: "鐟欏倸鍖楀﹢鏍у隘",
														areaId: "
													520115 "
													},
													{
														area: "瀵偓闂冨啿骞?,areaId:"
														520121 "},{area:"閹垳鍏橀崢 ? ,
														areaId: "520122"
													},
													{
														area: "娣囶喗鏋冮崢?,areaId:"
														520123 "},{area:"濞撳懘鏅ｇ敮 ? ,
														areaId: "520181"
													},
													{
														area: "鐠愰潧鐣ㄩ弬鏉垮隘",
														areaId: "520182"
													},
													{
														area: "妤傛ɑ鏌婇崠?,areaId:"
														520183 "}]},{city:"閸忣厾娲忓鏉戠",areaId:"
														520200 ",areaList:[{area:"闁界喎鍖楅崠 ? ,
														areaId: "520201"
													},
													{
														area: "閸忣厽鐏婇悧鐟板隘",
														areaId: "520203"
													},
													{
														area: "濮樻潙鐓勯崢?,areaId:"
														520221 "},{area:"閻╂ê骞 ? ,
														areaId: "
													520222 "
													}]
												},
												{
													city: "闁吀绠熺敮 ? ,
													areaId: "
													520300 ",
													areaList: [{
														area: "缁俱垼濮冲畝妤€灏 ? ,
													areaId: "520302"
												},
												{
													area: "濮瑰洤绐涢崠?,areaId:"
													520303 "},{area:"閹绢厼绐為崠 ? ,
													areaId: "520304"
												},
												{
													area: "濡楁劖顣搁崢?,areaId:"
													520322 "},{area:"缂併儵妲奸崢 ? ,
													areaId: "520323"
												},
												{
													area: "濮濓絽鐣ㄩ崢?,areaId:"
													520324 "},{area:"闁挾婀℃禒鈥叉祮閺冨繗瀚嶉弮蹇氬殰濞岃骞 ? ,
													areaId: "
														520325 "
												},
												{
													area: "閸斺€崇獩娴犫€叉祮閺冨繗瀚嶉弮蹇氬殰濞岃骞?,areaId:"
													520326 "},{area:"閸戙倕鍞搁崢 ? ,
													areaId: "520327"
												},
												{
													area: "濠€鍕睙閸?,areaId:"
													520328 "},{area:"娴ｆ瑥绨￠崢 ? ,
													areaId: "520329"
												},
												{
													area: "娑旂姵鎸夐崢?,areaId:"
													520330 "},{area:"鐠с倖鎸夌敮 ? ,
													areaId: "520381"
												},
												{
													area: "娴犱焦鈧偓鐢?,areaId:"
													520382 "}]},{city:"鐎瑰銆庣敮 ? ,
													areaId: "520400",
													areaList: [{
														area: "鐟楄法顫呴崠?,areaId:"
														520402 "},{area:"楠炲啿娼╅崠 ? ,
														areaId: "520403"
													},
													{
														area: "閺咁喖鐣鹃崢?,areaId:"
														520422 "},{area:"闂€鍥х暈鐢啩绶烽弮蹇氬珝閺冨繗鍤滃▽璇插箼",areaId:"
														520423 "},{area:"閸忓啿绠旂敮鍐х贩閺冨繗瀚嶉弮蹇氬殰濞岃骞 ? ,
														areaId: "
															520424 "
													},
													{
														area: "缁鳖偂绨懟妤佹鐢啩绶烽弮蹇氬殰濞岃骞?,areaId:"
														520425 "}]},{city:"濮ｆ洝濡敮 ? ,
														areaId: "520500",
														areaList: [{
															area: "娑撳啯妲﹂崗鍐插隘",
															areaId: "520502"
														},
														{
															area: "婢堆勬煙閸?,areaId:"
															520521 "},{area:"姒涙棁銈块崢 ? ,
															areaId: "520522"
														},
														{
															area: "闁叉垶鐭欓崢?,areaId:"
															520523 "},{area:"缂佸洭鍣鹃崢 ? ,
															areaId: "520524"
														},
														{
															area: "缁炬娊娉归崢?,areaId:"
															520525 "},{area:"婵炰礁鐣炶ぐ婵囨閸ョ偞妫岄懟妤佹閼奉亝涓嶉崢 ? ,
															areaId: "520526"
														},
														{
															area: "鐠ь偆鐝烽崢?,areaId:"
															520527 "}]},{city:"闁炬粈绮婄敮 ? ,
															areaId: "520600",
															areaList: [{
																area: "绾把勭潤閸?,areaId:"
																520602 "},{area:"娑撳洤鍖楅崠 ? ,
																areaId: "520603"
															},
															{
																area: "濮圭喎褰涢崢?,areaId:"
																520621 "},{area:"閻滃鐫嗘笟妤佹閼奉亝涓嶉崢 ? ,
																areaId: "520622"
															},
															{
																area: "閻娊妲ㄩ崢?,areaId:"
																520623 "},{area:"閹繂宕￠崢 ? ,
																areaId: "520624"
															},
															{
																area: "閸楃増鐫欓崷鐔奉啀閺冨繗瀚嶉弮蹇氬殰濞岃骞?,
																	areaId: "
																520625 "
																},
																{
																	area: "瀵伴攱鐫欓崢 ? ,
																areaId: "
																	520626 "
															},
															{
																area: "濞屾寧娓ら崷鐔奉啀閺冨繗鍤滃▽璇插箼",
																areaId: "
																	520627 "
															},
															{
																area: "閺夌偓顢堥懟妤佹閼奉亝涓嶉崢 ? ,
																	areaId: "
																520628 "
																}]
															},
															{
																city: "姒涙棁銈块崡妤€绔锋笟婵囨閼绘妫岄懛顏呬笉瀹 ? ,
																areaId: "
																522300 ",
																areaList: [{
																	area: "閸忕繝绠熺敮 ? ,
																areaId: "
																	522301 "
															},
															{
																area: "閸忕繝绮婇崢 ? ,
																	areaId: "
																522322 "
																},
																{
																	area: "閺咁喖鐣ㄩ崢 ? ,
																areaId: "
																	522323 "
															},
															{
																area: "閺呮挳娈曢崢 ? ,
																	areaId: "
																522324 "
																},
																{
																	area: "鐠愮偘璧撮崢 ? ,
																areaId: "
																	522325 "
															},
															{
																area: "閺堟稖鐩侀崢 ? ,
																	areaId: "
																522326 "
																},
																{
																	area: "閸愬奔閰ｉ崢 ? ,
																areaId: "
																	522327 "
															},
															{
																area: "鐎瑰绶抽崢 ? ,
																	areaId: "
																522328 "
																}]
															},
															{
																city: "姒涙柧绗㈤崡妤勫珝閺冨繋绶遍弮蹇氬殰濞岃绐?,areaId:"
																522600 ",areaList:[{area:"閸戭垶鍣风敮 ? ,
																areaId: "522601"
															},
															{
																area: "姒涘嫬閽╅崢?,areaId:"
																522622 "},{area:"閺傜晫顫庨崢 ? ,
																areaId: "522623"
															},
															{
																area: "娑撳顭撮崢?,areaId:"
																522624 "},{area:"闂€鍥箼閸 ? ?,
																areaId: "522625"
															},
															{
																area: "瀹€鎴濈彁閸?,areaId:"
																522626 "},{area:"婢垛晜鐓撮崢 ? ,
																areaId: "522627"
															},
															{
																area: "闁匡箑鐫嗛崢?,areaId:"
																522628 "},{area:"閸撴垶娓ら崢 ? ,
																areaId: "522629"
															},
															{
																area: "閸欑増鐫欓崢?,areaId:"
																522630 "},{area:"姒涘骸閽╅崢 ? ,
																areaId: "522631"
															},
															{
																area: "濮掓洘鐫欓崢?,areaId:"
																522632 "},{area:"娴犲孩鐫欓崢 ? ,
																areaId: "522633"
															},
															{
																area: "闂嗗嘲鍖楅崢?,areaId:"
																522634 "},{area:"妤圭粯鐫欓崢 ? ,
																areaId: "522635"
															},
															{
																area: "娑撶懓顕濋崢?,areaId:"
																522636 "}]},{city:"姒涙柨宕＄敮鍐х贩閺冨繗瀚嶉弮蹇氬殰濞岃绐 ? ,
																areaId: "
																522700 ",
																areaList: [{
																	area: "闁棄瀵戠敮 ? ,
																areaId: "
																	522701 "
															},
															{
																area: "缁傚繑纭ョ敮 ? ,
																	areaId: "
																522702 "
																},
																{
																	area: "閼芥梹灏濋崢 ? ,
																areaId: "
																	522722 "
															},
															{
																area: "鐠愰潧鐣鹃崢 ? ,
																	areaId: "
																522723 "
																},
																{
																	area: "閻☆喖鐣ㄩ崢 ? ,
																areaId: "
																	522725 "
															},
															{
																area: "閻欘剙鍖楅崢 ? ,
																	areaId: "
																522726 "
																},
																{
																	area: "楠炲啿顢濋崢 ? ,
																areaId: "
																	522727 "
															},
															{
																area: "缂冩鏁婚崢 ? ,
																	areaId: "
																522728 "
																},
																{
																	area: "闂€鍧椼€庨崢 ? ,
																areaId: "
																	522729 "
															},
															{
																area: "姒瑩鍣烽崢 ? ,
																	areaId: "
																522730 "
																},
																{
																	area: "閹姵鎸夐崢 ? ,
																areaId: "
																	522731 "
															},
															{
																area: "娑撳鍏樺瀛樻閼奉亝涓嶉崢 ? ,
																	areaId: "
																522732 "
																}]
															}]
														},
														{
															province: "娴滄垵宕￠惇 ? ,
																areaId: "
															530000 ",
																cityList: [{
																	city: "閺勫棙妲戠敮 ? ,
															areaId: "
																	530100 ",
															areaList: [{
																area: "娴滄柨宕曢崠 ? ,
																	areaId: "
																530102 "
																},
																{
																	area: "閻╂﹢绶抽崠 ? ,
																areaId: "
																	530103 "
															},
															{
																area: "鐎规ɑ娴崠 ? ,
																	areaId: "
																530111 "
																},
																{
																	area: "鐟楀灝鍖楅崠 ? ,
																areaId: "
																	530112 "
															},
															{
																area: "娑撴粌绐涢崠 ? ,
																	areaId: "
																530113 "
																},
																{
																	area: "閸涘牐纭€閸 ? ,
																areaId: "
																	530114 "
															},
															{
																area: "閺呭鐣為崢 ? ,
																	areaId: "
																530122 "
																},
																{
																	area: "鐎靛本鐨崢 ? ,
																areaId: "
																	530124 "
															},
															{
																area: "鐎规粏澹囬崢 ? ,
																	areaId: "
																530125 "
																},
																{
																	area: "閻櫕鐏勮ぐ婵囨閼奉亝涓嶉崢 ? ,
																areaId: "
																	530126 "
															},
															{
																area: "瀹撯晜妲戦崢 ? ,
																	areaId: "
																530127 "
																},
																{
																	area: "缁傚嫬濮栬ぐ婵囨閼绘妫岄懛顏呬笉閸 ? ,
																areaId: "
																	530128 "
															},
															{
																area: "鐎佃崵鏁婚崶鐐存瑜版繃妫岄懛顏呬笉閸?? ,
																	areaId: "
																530129 "
																},
																{
																	area: "鐎瑰鐣炵敮 ? ,
																areaId: "
																	530181 "
															},
															{
																area: "濠婂洣鑵戦弬鏉垮隘",
																areaId: "
																	530182 "
															},
															{
																area: "妤傛ɑ鏌婇崠 ? ,
																	areaId: "
																530183 "
																}]
															},
															{
																city: "閺囨煡娼犵敮 ? ,
																areaId: "
																530300 ",
																areaList: [{
																	area: "妤规帡绨鹃崠 ? ,
																areaId: "
																	530302 "
															},
															{
																area: "濞屽墽娉崠 ? ,
																	areaId: "
																530303 "
																},
																{
																	area: "妞诡剟绶抽崢 ? ,
																areaId: "
																	530321 "
															},
															{
																area: "闂勫棜澹囬崢 ? ,
																	areaId: "
																530322 "
																},
																{
																	area: "鐢牆鐣婚崢 ? ,
																areaId: "
																	530323 "
															},
															{
																area: "缂冩閽╅崢 ? ,
																	areaId: "
																530324 "
																},
																{
																	area: "鐎靛本绨崢 ? ,
																areaId: "
																	530325 "
															},
															{
																area: "娴兼碍杈伴崢 ? ,
																	areaId: "
																530326 "
																},
																{
																	area: "鐎癸絽鈻夌敮 ? ,
																areaId: "
																	530381 "
															}]
														},
														{
															city: "閻滃閭敮 ? ,
																	areaId: "
															530400 ",
																	areaList: [{
																		area: "缁俱垹顢欓崠 ? ,
															areaId: "
																		530402 "
														},
														{
															area: "濮圭喎绐涢崠 ? ,
																		areaId: "
															530403 "
																	},
																	{
																		area: "濠㈠嫭鐫欓崢 ? ,
															areaId: "
																		530422 "
														},
														{
															area: "闁碍鎹ｉ崢 ? ,
																		areaId: "
															530423 "
																	},
																	{
																		area: "閸楀骸鐣為崢 ? ,
															areaId: "
																		530424 "
														},
														{
															area: "閺勬捇妫崢 ? ,
																		areaId: "
															530425 "
																	},
																	{
																		area: "瀹勩劌鍖楄ぐ婵囨閼奉亝涓嶉崢 ? ,
															areaId: "
																		530426 "
														},
														{
															area: "閺傛澘閽╄ぐ婵囨閸岋絾妫岄懛顏呬笉閸 ? ,
																		areaId: "
															530427 "
																	},
																	{
																		area: "閸忓啯鐫欓崫鍫濆嚬閺冨繐缍曢弮蹇撳亝閺冨繗鍤滃▽璇插箼",
																		areaId: "
															530428 "
																	}]
																},
																{
																	city: "娣囨繂鍖楃敮 ? ,
															areaId: "
																	530500 ",
															areaList: [{
																area: "闂呭棝妲奸崠 ? ,
																	areaId: "
																530502 "
																},
																{
																	area: "閺傜晫鏁婚崢 ? ,
																areaId: "
																	530521 "
															},
															{
																area: "姒瑩娅熼崢 ? ,
																	areaId: "
																530523 "
																},
																{
																	area: "閺勫苯鐣為崢 ? ,
																areaId: "
																	530524 "
															},
															{
																area: "閼垫儳鍟跨敮 ? ,
																	areaId: "
																530581 "
																}]
															},
															{
																city: "閺勵參鈧艾绔?,areaId:"
																530600 ",areaList:[{area:"閺勵參妲奸崠 ? ,
																areaId: "530602"
															},
															{
																area: "妞翠胶鏁婚崢?,areaId:"
																530621 "},{area:"瀹秆冾啀閸 ? ?,
																areaId: "530622"
															},
															{
																area: "閻╂劖瑙﹂崢?,areaId:"
																530623 "},{area:"婢堆冨彠閸 ? ?,
																areaId: "530624"
															},
															{
																area: "濮樼鏉介崢?,areaId:"
																530625 "},{area:"缂併儲鐫欓崢 ? ,
																areaId: "530626"
															},
															{
																area: "闂€鍥碂閸?,areaId:"
																530627 "},{area:"瑜版繆澹囬崢 ? ,
																areaId: "530628"
															},
															{
																area: "婵炰椒淇婇崢?,areaId:"
																530629 "},{area:"濮樻潙鐦滈崢 ? ,
																areaId: "530630"
															}]
														},
														{
															city: "娑撹姤鐫欑敮?,areaId:"
															530700 ",areaList:[{area:"閸欍倕鐓勯崠 ? ,
															areaId: "530702"
														},
														{
															area: "閻滃绶崇痪瀹犮偪閺冨繗鍤滃▽璇插箼",
															areaId: "530721"
														},
														{
															area: "濮樻瓕鍎ㄩ崢?,areaId:"
															530722 "},{area:"閸楀骸娼介崢 ? ,
															areaId: "530723"
														},
														{
															area: "鐎逛浇鎸嗚ぐ婵囨閼奉亝涓嶉崢?,areaId:"
															530724 "}]},{city:"閺咁喗骞㈢敮 ? ,
															areaId: "530800",
															areaList: [{
																area: "閹繆瀵橀崠?,areaId:"
																530802 "},{area:"鐎逛焦骞㈤崫鍫濆嚬閺冨繐缍曢弮蹇氬殰濞岃骞 ? ,
																areaId: "
																530821 "
															},
															{
																area: "婢с劍鐫欓崫鍫濆嚬閺冨繗鍤滃▽璇插箼",
																areaId: "
																530822 "
															},
															{
																area: "閺咁垯绗㈣ぐ婵囨閼奉亝涓嶉崢 ? ,
																areaId: "
																530823 "
															},
															{
																area: "閺咁垵鑳洪崒锝嗘瑜版繃妫岄懛顏呬笉閸 ? ,
																areaId: "
																530824 "
															},
															{
																area: "闂€鍥ㄧ焹瑜版繃妫岄崫鍫濆嚬閺冨繑濯虹粊婊勬閼奉亝涓嶉崢 ? ,
																areaId: "
																530825 "
															},
															{
																area: "濮圭喎鐓勯崫鍫濆嚬閺冨繐缍曢弮蹇氬殰濞岃骞 ? ,
																areaId: "530826"
															},
															{
																area: "鐎涚喕绻涢崒锝嗘閹峰顨￠弮蹇庨ク閺冨繗鍤滃▽璇插箼",
																areaId: "530827"
															},
															{
																area: "濠㈡粍閽甸幏澶岊殹閺冨繗鍤滃▽璇插箼",
																areaId: "530828"
															},
															{
																area: "鐟楄法娲樻担銈嗘閼奉亝涓嶉崢?,areaId:"
																530829 "}]},{city:"娑撳瓨閽电敮 ? ,
																areaId: "530900",
																areaList: [{
																	area: "娑撳绻戦崠?,areaId:"
																	530902 "},{area:"閸戙倕绨￠崢 ? ,
																	areaId: "530921"
																},
																{
																	area: "娴滄垵骞?,
																	areaId: "
																	530922 "
																},
																{
																	area: "濮樼鐥夐崢 ? ,
																	areaId: "
																	530923 "
																},
																{
																	area: "闂€鍥ф倣閸?? ,
																	areaId: "
																	530924 "
																},
																{
																	area: "閸欏本鐫欓幏澶岊殹閺冨繋楗弮蹇撶閺堟妫岄崒锝嗘閼奉亝涓嶉崢 ? ,
																	areaId: "
																	530925 "
																},
																{
																	area: "閼板潡鈹堥崒锝嗘娴ｃ倖妫岄懛顏呬笉閸?? ,
																	areaId: "
																	530926 "
																},
																{
																	area: "濞屟勭爱娴ｃ倖妫岄懛顏呬笉閸 ? ,
																	areaId: "
																	530927 "
																}]
															},
															{
																city: "濡ゆ岸娉熻ぐ婵囨閼奉亝涓嶅 ? ,
																	areaId: "
																532300 ",
																	areaList: [{
																		area: "濡ゆ岸娉熺敮 ? ,
																areaId: "
																		532301 "
															},
															{
																area: "閸欏本鐓嗛崢 ? ,
																		areaId: "
																532322 "
																	},
																	{
																		area: "閻楃喎鐣鹃崢 ? ,
																areaId: "
																		532323 "
															},
															{
																area: "閸楁宕曢崢 ? ,
																		areaId: "
																532324 "
																	},
																	{
																		area: "婵艾鐣ㄩ崢 ? ,
																areaId: "
																		532325 "
															},
															{
																area: "婢堆冾潫閸?? ,
																		areaId: "
																532326 "
																	},
																	{
																		area: "濮橀晲绮婇崢 ? ,
																areaId: "
																		532327 "
															},
															{
																area: "閸忓啳鐨ㄩ崢 ? ,
																		areaId: "
																532328 "
																	},
																	{
																		area: "濮濓箑鐣鹃崢 ? ,
																areaId: "
																		532329 "
															},
															{
																area: "缁傚嫪璧撮崢 ? ,
																		areaId: "
																532331 "
																	}]
																},
																{
																	city: "缁俱垺娓ら崫鍫濆嚬閺冨繐缍曢弮蹇氬殰濞岃绐 ? ,
																areaId: "532500",
																areaList: [{
																	area: "娑擃亝妫敮?,areaId:"
																	532501 "},{area:"瀵偓鏉╂粌绔 ? ,
																	areaId: "
																		532502 "
																},
																{
																	area: "閽傛瑨鍤滅敮 ? ,
																		areaId: "
																	532503 "
																	},
																	{
																		area: "瀵儱瀚嗙敮 ? ,
																	areaId: "
																		532504 "
																},
																{
																	area: "鐏炲繗绔熼懟妤佹閼奉亝涓嶉崢 ? ,
																		areaId: "
																	532523 "
																	},
																	{
																		area: "瀵ょ儤鎸夐崢 ? ,
																	areaId: "
																		532524 "
																},
																{
																	area: "閻啿鐫嗛崢 ? ,
																		areaId: "
																	532525 "
																	},
																	{
																		area: "濞夋瓕銈块崢 ? ,
																	areaId: "
																		532527 "
																},
																{
																	area: "閸忓啴妲奸崢 ? ,
																		areaId: "
																	532528 "
																	},
																	{
																		area: "缁俱垺娓ら崢 ? ,
																	areaId: "
																		532529 "
																},
																{
																	area: "闁叉垵閽╅懟妤佹閻熻埖妫岄崒锝嗘閼奉亝涓嶉崢 ? ,
																		areaId: "
																	532530 "
																	},
																	{
																		area: "缂佹寧妲崢 ? ,
																	areaId: "
																		532531 "
																},
																{
																	area: "濞屽啿褰涢悷鑸垫閼奉亝涓嶉崢 ? ,
																		areaId: "
																	532532 "
																	}]
																},
																{
																	city: "閺傚洤鍖楁竟顔芥閼绘妫岄懛顏呬笉瀹 ? ,
																	areaId: "
																	532600 ",
																	areaList: [{
																		area: "閺傚洤鍖楃敮 ? ,
																	areaId: "
																		532601 "
																},
																{
																	area: "閻艾鍖楅崢 ? ,
																		areaId: "
																	532622 "
																	},
																	{
																		area: "鐟楄法鏆ｉ崢 ? ,
																	areaId: "
																		532623 "
																},
																{
																	area: "妤圭粯鐗€閸р€冲箼",
																	areaId: "
																		532624 "
																},
																{
																	area: "妞诡剙鍙ч崢 ? ,
																		areaId: "
																	532625 "
																	},
																	{
																		area: "娑撴ê瀵抽崢 ? ,
																	areaId: "
																		532626 "
																},
																{
																	area: "楠炲灝宕￠崢 ? ,
																		areaId: "
																	532627 "
																	},
																	{
																		area: "鐎靛苯鐣為崢 ? ,
																	areaId: "
																		532628 "
																}]
															},
															{
																city: "鐟楀灝寮婚悧鍫㈡捈閸岋絾妫岄懛顏呬笉瀹 ? ,
																		areaId: "
																532800 ",
																		areaList: [{
																			area: "閺咁垱妞界敮 ? ,
																areaId: "
																			532801 "
															},
															{
																area: "閸曟劖鎹ｉ崢 ? ,
																			areaId: "
																532822 "
																		},
																		{
																			area: "閸曟劘鍘為崢 ? ,
																areaId: "
																			532823 "
															}]
														},
														{
															city: "婢堆呮倞閻ц姤妫岄懛顏呬笉瀹 ? ,
																			areaId: "
															532900 ",
																			areaList: [{
																				area: "婢堆呮倞鐢?? ,
															areaId: "
																				532901 "
														},
														{
															area: "濠曠偓绻涜ぐ婵囨閼奉亝涓嶉崢 ? ,
																				areaId: "
															532922 "
																			},
																			{
																				area: "缁併儰绨崢 ? ,
															areaId: "
																				532923 "
														},
														{
															area: "鐎规儳绐涢崢 ? ,
																				areaId: "
															532924 "
																			},
																			{
																				area: "瀵儲娴崢 ? ,
															areaId: "
																				532925 "
														},
														{
															area: "閸楁閿ぐ婵囨閼奉亝涓嶉崢 ? ,
																				areaId: "
															532926 "
																			},
																			{
																				area: "瀹稿秴鍖楄ぐ婵囨閸ョ偞妫岄懛顏呬笉閸?? ,
															areaId: "
																				532927 "
														},
														{
															area: "濮樼閽╅崢 ? ,
																				areaId: "
															532928 "
																			},
																			{
																				area: "娴滄垿绶抽崢 ? ,
															areaId: "
																				532929 "
														},
														{
															area: "濞茶鲸绨崢 ? ,
																				areaId: "
															532930 "
																			},
																			{
																				area: "閸撴垵绐涢崢 ? ,
															areaId: "
																				532931 "
														},
														{
															area: "妤ｃ倕绨￠崢 ? ,
																				areaId: "
															532932 "
																			}]
																		},
																		{
																			city: "瀵板嘲鐣崒锝嗘閺咁垶顣弮蹇氬殰濞岃绐?,areaId:"
																			533100 ",areaList:[{area:"閻熺偘闄勭敮 ? ,
																			areaId: "533102"
																		},
																		{
																			area: "閼烘帒绔?,
															areaId: "
																			533103 "
														},
														{
															area: "濮婁焦娓ら崢 ? ,
																			areaId: "
															533122 "
																		},
																		{
																			area: "閻╁牊鐫欓崢 ? ,
															areaId: "
																			533123 "
														},
														{
															area: "闂勫洤绐涢崢 ? ,
																			areaId: "
															533124 "
																		}]
																	},
																	{
																		city: "閹帗鐫欓崒鍫濆厒閺冨繗鍤滃▽璇茬獮",
																		areaId: "
															533300 ",
																		areaList: [{
																			area: "濞夊憡鎸夌敮 ? ,
															areaId: "
																			533301 "
														},
														{
															area: "缁傚繗纭€閸 ? ,
																			areaId: "
															533323 "
																		},
																		{
																			area: "鐠愨€冲寳閻欘剟绶抽弮蹇斺偓鎺撴閼奉亝涓嶉崢 ? ,
															areaId: "
																			533324 "
														},
														{
															area: "閸忔澘娼介惂鑺ユ閺咁喚鑳岄弮蹇氬殰濞岃骞 ? ,
																			areaId: "533325"
																		}]
																	},
																	{
																		city: "鏉╊亜绨￠挊蹇旀閼奉亝涓嶅?,areaId:"
																		533400 ",areaList:[{area:"妫ｆ瑦鐗搁柌灞惧鐢 ? ?,
																		areaId: "533401"
																	},
																	{
																		area: "瀵扮兘鎸﹂崢?,areaId:"
																		533422 "},{area:"缂佺銈块崒鍫濆厒閺冨繗鍤滃▽璇插箼",areaId:"
																		533423 "}]}]},{province:"鐟楄儻妫岄懛顏呬笉閸 ? ?,
																		areaId: "540000",
																		cityList: [{
																			city: "閹峰鎯冪敮?,areaId:"
																			540100 ",areaList:[{area:"閸╁骸鍙ч崠 ? ,
																			areaId: "540102"
																		},
																		{
																			area: "閸棝绶冲宄扮啊閸?,areaId:"
																			540103 "},{area:"閺嬫鎳嗛崢 ? ,
																			areaId: "540121"
																		},
																		{
																			area: "瑜版捇娉熼崢?,areaId:"
																			540122 "},{area:"鐏忓吋婀崢 ? ,
																			areaId: "540123"
																		},
																		{
																			area: "閺囧弶鎸夐崢?,areaId:"
																			540124 "},{area:"鏉堟儳鐡崢 ? ,
																			areaId: "540126"
																		},
																		{
																			area: "婢с劎顏跺銉ュ幢閸?,areaId:"
																			540127 "}]},{city:"閺冦儱鏉搁崚娆忕",areaId:"
																			540200 ",areaList:[{area:"濡楁垹褰旂€涙粌灏 ? ,
																			areaId: "
															540202 "
																		},
																		{
																			area: "閸楁婀弸妤€骞?,areaId:"
																			540221 "},{area:"濮圭喎鐡崢 ? ,
																			areaId: "540222"
																		},
																		{
																			area: "鐎规碍妫╅崢?,areaId:"
																			540223 "},{area:"閽€銊ㄥ杸閸 ? ?,
																			areaId: "540224"
																		},
																		{
																			area: "閹峰鐡崢?,areaId:"
																			540225 "},{area:"閺勫倷绮婇崢 ? ,
																			areaId: "540226"
																		},
																		{
																			area: "鐠嬨垽鈧岸妫崢?,areaId:"
																			540227 "},{area:"閻ц姤婀曢崢 ? ,
																			areaId: "540228"
																		},
																		{
																			area: "娴犱礁绔烽崢?,areaId:"
																			540229 "},{area:"鎼寸兘鈹堥崢 ? ,
																			areaId: "540230"
																		},
																		{
																			area: "鐎规氨绮ㄩ崢?,areaId:"
																			540231 "},{area:"娴犳彃鍙嶉崢 ? ,
																			areaId: "540232"
																		},
																		{
																			area: "娴滄矮绗㈤崢?,areaId:"
																			540233 "},{area:"閸氬娈曢崢 ? ,
																			areaId: "540234"
																		},
																		{
																			area: "閼卞倹濯洪張銊ュ箼",
																			areaId: "540235"
																		},
																		{
																			area: "閽€銊ユ閸?,areaId:"
																			540236 "},{area:"瀹€妤€鍙嶉崢 ? ,
																			areaId: "540237"
																		}]
																	},
																	{
																		city: "閺勫矂鍏樼敮?,areaId:"
																		540300 ",areaList:[{area:"閸椔ゅ閸 ? ?,
																		areaId: "540302"
																	},
																	{
																		area: "濮圭喕鎻崢?,areaId:"
																		540321 "},{area:"鐠惵ゎ潕閸 ? ?,
																		areaId: "540322"
																	},
																	{
																		area: "缁绠ゆ鎰箼",
																		areaId: "540323"
																	},
																	{
																		area: "娑撲線娼氶崢?,areaId:"
																		540324 "},{area:"鐎电喖娉ら崢 ? ,
																		areaId: "540325"
																	},
																	{
																		area: "閸忣偄顔栭崢?,areaId:"
																		540326 "},{area:"瀹革箒纭€閸 ? ?,
																		areaId: "540327"
																	},
																	{
																		area: "閼烘帒鎮嶉崢?,areaId:"
																		540328 "},{area:"濞叉盯娈曢崢 ? ,
																		areaId: "540329"
																	},
																	{
																		area: "鏉堢懓娼╅崢?,areaId:"
																		540330 "}]},{city:"閺嬫濮栫敮 ? ,
																		areaId: "540400",
																		areaList: [{
																			area: "瀹告潙鐤侀崠?,areaId:"
																			540402 "},{area:"瀹搞儱绔峰Ч鐔绘彧閸 ? ?,
																			areaId: "540421"
																		},
																		{
																			area: "缁櫕鐏勯崢?,areaId:"
																			540422 "},{area:"婢с劏鍔氶崢 ? ,
																			areaId: "540423"
																		},
																		{
																			area: "濞夈垹鐦戦崢?,areaId:"
																			540424 "},{area:"鐎电喖娈旈崢 ? ,
																			areaId: "540425"
																		},
																		{
																			area: "閺堟骞?,
															areaId: "
																			540426 "
														}]
													},
													{
														city: "鐏炲崬宕＄敮 ? ,
																			areaId: "
														540500 ",
																			areaList: [{
																				area: "娑斿啩绗㈤崠 ? ,
														areaId: "
																				540502 "
													},
													{
														area: "閹靛骸娉崢 ? ,
																				areaId: "
														540521 "
																			},
																			{
																				area: "鐠愨€虫閸?? ,
														areaId: "
																				540522 "
													},
													{
														area: "濡楁垶妫╅崢 ? ,
																				areaId: "
														540523 "
																			},
																			{
																				area: "閻炶偐绮ㄩ崢 ? ,
														areaId: "
																				540524 "
													},
													{
														area: "閺囧弶婢楅崢 ? ,
																				areaId: "
														540525 "
																			},
																			{
																				area: "閹侯亞绶ㄩ崢 ? ,
														areaId: "
																				540526 "
													},
													{
														area: "濞叉稒澧￠崢 ? ,
																				areaId: "
														540527 "
																			},
																			{
																				area: "閸旂姵鐓￠崢 ? ,
														areaId: "
																				540528 "
													},
													{
														area: "闂呭棗鐡欓崢 ? ,
																				areaId: "
														540529 "
																			},
																			{
																				area: "闁挎瑩鍋呴崢 ? ,
														areaId: "
																				540530 "
													},
													{
														area: "濞搭亜宕辩€涙劕骞 ? ,
																				areaId: "540531"
																			}]
																		},
																		{
																			city: "闁絾娲搁崷鏉垮隘",
																			areaId: "542400",
																			areaList: [{
																				area: "闁絾娲搁崢?,areaId:"
																				542421 "},{area:"閸㈠绮犻崢 ? ,
																				areaId: "542422"
																			},
																			{
																				area: "濮ｆ柨顩ч崢?,areaId:"
																				542423 "},{area:"閼卞倽宕抽崢 ? ,
																				areaId: "542424"
																			},
																			{
																				area: "鐎瑰顦块崢?,areaId:"
																				542425 "},{area:"閻㈣櫕澧￠崢 ? ,
																				areaId: "542426"
																			},
																			{
																				area: "缁便垹骞?,
														areaId: "
																				542427 "
													},
													{
														area: "閻濐厽鍨愰崢 ? ,
																				areaId: "
														542428 "
																			},
																			{
																				area: "瀹告挳娼氶崢 ? ,
														areaId: "
																				542429 "
													},
													{
														area: "鐏忚偐甯ラ崢 ? ,
																				areaId: "
														542430 "
																			},
																			{
																				area: "閸欏本绠归崢 ? ,
														areaId: "
																				542431 "
													}]
												},
												{
													city: "闂冨潡鍣烽崷鏉垮隘",
													areaId: "
																				542500 ",
													areaList: [{
														area: "閺咁喖鍙為崢 ? ,
																				areaId: "
														542521 "
																			},
																			{
																				area: "閺堫叀鎻崢 ? ,
														areaId: "
																				542522 "
													},
													{
														area: "閸ｈ泛鐨甸崢 ? ,
																				areaId: "
														542523 "
																			},
																			{
																				area: "閺冦儱婀￠崢 ? ,
														areaId: "
																				542524 "
													},
													{
														area: "闂堚晛鎮忛崢 ? ,
																				areaId: "
														542525 "
																			},
																			{
																				area: "閺€鐟板灟閸?? ,
														areaId: "
																				542526 "
													},
													{
														area: "閹侯亜瀚熼崢 ? ,
																				areaId: "
														542527 "
																			}]
																		}]
																	},
																	{
																		province: "闂勬洝銈块惇 ? ,
														areaId: "
																		610000 ",
														cityList: [{
															city: "鐟楀灝鐣ㄧ敮 ? ,
																		areaId: "
															610100 ",
																		areaList: [{
																			area: "閺傛澘鐓勯崠 ? ,
															areaId: "
																			610102 "
														},
														{
															area: "绾版垶鐏勯崠 ? ,
																			areaId: "
															610103 "
																		},
																		{
																			area: "閼惧弶绠归崠 ? ,
															areaId: "
																			610104 "
														},
														{
															area: "閻忕偞藟閸 ? ,
																			areaId: "
															610111 "
																		},
																		{
																			area: "閺堫亜銇庨崠 ? ,
															areaId: "
																			610112 "
														},
														{
															area: "闂嗕礁顢欓崠 ? ,
																			areaId: "
															610113 "
																		},
																		{
																			area: "闂冨氦澹囬崠 ? ,
															areaId: "
																			610114 "
														},
														{
															area: "娑撳瓨閮婇崠 ? ,
																			areaId: "
															610115 "
																		},
																		{
																			area: "闂€鍨暔閸?? ,
															areaId: "
																			610116 "
														},
														{
															area: "妤傛﹢娅熼崠 ? ,
																			areaId: "
															610117 "
																		},
																		{
																			area: "閽冩繄鏁崢 ? ,
															areaId: "
																			610122 "
														},
														{
															area: "閸涖劏鍤﹂崢 ? ,
																			areaId: "
															610124 "
																		},
																		{
																			area: "閹村嘲骞?,areaId:"
																			610125 "},{area:"闁娀鍊崠 ? ,
																			areaId: "610118"
																		},
																		{
																			area: "閺囧弶鐫欓弬鏉垮隘",
																			areaId: "610127"
																		},
																		{
																			area: "妤傛ɑ鏌婇崠?,areaId:"
																			610128 "}]},{city:"闁炬粌绐涚敮 ? ,
																			areaId: "610200",
																			areaList: [{
																				area: "閻滃娉崠?,areaId:"
																				610202 "},{area:"閸楁澘褰撮崠 ? ,
																				areaId: "610203"
																			},
																			{
																				area: "閼扳偓瀹哥偛灏?,
																areaId: "
																				610204 "
															},
															{
																area: "鐎规粌鎮伴崢 ? ,
																				areaId: "
																610222 "
																			}]
																		},
																		{
																			city: "鐎规繈娴敮 ? ,
																areaId: "
																			610300 ",
																areaList: [{
																	area: "濞擃厽鑺遍崠 ? ,
																			areaId: "
																	610302 "
																		},
																		{
																			area: "闁叉垵褰撮崠 ? ,
																	areaId: "
																			610303 "
																},
																{
																	area: "闂勫牅绮ㄩ崠 ? ,
																			areaId: "
																	610304 "
																		},
																		{
																			area: "閸戙倗绻戦崢 ? ,
																	areaId: "
																			610322 "
																},
																{
																	area: "瀹€鎰寳閸 ? ,
																			areaId: "
																	610323 "
																		},
																		{
																			area: "閹靛爼顥撻崢 ? ,
																	areaId: "
																			610324 "
																},
																{
																	area: "閻骞 ? ,
																			areaId: "610326"
																		},
																		{
																			area: "闂勫洤骞?,
																	areaId: "
																			610327 "
																},
																{
																	area: "閸楀啴妲奸崢 ? ,
																			areaId: "
																	610328 "
																		},
																		{
																			area: "妤圭喐鐖堕崢 ? ,
																	areaId: "
																			610329 "
																},
																{
																	area: "閸戙倕骞 ? ,
																			areaId: "610330"
																		},
																		{
																			area: "婢额亞娅ч崢?,areaId:"
																			610331 "},{area:"妤傛ɑ鏌婇崠 ? ,
																			areaId: "610332"
																		}]
																	},
																	{
																		city: "閸滄悂妲肩敮?,areaId:"
																		610400 ",areaList:[{area:"缁夛箓鍏橀崠 ? ,
																		areaId: "610402"
																	},
																	{
																		area: "閺夈劑娅熼崠?,areaId:"
																		610403 "},{area:"濞擃厼鐓勯崠 ? ,
																		areaId: "610404"
																	},
																	{
																		area: "娑撳甯崢?,areaId:"
																		610422 "},{area:"濞夐箖妲奸崢 ? ,
																		areaId: "610423"
																	},
																	{
																		area: "娑旀儳骞?,
																areaId: "
																		610424 "
															},
															{
																area: "缁€鍏肩ˉ閸 ? ,
																		areaId: "
																610425 "
																	},
																	{
																		area: "濮樼顕撮崢 ? ,
																areaId: "
																		610426 "
															},
															{
																area: "瑜邦剙骞 ? ,
																		areaId: "610427"
																	},
																	{
																		area: "闂€鎸庮劅閸?,areaId:"
																		610428 "},{area:"閺冾剟鍊崢 ? ,
																		areaId: "610429"
																	},
																	{
																		area: "濞ｅ啿瀵查崢?,areaId:"
																		610430 "},{area:"濮濓箑濮涢崢 ? ,
																		areaId: "610431"
																	},
																	{
																		area: "閸忔潙閽╃敮?,areaId:"
																		610481 "},{area:"妤傛ɑ鏌婇崠 ? ,
																		areaId: "610482"
																	}]
																},
																{
																	city: "濞擃厼宕＄敮?,areaId:"
																	610500 ",areaList:[{area:"娑撳瓨鑵戦崠 ? ,
																	areaId: "610502"
																},
																{
																	area: "閸楀骸绐為崠?,areaId:"
																	610503 "},{area:"濞肩厧鍙ч崢 ? ,
																	areaId: "610522"
																},
																{
																	area: "婢堆嗗礉閸?,areaId:"
																	610523 "},{area:"閸氬牓妲奸崢 ? ,
																	areaId: "610524"
																},
																{
																	area: "濠㈠嫬鐓勯崢?,areaId:"
																	610525 "},{area:"閽傛彃鐓勯崢 ? ,
																	areaId: "610526"
																},
																{
																	area: "閻ц姤鎸夐崢?,areaId:"
																	610527 "},{area:"鐎靛苯閽╅崢 ? ,
																	areaId: "610528"
																},
																{
																	area: "闂娾晛鐓勭敮?,areaId:"
																	610581 "},{area:"閸楀酣妲剧敮 ? ,
																	areaId: "610582"
																}]
															},
															{
																city: "瀵よ泛鐣ㄧ敮?,areaId:"
																610600 ",areaList:[{area:"鐎规繂顢欓崠 ? ,
																areaId: "610602"
															},
															{
																area: "瀵ゅ爼鏆遍崢?,areaId:"
																610621 "},{area:"瀵よ泛绐涢崢 ? ,
																areaId: "610622"
															},
															{
																area: "鐎涙劙鏆遍崢?,areaId:"
																610623 "},{area:"鐎瑰顢ｉ崠 ? ,
																areaId: "610624"
															},
															{
																area: "韫囨ぞ鑵归崢?,areaId:"
																610625 "},{area:"閸氱鎹ｉ崢 ? ,
																areaId: "610626"
															},
															{
																area: "閻㈡ɑ纭ラ崢?,areaId:"
																610627 "},{area:"鐎靛苯骞 ? ,
																areaId: "
														610628 "
															},
															{
																area: "濞叉稑绐涢崢 ? ,
														areaId: "
																610629 "
													},
													{
														area: "鐎规粌绐涢崢 ? ,
																areaId: "
														610630 "
															},
															{
																area: "姒涘嫰绶抽崢 ? ,
														areaId: "
																610631 "
													},
													{
														area: "姒涘嫰娅熼崢 ? ,
																areaId: "
														610632 "
															}]
														},
														{
															city: "濮瑰鑵戠敮 ? ,
														areaId: "
															610700 ",
														areaList: [{
															area: "濮瑰褰撮崠 ? ,
															areaId: "
															610702 "
														},
														{
															area: "閸楁鍎滈崢 ? ,
															areaId: "
															610721 "
														},
														{
															area: "閸╁骸娴愰崢 ? ,
															areaId: "
															610722 "
														},
														{
															area: "濞插骞?,areaId:"
															610723 "},{area:"鐟楀じ鍩傞崢 ? ,
															areaId: "610724"
														},
														{
															area: "閸曞骞?,
															areaId: "
															610725 "
														},
														{
															area: "鐎逛礁宸遍崢 ? ,
															areaId: "
															610726 "
														},
														{
															area: "閻ｃ儵妲奸崢 ? ,
															areaId: "
															610727 "
														},
														{
															area: "闂€鍥у弽閸 ? ,
															areaId: "
															610728 "
														},
														{
															area: "閻ｆ瑥娼╅崢 ? ,
															areaId: "
															610729 "
														},
														{
															area: "娴ｆ稑娼介崢 ? ,
															areaId: "
															610730 "
														}]
													},
													{
														city: "濮掑棙鐏勭敮 ? ,
															areaId: "
														610800 ",
															areaList: [{
																area: "濮掑棝妲奸崠 ? ,
														areaId: "
																610802 "
													},
													{
														area: "濡亜鍖楅崠 ? ,
																areaId: "
														610803 "
															},
															{
																area: "缁佺偞婀崠 ? ,
														areaId: "
																610821 "
													},
													{
														area: "鎼存粏鑳洪崢 ? ,
																areaId: "
														610822 "
															},
															{
																area: "闂堟牞绔熼崢 ? ,
														areaId: "
																610824 "
													},
													{
														area: "鐎规俺绔熼崢 ? ,
																areaId: "
														610825 "
															},
															{
																area: "缂併儱鐥夐崢 ? ,
														areaId: "
																610826 "
													},
													{
														area: "缁疇鍓涢崢 ? ,
																areaId: "
														610827 "
															},
															{
																area: "娴ｅ啿骞 ? ,
														areaId: "610828"
													},
													{
														area: "閸氭潙鐗庨崢?,areaId:"
														610829 "},{area:"濞撳懏閿崢 ? ,
														areaId: "610830"
													},
													{
														area: "鐎涙劖搴婇崢?,areaId:"
														610831 "}]},{city:"鐎瑰鎮嶇敮 ? ,
														areaId: "610900",
														areaList: [{
															area: "濮瑰鑺遍崠?,areaId:"
															610902 "},{area:"濮瑰妲鹃崢 ? ,
															areaId: "610921"
														},
														{
															area: "閻櫕纭ラ崢?,areaId:"
															610922 "},{area:"鐎逛線妾块崢 ? ,
															areaId: "610923"
														},
														{
															area: "缁鳖偊妲奸崢?,areaId:"
															610924 "},{area:"瀹€姘辨疂閸 ? ?,
															areaId: "610925"
														},
														{
															area: "楠炲啿鍩勯崢?,areaId:"
															610926 "},{area:"闂€鍥ф浇閸 ? ?,
															areaId: "610927"
														},
														{
															area: "閺冾剟妲奸崢?,areaId:"
															610928 "},{area:"閻ц姤娓ら崢 ? ,
															areaId: "610929"
														}]
													},
													{
														city: "閸熷棙绀囩敮?,areaId:"
														611000 ",areaList:[{area:"閸熷棗绐為崠 ? ,
														areaId: "611002"
													},
													{
														area: "濞叉稑宕￠崢?,areaId:"
														611021 "},{area:"娑撶懓鍤栭崢 ? ,
														areaId: "611022"
													},
													{
														area: "閸熷棗宕￠崢?,areaId:"
														611023 "},{area:"鐏為亶妲奸崢 ? ,
														areaId: "611024"
													},
													{
														area: "闂€鍥х暔閸?,areaId:"
														611025 "},{area:"閺岀偞鎸夐崢 ? ,
														areaId: "611026"
													}]
												},
												{
													city: "鐟楀灝鎹€閺傛澘灏?,
															areaId: "
													611100 ",
															areaList: [{
																area: "缁岀儤鑵愰弬鏉跨厔",
																areaId: "
													611101 "
															},
															{
																area: "濞岋絼绗㈤弬鏉跨厔",
																areaId: "
													611102 "
															},
															{
																area: "缁夛附鐪介弬鏉跨厔",
																areaId: "
													611103 "
															},
															{
																area: "濞岋綀銈块弬鏉跨厔",
																areaId: "
													611104 "
															},
															{
																area: "濞夌偓娓ら弬鏉跨厔",
																areaId: "
													611105 "
															}]
														}]
													},
													{
														province: "閻㈡鍊戦惇 ? ,
													areaId: "
														620000 ",
													cityList: [{
														city: "閸忔澘绐炵敮 ? ,
														areaId: "
														620100 ",
														areaList: [{
															area: "閸╁骸鍙ч崠 ? ,
														areaId: "
															620102 "
													},
													{
														area: "娑撳啴鍣峰▽鍐插隘",
														areaId: "
															620103 "
													},
													{
														area: "鐟楀灝娴愰崠 ? ,
															areaId: "
														620104 "
														},
														{
															area: "鐎瑰鐣為崠 ? ,
														areaId: "
															620105 "
													},
													{
														area: "缁俱垹褰滈崠 ? ,
															areaId: "
														620111 "
														},
														{
															area: "濮樺摜娅ラ崢 ? ,
														areaId: "
															620121 "
													},
													{
														area: "閻ㄥ鍙為崢 ? ,
															areaId: "
														620122 "
														},
														{
															area: "濮掑棔鑵戦崢 ? ,
														areaId: "
															620123 "
													},
													{
														area: "閸忔澘绐為弬鏉垮隘",
														areaId: "
															620124 "
													},
													{
														area: "妤傛ɑ鏌婇崠 ? ,
															areaId: "
														620125 "
														},
														{
															area: "缂佸繑绁瑰鈧崣鎴濆隘",
															areaId: "
														620126 "
														}]
													},
													{
														city: "閸㈠鍞遍崗鍐茬",
														areaId: "
														620200 ",
														areaList: [{
															area: "闂嗗嫬鍙ч崠 ? ,
														areaId: "
															620201 "
													},
													{
														area: "闂€鍨厔閸?? ,
															areaId: "
														620202 "
														},
														{
															area: "闂€婊堟惂閸 ? ,
														areaId: "
															620203 "
													}]
												},
												{
													city: "闁叉垶妲嶇敮 ? ,
															areaId: "
													620300 ",
															areaList: [{
																area: "闁叉垵绐涢崠 ? ,
													areaId: "
																620302 "
												},
												{
													area: "濮樺憡妲嶉崢 ? ,
																areaId: "
													620321 "
															}]
														},
														{
															city: "閻т粙鎽辩敮 ? ,
													areaId: "
															620400 ",
													areaList: [{
														area: "閻т粙鎽遍崠 ? ,
															areaId: "
														620402 "
														},
														{
															area: "楠炲啿绐涢崠 ? ,
														areaId: "
															620403 "
													},
													{
														area: "闂堟牞绻欓崢 ? ,
															areaId: "
														620421 "
														},
														{
															area: "娴兼艾鐣為崢 ? ,
														areaId: "
															620422 "
													},
													{
														area: "閺咁垱鍢查崢 ? ,
															areaId: "
														620423 "
														}]
													},
													{
														city: "婢垛晜鎸夌敮 ? ,
														areaId: "
														620500 ",
														areaList: [{
															area: "缁夛箑绐為崠 ? ,
														areaId: "
															620502 "
													},
													{
														area: "妤癸妇袧閸 ? ,
															areaId: "
														620503 "
														},
														{
															area: "濞撳懏鎸夐崢 ? ,
														areaId: "
															620521 "
													},
													{
														area: "缁夛箑鐣ㄩ崢 ? ,
															areaId: "
														620522 "
														},
														{
															area: "閻㈡鑳洪崢 ? ,
														areaId: "
															620523 "
													},
													{
														area: "濮濓箑鍖楅崢 ? ,
															areaId: "
														620524 "
														},
														{
															area: "瀵姴顔嶅婵嗘礀閺冨繗鍤滃▽璇插箼",
															areaId: "
														620525 "
														}]
													},
													{
														city: "濮濓箑鈻夌敮 ? ,
														areaId: "
														620600 ",
														areaList: [{
															area: "閸戝绐為崠 ? ,
														areaId: "
															620602 "
													},
													{
														area: "濮樻垵瀚熼崢 ? ,
															areaId: "
														620621 "
														},
														{
															area: "閸欍倖姘崢 ? ,
														areaId: "
															620622 "
													},
													{
														area: "婢垛晝顨㈤挊蹇旀閼奉亝涓嶉崢 ? ,
															areaId: "
														620623 "
														}]
													},
													{
														city: "瀵姵甯犵敮 ? ,
														areaId: "
														620700 ",
														areaList: [{
															area: "閻㈡ê绐為崠 ? ,
														areaId: "
															620702 "
													},
													{
														area: "閼插啫宕＄憗鏇炴祼閺冨繗鍤滃▽璇插箼",
														areaId: "
															620721 "
													},
													{
														area: "濮樻垳绠伴崢 ? ,
															areaId: "
														620722 "
														},
														{
															area: "娑撳瓨杈伴崢 ? ,
														areaId: "
															620723 "
													},
													{
														area: "妤傛ê褰撮崢 ? ,
															areaId: "
														620724 "
														},
														{
															area: "鐏炲彉鑵归崢 ? ,
														areaId: "
															620725 "
													}]
												},
												{
													city: "楠炲啿鍣崇敮 ? ,
															areaId: "
													620800 ",
															areaList: [{
																area: "瀹曞棗纭抽崠 ? ,
													areaId: "
																620802 "
												},
												{
													area: "濞夋儳绐涢崢 ? ,
																areaId: "
													620821 "
															},
															{
																area: "閻忛潧褰撮崢 ? ,
													areaId: "
																620822 "
												},
												{
													area: "瀹曞洣淇婇崢 ? ,
																areaId: "
													620823 "
															},
															{
																area: "閸楀簼娑甸崢 ? ,
													areaId: "
																620824 "
												},
												{
													area: "鎼村嫭姘崢 ? ,
																areaId: "
													620825 "
															},
															{
																area: "闂堟瑥鐣為崢 ? ,
													areaId: "
																620826 "
												}]
											},
											{
												city: "闁版帗纭ョ敮 ? ,
																areaId: "
												620900 ",
																areaList: [{
																	area: "閼插啫绐為崠 ? ,
												areaId: "
																	620902 "
											},
											{
												area: "闁叉垵顢欓崢 ? ,
																	areaId: "
												620921 "
																},
																{
																	area: "閻℃粌绐為崢 ? ,
												areaId: "
																	620922 "
											},
											{
												area: "閼插啫瀵抽拏娆忓綔閺冨繗鍤滃▽璇插箼",
												areaId: "
																	620923 "
											},
											{
												area: "闂冨灝鍘犳繅鐐叉惐閽€銊ュ帬閺冨繗鍤滃▽璇插箼",
												areaId: "
																	620924 "
											},
											{
												area: "閻滃妫敮 ? ,
																	areaId: "
												620981 "
																},
																{
																	area: "閺侊妇鍘＄敮 ? ,
												areaId: "
																	620982 "
											}]
										},
										{
											city: "鎼村棝妲肩敮 ? ,
																	areaId: "
											621000 ",
																	areaList: [{
																		area: "鐟楀灝鍢查崠 ? ,
											areaId: "
																		621002 "
										},
										{
											area: "鎼村棗鐓勯崢 ? ,
																		areaId: "
											621021 "
																	},
																	{
																		area: "閻滎垰骞?,areaId:"
																		621022 "},{area:"閸楀孩鐫滈崢 ? ,
																		areaId: "621023"
																	},
																	{
																		area: "閸氬牊鎸夐崢?,areaId:"
																		621024 "},{area:"濮濓絽鐣為崢 ? ,
																		areaId: "621025"
																	},
																	{
																		area: "鐎逛礁骞?,
											areaId: "
																		621026 "
										},
										{
											area: "闂€鍥у斧閸 ? ,
																		areaId: "
											621027 "
																	}]
																},
																{
																	city: "鐎规俺銈跨敮 ? ,
											areaId: "
																	621100 ",
											areaList: [{
												area: "鐎瑰鐣鹃崠 ? ,
																	areaId: "
												621102 "
																},
																{
																	area: "闁碍鑵戦崢 ? ,
												areaId: "
																	621121 "
											},
											{
												area: "闂勫洩銈块崢 ? ,
																	areaId: "
												621122 "
																},
																{
																	area: "濞擃厽绨崢 ? ,
												areaId: "
																	621123 "
											},
											{
												area: "娑撳瓨涓查崢 ? ,
																	areaId: "
												621124 "
																},
																{
																	area: "濠曞啿骞?,areaId:"
																	621125 "},{area:"瀹€宄板箼",areaId:"
																	621126 "}]},{city:"闂勫洤宕＄敮 ? ,
																	areaId: "621200",
																	areaList: [{
																		area: "濮濓箓鍏橀崠?,areaId:"
																		621202 "},{area:"閹存劕骞 ? ,
																		areaId: "
													621221 "
																	},
																	{
																		area: "閺傚洤骞?,areaId:"
																		621222 "},{area:"鐎规洘妲嶉崢 ? ,
																		areaId: "621223"
																	},
																	{
																		area: "鎼村嘲骞?,
													areaId: "
																		621224 "
												},
												{
													area: "鐟楀灝鎷伴崢 ? ,
																		areaId: "
													621225 "
																	},
																	{
																		area: "缁€鐓庡箼",
																		areaId: "
													621226 "
																	},
																	{
																		area: "瀵拌棄骞?,areaId:"
																		621227 "},{area:"娑撱倕缍嬮崢 ? ,
																		areaId: "621228"
																	}]
																},
																{
																	city: "娑撴潙顦撮崶鐐存閼奉亝涓嶅?,areaId:"
																	622900 ",areaList:[{area:"娑撴潙顦寸敮 ? ,
																	areaId: "622901"
																},
																{
																	area: "娑撴潙顦撮崢?,areaId:"
																	622921 "},{area:"鎼磋渹绠伴崢 ? ,
																	areaId: "622922"
																},
																{
																	area: "濮樻悂娼犻崢?,areaId:"
																	622923 "},{area:"楠炴寧娓ら崢 ? ,
																	areaId: "622924"
																},
																{
																	area: "閸滃本鏂傞崢?,areaId:"
																	622925 "},{area:"娑撴粈鍩傞弮蹇氬殰濞岃骞 ? ,
																	areaId: "
												622926 "
																},
																{
																	area: "缁夘垳鐓剁仦鍙樼箽鐎瑰妫屾稉婊€鍩傞弮蹇旀嫽閹峰妫岄懛顏呬笉閸?? ,
												areaId: "
																	622927 "
											}]
										},
										{
											city: "閻㈡ê宕￠挊蹇旀閼奉亝涓嶅 ? ,
																	areaId: "
											623000 ",
																	areaList: [{
																		area: "閸氬牅缍旂敮 ? ,
											areaId: "
																		623001 "
										},
										{
											area: "娑撳瓨姹熼崢 ? ,
																		areaId: "
											623021 "
																	},
																	{
																		area: "閸楁挸鍑归崢 ? ,
											areaId: "
																		623022 "
										},
										{
											area: "閼哥喐娲搁崢 ? ,
																		areaId: "
											623023 "
																	},
																	{
																		area: "鏉╊參鍎撮崢 ? ,
											areaId: "
																		623024 "
										},
										{
											area: "閻滄稒娲搁崢 ? ,
																		areaId: "
											623025 "
																	},
																	{
																		area: "绾板本娲搁崢 ? ,
											areaId: "
																		623026 "
										},
										{
											area: "婢跺繑娓ら崢 ? ,
																		areaId: "
											623027 "
																	}]
																}]
															},
															{
																province: "闂堟帗鎹ｉ惇 ? ,
											areaId: "
																630000 ",
											cityList: [{
												city: "鐟楀灝鐣炵敮 ? ,
																areaId: "
												630100 ",
																areaList: [{
																	area: "閸╁簼绗㈤崠 ? ,
												areaId: "
																	630102 "
											},
											{
												area: "閸╁簼鑵戦崠 ? ,
																	areaId: "
												630103 "
																},
																{
																	area: "閸╁氦銈块崠 ? ,
												areaId: "
																	630104 "
											},
											{
												area: "閸╁骸瀵抽崠 ? ,
																	areaId: "
												630105 "
																},
																{
																	area: "婢堆団偓姘礀閺冨繐婀￠弮蹇氬殰濞岃骞?,areaId:"
																	630121 "},{area:"濠€鐔惰厬閸 ? ?,
																	areaId: "630122"
																},
																{
																	area: "濠€鐔哥爱閸?,areaId:"
																	630123 "}]},{city:"濞磋渹绗㈢敮 ? ,
																	areaId: "630200",
																	areaList: [{
																		area: "娑旀劙鍏橀崠?,areaId:"
																		630202 "},{area:"楠炲啿鐣ㄩ崠 ? ,
																		areaId: "630203"
																	},
																	{
																		area: "濮樻垵鎷伴崶鐐存閸︾喐妫岄懛顏呬笉閸?,areaId:"
																		630222 "},{area:"娴滄帒濮崷鐔告閼奉亝涓嶉崢 ? ,
																		areaId: "630223"
																	},
																	{
																		area: "閸栨牠娈曢崶鐐存閼奉亝涓嶉崢?,areaId:"
																		630224 "},{area:"瀵邦亜瀵查幘鎺撳閺冨繗鍤滃▽璇插箼",areaId:"
																		630225 "}]},{city:"濞村嘲瀵抽挊蹇旀閼奉亝涓嶅 ? ,
																		areaId: "632200",
																		areaList: [{
																			area: "闂傘劍绨崶鐐存閼奉亝涓嶉崢?,areaId:"
																			632221 "},{area:"缁佷浇绻涢崢 ? ,
																			areaId: "632222"
																		},
																		{
																			area: "濞撮攱妾归崢?,areaId:"
																			632223 "},{area:"閸掓艾鐧傞崢 ? ,
																			areaId: "632224"
																		}]
																	},
																	{
																		city: "姒涘嫬宕￠挊蹇旀閼奉亝涓嶅?,areaId:"
																		632300 ",areaList:[{area:"閸氬奔绮婇崢 ? ,
																		areaId: "632321"
																	},
																	{
																		area: "鐏忔牗澧￠崢?,areaId:"
																		632322 "},{area:"濞夎棄绨遍崢 ? ,
																		areaId: "632323"
																	},
																	{
																		area: "濞屽啿宕￠拏娆忓綔閺冨繗鍤滃▽璇插箼",
																		areaId: "632324"
																	}]
																},
																{
																	city: "濞村嘲宕￠挊蹇旀閼奉亝涓嶅?,areaId:"
																	632500 ",areaList:[{area:"閸忓崬鎷伴崢 ? ,
																	areaId: "632521"
																},
																{
																	area: "閸氬苯鐥夐崢?,areaId:"
																	632522 "},{area:"鐠愰潧鐥夐崢 ? ,
																	areaId: "632523"
																},
																{
																	area: "閸忓瓨鎹ｉ崢?,areaId:"
																	632524 "},{area:"鐠愰潧宕￠崢 ? ,
																	areaId: "632525"
																}]
															},
															{
																city: "閺嬫粍绀囬挊蹇旀閼奉亝涓嶅?,areaId:"
																632600 ",areaList:[{area:"閻滄稒鐬鹃崢 ? ,
																areaId: "632621"
															},
															{
																area: "閻濐厾甯ラ崢?,areaId:"
																632622 "},{area:"閻㈡ê鐥夐崢 ? ,
																areaId: "632623"
															},
															{
																area: "鏉堢偓妫╅崢?,areaId:"
																632624 "},{area:"娑斿懏涓嶉崢 ? ,
																areaId: "632625"
															},
															{
																area: "閻滄稑顦块崢?,areaId:"
																632626 "}]},{city:"閻滃鐖查挊蹇旀閼奉亝涓嶅 ? ,
																areaId: "632700",
																areaList: [{
																	area: "閻滃鐖茬敮?,areaId:"
																	632701 "},{area:"閺夊倸顦块崢 ? ,
																	areaId: "632722"
																},
																{
																	area: "缁夋澘顦块崢?,areaId:"
																	632723 "},{area:"濞岃顦块崢 ? ,
																	areaId: "632724"
																},
																{
																	area: "閸ュ﹨鍞夐崢?,areaId:"
																	632725 "},{area:"閺囨煡澶懢鍗炲箼",areaId:"
																	632726 "}]},{city:"濞寸柉銈块拏娆忓綔閺冨繗妫岄弮蹇氬殰濞岃绐 ? ,
																	areaId: "
												632800 ",
																	areaList: [{
																		area: "閺嶇厧鐨甸張銊ョ",
																		areaId: "
												632801 "
																	},
																	{
																		area: "瀵拌渹鎶ら崫鍫濈",
																		areaId: "
												632802 "
																	},
																	{
																		area: "娑斿苯鍙為崢 ? ,
												areaId: "
																		632821 "
											},
											{
												area: "闁棄鍙為崢 ? ,
																		areaId: "
												632822 "
																	},
																	{
																		area: "婢垛晛閮撮崢 ? ,
												areaId: "
																		632823 "
											}]
										}]
									},
									{
										province: "鐎逛礁顦撮崶鐐存閼奉亝涓嶉崠 ? ,
																		areaId: "
										640000 ",
																		cityList: [{
																			city: "闁捐泛绐涚敮 ? ,
										areaId: "
																			640100 ",
										areaList: [{
											area: "閸忔潙绨￠崠 ? ,
																			areaId: "
											640104 "
																		},
																		{
																			area: "鐟楀灝顦撮崠 ? ,
											areaId: "
																			640105 "
										},
										{
											area: "闁叉垵鍤栭崠 ? ,
																			areaId: "
											640106 "
																		},
																		{
																			area: "濮樼鐣為崢 ? ,
											areaId: "
																			640121 "
										},
										{
											area: "鐠愬搫鍙為崢 ? ,
																			areaId: "
											640122 "
																		},
																		{
																			area: "閻忓灚顒熺敮 ? ,
											areaId: "
																			640181 "
										},
										{
											area: "缂佸繑绁瑰鈧崣鎴濆隘",
											areaId: "
																			640182 "
										}]
									},
									{
										city: "閻啿妲剧仦鍗炵",
										areaId: "
																			640200 ",
										areaList: [{
											area: "婢堆勵劅閸欙絽灏 ? ,
																			areaId: "640202"
																		},
																		{
																			area: "閹姴鍟橀崠?,areaId:"
																			640205 "},{area:"楠炲磭缍忛崢 ? ,
																			areaId: "640221"
																		},
																		{
																			area: "缂佸繑绁瑰鈧崣鎴濆隘",
																			areaId: "640222"
																		}]
																	},
																	{
																		city: "閸氭潙绻濈敮?,areaId:"
																		640300 ",areaList:[{area:"閸掆晠鈧艾灏 ? ,
																		areaId: "
										640302 "
																	},
																	{
																		area: "缁俱垹顕崼鈥冲隘",
																		areaId: "
										640303 "
																	},
																	{
																		area: "閻╂劖鐫滈崢 ? ,
										areaId: "
																		640323 "
									},
									{
										area: "閸氬苯绺鹃崢 ? ,
																		areaId: "
										640324 "
																	},
																	{
																		area: "闂堟帡鎽愬畡鈥崇",
																		areaId: "
										640381 "
																	}]
																},
																{
																	city: "閸ュ搫甯敮 ? ,
										areaId: "
																	640400 ",
										areaList: [{
											area: "閸樼喎绐為崠 ? ,
																	areaId: "
											640402 "
																},
																{
																	area: "鐟楀灝鎮忛崢 ? ,
											areaId: "
																	640422 "
										},
										{
											area: "闂呭棗鐥夐崢 ? ,
																	areaId: "
											640423 "
																},
																{
																	area: "濞夌偓绨崢 ? ,
											areaId: "
																	640424 "
										},
										{
											area: "瑜邦參妲奸崢 ? ,
																	areaId: "
											640425 "
																}]
															},
															{
																city: "娑擃厼宕肩敮 ? ,
											areaId: "
																640500 ",
											areaList: [{
												area: "濞屾瑥娼径鏉戝隘",
												areaId: "
																640502 "
											},
											{
												area: "娑擃厼鐣為崢 ? ,
																areaId: "
												640521 "
															},
															{
																area: "濞村嘲甯崢 ? ,
												areaId: "
																640522 "
											}]
										}]
									},
									{
										province: "閺傛壆鏋傜紒鏉戞儱鐏忔棁鍤滃▽璇插隘",
										areaId: "
																650000 ",
										cityList: [{
											city: "娑斿矂鐬鹃張銊╃秷鐢 ? ,
																areaId: "
											650100 ",
																areaList: [{
																	area: "婢垛晛鍖楅崠 ? ,
											areaId: "
																	650102 "
										},
										{
											area: "濞屾瑤绶峰鏉戝帬閸 ? ,
																	areaId: "
											650103 "
																},
																{
																	area: "閺傛澘绔堕崠 ? ,
											areaId: "
																	650104 "
										},
										{
											area: "濮樺锛堝▽鐔峰隘",
											areaId: "
																	650105 "
										},
										{
											area: "婢舵潙鎮插▽鍐插隘",
											areaId: "
																	650106 "
										},
										{
											area: "鏉堟儳娼呴崺搴″隘",
											areaId: "
																	650107 "
										},
										{
											area: "缁厖绗㈤崠 ? ,
																	areaId: "
											650109 "
																},
																{
																	area: "娑斿矂鐬鹃張銊╃秷閸?? ,
											areaId: "
																	650121 "
										}]
									},
									{
										city: "閸忓濯洪悳娑楃贩鐢 ? ,
																	areaId: "
										650200 ",
																	areaList: [{
																		area: "閻欘剙鍖楃€涙劕灏?,areaId:"
																		650202 "},{area:"閸忓濯洪悳娑楃贩閸 ? ?,
																		areaId: "650203"
																	},
																	{
																		area: "閻х晫鈷堝鈺佸隘",
																		areaId: "650204"
																	},
																	{
																		area: "娑斿苯鐨电粋鎯у隘",
																		areaId: "650205"
																	}]
																},
																{
																	city: "閸氭劙鐬鹃悾顏勭",
																	areaId: "650400",
																	areaList: [{
																		area: "妤傛ɑ妲嶉崠?,areaId:"
																		650402 "},{area:"闁垰鏉介崢 ? ,
																		areaId: "650421"
																	},
																	{
																		area: "閹垫ê鍘犻柅濠傚箼",
																		areaId: "650422"
																	}]
																},
																{
																	city: "閸濆牆鐦戠敮?,areaId:"
																	650500 ",areaList:[{area:"娴煎﹤绐為崠 ? ,
																	areaId: "650502"
																},
																{
																	area: "瀹告挳鍣烽崸銈呮惐閽€銊ュ帬閼奉亝涓嶉崢?,areaId:"
																	650521 "},{area:"娴煎﹤鎯ラ崢 ? ,
																	areaId: "650522"
																}]
															},
															{
																city: "閺勫苯鎮忛崶鐐存閼奉亝涓嶅?,areaId:"
																652300 ",areaList:[{area:"閺勫苯鎮忕敮 ? ,
																areaId: "652301"
															},
															{
																area: "闂冩粌鎮嶇敮?,areaId:"
																652302 "},{area:"閸涚厧娴樻竟浣稿箼",areaId:"
																652323 "},{area:"閻滄稓鎾奸弬顖氬箼",areaId:"
																652324 "},{area:"婵傚洤褰撮崢 ? ,
																areaId: "652325"
															},
															{
																area: "閸氬婀拃銊ョ毜閸?,areaId:"
																652327 "},{area:"閺堛劌鐎块崫鍫ｆ儍閸忓鍤滃▽璇插箼",areaId:"
																652328 "}]},{city:"閸楁艾鐨垫繅鏃€濯洪拏娆忓綔閼奉亝涓嶅 ? ,
																areaId: "652700",
																areaList: [{
																	area: "閸楁矮绠扮敮?,areaId:"
																	652701 "},{area:"闂冩寧濯虹仦鍗炲經鐢 ? ?,
																	areaId: "652702"
																},
																{
																	area: "缁偓娓ら崢?,areaId:"
																	652722 "},{area:"濞撯晜纭ラ崢 ? ,
																	areaId: "652723"
																}]
															},
															{
																city: "瀹告挳鐓堕柈顓燁殻閽傛瑥褰滈懛顏呬笉瀹?,areaId:"
																652800 ",areaList:[{area:"鎼存挸鐨甸崟鎺戠",areaId:"
																652801 "},{area:"鏉烆喖褰撮崢 ? ,
																areaId: "652822"
															},
															{
																area: "鐏忓濡崢?,areaId:"
																652823 "},{area:"閼汇儳绶﹂崢 ? ,
																areaId: "652824"
															},
															{
																area: "娑撴梹婀崢?,areaId:"
																652825 "},{area:"閻掑鈧棗娲栭弮蹇氬殰濞岃骞 ? ,
																areaId: "
								652826 "
															},
															{
																area: "閸滃矂娼ら崢 ? ,
								areaId: "
																652827 "
							},
							{
								area: "閸滃瞼顢氶崢 ? ,
																areaId: "
								652828 "
															},
															{
																area: "閸楁碍绠归崢 ? ,
								areaId: "
																652829 "
							}]
						},
						{
							city: "闂冨灝鍘犻懟蹇撴勾閸 ? ,
																areaId: "
							652900 ",
																areaList: [{
																	area: "闂冨灝鍘犻懟蹇撶",
																	areaId: "
							652901 "
																},
																{
																	area: "濞撯晛顔栭崢 ? ,
							areaId: "
																	652922 "
						},
						{
							area: "鎼存捁婧呴崢 ? ,
																	areaId: "
							652923 "
																},
																{
																	area: "濞屾瑩娉ら崢 ? ,
							areaId: "
																	652924 "
						},
						{
							area: "閺傛澘鎷伴崢 ? ,
																	areaId: "
							652925 "
																},
																{
																	area: "閹锋粌鐓勯崢 ? ,
							areaId: "
																	652926 "
						},
						{
							area: "娑斿奔绮堥崢 ? ,
																	areaId: "
							652927 "
																},
																{
																	area: "闂冭法鎽濋幓鎰箼",
																	areaId: "
							652928 "
																},
																{
																	area: "閺岊垰娼介崢 ? ,
							areaId: "
																	652929 "
						}]
					},
					{
						city: "閸忓鐡崟鎺曞珒閺岊垰鐨甸崗瀣摤閼奉亝涓嶅 ? ,
																	areaId: "
						653000 ",
																	areaList: [{
																		area: "闂冨灝娴樻禒鈧敮 ? ,
						areaId: "
																		653001 "
					},
					{
						area: "闂冨灝鍘犻梽璺哄箼",
						areaId: "
																		653022 "
					},
					{
						area: "闂冨灝鎮庢總鍥у箼",
						areaId: "
																		653023 "
					},
					{
						area: "娑斿本浼嗛崢 ? ,
																		areaId: "
						653024 "
																	}]
																},
																{
																	city: "閸犫偓娴犫偓閸︽澘灏?,areaId:"
																	653100 ",areaList:[{area:"閸犫偓娴犫偓鐢 ? ?,
																	areaId: "653101"
																},
																{
																	area: "閻ゅ繘妾崢?,areaId:"
																	653121 "},{area:"閻ゅ繐瀚嗛崢 ? ,
																	areaId: "653122"
																},
																{
																	area: "閼诲崬鎮忓▽娆忓箼",
																	areaId: "653123"
																},
																{
																	area: "濞夎姤娅橀崢?,areaId:"
																	653124 "},{area:"閼惧氦婧呴崢 ? ,
																	areaId: "653125"
																},
																{
																	area: "閸欒泛鐓勯崢?,areaId:"
																	653126 "},{area:"妤癸妇娲婇幓鎰箼",areaId:"
																	653127 "},{area:"瀹€铏珮濠€鏍у箼",areaId:"
																	653128 "},{area:"娴艰棄绗€閸 ? ?,
																	areaId: "653129"
																},
																{
																	area: "瀹稿瓨顨熼崢?,areaId:"
																	653130 "},{area:"婵夋柧绮堟惔鎾崇毜楠炴彃顢欓崥澶婂帬閼奉亝涓嶉崢 ? ,
																	areaId: "653131"
																}]
															},
															{
																city: "閸滃瞼鏁崷鏉垮隘",
																areaId: "653200",
																areaList: [{
																	area: "閸滃瞼鏁敮?,areaId:"
																	653201 "},{area:"閸滃瞼鏁崢 ? ,
																	areaId: "653221"
																},
																{
																	area: "婢с劎甯€閸?,areaId:"
																	653222 "},{area:"閻喖鍖楅崢 ? ,
																	areaId: "653223"
																},
																{
																	area: "濞叉稒閮搁崢?,areaId:"
																	653224 "},{area:"缁涙牕瀚嗛崢 ? ,
																	areaId: "653225"
																},
																{
																	area: "娴滃海鏁崢?,areaId:"
																	653226 "},{area:"濮樻垳璧撮崢 ? ,
																	areaId: "653227"
																}]
															},
															{
																city: "娴煎﹦濡崫鍫ｆ儍閸忓鍤滃▽璇茬獮",
																areaId: "654000",
																areaList: [{
																	area: "娴煎﹤鐣炵敮?,areaId:"
																	654002 "},{area:"婵傚骸鎮茬敮 ? ,
																	areaId: "654003"
																},
																{
																	area: "闂囧秴鐨甸弸婊勬焿鐢?,areaId:"
																	654004 "},{area:"娴煎﹤鐣為崢 ? ,
																	areaId: "654021"
																},
																{
																	area: "鐎电喎绔烽弻銉ョ毜闁库€查泦閼奉亝涓嶉崢?,areaId:"
																	654022 "},{area:"闂囧秴鐓勯崢 ? ,
																	areaId: "654023"
																},
																{
																	area: "瀹糕晝鏆€閸?,areaId:"
																	654024 "},{area:"閺傜増绨崢 ? ,
																	areaId: "654025"
																},
																{
																	area: "閺勵叀瀚冮崢?,areaId:"
																	654026 "},{area:"閻楃懓鍘犻弬顖氬箼",areaId:"
																	654027 "},{area:"鐏忕厧瀚嗛崗瀣箼",areaId:"
																	654028 "}]},{city:"婵夋柨鐓勯崷鏉垮隘",areaId:"
																	654200 ",areaList:[{area:"婵夋柨鐓勭敮 ? ,
																	areaId: "654201"
																},
																{
																	area: "娑斿矁瀚冪敮?,areaId:"
																	654202 "},{area:"妫版繃鏅遍崢 ? ,
																	areaId: "654221"
																},
																{
																	area: "濞屾瑦鍜曢崢?,areaId:"
																	654223 "},{area:"閹垫﹢鍣烽崢 ? ,
																	areaId: "654224"
																},
																{
																	area: "鐟佹洘鐨崢?,areaId:"
																	654225 "},{area:"閸滃苯绔烽崗瀣鐏忔棁鎸嬮崣銈堝殰濞岃骞 ? ,
																	areaId: "
						654226 "
																}]
															},
															{
																city: "闂冨灝瀚嗗▔鏉挎勾閸?? ,
						areaId: "
																654300 ",
						areaList: [{
							area: "闂冨灝瀚嗗▔鏉跨",
							areaId: "
																654301 "
						},
						{
							area: "鐢啫鐨靛ú銉ュ箼",
							areaId: "
																654321 "
						},
						{
							area: "鐎靛矁鏆ｉ崢 ? ,
																areaId: "
							654322 "
															},
															{
																area: "缁傚繑鎹ｉ崢 ? ,
							areaId: "
																654323 "
						},
						{
							area: "閸濆牆鍙嶅▽鍐插箼",
							areaId: "
																654324 "
						},
						{
							area: "闂堟帗娓ら崢 ? ,
																areaId: "
							654325 "
															},
															{
																area: "閸氬婀稊鍐ㄥ箼",
																areaId: "
							654326 "
															}]
														},
														{
															city: "閻櫕娓ょ€涙劕绔?,areaId:"
															659001 ",areaList:[{area:"閺傛澘鐓勭悰妤呬壕",areaId:"
															659101 "},{area:"閸氭垿妲肩悰妤呬壕",areaId:"
															659102 "},{area:"缁俱垹鍖楃悰妤呬壕",areaId:"
															659103 "},{area:"閼颁浇顢滅悰妤呬壕",areaId:"
															659104 "},{area:"娑撴粌鐓勭悰妤呬壕",areaId:"
															659105 "},{area:"閸栨纭ラ梹 ? ,
															areaId: "659106"
														},
														{
															area: "閻櫕娓ょ€涙劒鍩?,
							areaId: "
															659107 "
						},
						{
							area: "娑撯偓娴滄柧绨╅崶 ? ,
															areaId: "
							659108 "
														}]
													},
													{
														city: "闂冩寧濯虹亸鏂跨",
														areaId: "
							659002 ",
														areaList: [{
															area: "楠炲摜顩寸捄顖濐敎闁?? ,
							areaId: "
															659201 "
						},
						{
							area: "闁叉垿鎽卞婵婄熅鐞涙浜 ? ,
															areaId: "659202"
														},
														{
															area: "闂堟帗婢楃捄顖濐敎闁?,areaId:"
															659203 "},{area:"閸楁褰涚悰妤呬壕",areaId:"
															659204 "},{area:"閹垫ê鏉告笟婵呭焸",areaId:"
															659205 "},{area:"闁叉垿鎽卞婵嬫櫍",areaId:"
															659206 "}]},{city:"閸ョ偓婀懜鎺戝帬鐢 ? ?,
															areaId: "659003",
															areaList: [{
																area: "閸ョ偓婀懜鎺戝帬鐢倸灏?,
								areaId: "
																659301 "
							},
							{
								area: "閸忛潧娲熼崶娑樺磩閸ユ稑娲 ? ,
																areaId: "659302"
															},
															{
																area: "閸忛潧娲熼崶娑樺磩娑旀繂娲?,
								areaId: "
																659303 "
							},
							{
								area: "閸忛潧娲熸禍鏂垮磩閸 ? ,
																areaId: "
								659304 "
															},
															{
																area: "閸忛潧娲熸禍鏂垮磩娑撯偓閸?? ,
								areaId: "
																659305 "
							},
							{
								area: "閸忛潧娲熸禍鏂垮磩娴滃苯娲 ? ,
																areaId: "659306"
															},
															{
																area: "閸忛潧娲熸禍鏂垮磩娑撳娲?,
								areaId: "
																659307 "
							},
							{
								area: "閸犫偓閹峰瀚撻崟鎺楁櫍",
								areaId: "
																659308 "
							},
							{
								area: "濮樼鐣ㄩ崸 ? ,
																areaId: "
								659309 "
															}]
														},
														{
															city: "娴滄柨顔嶅〒鐘茬",
															areaId: "
								659004 ",
															areaList: [{
																area: "閸╁骸灏?,areaId:"
																659401 "},{area:"娑撯偓闂嗘湹绔撮崶 ? ,
																areaId: "659402"
															},
															{
																area: "娑撯偓闂嗘湹绨╅崶?,areaId:"
																659403 "},{area:"娑撯偓闂嗘湹绗侀崶 ? ,
																areaId: "659404"
															}]
														},
														{
															city: "閸栨鎮茬敮?,areaId:"
															659005 ",areaList:[{area:"閺傛澘鐓勯崠 ? ,
															areaId: "659501"
														},
														{
															area: "閼颁礁鐓勯崠?,areaId:"
															659502 "},{area:"瀹搞儰绗熼崶顓炲隘",areaId:"
															659503 "},{area:"濞村嘲绐涢梹 ? ,
															areaId: "659504"
														},
														{
															area: "娑撴澘绨￠梹?,areaId:"
															659505 "},{area:"闁库€查泦濞擄繝鏅 ? ,
															areaId: "
							659506 "
														}]
													},
													{
														city: "闁句線妫崗鍐茬",
														areaId: "
							659006 ",
														areaList: [{
															area: "娴滃苯宕勬稊婵嗘礋閸?? ,
							areaId: "
															659601 "
						},
						{
							area: "鎼存捁銈跨紒蹇旂ス瀹搞儰绗熼崶 ? ,
															areaId: "
							659602 "
														},
														{
															area: "閸楁艾褰滈崗鍫曟櫍",
															areaId: "
							659603 "
														},
														{
															area: "閸欏奔璧撮梹 ? ,
							areaId: "
															659604 "
						}]
					},
					{
						city: "閸欏本娓ょ敮 ? ,
															areaId: "
						659007 ",
															areaList: [{
																area: "閸忣偄宕勬稉鈧崶 ? ,
						areaId: "
																659701 "
					},
					{
						area: "閸忣偄宕勯崶娑樻礋",
						areaId: "
																659702 "
					},
					{
						area: "閸忣偄宕勬禍鏂挎礋",
						areaId: "
																659703 "
					},
					{
						area: "閸忣偄宕勯崗顓炴礋",
						areaId: "
																659704 "
					},
					{
						area: "閸忣偄宕勬稊婵嗘礋",
						areaId: "
																659705 "
					},
					{
						area: "娑旀繂宕勯崶 ? ,
																areaId: "
						659706 "
															}]
														},
														{
															city: "閸欘垰鍘犳潏鐐鐢?? ,
						areaId: "
															659008 ",
						areaList: [{
							area: "
															63閸 ? ,
															areaId: "
							659801 "
														},
														{
															area: "
							64閸?? ,
							areaId: "
															659802 "
						},
						{
							area: "
															66閸 ? ,
															areaId: "
							659803 "
														},
														{
															area: "
							67閸?? ,
							areaId: "
															659804 "
						},
						{
							area: "
															68閸 ? ,
															areaId: "
							659805 "
														}]
													},
													{
														city: "閺勫棛甯€鐢?? ,
							areaId: "
														659009 ",
							areaList: [{
								area: "閻喖鍖楅崘婊冩簚",
								areaId: "
														659901 "
							},
							{
								area: "娴滃奔绨╅崶娑樻礋",
								areaId: "
														659902 "
							},
							{
								area: "閸ユ稑宕勬稉鍐ㄦ礋",
								areaId: "
														659903 "
							},
							{
								area: "娑撯偓閻椦冩簚",
								areaId: "
														659904 "
							}]
						},
						{
							city: "閼斥剝娼瑰▽鍐茬",
							areaId: "
														659010 ",
							areaList: [{
								area: "閼斥剝娼瑰▽鍐茬閺嶇绺鹃崠 ? ,
														areaId: "
								6590104 "
													},
													{
														area: "閸忛潧娲熸稉鈧禍灞肩安閸?? ,
								areaId: "
														6590105 "
							},
							{
								area: "閸忛潧娲熸稉鈧禍灞藉彄閸 ? ,
														areaId: "
								659010501 "
													},
													{
														area: "閸忛潧娲熸稉鈧禍灞肩瘈閸?? ,
								areaId: "
														659010502 "
							},
							{
								area: "閸忛潧娲熸稉鈧稉澶愭祩閸 ? ,
														areaId: "
								659010503 "
													}]
												},
												{
													city: "閺傜増妲︾敮 ? ,
								areaId: "
													659011 ",
								areaList: [{
									area: "閺傜増妲︾敮鍌涚壋韫囧啫灏 ? ,
													areaId: "659011400"
												},
												{
													area: "閸忛潧娲熺痪銏℃Е娑撯偓閸?,areaId:"
													659011500 "},{area:"缁俱垺妲﹂崶娑樻簚",areaId:"
													659011501 "},{area:"姒涘嫮鏁崘婊冩簚",areaId:"
													659011502 "}]}]},{province:"閸欑増鍜 ? ,
													areaId: "
									710000 ",
													cityList: [{
														city: "閸欐澘瀵崇敮 ? ,
									areaId: "
														710100 ",
									areaList: [{
										area: "閺夋儳鍖楅崠 ? ,
														areaId: "
										710101 "
													},
													{
														area: "娣団€茬疅閸?? ,
										areaId: "
														710102 "
									},
									{
										area: "婢堆冪暔閸 ? ,
														areaId: "
										710103 "
													},
													{
														area: "娑擃厼鍖楅崠 ? ,
										areaId: "
														710104 "
									},
									{
										area: "娑擃厽顒滈崠 ? ,
														areaId: "
										710105 "
													},
													{
														area: "婢堆冩倱閸?? ,
										areaId: "
														710106 "
									},
									{
										area: "娑撳洤宕曢崠 ? ,
														areaId: "
										710107 "
													},
													{
														area: "閺傚洤鍖楅崠 ? ,
										areaId: "
														710108 "
									},
									{
										area: "閸楁鑵愰崠 ? ,
														areaId: "
										710109 "
													},
													{
														area: "閸愬懏绠归崠 ? ,
										areaId: "
														710110 "
									},
									{
										area: "婢诡偅鐏勯崠 ? ,
														areaId: "
										710111 "
													},
													{
														area: "閸栨濮囬崠 ? ,
										areaId: "
														710112 "
									}]
								},
								{
									city: "妤傛﹢娉熺敮 ? ,
														areaId: "
									710200 ",
														areaList: [{
															area: "閻╂劕鐓忛崠 ? ,
									areaId: "
															710201 "
								},
								{
									area: "姒ф挸鍖楅崠 ? ,
															areaId: "
									710202 "
														},
														{
															area: "瀹革箒鎯€閸?? ,
									areaId: "
															710203 "
								},
								{
									area: "濡ょ姵顣搁崠 ? ,
															areaId: "
									710204 "
														},
														{
															area: "娑撳鐨崠 ? ,
									areaId: "
															710205 "
								},
								{
									area: "閺傛澘鍙撮崠 ? ,
															areaId: "
									710206 "
														},
														{
															area: "閸撳秹鍣鹃崠 ? ,
									areaId: "
															710207 "
								},
								{
									area: "閼绘捇娉ら崠 ? ,
															areaId: "
									710208 "
														},
														{
															area: "閸撳秹鏅ｉ崠 ? ,
									areaId: "
															710209 "
								},
								{
									area: "閺冩瑙﹂崠 ? ,
															areaId: "
									710210 "
														},
														{
															area: "鐏忓繑鑵愰崠 ? ,
									areaId: "
															710211 "
								},
								{
									area: "閸戙倕鍖楅崠 ? ,
															areaId: "
									710212 "
														},
														{
															area: "閺嬫娲崠 ? ,
									areaId: "
															710213 "
								},
								{
									area: "婢堆冾嚕閸 ? ,
															areaId: "
									710214 "
														},
														{
															area: "婢堆勭埐閸?? ,
									areaId: "
															710215 "
								},
								{
									area: "婢堆呫仦閸 ? ,
															areaId: "
									710216 "
														},
														{
															area: "娴犱焦顒熼崠 ? ,
									areaId: "
															710217 "
								},
								{
									area: "妤︾喐婢楅崠 ? ,
															areaId: "
									710218 "
														},
														{
															area: "閸愬牆鍖楅崠 ? ,
									areaId: "
															710219 "
								},
								{
									area: "濡椼儱銇旈崠 ? ,
															areaId: "
									710220 "
														},
														{
															area: "閻曟洖鍙戦崠 ? ,
									areaId: "
															710221 "
								},
								{
									area: "閻㈡澘顕ｉ崠 ? ,
															areaId: "
									710222 "
														},
														{
															area: "闂冭儻骞夐崠 ? ,
									areaId: "
															710223 "
								},
								{
									area: "鐠侯垳顏堕崠 ? ,
															areaId: "
									710224 "
														},
														{
															area: "濠€鏍у敶閸?? ,
									areaId: "
															710225 "
								},
								{
									area: "閼煎嫯鎮鹃崠 ? ,
															areaId: "
									710226 "
														},
														{
															area: "濮樼鐣ㄩ崠 ? ,
									areaId: "
															710227 "
								},
								{
									area: "瀵儵妾ч崠 ? ,
															areaId: "
									710228 "
														},
														{
															area: "濮婃挸鐣奸崠 ? ,
									areaId: "
															710229 "
								},
								{
									area: "閺冩鍖楅崠 ? ,
															areaId: "
									710230 "
														},
														{
															area: "缂囧孩绁块崠 ? ,
									areaId: "
															710231 "
								},
								{
									area: "閸忣參绶归崠 ? ,
															areaId: "
									710232 "
														},
														{
															area: "閻㈣弓绮伴崠 ? ,
									areaId: "
															710233 "
								},
								{
									area: "閺夊鐏勯崠 ? ,
															areaId: "
									710234 "
														},
														{
															area: "閸愬懘妫崠 ? ,
									areaId: "
															710235 "
								},
								{
									area: "閼煎倹鐏勯崠 ? ,
															areaId: "
									710236 "
														},
														{
															area: "濡楀啯绨崠 ? ,
									areaId: "
															710237 "
								},
								{
									area: "闁絿甯ユ径蹇撳隘",
									areaId: "
															710238 "
								}]
							},
							{
								city: "閸╂椽娈曠敮 ? ,
															areaId: "
								710300 ",
															areaList: [{
																area: "娑擃厽顒滈崠 ? ,
								areaId: "
																710301 "
							},
							{
								area: "娑撳啫鐗崠 ? ,
																areaId: "
								710302 "
															},
															{
																area: "閺嗘牗娈╅崠 ? ,
								areaId: "
																710303 "
							},
							{
								area: "娴犱胶鍩嶉崠 ? ,
																areaId: "
								710304 "
															},
															{
																area: "娑擃厼鍖楅崠 ? ,
								areaId: "
																710305 "
							},
							{
								area: "鐎瑰绠伴崠 ? ,
																areaId: "
								710306 "
															},
															{
																area: "娣団€茬疅閸?? ,
								areaId: "
																710307 "
							}]
						},
						{
							city: "閸欓鑵戠敮 ? ,
																areaId: "
							710400 ",
																areaList: [{
																	area: "娑擃厼灏?,areaId:"
																	710401 "},{area:"娑撴粌灏 ? ,
																	areaId: "
							710402 "
																},
																{
																	area: "閸楁灏?,areaId:"
																	710403 "},{area:"鐟楀灝灏 ? ,
																	areaId: "
							710404 "
																},
																{
																	area: "閸栨灏?,areaId:"
																	710405 "},{area:"鐟楀灝鎮查崠 ? ,
																	areaId: "710406"
																},
																{
																	area: "閸楁鎮查崠?,areaId:"
																	710407 "},{area:"閸栨鎮查崠 ? ,
																	areaId: "710408"
																},
																{
																	area: "娑撴澘甯崠?,areaId:"
																	710409 "},{area:"娑撴粌濞嶉崠 ? ,
																	areaId: "710410"
																},
																{
																	area: "婢堆呮暢閸?,areaId:"
																	710411 "},{area:"濞撳懏鎸夐崠 ? ,
																	areaId: "710412"
																},
																{
																	area: "濞屾瑩绠嶉崠?,areaId:"
																	710413 "},{area:"濮娧勭埦閸 ? ?,
																	areaId: "710414"
																},
																{
																	area: "閸氬酣鍣烽崠?,areaId:"
																	710415 "},{area:"缁佺偛鍞搁崠 ? ,
																	areaId: "710416"
																},
																{
																	area: "濞碱厼鐡欓崠?,areaId:"
																	710417 "},{area:"婢堆囨长閸 ? ?,
																	areaId: "710418"
																},
																{
																	area: "閺傛壆銇為崠?,areaId:"
																	710419 "},{area:"閻啿鍞搁崠 ? ,
																	areaId: "710420"
																},
																{
																	area: "婢舵牕鐓嶉崠?,areaId:"
																	710421 "},{area:"婢堆冪暔閸 ? ?,
																	areaId: "710422"
																},
																{
																	area: "娑斿本妫╅崠?,areaId:"
																	710423 "},{area:"婢堆嗗€搁崠 ? ,
																	areaId: "710424"
																},
																{
																	area: "姒瑤绨抽崠?,areaId:"
																	710425 "},{area:"闂嗘儳鍢查崠 ? ,
																	areaId: "710426"
																},
																{
																	area: "婢额亜閽╅崠?,areaId:"
																	710427 "},{area:"婢堆囧櫡閸 ? ?,
																	areaId: "710428"
																},
																{
																	area: "閸滃苯閽╅崠?,areaId:"
																	710429 "}]},{city:"閸欐澘宕＄敮 ? ,
																	areaId: "710500",
																	areaList: [{
																		area: "娑撴粌灏?,
								areaId: "
																		710501 "
							},
							{
								area: "閸楁灏 ? ,
																		areaId: "710502"
																	},
																	{
																		area: "閸栨灏?,
								areaId: "
																		710504 "
							},
							{
								area: "鐎瑰宕￠崠 ? ,
																		areaId: "
								710506 "
																	},
																	{
																		area: "鐎瑰閽╅崠 ? ,
								areaId: "
																		710507 "
							},
							{
								area: "娑擃叀銈块崠 ? ,
																		areaId: "
								710508 "
																	},
																	{
																		area: "閺傛媽鎯€閸?? ,
								areaId: "
																		710509 "
							},
							{
								area: "閻╂劖鎸夐崠 ? ,
																		areaId: "
								710510 "
																	},
																	{
																		area: "閻ц姤娓ら崠 ? ,
								areaId: "
																		710511 "
							},
							{
								area: "閺屽疇鎯€閸 ? ,
																		areaId: "
								710512 "
																	},
																	{
																		area: "閸氬骸顥嗛崠 ? ,
								areaId: "
																		710513 "
							},
							{
								area: "娑撴粌鍖楅崠 ? ,
																		areaId: "
								710514 "
																	},
																	{
																		area: "妤规槒鐪撮崠 ? ,
								areaId: "
																		710515 "
							},
							{
								area: "娑撳鎯€閸 ? ,
																		areaId: "
								710516 "
																	},
																	{
																		area: "閸忣厾鏁抽崠 ? ,
								areaId: "
																		710517 "
							},
							{
								area: "鐎规鏁崠 ? ,
																		areaId: "
								710518 "
																	},
																	{
																		area: "婢堆冨敶閸?? ,
								areaId: "
																		710519 "
							},
							{
								area: "娴ｆ娊鍣烽崠 ? ,
																		areaId: "
								710520 "
																	},
																	{
																		area: "鐎涳妇鏁抽崠 ? ,
								areaId: "
																		710521 "
							},
							{
								area: "鐟楁寧鑵愰崠 ? ,
																		areaId: "
								710522 "
																	},
																	{
																		area: "娑撳啳鍋傞崠 ? ,
								areaId: "
																		710523 "
							},
							{
								area: "鐏忓棗鍟楅崠 ? ,
																		areaId: "
								710524 "
																	},
																	{
																		area: "閸栨妫崠 ? ,
								areaId: "
																		710525 "
							},
							{
								area: "閺傛澘瀵查崠 ? ,
																		areaId: "
								710526 "
																	},
																	{
																		area: "閸犲嫬瀵查崠 ? ,
								areaId: "
																		710527 "
							},
							{
								area: "閺傛澘绔堕崠 ? ,
																		areaId: "
								710528 "
																	},
																	{
																		area: "鐎瑰鐣鹃崠 ? ,
								areaId: "
																		710529 "
							},
							{
								area: "鐏炲彉绗傞崠 ? ,
																		areaId: "
								710530 "
																	},
																	{
																		area: "閻滃绨抽崠 ? ,
								areaId: "
																		710531 "
							},
							{
								area: "濡ょ姾銈块崠 ? ,
																		areaId: "
								710532 "
																	},
																	{
																		area: "閸楁瀵查崠 ? ,
								areaId: "
																		710533 "
							},
							{
								area: "瀹革箓鏅ｉ崠 ? ,
																		areaId: "
								710534 "
																	},
																	{
																		area: "娴犱礁鐥夐崠 ? ,
								areaId: "
																		710535 "
							},
							{
								area: "瑜版帊绮婇崠 ? ,
																		areaId: "
								710536 "
																	},
																	{
																		area: "閸忓啿绨烽崠 ? ,
								areaId: "
																		710537 "
							},
							{
								area: "姒瑥纾堕崠 ? ,
																		areaId: "
								710538 "
																	},
																	{
																		area: "濮樼鎮嶉崠 ? ,
								areaId: "
																		710539 "
							}]
						},
						{
							city: "閺傛壆顏剁敮 ? ,
																		areaId: "
							710600 ",
																		areaList: [{
																			area: "娑撴粌灏?,areaId:"
																			710601 "},{area:"閸栨灏 ? ,
																			areaId: "
							710602 "
																		},
																		{
																			area: "妫ｆ瑥鍖楅崠 ? ,
							areaId: "
																			710603 "
						}]
					},
					{
						city: "閸㈠绠熺敮 ? ,
																			areaId: "
						710700 ",
																			areaList: [{
																				area: "娑撴粌灏?,areaId:"
																				710701 "},{area:"鐟楀灝灏 ? ,
																				areaId: "
						710702 "
																			}]
																		},
																		{
																			city: "閺傛澘瀵崇敮 ? ,
						areaId: "
																			710800 ",
						areaList: [{
							area: "閺夋寧藟閸 ? ,
																			areaId: "
							710801 "
																		},
																		{
																			area: "娑撳鍣搁崠 ? ,
							areaId: "
																			710802 "
						},
						{
							area: "娑擃厼鎷伴崠 ? ,
																			areaId: "
							710803 "
																		},
																		{
																			area: "濮樼鎷伴崠 ? ,
							areaId: "
																			710804 "
						},
						{
							area: "閺傛澘绨為崠 ? ,
																			areaId: "
							710805 "
																		},
																		{
																			area: "閺傛澘绨甸崠 ? ,
							areaId: "
																			710806 "
						},
						{
							area: "閺嶆垶鐏勯崠 ? ,
																			areaId: "
							710807 "
																		},
																		{
																			area: "閼剧儤鐡曢崠 ? ,
							areaId: "
																			710808 "
						},
						{
							area: "娑撳鍦洪崠 ? ,
																			areaId: "
							710809 "
																		},
																		{
																			area: "濞ｂ剝鎸夐崠 ? ,
							areaId: "
																			710810 "
						},
						{
							area: "濮规劖顒涢崠 ? ,
																			areaId: "
							710811 "
																		},
																		{
																			area: "閻熺偠濮甸崠 ? ,
							areaId: "
																			710812 "
						},
						{
							area: "閸︾喎鐓勯崠 ? ,
																			areaId: "
							710813 "
																		},
																		{
																			area: "閼猴附搴婇崠 ? ,
							areaId: "
																			710814 "
						},
						{
							area: "娴滄棁鍋傞崠 ? ,
																			areaId: "
							710815 "
																		},
																		{
																			area: "濞夋澘鍖楅崠 ? ,
							areaId: "
																			710816 "
						},
						{
							area: "閺嬫褰涢崠 ? ,
																			areaId: "
							710817 "
																		},
																		{
																			area: "濞ｅ崬娼欓崠 ? ,
							areaId: "
																			710818 "
						},
						{
							area: "閻磭顣崠 ? ,
																			areaId: "
							710819 "
																		},
																		{
																			area: "閸ь亝鐏勯崠 ? ,
							areaId: "
																			710820 "
						},
						{
							area: "娑撳濮栭崠 ? ,
																			areaId: "
							710821 "
																		},
																		{
																			area: "閻娊妫崠 ? ,
							areaId: "
																			710822 "
						},
						{
							area: "閸忣偊鍣烽崠 ? ,
																			areaId: "
							710823 "
																		},
																		{
																			area: "楠炶櫕閭崠 ? ,
							areaId: "
																			710824 "
						},
						{
							area: "閸欏本閭崠 ? ,
																			areaId: "
							710825 "
																		},
																		{
																			area: "鐠愨€愁嚕閸?? ,
							areaId: "
																			710826 "
						},
						{
							area: "闁叉垵鍖楅崠 ? ,
																			areaId: "
							710827 "
																		},
																		{
																			area: "娑撳洭鍣烽崠 ? ,
							areaId: "
																			710828 "
						},
						{
							area: "娑斿本娼甸崠 ? ,
																			areaId: "
							710829 "
																		}]
																	},
																	{
																		city: "鐎规粌鍙為崢 ? ,
							areaId: "
																		712200 ",
							areaList: [{
								area: "鐎规粌鍙炵敮 ? ,
																		areaId: "
								712201 "
																	},
																	{
																		area: "缂冩ぞ绗㈤梹 ? ,
								areaId: "
																		712221 "
							},
							{
								area: "閼诲繑澧冮梹 ? ,
																		areaId: "
								712222 "
																	},
																	{
																		area: "婢舵潙鐓勯梹 ? ,
								areaId: "
																		712223 "
							},
							{
								area: "缁€浣归偗娑 ? ,
																		areaId: "
								712224 "
																	},
																	{
																		area: "婢诡喖娲挎稊 ? ,
								areaId: "
																		712225 "
							},
							{
								area: "閸涙ê鍖楁稊 ? ,
																		areaId: "
								712226 "
																	},
																	{
																		area: "閸愵剙鍖楁稊 ? ,
								areaId: "
																		712227 "
							},
							{
								area: "娴滄梻绮ㄦ稊 ? ,
																		areaId: "
								712228 "
																	},
																	{
																		area: "娑撳妲︽稊 ? ,
								areaId: "
																		712229 "
							},
							{
								area: "婢堆冩倱娑 ? ,
																		areaId: "
								712230 "
																	},
																	{
																		area: "閸楁澧冩稊 ? ,
								areaId: "
																		712231 "
							}]
						},
						{
							city: "濡楀啫娲敮 ? ,
																		areaId: "
							712300 ",
																		areaList: [{
																			area: "濡楀啫娲敮 ? ,
							areaId: "
																			712301 "
						},
						{
							area: "娑擃厼娼ㄧ敮 ? ,
																			areaId: "
							712302 "
																		},
																		{
																			area: "楠炴娊鏅ｇ敮 ? ,
							areaId: "
																			712303 "
						},
						{
							area: "閸忣偄鐥夌敮 ? ,
																			areaId: "
							712304 "
																		},
																		{
																			area: "閺夈劍顣敮 ? ,
							areaId: "
																			712305 "
						},
						{
							area: "閼猴妇顏剁敮 ? ,
																			areaId: "
							712306 "
																		},
																		{
																			area: "婢堆勯偗闂€ ? ,
							areaId: "
																			712321 "
						},
						{
							area: "婢堆冩疮娑 ? ,
																			areaId: "
							712324 "
																		},
																		{
																			area: "姒喎鍖楁稊 ? ,
							areaId: "
																			712325 "
						},
						{
							area: "姒瑦姹熸稊 ? ,
																			areaId: "
							712327 "
																		},
																		{
																			area: "閺傛澘鐪挎稊 ? ,
							areaId: "
																			712329 "
						},
						{
							area: "鐟欏倿鐓舵稊 ? ,
																			areaId: "
							712330 "
																		},
																		{
																			area: "婢跺秴鍙存稊 ? ,
							areaId: "
																			712331 "
						}]
					},
					{
						city: "閺傛壆顏堕崢 ? ,
																			areaId: "
						712400 ",
																			areaList: [{
																				area: "缁旂懓瀵崇敮 ? ,
						areaId: "
																				712401 "
					},
					{
						area: "缁旈€涚闂€ ? ,
																				areaId: "
						712421 "
																			},
																			{
																				area: "閺傛澘鐓嶉梹 ? ,
						areaId: "
																				712422 "
					},
					{
						area: "閸忓疇銈块梹 ? ,
																				areaId: "
						712423 "
																			},
																			{
																				area: "濠€鏍у經娑?? ,
						areaId: "
																				712424 "
					},
					{
						area: "閺傞璧存稊 ? ,
																				areaId: "
						712425 "
																			},
																			{
																				area: "閼哄孩鐏勬稊 ? ,
						areaId: "
																				712426 "
					},
					{
						area: "濡亜鍖楁稊 ? ,
																				areaId: "
						712427 "
																			},
																			{
																				area: "閸栨鐓嶆稊 ? ,
						areaId: "
																				712428 "
					},
					{
						area: "鐎规繂鍖楁稊 ? ,
																				areaId: "
						712429 "
																			},
																			{
																				area: "瀹勩劎婀佹稊 ? ,
						areaId: "
																				712430 "
					},
					{
						area: "鐏忔牜鐓舵稊 ? ,
																				areaId: "
						712431 "
																			},
																			{
																				area: "娴滄柨鍢叉稊 ? ,
						areaId: "
																				712432 "
					}]
				},
				{
					city: "閼绘鐗€閸 ? ,
																				areaId: "
					712500 ",
																				areaList: [{
																					area: "閼绘鐗€鐢?? ,
					areaId: "
																					712501 "
				},
				{
					area: "閼绘垿鍣烽梹 ? ,
																					areaId: "
					712521 "
																				},
																				{
																					area: "闁岸娓奸梹 ? ,
					areaId: "
																					712522 "
				},
				{
					area: "缁旂懓宕￠梹 ? ,
																					areaId: "
					712523 "
																				},
																				{
																					area: "婢剁繝鍞ょ敮 ? ,
					areaId: "
																					712524 "
				},
				{
					area: "閸氬酣绶抽梹 ? ,
																					areaId: "
					712525 "
																				},
																				{
																					area: "閸楁挸鍙為梹 ? ,
					areaId: "
																					712526 "
				},
				{
					area: "婢堆勭娑 ? ,
																					areaId: "
					712527 "
																				},
																				{
																					area: "閸忣剟顩稊 ? ,
					areaId: "
																					712528 "
				},
				{
					area: "闁炬粓鏁氭稊 ? ,
																					areaId: "
					712529 "
																				},
																				{
																					area: "閸楁绨炴稊 ? ,
					areaId: "
																					712530 "
				},
				{
					area: "婢舵潙鐪挎稊 ? ,
																					areaId: "
					712531 "
																				},
																				{
																					area: "娑撳绠熸稊 ? ,
					areaId: "
																					712532 "
				},
				{
					area: "鐟楁寧绠规稊 ? ,
																					areaId: "
					712533 "
																				},
																				{
																					area: "闁姵藟娑?? ,
					areaId: "
																					712534 "
				},
				{
					area: "娑撳鍜曟稊 ? ,
																					areaId: "
					712535 "
																				},
																				{
																					area: "閻欘喗姹熸稊 ? ,
					areaId: "
																					712536 "
				},
				{
					area: "濞夋澘鐣ㄦ稊 ? ,
																					areaId: "
					712537 "
																				}]
																			},
																			{
																				city: "瑜版澘瀵查崢 ? ,
					areaId: "
																				712700 ",
					areaList: [{
						area: "瑜版澘瀵茬敮 ? ,
																				areaId: "
						712701 "
																			},
																			{
																				area: "妤ｆ寧鑵愰梹 ? ,
						areaId: "
																				712721 "
					},
					{
						area: "閸滃瞼绶ㄩ梹 ? ,
																				areaId: "
						712722 "
																			},
																			{
																				area: "缁捐儻銈挎稊 ? ,
						areaId: "
																				712723 "
					},
					{
						area: "娴煎憡鑵愭稊 ? ,
																				areaId: "
						712724 "
																			},
																			{
																				area: "缁傚繐鍙存稊 ? ,
						areaId: "
																				712725 "
					},
					{
						area: "缁夆偓濮樼繝鍩 ? ,
																				areaId: "712726"
																			},
																			{
																				area: "閼哄崬娼ф稊?,areaId:"
																				712727 "},{area:"閼侯剙娲稊 ? ,
																				areaId: "712728"
																			},
																			{
																				area: "閸涙ɑ鐏勭敮?,areaId:"
																				712729 "},{area:"濠ь亝绠归梹 ? ,
																				areaId: "712730"
																			},
																			{
																				area: "閻㈤鑵戦梹?,areaId:"
																				712731 "},{area:"婢堆勬綑娑 ? ?,
																				areaId: "712732"
																			},
																			{
																				area: "閸╂梻娲傛稊?,areaId:"
																				712733 "},{area:"閸╂柨绺炬稊 ? ,
																				areaId: "712734"
																			},
																			{
																				area: "濮樻悂娼犳稊?,areaId:"
																				712735 "},{area:"缁€鎯с仈娑 ? ?,
																				areaId: "712736"
																			},
																			{
																				area: "娴滃本鎸夋稊?,areaId:"
																				712737 "},{area:"閸栨鏋熼梹 ? ,
																				areaId: "712738"
																			},
																			{
																				area: "娴滃本鐏勯梹?,areaId:"
																				712739 "},{area:"閻㈡澘鐔稊 ? ,
																				areaId: "712740"
																			},
																			{
																				area: "閸┿倕銇旀稊?,areaId:"
																				712741 "},{area:"閼哄疇瀚呮稊 ? ,
																				areaId: "712742"
																			},
																			{
																				area: "婢堆冪厔娑?,areaId:"
																				712743 "},{area:"缁旂懓顢濇稊 ? ,
																				areaId: "712744"
																			},
																			{
																				area: "濠ь亜绐炴稊?,areaId:"
																				712745 "}]},{city:"閸楁濮囬崢 ? ,
																				areaId: "712800",
																				areaList: [{
																					area: "閸楁濮囩敮?,areaId:"
																					712801 "},{area:"閸╂棃鍣烽梹 ? ,
																					areaId: "712821"
																				},
																				{
																					area: "閼藉鎮查梹?,areaId:"
																					712822 "},{area:"缁旂懓鍖楅梹 ? ,
																					areaId: "712823"
																				},
																				{
																					area: "闂嗗棝娉﹂梹?,areaId:"
																					712824 "},{area:"閸氬秹妫挎稊 ? ,
																					areaId: "712825"
																				},
																				{
																					area: "妤ｈ儻鑳烘稊?,areaId:"
																					712826 "},{area:"娑擃厼顕ｆ稊 ? ,
																					areaId: "712827"
																				},
																				{
																					area: "妤稿吋鐫滄稊?,areaId:"
																					712828 "},{area:"閸ヨ棄顫樻稊 ? ,
																					areaId: "712829"
																				},
																				{
																					area: "濮樻挳鍣锋稊?,areaId:"
																					712830 "},{area:"娣団€茬疅娑 ? ?,
																					areaId: "712831"
																				},
																				{
																					area: "娴犱胶鍩嶆稊?,areaId:"
																					712832 "}]},{city:"娴滄垶鐏勯崢 ? ,
																					areaId: "712900",
																					areaList: [{
																						area: "閺傛鍙氱敮?,areaId:"
																						712901 "},{area:"閺傛宕￠梹 ? ,
																						areaId: "712921"
																					},
																					{
																						area: "閾忓骸鐔梹?,areaId:"
																						712922 "},{area:"鐟楄儻鐏梹 ? ,
																						areaId: "712923"
																					},
																					{
																						area: "閸︾喎绨遍梹?,areaId:"
																						712924 "},{area:"閸栨鑵愰梹 ? ,
																						areaId: "712925"
																					},
																					{
																						area: "閸欍倕娼欐稊?,areaId:"
																						712926 "},{area:"婢堆冪厾娑 ? ?,
																						areaId: "712927"
																					},
																					{
																						area: "閼炬寧顢曟稊?,areaId:"
																						712928 "},{area:"閺嬫鍞存稊 ? ,
																						areaId: "712929"
																					},
																					{
																						area: "娴滃奔绮︽稊?,areaId:"
																						712930 "},{area:"娴犳垼鍎楁稊 ? ,
																						areaId: "712931"
																					},
																					{
																						area: "妤癸箑顕ｆ稊?,areaId:"
																						712932 "},{area:"娑撴粌濞嶆稊 ? ,
																						areaId: "712933"
																					},
																					{
																						area: "鐟滄帒绻濇稊?,areaId:"
																						712934 "},{area:"閸欐媽銈挎稊 ? ,
																						areaId: "712935"
																					},
																					{
																						area: "閸忓啴鏆辨稊?,areaId:"
																						712936 "},{area:"閸ユ稒绠规稊 ? ,
																						areaId: "712937"
																					},
																					{
																						area: "閸欙絾绠规稊?,areaId:"
																						712938 "},{area:"濮樺瓨鐏勬稊 ? ,
																						areaId: "712939"
																					}]
																				},
																				{
																					city: "閸㈠绠熼崢?,areaId:"
																					713000 ",areaList:[{area:"婢额亙绻氱敮 ? ,
																					areaId: "713001"
																				},
																				{
																					area: "閺堟潙鐡欑敮?,areaId:"
																					713002 "},{area:"鐢啳顣伴梹 ? ,
																					areaId: "713023"
																				},
																				{
																					area: "婢堆勭亜闂€?,areaId:"
																					713024 "},{area:"濮樻垿娉熸稊 ? ,
																					areaId: "713025"
																				},
																				{
																					area: "濠ь亜褰涙稊?,areaId:"
																					713026 "},{area:"閺傜増鑵愭稊 ? ,
																					areaId: "713027"
																				},
																				{
																					area: "閸忣叀鍓兼稊?,areaId:"
																					713028 "},{area:"娑撴粎鐓舵稊 ? ,
																					areaId: "713029"
																				},
																				{
																					area: "娑斿顏舵稊?,areaId:"
																					713030 "},{area:"妤ｈ儻宕忔稊 ? ,
																					areaId: "713031"
																				},
																				{
																					area: "濮樼繝绗傛稊?,areaId:"
																					713032 "},{area:"娑擃厼鐓嶆稊 ? ,
																					areaId: "713033"
																				},
																				{
																					area: "缁旂懓纾舵稊?,areaId:"
																					713034 "},{area:"濮婂懎鍖楁稊 ? ,
																					areaId: "713035"
																				},
																				{
																					area: "閻ｎ亣鐭炬稊?,areaId:"
																					713036 "},{area:"婢堆冪厤娑 ? ?,
																					areaId: "713037"
																				},
																				{
																					area: "闂冨潡鍣风仦鍙樺焸",
																					areaId: "713038"
																				}]
																			},
																			{
																				city: "鐏炲繋绗㈤崢?,areaId:"
																				713300 ",areaList:[{area:"鐏炲繋绗㈢敮 ? ,
																				areaId: "713301"
																			},
																			{
																				area: "濞碱喖绐為梹?,areaId:"
																				713321 "},{area:"娑撴粍鑵愰梹 ? ,
																				areaId: "713322"
																			},
																			{
																				area: "閹帗妲梹?,areaId:"
																				713323 "},{area:"娑撳洣鑵规稊 ? ,
																				areaId: "713324"
																			},
																			{
																				area: "闂€鎸庝笉娑?,areaId:"
																				713325 "},{area:"妤圭喐绀囨稊 ? ,
																				areaId: "713326"
																			},
																			{
																				area: "娑旀繂顩ф稊?,areaId:"
																				713327 "},{area:"闁插本鑵愭稊 ? ,
																				areaId: "713328"
																			},
																			{
																				area: "閻╂劕鐓嶆稊?,areaId:"
																				713329 "},{area:"妤傛ɑ鐖叉稊 ? ,
																				areaId: "713330"
																			},
																			{
																				area: "娑撳洤鑲犳稊?,areaId:"
																				713331 "},{area:"閸愬懎鐓嶆稊 ? ,
																				areaId: "713332"
																			},
																			{
																				area: "缁斿湱鏁稊?,areaId:"
																				713333 "},{area:"閺傛澘鐓犳稊 ? ,
																				areaId: "713334"
																			},
																			{
																				area: "閺嬪顕ｆ稊?,areaId:"
																				713335 "},{area:"閺傛澘娲稊 ? ,
																				areaId: "713336"
																			},
																			{
																				area: "瀹曚線銆婃稊?,areaId:"
																				713337 "},{area:"閺嬫绔熸稊 ? ,
																				areaId: "713338"
																			},
																			{
																				area: "閸楁绐炴稊?,areaId:"
																				713339 "},{area:"娴ｅ啿鍟叉稊 ? ,
																				areaId: "713340"
																			},
																			{
																				area: "閻炲鎮嗘稊?,areaId:"
																				713341 "},{area:"鏉烇箑鐓勬稊 ? ,
																				areaId: "713342"
																			},
																			{
																				area: "濠娾€崇獮娑?,areaId:"
																				713343 "},{area:"閺嬪鍖楁稊 ? ,
																				areaId: "713344"
																			},
																			{
																				area: "娑撳婀撮梻銊ゅ焸",
																				areaId: "713345"
																			},
																			{
																				area: "闂嗘儳褰存稊?,areaId:"
																				713346 "},{area:"閻滄稑顔嶆稊 ? ,
																				areaId: "713347"
																			},
																			{
																				area: "濞夌増顒熸稊?,areaId:"
																				713348 "},{area:"閺夈儰绠熸稊 ? ,
																				areaId: "713349"
																			},
																			{
																				area: "閺勩儲妫╂稊?,areaId:"
																				713350 "},{area:"閻欘喖鐡欐稊 ? ,
																				areaId: "713351"
																			},
																			{
																				area: "閻椻€茶吂娑?,areaId:"
																				713352 "}]},{city:"閸欓绗㈤崢 ? ,
																				areaId: "713400",
																				areaList: [{
																					area: "閸欓绗㈢敮?,areaId:"
																					713401 "},{area:"閹存劕濮涢梹 ? ,
																					areaId: "713421"
																				},
																				{
																					area: "閸忓啿鍖楅梹?,areaId:"
																					713422 "},{area:"閸楁垵宕℃稊 ? ,
																					areaId: "713423"
																				},
																				{
																					area: "妤ｅ潡鍣规稊?,areaId:"
																					713424 "},{area:"濮圭姳绗傛稊 ? ,
																					areaId: "713425"
																				},
																				{
																					area: "娑撴粍娓ゆ稊?,areaId:"
																					713426 "},{area:"闂€鎸庤姳娑 ? ?,
																					areaId: "713427"
																				},
																				{
																					area: "婢额亪澶柌灞煎焸",
																					areaId: "713428"
																				},
																				{
																					area: "婢堆勵劅娑?,areaId:"
																					713429 "},{area:"缂佸灝鐭濇稊 ? ,
																					areaId: "713430"
																				},
																				{
																					area: "濞撮顏稊?,areaId:"
																					713431 "},{area:"瀵よ泛閽╂稊 ? ,
																					areaId: "713432"
																				},
																				{
																					area: "闁叉垵鍢叉稊?,areaId:"
																					713433 "},{area:"鏉堝彞绮婃稊 ? ,
																					areaId: "713434"
																				},
																				{
																					area: "閸忔澘绗ㄦ稊?,areaId:"
																					713435 "}]},{city:"閼鸿精骞夐崢 ? ,
																					areaId: "713500",
																					areaList: [{
																						area: "閼鸿精骞夌敮?,areaId:"
																						713501 "},{area:"閸戙倖鐏勯梹 ? ,
																						areaId: "713521"
																					},
																					{
																						area: "閻滃鍣烽梹?,areaId:"
																						713522 "},{area:"閺傛澘鐓勬稊 ? ,
																						areaId: "713523"
																					},
																					{
																						area: "閸氬鐣ㄦ稊?,areaId:"
																						713524 "},{area:"鐎靛じ璧存稊 ? ,
																						areaId: "713525"
																					},
																					{
																						area: "閸忓顦叉稊?,areaId:"
																						713526 "},{area:"娑撶増鑺辨稊 ? ,
																						areaId: "713527"
																					},
																					{
																						area: "閻熺偟顭存稊?,areaId:"
																						713528 "},{area:"鐎靛矂鍣锋稊 ? ,
																						areaId: "713529"
																					},
																					{
																						area: "缁夆偓閺嬫ぞ鍩?,
								areaId: "
																						713530 "
							},
							{
								area: "娑撳洩宕虫稊 ? ,
																						areaId: "
								713531 "
																					},
																					{
																						area: "閸楁挻閭稊 ? ,
								areaId: "
																						713532 "
							}]
						},
						{
							city: "濠㈠孩绠归崢 ? ,
																						areaId: "
							713600 ",
																						areaList: [{
																							area: "妞诡剙鍙曠敮 ? ,
							areaId: "
																							713601 "
						},
						{
							area: "濠€鏍偪娑 ? ,
																							areaId: "
							713621 "
																						},
																						{
																							area: "閻ц姤鐭欐稊 ? ,
							areaId: "
																							713622 "
						},
						{
							area: "鐟楀灝绗ㄦ稊 ? ,
																							areaId: "
							713623 "
																						},
																						{
																							area: "閺堟稑鐣ㄦ稊 ? ,
							areaId: "
																							713624 "
						},
						{
							area: "娑撳啰绶ㄦ稊 ? ,
																							areaId: "
							713625 "
																						}]
																					},
																					{
																						city: "闁叉垿妫崢 ? ,
							areaId: "
																						713700 ",
							areaList: [{
								area: "闁叉垵鐓勯梹 ? ,
																						areaId: "
								713701 "
																					},
																					{
																						area: "闁叉垶绠归梹 ? ,
								areaId: "
																						713702 "
							},
							{
								area: "闁叉垶鐭欓梹 ? ,
																						areaId: "
								713703 "
																					},
																					{
																						area: "闁叉垵鐣炴稊 ? ,
								areaId: "
																						713704 "
							},
							{
								area: "閻戝牆绗ㄦ稊 ? ,
																						areaId: "
								713705 "
																					},
																					{
																						area: "娑斿奔绗滄稊 ? ,
								areaId: "
																						713706 "
							}]
						},
						{
							city: "鏉╃偞鐫欓崢 ? ,
																						areaId: "
							713800 ",
																						areaList: [{
																							area: "閸楁顏兼稊 ? ,
							areaId: "
																							713801 "
						},
						{
							area: "閸栨顏兼稊 ? ,
																							areaId: "
							713802 "
																						},
																						{
																							area: "閼炬帒鍘滄稊 ? ,
							areaId: "
																							713803 "
						},
						{
							area: "娑撴粌绱╂稊 ? ,
																							areaId: "
							713804 "
																						}]
																					}]
																				},
																				{
																					province: "妫ｆ瑦鑵愰悧鐟板焼鐞涘本鏂傞崠 ? ,
							areaId: "
																					810000 ",
							cityList: [{
								city: "妫ｆ瑦鑵愬畝 ? ,
																					areaId: "
								810100 ",
																					areaList: [{
																						area: "娑擃叀銈块崠 ? ,
								areaId: "
																						810101 "
							},
							{
								area: "濠€鍙ョ博閸 ? ,
																						areaId: "
								810102 "
																					},
																					{
																						area: "娑撴粌灏?,areaId:"
																						810103 "},{area:"閸楁灏 ? ,
																						areaId: "
								810104 "
																					}]
																				},
																				{
																					city: "娑旀繈绶?,areaId:"
																					810200 ",areaList:[{area:"濞岀懓鐨烽弮鍝勫隘",areaId:"
																					810201 "},{area:"濞ｈ鲸鎸夐崺妤€灏 ? ,
																					areaId: "
								810202 "
																				},
																				{
																					area: "娑旀繈绶抽崺搴″隘",
																					areaId: "
								810203 "
																				},
																				{
																					area: "姒涘嫬銇囨禒娆忓隘",
																					areaId: "
								810204 "
																				},
																				{
																					area: "鐟欏倸顢濋崠 ? ,
								areaId: "
																					810205 "
							}]
						},
						{
							city: "閺傛壆鏅 ? ,
																					areaId: "810300",
																					areaList: [{
																						area: "閼藉啯鍜曢崠?,areaId:"
																						810301 "},{area:"鐏烆垶妫崠 ? ,
																						areaId: "810302"
																					},
																					{
																						area: "閸忓啯婀曢崠?,areaId:"
																						810303 "},{area:"閸栨灏 ? ,
																						areaId: "
								810304 "
																					},
																					{
																						area: "婢堆冪厤閸?? ,
								areaId: "
																						810305 "
							},
							{
								area: "鐟楄儻纭€閸 ? ,
																						areaId: "
								810306 "
																					},
																					{
																						area: "濞屾瑧鏁崠 ? ,
								areaId: "
																						810307 "
							},
							{
								area: "閽佺敻娼氶崠 ? ,
																						areaId: "
								810308 "
																					},
																					{
																						area: "缁傝鐭濋崠 ? ,
								areaId: "
																						810309 "
							}]
						}]
					},
					{
						province: "濠㈡娊妫悧鐟板焼鐞涘本鏂傞崠 ? ,
																						areaId: "
						820000 ",
																						cityList: [{
																							city: "濠㈡娊妫崡濠傜煗",
																							areaId: "
						820100 ",
																							areaList: [{
																								area: "閼哄崬婀撮悳娑樼垶閸?? ,
						areaId: "
																								820101 "
					},
					{
						area: "閸︼絽鐣ㄦ径姘嚬閸倸灏 ? ,
																								areaId: "820102"
																							},
																							{
																								area: "婢堆冪垶閸?,areaId:"
																								820103 "},{area:"閺堟稑鐥夐崼鍌氬隘",areaId:"
																								820104 "},{area:"妞嬪酣銆庨崼鍌氬隘",areaId:"
																								820105 "}]},{city:"濮橀€涚博瀹€ ? ,
																								areaId: "820200",
																								areaList: [{
																									area: "閸㈠膩閸倸灏?,
							areaId: "
																									820201 "
						}]
					},
					{
						city: "鐠侯垳骞嗗畝 ? ,
																									areaId: "
						820300 ",
																									areaList: [{
																										area: "閸︼絾鏌熷ù搴℃倗閸倸灏?,areaId:"
																										820301 "}]}]}]}; 
 			}); 
		define("
																										package2024CNY / service.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																										use strict ";var e=require(".. / @babel / runtime / helpers / interopRequireDefault ").default;Object.defineProperty(exports,"
																										__esModule ",{value:!0}),exports.AccessLogAdd=function(){var e=wx.getLaunchOptionsSync(),t=getCurrentPages();return h({url:f+" / anmuxi / api / access - log / add ",data:{scene:e.query.scene||"",wxScene:e.scene,path:t[t.length-1].route,query:JSON.stringify(e.query)},method:"
																										POST "})},exports.GetCoinInfo=function(e){return h({url:f+" / anmuxi / api / activity / ".concat(p," / info "),data:e,method:"
																										GET "})},exports.GetGameInfo=function(){return h({url:f+" / anmuxi / api / activity / ".concat(l," / game - info "),method:"
																										get "})},exports.GetGameList=function(e){return h({url:f+" / anmuxi / api / game / list ",data:e,method:"
																										GET "})},exports.GetGameMoreChance=function(){return h({url:f+" / anmuxi / api / game / more - chance ",method:"
																										post "})},exports.GetGamePrizeList=function(e){return(new r.default).request({url:f+" / anmuxi / api / user / my - prizes ",data:m(d({},e),{activityKey:l}),header:x(),method:"
																										GET "})},exports.GetGameRanking=function(){return h({url:f+" / anmuxi / api / game / ranking ",method:"
																										get "})},exports.GetHistoryRanking=function(){return h({url:f+" / anmuxi / api / game / ranking - history ",method:"
																										get "})},exports.GetInviteList=function(e){return(new r.default).request({url:f+" / anmuxi / api / invite / list ",data:e,header:x(),method:"
																										GET "})},exports.GetMyRankingInfo=function(){return h({url:f+" / anmuxi / api / game / my - rank ",method:"
																										get "})},exports.GetPrizeList=function(e){return(new r.default).request({url:f+" / anmuxi / api / user / my - prizes ",data:m(d({},e),{activityKey:p}),header:x(),method:"
																										GET "})},exports.GetReservationList=function(e){return h({url:f+" / anmuxi / api / reservation / list ",data:e,method:"
																										GET "})},exports.GetSignCalendar=function(e){return h({url:f+" / anmuxi / api / activity / ".concat(p," / calendar "),data:e,header:x(),method:"
																										GET "})},exports.GetSignInfo=function(e){return(new r.default).request({url:f+" / anmuxi / api / activity / ".concat(p," / info "),data:e,header:x(),method:"
																										GET "})},exports.GetUserInfo=function(e){return(new r.default).request({url:f+" / anmuxi / api / user / info ",data:e,header:x(),method:"
																										GET "})},exports.PostActivityDraw=function(e){return h({url:f+" / anmuxi / api / activity / ".concat(p," / draw "),data:e,method:"
																										POST "})},exports.PostCalendarRemedy=function(e){return h({url:f+" / anmuxi / api / sign / ".concat(p," / remedy "),data:e,method:"
																										POST "})},exports.PostCalendarSign=function(e){return h({url:f+" / anmuxi / api / sign / ".concat(p," / sign "),data:e,method:"
																										POST "})},exports.PostChangeReservationPhone=function(e){return h({url:f+" / anmuxi / api / reservation / modify / ".concat(e.id),data:e,method:"
																										POST "})},exports.PostCoinExchange=function(e){return h({url:f+" / anmuxi / api / activity / ".concat(p," / redeem "),data:e,method:"
																										POST "})},exports.PostGameDraw=function(e){return h({url:f+" / anmuxi / api / activity / ".concat(l," / game - draw "),method:"
																										post ",data:e})},exports.PostReceiveAddress=function(e){return h({url:f+" / anmuxi / api / user / receive - address ",data:e,method:"
																										POST "})},exports.PostUserLogin=function(e,t){return(new r.default).request({url:f+" / anmuxi / api / user / login ",header:{Authorization:"
																										Bearer ".concat(t)},data:e,method:"
																										POST "})},exports.PostUserSubscribe=function(){return(new r.default).request({url:f+" / anmuxi / api / subscribe / subscribe ",header:x(),data:{scene:["
																										SIGN_NOTIFY ","
																										DRAW_NOTIFY ","
																										INVITE_NOTIFY "]},method:"
																										POST "})},exports.SendPhoneChangeCode=function(e){return h({url:f+" / anmuxi / api / reservation / verify - code / ".concat(e.id),data:e,method:"
																										POST "})},exports.SnakeGameEnd=function(e){return h({url:f+" / anmuxi / api / game / ".concat(e.gameId," / end "),method:"
																										post "})},exports.StarPhoneReserve=function(e){return h({url:f+" / anmuxi / api / reservation / reserve ",data:e,method:"
																										POST "})},exports.StartSnakeGame=function(){return h({url:f+" / anmuxi / api / game / start ",method:"
																										post "})},exports.UploadSnakeGameScore=function(e){return h({url:f+" / anmuxi / api / game / score ",method:"
																										post ",data:e})};var t=require(".. / @babel / runtime / helpers / createForOfIteratorHelper "),r=e(require(".. / utils / request.js ")),n=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=function(e,t,r){return t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},d=function(e,r){for(var n in r||(r={}))u.call(r,n)&&c(e,n,r[n]);if(i){var a,o=t(i(r));try{for(o.s();!(a=o.n()).done;){n=a.value;s.call(r,n)&&c(e,n,r[n])}}catch(e){o.e(e)}finally{o.f()}}return e},m=function(e,t){return a(e,o(t))},p="
																										YLAMXForClient_AMX2024CNY ",l="
																										2024long ",f="
																										https: //wx-camp-amx-21d-api.mscampapi.digitalyili.com",x=function(){return{Authorization:"Bearer ".concat(wx.getStorageSync("_CNY_TOKEN"))}};function h(e){var t=e.url,r=e.header,n=e.method,a=e.data;return new Promise((function(e,o){wx.request({url:t,header:d(d({},r),x()),method:n,data:a,success:function(t){var r=t.data,n=r.code,a=r.message;200!==n&&(wx.showToast({title:403===n?"閻劍鍩涢張顏嗘瑜版洘鍨ㄩ崙顓＄槈婢惰鲸鏅?:a,icon:"none"}),o(r)),console.log("---------REQUEST START---------"),console.log(r),console.log("---------REQUEST DATA---------"),e(r)},fail:function(e){console.log(e),o(e)}})}))} 
																									});
																									define("package2024CNY/utils/computed.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../@babel/runtime/helpers/typeof");
																										module.exports = function(t) {
																											var n = {};
																											function r(e) {
																												if (n[e]) return n[e].exports;
																												var o = n[e] = {
																													i: e,
																													l: !1,
																													exports: {}
																												};
																												return t[e].call(o.exports, o, o.exports, r),
																												o.l = !0,
																												o.exports
																											}
																											return r.m = t,
																											r.c = n,
																											r.d = function(e, t, n) {
																												r.o(e, t) || Object.defineProperty(e, t, {
																													enumerable: !0,
																													get: n
																												})
																											},
																											r.r = function(e) {
																												"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
																													value: "Module"
																												}),
																												Object.defineProperty(e, "__esModule", {
																													value: !0
																												})
																											},
																											r.t = function(t, n) {
																												if (1 & n && (t = r(t)), 8 & n || 4 & n && "object" == e(t) && t && t.__esModule) return t;
																												var o = Object.create(null);
																												if (r.r(o), Object.defineProperty(o, "default", {
																													enumerable: !0,
																													value: t
																												}), 2 & n && "string" != typeof t) for (var a in t) r.d(o, a,
																												function(e) {
																													return t[e]
																												}.bind(null, a));
																												return o
																											},
																											r.n = function(e) {
																												var t = e && e.__esModule ?
																												function() {
																													return e.
																												default
																												}:
																												function() {
																													return e
																												};
																												return r.d(t, "a", t),
																												t
																											},
																											r.o = function(e, t) {
																												return Object.prototype.hasOwnProperty.call(e, t)
																											},
																											r.p = "",
																											r(r.s = 0)
																										} ([function(e, t, n) {
																											e.exports = n(1).behavior
																										},
																										function(t, n, r) {
																											var o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ?
																											function(t) {
																												return e(t)
																											}: function(t) {
																												return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": e(t)
																											},
																											a = r(2)({
																												proto: !0
																											}),
																											i = r(3),
																											u = r(4),
																											f = r(5),
																											c = [String, Number, Boolean, Object, Array, null],
																											l = ["", 0, !1, null, [], null],
																											s = function(e, t) {
																												var n = e;
																												return t.forEach((function(e) {
																													n = "object" !== (void 0 === n ? "undefined": o(n)) || null === n ? void 0 : n[e]
																												})),
																												n
																											};
																											n.behavior = Behavior({
																												lifetimes: {
																													created: function() {
																														this._initComputedWatchInfo()
																													}
																												},
																												definitionFilter: function(e) {
																													var t = e.computed || {},
																													n = e.watch || {},
																													r = [];
																													if (e.methods || (e.methods = {}), e.data || (e.data = {}), e.methods._initComputedWatchInfo) throw new Error("Please do not use this behavior more than once in a single component");
																													var p = [];
																													e.methods._initComputedWatchInfo = function() {
																														var e = this;
																														this._computedWatchInfo || (this._computedWatchInfo = {
																															computedRelatedPathValues: {},
																															watchCurVal: {}
																														},
																														p.forEach((function(t) {
																															return t.call(e)
																														})))
																													};
																													var d, h = []; (Object.keys(t).forEach((function(n) {
																														var r = u.parseSingleDataPath(n).path,
																														a = t[n],
																														i = [],
																														d = function(e, t) {
																															var n = {};
																															return Object.keys(e).forEach((function(t) {
																																n[t] = e[t]
																															})),
																															t && Object.keys(t).forEach((function(e) {
																																var r = null,
																																o = t[e],
																																a = c.indexOf(o);
																																if (a >= 0) r = l[a];
																																else if (o.value) r = o.value;
																																else {
																																	var i = c.indexOf(o.type);
																																	i >= 0 && (r = l[i])
																																}
																																n[e] = r
																															})),
																															n
																														} (e.data, e.properties),
																														v = a(f.create(d, i)); (function(e, t, n) {
																															for (var r = e,
																															a = 0; a < t.length - 1;) {
																																var i = t[a++];
																																"number" == typeof i ? r[i] instanceof Array || (r[i] = []) : ("object" !== o(r[i]) || null === r[i]) && (r[i] = {}),
																																r = r[i]
																															}
																															r[t[a]] = n
																														})(e.data, r, f.unwrap(v)),
																														p.push((function() {
																															var e = this,
																															t = i.map((function(t) {
																																var n = t.path;
																																return {
																																	path: n,
																																	value: s(e.data, n)
																																}
																															}));
																															this._computedWatchInfo.computedRelatedPathValues[n] = t
																														})),
																														h.push((function() {
																															for (var e, t = this._computedWatchInfo.computedRelatedPathValues[n], r = !1, o = 0; o < t.length; o++) {
																																var i = t[o],
																																u = i.path;
																																if (i.value !== s(this.data, u)) {
																																	r = !0;
																																	break
																																}
																															}
																															if (!r) return ! 1;
																															var c = [],
																															l = a(f.create(this.data, c));
																															return this.setData(((e = {})[n] = l, e)),
																															this._computedWatchInfo.computedRelatedPathValues[n] = c,
																															!0
																														}))
																													})), h.length && r.push({
																														fields: "**",
																														observer: function() {
																															var e = this;
																															if (this._computedWatchInfo) {
																																var t = void 0;
																																do {
																																	t = !1, h.forEach((function(n) {
																																		n.call(e) && (t = !0)
																																	}))
																																} while ( t )
																															}
																														}
																													}), Object.keys(n).forEach((function(e) {
																														var t = u.parseMultiDataPaths(e);
																														p.push((function() {
																															var n = this,
																															r = t.map((function(e) {
																																var t = e.path,
																																r = e.options,
																																o = s(n.data, t);
																																return r.deepCmp ? a(o) : o
																															}));
																															this._computedWatchInfo.watchCurVal[e] = r
																														})),
																														r.push({
																															fields: e,
																															observer: function() {
																																var r = this;
																																if (this._computedWatchInfo) {
																																	var o = this._computedWatchInfo.watchCurVal[e],
																																	u = t.map((function(e) {
																																		var t = e.path,
																																		n = e.options;
																																		return {
																																			val: s(r.data, t),
																																			options: n
																																		}
																																	})),
																																	f = u.map((function(e) {
																																		var t = e.val;
																																		return e.options.deepCmp ? a(t) : t
																																	}));
																																	this._computedWatchInfo.watchCurVal[e] = f;
																																	for (var c = !1,
																																	l = 0; l < f.length; l++) {
																																		if (t[l].options.deepCmp ? !i(o[l], f[l]) : o[l] !== f[l]) {
																																			c = !0;
																																			break
																																		}
																																	}
																																	c && n[e].apply(this, u.map((function(e) {
																																		return e.val
																																	})))
																																}
																															}
																														})
																													})), "object" !== o(e.observers) && (e.observers = {}), e.observers instanceof Array) ? (d = e.observers).push.apply(d, r) : r.forEach((function(t) {
																														var n = e.observers[t.fields];
																														e.observers[t.fields] = n ?
																														function() {
																															t.observer.call(this),
																															n.call(this)
																														}: t.observer
																													}))
																												}
																											})
																										},
																										function(t, n) {
																											t.exports = function(t) {
																												return (t = t || {}).circles ?
																												function(t) {
																													var n = [],
																													r = [];
																													return t.proto ?
																													function t(a) {
																														if ("object" != e(a) || null === a) return a;
																														if (a instanceof Date) return new Date(a);
																														if (Array.isArray(a)) return o(a, t);
																														var i = {};
																														for (var u in n.push(a), r.push(i), a) {
																															var f = a[u];
																															if ("object" != e(f) || null === f) i[u] = f;
																															else if (f instanceof Date) i[u] = new Date(f);
																															else {
																																var c = n.indexOf(f);
																																i[u] = -1 !== c ? r[c] : t(f)
																															}
																														}
																														return n.pop(),
																														r.pop(),
																														i
																													}: function t(a) {
																														if ("object" != e(a) || null === a) return a;
																														if (a instanceof Date) return new Date(a);
																														if (Array.isArray(a)) return o(a, t);
																														var i = {};
																														for (var u in n.push(a), r.push(i), a) if (!1 !== Object.hasOwnProperty.call(a, u)) {
																															var f = a[u];
																															if ("object" != e(f) || null === f) i[u] = f;
																															else if (f instanceof Date) i[u] = new Date(f);
																															else {
																																var c = n.indexOf(f);
																																i[u] = -1 !== c ? r[c] : t(f)
																															}
																														}
																														return n.pop(),
																														r.pop(),
																														i
																													};
																													function o(t, o) {
																														for (var a = Object.keys(t), i = new Array(a.length), u = 0; u < a.length; u++) {
																															var f = a[u],
																															c = t[f];
																															if ("object" != e(c) || null === c) i[f] = c;
																															else if (c instanceof Date) i[f] = new Date(c);
																															else {
																																var l = n.indexOf(c);
																																i[f] = -1 !== l ? r[l] : o(c)
																															}
																														}
																														return i
																													}
																												} (t) : t.proto ?
																												function t(r) {
																													if ("object" != e(r) || null === r) return r;
																													if (r instanceof Date) return new Date(r);
																													if (Array.isArray(r)) return n(r, t);
																													var o = {};
																													for (var a in r) {
																														var i = r[a];
																														"object" != e(i) || null === i ? o[a] = i: i instanceof Date ? o[a] = new Date(i) : o[a] = t(i)
																													}
																													return o
																												}: function t(r) {
																													if ("object" != e(r) || null === r) return r;
																													if (r instanceof Date) return new Date(r);
																													if (Array.isArray(r)) return n(r, t);
																													var o = {};
																													for (var a in r) if (!1 !== Object.hasOwnProperty.call(r, a)) {
																														var i = r[a];
																														"object" != e(i) || null === i ? o[a] = i: i instanceof Date ? o[a] = new Date(i) : o[a] = t(i)
																													}
																													return o
																												};
																												function n(t, n) {
																													for (var r = Object.keys(t), o = new Array(r.length), a = 0; a < r.length; a++) {
																														var i = r[a],
																														u = t[i];
																														"object" != e(u) || null === u ? o[i] = u: u instanceof Date ? o[i] = new Date(u) : o[i] = n(u)
																													}
																													return o
																												}
																											}
																										},
																										function(t, n) {
																											var r = Array.isArray,
																											o = Object.keys,
																											a = Object.prototype.hasOwnProperty;
																											t.exports = function t(n, i) {
																												if (n === i) return ! 0;
																												if (n && i && "object" == e(n) && "object" == e(i)) {
																													var u, f, c, l = r(n),
																													s = r(i);
																													if (l && s) {
																														if ((f = n.length) != i.length) return ! 1;
																														for (u = f; 0 != u--;) if (!t(n[u], i[u])) return ! 1;
																														return ! 0
																													}
																													if (l != s) return ! 1;
																													var p = n instanceof Date,
																													d = i instanceof Date;
																													if (p != d) return ! 1;
																													if (p && d) return n.getTime() == i.getTime();
																													var h = n instanceof RegExp,
																													v = i instanceof RegExp;
																													if (h != v) return ! 1;
																													if (h && v) return n.toString() == i.toString();
																													var b = o(n);
																													if ((f = b.length) !== o(i).length) return ! 1;
																													for (u = f; 0 != u--;) if (!a.call(i, b[u])) return ! 1;
																													for (u = f; 0 != u--;) if (!t(n[c = b[u]], i[c])) return ! 1;
																													return ! 0
																												}
																												return n != n && i != i
																											}
																										},
																										function(e, t, n) {
																											var r = /^\s/,
																											o = function(e, t) {
																												throw new Error('Parsing data path "' + e + '" failed at char "' + e[t] + '" (index ' + t + ")")
																											},
																											a = function(e, t) {
																												for (var n = t.index; t.index < t.length;) {
																													var r = e[t.index];
																													if (!/^[0-9]/.test(r)) break;
																													t.index++
																												}
																												return n === t.index && o(e, t.index),
																												parseInt(e.slice(n, t.index), 10)
																											},
																											i = function(e, t) {
																												var n = t.index,
																												r = e[n];
																												if (/^[_a-zA-Z$]/.test(r)) for (t.index++; t.index < t.length;) {
																													var a = e[t.index];
																													if (!/^[_a-zA-Z0-9$]/.test(a)) break;
																													t.index++
																												} else o(e, t.index);
																												return e.slice(n, t.index)
																											},
																											u = function(e, t) {
																												for (var n = [i(e, t)], r = {
																													deepCmp: !1
																												}; t.index < t.length;) {
																													var u = e[t.index];
																													if ("[" === u) {
																														t.index++,
																														n.push(a(e, t)),
																														"]" !== e[t.index] && o(e, t.index),
																														t.index++
																													} else {
																														if ("." !== u) break;
																														if (t.index++, "*" === e[t.index]) {
																															if (t.index++, "*" === e[t.index]) {
																																t.index++,
																																r.deepCmp = !0;
																																break
																															}
																															o(e, t.index)
																														}
																														n.push(i(e, t))
																													}
																												}
																												return {
																													path: n,
																													options: r
																												}
																											},
																											f = function(e, t) {
																												t.index < t.length && o(e, t.index)
																											};
																											t.parseSingleDataPath = function(e) {
																												var t = {
																													length: e.length,
																													index: 0
																												},
																												n = u(e, t);
																												return f(e, t),
																												n
																											},
																											t.parseMultiDataPaths = function(e) {
																												var t = {
																													length: e.length,
																													index: 0
																												},
																												n = function(e, t) {
																													for (; r.test(e[t.index]);) t.index++;
																													for (var n = [u(e, t)], a = !1; t.index < t.length;) {
																														var i = e[t.index];
																														r.test(i) ? t.index++:"," === i ? (a = !0, t.index++) : a ? (a = !1, n.push(u(e, t))) : o(e, t.index)
																													}
																													return n
																												} (e, t);
																												return f(e, t),
																												n
																											}
																										},
																										function(t, n, r) {
																											var o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ?
																											function(t) {
																												return e(t)
																											}: function(t) {
																												return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol": e(t)
																											};
																											n.create = function(e, t) {
																												return function e(t, n, r) {
																													if ("object" !== (void 0 === t ? "undefined": o(t)) || null === t) return t;
																													var a = t instanceof Array,
																													i = {};
																													Object.keys(t).forEach((function(o) {
																														var a = null;
																														i[o] = {
																															get: function() {
																																if (!a) {
																																	var i = r.concat(o);
																																	n.push({
																																		path: i,
																																		value: t[o]
																																	}),
																																	a = e(t[o], n, i)
																																}
																																return a
																															},
																															set: function() {
																																throw new Error("Setting data is not allowed")
																															},
																															enumerable: !0
																														}
																													})),
																													a && (i.length = {
																														value: t.length,
																														enumerable: !1
																													}),
																													i.__rawObject__ = {
																														get: function() {
																															return t
																														},
																														set: function() {
																															throw new Error("Setting data is not allowed")
																														},
																														enumerable: !1
																													};
																													var u = a ? Array.prototype: Object.prototype;
																													return Object.create(u, i)
																												} (e, t, [])
																											},
																											n.unwrap = function(e) {
																												return "object" !== (void 0 === e ? "undefined": o(e)) || null === e || "object" !== o(e.__rawObject__) ? e: e.__rawObject__
																											}
																										}]);
																									});
																									define("package2024CNY/utils/crypto-js/aes.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function() {
																												var r = e,
																												i = r.lib.BlockCipher,
																												o = r.algo,
																												t = [],
																												n = [],
																												s = [],
																												c = [],
																												d = [],
																												u = [],
																												f = [],
																												h = [],
																												p = [],
																												a = []; !
																												function() {
																													for (var e = [], r = 0; r < 256; r++) e[r] = r < 128 ? r << 1 : r << 1 ^ 283;
																													var i = 0,
																													o = 0;
																													for (r = 0; r < 256; r++) {
																														var y = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4;
																														y = y >>> 8 ^ 255 & y ^ 99,
																														t[i] = y,
																														n[y] = i;
																														var v = e[i],
																														l = e[v],
																														_ = e[l],
																														k = 257 * e[y] ^ 16843008 * y;
																														s[i] = k << 24 | k >>> 8,
																														c[i] = k << 16 | k >>> 16,
																														d[i] = k << 8 | k >>> 24,
																														u[i] = k,
																														k = 16843009 * _ ^ 65537 * l ^ 257 * v ^ 16843008 * i,
																														f[y] = k << 24 | k >>> 8,
																														h[y] = k << 16 | k >>> 16,
																														p[y] = k << 8 | k >>> 24,
																														a[y] = k,
																														i ? (i = v ^ e[e[e[_ ^ v]]], o ^= e[e[o]]) : i = o = 1
																													}
																												} ();
																												var y = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
																												v = o.AES = i.extend({
																													_doReset: function() {
																														if (!this._nRounds || this._keyPriorReset !== this._key) {
																															for (var e = this._keyPriorReset = this._key,
																															r = e.words,
																															i = e.sigBytes / 4,
																															o = 4 * ((this._nRounds = i + 6) + 1), n = this._keySchedule = [], s = 0; s < o; s++) if (s < i) n[s] = r[s];
																															else {
																																var c = n[s - 1];
																																s % i ? i > 6 && s % i == 4 && (c = t[c >>> 24] << 24 | t[c >>> 16 & 255] << 16 | t[c >>> 8 & 255] << 8 | t[255 & c]) : (c = t[(c = c << 8 | c >>> 24) >>> 24] << 24 | t[c >>> 16 & 255] << 16 | t[c >>> 8 & 255] << 8 | t[255 & c], c ^= y[s / i | 0] << 24),
																																n[s] = n[s - i] ^ c
																															}
																															for (var d = this._invKeySchedule = [], u = 0; u < o; u++) s = o - u,
																															c = u % 4 ? n[s] : n[s - 4],
																															d[u] = u < 4 || s <= 4 ? c: f[t[c >>> 24]] ^ h[t[c >>> 16 & 255]] ^ p[t[c >>> 8 & 255]] ^ a[t[255 & c]]
																														}
																													},
																													encryptBlock: function(e, r) {
																														this._doCryptBlock(e, r, this._keySchedule, s, c, d, u, t)
																													},
																													decryptBlock: function(e, r) {
																														var i = e[r + 1];
																														e[r + 1] = e[r + 3],
																														e[r + 3] = i,
																														this._doCryptBlock(e, r, this._invKeySchedule, f, h, p, a, n),
																														i = e[r + 1],
																														e[r + 1] = e[r + 3],
																														e[r + 3] = i
																													},
																													_doCryptBlock: function(e, r, i, o, t, n, s, c) {
																														for (var d = this._nRounds,
																														u = e[r] ^ i[0], f = e[r + 1] ^ i[1], h = e[r + 2] ^ i[2], p = e[r + 3] ^ i[3], a = 4, y = 1; y < d; y++) {
																															var v = o[u >>> 24] ^ t[f >>> 16 & 255] ^ n[h >>> 8 & 255] ^ s[255 & p] ^ i[a++],
																															l = o[f >>> 24] ^ t[h >>> 16 & 255] ^ n[p >>> 8 & 255] ^ s[255 & u] ^ i[a++],
																															_ = o[h >>> 24] ^ t[p >>> 16 & 255] ^ n[u >>> 8 & 255] ^ s[255 & f] ^ i[a++],
																															k = o[p >>> 24] ^ t[u >>> 16 & 255] ^ n[f >>> 8 & 255] ^ s[255 & h] ^ i[a++];
																															u = v,
																															f = l,
																															h = _,
																															p = k
																														}
																														v = (c[u >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & p]) ^ i[a++],
																														l = (c[f >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & u]) ^ i[a++],
																														_ = (c[h >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & f]) ^ i[a++],
																														k = (c[p >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & h]) ^ i[a++],
																														e[r] = v,
																														e[r + 1] = l,
																														e[r + 2] = _,
																														e[r + 3] = k
																													},
																													keySize: 8
																												});
																												r.AES = i._createHelper(v)
																											} (),
																											e.AES
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/cipher-core.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, t = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											var t, r, i, n, c, o, s, a, f, p, d, h, u, l, _, y, v, k;
																											e.lib.Cipher || (r = (t = e).lib, i = r.Base, n = r.WordArray, c = r.BufferedBlockAlgorithm, (o = t.enc).Utf8, s = o.Base64, a = t.algo.EvpKDF, f = r. = c.extend({
																												cfg: i.extend(),
																												createEncryptor: function(e, t) {
																													return this.create(this._ENC_XFORM_MODE, e, t)
																												},
																												createDecryptor: function(e, t) {
																													return this.create(this._DEC_XFORM_MODE, e, t)
																												},
																												init: function(e, t, r) {
																													this.cfg = this.cfg.extend(r),
																													this._xformMode = e,
																													this._key = t,
																													this.reset()
																												},
																												reset: function() {
																													c.reset.call(this),
																													this._doReset()
																												},
																												process: function(e) {
																													return this._append(e),
																													this._process()
																												},
																												finalize: function(e) {
																													return e && this._append(e),
																													this._doFinalize()
																												},
																												keySize: 4,
																												ivSize: 4,
																												_ENC_XFORM_MODE: 1,
																												_DEC_XFORM_MODE: 2,
																												_createHelper: function() {
																													function e(e) {
																														return "string" == typeof e ? k: y
																													}
																													return function(t) {
																														return {
																															encrypt: function(r, i, n) {
																																return e(i).encrypt(t, r, i, n)
																															},
																															decrypt: function(r, i, n) {
																																return e(i).decrypt(t, r, i, n)
																															}
																														}
																													}
																												} ()
																											}), r.StreamCipher = f.extend({
																												_doFinalize: function() {
																													return this._process(!0)
																												},
																												blockSize: 1
																											}), p = t.mode = {},
																											d = r.BlockCipherMode = i.extend({
																												createEncryptor: function(e, t) {
																													return this.Encryptor.create(e, t)
																												},
																												createDecryptor: function(e, t) {
																													return this.Decryptor.create(e, t)
																												},
																												init: function(e, t) {
																													this._cipher = e,
																													this._iv = t
																												}
																											}), h = p.CBC = function() {
																												var e = d.extend();
																												function t(e, t, r) {
																													var i = this._iv;
																													if (i) {
																														var n = i;
																														this._iv = void 0
																													} else n = this._prevBlock;
																													for (var c = 0; c < r; c++) e[t + c] ^= n[c]
																												}
																												return e.Encryptor = e.extend({
																													processBlock: function(e, r) {
																														var i = this._cipher,
																														n = i.blockSize;
																														t.call(this, e, r, n),
																														i.encryptBlock(e, r),
																														this._prevBlock = e.slice(r, r + n)
																													}
																												}),
																												e.Decryptor = e.extend({
																													processBlock: function(e, r) {
																														var i = this._cipher,
																														n = i.blockSize,
																														c = e.slice(r, r + n);
																														i.decryptBlock(e, r),
																														t.call(this, e, r, n),
																														this._prevBlock = c
																													}
																												}),
																												e
																											} (), u = (t.pad = {}).Pkcs7 = {
																												pad: function(e, t) {
																													for (var r = 4 * t,
																													i = r - e.sigBytes % r,
																													c = i << 24 | i << 16 | i << 8 | i,
																													o = [], s = 0; s < i; s += 4) o.push(c);
																													var a = n.create(o, i);
																													e.concat(a)
																												},
																												unpad: function(e) {
																													var t = 255 & e.words[e.sigBytes - 1 >>> 2];
																													e.sigBytes -= t
																												}
																											},
																											r.BlockCipher = f.extend({
																												cfg: f.cfg.extend({
																													mode: h,
																													padding: u
																												}),
																												reset: function() {
																													f.reset.call(this);
																													var e = this.cfg,
																													t = e.iv,
																													r = e.mode;
																													if (this._xformMode == this._ENC_XFORM_MODE) var i = r.createEncryptor;
																													else i = r.createDecryptor,
																													this._minBufferSize = 1;
																													this._mode && this._mode.__creator == i ? this._mode.init(this, t && t.words) : (this._mode = i.call(r, this, t && t.words), this._mode.__creator = i)
																												},
																												_doProcessBlock: function(e, t) {
																													this._mode.processBlock(e, t)
																												},
																												_doFinalize: function() {
																													var e = this.cfg.padding;
																													if (this._xformMode == this._ENC_XFORM_MODE) {
																														e.pad(this._data, this.blockSize);
																														var t = this._process(!0)
																													} else t = this._process(!0),
																													e.unpad(t);
																													return t
																												},
																												blockSize: 4
																											}), l = r.CipherParams = i.extend({
																												init: function(e) {
																													this.mixIn(e)
																												},
																												toString: function(e) {
																													return (e || this.formatter).stringify(this)
																												}
																											}), _ = (t.format = {}).OpenSSL = {
																												stringify: function(e) {
																													var t = e.ciphertext,
																													r = e.salt;
																													if (r) var i = n.create([1398893684, 1701076831]).concat(r).concat(t);
																													else i = t;
																													return i.toString(s)
																												},
																												parse: function(e) {
																													var t = s.parse(e),
																													r = t.words;
																													if (1398893684 == r[0] && 1701076831 == r[1]) {
																														var i = n.create(r.slice(2, 4));
																														r.splice(0, 4),
																														t.sigBytes -= 16
																													}
																													return l.create({
																														ciphertext: t,
																														salt: i
																													})
																												}
																											},
																											y = r.SerializableCipher = i.extend({
																												cfg: i.extend({
																													format: _
																												}),
																												encrypt: function(e, t, r, i) {
																													i = this.cfg.extend(i);
																													var n = e.createEncryptor(r, i),
																													c = n.finalize(t),
																													o = n.cfg;
																													return l.create({
																														ciphertext: c,
																														key: r,
																														iv: o.iv,
																														algorithm: e,
																														mode: o.mode,
																														padding: o.padding,
																														blockSize: e.blockSize,
																														formatter: i.format
																													})
																												},
																												decrypt: function(e, t, r, i) {
																													return i = this.cfg.extend(i),
																													t = this._parse(t, i.format),
																													e.createDecryptor(r, i).finalize(t.ciphertext)
																												},
																												_parse: function(e, t) {
																													return "string" == typeof e ? t.parse(e, this) : e
																												}
																											}), v = (t.kdf = {}).OpenSSL = {
																												execute: function(e, t, r, i) {
																													i || (i = n.random(8));
																													var c = a.create({
																														keySize: t + r
																													}).compute(e, i),
																													o = n.create(c.words.slice(t), 4 * r);
																													return c.sigBytes = 4 * t,
																													l.create({
																														key: c,
																														iv: o,
																														salt: i
																													})
																												}
																											},
																											k = r.PasswordBasedCipher = y.extend({
																												cfg: y.cfg.extend({
																													kdf: v
																												}),
																												encrypt: function(e, t, r, i) {
																													var n = (i = this.cfg.extend(i)).kdf.execute(r, e.keySize, e.ivSize);
																													i.iv = n.iv;
																													var c = y.encrypt.call(this, e, t, n.key, i);
																													return c.mixIn(n),
																													c
																												},
																												decrypt: function(e, t, r, i) {
																													i = this.cfg.extend(i),
																													t = this._parse(t, i.format);
																													var n = i.kdf.execute(r, e.keySize, e.ivSize, t.salt);
																													return i.iv = n.iv,
																													y.decrypt.call(this, e, t, n.key, i)
																												}
																											}))
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": t(exports)) ? module.exports = exports = e(require("./core"), require("./evpkdf")) : "function" == typeof define && define.amd ? define(["./core", "./evpkdf"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/core.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var t = require("../../../@babel/runtime/helpers/typeof"); !
																										function(n, e) {
																											"object" == ("undefined" == typeof exports ? "undefined": t(exports)) ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : (void 0).CryptoJS = e()
																										} (0, (function() {
																											var t, n, e, i, r, o, s, a, u, c, f, h, p = p || (t = Math, n = Object.create ||
																											function() {
																												function t() {}
																												return function(n) {
																													var e;
																													return t.prototype = n,
																													e = new t,
																													t.prototype = null,
																													e
																												}
																											} (), i = (e = {}).lib = {},
																											r = i.Base = {
																												extend: function(t) {
																													var e = n(this);
																													return t && e.mixIn(t),
																													(!e.hasOwnProperty("init") || this.init === e.init) && (e.init = function() {
																														e.$super.init.apply(this, arguments)
																													}),
																													e.init.prototype = e,
																													e.$super = this,
																													e
																												},
																												create: function() {
																													var t = this.extend();
																													return t.init.apply(t, arguments),
																													t
																												},
																												init: function() {},
																												mixIn: function(t) {
																													for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
																													t.hasOwnProperty("toString") && (this.toString = t.toString)
																												},
																												clone: function() {
																													return this.init.prototype.extend(this)
																												}
																											},
																											o = i.WordArray = r.extend({
																												init: function(t, n) {
																													t = this.words = t || [],
																													this.sigBytes = null != n ? n: 4 * t.length
																												},
																												toString: function(t) {
																													return (t || a).stringify(this)
																												},
																												concat: function(t) {
																													var n = this.words,
																													e = t.words,
																													i = this.sigBytes,
																													r = t.sigBytes;
																													if (this.clamp(), i % 4) for (var o = 0; o < r; o++) {
																														var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255;
																														n[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
																													} else for (o = 0; o < r; o += 4) n[i + o >>> 2] = e[o >>> 2];
																													return this.sigBytes += r,
																													this
																												},
																												clamp: function() {
																													var n = this.words,
																													e = this.sigBytes;
																													n[e >>> 2] &= 4294967295 << 32 - e % 4 * 8,
																													n.length = t.ceil(e / 4)
																												},
																												clone: function() {
																													var t = r.clone.call(this);
																													return t.words = this.words.slice(0),
																													t
																												},
																												random: function(n) {
																													for (var e, i = [], r = function(n) {
																														n = n;
																														var e = 987654321,
																														i = 4294967295;
																														return function() {
																															var r = ((e = 36969 * (65535 & e) + (e >> 16) & i) << 16) + (n = 18e3 * (65535 & n) + (n >> 16) & i) & i;
																															return r /= 4294967296,
																															(r += .5) * (t.random() > .5 ? 1 : -1)
																														}
																													},
																													s = 0; s < n; s += 4) {
																														var a = r(4294967296 * (e || t.random()));
																														e = 987654071 * a(),
																														i.push(4294967296 * a() | 0)
																													}
																													return new o.init(i, n)
																												}
																											}), s = e.enc = {},
																											a = s.Hex = {
																												stringify: function(t) {
																													for (var n = t.words,
																													e = t.sigBytes,
																													i = [], r = 0; r < e; r++) {
																														var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
																														i.push((o >>> 4).toString(16)),
																														i.push((15 & o).toString(16))
																													}
																													return i.join("")
																												},
																												parse: function(t) {
																													for (var n = t.length,
																													e = [], i = 0; i < n; i += 2) e[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
																													return new o.init(e, n / 2)
																												}
																											},
																											u = s.Latin1 = {
																												stringify: function(t) {
																													for (var n = t.words,
																													e = t.sigBytes,
																													i = [], r = 0; r < e; r++) {
																														var o = n[r >>> 2] >>> 24 - r % 4 * 8 & 255;
																														i.push(String.fromCharCode(o))
																													}
																													return i.join("")
																												},
																												parse: function(t) {
																													for (var n = t.length,
																													e = [], i = 0; i < n; i++) e[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
																													return new o.init(e, n)
																												}
																											},
																											c = s.Utf8 = {
																												stringify: function(t) {
																													try {
																														return decodeURIComponent(escape(u.stringify(t)))
																													} catch(t) {
																														throw new Error("Malformed UTF-8 data")
																													}
																												},
																												parse: function(t) {
																													return u.parse(unescape(encodeURIComponent(t)))
																												}
																											},
																											f = i.BufferedBlockAlgorithm = r.extend({
																												reset: function() {
																													this._data = new o.init,
																													this._nDataBytes = 0
																												},
																												_append: function(t) {
																													"string" == typeof t && (t = c.parse(t)),
																													this._data.concat(t),
																													this._nDataBytes += t.sigBytes
																												},
																												_process: function(n) {
																													var e = this._data,
																													i = e.words,
																													r = e.sigBytes,
																													s = this.blockSize,
																													a = r / (4 * s),
																													u = (a = n ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * s,
																													c = t.min(4 * u, r);
																													if (u) {
																														for (var f = 0; f < u; f += s) this._doProcessBlock(i, f);
																														var h = i.splice(0, u);
																														e.sigBytes -= c
																													}
																													return new o.init(h, c)
																												},
																												clone: function() {
																													var t = r.clone.call(this);
																													return t._data = this._data.clone(),
																													t
																												},
																												_minBufferSize: 0
																											}), i.Hasher = f.extend({
																												cfg: r.extend(),
																												init: function(t) {
																													this.cfg = this.cfg.extend(t),
																													this.reset()
																												},
																												reset: function() {
																													f.reset.call(this),
																													this._doReset()
																												},
																												update: function(t) {
																													return this._append(t),
																													this._process(),
																													this
																												},
																												finalize: function(t) {
																													return t && this._append(t),
																													this._doFinalize()
																												},
																												blockSize: 16,
																												_createHelper: function(t) {
																													return function(n, e) {
																														return new t.init(e).finalize(n)
																													}
																												},
																												_createHmacHelper: function(t) {
																													return function(n, e) {
																														return new h.HMAC.init(t, e).finalize(n)
																													}
																												}
																											}), h = e.algo = {},
																											e);
																											return p
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/enc-base64.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var r = require("../../../@babel/runtime/helpers/typeof"); !
																										function(e, t) {
																											"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = t(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], t) : t((void 0).CryptoJS)
																										} (0, (function(r) {
																											return t = (e = r).lib.WordArray,
																											e.enc.Base64 = {
																												stringify: function(r) {
																													var e = r.words,
																													t = r.sigBytes,
																													n = this._map;
																													r.clamp();
																													for (var a = [], i = 0; i < t; i += 3) for (var o = (e[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (e[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | e[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, f = 0; f < 4 && i + .75 * f < t; f++) a.push(n.charAt(o >>> 6 * (3 - f) & 63));
																													var s = n.charAt(64);
																													if (s) for (; a.length % 4;) a.push(s);
																													return a.join("")
																												},
																												parse: function(r) {
																													var e = r.length,
																													n = this._map,
																													a = this._reverseMap;
																													if (!a) {
																														a = this._reverseMap = [];
																														for (var i = 0; i < n.length; i++) a[n.charCodeAt(i)] = i
																													}
																													var o = n.charAt(64);
																													if (o) {
																														var f = r.indexOf(o); - 1 !== f && (e = f)
																													}
																													return function(r, e, n) {
																														for (var a = [], i = 0, o = 0; o < e; o++) if (o % 4) {
																															var f = n[r.charCodeAt(o - 1)] << o % 4 * 2,
																															s = n[r.charCodeAt(o)] >>> 6 - o % 4 * 2;
																															a[i >>> 2] |= (f | s) << 24 - i % 4 * 8,
																															i++
																														}
																														return t.create(a, i)
																													} (r, e, a)
																												},
																												_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
																											},
																											r.enc.Base64;
																											var e, t
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/enc-utf16.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var r, e = require("../../../@babel/runtime/helpers/typeof");
																										r = function(r) {
																											return function() {
																												var e = r,
																												t = e.lib.WordArray,
																												n = e.enc;
																												function o(r) {
																													return r << 8 & 4278255360 | r >>> 8 & 16711935
																												}
																												n.Utf16 = n.Utf16BE = {
																													stringify: function(r) {
																														for (var e = r.words,
																														t = r.sigBytes,
																														n = [], o = 0; o < t; o += 2) {
																															var i = e[o >>> 2] >>> 16 - o % 4 * 8 & 65535;
																															n.push(String.fromCharCode(i))
																														}
																														return n.join("")
																													},
																													parse: function(r) {
																														for (var e = r.length,
																														n = [], o = 0; o < e; o++) n[o >>> 1] |= r.charCodeAt(o) << 16 - o % 2 * 16;
																														return t.create(n, 2 * e)
																													}
																												},
																												n.Utf16LE = {
																													stringify: function(r) {
																														for (var e = r.words,
																														t = r.sigBytes,
																														n = [], i = 0; i < t; i += 2) {
																															var f = o(e[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
																															n.push(String.fromCharCode(f))
																														}
																														return n.join("")
																													},
																													parse: function(r) {
																														for (var e = r.length,
																														n = [], i = 0; i < e; i++) n[i >>> 1] |= o(r.charCodeAt(i) << 16 - i % 2 * 16);
																														return t.create(n, 2 * e)
																													}
																												}
																											} (),
																											r.enc.Utf16
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = r(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], r) : r((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/evpkdf.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(r, t, i) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = t(require("./core"), require("./sha1"), require("./hmac")) : "function" == typeof define && define.amd ? define(["./core", "./sha1", "./hmac"], t) : t((void 0).CryptoJS)
																										} (0, (function(e) {
																											return t = (r = e).lib,
																											i = t.Base,
																											n = t.WordArray,
																											o = r.algo,
																											a = o.MD5,
																											c = o.EvpKDF = i.extend({
																												cfg: i.extend({
																													keySize: 4,
																													hasher: a,
																													iterations: 1
																												}),
																												init: function(e) {
																													this.cfg = this.cfg.extend(e)
																												},
																												compute: function(e, r) {
																													for (var t = this.cfg,
																													i = t.hasher.create(), o = n.create(), a = o.words, c = t.keySize, f = t.iterations; a.length < c;) {
																														s && i.update(s);
																														var s = i.update(e).finalize(r);
																														i.reset();
																														for (var u = 1; u < f; u++) s = i.finalize(s),
																														i.reset();
																														o.concat(s)
																													}
																													return o.sigBytes = 4 * c,
																													o
																												}
																											}),
																											r.EvpKDF = function(e, r, t) {
																												return c.create(t).compute(e, r)
																											},
																											e.EvpKDF;
																											var r, t, i, n, o, a, c
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/format-hex.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return t = (r = e).lib.CipherParams,
																											i = r.enc.Hex,
																											r.format.Hex = {
																												stringify: function(e) {
																													return e.ciphertext.toString(i)
																												},
																												parse: function(e) {
																													var r = i.parse(e);
																													return t.create({
																														ciphertext: r
																													})
																												}
																											},
																											e.format.Hex;
																											var r, t, i
																										}, "object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/hmac.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(t, i) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = i(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], i) : i((void 0).CryptoJS)
																										} (0, (function(e) {
																											var t, i, n;
																											i = (t = e).lib.Base,
																											n = t.enc.Utf8,
																											t.algo.HMAC = i.extend({
																												init: function(e, t) {
																													e = this._hasher = new e.init,
																													"string" == typeof t && (t = n.parse(t));
																													var i = e.blockSize,
																													r = 4 * i;
																													t.sigBytes > r && (t = e.finalize(t)),
																													t.clamp();
																													for (var s = this._oKey = t.clone(), o = this._iKey = t.clone(), a = s.words, f = o.words, c = 0; c < i; c++) a[c] ^= 1549556828,
																													f[c] ^= 909522486;
																													s.sigBytes = o.sigBytes = r,
																													this.reset()
																												},
																												reset: function() {
																													var e = this._hasher;
																													e.reset(),
																													e.update(this._iKey)
																												},
																												update: function(e) {
																													return this._hasher.update(e),
																													this
																												},
																												finalize: function(e) {
																													var t = this._hasher,
																													i = t.finalize(e);
																													return t.reset(),
																													t.finalize(this._oKey.clone().concat(i))
																												}
																											})
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/index.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(r, i, a) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = i(require("./core"), require("./x64-core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./md5"), require("./sha1"), require("./sha256"), require("./sha224"), require("./sha512"), require("./sha384"), require("./sha3"), require("./ripemd160"), require("./hmac"), require("./pbkdf2"), require("./evpkdf"), require("./cipher-core"), require("./mode-cfb"), require("./mode-ctr"), require("./mode-ctr-gladman"), require("./mode-ofb"), require("./mode-ecb"), require("./pad-ansix923"), require("./pad-iso10126"), require("./pad-iso97971"), require("./pad-zeropadding"), require("./pad-nopadding"), require("./format-hex"), require("./aes"), require("./tripledes"), require("./rc4"), require("./rabbit"), require("./rabbit-legacy")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], i) : r.CryptoJS = r.CryptoJS
																										} (void 0, (function(e) {
																											return e
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/lib-typedarrays.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function() {
																												if ("function" == typeof ArrayBuffer) {
																													var r = e.lib.WordArray,
																													n = r.init; (r.init = function(e) {
																														if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
																															for (var r = e.byteLength,
																															t = [], i = 0; i < r; i++) t[i >>> 2] |= e[i] << 24 - i % 4 * 8;
																															n.call(this, t, r)
																														} else n.apply(this, arguments)
																													}).prototype = r
																												}
																											} (),
																											e.lib.WordArray
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/md5.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function(r) {
																												var t = e,
																												n = t.lib,
																												o = n.WordArray,
																												a = n.Hasher,
																												i = t.algo,
																												s = []; !
																												function() {
																													for (var e = 0; e < 64; e++) s[e] = 4294967296 * r.abs(r.sin(e + 1)) | 0
																												} ();
																												var c = i.MD5 = a.extend({
																													_doReset: function() {
																														this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
																													},
																													_doProcessBlock: function(e, r) {
																														for (var t = 0; t < 16; t++) {
																															var n = r + t,
																															o = e[n];
																															e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
																														}
																														var a = this._hash.words,
																														i = e[r + 0],
																														c = e[r + 1],
																														v = e[r + 2],
																														l = e[r + 3],
																														_ = e[r + 4],
																														p = e[r + 5],
																														y = e[r + 6],
																														b = e[r + 7],
																														m = e[r + 8],
																														x = e[r + 9],
																														D = e[r + 10],
																														H = e[r + 11],
																														M = e[r + 12],
																														g = e[r + 13],
																														w = e[r + 14],
																														B = e[r + 15],
																														q = a[0],
																														j = a[1],
																														k = a[2],
																														z = a[3];
																														q = u(q, j, k, z, i, 7, s[0]),
																														z = u(z, q, j, k, c, 12, s[1]),
																														k = u(k, z, q, j, v, 17, s[2]),
																														j = u(j, k, z, q, l, 22, s[3]),
																														q = u(q, j, k, z, _, 7, s[4]),
																														z = u(z, q, j, k, p, 12, s[5]),
																														k = u(k, z, q, j, y, 17, s[6]),
																														j = u(j, k, z, q, b, 22, s[7]),
																														q = u(q, j, k, z, m, 7, s[8]),
																														z = u(z, q, j, k, x, 12, s[9]),
																														k = u(k, z, q, j, D, 17, s[10]),
																														j = u(j, k, z, q, H, 22, s[11]),
																														q = u(q, j, k, z, M, 7, s[12]),
																														z = u(z, q, j, k, g, 12, s[13]),
																														k = u(k, z, q, j, w, 17, s[14]),
																														q = f(q, j = u(j, k, z, q, B, 22, s[15]), k, z, c, 5, s[16]),
																														z = f(z, q, j, k, y, 9, s[17]),
																														k = f(k, z, q, j, H, 14, s[18]),
																														j = f(j, k, z, q, i, 20, s[19]),
																														q = f(q, j, k, z, p, 5, s[20]),
																														z = f(z, q, j, k, D, 9, s[21]),
																														k = f(k, z, q, j, B, 14, s[22]),
																														j = f(j, k, z, q, _, 20, s[23]),
																														q = f(q, j, k, z, x, 5, s[24]),
																														z = f(z, q, j, k, w, 9, s[25]),
																														k = f(k, z, q, j, l, 14, s[26]),
																														j = f(j, k, z, q, m, 20, s[27]),
																														q = f(q, j, k, z, g, 5, s[28]),
																														z = f(z, q, j, k, v, 9, s[29]),
																														k = f(k, z, q, j, b, 14, s[30]),
																														q = h(q, j = f(j, k, z, q, M, 20, s[31]), k, z, p, 4, s[32]),
																														z = h(z, q, j, k, m, 11, s[33]),
																														k = h(k, z, q, j, H, 16, s[34]),
																														j = h(j, k, z, q, w, 23, s[35]),
																														q = h(q, j, k, z, c, 4, s[36]),
																														z = h(z, q, j, k, _, 11, s[37]),
																														k = h(k, z, q, j, b, 16, s[38]),
																														j = h(j, k, z, q, D, 23, s[39]),
																														q = h(q, j, k, z, g, 4, s[40]),
																														z = h(z, q, j, k, i, 11, s[41]),
																														k = h(k, z, q, j, l, 16, s[42]),
																														j = h(j, k, z, q, y, 23, s[43]),
																														q = h(q, j, k, z, x, 4, s[44]),
																														z = h(z, q, j, k, M, 11, s[45]),
																														k = h(k, z, q, j, B, 16, s[46]),
																														q = d(q, j = h(j, k, z, q, v, 23, s[47]), k, z, i, 6, s[48]),
																														z = d(z, q, j, k, b, 10, s[49]),
																														k = d(k, z, q, j, w, 15, s[50]),
																														j = d(j, k, z, q, p, 21, s[51]),
																														q = d(q, j, k, z, M, 6, s[52]),
																														z = d(z, q, j, k, l, 10, s[53]),
																														k = d(k, z, q, j, D, 15, s[54]),
																														j = d(j, k, z, q, c, 21, s[55]),
																														q = d(q, j, k, z, m, 6, s[56]),
																														z = d(z, q, j, k, B, 10, s[57]),
																														k = d(k, z, q, j, y, 15, s[58]),
																														j = d(j, k, z, q, g, 21, s[59]),
																														q = d(q, j, k, z, _, 6, s[60]),
																														z = d(z, q, j, k, H, 10, s[61]),
																														k = d(k, z, q, j, v, 15, s[62]),
																														j = d(j, k, z, q, x, 21, s[63]),
																														a[0] = a[0] + q | 0,
																														a[1] = a[1] + j | 0,
																														a[2] = a[2] + k | 0,
																														a[3] = a[3] + z | 0
																													},
																													_doFinalize: function() {
																														var e = this._data,
																														t = e.words,
																														n = 8 * this._nDataBytes,
																														o = 8 * e.sigBytes;
																														t[o >>> 5] |= 128 << 24 - o % 32;
																														var a = r.floor(n / 4294967296),
																														i = n;
																														t[15 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
																														t[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
																														e.sigBytes = 4 * (t.length + 1),
																														this._process();
																														for (var s = this._hash,
																														c = s.words,
																														u = 0; u < 4; u++) {
																															var f = c[u];
																															c[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8)
																														}
																														return s
																													},
																													clone: function() {
																														var e = a.clone.call(this);
																														return e._hash = this._hash.clone(),
																														e
																													}
																												});
																												function u(e, r, t, n, o, a, i) {
																													var s = e + (r & t | ~r & n) + o + i;
																													return (s << a | s >>> 32 - a) + r
																												}
																												function f(e, r, t, n, o, a, i) {
																													var s = e + (r & n | t & ~n) + o + i;
																													return (s << a | s >>> 32 - a) + r
																												}
																												function h(e, r, t, n, o, a, i) {
																													var s = e + (r ^ t ^ n) + o + i;
																													return (s << a | s >>> 32 - a) + r
																												}
																												function d(e, r, t, n, o, a, i) {
																													var s = e + (t ^ (r | ~n)) + o + i;
																													return (s << a | s >>> 32 - a) + r
																												}
																												t.MD5 = a._createHelper(c),
																												t.HmacMD5 = a._createHmacHelper(c)
																											} (Math),
																											e.MD5
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/mode-cfb.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return e.mode.CFB = function() {
																												var r = e.lib.BlockCipherMode.extend();
																												function i(e, r, i, o) {
																													var c = this._iv;
																													if (c) {
																														var t = c.slice(0);
																														this._iv = void 0
																													} else t = this._prevBlock;
																													o.encryptBlock(t, 0);
																													for (var n = 0; n < i; n++) e[r + n] ^= t[n]
																												}
																												return r.Encryptor = r.extend({
																													processBlock: function(e, r) {
																														var o = this._cipher,
																														c = o.blockSize;
																														i.call(this, e, r, c, o),
																														this._prevBlock = e.slice(r, r + c)
																													}
																												}),
																												r.Decryptor = r.extend({
																													processBlock: function(e, r) {
																														var o = this._cipher,
																														c = o.blockSize,
																														t = e.slice(r, r + c);
																														i.call(this, e, r, c, o),
																														this._prevBlock = t
																													}
																												}),
																												r
																											} (),
																											e.mode.CFB
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/mode-ctr-gladman.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return e.mode.CTRGladman = function() {
																												var r = e.lib.BlockCipherMode.extend();
																												function o(e) {
																													if (255 == (e >> 24 & 255)) {
																														var r = e >> 16 & 255,
																														o = e >> 8 & 255,
																														i = 255 & e;
																														255 === r ? (r = 0, 255 === o ? (o = 0, 255 === i ? i = 0 : ++i) : ++o) : ++r,
																														e = 0,
																														e += r << 16,
																														e += o << 8,
																														e += i
																													} else e += 1 << 24;
																													return e
																												}
																												var i = r.Encryptor = r.extend({
																													processBlock: function(e, r) {
																														var i = this._cipher,
																														t = i.blockSize,
																														n = this._iv,
																														c = this._counter;
																														n && (c = this._counter = n.slice(0), this._iv = void 0),
																														function(e) {
																															0 === (e[0] = o(e[0])) && (e[1] = o(e[1]))
																														} (c);
																														var u = c.slice(0);
																														i.encryptBlock(u, 0);
																														for (var d = 0; d < t; d++) e[r + d] ^= u[d]
																													}
																												});
																												return r.Decryptor = i,
																												r
																											} (),
																											e.mode.CTRGladman
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/mode-ctr.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(r, o, i) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o((void 0).CryptoJS)
																										} (0, (function(e) {
																											return e.mode.CTR = (r = e.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
																												processBlock: function(e, r) {
																													var o = this._cipher,
																													i = o.blockSize,
																													t = this._iv,
																													c = this._counter;
																													t && (c = this._counter = t.slice(0), this._iv = void 0);
																													var n = c.slice(0);
																													o.encryptBlock(n, 0),
																													c[i - 1] = c[i - 1] + 1 | 0;
																													for (var p = 0; p < i; p++) e[r + p] ^= n[p]
																												}
																											}), r.Decryptor = o, r),
																											e.mode.CTR;
																											var r, o
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/mode-ecb.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(r, o, t) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o((void 0).CryptoJS)
																										} (0, (function(e) {
																											return e.mode.ECB = ((r = e.lib.BlockCipherMode.extend()).Encryptor = r.extend({
																												processBlock: function(e, r) {
																													this._cipher.encryptBlock(e, r)
																												}
																											}), r.Decryptor = r.extend({
																												processBlock: function(e, r) {
																													this._cipher.decryptBlock(e, r)
																												}
																											}), r),
																											e.mode.ECB;
																											var r
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/mode-ofb.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(r, o, i) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = o(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], o) : o((void 0).CryptoJS)
																										} (0, (function(e) {
																											return e.mode.OFB = (r = e.lib.BlockCipherMode.extend(), o = r.Encryptor = r.extend({
																												processBlock: function(e, r) {
																													var o = this._cipher,
																													i = o.blockSize,
																													t = this._iv,
																													c = this._keystream;
																													t && (c = this._keystream = t.slice(0), this._iv = void 0),
																													o.encryptBlock(c, 0);
																													for (var n = 0; n < i; n++) e[r + n] ^= c[n]
																												}
																											}), r.Decryptor = o, r),
																											e.mode.OFB;
																											var r, o
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/pad-ansix923.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return e.pad.AnsiX923 = {
																												pad: function(e, r) {
																													var i = e.sigBytes,
																													o = 4 * r,
																													t = o - i % o,
																													n = i + t - 1;
																													e.clamp(),
																													e.words[n >>> 2] |= t << 24 - n % 4 * 8,
																													e.sigBytes += t
																												},
																												unpad: function(e) {
																													var r = 255 & e.words[e.sigBytes - 1 >>> 2];
																													e.sigBytes -= r
																												}
																											},
																											e.pad.Ansix923
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/pad-iso10126.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return e.pad.Iso10126 = {
																												pad: function(r, o) {
																													var t = 4 * o,
																													i = t - r.sigBytes % t;
																													r.concat(e.lib.WordArray.random(i - 1)).concat(e.lib.WordArray.create([i << 24], 1))
																												},
																												unpad: function(e) {
																													var r = 255 & e.words[e.sigBytes - 1 >>> 2];
																													e.sigBytes -= r
																												}
																											},
																											e.pad.Iso10126
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/pad-iso97971.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return e.pad.Iso97971 = {
																												pad: function(r, o) {
																													r.concat(e.lib.WordArray.create([2147483648], 1)),
																													e.pad.ZeroPadding.pad(r, o)
																												},
																												unpad: function(r) {
																													e.pad.ZeroPadding.unpad(r),
																													r.sigBytes--
																												}
																											},
																											e.pad.Iso97971
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/pad-nopadding.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return e.pad.NoPadding = {
																												pad: function() {},
																												unpad: function() {}
																											},
																											e.pad.NoPadding
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/pad-zeropadding.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return e.pad.ZeroPadding = {
																												pad: function(e, r) {
																													var i = 4 * r;
																													e.clamp(),
																													e.sigBytes += i - (e.sigBytes % i || i)
																												},
																												unpad: function(e) {
																													for (var r = e.words,
																													i = e.sigBytes - 1; ! (r[i >>> 2] >>> 24 - i % 4 * 8 & 255);) i--;
																													e.sigBytes = i + 1
																												}
																											},
																											e.pad.ZeroPadding
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/pbkdf2.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(r, t, i) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = t(require("./core"), require("./sha1"), require("./hmac")) : "function" == typeof define && define.amd ? define(["./core", "./sha1", "./hmac"], t) : t((void 0).CryptoJS)
																										} (0, (function(e) {
																											return t = (r = e).lib,
																											i = t.Base,
																											n = t.WordArray,
																											o = r.algo,
																											a = o.SHA1,
																											s = o.HMAC,
																											c = o.PBKDF2 = i.extend({
																												cfg: i.extend({
																													keySize: 4,
																													hasher: a,
																													iterations: 1
																												}),
																												init: function(e) {
																													this.cfg = this.cfg.extend(e)
																												},
																												compute: function(e, r) {
																													for (var t = this.cfg,
																													i = s.create(t.hasher, e), o = n.create(), a = n.create([1]), c = o.words, f = a.words, u = t.keySize, d = t.iterations; c.length < u;) {
																														var h = i.update(r).finalize(a);
																														i.reset();
																														for (var p = h.words,
																														l = p.length,
																														g = h,
																														y = 1; y < d; y++) {
																															g = i.finalize(g),
																															i.reset();
																															for (var m = g.words,
																															v = 0; v < l; v++) p[v] ^= m[v]
																														}
																														o.concat(h),
																														f[0]++
																													}
																													return o.sigBytes = 4 * u,
																													o
																												}
																											}),
																											r.PBKDF2 = function(e, r, t) {
																												return c.create(t).compute(e, r)
																											},
																											e.PBKDF2;
																											var r, t, i, n, o, a, s, c
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/rabbit-legacy.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function() {
																												var r = e,
																												i = r.lib.StreamCipher,
																												t = r.algo,
																												o = [],
																												c = [],
																												s = [],
																												a = t.RabbitLegacy = i.extend({
																													_doReset: function() {
																														var e = this._key.words,
																														r = this.cfg.iv,
																														i = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
																														t = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
																														this._b = 0;
																														for (var o = 0; o < 4; o++) f.call(this);
																														for (o = 0; o < 8; o++) t[o] ^= i[o + 4 & 7];
																														if (r) {
																															var c = r.words,
																															s = c[0],
																															a = c[1],
																															n = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8),
																															d = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
																															u = n >>> 16 | 4294901760 & d,
																															h = d << 16 | 65535 & n;
																															for (t[0] ^= n, t[1] ^= u, t[2] ^= d, t[3] ^= h, t[4] ^= n, t[5] ^= u, t[6] ^= d, t[7] ^= h, o = 0; o < 4; o++) f.call(this)
																														}
																													},
																													_doProcessBlock: function(e, r) {
																														var i = this._X;
																														f.call(this),
																														o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
																														o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
																														o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
																														o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
																														for (var t = 0; t < 4; t++) o[t] = 16711935 & (o[t] << 8 | o[t] >>> 24) | 4278255360 & (o[t] << 24 | o[t] >>> 8),
																														e[r + t] ^= o[t]
																													},
																													blockSize: 4,
																													ivSize: 2
																												});
																												function f() {
																													for (var e = this._X,
																													r = this._C,
																													i = 0; i < 8; i++) c[i] = r[i];
																													for (r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < c[7] >>> 0 ? 1 : 0, i = 0; i < 8; i++) {
																														var t = e[i] + r[i],
																														o = 65535 & t,
																														a = t >>> 16,
																														f = ((o * o >>> 17) + o * a >>> 15) + a * a,
																														n = ((4294901760 & t) * t | 0) + ((65535 & t) * t | 0);
																														s[i] = f ^ n
																													}
																													e[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0,
																													e[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0,
																													e[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0,
																													e[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0,
																													e[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0,
																													e[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0,
																													e[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0,
																													e[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
																												}
																												r.RabbitLegacy = i._createHelper(a)
																											} (),
																											e.RabbitLegacy
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/rabbit.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function() {
																												var r = e,
																												i = r.lib.StreamCipher,
																												t = r.algo,
																												o = [],
																												s = [],
																												f = [],
																												c = t.Rabbit = i.extend({
																													_doReset: function() {
																														for (var e = this._key.words,
																														r = this.cfg.iv,
																														i = 0; i < 4; i++) e[i] = 16711935 & (e[i] << 8 | e[i] >>> 24) | 4278255360 & (e[i] << 24 | e[i] >>> 8);
																														var t = this._X = [e[0], e[3] << 16 | e[2] >>> 16, e[1], e[0] << 16 | e[3] >>> 16, e[2], e[1] << 16 | e[0] >>> 16, e[3], e[2] << 16 | e[1] >>> 16],
																														o = this._C = [e[2] << 16 | e[2] >>> 16, 4294901760 & e[0] | 65535 & e[1], e[3] << 16 | e[3] >>> 16, 4294901760 & e[1] | 65535 & e[2], e[0] << 16 | e[0] >>> 16, 4294901760 & e[2] | 65535 & e[3], e[1] << 16 | e[1] >>> 16, 4294901760 & e[3] | 65535 & e[0]];
																														for (this._b = 0, i = 0; i < 4; i++) n.call(this);
																														for (i = 0; i < 8; i++) o[i] ^= t[i + 4 & 7];
																														if (r) {
																															var s = r.words,
																															f = s[0],
																															c = s[1],
																															a = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8),
																															d = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8),
																															u = a >>> 16 | 4294901760 & d,
																															h = d << 16 | 65535 & a;
																															for (o[0] ^= a, o[1] ^= u, o[2] ^= d, o[3] ^= h, o[4] ^= a, o[5] ^= u, o[6] ^= d, o[7] ^= h, i = 0; i < 4; i++) n.call(this)
																														}
																													},
																													_doProcessBlock: function(e, r) {
																														var i = this._X;
																														n.call(this),
																														o[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
																														o[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
																														o[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
																														o[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
																														for (var t = 0; t < 4; t++) o[t] = 16711935 & (o[t] << 8 | o[t] >>> 24) | 4278255360 & (o[t] << 24 | o[t] >>> 8),
																														e[r + t] ^= o[t]
																													},
																													blockSize: 4,
																													ivSize: 2
																												});
																												function n() {
																													for (var e = this._X,
																													r = this._C,
																													i = 0; i < 8; i++) s[i] = r[i];
																													for (r[0] = r[0] + 1295307597 + this._b | 0, r[1] = r[1] + 3545052371 + (r[0] >>> 0 < s[0] >>> 0 ? 1 : 0) | 0, r[2] = r[2] + 886263092 + (r[1] >>> 0 < s[1] >>> 0 ? 1 : 0) | 0, r[3] = r[3] + 1295307597 + (r[2] >>> 0 < s[2] >>> 0 ? 1 : 0) | 0, r[4] = r[4] + 3545052371 + (r[3] >>> 0 < s[3] >>> 0 ? 1 : 0) | 0, r[5] = r[5] + 886263092 + (r[4] >>> 0 < s[4] >>> 0 ? 1 : 0) | 0, r[6] = r[6] + 1295307597 + (r[5] >>> 0 < s[5] >>> 0 ? 1 : 0) | 0, r[7] = r[7] + 3545052371 + (r[6] >>> 0 < s[6] >>> 0 ? 1 : 0) | 0, this._b = r[7] >>> 0 < s[7] >>> 0 ? 1 : 0, i = 0; i < 8; i++) {
																														var t = e[i] + r[i],
																														o = 65535 & t,
																														c = t >>> 16,
																														n = ((o * o >>> 17) + o * c >>> 15) + c * c,
																														a = ((4294901760 & t) * t | 0) + ((65535 & t) * t | 0);
																														f[i] = n ^ a
																													}
																													e[0] = f[0] + (f[7] << 16 | f[7] >>> 16) + (f[6] << 16 | f[6] >>> 16) | 0,
																													e[1] = f[1] + (f[0] << 8 | f[0] >>> 24) + f[7] | 0,
																													e[2] = f[2] + (f[1] << 16 | f[1] >>> 16) + (f[0] << 16 | f[0] >>> 16) | 0,
																													e[3] = f[3] + (f[2] << 8 | f[2] >>> 24) + f[1] | 0,
																													e[4] = f[4] + (f[3] << 16 | f[3] >>> 16) + (f[2] << 16 | f[2] >>> 16) | 0,
																													e[5] = f[5] + (f[4] << 8 | f[4] >>> 24) + f[3] | 0,
																													e[6] = f[6] + (f[5] << 16 | f[5] >>> 16) + (f[4] << 16 | f[4] >>> 16) | 0,
																													e[7] = f[7] + (f[6] << 8 | f[6] >>> 24) + f[5] | 0
																												}
																												r.Rabbit = i._createHelper(c)
																											} (),
																											e.Rabbit
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/rc4.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function() {
																												var r = e,
																												i = r.lib.StreamCipher,
																												t = r.algo,
																												o = t.RC4 = i.extend({
																													_doReset: function() {
																														for (var e = this._key,
																														r = e.words,
																														i = e.sigBytes,
																														t = this._S = [], o = 0; o < 256; o++) t[o] = o;
																														o = 0;
																														for (var s = 0; o < 256; o++) {
																															var n = o % i,
																															c = r[n >>> 2] >>> 24 - n % 4 * 8 & 255;
																															s = (s + t[o] + c) % 256;
																															var d = t[o];
																															t[o] = t[s],
																															t[s] = d
																														}
																														this._i = this._j = 0
																													},
																													_doProcessBlock: function(e, r) {
																														e[r] ^= s.call(this)
																													},
																													keySize: 8,
																													ivSize: 0
																												});
																												function s() {
																													for (var e = this._S,
																													r = this._i,
																													i = this._j,
																													t = 0,
																													o = 0; o < 4; o++) {
																														i = (i + e[r = (r + 1) % 256]) % 256;
																														var s = e[r];
																														e[r] = e[i],
																														e[i] = s,
																														t |= e[(e[r] + e[i]) % 256] << 24 - 8 * o
																													}
																													return this._i = r,
																													this._j = i,
																													t
																												}
																												r.RC4 = i._createHelper(o);
																												var n = t.RC4Drop = o.extend({
																													cfg: o.cfg.extend({
																														drop: 192
																													}),
																													_doReset: function() {
																														o._doReset.call(this);
																														for (var e = this.cfg.drop; e > 0; e--) s.call(this)
																													}
																												});
																												r.RC4Drop = i._createHelper(n)
																											} (),
																											e.RC4
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/ripemd160.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function(r) {
																												var t = e,
																												n = t.lib,
																												o = n.WordArray,
																												s = n.Hasher,
																												a = t.algo,
																												i = o.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
																												c = o.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
																												u = o.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
																												d = o.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
																												f = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
																												h = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
																												l = a.RIPEMD160 = s.extend({
																													_doReset: function() {
																														this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
																													},
																													_doProcessBlock: function(e, r) {
																														for (var t = 0; t < 16; t++) {
																															var n = r + t,
																															o = e[n];
																															e[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
																														}
																														var s, a, l, x, D, H, M, P, R, b, g, B = this._hash.words,
																														E = f.words,
																														I = h.words,
																														q = i.words,
																														j = c.words,
																														k = u.words,
																														z = d.words;
																														for (H = s = B[0], M = a = B[1], P = l = B[2], R = x = B[3], b = D = B[4], t = 0; t < 80; t += 1) g = s + e[r + q[t]] | 0,
																														g += t < 16 ? _(a, l, x) + E[0] : t < 32 ? p(a, l, x) + E[1] : t < 48 ? v(a, l, x) + E[2] : t < 64 ? w(a, l, x) + E[3] : y(a, l, x) + E[4],
																														g = (g = m(g |= 0, k[t])) + D | 0,
																														s = D,
																														D = x,
																														x = m(l, 10),
																														l = a,
																														a = g,
																														g = H + e[r + j[t]] | 0,
																														g += t < 16 ? y(M, P, R) + I[0] : t < 32 ? w(M, P, R) + I[1] : t < 48 ? v(M, P, R) + I[2] : t < 64 ? p(M, P, R) + I[3] : _(M, P, R) + I[4],
																														g = (g = m(g |= 0, z[t])) + b | 0,
																														H = b,
																														b = R,
																														R = m(P, 10),
																														P = M,
																														M = g;
																														g = B[1] + l + R | 0,
																														B[1] = B[2] + x + b | 0,
																														B[2] = B[3] + D + H | 0,
																														B[3] = B[4] + s + M | 0,
																														B[4] = B[0] + a + P | 0,
																														B[0] = g
																													},
																													_doFinalize: function() {
																														var e = this._data,
																														r = e.words,
																														t = 8 * this._nDataBytes,
																														n = 8 * e.sigBytes;
																														r[n >>> 5] |= 128 << 24 - n % 32,
																														r[14 + (n + 64 >>> 9 << 4)] = 16711935 & (t << 8 | t >>> 24) | 4278255360 & (t << 24 | t >>> 8),
																														e.sigBytes = 4 * (r.length + 1),
																														this._process();
																														for (var o = this._hash,
																														s = o.words,
																														a = 0; a < 5; a++) {
																															var i = s[a];
																															s[a] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
																														}
																														return o
																													},
																													clone: function() {
																														var e = s.clone.call(this);
																														return e._hash = this._hash.clone(),
																														e
																													}
																												});
																												function _(e, r, t) {
																													return e ^ r ^ t
																												}
																												function p(e, r, t) {
																													return e & r | ~e & t
																												}
																												function v(e, r, t) {
																													return (e | ~r) ^ t
																												}
																												function w(e, r, t) {
																													return e & t | r & ~t
																												}
																												function y(e, r, t) {
																													return e ^ (r | ~t)
																												}
																												function m(e, r) {
																													return e << r | e >>> 32 - r
																												}
																												t.RIPEMD160 = s._createHelper(l),
																												t.HmacRIPEMD160 = s._createHmacHelper(l)
																											} (Math),
																											e.RIPEMD160
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/sha1.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(t, r) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = r(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], r) : r((void 0).CryptoJS)
																										} (0, (function(e) {
																											return r = (t = e).lib,
																											o = r.WordArray,
																											n = r.Hasher,
																											s = t.algo,
																											i = [],
																											a = s.SHA1 = n.extend({
																												_doReset: function() {
																													this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
																												},
																												_doProcessBlock: function(e, t) {
																													for (var r = this._hash.words,
																													o = r[0], n = r[1], s = r[2], a = r[3], c = r[4], h = 0; h < 80; h++) {
																														if (h < 16) i[h] = 0 | e[t + h];
																														else {
																															var d = i[h - 3] ^ i[h - 8] ^ i[h - 14] ^ i[h - 16];
																															i[h] = d << 1 | d >>> 31
																														}
																														var f = (o << 5 | o >>> 27) + c + i[h];
																														f += h < 20 ? 1518500249 + (n & s | ~n & a) : h < 40 ? 1859775393 + (n ^ s ^ a) : h < 60 ? (n & s | n & a | s & a) - 1894007588 : (n ^ s ^ a) - 899497514,
																														c = a,
																														a = s,
																														s = n << 30 | n >>> 2,
																														n = o,
																														o = f
																													}
																													r[0] = r[0] + o | 0,
																													r[1] = r[1] + n | 0,
																													r[2] = r[2] + s | 0,
																													r[3] = r[3] + a | 0,
																													r[4] = r[4] + c | 0
																												},
																												_doFinalize: function() {
																													var e = this._data,
																													t = e.words,
																													r = 8 * this._nDataBytes,
																													o = 8 * e.sigBytes;
																													return t[o >>> 5] |= 128 << 24 - o % 32,
																													t[14 + (o + 64 >>> 9 << 4)] = Math.floor(r / 4294967296),
																													t[15 + (o + 64 >>> 9 << 4)] = r,
																													e.sigBytes = 4 * t.length,
																													this._process(),
																													this._hash
																												},
																												clone: function() {
																													var e = n.clone.call(this);
																													return e._hash = this._hash.clone(),
																													e
																												}
																											}),
																											t.SHA1 = n._createHelper(a),
																											t.HmacSHA1 = n._createHmacHelper(a),
																											e.SHA1;
																											var t, r, o, n, s, i, a
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/sha224.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(r, t, i) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = t(require("./core"), require("./sha256")) : "function" == typeof define && define.amd ? define(["./core", "./sha256"], t) : t((void 0).CryptoJS)
																										} (0, (function(e) {
																											return t = (r = e).lib.WordArray,
																											i = r.algo,
																											n = i.SHA256,
																											o = i.SHA224 = n.extend({
																												_doReset: function() {
																													this._hash = new t.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
																												},
																												_doFinalize: function() {
																													var e = n._doFinalize.call(this);
																													return e.sigBytes -= 4,
																													e
																												}
																											}),
																											r.SHA224 = n._createHelper(o),
																											r.HmacSHA224 = n._createHmacHelper(o),
																											e.SHA224;
																											var r, t, i, n, o
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/sha256.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, r = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function(r) {
																												var t = e,
																												n = t.lib,
																												o = n.WordArray,
																												i = n.Hasher,
																												s = t.algo,
																												a = [],
																												c = []; !
																												function() {
																													function e(e) {
																														for (var t = r.sqrt(e), n = 2; n <= t; n++) if (! (e % n)) return ! 1;
																														return ! 0
																													}
																													function t(e) {
																														return 4294967296 * (e - (0 | e)) | 0
																													}
																													for (var n = 2,
																													o = 0; o < 64;) e(n) && (o < 8 && (a[o] = t(r.pow(n, .5))), c[o] = t(r.pow(n, 1 / 3)), o++),
																													n++
																												} ();
																												var f = [],
																												u = s.SHA256 = i.extend({
																													_doReset: function() {
																														this._hash = new o.init(a.slice(0))
																													},
																													_doProcessBlock: function(e, r) {
																														for (var t = this._hash.words,
																														n = t[0], o = t[1], i = t[2], s = t[3], a = t[4], u = t[5], h = t[6], d = t[7], l = 0; l < 64; l++) {
																															if (l < 16) f[l] = 0 | e[r + l];
																															else {
																																var p = f[l - 15],
																																_ = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
																																v = f[l - 2],
																																H = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
																																f[l] = _ + f[l - 7] + H + f[l - 16]
																															}
																															var y = n & o ^ n & i ^ o & i,
																															m = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),
																															w = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & u ^ ~a & h) + c[l] + f[l];
																															d = h,
																															h = u,
																															u = a,
																															a = s + w | 0,
																															s = i,
																															i = o,
																															o = n,
																															n = w + (m + y) | 0
																														}
																														t[0] = t[0] + n | 0,
																														t[1] = t[1] + o | 0,
																														t[2] = t[2] + i | 0,
																														t[3] = t[3] + s | 0,
																														t[4] = t[4] + a | 0,
																														t[5] = t[5] + u | 0,
																														t[6] = t[6] + h | 0,
																														t[7] = t[7] + d | 0
																													},
																													_doFinalize: function() {
																														var e = this._data,
																														t = e.words,
																														n = 8 * this._nDataBytes,
																														o = 8 * e.sigBytes;
																														return t[o >>> 5] |= 128 << 24 - o % 32,
																														t[14 + (o + 64 >>> 9 << 4)] = r.floor(n / 4294967296),
																														t[15 + (o + 64 >>> 9 << 4)] = n,
																														e.sigBytes = 4 * t.length,
																														this._process(),
																														this._hash
																													},
																													clone: function() {
																														var e = i.clone.call(this);
																														return e._hash = this._hash.clone(),
																														e
																													}
																												});
																												t.SHA256 = i._createHelper(u),
																												t.HmacSHA256 = i._createHmacHelper(u)
																											} (Math),
																											e.SHA256
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": r(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/sha3.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var r, e = require("../../../@babel/runtime/helpers/typeof");
																										r = function(r) {
																											return function(e) {
																												var o = r,
																												t = o.lib,
																												i = t.WordArray,
																												h = t.Hasher,
																												a = o.x64.Word,
																												n = o.algo,
																												f = [],
																												s = [],
																												c = []; !
																												function() {
																													for (var r = 1,
																													e = 0,
																													o = 0; o < 24; o++) {
																														f[r + 5 * e] = (o + 1) * (o + 2) / 2 % 64;
																														var t = (2 * r + 3 * e) % 5;
																														r = e % 5,
																														e = t
																													}
																													for (r = 0; r < 5; r++) for (e = 0; e < 5; e++) s[r + 5 * e] = e + (2 * r + 3 * e) % 5 * 5;
																													for (var i = 1,
																													h = 0; h < 24; h++) {
																														for (var n = 0,
																														l = 0,
																														v = 0; v < 7; v++) {
																															if (1 & i) {
																																var g = (1 << v) - 1;
																																g < 32 ? l ^= 1 << g: n ^= 1 << g - 32
																															}
																															128 & i ? i = i << 1 ^ 113 : i <<= 1
																														}
																														c[h] = a.create(n, l)
																													}
																												} ();
																												var l = []; !
																												function() {
																													for (var r = 0; r < 25; r++) l[r] = a.create()
																												} ();
																												var v = n.SHA3 = h.extend({
																													cfg: h.cfg.extend({
																														outputLength: 512
																													}),
																													_doReset: function() {
																														for (var r = this._state = [], e = 0; e < 25; e++) r[e] = new a.init;
																														this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
																													},
																													_doProcessBlock: function(r, e) {
																														for (var o = this._state,
																														t = this.blockSize / 2,
																														i = 0; i < t; i++) {
																															var h = r[e + 2 * i],
																															a = r[e + 2 * i + 1];
																															h = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8),
																															a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
																															(B = o[i]).high ^= a,
																															B.low ^= h
																														}
																														for (var n = 0; n < 24; n++) {
																															for (var v = 0; v < 5; v++) {
																																for (var g = 0,
																																u = 0,
																																w = 0; w < 5; w++) g ^= (B = o[v + 5 * w]).high,
																																u ^= B.low;
																																var d = l[v];
																																d.high = g,
																																d.low = u
																															}
																															for (v = 0; v < 5; v++) {
																																var p = l[(v + 4) % 5],
																																_ = l[(v + 1) % 5],
																																x = _.high,
																																H = _.low;
																																for (g = p.high ^ (x << 1 | H >>> 31), u = p.low ^ (H << 1 | x >>> 31), w = 0; w < 5; w++)(B = o[v + 5 * w]).high ^= g,
																																B.low ^= u
																															}
																															for (var y = 1; y < 25; y++) {
																																var S = (B = o[y]).high,
																																b = B.low,
																																m = f[y];
																																m < 32 ? (g = S << m | b >>> 32 - m, u = b << m | S >>> 32 - m) : (g = b << m - 32 | S >>> 64 - m, u = S << m - 32 | b >>> 64 - m);
																																var A = l[s[y]];
																																A.high = g,
																																A.low = u
																															}
																															var k = l[0],
																															z = o[0];
																															for (k.high = z.high, k.low = z.low, v = 0; v < 5; v++) for (w = 0; w < 5; w++) {
																																var B = o[y = v + 5 * w],
																																q = l[y],
																																L = l[(v + 1) % 5 + 5 * w],
																																W = l[(v + 2) % 5 + 5 * w];
																																B.high = q.high ^ ~L.high & W.high,
																																B.low = q.low ^ ~L.low & W.low
																															}
																															B = o[0];
																															var j = c[n];
																															B.high ^= j.high,
																															B.low ^= j.low
																														}
																													},
																													_doFinalize: function() {
																														var r = this._data,
																														o = r.words,
																														t = (this._nDataBytes, 8 * r.sigBytes),
																														h = 32 * this.blockSize;
																														o[t >>> 5] |= 1 << 24 - t % 32,
																														o[(e.ceil((t + 1) / h) * h >>> 5) - 1] |= 128,
																														r.sigBytes = 4 * o.length,
																														this._process();
																														for (var a = this._state,
																														n = this.cfg.outputLength / 8,
																														f = n / 8,
																														s = [], c = 0; c < f; c++) {
																															var l = a[c],
																															v = l.high,
																															g = l.low;
																															v = 16711935 & (v << 8 | v >>> 24) | 4278255360 & (v << 24 | v >>> 8),
																															g = 16711935 & (g << 8 | g >>> 24) | 4278255360 & (g << 24 | g >>> 8),
																															s.push(g),
																															s.push(v)
																														}
																														return new i.init(s, n)
																													},
																													clone: function() {
																														for (var r = h.clone.call(this), e = r._state = this._state.slice(0), o = 0; o < 25; o++) e[o] = e[o].clone();
																														return r
																													}
																												});
																												o.SHA3 = h._createHelper(v),
																												o.HmacSHA3 = h._createHmacHelper(v)
																											} (Math),
																											r.SHA3
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = r(require("./core"), require("./x64-core")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core"], r) : r((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/sha384.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e = require("../../../@babel/runtime/helpers/typeof"); !
																										function(i, n, r) {
																											"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = n(require("./core"), require("./x64-core"), require("./sha512")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core", "./sha512"], n) : n((void 0).CryptoJS)
																										} (0, (function(e) {
																											return n = (i = e).x64,
																											r = n.Word,
																											t = n.WordArray,
																											o = i.algo,
																											a = o.SHA512,
																											c = o.SHA384 = a.extend({
																												_doReset: function() {
																													this._hash = new t.init([new r.init(3418070365, 3238371032), new r.init(1654270250, 914150663), new r.init(2438529370, 812702999), new r.init(355462360, 4144912697), new r.init(1731405415, 4290775857), new r.init(2394180231, 1750603025), new r.init(3675008525, 1694076839), new r.init(1203062813, 3204075428)])
																												},
																												_doFinalize: function() {
																													var e = a._doFinalize.call(this);
																													return e.sigBytes -= 16,
																													e
																												}
																											}),
																											i.SHA384 = a._createHelper(c),
																											i.HmacSHA384 = a._createHmacHelper(c),
																											e.SHA384;
																											var i, n, r, t, o, a, c
																										}));
																									});
																									define("package2024CNY/utils/crypto-js/sha512.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var i, e = require("../../../@babel/runtime/helpers/typeof");
																										i = function(i) {
																											return function() {
																												var e = i,
																												h = e.lib.Hasher,
																												o = e.x64,
																												n = o.Word,
																												r = o.WordArray,
																												t = e.algo;
																												function l() {
																													return n.create.apply(n, arguments)
																												}
																												var a = [l(1116352408, 3609767458), l(1899447441, 602891725), l(3049323471, 3964484399), l(3921009573, 2173295548), l(961987163, 4081628472), l(1508970993, 3053834265), l(2453635748, 2937671579), l(2870763221, 3664609560), l(3624381080, 2734883394), l(310598401, 1164996542), l(607225278, 1323610764), l(1426881987, 3590304994), l(1925078388, 4068182383), l(2162078206, 991336113), l(2614888103, 633803317), l(3248222580, 3479774868), l(3835390401, 2666613458), l(4022224774, 944711139), l(264347078, 2341262773), l(604807628, 2007800933), l(770255983, 1495990901), l(1249150122, 1856431235), l(1555081692, 3175218132), l(1996064986, 2198950837), l(2554220882, 3999719339), l(2821834349, 766784016), l(2952996808, 2566594879), l(3210313671, 3203337956), l(3336571891, 1034457026), l(3584528711, 2466948901), l(113926993, 3758326383), l(338241895, 168717936), l(666307205, 1188179964), l(773529912, 1546045734), l(1294757372, 1522805485), l(1396182291, 2643833823), l(1695183700, 2343527390), l(1986661051, 1014477480), l(2177026350, 1206759142), l(2456956037, 344077627), l(2730485921, 1290863460), l(2820302411, 3158454273), l(3259730800, 3505952657), l(3345764771, 106217008), l(3516065817, 3606008344), l(3600352804, 1432725776), l(4094571909, 1467031594), l(275423344, 851169720), l(430227734, 3100823752), l(506948616, 1363258195), l(659060556, 3750685593), l(883997877, 3785050280), l(958139571, 3318307427), l(1322822218, 3812723403), l(1537002063, 2003034995), l(1747873779, 3602036899), l(1955562222, 1575990012), l(2024104815, 1125592928), l(2227730452, 2716904306), l(2361852424, 442776044), l(2428436474, 593698344), l(2756734187, 3733110249), l(3204031479, 2999351573), l(3329325298, 3815920427), l(3391569614, 3928383900), l(3515267271, 566280711), l(3940187606, 3454069534), l(4118630271, 4000239992), l(116418474, 1914138554), l(174292421, 2731055270), l(289380356, 3203993006), l(460393269, 320620315), l(685471733, 587496836), l(852142971, 1086792851), l(1017036298, 365543100), l(1126000580, 2618297676), l(1288033470, 3409855158), l(1501505948, 4234509866), l(1607167915, 987167468), l(1816402316, 1246189591)],
																												s = []; !
																												function() {
																													for (var i = 0; i < 80; i++) s[i] = l()
																												} ();
																												var w = t.SHA512 = h.extend({
																													_doReset: function() {
																														this._hash = new r.init([new n.init(1779033703, 4089235720), new n.init(3144134277, 2227873595), new n.init(1013904242, 4271175723), new n.init(2773480762, 1595750129), new n.init(1359893119, 2917565137), new n.init(2600822924, 725511199), new n.init(528734635, 4215389547), new n.init(1541459225, 327033209)])
																													},
																													_doProcessBlock: function(i, e) {
																														for (var h = this._hash.words,
																														o = h[0], n = h[1], r = h[2], t = h[3], l = h[4], w = h[5], c = h[6], g = h[7], f = o.high, u = o.low, d = n.high, p = n.low, v = r.high, _ = r.low, y = t.high, H = t.low, x = l.high, S = l.low, b = w.high, m = w.low, A = c.high, B = c.low, q = g.high, k = g.low, z = f, W = u, j = d, C = p, D = v, F = _, J = y, M = H, P = x, R = S, X = b, E = m, G = A, I = B, K = q, L = k, N = 0; N < 80; N++) {
																															var O = s[N];
																															if (N < 16) var Q = O.high = 0 | i[e + 2 * N],
																															T = O.low = 0 | i[e + 2 * N + 1];
																															else {
																																var U = s[N - 15],
																																V = U.high,
																																Y = U.low,
																																Z = (V >>> 1 | Y << 31) ^ (V >>> 8 | Y << 24) ^ V >>> 7,
																																$ = (Y >>> 1 | V << 31) ^ (Y >>> 8 | V << 24) ^ (Y >>> 7 | V << 25),
																																ii = s[N - 2],
																																ei = ii.high,
																																hi = ii.low,
																																oi = (ei >>> 19 | hi << 13) ^ (ei << 3 | hi >>> 29) ^ ei >>> 6,
																																ni = (hi >>> 19 | ei << 13) ^ (hi << 3 | ei >>> 29) ^ (hi >>> 6 | ei << 26),
																																ri = s[N - 7],
																																ti = ri.high,
																																li = ri.low,
																																ai = s[N - 16],
																																si = ai.high,
																																wi = ai.low;
																																Q = (Q = (Q = Z + ti + ((T = $ + li) >>> 0 < $ >>> 0 ? 1 : 0)) + oi + ((T += ni) >>> 0 < ni >>> 0 ? 1 : 0)) + si + ((T += wi) >>> 0 < wi >>> 0 ? 1 : 0),
																																O.high = Q,
																																O.low = T
																															}
																															var ci, gi = P & X ^ ~P & G,
																															fi = R & E ^ ~R & I,
																															ui = z & j ^ z & D ^ j & D,
																															di = W & C ^ W & F ^ C & F,
																															pi = (z >>> 28 | W << 4) ^ (z << 30 | W >>> 2) ^ (z << 25 | W >>> 7),
																															vi = (W >>> 28 | z << 4) ^ (W << 30 | z >>> 2) ^ (W << 25 | z >>> 7),
																															_i = (P >>> 14 | R << 18) ^ (P >>> 18 | R << 14) ^ (P << 23 | R >>> 9),
																															yi = (R >>> 14 | P << 18) ^ (R >>> 18 | P << 14) ^ (R << 23 | P >>> 9),
																															Hi = a[N],
																															xi = Hi.high,
																															Si = Hi.low,
																															bi = K + _i + ((ci = L + yi) >>> 0 < L >>> 0 ? 1 : 0),
																															mi = vi + di;
																															K = G,
																															L = I,
																															G = X,
																															I = E,
																															X = P,
																															E = R,
																															P = J + (bi = (bi = (bi = bi + gi + ((ci += fi) >>> 0 < fi >>> 0 ? 1 : 0)) + xi + ((ci += Si) >>> 0 < Si >>> 0 ? 1 : 0)) + Q + ((ci += T) >>> 0 < T >>> 0 ? 1 : 0)) + ((R = M + ci | 0) >>> 0 < M >>> 0 ? 1 : 0) | 0,
																															J = D,
																															M = F,
																															D = j,
																															F = C,
																															j = z,
																															C = W,
																															z = bi + (pi + ui + (mi >>> 0 < vi >>> 0 ? 1 : 0)) + ((W = ci + mi | 0) >>> 0 < ci >>> 0 ? 1 : 0) | 0
																														}
																														u = o.low = u + W,
																														o.high = f + z + (u >>> 0 < W >>> 0 ? 1 : 0),
																														p = n.low = p + C,
																														n.high = d + j + (p >>> 0 < C >>> 0 ? 1 : 0),
																														_ = r.low = _ + F,
																														r.high = v + D + (_ >>> 0 < F >>> 0 ? 1 : 0),
																														H = t.low = H + M,
																														t.high = y + J + (H >>> 0 < M >>> 0 ? 1 : 0),
																														S = l.low = S + R,
																														l.high = x + P + (S >>> 0 < R >>> 0 ? 1 : 0),
																														m = w.low = m + E,
																														w.high = b + X + (m >>> 0 < E >>> 0 ? 1 : 0),
																														B = c.low = B + I,
																														c.high = A + G + (B >>> 0 < I >>> 0 ? 1 : 0),
																														k = g.low = k + L,
																														g.high = q + K + (k >>> 0 < L >>> 0 ? 1 : 0)
																													},
																													_doFinalize: function() {
																														var i = this._data,
																														e = i.words,
																														h = 8 * this._nDataBytes,
																														o = 8 * i.sigBytes;
																														return e[o >>> 5] |= 128 << 24 - o % 32,
																														e[30 + (o + 128 >>> 10 << 5)] = Math.floor(h / 4294967296),
																														e[31 + (o + 128 >>> 10 << 5)] = h,
																														i.sigBytes = 4 * e.length,
																														this._process(),
																														this._hash.toX32()
																													},
																													clone: function() {
																														var i = h.clone.call(this);
																														return i._hash = this._hash.clone(),
																														i
																													},
																													blockSize: 32
																												});
																												e.SHA512 = h._createHelper(w),
																												e.HmacSHA512 = h._createHmacHelper(w)
																											} (),
																											i.SHA512
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": e(exports)) ? module.exports = exports = i(require("./core"), require("./x64-core")) : "function" == typeof define && define.amd ? define(["./core", "./x64-core"], i) : i((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/tripledes.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, t = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return function() {
																												var t = e,
																												r = t.lib,
																												i = r.WordArray,
																												c = r.BlockCipher,
																												o = t.algo,
																												l = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
																												s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
																												h = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
																												n = [{
																													0 : 8421888,
																													268435456 : 32768,
																													536870912 : 8421378,
																													805306368 : 2,
																													1073741824 : 512,
																													1342177280 : 8421890,
																													1610612736 : 8389122,
																													1879048192 : 8388608,
																													2147483648 : 514,
																													2415919104 : 8389120,
																													2684354560 : 33280,
																													2952790016 : 8421376,
																													3221225472 : 32770,
																													3489660928 : 8388610,
																													3758096384 : 0,
																													4026531840 : 33282,
																													134217728 : 0,
																													402653184 : 8421890,
																													671088640 : 33282,
																													939524096 : 32768,
																													1207959552 : 8421888,
																													1476395008 : 512,
																													1744830464 : 8421378,
																													2013265920 : 2,
																													2281701376 : 8389120,
																													2550136832 : 33280,
																													2818572288 : 8421376,
																													3087007744 : 8389122,
																													3355443200 : 8388610,
																													3623878656 : 32770,
																													3892314112 : 514,
																													4160749568 : 8388608,
																													1 : 32768,
																													268435457 : 2,
																													536870913 : 8421888,
																													805306369 : 8388608,
																													1073741825 : 8421378,
																													1342177281 : 33280,
																													1610612737 : 512,
																													1879048193 : 8389122,
																													2147483649 : 8421890,
																													2415919105 : 8421376,
																													2684354561 : 8388610,
																													2952790017 : 33282,
																													3221225473 : 514,
																													3489660929 : 8389120,
																													3758096385 : 32770,
																													4026531841 : 0,
																													134217729 : 8421890,
																													402653185 : 8421376,
																													671088641 : 8388608,
																													939524097 : 512,
																													1207959553 : 32768,
																													1476395009 : 8388610,
																													1744830465 : 2,
																													2013265921 : 33282,
																													2281701377 : 32770,
																													2550136833 : 8389122,
																													2818572289 : 514,
																													3087007745 : 8421888,
																													3355443201 : 8389120,
																													3623878657 : 0,
																													3892314113 : 33280,
																													4160749569 : 8421378
																												},
																												{
																													0 : 1074282512,
																													16777216 : 16384,
																													33554432 : 524288,
																													50331648 : 1074266128,
																													67108864 : 1073741840,
																													83886080 : 1074282496,
																													100663296 : 1073758208,
																													117440512 : 16,
																													134217728 : 540672,
																													150994944 : 1073758224,
																													167772160 : 1073741824,
																													184549376 : 540688,
																													201326592 : 524304,
																													218103808 : 0,
																													234881024 : 16400,
																													251658240 : 1074266112,
																													8388608 : 1073758208,
																													25165824 : 540688,
																													41943040 : 16,
																													58720256 : 1073758224,
																													75497472 : 1074282512,
																													92274688 : 1073741824,
																													109051904 : 524288,
																													125829120 : 1074266128,
																													142606336 : 524304,
																													159383552 : 0,
																													176160768 : 16384,
																													192937984 : 1074266112,
																													209715200 : 1073741840,
																													226492416 : 540672,
																													243269632 : 1074282496,
																													260046848 : 16400,
																													268435456 : 0,
																													285212672 : 1074266128,
																													301989888 : 1073758224,
																													318767104 : 1074282496,
																													335544320 : 1074266112,
																													352321536 : 16,
																													369098752 : 540688,
																													385875968 : 16384,
																													402653184 : 16400,
																													419430400 : 524288,
																													436207616 : 524304,
																													452984832 : 1073741840,
																													469762048 : 540672,
																													486539264 : 1073758208,
																													503316480 : 1073741824,
																													520093696 : 1074282512,
																													276824064 : 540688,
																													293601280 : 524288,
																													310378496 : 1074266112,
																													327155712 : 16384,
																													343932928 : 1073758208,
																													360710144 : 1074282512,
																													377487360 : 16,
																													394264576 : 1073741824,
																													411041792 : 1074282496,
																													427819008 : 1073741840,
																													444596224 : 1073758224,
																													461373440 : 524304,
																													478150656 : 0,
																													494927872 : 16400,
																													511705088 : 1074266128,
																													528482304 : 540672
																												},
																												{
																													0 : 260,
																													1048576 : 0,
																													2097152 : 67109120,
																													3145728 : 65796,
																													4194304 : 65540,
																													5242880 : 67108868,
																													6291456 : 67174660,
																													7340032 : 67174400,
																													8388608 : 67108864,
																													9437184 : 67174656,
																													10485760 : 65792,
																													11534336 : 67174404,
																													12582912 : 67109124,
																													13631488 : 65536,
																													14680064 : 4,
																													15728640 : 256,
																													524288 : 67174656,
																													1572864 : 67174404,
																													2621440 : 0,
																													3670016 : 67109120,
																													4718592 : 67108868,
																													5767168 : 65536,
																													6815744 : 65540,
																													7864320 : 260,
																													8912896 : 4,
																													9961472 : 256,
																													11010048 : 67174400,
																													12058624 : 65796,
																													13107200 : 65792,
																													14155776 : 67109124,
																													15204352 : 67174660,
																													16252928 : 67108864,
																													16777216 : 67174656,
																													17825792 : 65540,
																													18874368 : 65536,
																													19922944 : 67109120,
																													20971520 : 256,
																													22020096 : 67174660,
																													23068672 : 67108868,
																													24117248 : 0,
																													25165824 : 67109124,
																													26214400 : 67108864,
																													27262976 : 4,
																													28311552 : 65792,
																													29360128 : 67174400,
																													30408704 : 260,
																													31457280 : 65796,
																													32505856 : 67174404,
																													17301504 : 67108864,
																													18350080 : 260,
																													19398656 : 67174656,
																													20447232 : 0,
																													21495808 : 65540,
																													22544384 : 67109120,
																													23592960 : 256,
																													24641536 : 67174404,
																													25690112 : 65536,
																													26738688 : 67174660,
																													27787264 : 65796,
																													28835840 : 67108868,
																													29884416 : 67109124,
																													30932992 : 67174400,
																													31981568 : 4,
																													33030144 : 65792
																												},
																												{
																													0 : 2151682048,
																													65536 : 2147487808,
																													131072 : 4198464,
																													196608 : 2151677952,
																													262144 : 0,
																													327680 : 4198400,
																													393216 : 2147483712,
																													458752 : 4194368,
																													524288 : 2147483648,
																													589824 : 4194304,
																													655360 : 64,
																													720896 : 2147487744,
																													786432 : 2151678016,
																													851968 : 4160,
																													917504 : 4096,
																													983040 : 2151682112,
																													32768 : 2147487808,
																													98304 : 64,
																													163840 : 2151678016,
																													229376 : 2147487744,
																													294912 : 4198400,
																													360448 : 2151682112,
																													425984 : 0,
																													491520 : 2151677952,
																													557056 : 4096,
																													622592 : 2151682048,
																													688128 : 4194304,
																													753664 : 4160,
																													819200 : 2147483648,
																													884736 : 4194368,
																													950272 : 4198464,
																													1015808 : 2147483712,
																													1048576 : 4194368,
																													1114112 : 4198400,
																													1179648 : 2147483712,
																													1245184 : 0,
																													1310720 : 4160,
																													1376256 : 2151678016,
																													1441792 : 2151682048,
																													1507328 : 2147487808,
																													1572864 : 2151682112,
																													1638400 : 2147483648,
																													1703936 : 2151677952,
																													1769472 : 4198464,
																													1835008 : 2147487744,
																													1900544 : 4194304,
																													1966080 : 64,
																													2031616 : 4096,
																													1081344 : 2151677952,
																													1146880 : 2151682112,
																													1212416 : 0,
																													1277952 : 4198400,
																													1343488 : 4194368,
																													1409024 : 2147483648,
																													1474560 : 2147487808,
																													1540096 : 64,
																													1605632 : 2147483712,
																													1671168 : 4096,
																													1736704 : 2147487744,
																													1802240 : 2151678016,
																													1867776 : 4160,
																													1933312 : 2151682048,
																													1998848 : 4194304,
																													2064384 : 4198464
																												},
																												{
																													0 : 128,
																													4096 : 17039360,
																													8192 : 262144,
																													12288 : 536870912,
																													16384 : 537133184,
																													20480 : 16777344,
																													24576 : 553648256,
																													28672 : 262272,
																													32768 : 16777216,
																													36864 : 537133056,
																													40960 : 536871040,
																													45056 : 553910400,
																													49152 : 553910272,
																													53248 : 0,
																													57344 : 17039488,
																													61440 : 553648128,
																													2048 : 17039488,
																													6144 : 553648256,
																													10240 : 128,
																													14336 : 17039360,
																													18432 : 262144,
																													22528 : 537133184,
																													26624 : 553910272,
																													30720 : 536870912,
																													34816 : 537133056,
																													38912 : 0,
																													43008 : 553910400,
																													47104 : 16777344,
																													51200 : 536871040,
																													55296 : 553648128,
																													59392 : 16777216,
																													63488 : 262272,
																													65536 : 262144,
																													69632 : 128,
																													73728 : 536870912,
																													77824 : 553648256,
																													81920 : 16777344,
																													86016 : 553910272,
																													90112 : 537133184,
																													94208 : 16777216,
																													98304 : 553910400,
																													102400 : 553648128,
																													106496 : 17039360,
																													110592 : 537133056,
																													114688 : 262272,
																													118784 : 536871040,
																													122880 : 0,
																													126976 : 17039488,
																													67584 : 553648256,
																													71680 : 16777216,
																													75776 : 17039360,
																													79872 : 537133184,
																													83968 : 536870912,
																													88064 : 17039488,
																													92160 : 128,
																													96256 : 553910272,
																													100352 : 262272,
																													104448 : 553910400,
																													108544 : 0,
																													112640 : 553648128,
																													116736 : 16777344,
																													120832 : 262144,
																													124928 : 537133056,
																													129024 : 536871040
																												},
																												{
																													0 : 268435464,
																													256 : 8192,
																													512 : 270532608,
																													768 : 270540808,
																													1024 : 268443648,
																													1280 : 2097152,
																													1536 : 2097160,
																													1792 : 268435456,
																													2048 : 0,
																													2304 : 268443656,
																													2560 : 2105344,
																													2816 : 8,
																													3072 : 270532616,
																													3328 : 2105352,
																													3584 : 8200,
																													3840 : 270540800,
																													128 : 270532608,
																													384 : 270540808,
																													640 : 8,
																													896 : 2097152,
																													1152 : 2105352,
																													1408 : 268435464,
																													1664 : 268443648,
																													1920 : 8200,
																													2176 : 2097160,
																													2432 : 8192,
																													2688 : 268443656,
																													2944 : 270532616,
																													3200 : 0,
																													3456 : 270540800,
																													3712 : 2105344,
																													3968 : 268435456,
																													4096 : 268443648,
																													4352 : 270532616,
																													4608 : 270540808,
																													4864 : 8200,
																													5120 : 2097152,
																													5376 : 268435456,
																													5632 : 268435464,
																													5888 : 2105344,
																													6144 : 2105352,
																													6400 : 0,
																													6656 : 8,
																													6912 : 270532608,
																													7168 : 8192,
																													7424 : 268443656,
																													7680 : 270540800,
																													7936 : 2097160,
																													4224 : 8,
																													4480 : 2105344,
																													4736 : 2097152,
																													4992 : 268435464,
																													5248 : 268443648,
																													5504 : 8200,
																													5760 : 270540808,
																													6016 : 270532608,
																													6272 : 270540800,
																													6528 : 270532616,
																													6784 : 8192,
																													7040 : 2105352,
																													7296 : 2097160,
																													7552 : 0,
																													7808 : 268435456,
																													8064 : 268443656
																												},
																												{
																													0 : 1048576,
																													16 : 33555457,
																													32 : 1024,
																													48 : 1049601,
																													64 : 34604033,
																													80 : 0,
																													96 : 1,
																													112 : 34603009,
																													128 : 33555456,
																													144 : 1048577,
																													160 : 33554433,
																													176 : 34604032,
																													192 : 34603008,
																													208 : 1025,
																													224 : 1049600,
																													240 : 33554432,
																													8 : 34603009,
																													24 : 0,
																													40 : 33555457,
																													56 : 34604032,
																													72 : 1048576,
																													88 : 33554433,
																													104 : 33554432,
																													120 : 1025,
																													136 : 1049601,
																													152 : 33555456,
																													168 : 34603008,
																													184 : 1048577,
																													200 : 1024,
																													216 : 34604033,
																													232 : 1,
																													248 : 1049600,
																													256 : 33554432,
																													272 : 1048576,
																													288 : 33555457,
																													304 : 34603009,
																													320 : 1048577,
																													336 : 33555456,
																													352 : 34604032,
																													368 : 1049601,
																													384 : 1025,
																													400 : 34604033,
																													416 : 1049600,
																													432 : 1,
																													448 : 0,
																													464 : 34603008,
																													480 : 33554433,
																													496 : 1024,
																													264 : 1049600,
																													280 : 33555457,
																													296 : 34603009,
																													312 : 1,
																													328 : 33554432,
																													344 : 1048576,
																													360 : 1025,
																													376 : 34604032,
																													392 : 33554433,
																													408 : 34603008,
																													424 : 0,
																													440 : 34604033,
																													456 : 1049601,
																													472 : 1024,
																													488 : 33555456,
																													504 : 1048577
																												},
																												{
																													0 : 134219808,
																													1 : 131072,
																													2 : 134217728,
																													3 : 32,
																													4 : 131104,
																													5 : 134350880,
																													6 : 134350848,
																													7 : 2048,
																													8 : 134348800,
																													9 : 134219776,
																													10 : 133120,
																													11 : 134348832,
																													12 : 2080,
																													13 : 0,
																													14 : 134217760,
																													15 : 133152,
																													2147483648 : 2048,
																													2147483649 : 134350880,
																													2147483650 : 134219808,
																													2147483651 : 134217728,
																													2147483652 : 134348800,
																													2147483653 : 133120,
																													2147483654 : 133152,
																													2147483655 : 32,
																													2147483656 : 134217760,
																													2147483657 : 2080,
																													2147483658 : 131104,
																													2147483659 : 134350848,
																													2147483660 : 0,
																													2147483661 : 134348832,
																													2147483662 : 134219776,
																													2147483663 : 131072,
																													16 : 133152,
																													17 : 134350848,
																													18 : 32,
																													19 : 2048,
																													20 : 134219776,
																													21 : 134217760,
																													22 : 134348832,
																													23 : 131072,
																													24 : 0,
																													25 : 131104,
																													26 : 134348800,
																													27 : 134219808,
																													28 : 134350880,
																													29 : 133120,
																													30 : 2080,
																													31 : 134217728,
																													2147483664 : 131072,
																													2147483665 : 2048,
																													2147483666 : 134348832,
																													2147483667 : 133152,
																													2147483668 : 32,
																													2147483669 : 134348800,
																													2147483670 : 134217728,
																													2147483671 : 134219808,
																													2147483672 : 134350880,
																													2147483673 : 134217760,
																													2147483674 : 134219776,
																													2147483675 : 0,
																													2147483676 : 133120,
																													2147483677 : 2080,
																													2147483678 : 131104,
																													2147483679 : 134350848
																												}],
																												k = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
																												_ = o.DES = c.extend({
																													_doReset: function() {
																														for (var e = this._key.words,
																														t = [], r = 0; r < 56; r++) {
																															var i = l[r] - 1;
																															t[r] = e[i >>> 5] >>> 31 - i % 32 & 1
																														}
																														for (var c = this._subKeys = [], o = 0; o < 16; o++) {
																															var n = c[o] = [],
																															k = h[o];
																															for (r = 0; r < 24; r++) n[r / 6 | 0] |= t[(s[r] - 1 + k) % 28] << 31 - r % 6,
																															n[4 + (r / 6 | 0)] |= t[28 + (s[r + 24] - 1 + k) % 28] << 31 - r % 6;
																															for (n[0] = n[0] << 1 | n[0] >>> 31, r = 1; r < 7; r++) n[r] = n[r] >>> 4 * (r - 1) + 3;
																															n[7] = n[7] << 5 | n[7] >>> 27
																														}
																														var _ = this._invSubKeys = [];
																														for (r = 0; r < 16; r++) _[r] = c[15 - r]
																													},
																													encryptBlock: function(e, t) {
																														this._doCryptBlock(e, t, this._subKeys)
																													},
																													decryptBlock: function(e, t) {
																														this._doCryptBlock(e, t, this._invSubKeys)
																													},
																													_doCryptBlock: function(e, t, r) {
																														this._lBlock = e[t],
																														this._rBlock = e[t + 1],
																														a.call(this, 4, 252645135),
																														a.call(this, 16, 65535),
																														d.call(this, 2, 858993459),
																														d.call(this, 8, 16711935),
																														a.call(this, 1, 1431655765);
																														for (var i = 0; i < 16; i++) {
																															for (var c = r[i], o = this._lBlock, l = this._rBlock, s = 0, h = 0; h < 8; h++) s |= n[h][((l ^ c[h]) & k[h]) >>> 0];
																															this._lBlock = l,
																															this._rBlock = o ^ s
																														}
																														var _ = this._lBlock;
																														this._lBlock = this._rBlock,
																														this._rBlock = _,
																														a.call(this, 1, 1431655765),
																														d.call(this, 8, 16711935),
																														d.call(this, 2, 858993459),
																														a.call(this, 16, 65535),
																														a.call(this, 4, 252645135),
																														e[t] = this._lBlock,
																														e[t + 1] = this._rBlock
																													},
																													keySize: 2,
																													ivSize: 2,
																													blockSize: 2
																												});
																												function a(e, t) {
																													var r = (this._lBlock >>> e ^ this._rBlock) & t;
																													this._rBlock ^= r,
																													this._lBlock ^= r << e
																												}
																												function d(e, t) {
																													var r = (this._rBlock >>> e ^ this._lBlock) & t;
																													this._lBlock ^= r,
																													this._rBlock ^= r << e
																												}
																												t.DES = c._createHelper(_);
																												var p = o.TripleDES = c.extend({
																													_doReset: function() {
																														var e = this._key.words;
																														this._des1 = _.createEncryptor(i.create(e.slice(0, 2))),
																														this._des2 = _.createEncryptor(i.create(e.slice(2, 4))),
																														this._des3 = _.createEncryptor(i.create(e.slice(4, 6)))
																													},
																													encryptBlock: function(e, t) {
																														this._des1.encryptBlock(e, t),
																														this._des2.decryptBlock(e, t),
																														this._des3.encryptBlock(e, t)
																													},
																													decryptBlock: function(e, t) {
																														this._des3.decryptBlock(e, t),
																														this._des2.encryptBlock(e, t),
																														this._des1.decryptBlock(e, t)
																													},
																													keySize: 6,
																													ivSize: 2,
																													blockSize: 2
																												});
																												t.TripleDES = c._createHelper(p)
																											} (),
																											e.TripleDES
																										},
																										"object" == ("undefined" == typeof exports ? "undefined": t(exports)) ? module.exports = exports = e(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core")) : "function" == typeof define && define.amd ? define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/crypto-js/x64-core.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										var e, t = require("../../../@babel/runtime/helpers/typeof");
																										e = function(e) {
																											return r = (t = e).lib,
																											i = r.Base,
																											n = r.WordArray,
																											(o = t.x64 = {}).Word = i.extend({
																												init: function(e, t) {
																													this.high = e,
																													this.low = t
																												}
																											}),
																											o.WordArray = i.extend({
																												init: function(e, t) {
																													e = this.words = e || [],
																													this.sigBytes = null != t ? t: 8 * e.length
																												},
																												toX32: function() {
																													for (var e = this.words,
																													t = e.length,
																													r = [], i = 0; i < t; i++) {
																														var o = e[i];
																														r.push(o.high),
																														r.push(o.low)
																													}
																													return n.create(r, this.sigBytes)
																												},
																												clone: function() {
																													for (var e = i.clone.call(this), t = e.words = this.words.slice(0), r = t.length, n = 0; n < r; n++) t[n] = t[n].clone();
																													return e
																												}
																											}),
																											e;
																											var t, r, i, n, o
																										}, "object" == ("undefined" == typeof exports ? "undefined": t(exports)) ? module.exports = exports = e(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], e) : e((void 0).CryptoJS);
																									});
																									define("package2024CNY/utils/index.js",
																									function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																										"use strict";
																										Object.defineProperty(exports, "__esModule", {
																											value: !0
																										}),
																										exports.verifyPhone = exports.rpx2px = exports.ossUrl = exports.oss = exports.maskPhoneNumber = exports.generateDateArray = exports.formatListItemDate = exports.debounce = exports.FormatSeconds2Time = exports.FormatDate = exports.EncryptDes = exports.CalculateTimeRemaining = exports.CalculateTimeDifferenceInSeconds = exports.Base64Encode = void 0;
																										var t = require("./crypto-js/index"),
																										e = "https://wx-pubcos.yili.com/wx-camp-kj-amx-21d-prod/2024cny/";
																										exports.FormatDate = function(t) {
																											if (! (t instanceof Date)) throw new Error("Invalid Date object");
																											t.getFullYear();
																											var e = String(t.getMonth() + 1).padStart(2, "0"),
																											r = String(t.getDate()).padStart(2, "0"),
																											n = String(t.getHours()).padStart(2, "0"),
																											a = String(t.getMinutes()).padStart(2, "0"),
																											o = String(t.getSeconds()).padStart(2, "0");
																											return "".concat(e, "-").concat(r, " ").concat(n, ":").concat(a, ":").concat(o)
																										},
																										exports.oss = function(t) {
																											return "".concat(e).concat(t)
																										},
																										exports.ossUrl = e;
																										var r = function(t, e) {
																											var r = t.getFullYear(),
																											n = t.getMonth() + 1,
																											a = t.getDate(),
																											o = {
																												date: "".concat(r, "-").concat(String(n).padStart(2, "0"), "-").concat(String(a).padStart(2, "0")),
																												week: t.getDay(),
																												month: n,
																												year: r,
																												day: a
																											};
																											return e && (o.filled = !0),
																											o
																										},
																										n = function(e) {
																											return t.enc.Base64.stringify(e)
																										};
																										exports.debounce = function(t) {
																											var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
																											n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
																											return function() {
																												var a = this,
																												o = arguments;
																												if (e && clearTimeout(e), n) {
																													var i = !e;
																													e = setTimeout((function() {
																														e = null
																													}), r),
																													i && t.apply(a, o)
																												} else e = setTimeout((function() {
																													t.apply(a, o)
																												}), r)
																											}
																										},
																										exports.Base64Encode = n,
																										exports.EncryptDes = function(e, r) {
																											var a = t.enc.Utf8.parse(r),
																											o = t.DES.encrypt(e, a, {
																												mode: t.mode.ECB,
																												padding: t.pad.Pkcs7
																											});
																											return n(o.ciphertext)
																										},
																										exports.CalculateTimeRemaining = function(t) {
																											var e = new Date,
																											r = t.find((function(t) {
																												var r = new Date(t.startTime),
																												n = new Date(t.endTime);
																												return e >= r && e <= n
																											}));
																											if (!r) return 0;
																											var n = new Date(r.endTime) - e,
																											a = Math.floor(n / 864e5),
																											o = Math.floor(n % 864e5 / 36e5),
																											i = Math.floor(n % 36e5 / 6e4),
																											c = Math.floor(n % 6e4 / 1e3);
																											return {
																												days: String(a).padStart(2, "0").split(""),
																												hours: String(o).padStart(2, "0").split(""),
																												minutes: String(i).padStart(2, "0").split(""),
																												seconds: String(c).padStart(2, "0").split("")
																											}
																										},
																										exports.FormatSeconds2Time = function(t) {
																											var e = Math.floor(t / 60),
																											r = t % 60,
																											n = String(e).padStart(2, "0"),
																											a = String(r).padStart(2, "0");
																											return "".concat(n, ":").concat(a)
																										},
																										exports.rpx2px = function(t) {
																											var e = wx.getSystemInfoSync().windowWidth / 750 * Number(t);
																											return Math.floor(e)
																										},
																										exports.CalculateTimeDifferenceInSeconds = function(t, e) {
																											if (! (t instanceof Date && e instanceof Date)) throw new Error("Invalid Date object");
																											var r = Math.floor((e - t) / 1e3),
																											n = Math.floor(r / 60),
																											a = r % 60;
																											return "".concat(String(n).padStart(2, "0"), ":").concat(String(a).padStart(2, "0"))
																										},
																										exports.formatListItemDate = function(t) {
																											var e = new Date(t),
																											r = (e.getMonth() + 1).toString().padStart(2, "0"),
																											n = e.getDate().toString().padStart(2, "0"),
																											a = e.getHours().toString().padStart(2, "0"),
																											o = e.getMinutes().toString().padStart(2, "0");
																											return "".concat(r, "閺?).concat(n,"閺 ? ?").concat(a,": ").concat(o)},exports.maskPhoneNumber=function(t){return/^\d{11}$/.test(t)?t.replace(/(\d{3})\d{4}(\d{4})/,"
																											$1 * ***$2 "):(console.error("
																											Invalid phone number "),t)},exports.verifyPhone=function(t){return/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(t)},exports.generateDateArray=function(t,e){var n=[],a=new Date(t);for(a.setDate(a.getDate()-(a.getDay()+6)%7);a<=e;){for(var o=[],i=0;i<7;i++){var c=a<t||a>e;o.push(r(new Date(a),c)),a.setDate(a.getDate()+1)}n.push(o)}return n}; 
 			}); 
		__wxRoute = 'package2024CNY/components/area/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/area/index.js';	define("
																											package2024CNY / components / area / index.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																											use strict ";var e=require(".. / .. / .. / @babel / runtime / helpers / slicedToArray "),t=require(".. / common / component "),n=require(".. / picker / shared "),i=require(".. / common / utils "),s="
																											000000 ";(0,t.VantComponent)({classes:["
																											active - class ","
																											toolbar - class ","
																											column - class "],props:Object.assign(Object.assign({},n.pickerProps),{showToolbar:{type:Boolean,value:!0},value:{type:String,observer:function(e){this.code=e,this.setValues()}},areaList:{type:Object,value:{},observer:"
																											setValues "},columnsNum:{type:null,value:3},columnsPlaceholder:{type:Array,observer:function(e){this.setData({typeToColumnsPlaceholder:{province:e[0]||"",city:e[1]||"",county:e[2]||""}})}}}),data:{columns:[{values:[]},{values:[]},{values:[]}],typeToColumnsPlaceholder:{}},mounted:function(){var e=this;(0,i.requestAnimationFrame)((function(){e.setValues()}))},methods:{getPicker:function(){return null==this.picker&&(this.picker=this.selectComponent(".van - area__picker ")),this.picker},onCancel:function(e){this.emit("
																											cancel ",e.detail)},onConfirm:function(e){var t=e.detail.index,n=e.detail.value;n=this.parseValues(n),this.emit("
																											confirm ",{value:n,index:t})},emit:function(e,t){t.values=t.value,delete t.value,this.$emit(e,t)},parseValues:function(e){var t=this.data.columnsPlaceholder;return e.map((function(e,n){return!e||e.code&&e.name!==t[n]?e:Object.assign(Object.assign({},e),{code:"",name:""})}))},onChange:function(e){var t,n=this,i=e.detail,s=i.index,c=i.picker,r=i.value;this.code=r[s].code,null===(t=this.setValues())||void 0===t||t.then((function(){n.$emit("
																											change ",{picker:c,values:n.parseValues(c.getValues()),index:s})}))},getConfig:function(e){var t=this.data.areaList;return t&&t["".concat(e,"
																											_list ")]||{}},getList:function(e,t){if("
																											province "!==e&&!t)return[];var n=this.data.typeToColumnsPlaceholder,i=this.getConfig(e),c=Object.keys(i).map((function(e){return{code:e,name:i[e]}}));if(null!=t&&("
																											9 "===t[0]&&"
																											city "===e&&(t="
																											9 "),c=c.filter((function(e){return 0===e.code.indexOf(t)}))),n[e]&&c.length){var r="
																											province "===e?"":"
																											city "===e?s.slice(2,4):s.slice(4,6);c.unshift({code:"".concat(t).concat(r),name:n[e]})}return c},getIndex:function(e,t){var n="
																											province "===e?2:"
																											city "===e?4:6,i=this.getList(e,t.slice(0,n-2));"
																											9 "===t[0]&&"
																											province "===e&&(n=1),t=t.slice(0,n);for(var s=0;s<i.length;s++)if(i[s].code.slice(0,n)===t)return s;return 0},setValues:function(){var t=this.getPicker();if(t){var n=this.code||this.getDefaultCode(),i=this.getList("
																											province "),s=this.getList("
																											city ",n.slice(0,2)),c=[],r=[],o=this.data.columnsNum;return o>=1&&(c.push(t.setColumnValues(0,i,!1)),r.push(this.getIndex("
																											province ",n))),o>=2&&(c.push(t.setColumnValues(1,s,!1)),r.push(this.getIndex("
																											city ",n)),s.length&&"
																											00 "===n.slice(2,4)&&(n=e(s,1)[0].code)),3===o&&(c.push(t.setColumnValues(2,this.getList("
																											county ",n.slice(0,4)),!1)),r.push(this.getIndex("
																											county ",n))),Promise.all(c).catch((function(){})).then((function(){return t.setIndexes(r)})).catch((function(){}))}},getDefaultCode:function(){if(this.data.columnsPlaceholder.length)return s;var e=Object.keys(this.getConfig("
																											county "));if(e[0])return e[0];var t=Object.keys(this.getConfig("
																											city "));return t[0]?t[0]:""},getValues:function(){var e=this.getPicker();return e?this.parseValues(e.getValues().filter((function(e){return!!e}))):[]},getDetail:function(){var e=this.getValues(),t={code:"",country:"",province:"",city:"",county:""};if(!e.length)return t;var n=e.map((function(e){return e.name}));return t.code=e[e.length-1].code,"
																											9 "===t.code[0]?(t.country=n[1]||"",t.province=n[2]||""):(t.province=n[0]||"",t.city=n[1]||"",t.county=n[2]||""),t},reset:function(e){return this.code=e||"",this.setValues()}}}); 
 			}); 	require("
																											package2024CNY / components / area / index.js ");
 		__wxRoute = 'package2024CNY/components/calendar/calendar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/calendar/calendar.js';	define("
																											package2024CNY / components / calendar / calendar.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																											use strict ";var e=require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),t=require(".. / .. / service "),n=require(".. / .. / utils / index ");Component({properties:{},data:{weekly:["娑撯偓","娴 ? ?, "娑?,"閸 ? ?, "缂囧骸鎳楅弰鐔告埂娴?,"閸 ? ?, "閺?],days:[[],[],[],[],[],[]],monthDays:[],date:{year:(new Date).getFullYear(),month:(new Date).getMonth()+1,day:(new Date).getDate()},signDays:[],signedIcon:(0,n.oss)("
																											signed.png "),remedyIcon:(0,n.oss)("
																											signed_remedy.png ")},attached:function(){this.getSignCalendar()},methods:{getSignCalendar:function(){return function(e,t,n){return new Promise((function(a,r){var s=function(e){try{o(n.next(e))}catch(e){r(e)}},i=function(e){try{o(n.throw(e))}catch(e){r(e)}},o=function(e){return e.done?a(e.value):Promise.resolve(e.value).then(s,i)};o((n=n.apply(e,t)).next())}))}(this,null,e().mark((function a(){var r,s,i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.GetSignCalendar)();case 2:r=e.sent,s=r.data,this.setData({days:(0,n.generateDateArray)(new Date(s[0].date),new Date(s[s.length-1].date))}),i=s.filter((function(e){return+e.signFlag})),this.setData({signDays:i});case 7:case"
																											end ":return e.stop()}}),a,this)})))},isDateBeforeToday:function(e){var t=new Date;t.setHours(0,0,0,0);var n=new Date(e);return n.setHours(0,0,0,0),n<t},onDayTap:function(e){console.log("
																											DayTap ");var t=e.currentTarget.dataset||{},n=t.day,a=t.signed;this.isDateBeforeToday(n.date)&&!a&&!n.filled&&this.triggerEvent("
																											remedy ",n)}}}); 
 			}); 	require("
																											package2024CNY / components / calendar / calendar.js ");
 		__wxRoute = 'package2024CNY/components/dialog/dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/dialog/dialog.js';	define("
																											package2024CNY / components / dialog / dialog.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																											use strict ";var t=require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),e=require(".. / .. / utils / index "),o=Object.defineProperty,n=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=function(t,e,n){return e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},l=function(e,o){for(var n in o||(o={}))a.call(o,n)&&c(e,n,o[n]);if(i){var r,l=t(i(o));try{for(l.s();!(r=l.n()).done;){n=r.value;s.call(o,n)&&c(e,n,o[n])}}catch(t){l.e(t)}finally{l.f()}}return e},u=function(t,e){return n(t,r(e))},p={cover:"",coinGif:(0,e.oss)("
																											dialog / gif_coin.gif "),actionBtn:"",closeBtn:(0,e.oss)("
																											dialog / btn_close.png ")};Component({properties:{resultData:{type:JSON,default:function(){return{}}}},data:u(l({},p),{isGetLongCoin:!1,coinGifShow:!0}),attached:function(){var t=this,o=this.data.resultData,n=o.type,r=o.resultType,i=o.level,a=o.longCoin,s={cover:(0,e.oss)(a?"".concat(r," / coin.png "):"".concat(r," / level_ ").concat(i,".png ")),actionBtn:(0,e.oss)("
																											dialog / btn_submit_ ".concat(a?1:n,".png "))};a?setTimeout((function(){t.setData(u(l({},s),{coinGifShow:!1}))}),1400):this.setData(s)},methods:{onAction:function(){var t=this.data.resultData,o=t.type,n=t.id,r=t.level,i=t.resultType;if(!t.longCoin||this.data.isGetLongCoin)switch(console.log("閺夈儰绨￠弶銉ょ啊"),o){case 2:var a={draw:{7:" / pages / product / product ? id = 5284 ",8:" / pages / product / product ? id = 5857 "},sign:{7:" / pages / product / product ? id = 5857 ",8:" / pages / product / product ? id = 5833 "}},s=a[i]&&a[i][r];wx.navigateTo({url:s});break;case 3:case 4:this.toAddress(n);break;default:this.triggerEvent("
																											close ")}else this.setData({cover:(0,e.oss)("".concat(i," / level_ ").concat(r,".png ")),actionBtn:(0,e.oss)("
																											dialog / btn_submit_ ".concat(o,".png ")),isGetLongCoin:!0})},onClose:function(){this.triggerEvent("
																											close ")},toAddress:function(t){this.triggerEvent("
																											close "),wx.navigateTo({url:" / package2024CNY / pages / address / address ? id = "+t})}}}); 
 			}); 	require("
																											package2024CNY / components / dialog / dialog.js ");
 		__wxRoute = 'package2024CNY/components/game-dialog/dialog';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/game-dialog/dialog.js';	define("
																											package2024CNY / components / game - dialog / dialog.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																											use strict ";var e=require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),t=require(".. / .. / utils / index "),r=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=function(e,t,a){return t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a},l={cover:"",coinGif:(0,t.oss)("
																											dialog / gif_coin.gif "),actionBtn:"",closeBtn:(0,t.oss)("
																											dialog / btn_close.png ")};Component({properties:{resultData:{type:JSON,default:function(){return{}}}},data:function(e,t){return a(e,n(t))}(function(t,r){for(var a in r||(r={}))i.call(r,a)&&c(t,a,r[a]);if(o){var n,l=e(o(r));try{for(l.s();!(n=l.n()).done;){a=n.value;s.call(r,a)&&c(t,a,r[a])}}catch(e){l.e(e)}finally{l.f()}}return t}({},l),{isGetLongCoin:!1,coinGifShow:!0}),attached:function(){var e=this.data.resultData,r=(e.type,e.level),a={cover:(0,t.oss)("
																											game / items / ".concat(r,".png "))};this.setData(a)},methods:{onAction:function(){var e=this.data.resultData,t=e.type,r=e.id;switch(t){case 2:wx.navigateTo({url:" / pages / special / special ? templateId = 1274 & chan_id = 249 "});break;case 3:case 4:this.toAddress(r);break;default:this.triggerEvent("
																											close ")}},onClose:function(){this.triggerEvent("
																											close ")},toAddress:function(e){this.triggerEvent("
																											close "),wx.navigateTo({url:" / package2024CNY / pages / address / address ? id = "+e})}}}); 
 			}); 	require("
																											package2024CNY / components / game - dialog / dialog.js ");
 		__wxRoute = 'package2024CNY/components/loading/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/loading/index.js';	define("
																											package2024CNY / components / loading / index.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																											use strict ";(0,require(".. / common / component ").VantComponent)({props:{color:String,vertical:Boolean,type:{type:String,value:"
																											circular "},size:String,textSize:String},data:{array12:Array.from({length:12})}}); 
 			}); 	require("
																											package2024CNY / components / loading / index.js ");
 		__wxRoute = 'package2024CNY/components/picker-column/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/picker-column/index.js';	define("
																											package2024CNY / components / picker - column / index.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																											use strict ";var t=require(".. / common / component "),e=require(".. / common / utils "),n=require(".. / common / validator ");(0,t.VantComponent)({classes:["
																											active - class "],props:{valueKey:String,className:String,itemHeight:Number,visibleItemCount:Number,initialOptions:{type:Array,value:[]},defaultIndex:{type:Number,value:0,observer:function(t){this.setIndex(t)}}},data:{startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0},created:function(){var t=this,e=this.data,n=e.defaultIndex,i=e.initialOptions;this.set({currentIndex:n,options:i}).then((function(){t.setIndex(n)}))},methods:{getCount:function(){return this.data.options.length},onTouchStart:function(t){this.setData({startY:t.touches[0].clientY,startOffset:this.data.offset,duration:0})},onTouchMove:function(t){var n=this.data,i=t.touches[0].clientY-n.startY;this.setData({offset:(0,e.range)(n.startOffset+i,-this.getCount()*n.itemHeight,n.itemHeight)})},onTouchEnd:function(){var t=this.data;if(t.offset!==t.startOffset){this.setData({duration:200});var n=(0,e.range)(Math.round(-t.offset/t.itemHeight),0,this.getCount()-1);this.setIndex(n,!0)}},onClickItem:function(t){var e=t.currentTarget.dataset.index;this.setIndex(e,!0)},adjustIndex:function(t){for(var n=this.data,i=this.getCount(),s=t=(0,e.range)(t,0,i);s<i;s++)if(!this.isDisabled(n.options[s]))return s;for(var a=t-1;a>=0;a--)if(!this.isDisabled(n.options[a]))return a},isDisabled:function(t){return(0,n.isObj)(t)&&t.disabled},getOptionText:function(t){var e=this.data;return(0,n.isObj)(t)&&e.valueKey in t?t[e.valueKey]:t},setIndex:function(t,e){var n=this,i=this.data,s=-(t=this.adjustIndex(t)||0)*i.itemHeight;return t!==i.currentIndex?this.set({offset:s,currentIndex:t}).then((function(){e&&n.$emit("
																											change ",t)})):this.set({offset:s})},setValue:function(t){for(var e=this.data.options,n=0;n<e.length;n++)if(this.getOptionText(e[n])===t)return this.setIndex(n);return Promise.resolve()},getValue:function(){var t=this.data;return t.options[t.currentIndex]}}}); 
 			}); 	require("
																											package2024CNY / components / picker - column / index.js ");
 		__wxRoute = 'package2024CNY/components/picker/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/picker/index.js';	define("
																											package2024CNY / components / picker / index.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																											use strict ";var e=require(".. / common / component "),t=require(". / shared ");(0,e.VantComponent)({classes:["
																											active - class ","
																											toolbar - class ","
																											column - class "],props:Object.assign(Object.assign({},t.pickerProps),{valueKey:{type:String,value:"
																											text "},toolbarPosition:{type:String,value:"
																											top "},defaultIndex:{type:Number,value:0},columns:{type:Array,value:[],observer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.simple=e.length&&!e[0].values,Array.isArray(this.children)&&this.children.length&&this.setColumns().catch((function(){}))}}}),beforeCreate:function(){var e=this;Object.defineProperty(this,"
																											children ",{get:function(){return e.selectAllComponents(".van - picker__column ")||[]}})},methods:{noop:function(){},setColumns:function(){var e=this,t=this.data,n=(this.simple?[{values:t.columns}]:t.columns).map((function(t,n){return e.setColumnValues(n,t.values)}));return Promise.all(n)},emit:function(e){var t=e.currentTarget.dataset.type;this.simple?this.$emit(t,{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit(t,{value:this.getValues(),index:this.getIndexes()})},onChange:function(e){this.simple?this.$emit("
																											change ",{picker:this,value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit("
																											change ",{picker:this,value:this.getValues(),index:e.currentTarget.dataset.index})},getColumn:function(e){return this.children[e]},getColumnValue:function(e){var t=this.getColumn(e);return t&&t.getValue()},setColumnValue:function(e,t){var n=this.getColumn(e);return null==n?Promise.reject(new Error("
																											setColumnValue: 鐎电懓绨查崚妞剧瑝鐎涙ê婀 ? )) : n.setValue(t)
																										},
																										getColumnIndex: function(e) {
																											return (this.getColumn(e) || {}).data.currentIndex
																										},
																										setColumnIndex: function(e, t) {
																											var n = this.getColumn(e);
																											return null == n ? Promise.reject(new Error("
							setColumnIndex: 鐎电懓绨查崚妞剧瑝鐎涙ê婀?)):n.setIndex(t)},getColumnValues:function(e){return(this.children[e]||{}).data.options},setColumnValues:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=this.children[e];return null==r?Promise.reject(new Error("
																											setColumnValues: 鐎电懓绨查崚妞剧瑝鐎涙ê婀 ? )) : JSON.stringify(r.data.options) === JSON.stringify(t) ? Promise.resolve() : r.set({
																												options: t
																											}).then((function() {
																												n && r.setIndex(0)
																											}))
																										},
																										getValues: function() {
																											return this.children.map((function(e) {
																												return e.getValue()
																											}))
																										},
																										setValues: function(e) {
																											var t = this,
																											n = e.map((function(e, n) {
																												return t.setColumnValue(n, e)
																											}));
																											return Promise.all(n)
																										},
																										getIndexes: function() {
																											return this.children.map((function(e) {
																												return e.data.currentIndex
																											}))
																										},
																										setIndexes: function(e) {
																											var t = this,
																											n = e.map((function(e, n) {
																												return t.setColumnIndex(n, e)
																											}));
																											return Promise.all(n)
																										}
																									}
																								});
																							});
																							require("
							package2024CNY / components / picker / index.js ");
																							__wxRoute = 'package2024CNY/components/popup/popup';
																							__wxRouteBegin = true;
																							__wxAppCurrentFile__ = 'package2024CNY/components/popup/popup.js';
																							define("
							package2024CNY / components / popup / popup.js ",
																							function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																								"
							use strict ";
																								var t = require(" / addressLib.js ").addressList,
																								e = t || [],
																								i = t[0].cityList || [],
																								a = t[0].cityList[0].areaList || [];
																								Component({
																									properties: {
																										show: {
																											type: Boolean,
																											value: !1
																										}
																									},
																									data: {
																										areaList: [{
																											province_list: {},
																											city_list: {},
																											county_list: {}
																										}]
																									},
																									pageLifetimes: {
																										show: function() {
																											this.reloadAreaList()
																										}
																									},
																									methods: {
																										reloadAreaList: function() {
																											var t = {};
																											e.forEach((function(e) {
																												t[e.areaId] = e.province
																											}));
																											var r = {};
																											i.forEach((function(t) {
																												r[t.areaId] = t.city
																											}));
																											var s = {};
																											a.forEach((function(t) {
																												s[t.areaId] = t.area
																											})),
																											this.setData({
																												areaList: {
																													province_list: t,
																													city_list: r,
																													county_list: s
																												}
																											}),
																											console.log("
							list ", this.data.areaList)
																										},
																										change: function(t) {
																											var r = e.findIndex((function(e) {
																												return e.areaId == t.detail.values[0].code
																											}));
																											if ( - 1 !== r && (i = e[r].cityList), t.detail.values[1]) {
																												var s = i.findIndex((function(e) {
																													return e.areaId == t.detail.values[1].code
																												})); - 1 !== s && (a = i[s].areaList)
																											} else a = i[0].areaList;
																											this.reloadAreaList()
																										},
																										confirmSite: function(t) {
																											this.triggerEvent("
							confirm ", t.detail.values),
																											this.triggerEvent("
							close ")
																										},
																										onClose: function() {
																											this.triggerEvent("
							close ")
																										}
																									}
																								});
																							});
																							require("
							package2024CNY / components / popup / popup.js ");
																							__wxRoute = 'package2024CNY/components/reservation-dialog/reservation-dialog';
																							__wxRouteBegin = true;
																							__wxAppCurrentFile__ = 'package2024CNY/components/reservation-dialog/reservation-dialog.js';
																							define("
							package2024CNY / components / reservation - dialog / reservation - dialog.js ",
																							function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																								"
							use strict ";
																								var e = require(".. / .. / .. / @babel / runtime / helpers / interopRequireDefault ").
																							default,
																								t = require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),
																								r = require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),
																								n = require(".. / .. / utils / index "),
																								o = require(".. / .. / service "),
																								a = e(require(".. / .. / utils / computed.js ")),
																								i = Object.defineProperty,
																								s = Object.defineProperties,
																								u = Object.getOwnPropertyDescriptors,
																								c = Object.getOwnPropertySymbols,
																								h = Object.prototype.hasOwnProperty,
																								l = Object.prototype.propertyIsEnumerable,
																								d = function(e, t, r) {
																									return t in e ? i(e, t, {
																										enumerable: !0,
																										configurable: !0,
																										writable: !0,
																										value: r
																									}) : e[t] = r
																								},
																								f = function(e, t) {
																									for (var n in t || (t = {})) h.call(t, n) && d(e, n, t[n]);
																									if (c) {
																										var o, a = r(c(t));
																										try {
																											for (a.s(); ! (o = a.n()).done;) {
																												n = o.value;
																												l.call(t, n) && d(e, n, t[n])
																											}
																										} catch(e) {
																											a.e(e)
																										} finally {
																											a.f()
																										}
																									}
																									return e
																								},
																								p = function(e, t) {
																									return s(e, u(t))
																								},
																								m = function(e, t, r) {
																									return new Promise((function(n, o) {
																										var a = function(e) {
																											try {
																												s(r.next(e))
																											} catch(e) {
																												o(e)
																											}
																										},
																										i = function(e) {
																											try {
																												s(r.
																												throw (e))
																											} catch(e) {
																												o(e)
																											}
																										},
																										s = function(e) {
																											return e.done ? n(e.value) : Promise.resolve(e.value).then(a, i)
																										};
																										s((r = r.apply(e, t)).next())
																									}))
																								},
																								v = {
																									leftArrowImage: (0, n.oss)("
							reservation / dialog / arrow_left.png "),
																									dialogWhdPic: (0, n.oss)("
							reservation / dialog / whd_1.png "),
																									dialogDlrbPic: (0, n.oss)("
							reservation / dialog / dlrb_1.png "),
																									rightArrowImage: (0, n.oss)("
							reservation / dialog / arrow_right.png "),
																									phoneButton: (0, n.oss)("
							reservation / dialog / btn_phone.png "),
																									waitCallButton: (0, n.oss)("
							reservation / dialog / btn_wait_call.png "),
																									phoneFormBackground: (0, n.oss)("
							reservation / dialog / phone_form.png "),
																									phoneFormButton: (0, n.oss)("
							reservation / dialog / btn_confirm.png ")
																								};
																								Component({
																									behaviors: [a.
																								default],
																									properties: {
																										list: {
																											type: Array,
																										default:
																											[]
																										}
																									},
																									data: p(f({},
																									v), {
																										phoneFormVisible: !1,
																										currentIndex: 0,
																										timer: null,
																										codeTimer: 0,
																										form: {
																											verifyCode: "",
																											newPhone: ""
																										}
																									}),
																									computed: {
																										currentReservation: function(e) {
																											return e.list[e.currentIndex] || {}
																										}
																									},
																									methods: {
																										resetPhoneForm: function(e) {
																											clearInterval(this.data.timer),
																											this.setData(f({
																												timer: null,
																												codeTimer: 0,
																												form: {
																													verifyCode: "",
																													newPhone: ""
																												}
																											},
																											e))
																										},
																										handleChangeFormVisible: function() {
																											this.resetPhoneForm({
																												phoneFormVisible: !this.data.phoneFormVisible
																											})
																										},
																										handleChangePhone: function() {
																											return m(this, null, t().mark((function e() {
																												var r, n;
																												return t().wrap((function(e) {
																													for (;;) switch (e.prev = e.next) {
																													case 0:
																														if (this.data.form.verifyCode) {
																															e.next = 2;
																															break
																														}
																														return e.abrupt("
							return ", wx.showToast({
																															title: "妤犲矁鐦夐惍浣疯礋缁?? , icon: "
																															none "
						}));
					case 2:
						return e.prev = 2, e.next = 5, (0, o.PostChangeReservationPhone)(p(f({},
						this.data.form), {
							id: this.data.list[this.data.currentIndex].id
						}));
					case 5:
						if (r = e.sent, 200 === r.code) {
							e.next = 9;
							break
						}
						return e.abrupt("
																															return ", wx.showToast({
							title: "妤犲矁鐦夐惍渚€鏁婄拠 ?
																														}));
																													case 9:
																														wx.showToast({
																															title:
																															"妫板嫮鏆€閻絻鐦芥穱顔芥暭閹存劕濮?}),(n=this.data.list||[{}])[this.data.currentIndex].phone=this.data.form.newPhone,this.resetPhoneForm({phoneFormVisible:!1,list:n}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),wx.showToast({title:"妤犲矁鐦夐惍渚€鏁婄拠 ?
																														});
																													case 17:
																													case "end":
																														return e.stop()
																													}
																												}), e, this, [[2, 14]])
																											})))
																										},
																										onInputPhoneChange: function(e) {
																											var t = e.detail,
																											r = this.data.form;
																											r.newPhone = t.value,
																											this.setData({
																												form: r
																											})
																										},
																										onInputCodeChange: function(e) {
																											var t = e.detail,
																											r = this.data.form;
																											r.verifyCode = t.value,
																											this.setData({
																												form: r
																											})
																										},
																										getCode: function() {
																											return m(this, null, t().mark((function e() {
																												var r = this;
																												return t().wrap((function(e) {
																													for (;;) switch (e.prev = e.next) {
																													case 0:
																														if ((0, n.verifyPhone)(this.data.form.newPhone)) {
																															e.next = 3;
																															break
																														}
																														return wx.showToast({
																															title: "閹靛婧€閸欒渹璐熺粚鐑樺灗閺嶇厧绱℃稉宥嗩劀绾?,icon:"
																															none "}),e.abrupt("
																															return ");case 3:if(this.data.codeTimer){e.next=14;break}return e.prev=4,e.next=7,(0,o.SendPhoneChangeCode)({newPhone:this.data.form.newPhone,id:this.data.list[this.data.currentIndex].id});case 7:this.setData({codeTimer:60}),this.data.timer=setInterval((function(){if(!r.data.codeTimer)return clearInterval(r.data.timer),void r.setData({codeTimer:0});r.setData({codeTimer:r.data.codeTimer-1})}),1e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"
																															end ":return e.stop()}}),e,this,[[4,11]])})))},onClose:function(){this.triggerEvent("
																															close ")},prevReservation:function(){var e=this.data.currentIndex-1;0>e||this.setData({currentIndex:e})},nextReservation:function(){var e=this.data.currentIndex+1;e!==this.data.list.length&&this.setData({currentIndex:e})}}}); 
 			}); 	require("
																															package2024CNY / components / reservation - dialog / reservation - dialog.js ");
 		__wxRoute = 'package2024CNY/components/snake-game/snake-game';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/components/snake-game/snake-game.js';	define("
																															package2024CNY / components / snake - game / snake - game.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ "
																															use strict ";require(".. / .. / .. / @babel / runtime / helpers / Arrayincludes ");var e=require(".. / .. / .. / @babel / runtime / helpers / slicedToArray "),a=require(".. / .. / .. / @babel / runtime / helpers / toConsumableArray "),t=require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),n=require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),r=require(".. / .. / utils / index "),i=require(".. / .. / service "),s=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=function(e,a,t){return a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t},d=function(e,a,t){return new Promise((function(n,r){var i=function(e){try{o(t.next(e))}catch(e){r(e)}},s=function(e){try{o(t.throw(e))}catch(e){r(e)}},o=function(e){return e.done?n(e.value):Promise.resolve(e.value).then(i,s)};o((t=t.apply(e,a)).next())}))},h={gameBoxBg:(0,r.oss)("
																															game / game_box.png "),gameBg:(0,r.oss)("
																															game / game_bg2.png "),gameInfoIcon0:(0,r.oss)("
																															game / icon_rank.png "),gameInfoIcon1:(0,r.oss)("
																															game / icon_amx.png "),gameInfoIcon2:(0,r.oss)("
																															game / icon_time.png "),gamePauseBtn:(0,r.oss)("
																															game / btn_pause.png "),leftActionBtn:(0,r.oss)("
																															game / btn_left.png "),rightActionBtn:(0,r.oss)("
																															game / btn_right.png "),myRankImage:(0,r.oss)("
																															game / my_rank.png "),playBtn:(0,r.oss)("
																															game / btn_play.png "),playAgainBtn:(0,r.oss)("
																															game / btn_again.png "),gameGuidePic:(0,r.oss)("
																															game / guide_bg.png "),gameResultDialog:(0,r.oss)("
																															game / game_result_bg1.png "),dialogBackBtn:(0,r.oss)("
																															game / btn_dialog_back.png "),dialogRankBtn:(0,r.oss)("
																															game / btn_dialog_rank.png "),dialogMyRankBtn:(0,r.oss)("
																															game / button_dialog_rank.png "),playNumberDialog:(0,r.oss)("
																															game / play_number_dialog.png "),playNumberAddBtn:(0,r.oss)("
																															game / btn_add.png "),playNumberThinkBtn:(0,r.oss)("
																															game / btn_think.png "),rankListBtn:(0,r.oss)("
																															game / btn_phb.png ")},p={1:{max:5,speed:550},2:{max:20,speed:450},3:{max:55,speed:400},4:{max:120,speed:350},5:{max:200,speed:300}},f=null;Component({properties:{},data:function(e,a){return o(e,l(a))}(function(e,a){for(var t in a||(a={}))u.call(a,t)&&m(e,t,a[t]);if(c){var r,i=n(c(a));try{for(i.s();!(r=i.n()).done;){t=r.value;g.call(a,t)&&m(e,t,a[t])}}catch(e){i.e(e)}finally{i.f()}}return e}({},h),{levelSpeedConfig:p,mapReady:!1,map:[],row:20,col:21,score:0,snake:[],dir:"
																															right ",level:1,isStart:!1,isStop:!0,isOver:!1,movetimer:null,header:[],gameIntervalTimer:null,gameTimer:0,resultDialogVisible:!1,playNumberVisible:!1,gameId:"",playNumber:0,gameHighScore:0,uploadScoreStatus:!1,blockSize:(0,r.rpx2px)(28)}),attached:function(){f=this,this.createInit({initMap:!0})},observers:{score:function(e){return d(this,null,t().mark((function a(){return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.t0=e,!a.t0){a.next=7;break}return this.setData({uploadScoreStatus:!0}),e===p[5].max&&this.gameOver(),a.next=6,(0,i.UploadSnakeGameScore)({gameId:this.data.gameId,score:e,cipher:(0,r.EncryptDes)(JSON.stringify({gameId:"".concat(this.data.gameId),score:"".concat(e)}),"
																															anmuxicny ")});case 6:this.setData({uploadScoreStatus:!1});case 7:case"
																															end ":return a.stop()}}),a,this)})))}},methods:{getGameInfo:function(){return d(this,null,t().mark((function e(){var a,n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.GetGameInfo)();case 2:a=e.sent,n=a.data,this.setData({playNumber:n.gameChance,gameHighScore:n.highScore});case 5:case"
																															end ":return e.stop()}}),e,this)})))},viewMyRecord:function(){wx.navigateTo({url:" / package2024CNY / pages / game - record / game - record "})},viewMyRanking:function(){wx.navigateTo({url:" / package2024CNY / pages / ranking / ranking "})},linkToGameNumberPage:function(){wx.navigateTo({url:" / package2024CNY / pages / webview / webview "})},handleChangeResultVisible:function(){this.setData({resultDialogVisible:!this.data.resultDialogVisible})},handleChangePlayNumberVisible:function(){this.setData({playNumberVisible:!this.data.playNumberVisible})},gameStartFn:function(){return d(this,null,t().mark((function e(){var a,n=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.StartSnakeGame)().catch((function(e){615===e.code&&(n.setData({resultDialogVisible:!1}),n.handleChangePlayNumberVisible())}));case 2:if(a=e.sent,console.log(a),clearInterval(this.data.gameIntervalTimer),this.setData({isOver:!1,isStart:!1,gameTimer:0,score:0,level:1,playNumber:this.data.playNumber-1,gameId:a.data}),this.data.gameIntervalTimer=setInterval((function(){n.setData({gameTimer:n.data.gameTimer+1})}),1e3),this.data.isStart){e.next=6;break}return this.setData({isStart:!0,isStop:!1}),this.createInit(),this.snakeMove(),e.abrupt("
																															return ");case 6:this.data.isStop?(this.setData({isStop:!1}),this.snakeMove()):(this.setData({isStop:!0}),clearInterval(this.data.movetimer));case 7:case"
																															end ":return e.stop()}}),e,this)})))},gameStart:(0,r.debounce)((function(){return f.gameStartFn()}),400,!0),moveSnakeLeft:function(){if(!this.data.isOver){this.setData({dir:{right:"
																															up ",up:"
																															left ",left:"
																															down ",down:"
																															right "}[this.data.dir]})}},moveSnakeRight:function(){if(!this.data.isOver){this.setData({dir:{right:"
																															down ",down:"
																															left ",up:"
																															right ",left:"
																															up "}[this.data.dir]})}},createInit:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],n=0;n<this.data.row;n++){t[n]=[];for(var r=0;r<this.data.col;r++)t[n][r]=0}if(e.initMap)return this.setData({map:t});for(var i=[],s=9;s>0;s--)i=[].concat(a(i),[[8,s]]);this.setData({map:t,snake:i}),this.snakeStyle(),this.foodStyle()},snakeStyle:function(){var a=this,t=this.data.map,n=this.data.snake;t[n[0][0]][n[0][1]]=3;var r=e(n[n.length-1],2),i=r[0],s=r[1],o=e(n[n.length-2],2),l=o[0],c=o[1];i===l&&s<c&&(t[i][s]="
																															5 - 1 "),i===l&&s>c&&(t[i][s]="
																															5 - 2 "),i>l&&s===c&&(t[i][s]="
																															5 - 3 "),i<l&&s===c&&(t[i][s]="
																															5 - 4 ");for(var u=1;u<n.length-1;u++){var g=e(n[u],2),m=g[0],d=g[1];t[m][d]="
																															4 - 1 "}for(var h=1;h<n.length-1;h++){var p=e(n[h],2),f=p[0],v=p[1],b=e(n[h-1],2),y=b[0],k=b[1],S=e(n[h+1],2),I=S[0],x=S[1];(y<I&&k>x||y>I&&k<x)&&(f<y&&v===k||f===y&&v<k)&&(t[f][v]="
																															6 - 1 "),(y>I&&k>x||y<I&&k<x)&&(f>y&&v===k||f===y&&v<k)&&(t[f][v]="
																															6 - 2 "),(y>I&&k>x||y<I&&k<x)&&(f<y&&v===k||f===y&&v>k)&&(t[f][v]="
																															6 - 3 "),(y<I&&k>x||y>I&&k<x)&&(f>y&&v===k||f===y&&v>k)&&(t[f][v]="
																															6 - 4 ")}console.time("
																															calc - map ");var w=["
																															6 - 1 ","
																															6 - 2 ","
																															6 - 3 ","
																															6 - 4 ","
																															5 - 3 ","
																															5 - 4 ",3];t.forEach((function(e,n){e.forEach((function(e,r){if(w.includes(e)){var i=t.map((function(e){return e[r]})),s=[],o=[];i.forEach((function(e,a){["
																															6 - 1 ","
																															6 - 3 ","
																															5 - 4 "].includes(e)&&s.push(a),["
																															6 - 2 ","
																															6 - 4 ","
																															5 - 3 "].includes(e)&&o.push(a)})),i.forEach((function(l,c){if("
																															4 - 1 "===l&&(s.forEach((function(e,a){c>e&&c<o[a]&&(t[c][r]="
																															4 - 2 ")})),3===e&&["
																															up ","
																															down "].includes(a.data.dir))){var u=i.findIndex((function(e){return["
																															6 - 2 ","
																															6 - 4 ","
																															5 - 3 "].includes(e)})),g=i.findIndex((function(e){return["
																															6 - 1 ","
																															6 - 3 ","
																															5 - 4 "].includes(e)})),m=["
																															6 - 3 ","
																															6 - 4 ","
																															5 - 2 ",3].includes(t[c][r+1])||["
																															6 - 1 ","
																															6 - 2 ","
																															5 - 1 ",3].includes(t[c][r-1]);g>=0&&c>g&&c<n&&!m&&(t[c][r]="
																															4 - 2 "),u>=0&&c<u&&c>n&&!m&&(t[c][r]="
																															4 - 2 ")}}))}}))})),console.timeEnd("
																															calc - map "),this.setData({map:t,snake:n})},onGamePause:function(){console.log("閺嗗倸浠犻敍 ? ), this.setData({
																																isStop: !0
																															}), clearInterval(this.data.movetimer), console.log(this.data.map)
																														},
																														foodStyle: function() {
																															var e = this.data.map,
																															a = [];
																															e.forEach((function(t, n) {
																																t.forEach((function(r, i) {
																																	0 === r && n && n !== e.length - 1 && i && i !== t.length - 1 && a.push({
																																		x: n,
																																		y: i
																																	})
																																}))
																															})),
																															console.log(a);
																															var t = Math.floor(Math.random() * a.length),
																															n = a[t],
																															r = n.x,
																															i = n.y;
																															e[r][i] = 2,
																															this.setData({
																																map: e
																															})
																														},
																														playAgain: function() {
																															this.setData({
																																resultDialogVisible: !1
																															})
																														},
																														gameOver: function() {
																															var e = this;
																															this.setData({
																																isOver: !0,
																																resultDialogVisible: !0,
																																map: [],
																																snake: [],
																																dir: "right"
																															}),
																															this.createInit({
																																initMap: !0
																															}),
																															clearInterval(this.data.gameIntervalTimer),
																															clearInterval(this.data.movetimer);
																															var a = setInterval((function() {
																																return d(e, null, t().mark((function e() {
																																	return t().wrap((function(e) {
																																		for (;;) switch (e.prev = e.next) {
																																		case 0:
																																			if (this.data.uploadScoreStatus) {
																																				e.next = 12;
																																				break
																																			}
																																			return console.log("鐠囬攱鐪扮紒鎾存将"),
																																			e.prev = 2,
																																			e.next = 5,
																																			(0, i.SnakeGameEnd)({
																																				gameId: this.data.gameId
																																			}).
																																			finally((function() {
																																				console.log("clear end timer"),
																																				clearInterval(a)
																																			}));
																																		case 5:
																																			return e.next = 7,
																																			this.getGameInfo();
																																		case 7:
																																			e.next = 12;
																																			break;
																																		case 9:
																																			e.prev = 9,
																																			e.t0 = e.
																																			catch(2),
																																			clearInterval(a);
																																		case 12:
																																		case "end":
																																			return e.stop()
																																		}
																																	}), e, this, [[2, 9]])
																																})))
																															}), 410)
																														},
																														snakeMove: function() {
																															var a = this,
																															t = this.data.map,
																															n = this.data.snake;
																															this.data.isOver || this.data.isStop || (this.data.movetimer = setInterval((function() {
																																var r = null,
																																i = null;
																																switch (a.data.dir) {
																																case "right":
																																	r = n[0][0],
																																	i = n[0][1] + 1;
																																	break;
																																case "down":
																																	r = n[0][0] + 1,
																																	i = n[0][1];
																																	break;
																																case "left":
																																	r = n[0][0],
																																	i = n[0][1] - 1;
																																	break;
																																case "up":
																																	r = n[0][0] - 1,
																																	i = n[0][1]
																																}
																																if (r < 0 || r > a.data.row - 1 || i < 0 || i > a.data.col - 1 || 1 === t[r][i]) return console.log("閹剧偛鍩屾晶娆庣啊"),
																																void a.gameOver();
																																var s = n.map((function(e) {
																																	return e[0]
																																})),
																																o = n.map((function(e) {
																																	return e[1]
																																}));
																																if (s.includes(r) && o.includes(i) && ["4-1", "4-2", "5-1", "5-2", "5-3", "5-4", "6-1", "6-2", "6-3", "6-4"].includes(t[r][i])) return console.log("閹剧偛鍩岄懛顏勭箒娴?),void a.gameOver();if(n.unshift([r,i]),2!==t[r][i]){var l=n.pop(),c=e(l,2),u=c[0],g=c[1];t[u][g]=0}else{var m=a.data.score+1,d=m===p[a.data.level].max;a.setData({score:m,level:d?a.data.level+1:a.data.level}),a.foodStyle(),d&&(clearInterval(a.data.movetimer),a.snakeMove())}a.setData({snake:n,map:t,header:n[0]}),a.snakeStyle()}),p[this.data.level].speed))}}}); 
 			}); 	require("
																																package2024CNY / components / snake - game / snake - game.js ");
 		__wxRoute = 'package2024CNY/pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/pages/index/index.js';	define("
																																package2024CNY / pages / index / index.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																																use strict ";var e=require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),n=require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),t=require(".. / .. / utils / index "),r=require(".. / .. / service "),s=require(".. / .. / .. / utils / storage "),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,g=function(e,n,t){return n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},p=function(e,t){for(var r in t||(t={}))u.call(t,r)&&g(e,r,t[r]);if(c){var s,a=n(c(t));try{for(a.s();!(s=a.n()).done;){r=s.value;l.call(t,r)&&g(e,r,t[r])}}catch(e){a.e(e)}finally{a.f()}}return e},d=function(e,n){return o(e,i(n))},f=function(e,n,t){return new Promise((function(r,s){var a=function(e){try{i(t.next(e))}catch(e){s(e)}},o=function(e){try{i(t.throw(e))}catch(e){s(e)}},i=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(a,o)};i((t=t.apply(e,n)).next())}))},h={containerBackground:(0,t.oss)("
																																container_bg.png "),titleImage0:(0,t.oss)("
																																index_title_0.png "),calendarBackground:(0,t.oss)("
																																calendar_bg.png "),calendarTitle:(0,t.oss)("
																																calendar_title.png "),calendarPic:(0,t.oss)("
																																calendar_pic.png "),calendarBtn0:(0,t.oss)("
																																btn_sign.png "),calendarBtn1:(0,t.oss)("
																																btn_prize.png "),calendarTips:(0,t.oss)("
																																calendar_tips.png "),cloudImage0:(0,t.oss)("
																																cloud_0.png "),titleImage1:(0,t.oss)("
																																title_1.png "),signBackground:(0,t.oss)("
																																sign_bg.png "),signActionImage:(0,t.oss)("
																																invite_cover.png "),signBtn0:(0,t.oss)("
																																btn_share.png "),signBtn1:(0,t.oss)("
																																btn_invite_record.png "),signTips:(0,t.oss)("
																																sign_tips.png "),_signProcess:(0,t.oss)("
																																_process.png "),signProcess:(0,t.oss)("
																																process.png "),giftImage0:(0,t.oss)("
																																gift_0.png "),giftImage1:(0,t.oss)("
																																gift_1.png "),giftImage2:(0,t.oss)("
																																gift_2.png "),cloudImage1:(0,t.oss)("
																																cloud_1.png "),ruleBtn:(0,t.oss)("
																																btn_rule.png "),giftCheckIcon:(0,t.oss)("
																																sign_check.png "),signDialog:(0,t.oss)("
																																remedy_dialog.png "),signDialogBtn0:(0,t.oss)("
																																btn_agin.png "),signDialogBtn1:(0,t.oss)("
																																btn_remedy.png "),remedyDialog:(0,t.oss)("
																																no - remedy.png "),remedyDialogBtn0:(0,t.oss)("
																																btn_rmedy_close.png "),remedyDialogBtn1:(0,t.oss)("
																																btn_remedy_share.png ")};Page({data:d(p({},h),{resultVisible:!1,resultData:{type:1},inviter:"",loading:!1,signInfo:{signedDays:0,drawnChance:0},ossUrl:t.ossUrl,remedyDialogVisible:!1,noRemedyDialogVisible:!1,remedyDay:""}),onLoad:function(e){e.customerid&&(this.inviter=e.customerid),this.handleAuth()},handleAuth:function(){return f(this,null,e().mark((function n(){var t,r,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摠NIT_LOGIN_0閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?),
																																e.next = 4,
																																this.selectComponent("#auth").auth();
																															case 4:
																																if (t = e.sent, r = (0, s.getYmallInfo)(), a = r.accessToken, console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摠NIT_LOGIN_1閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?),console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摜etAccessToken閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?, a), console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摐uthResult閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?,JSON.stringify(t)),!t||!a){e.next=9;break}return e.abrupt("
																																return ",this.handleLogin(a));case 9:wx.showToast({icon:"
																																error ",title:"閺堫亣骞忛崣鏍у煂閻╃绨叉穱鈩冧紖閿 ? ?
																															}),
																															e.next = 15;
																															break;
																														case 12:
																															e.prev = 12,
																															e.t0 = e.
																															catch(0),
																															console.error(e.t0);
																														case 15:
																														case "end":
																															return e.stop()
																														}
																													}), n, this, [[0, 12]])
																												})))
																											},
																											onShareAppMessage: function() {
																												return {
																													title: "濮ｅ繑妫╃粵鎯у煂閿涘矂绮嶉柌鎴炲闁惧墽鐡戞担鐘茬敨閸ョ偛顔?,
					path: " / package2024CNY / pages / index / index ? scene = 1666 & customerid = " + wx.getStorageSync("
																													_CNY_CUSTOMER_ID "),
					imageUrl: (0, t.oss)("
																													share_cover.jpg ")
				}
			},
			getUserInfo: function() {
				return f(this, null, e().mark((function n() {
					var t, s;
					return e().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
						case 0:
							return e.prev = 0,
							e.next = 3,
							(0, r.GetUserInfo)();
						case 3:
							t = e.sent,
							s = t.data,
							wx.setStorageSync("
																													_CNY_CUSTOMER_ID ", s.customerId || ""),
							e.next = 11;
							break;
						case 8:
							e.prev = 8,
							e.t0 = e.
							catch(0),
							console.log(e.t0);
						case 11:
						case "
																													end ":
							return e.stop()
						}
					}), n, null, [[0, 8]])
				})))
			},
			handleLogin: function(n) {
				return f(this, null, e().mark((function t() {
					var s, a, o;
					return e().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
						case 0:
							return e.prev = 0,
							e.next = 3,
							(0, r.PostUserLogin)({
								inviter: this.inviter
							},
							n);
						case 3:
							if (s = e.sent, a = s.code, o = s.data, 200 === a) {
								e.next = 8;
								break
							}
							return e.abrupt("
																													return ");
						case 8:
							wx.setStorageSync("
																													_CNY_TOKEN ", o),
							this.setData({
								loading: !0
							}),
							this.getSignInfo(),
							this.getUserInfo(),
							(0, r.AccessLogAdd)(),
							console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摣OGIN_SUCCESSFUL閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ),
																													e.next = 14;
																													break;
																												case 11:
																													e.prev = 11,
																													e.t0 = e.
																													catch(0),
																													console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摟AYI_LOGIN_ERROR閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?? , JSON.stringify(e.t0));
						case 14:
						case "
																													end ":
							return e.stop()
						}
					}), t, this, [[0, 11]])
				})))
			},
			linkToInvite: function() {
				wx.navigateTo({
					url: " / package2024CNY / pages / inviteRecord / index "
				})
			},
			linkToPrizeRecord: function() {
				wx.navigateTo({
					url: " / package2024CNY / pages / prize / index "
				})
			},
			linkToRulePage: function() {
				wx.navigateTo({
					url: " / package2024CNY / pages / rule / rule "
				})
			},
			handleDialogClose: function() {
				this.getSignInfo(),
				this.setData({
					resultVisible: !1
				})
			},
			handleDraw: function(n) {
				return f(this, null, e().mark((function t() {
					var s, a, o, i, c;
					return e().wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
						case 0:
							if (! (s = n.currentTarget.dataset.info).lock) {
								e.next = 3;
								break
							}
							return e.abrupt("
																													return ", wx.showToast({
								icon: "
																													none ",
								title: "閺嗗倹妞傞弮鐘崇《閹垫挸绱戦敍灞惧瘮缂侇厾顒烽崚鏉垮晙閸ョ偞娼电憴锝夋敚閸 ?
																												}));
																											case 3:
																												if (s.opened) {
																													e.next = 19;
																													break
																												}
																												return e.prev = 4, e.next = 7, (0, r.PostActivityDraw)();
																											case 7:
																												if (a = e.sent, o = a.data, i = a.code, c = a.message, 200 === i) {
																													e.next = 13;
																													break
																												}
																												return e.abrupt("
								return ", wx.showToast({
																													title: c,
																													icon: "
								none "
																												}));
																											case 13:
																												this.setData({
																													resultData:
																													d(p({},
																													o), {
																														resultType: "
								draw "
																													}),
																													resultVisible: !0,
																													resultType: "
								draw "
																												}), e.next = 19;
																												break;
																											case 16:
																												e.prev = 16, e.t0 = e.
																												catch(4), wx.showToast({
																													title: e.t0.message,
																													icon: "
								none "
																												});
																											case 19:
																											case "
								end ":
																												return e.stop()
																											}
																										}),
																										t,
																										this,
																										[[4, 16]])
																									})))
																								},
																								getSignInfo: function() {
																									return f(this, null, e().mark((function n() {
																										var t, s;
																										return e().wrap((function(e) {
																											for (;;) switch (e.prev = e.next) {
																											case 0:
																												return e.prev = 0,
																												e.next = 3,
																												(0, r.GetSignInfo)();
																											case 3:
																												if (t = e.sent, s = t.data, 200 === t.code) {
																													e.next = 8;
																													break
																												}
																												return e.abrupt("
								return ");
																											case 8:
																												this.setData({
																													signInfo:
																													p({},
																													s)
																												}),
																												e.next = 14;
																												break;
																											case 11:
																												e.prev = 11,
																												e.t0 = e.
																												catch(0),
																												wx.showToast({
																													title: e.t0.message,
																													icon: "
								none "
																												});
																											case 14:
																											case "
								end ":
																												return e.stop()
																											}
																										}), n, this, [[0, 11]])
																									})))
																								},
																								handleShareSubscribe: function() {
																									return f(this, null, e().mark((function n() {
																										return e().wrap((function(e) {
																											for (;;) switch (e.prev = e.next) {
																											case 0:
																												return e.next = 2,
																												this.messageSubscribe();
																											case 2:
																											case "
								end ":
																												return e.stop()
																											}
																										}), n, this)
																									})))
																								},
																								messageSubscribe: function() {
																									var n = this;
																									return new Promise((function(t, s) {
																										wx.requestSubscribeMessage({
																											tmplIds: ["
								P5HA11nbZOzyJfyn0Yc32zFaIEMivDe1wMxtriZi92k ", "
								P5HA11nbZOzyJfyn0Yc32z9tUdrlMrv8TjmxbyK2GDc ", "
								KSpbKkzbYsgMdnQ - H2GvffpllWeKeBpH2WuwuCI6jAY "],
																											success: function() {
																												return f(n, null, e().mark((function n() {
																													return e().wrap((function(e) {
																														for (;;) switch (e.prev = e.next) {
																														case 0:
																															return e.next = 2,
																															(0, r.PostUserSubscribe)();
																														case 2:
																															t();
																														case 3:
																														case "
								end ":
																															return e.stop()
																														}
																													}), n)
																												})))
																											},
																											fail: function() {
																												console.log("鐠併垽妲勬径杈Е閿涘苯褰查懗鐣屾暏閹撮攱濡搁柅姘辩叀閸忚櫕甯€娴?? ), t()
							}
						})
					}))
				},
				closeRemedyDialog: function() {
					this.setData({
						remedyDialogVisible: !1,
						noRemedyDialogVisible: !1,
						remedyDay: ""
					})
				},
				onRemedyRequest: function() {
					return f(this, null, e().mark((function n() {
						var t, s, a;
						return e().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
							case 0:
								return e.prev = 0,
								e.next = 3,
								this.messageSubscribe();
							case 3:
								return e.next = 5,
								(0, r.PostCalendarRemedy)({
									date: this.data.remedyDay
								});
							case 5:
								if (t = e.sent, s = t.code, a = t.message, this.closeRemedyDialog(), 200 === s) {
									e.next = 10;
									break
								}
								return e.abrupt("
																												return ", wx.showToast({
									title: a,
									icon: "
																												none "
								}));
							case 10:
								wx.showToast({
									title:
									"鐞涖儳顒烽幋鎰閿 ? , icon: "
									none "
																											}),
																											this.getSignInfo(),
																											this.selectComponent(".calendar - comoponent ").getSignCalendar(),
																											e.next = 16;
																											break;
																										case 13:
																											e.prev = 13,
																											e.t0 = e.
																											catch(0),
																											wx.showToast({
																												title: e.t0.message,
																												icon: "
									none "
																											});
																										case 16:
																										case "
									end ":
																											return e.stop()
																										}
																									}), n, this, [[0, 13]])
																								})))
																							},
																							onRemedy: function(e) {
																								var n = this.data.signInfo.remedyChance;
																								this.setData(n ? {
																									remedyDialogVisible: !0,
																									remedyDay: e.detail.date
																								}: {
																									noRemedyDialogVisible: !0
																								})
																							},
																							handleSign: function() {
																								return f(this, null, e().mark((function n() {
																									var t, s, a, o, i, c, u, l;
																									return e().wrap((function(e) {
																										for (;;) switch (e.prev = e.next) {
																										case 0:
																											return e.prev = 0,
																											e.next = 3,
																											this.messageSubscribe();
																										case 3:
																											return e.next = 5,
																											(0, r.PostCalendarSign)();
																										case 5:
																											if (t = e.sent, s = t.data, a = t.code, o = t.message, 200 === a) {
																												e.next = 13;
																												break
																											}
																											return i = 422 === a && "閹劋绮栨径鈺佸嚒缂佸繒顒烽崚棰佺啊" === o,
																											wx.showToast({
																												title: i ? "閹劋绮栨径鈺佸嚒缂佸繐鐣幋鎰劮閸掓澘鏆掗敍灞炬閺冦儴顔囧妤佹降閸?? :o,
									icon: "
																												none "
								}),
								e.abrupt("
																												return ");
							case 13:
								this.setData({
									resultData:
									d(p({},
									s), {
										resultType: "
																												sign "
									}),
									resultVisible: !0
								}),
								wx.showToast({
									title: "缁涙儳鍩岄幋鎰",
									icon: "
																												none "
								}),
								this.selectComponent(".calendar - comoponent ").getSignCalendar(),
								e.next = 20;
								break;
							case 16:
								e.prev = 16,
								e.t0 = e.
								catch(0),
								c = e.t0.code,
								u = e.t0.message,
								l = 422 === c && "閹劋绮栨径鈺佸嚒缂佸繒顒烽崚棰佺啊" === u,
								wx.showToast({
									title: l ? "閹劋绮栨径鈺佸嚒缂佸繐鐣幋鎰劮閸掓澘鏆掗敍灞炬閺冦儴顔囧妤佹降閸 ? :u,
																												icon: "
									none "
																											});
																										case 20:
																										case "
									end ":
																											return e.stop()
																										}
																									}), n, this, [[0, 16]])
																								})))
																							}
																						});
																					}); require("
									package2024CNY / pages / index / index.js "); __wxRoute = 'package2024CNY/pages/inviteRecord/index'; __wxRouteBegin = true; __wxAppCurrentFile__ = 'package2024CNY/pages/inviteRecord/index.js'; define("
									package2024CNY / pages / inviteRecord / index.js ",
																					function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																						"
									use strict ";
																						var e = require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),
																						t = require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),
																						r = require(".. / .. / utils / index "),
																						n = require(".. / .. / service "),
																						a = Object.defineProperty,
																						i = Object.defineProperties,
																						o = Object.getOwnPropertyDescriptors,
																						c = Object.getOwnPropertySymbols,
																						s = Object.prototype.hasOwnProperty,
																						u = Object.prototype.propertyIsEnumerable,
																						l = function(e, t, r) {
																							return t in e ? a(e, t, {
																								enumerable: !0,
																								configurable: !0,
																								writable: !0,
																								value: r
																							}) : e[t] = r
																						},
																						p = {
																							pageBackground: (0, r.oss)("
									invite_bg.png "),
																							titleImage: (0, r.oss)("
									invite_title.png "),
																							recordBackground: (0, r.oss)("
									invite_record_bg.png ")
																						};
																						Page({
																							data: function(e, t) {
																								return i(e, o(t))
																							} (function(e, r) {
																								for (var n in r || (r = {})) s.call(r, n) && l(e, n, r[n]);
																								if (c) {
																									var a, i = t(c(r));
																									try {
																										for (i.s(); ! (a = i.n()).done;) {
																											n = a.value;
																											u.call(r, n) && l(e, n, r[n])
																										}
																									} catch(e) {
																										i.e(e)
																									} finally {
																										i.f()
																									}
																								}
																								return e
																							} ({},
																							p), {
																								listData: []
																							}),
																							onLoad: function() {
																								this.getList(),
																								(0, n.AccessLogAdd)()
																							},
																							onShareAppMessage: function() {
																								return {
																									title: "闁喐娼甸敍瀛扷AWEI閹靛婧€缁涘缍樼敮锕€娲栫€硅绱?,path:" / package2024CNY / pages / index / index ? scene = 1666 & customerid = "+wx.getStorageSync("
																									_CNY_CUSTOMER_ID "),imageUrl:(0,r.oss)("
																									share_cover.jpg ")}},getList:function(){return function(e,t,r){return new Promise((function(n,a){var i=function(e){try{c(r.next(e))}catch(e){a(e)}},o=function(e){try{c(r.throw(e))}catch(e){a(e)}},c=function(e){return e.done?n(e.value):Promise.resolve(e.value).then(i,o)};c((r=r.apply(e,t)).next())}))}(this,null,e().mark((function t(){var r,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,n.GetInviteList)({page:1,pageSize:999999999});case 3:r=e.sent,a=r.data,this.setData({listData:a.list||[]}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"
																									end ":return e.stop()}}),t,this,[[0,8]])})))}}); 
 			}); 	require("
																									package2024CNY / pages / inviteRecord / index.js ");
 		__wxRoute = 'package2024CNY/pages/prize/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/pages/prize/index.js';	define("
																									package2024CNY / pages / prize / index.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																									use strict ";var e=require(".. / .. / .. / @babel / runtime / helpers / interopRequireDefault ").default,t=require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),r=require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),n=require(".. / .. / utils / index "),o=require(".. / .. / service "),a=e(require(".. / .. / utils / computed ")),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,g=function(e,t,r){return t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},d=function(e,t,r){return new Promise((function(n,o){var a=function(e){try{s(r.next(e))}catch(e){o(e)}},i=function(e){try{s(r.throw(e))}catch(e){o(e)}},s=function(e){return e.done?n(e.value):Promise.resolve(e.value).then(a,i)};s((r=r.apply(e,t)).next())}))},f={titleImage:(0,n.oss)("
																									prize / prize_title.png "),coinImage:(0,n.oss)("
																									prize / coin.png "),coinBanner:(0,n.oss)("
																									prize / coin_banner.png "),coinExchangeButton:(0,n.oss)("
																									prize / coin_exchange.png "),pageBackground:(0,n.oss)("
																									prize / prize_bg_new.png "),recordBackground:(0,n.oss)("
																									prize_record_bg.png "),tagImage:(0,n.oss)("
																									tag_today.png "),totalImage:(0,n.oss)("
																									prize / coin_total.png ")};Page({behaviors:[a.default],data:function(e,t){return s(e,c(t))}(function(e,t){for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(u){var o,a=r(u(t));try{for(a.s();!(o=a.n()).done;){n=o.value;l.call(t,n)&&g(e,n,t[n])}}catch(e){a.e(e)}finally{a.f()}}return e}({},f),{listData:[],ossUrl:n.ossUrl,coinNumber:0}),onShow:function(){this.getList(),this.getCoinInfo(),(0,o.AccessLogAdd)()},onShareAppMessage:function(){return{title:"濮ｅ繑妫╃粵鎯у煂閿涘矂绮嶉柌鎴炲闁惧墽鐡戞担鐘茬敨閸ョ偛顔 ? ,
																									path: " / package2024CNY / pages / index / index ? scene = 1666 & customerid = " + wx.getStorageSync("
									_CNY_CUSTOMER_ID "),
																									imageUrl: (0, n.oss)("
									share_cover.jpg ")
																								}
																							},
																							getList: function() {
																								return d(this, null, t().mark((function e() {
																									var r, n;
																									return t().wrap((function(e) {
																										for (;;) switch (e.prev = e.next) {
																										case 0:
																											return e.prev = 0,
																											e.next = 3,
																											(0, o.GetPrizeList)({
																												page: 1,
																												pageSize: 9999
																											});
																										case 3:
																											r = e.sent,
																											n = r.data,
																											this.setData({
																												listData: n.list || []
																											}),
																											e.next = 11;
																											break;
																										case 8:
																											e.prev = 8,
																											e.t0 = e.
																											catch(0),
																											console.log(e.t0);
																										case 11:
																										case "
									end ":
																											return e.stop()
																										}
																									}), e, this, [[0, 8]])
																								})))
																							},
																							getCoinInfo: function() {
																								return d(this, null, t().mark((function e() {
																									var r, n;
																									return t().wrap((function(e) {
																										for (;;) switch (e.prev = e.next) {
																										case 0:
																											return e.prev = 0,
																											e.next = 3,
																											(0, o.GetCoinInfo)();
																										case 3:
																											r = e.sent,
																											n = r.data,
																											this.setData({
																												coinNumber: n.coin || 0
																											}),
																											e.next = 11;
																											break;
																										case 8:
																											e.prev = 8,
																											e.t0 = e.
																											catch(0),
																											console.log(e.t0);
																										case 11:
																										case "
									end ":
																											return e.stop()
																										}
																									}), e, this, [[0, 8]])
																								})))
																							},
																							handleExchange: function() {
																								return d(this, null, t().mark((function e() {
																									var r, n, a;
																									return t().wrap((function(e) {
																										for (;;) switch (e.prev = e.next) {
																										case 0:
																											return e.prev = 0,
																											e.next = 3,
																											(0, o.PostCoinExchange)();
																										case 3:
																											r = e.sent,
																											n = r.code,
																											console.log(n),
																											wx.showToast({
																												title: "閹厼鏋╅敍浣稿幀閹广垺鍨氶崝鐕傜礉韫囶偄骞撴稉瀣煙婵傛牕鎼ч弰搴ｇ矎閻婀呴崥褝缍?,icon:"
																												none "}),this.getList(),this.getCoinInfo(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),a={601:"濞茶濮╂径顏囩箖閻忣偆鍨庨敍灞筋殯閸濅礁鍑￠崗鎴濈暚閿涘本鍔呯拫銏″亶閻ㄥ嫬銇囬崝娑欐暜閹镐降鈧 ? ?,
																												602 : "閹劌鍑￠崗鎴炲床鏉╁洤鏆掗敍灞芥彥閸樿绗呴弬鐟邦殯閸濅焦妲戠紒鍡欐箙閻鎯傞敐?,603:"閹劎娈戞Λ娆忕閺佷即鍣烘稉宥堝喕閵嗗倸濮炲▽鐧哥礉缂佈呯敾閺€鍫曟肠鐎瑰鍘辩敮灞惧剷閸犳粓绶崇敮渚婄稏"},wx.showToast({icon:"
																												none ",title:a[e.t0.code]||e.t0.message});case 12:case"
																												end ":return e.stop()}}),e,this,[[0,8]])})))},onAction:function(e){var t=e.currentTarget.dataset.item||{},r=t.receiveInfo;if(!r||!r.city)switch(t.prizeType){case 2:var n={sign_streak:{7:" / pages / product / product ? id = 5284 ",8:" / pages / product / product ? id = 5857 "},sign:{7:" / pages / product / product ? id = 5857 ",8:" / pages / product / product ? id = 5833 "}},o=n[t.prizePool]&&n[t.prizePool][t.level];console.log(o),wx.navigateTo({url:o});break;case 3:case 4:this.toAddress(t.id)}},toAddress:function(e){wx.navigateTo({url:" / package2024CNY / pages / address / address ? id = "+e})}}); 
 			}); 	require("
																												package2024CNY / pages / prize / index.js ");
 		__wxRoute = 'package2024CNY/pages/address/address';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/pages/address/address.js';	define("
																												package2024CNY / pages / address / address.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																												use strict ";var e=require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),t=require(".. / .. / utils / index "),n=require(".. / .. / service ");Page({data:{prizeId:0,regionInfo:"",showPopup:!1,memberName:"",memberPhone:"",province:"",city:"",region:"",detailAddress:"",pageBackground:(0,t.oss)("
																												prize_bg.jpg ")},onLoad:function(e){wx.hideShareMenu(),e.id&&this.setData({prizeId:e.id}),(0,n.AccessLogAdd)()},showPopup:function(){this.setData({showPopup:!0})},hidePopup:function(){this.setData({showPopup:!1})},changeMember:function(e){this.setData({memberName:e.detail.value})},changePhone:function(e){this.setData({memberPhone:e.detail.value})},changeAddress:function(e){this.setData({detailAddress:e.detail.value})},handleAddress:function(e){this.setData({regionInfo:e.detail[0].name+e.detail[1].name+e.detail[2].name,province:e.detail[0].name,city:e.detail[1].name,region:e.detail[2].name})},sumbit:function(){return function(e,t,n){return new Promise((function(a,i){var r=function(e){try{s(n.next(e))}catch(e){i(e)}},o=function(e){try{s(n.throw(e))}catch(e){i(e)}},s=function(e){return e.done?a(e.value):Promise.resolve(e.value).then(r,o)};s((n=n.apply(e,t)).next())}))}(this,null,e().mark((function t(){var a,i,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.data.memberName){e.next=3;break}return wx.showToast({icon:"
																												none ",title:"鐠囧嘲锝為崘娆愭暪鐠愌傛眽婵挸鎮 ?
																											}),
																											e.abrupt("
									return ");
																										case 3:
																											if (this.data.memberPhone && /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/.test(this.data.memberPhone)) {
																												e.next = 6;
																												break
																											}
																											return wx.showToast({
																												icon: "
									none ",
																												title: "鐠囧嘲锝為崘娆愵劀绾喚娈戦懕鏃傞兇閻絻鐦?}),e.abrupt("
																												return ");case 6:if(this.data.detailAddress&&this.data.city){e.next=9;break}return wx.showToast({icon:"
																												none ",title:"鐠囧嘲锝為崘娆愭暪娴犺泛婀撮崸鈧 ?
																											}),
																											e.abrupt("
									return ");
																										case 9:
																											return e.prev = 9,
																											e.next = 12,
																											(0, n.PostReceiveAddress)({
																												winningHistoryId: this.data.prizeId,
																												memberName: this.data.memberName,
																												memberPhone: this.data.memberPhone,
																												province: this.data.province,
																												city: this.data.city,
																												region: this.data.region,
																												detailAddress: this.data.detailAddress
																											});
																										case 12:
																											if (a = e.sent, i = a.code, r = a.message, 200 !== i) {
																												e.next = 18;
																												break
																											}
																											return wx.showToast({
																												icon: "
									none ",
																												title: "閹绘劒姘﹂幋鎰閿??
								}),
								wx.navigateBack({
									delta: 1
								}),
								e.abrupt("
																												return ");
							case 18:
								wx.showToast({
									icon:
									"
																												none ",
									title: r
								}),
								e.next = 24;
								break;
							case 21:
								e.prev = 21,
								e.t0 = e.
								catch(9),
								wx.showToast({
									icon: "
																												none ",
									title: e.t0.message
								});
							case 24:
							case "
																												end ":
								return e.stop()
							}
						}), t, this, [[9, 21]])
					})))
				},
				onReady: function() {},
				onShow: function() {},
				onHide: function() {},
				onUnload: function() {},
				onShareAppMessage: function() {}
			});
		});
		require("
																												package2024CNY / pages / address / address.js ");
		__wxRoute = 'package2024CNY/pages/rule/rule';
		__wxRouteBegin = true;
		__wxAppCurrentFile__ = 'package2024CNY/pages/rule/rule.js';
		define("
																												package2024CNY / pages / rule / rule.js ",
		function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
			"
																												use strict ";
			var e = require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),
			r = require(".. / .. / utils / index "),
			t = require(".. / .. / service "),
			n = Object.defineProperty,
			a = Object.getOwnPropertySymbols,
			o = Object.prototype.hasOwnProperty,
			i = Object.prototype.propertyIsEnumerable,
			s = function(e, r, t) {
				return r in e ? n(e, r, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: t
				}) : e[r] = t
			},
			l = {
				pageBackground: (0, r.oss)("
																												invite_bg.png "),
				titleImage: (0, r.oss)("
																												rule_title.png "),
				ruleBackground: (0, r.oss)("
																												rule_bg.png "),
				ruleContentImage: (0, r.oss)("
																												rule_text.png ")
			};
			Page({
				data: function(r, t) {
					for (var n in t || (t = {})) o.call(t, n) && s(r, n, t[n]);
					if (a) {
						var l, u = e(a(t));
						try {
							for (u.s(); ! (l = u.n()).done;) {
								n = l.value;
								i.call(t, n) && s(r, n, t[n])
							}
						} catch(e) {
							u.e(e)
						} finally {
							u.f()
						}
					}
					return r
				} ({},
				l),
				onLoad: function() { (0, t.AccessLogAdd)()
				},
				onShareAppMessage: function() {
					return {
						title: "濮ｅ繑妫╃粵鎯у煂閿涘矂绮嶉柌鎴炲闁惧墽鐡戞担鐘茬敨閸ョ偛顔 ? ,
																												path: "/package2024CNY/pages/index/index?scene=1666&customerid=" + wx.getStorageSync("_CNY_CUSTOMER_ID"),
																												imageUrl: (0, r.oss)("share_cover.jpg")
																											}
																										}
																									});
																								});
																								require("package2024CNY/pages/rule/rule.js");
																								__wxRoute = 'package2024CNY/pages/reservation/reservation';
																								__wxRouteBegin = true;
																								__wxAppCurrentFile__ = 'package2024CNY/pages/reservation/reservation.js';
																								define("package2024CNY/pages/reservation/reservation.js",
																								function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																									"use strict";
																									var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
																									t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
																									r = require("../../utils/index"),
																									n = require("../../service"),
																									s = require("../../../utils/storage"),
																									o = Object.defineProperty,
																									a = Object.defineProperties,
																									i = Object.getOwnPropertyDescriptors,
																									c = Object.getOwnPropertySymbols,
																									u = Object.prototype.hasOwnProperty,
																									l = Object.prototype.propertyIsEnumerable,
																									p = function(e, t, r) {
																										return t in e ? o(e, t, {
																											enumerable: !0,
																											configurable: !0,
																											writable: !0,
																											value: r
																										}) : e[t] = r
																									},
																									g = function(e, t, r) {
																										return new Promise((function(n, s) {
																											var o = function(e) {
																												try {
																													i(r.next(e))
																												} catch(e) {
																													s(e)
																												}
																											},
																											a = function(e) {
																												try {
																													i(r.
																													throw (e))
																												} catch(e) {
																													s(e)
																												}
																											},
																											i = function(e) {
																												return e.done ? n(e.value) : Promise.resolve(e.value).then(o, a)
																											};
																											i((r = r.apply(e, t)).next())
																										}))
																									},
																									v = {
																										pageBackground: (0, r.oss)("reservation/container_bg1.png"),
																										titleImage0: (0, r.oss)("reservation/title_image_1.png"),
																										titleImage1: (0, r.oss)("reservation/title_1_1.png"),
																										starImage: (0, r.oss)("reservation/star_pic1_1.png"),
																										reservationButton: (0, r.oss)("reservation/btn_reservation.png"),
																										buttonImage0: (0, r.oss)("reservation/btn_0.png"),
																										buttonImage1: (0, r.oss)("reservation/btn_1.png"),
																										picImage0: (0, r.oss)("reservation/pic_0.png"),
																										picImage1: (0, r.oss)("reservation/pic_1.png"),
																										reservationBtn: (0, r.oss)("reservation/my_reservation.png")
																									};
																									Page({
																										data: function(e, t) {
																											return a(e, i(t))
																										} (function(e, r) {
																											for (var n in r || (r = {})) u.call(r, n) && p(e, n, r[n]);
																											if (c) {
																												var s, o = t(c(r));
																												try {
																													for (o.s(); ! (s = o.n()).done;) {
																														n = s.value;
																														l.call(r, n) && p(e, n, r[n])
																													}
																												} catch(e) {
																													o.e(e)
																												} finally {
																													o.f()
																												}
																											}
																											return e
																										} ({},
																										v), {
																											dialogVisible: !1,
																											starCode: "",
																											reservationList: []
																										}),
																										onLoad: function(e) {
																											this.handleAuth()
																										},
																										handleAuth: function() {
																											return g(this, null, e().mark((function t() {
																												var r, n, o;
																												return e().wrap((function(e) {
																													for (;;) switch (e.prev = e.next) {
																													case 0:
																														return e.prev = 0,
																														console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摠NIT_LOGIN_0閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?),e.next=4,this.selectComponent("#auth ").auth();case 4:if(r=e.sent,n=(0,s.getYmallInfo)(),o=n.accessToken,console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摠NIT_LOGIN_1閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?),
																														console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摜etAccessToken閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?,o),console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摐uthResult閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?, JSON.stringify(r)),
																														!r || !o) {
																															e.next = 9;
																															break
																														}
																														return e.abrupt("return", this.handleLogin(o));
																													case 9:
																														wx.showToast({
																															icon:
																															"error",
																															title: "閺堫亣骞忛崣鏍у煂閻╃绨叉穱鈩冧紖閿?}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"
																															end ":return e.stop()}}),t,this,[[0,12]])})))},handleLogin:function(t){return g(this,null,e().mark((function r(){var s,o,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,n.PostUserLogin)({inviter:this.inviter},t);case 3:if(s=e.sent,o=s.code,a=s.data,200===o){e.next=8;break}return e.abrupt("
																															return ");case 8:wx.setStorageSync("
																															_CNY_TOKEN ",a),(0,n.AccessLogAdd)(),console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摣OGIN_SUCCESSFUL閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?), e.next = 14;
																															break;
																														case 11:
																															e.prev = 11, e.t0 = e.
																															catch(0), console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摟AYI_LOGIN_ERROR閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?,JSON.stringify(e.t0));case 14:case"
																															end ":return e.stop()}}),r,this,[[0,11]])})))},onDialogClose:function(){this.setData({dialogVisible:!1})},handleStarReserve:function(t){return g(this,null,e().mark((function r(){var s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=+t.currentTarget.dataset.star,e.prev=1,e.next=4,(0,n.StarPhoneReserve)({star:s,fest:2});case 4:return e.next=6,this.getReservationList(s);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"
																															end ":return e.stop()}}),r,this,[[1,8]])})))},getReservationList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return g(this,null,e().mark((function s(){var o,a,i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,n.GetReservationList)();case 3:if(o=e.sent,(a=o.data).list.length){e.next=8;break}return wx.showToast({title:"閺嗗倹妫ゆ０鍕鐠佹澘缍嶉敍灞芥彥韫囶偆鍋ｉ崙缁樺瘻闁筋噣顣╃痪锕€鎯傞敐 ? , icon: "none"
																														}),
																														e.abrupt("return");
																													case 8:
																														i = "number" == typeof t ? [a.list.find((function(e) {
																															return e.star === t
																														}))] : a.list || [],
																														this.setData({
																															reservationList: i.map((function(e) {
																																return e.phoneText = (0, r.maskPhoneNumber)(e.phone),
																																e.date = (0, r.formatListItemDate)(e.createTime),
																																e
																															})),
																															dialogVisible: !!a.list.length
																														}),
																														e.next = 15;
																														break;
																													case 12:
																														e.prev = 12,
																														e.t0 = e.
																														catch(0),
																														console.log(e.t0);
																													case 15:
																													case "end":
																														return e.stop()
																													}
																												}),
																												s,
																												this,
																												[[0, 12]])
																											})))
																										}
																									});
																								}); require("package2024CNY/pages/reservation/reservation.js"); __wxRoute = 'package2024CNY/pages/game/game'; __wxRouteBegin = true; __wxAppCurrentFile__ = 'package2024CNY/pages/game/game.js'; define("package2024CNY/pages/game/game.js",
																								function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																									"use strict";
																									var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
																									t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
																									n = require("../../utils/index"),
																									r = require("../../service"),
																									a = require("../../../utils/storage"),
																									s = Object.defineProperty,
																									o = Object.defineProperties,
																									i = Object.getOwnPropertyDescriptors,
																									c = Object.getOwnPropertySymbols,
																									u = Object.prototype.hasOwnProperty,
																									l = Object.prototype.propertyIsEnumerable,
																									g = function(e, t, n) {
																										return t in e ? s(e, t, {
																											enumerable: !0,
																											configurable: !0,
																											writable: !0,
																											value: n
																										}) : e[t] = n
																									},
																									p = function(e, n) {
																										for (var r in n || (n = {})) u.call(n, r) && g(e, r, n[r]);
																										if (c) {
																											var a, s = t(c(n));
																											try {
																												for (s.s(); ! (a = s.n()).done;) {
																													r = a.value;
																													l.call(n, r) && g(e, r, n[r])
																												}
																											} catch(e) {
																												s.e(e)
																											} finally {
																												s.f()
																											}
																										}
																										return e
																									},
																									h = function(e, t) {
																										return o(e, i(t))
																									},
																									f = function(e, t, n) {
																										return new Promise((function(r, a) {
																											var s = function(e) {
																												try {
																													i(n.next(e))
																												} catch(e) {
																													a(e)
																												}
																											},
																											o = function(e) {
																												try {
																													i(n.
																													throw (e))
																												} catch(e) {
																													a(e)
																												}
																											},
																											i = function(e) {
																												return e.done ? r(e.value) : Promise.resolve(e.value).then(s, o)
																											};
																											i((n = n.apply(e, t)).next())
																										}))
																									},
																									m = {
																										kvImage: (0, n.oss)("game/game_kv.png"),
																										pageBg: (0, n.oss)("game/game_page_2.png"),
																										titleImage: (0, n.oss)("game/game_title.png"),
																										titleImage2: (0, n.oss)("game/game_title_1.png"),
																										contentImage0: (0, n.oss)("game/reward_pic_0.png"),
																										drawGif: (0, n.oss)("game/draw.gif"),
																										topGif: (0, n.oss)("game/rank_top.gif"),
																										contentImage1: (0, n.oss)("game/top_pic_0.png"),
																										rewardBtn: (0, n.oss)("game/btn_reward.png"),
																										rankBtn: (0, n.oss)("game/btn_top.png"),
																										ruleBtn: (0, n.oss)("game/btn_rule.png"),
																										myPrizeBtn: (0, n.oss)("game/btn_prize.png")
																									};
																									Page({
																										data: h(p({},
																										m), {
																											QWuser: !1,
																											resultVisible: !1,
																											resultData: {},
																											bgHeight: (0, n.rpx2px)(2678),
																											bgWidth: (0, n.rpx2px)(750)
																										}),
																										onLoad: function(e) {
																											"true" === e.QWuser && this.setData({
																												QWuser: !0
																											}),
																											this.handleAuth()
																										},
																										viewTop: function() {
																											wx.navigateTo({
																												url: "/package2024CNY/pages/ranking/ranking"
																											})
																										},
																										viewGameRule: function() {
																											wx.navigateTo({
																												url: "/package2024CNY/pages/game-rule/rule"
																											})
																										},
																										handleDialogClose: function() {
																											this.setData({
																												resultVisible: !1
																											})
																										},
																										handleAuth: function() {
																											return f(this, null, e().mark((function t() {
																												var n, r, s;
																												return e().wrap((function(e) {
																													for (;;) switch (e.prev = e.next) {
																													case 0:
																														return e.prev = 0,
																														console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摠NIT_LOGIN_0閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?),e.next=4,this.selectComponent("#auth ").auth();case 4:if(n=e.sent,r=(0,a.getYmallInfo)(),s=r.accessToken,console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摠NIT_LOGIN_1閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?),
																														console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摜etAccessToken閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?,s),console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摐uthResult閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?, JSON.stringify(n)),
																														!n || !s) {
																															e.next = 9;
																															break
																														}
																														return e.abrupt("return", this.handleLogin(s));
																													case 9:
																														wx.showToast({
																															icon:
																															"none",
																															title: "閺堫亣骞忛崣鏍у煂閻╃绨叉穱鈩冧紖閿?}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"
																															end ":return e.stop()}}),t,this,[[0,12]])})))},handleLogin:function(t){return f(this,null,e().mark((function n(){var a,s,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,r.PostUserLogin)({inviter:this.data.inviter},t);case 3:if(a=e.sent,s=a.code,o=a.data,200===s){e.next=8;break}return e.abrupt("
																															return ");case 8:wx.setStorageSync("
																															_CNY_TOKEN ",o),(0,r.AccessLogAdd)(),this.data.QWuser?this.getMoreChance():this.selectComponent("#game ").getGameInfo(),console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摣OGIN_SUCCESSFUL閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧 ? ?), e.next = 14;
																															break;
																														case 11:
																															e.prev = 11, e.t0 = e.
																															catch(0), console.log("閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧摟AYI_LOGIN_ERROR閳ユ柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧柡鈧?,JSON.stringify(e.t0));case 14:case"
																															end ":return e.stop()}}),n,this,[[0,11]])})))},getMoreChance:function(){return f(this,null,e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.GetGameMoreChance)();case 2:this.selectComponent("#game ").getGameInfo();case 3:case"
																															end ":return e.stop()}}),t,this)})))},handleDraw:function(){return f(this,null,e().mark((function t(){var n,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,r.PostGameDraw)();case 2:n=e.sent,a=n.data,this.setData({resultData:h(p({},a),{resultType:"
																															draw "}),resultVisible:!0,resultType:"
																															draw "});case 5:case"
																															end ":return e.stop()}}),t,this)})))},viewMyPrize:function(){wx.navigateTo({url:" / package2024CNY / pages / game - prize / index "})}}); 
 			}); 	require("
																															package2024CNY / pages / game / game.js ");
 		__wxRoute = 'package2024CNY/pages/webview/webview';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'package2024CNY/pages/webview/webview.js';	define("
																															package2024CNY / pages / webview / webview.js ", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"
																															use strict ";var e=require(".. / .. / service "),s=require(".. / .. / utils / index ");Page({data:{webUrl:"
																															https: //wework.qpic.cn/wwpic3az/707344_gnNqmqsMQ4yY3Up_1704959694/0",codeBg:(0,s.oss)("game/ewm_bg.png"),qrcodeUrl:(0,s.oss)("game/ewm_pic.png")},onLoad:function(s){(0,e.AccessLogAdd)()}}); 
																														});
																														require("package2024CNY/pages/webview/webview.js");
																														__wxRoute = 'package2024CNY/pages/game-record/game-record';
																														__wxRouteBegin = true;
																														__wxAppCurrentFile__ = 'package2024CNY/pages/game-record/game-record.js';
																														define("package2024CNY/pages/game-record/game-record.js",
																														function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																															"use strict";
																															var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
																															t = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
																															r = require("../../utils/index"),
																															a = require("../../service"),
																															n = Object.defineProperty,
																															i = Object.defineProperties,
																															o = Object.getOwnPropertyDescriptors,
																															s = Object.getOwnPropertySymbols,
																															c = Object.prototype.hasOwnProperty,
																															u = Object.prototype.propertyIsEnumerable,
																															p = function(e, t, r) {
																																return t in e ? n(e, t, {
																																	enumerable: !0,
																																	configurable: !0,
																																	writable: !0,
																																	value: r
																																}) : e[t] = r
																															},
																															g = {
																																pageBackground: (0, r.oss)("game/record_bg.png"),
																																titleImage: (0, r.oss)("game/record_title.png"),
																																recordBackground: (0, r.oss)("game/record_list.png")
																															};
																															Page({
																																data: function(e, t) {
																																	return i(e, o(t))
																																} (function(e, r) {
																																	for (var a in r || (r = {})) c.call(r, a) && p(e, a, r[a]);
																																	if (s) {
																																		var n, i = t(s(r));
																																		try {
																																			for (i.s(); ! (n = i.n()).done;) {
																																				a = n.value;
																																				u.call(r, a) && p(e, a, r[a])
																																			}
																																		} catch(e) {
																																			i.e(e)
																																		} finally {
																																			i.f()
																																		}
																																	}
																																	return e
																																} ({},
																																g), {
																																	listData: [],
																																	total: 100,
																																	page: 1,
																																	pageSize: 13,
																																	pages: []
																																}),
																																onLoad: function() {
																																	this.getList(),
																																	(0, a.AccessLogAdd)()
																																},
																																onShareAppMessage: function() {
																																	return {}
																																},
																																handleChangePage: function(e) {
																																	var t = e.currentTarget.dataset,
																																	r = this.data,
																																	a = r.page,
																																	n = r.pages;
																																	t.prev && a > 1 && this.setData({
																																		page: a - 1
																																	}),
																																	t.next && a < n[n.length - 1] && this.setData({
																																		page: a + 1
																																	}),
																																	t.page && this.setData({
																																		page: t.page
																																	}),
																																	this.getList()
																																},
																																getList: function() {
																																	return function(e, t, r) {
																																		return new Promise((function(a, n) {
																																			var i = function(e) {
																																				try {
																																					s(r.next(e))
																																				} catch(e) {
																																					n(e)
																																				}
																																			},
																																			o = function(e) {
																																				try {
																																					s(r.
																																					throw (e))
																																				} catch(e) {
																																					n(e)
																																				}
																																			},
																																			s = function(e) {
																																				return e.done ? a(e.value) : Promise.resolve(e.value).then(i, o)
																																			};
																																			s((r = r.apply(e, t)).next())
																																		}))
																																	} (this, null, e().mark((function t() {
																																		var n, i, o, s;
																																		return e().wrap((function(e) {
																																			for (;;) switch (e.prev = e.next) {
																																			case 0:
																																				return e.prev = 0,
																																				e.next = 3,
																																				(0, a.GetGameList)({
																																					page: this.data.page,
																																					pageSize: this.data.pageSize
																																				});
																																			case 3:
																																				for (n = e.sent, i = n.data, o = [], s = 0; s < +(i.total / this.data.pageSize).toFixed(0); s++) o.push(s + 1);
																																				this.setData({
																																					listData: (i.list || []).map((function(e) {
																																						var t = e.createTime,
																																						a = e.endTime,
																																						n = e.score;
																																						return e.score = "number" == typeof n ? n: "--",
																																						e.endTime = a ? (0, r.FormatDate)(new Date(a)) : "--",
																																						e.second = a ? (0, r.CalculateTimeDifferenceInSeconds)(new Date(t), new Date(a)) : "--",
																																						e
																																					})),
																																					total: i.total,
																																					pages: o
																																				}),
																																				e.next = 13;
																																				break;
																																			case 10:
																																				e.prev = 10,
																																				e.t0 = e.
																																				catch(0),
																																				console.log(e.t0);
																																			case 13:
																																			case "end":
																																				return e.stop()
																																			}
																																		}), t, this, [[0, 10]])
																																	})))
																																}
																															});
																														});
																														require("package2024CNY/pages/game-record/game-record.js");
																														__wxRoute = 'package2024CNY/pages/game-prize/index';
																														__wxRouteBegin = true;
																														__wxAppCurrentFile__ = 'package2024CNY/pages/game-prize/index.js';
																														define("package2024CNY/pages/game-prize/index.js",
																														function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																															"use strict";
																															var e = require("../../../@babel/runtime/helpers/interopRequireDefault").
																														default,
																															t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
																															r = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
																															a = require("../../utils/index"),
																															n = require("../../service"),
																															i = e(require("../../utils/computed")),
																															s = Object.defineProperty,
																															o = Object.defineProperties,
																															c = Object.getOwnPropertyDescriptors,
																															u = Object.getOwnPropertySymbols,
																															l = Object.prototype.hasOwnProperty,
																															p = Object.prototype.propertyIsEnumerable,
																															d = function(e, t, r) {
																																return t in e ? s(e, t, {
																																	enumerable: !0,
																																	configurable: !0,
																																	writable: !0,
																																	value: r
																																}) : e[t] = r
																															},
																															f = {
																																pageBackground: (0, a.oss)("game/jp_bg.png"),
																																recordBackground: (0, a.oss)("game/prize_list.png"),
																																tagImage: (0, a.oss)("tag_today.png")
																															};
																															Page({
																																behaviors: [i.
																															default],
																																data: function(e, t) {
																																	return o(e, c(t))
																																} (function(e, t) {
																																	for (var a in t || (t = {})) l.call(t, a) && d(e, a, t[a]);
																																	if (u) {
																																		var n, i = r(u(t));
																																		try {
																																			for (i.s(); ! (n = i.n()).done;) {
																																				a = n.value;
																																				p.call(t, a) && d(e, a, t[a])
																																			}
																																		} catch(e) {
																																			i.e(e)
																																		} finally {
																																			i.f()
																																		}
																																	}
																																	return e
																																} ({},
																																f), {
																																	listData: [],
																																	ossUrl: a.ossUrl
																																}),
																																onShow: function() {
																																	this.getList(),
																																	(0, n.AccessLogAdd)()
																																},
																																getList: function() {
																																	return function(e, t, r) {
																																		return new Promise((function(a, n) {
																																			var i = function(e) {
																																				try {
																																					o(r.next(e))
																																				} catch(e) {
																																					n(e)
																																				}
																																			},
																																			s = function(e) {
																																				try {
																																					o(r.
																																					throw (e))
																																				} catch(e) {
																																					n(e)
																																				}
																																			},
																																			o = function(e) {
																																				return e.done ? a(e.value) : Promise.resolve(e.value).then(i, s)
																																			};
																																			o((r = r.apply(e, t)).next())
																																		}))
																																	} (this, null, t().mark((function e() {
																																		var r, a;
																																		return t().wrap((function(e) {
																																			for (;;) switch (e.prev = e.next) {
																																			case 0:
																																				return e.prev = 0,
																																				e.next = 3,
																																				(0, n.GetGamePrizeList)({
																																					page: 1,
																																					pageSize: 9999
																																				});
																																			case 3:
																																				r = e.sent,
																																				a = r.data,
																																				this.setData({
																																					listData: a.list || []
																																				}),
																																				e.next = 11;
																																				break;
																																			case 8:
																																				e.prev = 8,
																																				e.t0 = e.
																																				catch(0),
																																				console.log(e.t0);
																																			case 11:
																																			case "end":
																																				return e.stop()
																																			}
																																		}), e, this, [[0, 8]])
																																	})))
																																},
																																onAction: function(e) {
																																	var t = e.currentTarget.dataset.item || {},
																																	r = t.receiveInfo,
																																	a = t.prizeType,
																																	n = t.id;
																																	if (!r || !r.city) switch (a) {
																																	case 2:
																																		wx.navigateTo({
																																			url:
																																			"/pages/special/special?templateId=1274&chan_id=249"
																																		});
																																		break;
																																	case 3:
																																	case 4:
																																		this.toAddress(n)
																																	}
																																},
																																toAddress: function(e) {
																																	wx.navigateTo({
																																		url: "/package2024CNY/pages/address/address?id=" + e
																																	})
																																}
																															});
																														});
																														require("package2024CNY/pages/game-prize/index.js");
																														__wxRoute = 'package2024CNY/pages/game-rule/rule';
																														__wxRouteBegin = true;
																														__wxAppCurrentFile__ = 'package2024CNY/pages/game-rule/rule.js';
																														define("package2024CNY/pages/game-rule/rule.js",
																														function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																															"use strict";
																															var e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
																															r = require("../../utils/index"),
																															t = require("../../service"),
																															n = Object.defineProperty,
																															a = Object.getOwnPropertySymbols,
																															o = Object.prototype.hasOwnProperty,
																															i = Object.prototype.propertyIsEnumerable,
																															l = function(e, r, t) {
																																return r in e ? n(e, r, {
																																	enumerable: !0,
																																	configurable: !0,
																																	writable: !0,
																																	value: t
																																}) : e[r] = t
																															},
																															u = {
																																pageBackground: (0, r.oss)("invite_bg.png"),
																																titleImage: (0, r.oss)("game/gezz_title.png"),
																																ruleBackground: (0, r.oss)("game/game_rule_bg.png"),
																																ruleContentImage: (0, r.oss)("game/contant_wenan.png")
																															};
																															Page({
																																data: function(r, t) {
																																	for (var n in t || (t = {})) o.call(t, n) && l(r, n, t[n]);
																																	if (a) {
																																		var u, c = e(a(t));
																																		try {
																																			for (c.s(); ! (u = c.n()).done;) {
																																				n = u.value;
																																				i.call(t, n) && l(r, n, t[n])
																																			}
																																		} catch(e) {
																																			c.e(e)
																																		} finally {
																																			c.f()
																																		}
																																	}
																																	return r
																																} ({},
																																u),
																																onLoad: function() { (0, t.AccessLogAdd)()
																																}
																															});
																														});
																														require("package2024CNY/pages/game-rule/rule.js");
																														__wxRoute = 'package2024CNY/pages/ranking/ranking';
																														__wxRouteBegin = true;
																														__wxAppCurrentFile__ = 'package2024CNY/pages/ranking/ranking.js';
																														define("package2024CNY/pages/ranking/ranking.js",
																														function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
																															"use strict";
																															var n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
																															e = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
																															t = require("../../utils/index"),
																															r = require("../../service"),
																															i = Object.defineProperty,
																															a = Object.defineProperties,
																															s = Object.getOwnPropertyDescriptors,
																															o = Object.getOwnPropertySymbols,
																															g = Object.prototype.hasOwnProperty,
																															c = Object.prototype.propertyIsEnumerable,
																															u = function(n, e, t) {
																																return e in n ? i(n, e, {
																																	enumerable: !0,
																																	configurable: !0,
																																	writable: !0,
																																	value: t
																																}) : n[e] = t
																															},
																															l = function(n, t) {
																																for (var r in t || (t = {})) g.call(t, r) && u(n, r, t[r]);
																																if (o) {
																																	var i, a = e(o(t));
																																	try {
																																		for (a.s(); ! (i = a.n()).done;) {
																																			r = i.value;
																																			c.call(t, r) && u(n, r, t[r])
																																		}
																																	} catch(n) {
																																		a.e(n)
																																	} finally {
																																		a.f()
																																	}
																																}
																																return n
																															},
																															k = function(n, e) {
																																return a(n, s(e))
																															},
																															p = function(n, e, t) {
																																return new Promise((function(r, i) {
																																	var a = function(n) {
																																		try {
																																			o(t.next(n))
																																		} catch(n) {
																																			i(n)
																																		}
																																	},
																																	s = function(n) {
																																		try {
																																			o(t.
																																			throw (n))
																																		} catch(n) {
																																			i(n)
																																		}
																																	},
																																	o = function(n) {
																																		return n.done ? r(n.value) : Promise.resolve(n.value).then(a, s)
																																	};
																																	o((t = t.apply(n, e)).next())
																																}))
																															},
																															d = {
																																pageBackground: (0, t.oss)("ranking/ranking_bg.png"),
																																prizeBox: (0, t.oss)("ranking/ranking_prize_box.png"),
																																titleImage0: (0, t.oss)("ranking/ranking_title_0.png"),
																																rankingInfoBackground: (0, t.oss)("ranking/ranking_info.png"),
																																infoIcon0: (0, t.oss)("ranking/ranking_icon.png"),
																																infoIcon1: (0, t.oss)("ranking/ranking_best.png"),
																																timeIcon: (0, t.oss)("ranking/ranking_time.png"),
																																timeTitle: (0, t.oss)("ranking/ranking_title_1.png"),
																																dateBlockImage: (0, t.oss)("ranking/date_bg.png"),
																																rankListBackground: (0, t.oss)("ranking/ranking_list.png"),
																																prevRankingList: (0, t.oss)("ranking/prev_list.png")
																															},
																															f = [{
																																startTime: "2024-01-19 00:00",
																																endTime: "2024-01-26 23:59"
																															},
																															{
																																startTime: "2024-01-27 00:00",
																																endTime: "2024-02-02 23:59"
																															},
																															{
																																startTime: "2024-02-03 00:00",
																																endTime: "2024-02-09 23:59"
																															},
																															{
																																startTime: "2024-02-10 00:00",
																																endTime: "2024-02-16 23:59"
																															}];
																															Page({
																																data: k(l({
																																	ossUrl: t.ossUrl
																																},
																																d), {
																																	prizeList: [(0, t.oss)("ranking/TOP1.png"), (0, t.oss)("ranking/TOP2-3.png"), (0, t.oss)("ranking/TOP4-6.png"), (0, t.oss)("ranking/TOP7-10.png")],
																																	listData: [],
																																	listDataKeys: [{
																																		key: "order",
																																		label: "閹烘帒鎮?,
												width: 136
											},
											{
												key: "
																																		customerId ",
												label: "閹烘帒鎮旾D ",
												width: 154
											},
											{
												key: "
																																		duration ",
												label: "濞撳憡鍨欓弮鍫曟毐",
												width: 170
											},
											{
												key: "
																																		score ",
												label: "濞撳憡鍨欓幋妯煎摋",
												width: 162
											}],
											deadLineData: {
												days: ["
																																		0 ", "
																																		0 "],
												hours: ["
																																		0 ", "
																																		0 "],
												minutes: ["
																																		0 ", "
																																		0 "],
												seconds: ["
																																		0 ", "
																																		0 "]
											},
											rankingInfo: {
												customerId: "",
												avatar: "",
												rank: -1,
												score: -1
											}
										}),
										onLoad: function(n) {
											var e = this;
											this.getRankingList(),
											this.getMyRankingInfo(),
											setInterval((function() {
												e.setData({
													deadLineData: (0, t.CalculateTimeRemaining)(f) || {
														days: ["
																																		0 ", "
																																		0 "],
														hours: ["
																																		0 ", "
																																		0 "],
														minutes: ["
																																		0 ", "
																																		0 "],
														seconds: ["
																																		0 ", "
																																		0 "]
													}
												})
											}), 1e3)
										},
										viewPrevRankingList: function() {
											if ((new Date).getTime() < new Date("
																																		2024 / 01 / 26 23 : 59 : 59 ").getTime()) return wx.showToast({
												icon: "
																																		none ",
												title: "閺嗗倹婀幓顓燁渷閿涘苯鎻╅崢缁樼埗閹村繐鎯倊"
											});
											wx.navigateTo({
												url: " / package2024CNY / pages / historical - ranking / index "
											})
										},
										getMyRankingInfo: function() {
											return p(this, null, n().mark((function e() {
												var t, i;
												return n().wrap((function(n) {
													for (;;) switch (n.prev = n.next) {
													case 0:
														return n.next = 2,
														(0, r.GetMyRankingInfo)();
													case 2:
														t = n.sent,
														i = t.data,
														this.setData({
															rankingInfo: i || {}
														});
													case 5:
													case "
																																		end ":
														return n.stop()
													}
												}), e, this)
											})))
										},
										getRankingList: function() {
											return p(this, null, n().mark((function e() {
												var i, a;
												return n().wrap((function(n) {
													for (;;) switch (n.prev = n.next) {
													case 0:
														return n.next = 2,
														(0, r.GetGameRanking)();
													case 2:
														i = n.sent,
														a = i.data,
														this.setData({
															listData: a.map((function(n, e) {
																return k(l({},
																n), {
																	order: e + 1,
																	duration: (0, t.FormatSeconds2Time)( + (n.duration / 1e3).toFixed(0))
																})
															}))
														});
													case 5:
													case "
																																		end ":
														return n.stop()
													}
												}), e, this)
											})))
										}
									});
								});
								require("
																																		package2024CNY / pages / ranking / ranking.js ");
								__wxRoute = 'package2024CNY/pages/historical-ranking/index';
								__wxRouteBegin = true;
								__wxAppCurrentFile__ = 'package2024CNY/pages/historical-ranking/index.js';
								define("
																																		package2024CNY / pages / historical - ranking / index.js ",
								function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
									"
																																		use strict ";
									var e = require(".. / .. / .. / @babel / runtime / helpers / regeneratorRuntime "),
									t = require(".. / .. / .. / @babel / runtime / helpers / createForOfIteratorHelper "),
									r = require(".. / .. / utils / index "),
									n = require(".. / .. / service "),
									a = Object.defineProperty,
									i = Object.defineProperties,
									o = Object.getOwnPropertyDescriptors,
									s = Object.getOwnPropertySymbols,
									u = Object.prototype.hasOwnProperty,
									c = Object.prototype.propertyIsEnumerable,
									l = function(e, t, r) {
										return t in e ? a(e, t, {
											enumerable: !0,
											configurable: !0,
											writable: !0,
											value: r
										}) : e[t] = r
									},
									p = function(e, r) {
										for (var n in r || (r = {})) u.call(r, n) && l(e, n, r[n]);
										if (s) {
											var a, i = t(s(r));
											try {
												for (i.s(); ! (a = i.n()).done;) {
													n = a.value;
													c.call(r, n) && l(e, n, r[n])
												}
											} catch(e) {
												i.e(e)
											} finally {
												i.f()
											}
										}
										return e
									},
									g = function(e, t) {
										return i(e, o(t))
									},
									f = {
										pageBackground: (0, r.oss)("
																																		ranking / history / background.png "),
										blockBackground: (0, r.oss)("
																																		ranking / history / block_bg.png ")
									},
									h = {
										1 : (0, r.oss)("
																																		ranking / history / title_1.png "),
										2 : (0, r.oss)("
																																		ranking / history / title_2.png "),
										3 : (0, r.oss)("
																																		ranking / history / title_3.png "),
										4 : (0, r.oss)("
																																		ranking / history / title_4.png ")
									};
									Page({
										data: g(p({
											ossUrl: r.ossUrl
										},
										f), {
											titleImages: h,
											listDataKeys: [{
												key: "
																																		rank ",
												label: "閹烘帒鎮 ? ,
																																		width: 84
																																	},
																																	{
																																		key: "prizeImageUrl",
																																		label: "婵傛牕鎼?,
												width: 234
											},
											{
												key: "
																																		customerId ",
												label: "閻劍鍩汭D ",
												width: 150
											},
											{
												key: "
																																		score ",
												label: "閹存鍝 ? ,
																																		width: 162
																																	}],
																																	listData: [],
																																	listDataGroupData: {
																																		1 : [],
																																		2 : [],
																																		3 : [],
																																		4 : []
																																	}
																																}),
																																onLoad: function() {
																																	this.getListData()
																																},
																																getListData: function() {
																																	return function(e, t, r) {
																																		return new Promise((function(n, a) {
																																			var i = function(e) {
																																				try {
																																					s(r.next(e))
																																				} catch(e) {
																																					a(e)
																																				}
																																			},
																																			o = function(e) {
																																				try {
																																					s(r.
																																					throw (e))
																																				} catch(e) {
																																					a(e)
																																				}
																																			},
																																			s = function(e) {
																																				return e.done ? n(e.value) : Promise.resolve(e.value).then(i, o)
																																			};
																																			s((r = r.apply(e, t)).next())
																																		}))
																																	} (this, null, e().mark((function t() {
																																		var a, i, o;
																																		return e().wrap((function(e) {
																																			for (;;) switch (e.prev = e.next) {
																																			case 0:
																																				return e.next = 2,
																																				(0, n.GetHistoryRanking)();
																																			case 2:
																																				a = e.sent,
																																				i = a.data,
																																				o = {
																																					1 : [],
																																					2 : [],
																																					3 : [],
																																					4 : []
																																				},
																																				i.map((function(e) {
																																					return g(p({},
																																					e), {
																																						duration: (0, r.FormatSeconds2Time)( + (e.duration / 1e3).toFixed(0))
																																					})
																																				})).forEach((function(e) {
																																					var t = e.term > -1 ? e.term: 1;
																																					o[t] && o[t].push(e)
																																				})),
																																				this.setData({
																																					listDataGroupData: o
																																				});
																																			case 6:
																																			case "end":
																																				return e.stop()
																																			}
																																		}), t, this)
																																	})))
																																}
																															});
																														});
																														require("package2024CNY/pages/historical-ranking/index.js");
