// @bun
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = import.meta.require;

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS((exports, module) => {
  var __dirname = "/Users/jordanboutrois/Documents/DEV/hono-gf/my-app/node_modules/@prisma/client/runtime", __filename = "/Users/jordanboutrois/Documents/DEV/hono-gf/my-app/node_modules/@prisma/client/runtime/library.js";
  var ru = Object.create;
  var Fr = Object.defineProperty;
  var nu = Object.getOwnPropertyDescriptor;
  var iu = Object.getOwnPropertyNames;
  var ou = Object.getPrototypeOf;
  var su = Object.prototype.hasOwnProperty;
  var Z = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Bt = (e, t) => {
    for (var r in t)
      Fr(e, r, { get: t[r], enumerable: true });
  };
  var wo = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of iu(t))
        !su.call(e, i) && i !== r && Fr(e, i, { get: () => t[i], enumerable: !(n = nu(t, i)) || n.enumerable });
    return e;
  };
  var D = (e, t, r) => (r = e != null ? ru(ou(e)) : {}, wo(t || !e || !e.__esModule ? Fr(r, "default", { value: e, enumerable: true }) : r, e));
  var au = (e) => wo(Fr({}, "__esModule", { value: true }), e);
  var Qo = Z((yf, ti) => {
    var v = ti.exports;
    ti.exports.default = v;
    var _ = "\x1B[", Ht = "\x1B]", mt = "\x07", Jr = ";", Uo = process.env.TERM_PROGRAM === "Apple_Terminal";
    v.cursorTo = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      return typeof t != "number" ? _ + (e + 1) + "G" : _ + (t + 1) + ";" + (e + 1) + "H";
    };
    v.cursorMove = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      let r = "";
      return e < 0 ? r += _ + -e + "D" : e > 0 && (r += _ + e + "C"), t < 0 ? r += _ + -t + "A" : t > 0 && (r += _ + t + "B"), r;
    };
    v.cursorUp = (e = 1) => _ + e + "A";
    v.cursorDown = (e = 1) => _ + e + "B";
    v.cursorForward = (e = 1) => _ + e + "C";
    v.cursorBackward = (e = 1) => _ + e + "D";
    v.cursorLeft = _ + "G";
    v.cursorSavePosition = Uo ? "\x1B7" : _ + "s";
    v.cursorRestorePosition = Uo ? "\x1B8" : _ + "u";
    v.cursorGetPosition = _ + "6n";
    v.cursorNextLine = _ + "E";
    v.cursorPrevLine = _ + "F";
    v.cursorHide = _ + "?25l";
    v.cursorShow = _ + "?25h";
    v.eraseLines = (e) => {
      let t = "";
      for (let r = 0;r < e; r++)
        t += v.eraseLine + (r < e - 1 ? v.cursorUp() : "");
      return e && (t += v.cursorLeft), t;
    };
    v.eraseEndLine = _ + "K";
    v.eraseStartLine = _ + "1K";
    v.eraseLine = _ + "2K";
    v.eraseDown = _ + "J";
    v.eraseUp = _ + "1J";
    v.eraseScreen = _ + "2J";
    v.scrollUp = _ + "S";
    v.scrollDown = _ + "T";
    v.clearScreen = "\x1Bc";
    v.clearTerminal = process.platform === "win32" ? `${v.eraseScreen}${_}0f` : `${v.eraseScreen}${_}3J${_}H`;
    v.beep = mt;
    v.link = (e, t) => [Ht, "8", Jr, Jr, t, mt, e, Ht, "8", Jr, Jr, mt].join("");
    v.image = (e, t = {}) => {
      let r = `${Ht}1337;File=inline=1`;
      return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + mt;
    };
    v.iTerm = { setCwd: (e = process.cwd()) => `${Ht}50;CurrentDir=${e}${mt}`, annotation: (e, t = {}) => {
      let r = `${Ht}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
      if ((n || i) && !(n && i && typeof t.length < "u"))
        throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + mt;
    } };
  });
  var ri = Z((Ef, Go) => {
    Go.exports = (e, t = process.argv) => {
      let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
      return n !== -1 && (i === -1 || n < i);
    };
  });
  var Wo = Z((bf, Ho) => {
    var Ju = __require("os"), Jo = __require("tty"), fe = ri(), { env: J } = process, Je;
    fe("no-color") || fe("no-colors") || fe("color=false") || fe("color=never") ? Je = 0 : (fe("color") || fe("colors") || fe("color=true") || fe("color=always")) && (Je = 1);
    "FORCE_COLOR" in J && (J.FORCE_COLOR === "true" ? Je = 1 : J.FORCE_COLOR === "false" ? Je = 0 : Je = J.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(J.FORCE_COLOR, 10), 3));
    function ni(e) {
      return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
    }
    function ii(e, t) {
      if (Je === 0)
        return 0;
      if (fe("color=16m") || fe("color=full") || fe("color=truecolor"))
        return 3;
      if (fe("color=256"))
        return 2;
      if (e && !t && Je === undefined)
        return 0;
      let r = Je || 0;
      if (J.TERM === "dumb")
        return r;
      if (process.platform === "win32") {
        let n = Ju.release().split(".");
        return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in J)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => (n in J)) || J.CI_NAME === "codeship" ? 1 : r;
      if ("TEAMCITY_VERSION" in J)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(J.TEAMCITY_VERSION) ? 1 : 0;
      if (J.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in J) {
        let n = parseInt((J.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (J.TERM_PROGRAM) {
          case "iTerm.app":
            return n >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(J.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(J.TERM) || ("COLORTERM" in J) ? 1 : r;
    }
    function Hu(e) {
      let t = ii(e, e && e.isTTY);
      return ni(t);
    }
    Ho.exports = { supportsColor: Hu, stdout: ni(ii(true, Jo.isatty(1))), stderr: ni(ii(true, Jo.isatty(2))) };
  });
  var zo = Z((wf, Yo) => {
    var Wu = Wo(), ft = ri();
    function Ko(e) {
      if (/^\d{3,4}$/.test(e)) {
        let r = /(\d{1,2})(\d{2})/.exec(e);
        return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
      }
      let t = (e || "").split(".").map((r) => parseInt(r, 10));
      return { major: t[0], minor: t[1], patch: t[2] };
    }
    function oi(e) {
      let { env: t } = process;
      if ("FORCE_HYPERLINK" in t)
        return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
      if (ft("no-hyperlink") || ft("no-hyperlinks") || ft("hyperlink=false") || ft("hyperlink=never"))
        return false;
      if (ft("hyperlink=true") || ft("hyperlink=always") || "NETLIFY" in t)
        return true;
      if (!Wu.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
        return false;
      if ("TERM_PROGRAM" in t) {
        let r = Ko(t.TERM_PROGRAM_VERSION);
        switch (t.TERM_PROGRAM) {
          case "iTerm.app":
            return r.major === 3 ? r.minor >= 1 : r.major > 3;
          case "WezTerm":
            return r.major >= 20200620;
          case "vscode":
            return r.major > 1 || r.major === 1 && r.minor >= 72;
        }
      }
      if ("VTE_VERSION" in t) {
        if (t.VTE_VERSION === "0.50.0")
          return false;
        let r = Ko(t.VTE_VERSION);
        return r.major > 0 || r.minor >= 50;
      }
      return false;
    }
    Yo.exports = { supportsHyperlink: oi, stdout: oi(process.stdout), stderr: oi(process.stderr) };
  });
  var Xo = Z((xf, Wt) => {
    var Ku = Qo(), si = zo(), Zo = (e, t, { target: r = "stdout", ...n } = {}) => si[r] ? Ku.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
    Wt.exports = (e, t, r = {}) => Zo(e, t, r);
    Wt.exports.stderr = (e, t, r = {}) => Zo(e, t, { target: "stderr", ...r });
    Wt.exports.isSupported = si.stdout;
    Wt.exports.stderr.isSupported = si.stderr;
  });
  var li = Z((kf, Yu) => {
    Yu.exports = { name: "@prisma/engines-version", version: "6.2.0-14.4123509d24aa4dede1e864b46351bf2790323b69", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "4123509d24aa4dede1e864b46351bf2790323b69" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.68", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
  });
  var ui = Z((Hr) => {
    Object.defineProperty(Hr, "__esModule", { value: true });
    Hr.enginesVersion = undefined;
    Hr.enginesVersion = li().prisma.enginesVersion;
  });
  var ns = Z((Yf, Xu) => {
    Xu.exports = { name: "dotenv", version: "16.4.7", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, funding: "https://dotenvx.com", keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, engines: { node: ">=12" }, browser: { fs: false } };
  });
  var as = Z((zf, Le) => {
    var mi = __require("fs"), fi = __require("path"), ec = __require("os"), tc = __require("crypto"), rc = ns(), gi = rc.version, nc = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function ic(e) {
      let t = {}, r = e.toString();
      r = r.replace(/\r\n?/mg, `
`);
      let n;
      for (;(n = nc.exec(r)) != null; ) {
        let i = n[1], o = n[2] || "";
        o = o.trim();
        let s = o[0];
        o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
      }
      return t;
    }
    function oc(e) {
      let t = ss(e), r = Q.configDotenv({ path: t });
      if (!r.parsed) {
        let s = new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);
        throw s.code = "MISSING_DATA", s;
      }
      let n = os(e).split(","), i = n.length, o;
      for (let s = 0;s < i; s++)
        try {
          let a = n[s].trim(), l = lc(r, a);
          o = Q.decrypt(l.ciphertext, l.key);
          break;
        } catch (a) {
          if (s + 1 >= i)
            throw a;
        }
      return Q.parse(o);
    }
    function sc(e) {
      console.log(`[dotenv@${gi}][INFO] ${e}`);
    }
    function ac(e) {
      console.log(`[dotenv@${gi}][WARN] ${e}`);
    }
    function Wr(e) {
      console.log(`[dotenv@${gi}][DEBUG] ${e}`);
    }
    function os(e) {
      return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
    }
    function lc(e, t) {
      let r;
      try {
        r = new URL(t);
      } catch (a) {
        if (a.code === "ERR_INVALID_URL") {
          let l = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          throw l.code = "INVALID_DOTENV_KEY", l;
        }
        throw a;
      }
      let n = r.password;
      if (!n) {
        let a = new Error("INVALID_DOTENV_KEY: Missing key part");
        throw a.code = "INVALID_DOTENV_KEY", a;
      }
      let i = r.searchParams.get("environment");
      if (!i) {
        let a = new Error("INVALID_DOTENV_KEY: Missing environment part");
        throw a.code = "INVALID_DOTENV_KEY", a;
      }
      let o = `DOTENV_VAULT_${i.toUpperCase()}`, s = e.parsed[o];
      if (!s) {
        let a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
        throw a.code = "NOT_FOUND_DOTENV_ENVIRONMENT", a;
      }
      return { ciphertext: s, key: n };
    }
    function ss(e) {
      let t = null;
      if (e && e.path && e.path.length > 0)
        if (Array.isArray(e.path))
          for (let r of e.path)
            mi.existsSync(r) && (t = r.endsWith(".vault") ? r : `${r}.vault`);
        else
          t = e.path.endsWith(".vault") ? e.path : `${e.path}.vault`;
      else
        t = fi.resolve(process.cwd(), ".env.vault");
      return mi.existsSync(t) ? t : null;
    }
    function is(e) {
      return e[0] === "~" ? fi.join(ec.homedir(), e.slice(1)) : e;
    }
    function uc(e) {
      sc("Loading env from encrypted .env.vault");
      let t = Q._parseVault(e), r = process.env;
      return e && e.processEnv != null && (r = e.processEnv), Q.populate(r, t, e), { parsed: t };
    }
    function cc(e) {
      let t = fi.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug);
      e && e.encoding ? r = e.encoding : n && Wr("No encoding is specified. UTF-8 is used by default");
      let i = [t];
      if (e && e.path)
        if (!Array.isArray(e.path))
          i = [is(e.path)];
        else {
          i = [];
          for (let l of e.path)
            i.push(is(l));
        }
      let o, s = {};
      for (let l of i)
        try {
          let u = Q.parse(mi.readFileSync(l, { encoding: r }));
          Q.populate(s, u, e);
        } catch (u) {
          n && Wr(`Failed to load ${l} ${u.message}`), o = u;
        }
      let a = process.env;
      return e && e.processEnv != null && (a = e.processEnv), Q.populate(a, s, e), o ? { parsed: s, error: o } : { parsed: s };
    }
    function pc(e) {
      if (os(e).length === 0)
        return Q.configDotenv(e);
      let t = ss(e);
      return t ? Q._configVault(e) : (ac(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`), Q.configDotenv(e));
    }
    function dc(e, t) {
      let r = Buffer.from(t.slice(-64), "hex"), n = Buffer.from(e, "base64"), i = n.subarray(0, 12), o = n.subarray(-16);
      n = n.subarray(12, -16);
      try {
        let s = tc.createDecipheriv("aes-256-gcm", r, i);
        return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
      } catch (s) {
        let a = s instanceof RangeError, l = s.message === "Invalid key length", u = s.message === "Unsupported state or unable to authenticate data";
        if (a || l) {
          let c = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          throw c.code = "INVALID_DOTENV_KEY", c;
        } else if (u) {
          let c = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          throw c.code = "DECRYPTION_FAILED", c;
        } else
          throw s;
      }
    }
    function mc(e, t, r = {}) {
      let n = !!(r && r.debug), i = !!(r && r.override);
      if (typeof t != "object") {
        let o = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        throw o.code = "OBJECT_REQUIRED", o;
      }
      for (let o of Object.keys(t))
        Object.prototype.hasOwnProperty.call(e, o) ? (i === true && (e[o] = t[o]), n && Wr(i === true ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e[o] = t[o];
    }
    var Q = { configDotenv: cc, _configVault: uc, _parseVault: oc, config: pc, decrypt: dc, parse: ic, populate: mc };
    Le.exports.configDotenv = Q.configDotenv;
    Le.exports._configVault = Q._configVault;
    Le.exports._parseVault = Q._parseVault;
    Le.exports.config = Q.config;
    Le.exports.decrypt = Q.decrypt;
    Le.exports.parse = Q.parse;
    Le.exports.populate = Q.populate;
    Le.exports = Q;
  });
  var ms = Z((ig, ds) => {
    ds.exports = (e) => {
      let t = e.match(/^[ \t]*(?=\S)/gm);
      return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
    };
  });
  var gs = Z((og, fs) => {
    var yc = ms();
    fs.exports = (e) => {
      let t = yc(e);
      if (t === 0)
        return e;
      let r = new RegExp(`^[ \\t]{${t}}`, "gm");
      return e.replace(r, "");
    };
  });
  var bi = Z((pg, hs) => {
    hs.exports = (e, t = 1, r) => {
      if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
      if (typeof t != "number")
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
      if (typeof r.indent != "string")
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
      if (t === 0)
        return e;
      let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return e.replace(n, r.indent.repeat(t));
    };
  });
  var ws = Z((fg, bs) => {
    bs.exports = ({ onlyFirst: e = false } = {}) => {
      let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t, e ? undefined : "g");
    };
  });
  var Pi = Z((gg, xs) => {
    var Rc = ws();
    xs.exports = (e) => typeof e == "string" ? e.replace(Rc(), "") : e;
  });
  var vs = Z((Eg, zr) => {
    zr.exports = (e = {}) => {
      let t;
      if (e.repoUrl)
        t = e.repoUrl;
      else if (e.user && e.repo)
        t = `https://github.com/${e.user}/${e.repo}`;
      else
        throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
      let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
      for (let i of n) {
        let o = e[i];
        if (o !== undefined) {
          if (i === "labels" || i === "projects") {
            if (!Array.isArray(o))
              throw new TypeError(`The \`${i}\` option should be an array`);
            o = o.join(",");
          }
          r.searchParams.set(i, o);
        }
      }
      return r.toString();
    };
    zr.exports.default = zr.exports;
  });
  var _i = Z((Sh, Qs) => {
    Qs.exports = function() {
      function e(t, r, n, i, o) {
        return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
      }
      return function(t, r) {
        if (t === r)
          return 0;
        if (t.length > r.length) {
          var n = t;
          t = r, r = n;
        }
        for (var i = t.length, o = r.length;i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
          i--, o--;
        for (var s = 0;s < i && t.charCodeAt(s) === r.charCodeAt(s); )
          s++;
        if (i -= s, o -= s, i === 0 || o < 3)
          return o;
        var a = 0, l, u, c, p, d, f, g, h, O, P, C, R, k = [];
        for (l = 0;l < i; l++)
          k.push(l + 1), k.push(t.charCodeAt(s + l));
        for (var A = k.length - 1;a < o - 3; )
          for (O = r.charCodeAt(s + (u = a)), P = r.charCodeAt(s + (c = a + 1)), C = r.charCodeAt(s + (p = a + 2)), R = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0;l < A; l += 2)
            g = k[l], h = k[l + 1], u = e(g, u, c, O, h), c = e(u, c, p, P, h), p = e(c, p, d, C, h), f = e(p, d, f, R, h), k[l] = f, d = p, p = c, c = u, u = g;
        for (;a < o; )
          for (O = r.charCodeAt(s + (u = a)), f = ++a, l = 0;l < A; l += 2)
            g = k[l], k[l] = f = e(g, u, f, O, k[l + 1]), u = g;
        return f;
      };
    }();
  });
  var Bm = {};
  Bt(Bm, { Debug: () => Jn, Decimal: () => ve, Extensions: () => Bn, MetricsClient: () => Ot, PrismaClientInitializationError: () => T, PrismaClientKnownRequestError: () => ee, PrismaClientRustPanicError: () => ce, PrismaClientUnknownRequestError: () => B, PrismaClientValidationError: () => te, Public: () => Un, Sql: () => ae, defineDmmfProperty: () => ga, deserializeJsonResponse: () => bt, deserializeRawResult: () => qn, dmmfToRuntimeDataModel: () => fa, empty: () => ba, getPrismaClient: () => Xl, getRuntime: () => In, join: () => Ea, makeStrictEnum: () => eu, makeTypedQueryFactory: () => ha, objectEnumValues: () => yn, raw: () => Gi, serializeJsonQuery: () => Pn, skip: () => vn, sqltag: () => Ji, warnEnvConflicts: () => tu, warnOnce: () => tr });
  module.exports = au(Bm);
  var Bn = {};
  Bt(Bn, { defineExtension: () => xo, getExtensionContext: () => vo });
  function xo(e) {
    return typeof e == "function" ? e : (t) => t.$extends(e);
  }
  function vo(e) {
    return e;
  }
  var Un = {};
  Bt(Un, { validator: () => Po });
  function Po(...e) {
    return (t) => t;
  }
  var Mr = {};
  Bt(Mr, { $: () => Ao, bgBlack: () => yu, bgBlue: () => xu, bgCyan: () => Pu, bgGreen: () => bu, bgMagenta: () => vu, bgRed: () => Eu, bgWhite: () => Tu, bgYellow: () => wu, black: () => mu, blue: () => rt, bold: () => W, cyan: () => _e, dim: () => ke, gray: () => Ut, green: () => Ve, grey: () => hu, hidden: () => pu, inverse: () => cu, italic: () => uu, magenta: () => fu, red: () => de, reset: () => lu, strikethrough: () => du, underline: () => X, white: () => gu, yellow: () => De });
  var Qn;
  var To;
  var Ro;
  var Co;
  var So = true;
  typeof process < "u" && ({ FORCE_COLOR: Qn, NODE_DISABLE_COLORS: To, NO_COLOR: Ro, TERM: Co } = process.env || {}, So = process.stdout && process.stdout.isTTY);
  var Ao = { enabled: !To && Ro == null && Co !== "dumb" && (Qn != null && Qn !== "0" || So) };
  function $(e, t) {
    let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
    return function(o) {
      return !Ao.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
    };
  }
  var lu = $(0, 0);
  var W = $(1, 22);
  var ke = $(2, 22);
  var uu = $(3, 23);
  var X = $(4, 24);
  var cu = $(7, 27);
  var pu = $(8, 28);
  var du = $(9, 29);
  var mu = $(30, 39);
  var de = $(31, 39);
  var Ve = $(32, 39);
  var De = $(33, 39);
  var rt = $(34, 39);
  var fu = $(35, 39);
  var _e = $(36, 39);
  var gu = $(37, 39);
  var Ut = $(90, 39);
  var hu = $(90, 39);
  var yu = $(40, 49);
  var Eu = $(41, 49);
  var bu = $(42, 49);
  var wu = $(43, 49);
  var xu = $(44, 49);
  var vu = $(45, 49);
  var Pu = $(46, 49);
  var Tu = $(47, 49);
  var Ru = 100;
  var Io = ["green", "yellow", "blue", "magenta", "cyan", "red"];
  var Qt = [];
  var Oo = Date.now();
  var Cu = 0;
  var Gn = typeof process < "u" ? process.env : {};
  globalThis.DEBUG ??= Gn.DEBUG ?? "";
  globalThis.DEBUG_COLORS ??= Gn.DEBUG_COLORS ? Gn.DEBUG_COLORS === "true" : true;
  var Gt = { enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  }, disable() {
    let e = globalThis.DEBUG;
    return globalThis.DEBUG = "", e;
  }, enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
    return r && !n;
  }, log: (...e) => {
    let [t, r, ...n] = e;
    (console.warn ?? console.log)(`${t} ${r}`, ...n);
  }, formatters: {} };
  function Su(e) {
    let t = { color: Io[Cu++ % Io.length], enabled: Gt.enabled(e), namespace: e, log: Gt.log, extend: () => {
    } }, r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (n.length !== 0 && Qt.push([o, ...n]), Qt.length > Ru && Qt.shift(), Gt.enabled(o) || i) {
        let l = n.map((c) => typeof c == "string" ? c : Au(c)), u = `+${Date.now() - Oo}ms`;
        Oo = Date.now(), globalThis.DEBUG_COLORS ? a(Mr[s](W(o)), ...l, Mr[s](u)) : a(o, ...l, u);
      }
    };
    return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => t[i] = o });
  }
  var Jn = new Proxy(Su, { get: (e, t) => Gt[t], set: (e, t, r) => Gt[t] = r });
  function Au(e, t = 2) {
    let r = new Set;
    return JSON.stringify(e, (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i))
          return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint")
        return i.toString();
      return i;
    }, t);
  }
  function ko(e = 7500) {
    let t = Qt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
    return t.length < e ? t : t.slice(-e);
  }
  function Do() {
    Qt.length = 0;
  }
  var F = Jn;
  var _o = D(__require("fs"));
  function Hn() {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && _o.default.existsSync(e)) && process.arch === "ia32")
      throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
  }
  var Wn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
  var $r = "libquery_engine";
  function qr(e, t) {
    let r = t === "url";
    return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${$r}.dylib.node` : `${$r}-${e}.dylib.node` : r ? `${$r}.so.node` : `${$r}-${e}.so.node`;
  }
  var Mo = D(__require("child_process"));
  var Xn = D(__require("fs/promises"));
  var Qr = D(__require("os"));
  var Ne = Symbol.for("@ts-pattern/matcher");
  var Iu = Symbol.for("@ts-pattern/isVariadic");
  var jr = "@ts-pattern/anonymous-select-key";
  var Kn = (e) => !!(e && typeof e == "object");
  var Vr = (e) => e && !!e[Ne];
  var we = (e, t, r) => {
    if (Vr(e)) {
      let n = e[Ne](), { matched: i, selections: o } = n.match(t);
      return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
    }
    if (Kn(e)) {
      if (!Kn(t))
        return false;
      if (Array.isArray(e)) {
        if (!Array.isArray(t))
          return false;
        let n = [], i = [], o = [];
        for (let s of e.keys()) {
          let a = e[s];
          Vr(a) && a[Iu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
        }
        if (o.length) {
          if (o.length > 1)
            throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
          if (t.length < n.length + i.length)
            return false;
          let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
          return n.every((u, c) => we(u, s[c], r)) && i.every((u, c) => we(u, a[c], r)) && (o.length === 0 || we(o[0], l, r));
        }
        return e.length === t.length && e.every((s, a) => we(s, t[a], r));
      }
      return Reflect.ownKeys(e).every((n) => {
        let i = e[n];
        return ((n in t) || Vr(o = i) && o[Ne]().matcherType === "optional") && we(i, t[n], r);
        var o;
      });
    }
    return Object.is(t, e);
  };
  var Ge = (e) => {
    var t, r, n;
    return Kn(e) ? Vr(e) ? (t = (r = (n = e[Ne]()).getSelectionKeys) == null ? undefined : r.call(n)) != null ? t : [] : Array.isArray(e) ? Jt(e, Ge) : Jt(Object.values(e), Ge) : [];
  };
  var Jt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
  function me(e) {
    return Object.assign(e, { optional: () => Ou(e), and: (t) => j(e, t), or: (t) => ku(e, t), select: (t) => t === undefined ? No(e) : No(t, e) });
  }
  function Ou(e) {
    return me({ [Ne]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return t === undefined ? (Ge(e).forEach((i) => n(i, undefined)), { matched: true, selections: r }) : { matched: we(e, t, n), selections: r };
    }, getSelectionKeys: () => Ge(e), matcherType: "optional" }) });
  }
  function j(...e) {
    return me({ [Ne]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return { matched: e.every((i) => we(i, t, n)), selections: r };
    }, getSelectionKeys: () => Jt(e, Ge), matcherType: "and" }) });
  }
  function ku(...e) {
    return me({ [Ne]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return Jt(e, Ge).forEach((i) => n(i, undefined)), { matched: e.some((i) => we(i, t, n)), selections: r };
    }, getSelectionKeys: () => Jt(e, Ge), matcherType: "or" }) });
  }
  function I(e) {
    return { [Ne]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
  }
  function No(...e) {
    let t = typeof e[0] == "string" ? e[0] : undefined, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? undefined : e[0];
    return me({ [Ne]: () => ({ match: (n) => {
      let i = { [t ?? jr]: n };
      return { matched: r === undefined || we(r, n, (o, s) => {
        i[o] = s;
      }), selections: i };
    }, getSelectionKeys: () => [t ?? jr].concat(r === undefined ? [] : Ge(r)) }) });
  }
  function Ee(e) {
    return typeof e == "number";
  }
  function je(e) {
    return typeof e == "string";
  }
  function Be(e) {
    return typeof e == "bigint";
  }
  var tf = me(I(function(e) {
    return true;
  }));
  var Ue = (e) => Object.assign(me(e), { startsWith: (t) => {
    return Ue(j(e, (r = t, I((n) => je(n) && n.startsWith(r)))));
    var r;
  }, endsWith: (t) => {
    return Ue(j(e, (r = t, I((n) => je(n) && n.endsWith(r)))));
    var r;
  }, minLength: (t) => Ue(j(e, ((r) => I((n) => je(n) && n.length >= r))(t))), length: (t) => Ue(j(e, ((r) => I((n) => je(n) && n.length === r))(t))), maxLength: (t) => Ue(j(e, ((r) => I((n) => je(n) && n.length <= r))(t))), includes: (t) => {
    return Ue(j(e, (r = t, I((n) => je(n) && n.includes(r)))));
    var r;
  }, regex: (t) => {
    return Ue(j(e, (r = t, I((n) => je(n) && !!n.match(r)))));
    var r;
  } });
  var rf = Ue(I(je));
  var be = (e) => Object.assign(me(e), { between: (t, r) => be(j(e, ((n, i) => I((o) => Ee(o) && n <= o && i >= o))(t, r))), lt: (t) => be(j(e, ((r) => I((n) => Ee(n) && n < r))(t))), gt: (t) => be(j(e, ((r) => I((n) => Ee(n) && n > r))(t))), lte: (t) => be(j(e, ((r) => I((n) => Ee(n) && n <= r))(t))), gte: (t) => be(j(e, ((r) => I((n) => Ee(n) && n >= r))(t))), int: () => be(j(e, I((t) => Ee(t) && Number.isInteger(t)))), finite: () => be(j(e, I((t) => Ee(t) && Number.isFinite(t)))), positive: () => be(j(e, I((t) => Ee(t) && t > 0))), negative: () => be(j(e, I((t) => Ee(t) && t < 0))) });
  var nf = be(I(Ee));
  var Qe = (e) => Object.assign(me(e), { between: (t, r) => Qe(j(e, ((n, i) => I((o) => Be(o) && n <= o && i >= o))(t, r))), lt: (t) => Qe(j(e, ((r) => I((n) => Be(n) && n < r))(t))), gt: (t) => Qe(j(e, ((r) => I((n) => Be(n) && n > r))(t))), lte: (t) => Qe(j(e, ((r) => I((n) => Be(n) && n <= r))(t))), gte: (t) => Qe(j(e, ((r) => I((n) => Be(n) && n >= r))(t))), positive: () => Qe(j(e, I((t) => Be(t) && t > 0))), negative: () => Qe(j(e, I((t) => Be(t) && t < 0))) });
  var of = Qe(I(Be));
  var sf = me(I(function(e) {
    return typeof e == "boolean";
  }));
  var af = me(I(function(e) {
    return typeof e == "symbol";
  }));
  var lf = me(I(function(e) {
    return e == null;
  }));
  var uf = me(I(function(e) {
    return e != null;
  }));
  var Yn = class extends Error {
    constructor(t) {
      let r;
      try {
        r = JSON.stringify(t);
      } catch {
        r = t;
      }
      super(`Pattern matching error: no pattern matches value ${r}`), this.input = undefined, this.input = t;
    }
  };
  var zn = { matched: false, value: undefined };
  function dt(e) {
    return new Zn(e, zn);
  }
  var Zn = class e {
    constructor(t, r) {
      this.input = undefined, this.state = undefined, this.input = t, this.state = r;
    }
    with(...t) {
      if (this.state.matched)
        return this;
      let r = t[t.length - 1], n = [t[0]], i;
      t.length === 3 && typeof t[1] == "function" ? i = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
      let o = false, s = {}, a = (u, c) => {
        o = true, s[u] = c;
      }, l = !n.some((u) => we(u, this.input, a)) || i && !i(this.input) ? zn : { matched: true, value: r(o ? jr in s ? s[jr] : s : this.input, this.input) };
      return new e(this.input, l);
    }
    when(t, r) {
      if (this.state.matched)
        return this;
      let n = !!t(this.input);
      return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : zn);
    }
    otherwise(t) {
      return this.state.matched ? this.state.value : t(this.input);
    }
    exhaustive() {
      if (this.state.matched)
        return this.state.value;
      throw new Yn(this.input);
    }
    run() {
      return this.exhaustive();
    }
    returnType() {
      return this;
    }
  };
  var $o = __require("util");
  var Du = { warn: De("prisma:warn") };
  var _u = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  function Br(e, ...t) {
    _u.warn() && console.warn(`${Du.warn} ${e}`, ...t);
  }
  var Nu = (0, $o.promisify)(Mo.default.exec);
  var ne = F("prisma:get-platform");
  var Lu = ["1.0.x", "1.1.x", "3.0.x"];
  async function qo() {
    let e = Qr.default.platform(), t = process.arch;
    if (e === "freebsd") {
      let s = await Gr("freebsd-version");
      if (s && s.trim().length > 0) {
        let l = /^(\d+)\.?/.exec(s);
        if (l)
          return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
      }
    }
    if (e !== "linux")
      return { platform: e, arch: t };
    let r = await Mu(), n = await Gu(), i = qu({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await Vu(i);
    return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
  }
  function Fu(e) {
    let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = dt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: undefined, familyDistro: undefined, originalDistro: l }));
    return ne(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
  }
  async function Mu() {
    let e = "/etc/os-release";
    try {
      let t = await Xn.default.readFile(e, { encoding: "utf-8" });
      return Fu(t);
    } catch {
      return { targetDistro: undefined, familyDistro: undefined, originalDistro: undefined };
    }
  }
  function $u(e) {
    let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (t) {
      let r = `${t[1]}.x`;
      return Vo(r);
    }
  }
  function Lo(e) {
    let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (t) {
      let r = `${t[1]}${t[2] ?? ".0"}.x`;
      return Vo(r);
    }
  }
  function Vo(e) {
    let t = (() => {
      if (Bo(e))
        return e;
      let r = e.split(".");
      return r[1] = "0", r.join(".");
    })();
    if (Lu.includes(t))
      return t;
  }
  function qu(e) {
    return dt(e).with({ familyDistro: "musl" }, () => (ne('Trying platform-specific paths for "alpine"'), ["/lib", "/usr/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (ne('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ne('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (ne(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
  }
  async function Vu(e) {
    let t = 'grep -v "libssl.so.0"', r = await Fo(e);
    if (r) {
      ne(`Found libssl.so file using platform-specific paths: ${r}`);
      let o = Lo(r);
      if (ne(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "libssl-specific-path" };
    }
    ne('Falling back to "ldconfig" and other generic paths');
    let n = await Gr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
    if (n || (n = await Fo(["/lib64", "/usr/lib64", "/lib", "/usr/lib"])), n) {
      ne(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
      let o = Lo(n);
      if (ne(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "ldconfig" };
    }
    let i = await Gr("openssl version -v");
    if (i) {
      ne(`Found openssl binary with version: ${i}`);
      let o = $u(i);
      if (ne(`The parsed openssl version is: ${o}`), o)
        return { libssl: o, strategy: "openssl-binary" };
    }
    return ne("Couldn't find any version of libssl or OpenSSL in the system"), {};
  }
  async function Fo(e) {
    for (let t of e) {
      let r = await ju(t);
      if (r)
        return r;
    }
  }
  async function ju(e) {
    try {
      return (await Xn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
    } catch (t) {
      if (t.code === "ENOENT")
        return;
      throw t;
    }
  }
  async function nt() {
    let { binaryTarget: e } = await jo();
    return e;
  }
  function Bu(e) {
    return e.binaryTarget !== undefined;
  }
  async function ei() {
    let { memoized: e, ...t } = await jo();
    return t;
  }
  var Ur = {};
  async function jo() {
    if (Bu(Ur))
      return Promise.resolve({ ...Ur, memoized: true });
    let e = await qo(), t = Uu(e);
    return Ur = { ...e, binaryTarget: t }, { ...Ur, memoized: false };
  }
  function Uu(e) {
    let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
    t === "linux" && !["x64", "arm64"].includes(r) && Br(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
    let l = "1.1.x";
    if (t === "linux" && i === undefined) {
      let c = dt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
      Br(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (t === "linux" && o === undefined && ne(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t === "darwin" && r === "arm64")
      return "darwin-arm64";
    if (t === "darwin")
      return "darwin";
    if (t === "win32")
      return "windows";
    if (t === "freebsd")
      return o;
    if (t === "openbsd")
      return "openbsd";
    if (t === "netbsd")
      return "netbsd";
    if (t === "linux" && o === "nixos")
      return "linux-nixos";
    if (t === "linux" && r === "arm64")
      return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
    if (t === "linux" && r === "arm")
      return `linux-arm-openssl-${i || l}`;
    if (t === "linux" && o === "musl") {
      let c = "linux-musl";
      return !i || Bo(i) ? c : `${c}-openssl-${i}`;
    }
    return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && Br(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
  }
  async function Qu(e) {
    try {
      return await e();
    } catch {
      return;
    }
  }
  function Gr(e) {
    return Qu(async () => {
      let t = await Nu(e);
      return ne(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
    });
  }
  async function Gu() {
    return typeof Qr.default.machine == "function" ? Qr.default.machine() : (await Gr("uname -m"))?.trim();
  }
  function Bo(e) {
    return e.startsWith("1.");
  }
  var es = D(Xo());
  function ai(e) {
    return (0, es.default)(e, e, { fallback: X });
  }
  var zu = D(ui());
  var q = D(__require("path"));
  var Zu = D(ui());
  var jf = F("prisma:engines");
  function ts() {
    return q.default.join(__dirname, "../");
  }
  var Bf = "libquery-engine";
  q.default.join(__dirname, "../query-engine-darwin");
  q.default.join(__dirname, "../query-engine-darwin-arm64");
  q.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
  q.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
  q.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
  q.default.join(__dirname, "../query-engine-linux-static-x64");
  q.default.join(__dirname, "../query-engine-linux-static-arm64");
  q.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
  q.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
  q.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
  q.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
  q.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
  q.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
  q.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
  q.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
  q.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
  q.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
  q.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
  q.default.join(__dirname, "../query_engine-windows.dll.node");
  var ci = D(__require("fs"));
  var rs = F("chmodPlusX");
  function pi(e) {
    if (process.platform === "win32")
      return;
    let t = ci.default.statSync(e), r = t.mode | 64 | 8 | 1;
    if (t.mode === r) {
      rs(`Execution permissions of ${e} are fine`);
      return;
    }
    let n = r.toString(8).slice(-3);
    rs(`Have to call chmodPlusX on ${e}`), ci.default.chmodSync(e, n);
  }
  function di(e) {
    let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${ai("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${ke(e.id)}\`).`, s = dt({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
      let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
      return `${r("libssl")}. Please install ${a} and try again.`;
    }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
    return `${o}
${s}

Details: ${t.message}`;
  }
  var yi = D(as());
  var Kr = D(__require("fs"));
  var gt = D(__require("path"));
  function ls(e) {
    let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
      if (!a)
        return o;
      let l = a[1], u, c;
      if (l === "\\")
        c = a[0], u = c.replace("\\$", "$");
      else {
        let p = a[2];
        c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
      }
      return o.replace(c, u);
    }, n) ?? n;
    for (let n in e.parsed) {
      let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
      e.parsed[n] = r(i);
    }
    for (let n in e.parsed)
      t[n] = e.parsed[n];
    return e;
  }
  var hi = F("prisma:tryLoadEnv");
  function Kt({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
    let n = us(e);
    r.conflictCheck !== "none" && fc(n, t, r.conflictCheck);
    let i = null;
    return cs(n?.path, t) || (i = us(t)), !n && !i && hi("No Environment variables loaded"), i?.dotenvResult.error ? console.error(de(W("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
  }
  function fc(e, t, r) {
    let n = e?.dotenvResult.parsed, i = !cs(e?.path, t);
    if (n && t && i && Kr.default.existsSync(t)) {
      let o = yi.default.parse(Kr.default.readFileSync(t)), s = [];
      for (let a in o)
        n[a] === o[a] && s.push(a);
      if (s.length > 0) {
        let a = gt.default.relative(process.cwd(), e.path), l = gt.default.relative(process.cwd(), t);
        if (r === "error") {
          let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${W(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
          throw new Error(u);
        } else if (r === "warn") {
          let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => W(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
          console.warn(`${De("warn(prisma)")} ${u}`);
        }
      }
    }
  }
  function us(e) {
    if (gc(e)) {
      hi(`Environment variables loaded from ${e}`);
      let t = yi.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : undefined });
      return { dotenvResult: ls(t), message: ke(`Environment variables loaded from ${gt.default.relative(process.cwd(), e)}`), path: e };
    } else
      hi(`Environment variables not found at ${e}`);
    return null;
  }
  function cs(e, t) {
    return e && t && gt.default.resolve(e) === gt.default.resolve(t);
  }
  function gc(e) {
    return !!(e && Kr.default.existsSync(e));
  }
  var ps = "library";
  function Yt(e) {
    let t = hc();
    return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : ps);
  }
  function hc() {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : undefined;
  }
  var zt;
  ((t) => {
    let e;
    ((A) => (A.findUnique = "findUnique", A.findUniqueOrThrow = "findUniqueOrThrow", A.findFirst = "findFirst", A.findFirstOrThrow = "findFirstOrThrow", A.findMany = "findMany", A.create = "create", A.createMany = "createMany", A.createManyAndReturn = "createManyAndReturn", A.update = "update", A.updateMany = "updateMany", A.updateManyAndReturn = "updateManyAndReturn", A.upsert = "upsert", A.delete = "delete", A.deleteMany = "deleteMany", A.groupBy = "groupBy", A.count = "count", A.aggregate = "aggregate", A.findRaw = "findRaw", A.aggregateRaw = "aggregateRaw"))(e = t.ModelAction ||= {});
  })(zt ||= {});
  var Zt = D(__require("path"));
  function Ei(e) {
    return Zt.default.sep === Zt.default.posix.sep ? e : e.split(Zt.default.sep).join(Zt.default.posix.sep);
  }
  var ys = D(bi());
  function xi(e) {
    return String(new wi(e));
  }
  var wi = class {
    constructor(t) {
      this.config = t;
    }
    toString() {
      let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Ec(t.binaryTargets) }));
      return `generator ${t.name} {
${(0, ys.default)(bc(n), 2)}
}`;
    }
  };
  function Ec(e) {
    let t;
    if (e.length > 0) {
      let r = e.find((n) => n.fromEnvVar !== null);
      r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
    } else
      t = undefined;
    return t;
  }
  function bc(e) {
    let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
    return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${wc(n)}`).join(`
`);
  }
  function wc(e) {
    return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
  }
  var er = {};
  Bt(er, { error: () => Pc, info: () => vc, log: () => xc, query: () => Tc, should: () => Es, tags: () => Xt, warn: () => vi });
  var Xt = { error: de("prisma:error"), warn: De("prisma:warn"), info: _e("prisma:info"), query: rt("prisma:query") };
  var Es = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  function xc(...e) {
    console.log(...e);
  }
  function vi(e, ...t) {
    Es.warn() && console.warn(`${Xt.warn} ${e}`, ...t);
  }
  function vc(e, ...t) {
    console.info(`${Xt.info} ${e}`, ...t);
  }
  function Pc(e, ...t) {
    console.error(`${Xt.error} ${e}`, ...t);
  }
  function Tc(e, ...t) {
    console.log(`${Xt.query} ${e}`, ...t);
  }
  function Yr(e, t) {
    if (!e)
      throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
  }
  function Fe(e, t) {
    throw new Error(t);
  }
  function Ti(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  var Ri = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
  function ht(e, t) {
    let r = {};
    for (let n of Object.keys(e))
      r[n] = t(e[n], n);
    return r;
  }
  function Ci(e, t) {
    if (e.length === 0)
      return;
    let r = e[0];
    for (let n = 1;n < e.length; n++)
      t(r, e[n]) < 0 && (r = e[n]);
    return r;
  }
  function w(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  }
  var Ps = new Set;
  var tr = (e, t, ...r) => {
    Ps.has(e) || (Ps.add(e), vi(t, ...r));
  };
  var T = class e extends Error {
    constructor(t, r, n) {
      super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  w(T, "PrismaClientInitializationError");
  var ee = class extends Error {
    constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
      super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  w(ee, "PrismaClientKnownRequestError");
  var ce = class extends Error {
    constructor(t, r) {
      super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  w(ce, "PrismaClientRustPanicError");
  var B = class extends Error {
    constructor(t, { clientVersion: r, batchRequestIdx: n }) {
      super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  w(B, "PrismaClientUnknownRequestError");
  var te = class extends Error {
    constructor(r, { clientVersion: n }) {
      super(r);
      this.name = "PrismaClientValidationError";
      this.clientVersion = n;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  w(te, "PrismaClientValidationError");
  var yt = 9000000000000000;
  var Ye = 1e9;
  var Si = "0123456789abcdef";
  var en = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var tn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var Ai = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -yt, maxE: yt, crypto: false };
  var Ss;
  var Me;
  var b = true;
  var nn = "[DecimalError] ";
  var Ke = nn + "Invalid argument: ";
  var As = nn + "Precision limit exceeded";
  var Is = nn + "crypto unavailable";
  var Os = "[object Decimal]";
  var re = Math.floor;
  var G = Math.pow;
  var Cc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var Sc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var Ac = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var ks = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var he = 1e7;
  var E = 7;
  var Ic = 9007199254740991;
  var Oc = en.length - 1;
  var Ii = tn.length - 1;
  var m = { toStringTag: Os };
  m.absoluteValue = m.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), y(e);
  };
  m.ceil = function() {
    return y(new this.constructor(this), this.e + 1, 2);
  };
  m.clampedTo = m.clamp = function(e, t) {
    var r, n = this, i = n.constructor;
    if (e = new i(e), t = new i(t), !e.s || !t.s)
      return new i(NaN);
    if (e.gt(t))
      throw Error(Ke + t);
    return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
  };
  m.comparedTo = m.cmp = function(e) {
    var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
    if (!s || !a)
      return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0])
      return s[0] ? l : a[0] ? -u : 0;
    if (l !== u)
      return l;
    if (o.e !== e.e)
      return o.e > e.e ^ l < 0 ? 1 : -1;
    for (n = s.length, i = a.length, t = 0, r = n < i ? n : i;t < r; ++t)
      if (s[t] !== a[t])
        return s[t] > a[t] ^ l < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
  };
  m.cosine = m.cos = function() {
    var e, t, r = this, n = r.constructor;
    return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + E, n.rounding = 1, r = kc(n, Fs(n, r)), n.precision = e, n.rounding = t, y(Me == 2 || Me == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
  };
  m.cubeRoot = m.cbrt = function() {
    var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
    if (!c.isFinite() || c.isZero())
      return new p(c);
    for (b = false, o = c.s * G(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = K(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = G(r, 1 / 3), e = re((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3;; )
      if (a = n, l = a.times(a).times(a), u = l.plus(c), n = M(u.plus(c).times(a), u.plus(l), s + 2, 1), K(a.d).slice(0, s) === (r = K(n.d)).slice(0, s))
        if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
          if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
            n = a;
            break;
          }
          s += 4, i = 1;
        } else {
          (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
          break;
        }
    return b = true, y(n, e, p.rounding, t);
  };
  m.decimalPlaces = m.dp = function() {
    var e, t = this.d, r = NaN;
    if (t) {
      if (e = t.length - 1, r = (e - re(this.e / E)) * E, e = t[e], e)
        for (;e % 10 == 0; e /= 10)
          r--;
      r < 0 && (r = 0);
    }
    return r;
  };
  m.dividedBy = m.div = function(e) {
    return M(this, new this.constructor(e));
  };
  m.dividedToIntegerBy = m.divToInt = function(e) {
    var t = this, r = t.constructor;
    return y(M(t, new r(e), 0, 1, 1), r.precision, r.rounding);
  };
  m.equals = m.eq = function(e) {
    return this.cmp(e) === 0;
  };
  m.floor = function() {
    return y(new this.constructor(this), this.e + 1, 3);
  };
  m.greaterThan = m.gt = function(e) {
    return this.cmp(e) > 0;
  };
  m.greaterThanOrEqualTo = m.gte = function(e) {
    var t = this.cmp(e);
    return t == 1 || t === 0;
  };
  m.hyperbolicCosine = m.cosh = function() {
    var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite())
      return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero())
      return a;
    r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / sn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = Et(s, 1, o.times(t), new s(1), true);
    for (var l, u = e, c = new s(8);u--; )
      l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
    return y(o, s.precision = r, s.rounding = n, true);
  };
  m.hyperbolicSine = m.sinh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    if (!i.isFinite() || i.isZero())
      return new o(i);
    if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
      i = Et(o, 2, i, i, true);
    else {
      e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / sn(5, e)), i = Et(o, 2, i, i, true);
      for (var s, a = new o(5), l = new o(16), u = new o(20);e--; )
        s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
    }
    return o.precision = t, o.rounding = r, y(i, t, r, true);
  };
  m.hyperbolicTangent = m.tanh = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, M(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
  };
  m.inverseCosine = m.acos = function() {
    var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
    return n !== -1 ? n === 0 ? t.isNeg() ? ge(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? ge(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = ge(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
  };
  m.inverseHyperbolicCosine = m.acosh = function() {
    var e, t, r = this, n = r.constructor;
    return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, b = false, r = r.times(r).minus(1).sqrt().plus(r), b = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
  };
  m.inverseHyperbolicSine = m.asinh = function() {
    var e, t, r = this, n = r.constructor;
    return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, b = false, r = r.times(r).plus(1).sqrt().plus(r), b = true, n.precision = e, n.rounding = t, r.ln());
  };
  m.inverseHyperbolicTangent = m.atanh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, t, true) : (o.precision = r = n - i.e, i = M(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
  };
  m.inverseSine = m.asin = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ge(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
  };
  m.inverseTangent = m.atan = function() {
    var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
    if (u.isFinite()) {
      if (u.isZero())
        return new c(u);
      if (u.abs().eq(1) && p + 4 <= Ii)
        return s = ge(c, p + 4, d).times(0.25), s.s = u.s, s;
    } else {
      if (!u.s)
        return new c(NaN);
      if (p + 4 <= Ii)
        return s = ge(c, p + 4, d).times(0.5), s.s = u.s, s;
    }
    for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / E + 2 | 0), e = r;e; --e)
      u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for (b = false, t = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u;e !== -1; )
      if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== undefined)
        for (e = t;s.d[e] === o.d[e] && e--; )
          ;
    return r && (s = s.times(2 << r - 1)), b = true, y(s, c.precision = p, c.rounding = d, true);
  };
  m.isFinite = function() {
    return !!this.d;
  };
  m.isInteger = m.isInt = function() {
    return !!this.d && re(this.e / E) > this.d.length - 2;
  };
  m.isNaN = function() {
    return !this.s;
  };
  m.isNegative = m.isNeg = function() {
    return this.s < 0;
  };
  m.isPositive = m.isPos = function() {
    return this.s > 0;
  };
  m.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  m.lessThan = m.lt = function(e) {
    return this.cmp(e) < 0;
  };
  m.lessThanOrEqualTo = m.lte = function(e) {
    return this.cmp(e) < 1;
  };
  m.logarithm = m.log = function(e) {
    var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
    if (e == null)
      e = new c(10), t = true;
    else {
      if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
        return new c(NaN);
      t = e.eq(10);
    }
    if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
      return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t)
      if (r.length > 1)
        o = true;
      else {
        for (i = r[0];i % 10 === 0; )
          i /= 10;
        o = i !== 1;
      }
    if (b = false, a = p + f, s = We(u, a), n = t ? rn(c, a + 10) : We(e, a), l = M(s, n, a, 1), rr(l.d, i = p, d))
      do
        if (a += 10, s = We(u, a), n = t ? rn(c, a + 10) : We(e, a), l = M(s, n, a, 1), !o) {
          +K(l.d).slice(i + 1, i + 15) + 1 == 100000000000000 && (l = y(l, p + 1, 0));
          break;
        }
      while (rr(l.d, i += 10, d));
    return b = true, y(l, p, d);
  };
  m.minus = m.sub = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.constructor;
    if (e = new g(e), !f.d || !e.d)
      return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
    if (f.s != e.s)
      return e.s = -e.s, f.plus(e);
    if (u = f.d, d = e.d, a = g.precision, l = g.rounding, !u[0] || !d[0]) {
      if (d[0])
        e.s = -e.s;
      else if (u[0])
        e = new g(f);
      else
        return new g(l === 3 ? -0 : 0);
      return b ? y(e, a, l) : e;
    }
    if (r = re(e.e / E), c = re(f.e / E), u = u.slice(), o = c - r, o) {
      for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / E), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o;n--; )
        t.push(0);
      t.reverse();
    } else {
      for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0;n < s; n++)
        if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
      o = 0;
    }
    for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s;n > 0; --n)
      u[s++] = 0;
    for (n = d.length;n > o; ) {
      if (u[--n] < d[n]) {
        for (i = n;i && u[--i] === 0; )
          u[i] = he - 1;
        --u[i], u[n] += he;
      }
      u[n] -= d[n];
    }
    for (;u[--s] === 0; )
      u.pop();
    for (;u[0] === 0; u.shift())
      --r;
    return u[0] ? (e.d = u, e.e = on(u, r), b ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
  };
  m.modulo = m.mod = function(e) {
    var t, r = this, n = r.constructor;
    return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? y(new n(r), n.precision, n.rounding) : (b = false, n.modulo == 9 ? (t = M(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = M(r, e, 0, n.modulo, 1), t = t.times(e), b = true, r.minus(t));
  };
  m.naturalExponential = m.exp = function() {
    return Oi(this);
  };
  m.naturalLogarithm = m.ln = function() {
    return We(this);
  };
  m.negated = m.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, y(e);
  };
  m.plus = m.add = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
    if (e = new d(e), !p.d || !e.d)
      return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
    if (p.s != e.s)
      return e.s = -e.s, p.minus(e);
    if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
      return c[0] || (e = new d(p)), b ? y(e, a, l) : e;
    if (o = re(p.e / E), n = re(e.e / E), u = u.slice(), i = o - n, i) {
      for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / E), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse();i--; )
        r.push(0);
      r.reverse();
    }
    for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0;i; )
      t = (u[--i] = u[i] + c[i] + t) / he | 0, u[i] %= he;
    for (t && (u.unshift(t), ++n), s = u.length;u[--s] == 0; )
      u.pop();
    return e.d = u, e.e = on(u, n), b ? y(e, a, l) : e;
  };
  m.precision = m.sd = function(e) {
    var t, r = this;
    if (e !== undefined && e !== !!e && e !== 1 && e !== 0)
      throw Error(Ke + e);
    return r.d ? (t = Ds(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
  };
  m.round = function() {
    var e = this, t = e.constructor;
    return y(new t(e), e.e + 1, t.rounding);
  };
  m.sine = m.sin = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + E, n.rounding = 1, r = _c(n, Fs(n, r)), n.precision = e, n.rounding = t, y(Me > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.squareRoot = m.sqrt = function() {
    var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
    if (u !== 1 || !a || !a[0])
      return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for (b = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = K(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = re((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3;; )
      if (o = n, n = o.plus(M(s, o, r + 2, 1)).times(0.5), K(o.d).slice(0, r) === (t = K(n.d)).slice(0, r))
        if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
          if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
          }
          r += 4, i = 1;
        } else {
          (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
          break;
        }
    return b = true, y(n, l, c.rounding, e);
  };
  m.tangent = m.tan = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = M(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, y(Me == 2 || Me == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.times = m.mul = function(e) {
    var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
    if (e.s *= c.s, !d || !d[0] || !f || !f[0])
      return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
    for (r = re(c.e / E) + re(e.e / E), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s;n--; )
      o.push(0);
    for (n = u;--n >= 0; ) {
      for (t = 0, i = l + n;i > n; )
        a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % he | 0, t = a / he | 0;
      o[i] = (o[i] + t) % he | 0;
    }
    for (;!o[--s]; )
      o.pop();
    return t ? ++r : o.shift(), e.d = o, e.e = on(o, r), b ? y(e, p.precision, p.rounding) : e;
  };
  m.toBinary = function(e, t) {
    return Di(this, 2, e, t);
  };
  m.toDecimalPlaces = m.toDP = function(e, t) {
    var r = this, n = r.constructor;
    return r = new n(r), e === undefined ? r : (se(e, 0, Ye), t === undefined ? t = n.rounding : se(t, 0, 8), y(r, e + r.e + 1, t));
  };
  m.toExponential = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = xe(n, true) : (se(e, 0, Ye), t === undefined ? t = i.rounding : se(t, 0, 8), n = y(new i(n), e + 1, t), r = xe(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toFixed = function(e, t) {
    var r, n, i = this, o = i.constructor;
    return e === undefined ? r = xe(i) : (se(e, 0, Ye), t === undefined ? t = o.rounding : se(t, 0, 8), n = y(new o(i), e + i.e + 1, t), r = xe(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
  };
  m.toFraction = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.d, h = f.constructor;
    if (!g)
      return new h(f);
    if (u = r = new h(1), n = l = new h(0), t = new h(n), o = t.e = Ds(g) - f.e - 1, s = o % E, t.d[0] = G(10, s < 0 ? E + s : s), e == null)
      e = o > 0 ? t : u;
    else {
      if (a = new h(e), !a.isInt() || a.lt(u))
        throw Error(Ke + a);
      e = a.gt(t) ? o > 0 ? t : u : a;
    }
    for (b = false, a = new h(K(g)), c = h.precision, h.precision = o = g.length * E * 2;p = M(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
      r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
    return i = M(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = M(u, n, o, 1).minus(f).abs().cmp(M(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], h.precision = c, b = true, d;
  };
  m.toHexadecimal = m.toHex = function(e, t) {
    return Di(this, 16, e, t);
  };
  m.toNearest = function(e, t) {
    var r = this, n = r.constructor;
    if (r = new n(r), e == null) {
      if (!r.d)
        return r;
      e = new n(1), t = n.rounding;
    } else {
      if (e = new n(e), t === undefined ? t = n.rounding : se(t, 0, 8), !r.d)
        return e.s ? r : e;
      if (!e.d)
        return e.s && (e.s = r.s), e;
    }
    return e.d[0] ? (b = false, r = M(r, e, 0, t, 1).times(e), b = true, y(r)) : (e.s = r.s, r = e), r;
  };
  m.toNumber = function() {
    return +this;
  };
  m.toOctal = function(e, t) {
    return Di(this, 8, e, t);
  };
  m.toPower = m.pow = function(e) {
    var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0])
      return new l(G(+a, u));
    if (a = new l(a), a.eq(1))
      return a;
    if (n = l.precision, o = l.rounding, e.eq(1))
      return y(a, n, o);
    if (t = re(e.e / E), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Ic)
      return i = _s(l, a, r, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
    if (s = a.s, s < 0) {
      if (t < e.d.length - 1)
        return new l(NaN);
      if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
        return a.s = s, a;
    }
    return r = G(+a, u), t = r == 0 || !isFinite(r) ? re(u * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (b = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Oi(e.times(We(a, n + r)), n), i.d && (i = y(i, n + 5, 1), rr(i.d, n, o) && (t = n + 10, i = y(Oi(e.times(We(a, t + r)), t), t + 5, 1), +K(i.d).slice(n + 1, n + 15) + 1 == 100000000000000 && (i = y(i, n + 1, 0)))), i.s = s, b = true, l.rounding = o, y(i, n, o));
  };
  m.toPrecision = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = xe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (se(e, 1, Ye), t === undefined ? t = i.rounding : se(t, 0, 8), n = y(new i(n), e, t), r = xe(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toSignificantDigits = m.toSD = function(e, t) {
    var r = this, n = r.constructor;
    return e === undefined ? (e = n.precision, t = n.rounding) : (se(e, 1, Ye), t === undefined ? t = n.rounding : se(t, 0, 8)), y(new n(r), e, t);
  };
  m.toString = function() {
    var e = this, t = e.constructor, r = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  };
  m.truncated = m.trunc = function() {
    return y(new this.constructor(this), this.e + 1, 1);
  };
  m.valueOf = m.toJSON = function() {
    var e = this, t = e.constructor, r = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() ? "-" + r : r;
  };
  function K(e) {
    var t, r, n, i = e.length - 1, o = "", s = e[0];
    if (i > 0) {
      for (o += s, t = 1;t < i; t++)
        n = e[t] + "", r = E - n.length, r && (o += He(r)), o += n;
      s = e[t], n = s + "", r = E - n.length, r && (o += He(r));
    } else if (s === 0)
      return "0";
    for (;s % 10 === 0; )
      s /= 10;
    return o + s;
  }
  function se(e, t, r) {
    if (e !== ~~e || e < t || e > r)
      throw Error(Ke + e);
  }
  function rr(e, t, r, n) {
    var i, o, s, a;
    for (o = e[0];o >= 10; o /= 10)
      --t;
    return --t < 0 ? (t += E, i = 0) : (i = Math.ceil((t + 1) / E), t %= E), o = G(10, E - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 50000 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == G(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1000 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1000 | 0) == G(10, t - 3) - 1, s;
  }
  function Xr(e, t, r) {
    for (var n, i = [0], o, s = 0, a = e.length;s < a; ) {
      for (o = i.length;o--; )
        i[o] *= t;
      for (i[0] += Si.indexOf(e.charAt(s++)), n = 0;n < i.length; n++)
        i[n] > r - 1 && (i[n + 1] === undefined && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
    }
    return i.reverse();
  }
  function kc(e, t) {
    var r, n, i;
    if (t.isZero())
      return t;
    n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / sn(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = Et(e, 1, t.times(i), new e(1));
    for (var o = r;o--; ) {
      var s = t.times(t);
      t = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= r, t;
  }
  var M = function() {
    function e(n, i, o) {
      var s, a = 0, l = n.length;
      for (n = n.slice();l--; )
        s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
      return a && n.unshift(a), n;
    }
    function t(n, i, o, s) {
      var a, l;
      if (o != s)
        l = o > s ? 1 : -1;
      else
        for (a = l = 0;a < o; a++)
          if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
          }
      return l;
    }
    function r(n, i, o, s) {
      for (var a = 0;o--; )
        n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
      for (;!n[0] && n.length > 1; )
        n.shift();
    }
    return function(n, i, o, s, a, l) {
      var u, c, p, d, f, g, h, O, P, C, R, k, A, ue, jt, U, oe, Oe, Y, pt, Lr = n.constructor, jn = n.s == i.s ? 1 : -1, z = n.d, N = i.d;
      if (!z || !z[0] || !N || !N[0])
        return new Lr(!n.s || !i.s || (z ? N && z[0] == N[0] : !N) ? NaN : z && z[0] == 0 || !N ? jn * 0 : jn / 0);
      for (l ? (f = 1, c = n.e - i.e) : (l = he, f = E, c = re(n.e / f) - re(i.e / f)), Y = N.length, oe = z.length, P = new Lr(jn), C = P.d = [], p = 0;N[p] == (z[p] || 0); p++)
        ;
      if (N[p] > (z[p] || 0) && c--, o == null ? (ue = o = Lr.precision, s = Lr.rounding) : a ? ue = o + (n.e - i.e) + 1 : ue = o, ue < 0)
        C.push(1), g = true;
      else {
        if (ue = ue / f + 2 | 0, p = 0, Y == 1) {
          for (d = 0, N = N[0], ue++;(p < oe || d) && ue--; p++)
            jt = d * l + (z[p] || 0), C[p] = jt / N | 0, d = jt % N | 0;
          g = d || p < oe;
        } else {
          for (d = l / (N[0] + 1) | 0, d > 1 && (N = e(N, d, l), z = e(z, d, l), Y = N.length, oe = z.length), U = Y, R = z.slice(0, Y), k = R.length;k < Y; )
            R[k++] = 0;
          pt = N.slice(), pt.unshift(0), Oe = N[0], N[1] >= l / 2 && ++Oe;
          do
            d = 0, u = t(N, R, Y, k), u < 0 ? (A = R[0], Y != k && (A = A * l + (R[1] || 0)), d = A / Oe | 0, d > 1 ? (d >= l && (d = l - 1), h = e(N, d, l), O = h.length, k = R.length, u = t(h, R, O, k), u == 1 && (d--, r(h, Y < O ? pt : N, O, l))) : (d == 0 && (u = d = 1), h = N.slice()), O = h.length, O < k && h.unshift(0), r(R, h, k, l), u == -1 && (k = R.length, u = t(N, R, Y, k), u < 1 && (d++, r(R, Y < k ? pt : N, k, l))), k = R.length) : u === 0 && (d++, R = [0]), C[p++] = d, u && R[0] ? R[k++] = z[U] || 0 : (R = [z[U]], k = 1);
          while ((U++ < oe || R[0] !== undefined) && ue--);
          g = R[0] !== undefined;
        }
        C[0] || C.shift();
      }
      if (f == 1)
        P.e = c, Ss = g;
      else {
        for (p = 1, d = C[0];d >= 10; d /= 10)
          p++;
        P.e = p + c * f - 1, y(P, a ? o + P.e + 1 : o, s, g);
      }
      return P;
    };
  }();
  function y(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor;
    e:
      if (t != null) {
        if (p = e.d, !p)
          return e;
        for (i = 1, a = p[0];a >= 10; a /= 10)
          i++;
        if (o = t - i, o < 0)
          o += E, s = t, c = p[d = 0], l = c / G(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / E), a = p.length, d >= a)
          if (n) {
            for (;a++ <= d; )
              p.push(0);
            c = l = 0, i = 1, o %= E, s = o - E + 1;
          } else
            break e;
        else {
          for (c = a = p[d], i = 1;a >= 10; a /= 10)
            i++;
          o %= E, s = o - E + i, l = s < 0 ? 0 : c / G(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || p[d + 1] !== undefined || (s < 0 ? c : c % G(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / G(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
          return p.length = 0, u ? (t -= e.e + 1, p[0] = G(10, (E - t % E) % E), e.e = -t || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = G(10, E - o), p[d] = s > 0 ? (c / G(10, i - s) % G(10, s) | 0) * a : 0), u)
          for (;; )
            if (d == 0) {
              for (o = 1, s = p[0];s >= 10; s /= 10)
                o++;
              for (s = p[0] += a, a = 1;s >= 10; s /= 10)
                a++;
              o != a && (e.e++, p[0] == he && (p[0] = 1));
              break;
            } else {
              if (p[d] += a, p[d] != he)
                break;
              p[d--] = 0, a = 1;
            }
        for (o = p.length;p[--o] === 0; )
          p.pop();
      }
    return b && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
  }
  function xe(e, t, r) {
    if (!e.isFinite())
      return Ls(e);
    var n, i = e.e, o = K(e.d), s = o.length;
    return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + He(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + He(-i - 1) + o, r && (n = r - s) > 0 && (o += He(n))) : i >= s ? (o += He(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + He(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += He(n))), o;
  }
  function on(e, t) {
    var r = e[0];
    for (t *= E;r >= 10; r /= 10)
      t++;
    return t;
  }
  function rn(e, t, r) {
    if (t > Oc)
      throw b = true, r && (e.precision = r), Error(As);
    return y(new e(en), t, 1, true);
  }
  function ge(e, t, r) {
    if (t > Ii)
      throw Error(As);
    return y(new e(tn), t, r, true);
  }
  function Ds(e) {
    var t = e.length - 1, r = t * E + 1;
    if (t = e[t], t) {
      for (;t % 10 == 0; t /= 10)
        r--;
      for (t = e[0];t >= 10; t /= 10)
        r++;
    }
    return r;
  }
  function He(e) {
    for (var t = "";e--; )
      t += "0";
    return t;
  }
  function _s(e, t, r, n) {
    var i, o = new e(1), s = Math.ceil(n / E + 4);
    for (b = false;; ) {
      if (r % 2 && (o = o.times(t), Rs(o.d, s) && (i = true)), r = re(r / 2), r === 0) {
        r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
        break;
      }
      t = t.times(t), Rs(t.d, s);
    }
    return b = true, o;
  }
  function Ts(e) {
    return e.d[e.d.length - 1] & 1;
  }
  function Ns(e, t, r) {
    for (var n, i = new e(t[0]), o = 0;++o < t.length; )
      if (n = new e(t[o]), n.s)
        i[r](n) && (i = n);
      else {
        i = n;
        break;
      }
    return i;
  }
  function Oi(e, t) {
    var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, g = d.precision;
    if (!e.d || !e.d[0] || e.e > 17)
      return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (t == null ? (b = false, l = g) : l = t, a = new d(0.03125);e.e > -2; )
      e = e.times(a), p += 5;
    for (n = Math.log(G(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l;; ) {
      if (o = y(o.times(e), l, 1), r = r.times(++c), a = s.plus(M(o, r, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
        for (i = p;i--; )
          s = y(s.times(s), l, 1);
        if (t == null)
          if (u < 3 && rr(s.d, l - n, f, u))
            d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
          else
            return y(s, d.precision = g, f, b = true);
        else
          return d.precision = g, s;
      }
      s = a;
    }
  }
  function We(e, t) {
    var r, n, i, o, s, a, l, u, c, p, d, f = 1, g = 10, h = e, O = h.d, P = h.constructor, C = P.rounding, R = P.precision;
    if (h.s < 0 || !O || !O[0] || !h.e && O[0] == 1 && O.length == 1)
      return new P(O && !O[0] ? -1 / 0 : h.s != 1 ? NaN : O ? 0 : h);
    if (t == null ? (b = false, c = R) : c = t, P.precision = c += g, r = K(O), n = r.charAt(0), Math.abs(o = h.e) < 1500000000000000) {
      for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
        h = h.times(e), r = K(h.d), n = r.charAt(0), f++;
      o = h.e, n > 1 ? (h = new P("0." + r), o++) : h = new P(n + "." + r.slice(1));
    } else
      return u = rn(P, c + 2, R).times(o + ""), h = We(new P(n + "." + r.slice(1)), c - g).plus(u), P.precision = R, t == null ? y(h, R, C, b = true) : h;
    for (p = h, l = s = h = M(h.minus(1), h.plus(1), c, 1), d = y(h.times(h), c, 1), i = 3;; ) {
      if (s = y(s.times(d), c, 1), u = l.plus(M(s, new P(i), c, 1)), K(u.d).slice(0, c) === K(l.d).slice(0, c))
        if (l = l.times(2), o !== 0 && (l = l.plus(rn(P, c + 2, R).times(o + ""))), l = M(l, new P(f), c, 1), t == null)
          if (rr(l.d, c - g, C, a))
            P.precision = c += g, u = s = h = M(p.minus(1), p.plus(1), c, 1), d = y(h.times(h), c, 1), i = a = 1;
          else
            return y(l, P.precision = R, C, b = true);
        else
          return P.precision = R, l;
      l = u, i += 2;
    }
  }
  function Ls(e) {
    return String(e.s * e.s / 0);
  }
  function ki(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0;t.charCodeAt(n) === 48; n++)
      ;
    for (i = t.length;t.charCodeAt(i - 1) === 48; --i)
      ;
    if (t = t.slice(n, i), t) {
      if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % E, r < 0 && (n += E), n < i) {
        for (n && e.d.push(+t.slice(0, n)), i -= E;n < i; )
          e.d.push(+t.slice(n, n += E));
        t = t.slice(n), n = E - t.length;
      } else
        n -= i;
      for (;n--; )
        t += "0";
      e.d.push(+t), b && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
    } else
      e.e = 0, e.d = [0];
    return e;
  }
  function Dc(e, t) {
    var r, n, i, o, s, a, l, u, c;
    if (t.indexOf("_") > -1) {
      if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ks.test(t))
        return ki(e, t);
    } else if (t === "Infinity" || t === "NaN")
      return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (Sc.test(t))
      r = 16, t = t.toLowerCase();
    else if (Cc.test(t))
      r = 2;
    else if (Ac.test(t))
      r = 8;
    else
      throw Error(Ke + t);
    for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = _s(n, new n(r), o, o * 2)), u = Xr(t, r, he), c = u.length - 1, o = c;u[o] === 0; --o)
      u.pop();
    return o < 0 ? new n(e.s * 0) : (e.e = on(u, c), e.d = u, b = false, s && (e = M(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : it.pow(2, l))), b = true, e);
  }
  function _c(e, t) {
    var r, n = t.d.length;
    if (n < 3)
      return t.isZero() ? t : Et(e, 2, t, t);
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / sn(5, r)), t = Et(e, 2, t, t);
    for (var i, o = new e(5), s = new e(16), a = new e(20);r--; )
      i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
    return t;
  }
  function Et(e, t, r, n, i) {
    var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / E);
    for (b = false, l = r.times(r), a = new e(n);; ) {
      if (s = M(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = M(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== undefined) {
        for (o = p;s.d[o] === a.d[o] && o--; )
          ;
        if (o == -1)
          break;
      }
      o = a, a = n, n = s, s = o, u++;
    }
    return b = true, s.d.length = p + 1, s;
  }
  function sn(e, t) {
    for (var r = e;--t; )
      r *= e;
    return r;
  }
  function Fs(e, t) {
    var r, n = t.s < 0, i = ge(e, e.precision, 1), o = i.times(0.5);
    if (t = t.abs(), t.lte(o))
      return Me = n ? 4 : 1, t;
    if (r = t.divToInt(i), r.isZero())
      Me = n ? 3 : 2;
    else {
      if (t = t.minus(r.times(i)), t.lte(o))
        return Me = Ts(r) ? n ? 2 : 3 : n ? 4 : 1, t;
      Me = Ts(r) ? n ? 1 : 4 : n ? 3 : 2;
    }
    return t.minus(i).abs();
  }
  function Di(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor, g = r !== undefined;
    if (g ? (se(r, 1, Ye), n === undefined ? n = f.rounding : se(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
      c = Ls(e);
    else {
      for (c = xe(e), s = c.indexOf("."), g ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = Xr(xe(d), 10, i), d.e = d.d.length), p = Xr(c, 10, i), o = l = p.length;p[--l] == 0; )
        p.pop();
      if (!p[0])
        c = g ? "0p+0" : "0";
      else {
        if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = M(e, d, r, n, 0, i), p = e.d, o = e.e, u = Ss), s = p[r], a = i / 2, u = u || p[r + 1] !== undefined, u = n < 4 ? (s !== undefined || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
          for (;++p[--r] > i - 1; )
            p[r] = 0, r || (++o, p.unshift(1));
        for (l = p.length;!p[l - 1]; --l)
          ;
        for (s = 0, c = "";s < l; s++)
          c += Si.charAt(p[s]);
        if (g) {
          if (l > 1)
            if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l;l % s; l++)
                c += "0";
              for (p = Xr(c, i, t), l = p.length;!p[l - 1]; --l)
                ;
              for (s = 1, c = "1.";s < l; s++)
                c += Si.charAt(p[s]);
            } else
              c = c.charAt(0) + "." + c.slice(1);
          c = c + (o < 0 ? "p" : "p+") + o;
        } else if (o < 0) {
          for (;++o; )
            c = "0" + c;
          c = "0." + c;
        } else if (++o > l)
          for (o -= l;o--; )
            c += "0";
        else
          o < l && (c = c.slice(0, o) + "." + c.slice(o));
      }
      c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
  }
  function Rs(e, t) {
    if (e.length > t)
      return e.length = t, true;
  }
  function Nc(e) {
    return new this(e).abs();
  }
  function Lc(e) {
    return new this(e).acos();
  }
  function Fc(e) {
    return new this(e).acosh();
  }
  function Mc(e, t) {
    return new this(e).plus(t);
  }
  function $c(e) {
    return new this(e).asin();
  }
  function qc(e) {
    return new this(e).asinh();
  }
  function Vc(e) {
    return new this(e).atan();
  }
  function jc(e) {
    return new this(e).atanh();
  }
  function Bc(e, t) {
    e = new this(e), t = new this(t);
    var r, n = this.precision, i = this.rounding, o = n + 4;
    return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ge(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ge(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ge(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(M(e, t, o, 1)), t = ge(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(M(e, t, o, 1)), r;
  }
  function Uc(e) {
    return new this(e).cbrt();
  }
  function Qc(e) {
    return y(e = new this(e), e.e + 1, 2);
  }
  function Gc(e, t, r) {
    return new this(e).clamp(t, r);
  }
  function Jc(e) {
    if (!e || typeof e != "object")
      throw Error(nn + "Object expected");
    var t, r, n, i = e.defaults === true, o = ["precision", 1, Ye, "rounding", 0, 8, "toExpNeg", -yt, 0, "toExpPos", 0, yt, "maxE", 0, yt, "minE", -yt, 0, "modulo", 0, 9];
    for (t = 0;t < o.length; t += 3)
      if (r = o[t], i && (this[r] = Ai[r]), (n = e[r]) !== undefined)
        if (re(n) === n && n >= o[t + 1] && n <= o[t + 2])
          this[r] = n;
        else
          throw Error(Ke + r + ": " + n);
    if (r = "crypto", i && (this[r] = Ai[r]), (n = e[r]) !== undefined)
      if (n === true || n === false || n === 0 || n === 1)
        if (n)
          if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
            this[r] = true;
          else
            throw Error(Is);
        else
          this[r] = false;
      else
        throw Error(Ke + r + ": " + n);
    return this;
  }
  function Hc(e) {
    return new this(e).cos();
  }
  function Wc(e) {
    return new this(e).cosh();
  }
  function Ms(e) {
    var t, r, n;
    function i(o) {
      var s, a, l, u = this;
      if (!(u instanceof i))
        return new i(o);
      if (u.constructor = i, Cs(o)) {
        u.s = o.s, b ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
        return;
      }
      if (l = typeof o, l === "number") {
        if (o === 0) {
          u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
          return;
        }
        if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
          for (s = 0, a = o;a >= 10; a /= 10)
            s++;
          b ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
          return;
        } else if (o * 0 !== 0) {
          o || (u.s = NaN), u.e = NaN, u.d = null;
          return;
        }
        return ki(u, o.toString());
      } else if (l !== "string")
        throw Error(Ke + o);
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), ks.test(o) ? ki(u, o) : Dc(u, o);
    }
    if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Jc, i.clone = Ms, i.isDecimal = Cs, i.abs = Nc, i.acos = Lc, i.acosh = Fc, i.add = Mc, i.asin = $c, i.asinh = qc, i.atan = Vc, i.atanh = jc, i.atan2 = Bc, i.cbrt = Uc, i.ceil = Qc, i.clamp = Gc, i.cos = Hc, i.cosh = Wc, i.div = Kc, i.exp = Yc, i.floor = zc, i.hypot = Zc, i.ln = Xc, i.log = ep, i.log10 = rp, i.log2 = tp, i.max = np, i.min = ip, i.mod = op, i.mul = sp, i.pow = ap, i.random = lp, i.round = up, i.sign = cp, i.sin = pp, i.sinh = dp, i.sqrt = mp, i.sub = fp, i.sum = gp, i.tan = hp, i.tanh = yp, i.trunc = Ep, e === undefined && (e = {}), e && e.defaults !== true)
      for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0;t < n.length; )
        e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i;
  }
  function Kc(e, t) {
    return new this(e).div(t);
  }
  function Yc(e) {
    return new this(e).exp();
  }
  function zc(e) {
    return y(e = new this(e), e.e + 1, 3);
  }
  function Zc() {
    var e, t, r = new this(0);
    for (b = false, e = 0;e < arguments.length; )
      if (t = new this(arguments[e++]), t.d)
        r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s)
          return b = true, new this(1 / 0);
        r = t;
      }
    return b = true, r.sqrt();
  }
  function Cs(e) {
    return e instanceof it || e && e.toStringTag === Os || false;
  }
  function Xc(e) {
    return new this(e).ln();
  }
  function ep(e, t) {
    return new this(e).log(t);
  }
  function tp(e) {
    return new this(e).log(2);
  }
  function rp(e) {
    return new this(e).log(10);
  }
  function np() {
    return Ns(this, arguments, "lt");
  }
  function ip() {
    return Ns(this, arguments, "gt");
  }
  function op(e, t) {
    return new this(e).mod(t);
  }
  function sp(e, t) {
    return new this(e).mul(t);
  }
  function ap(e, t) {
    return new this(e).pow(t);
  }
  function lp(e) {
    var t, r, n, i, o = 0, s = new this(1), a = [];
    if (e === undefined ? e = this.precision : se(e, 1, Ye), n = Math.ceil(e / E), this.crypto)
      if (crypto.getRandomValues)
        for (t = crypto.getRandomValues(new Uint32Array(n));o < n; )
          i = t[o], i >= 4290000000 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4);o < n; )
          i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 2140000000 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else
        throw Error(Is);
    else
      for (;o < n; )
        a[o++] = Math.random() * 1e7 | 0;
    for (n = a[--o], e %= E, n && e && (i = G(10, E - e), a[o] = (n / i | 0) * i);a[o] === 0; o--)
      a.pop();
    if (o < 0)
      r = 0, a = [0];
    else {
      for (r = -1;a[0] === 0; r -= E)
        a.shift();
      for (n = 1, i = a[0];i >= 10; i /= 10)
        n++;
      n < E && (r -= E - n);
    }
    return s.e = r, s.d = a, s;
  }
  function up(e) {
    return y(e = new this(e), e.e + 1, this.rounding);
  }
  function cp(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
  }
  function pp(e) {
    return new this(e).sin();
  }
  function dp(e) {
    return new this(e).sinh();
  }
  function mp(e) {
    return new this(e).sqrt();
  }
  function fp(e, t) {
    return new this(e).sub(t);
  }
  function gp() {
    var e = 0, t = arguments, r = new this(t[e]);
    for (b = false;r.s && ++e < t.length; )
      r = r.plus(t[e]);
    return b = true, y(r, this.precision, this.rounding);
  }
  function hp(e) {
    return new this(e).tan();
  }
  function yp(e) {
    return new this(e).tanh();
  }
  function Ep(e) {
    return y(e = new this(e), e.e + 1, 1);
  }
  m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
  m[Symbol.toStringTag] = "Decimal";
  var it = m.constructor = Ms(Ai);
  en = new it(en);
  tn = new it(tn);
  var ve = it;
  function bt(e) {
    return e === null ? e : Array.isArray(e) ? e.map(bt) : typeof e == "object" ? bp(e) ? wp(e) : ht(e, bt) : e;
  }
  function bp(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
  }
  function wp({ $type: e, value: t }) {
    switch (e) {
      case "BigInt":
        return BigInt(t);
      case "Bytes": {
        let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
        return new Uint8Array(r, n, i);
      }
      case "DateTime":
        return new Date(t);
      case "Decimal":
        return new ve(t);
      case "Json":
        return JSON.parse(t);
      default:
        Fe(t, "Unknown tagged value");
    }
  }
  function wt(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  function xt(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function an(e) {
    return e.toString() !== "Invalid Date";
  }
  function vt(e) {
    return it.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
  }
  var Us = D(bi());
  var Bs = D(__require("fs"));
  var $s = { keyword: _e, entity: _e, value: (e) => W(rt(e)), punctuation: rt, directive: _e, function: _e, variable: (e) => W(rt(e)), string: (e) => W(Ve(e)), boolean: De, number: _e, comment: Ut };
  var xp = (e) => e;
  var ln = {};
  var vp = 0;
  var x = { manual: ln.Prism && ln.Prism.manual, disableWorkerMessageHandler: ln.Prism && ln.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
    if (e instanceof ye) {
      let t = e;
      return new ye(t.type, x.util.encode(t.content), t.alias);
    } else
      return Array.isArray(e) ? e.map(x.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
  }, type: function(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }, objId: function(e) {
    return e.__id || Object.defineProperty(e, "__id", { value: ++vp }), e.__id;
  }, clone: function e(t, r) {
    let n, i, o = x.util.type(t);
    switch (r = r || {}, o) {
      case "Object":
        if (i = x.util.objId(t), r[i])
          return r[i];
        n = {}, r[i] = n;
        for (let s in t)
          t.hasOwnProperty(s) && (n[s] = e(t[s], r));
        return n;
      case "Array":
        return i = x.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
          n[a] = e(s, r);
        }), n);
      default:
        return t;
    }
  } }, languages: { extend: function(e, t) {
    let r = x.util.clone(x.languages[e]);
    for (let n in t)
      r[n] = t[n];
    return r;
  }, insertBefore: function(e, t, r, n) {
    n = n || x.languages;
    let i = n[e], o = {};
    for (let a in i)
      if (i.hasOwnProperty(a)) {
        if (a == t)
          for (let l in r)
            r.hasOwnProperty(l) && (o[l] = r[l]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
    let s = n[e];
    return n[e] = o, x.languages.DFS(x.languages, function(a, l) {
      l === s && a != e && (this[a] = o);
    }), o;
  }, DFS: function e(t, r, n, i) {
    i = i || {};
    let o = x.util.objId;
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        r.call(t, s, t[s], n || s);
        let a = t[s], l = x.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
  } }, plugins: {}, highlight: function(e, t, r) {
    let n = { code: e, grammar: t, language: r };
    return x.hooks.run("before-tokenize", n), n.tokens = x.tokenize(n.code, n.grammar), x.hooks.run("after-tokenize", n), ye.stringify(x.util.encode(n.tokens), n.language);
  }, matchGrammar: function(e, t, r, n, i, o, s) {
    for (let h in r) {
      if (!r.hasOwnProperty(h) || !r[h])
        continue;
      if (h == s)
        return;
      let O = r[h];
      O = x.util.type(O) === "Array" ? O : [O];
      for (let P = 0;P < O.length; ++P) {
        let C = O[P], R = C.inside, k = !!C.lookbehind, A = !!C.greedy, ue = 0, jt = C.alias;
        if (A && !C.pattern.global) {
          let U = C.pattern.toString().match(/[imuy]*$/)[0];
          C.pattern = RegExp(C.pattern.source, U + "g");
        }
        C = C.pattern || C;
        for (let U = n, oe = i;U < t.length; oe += t[U].length, ++U) {
          let Oe = t[U];
          if (t.length > e.length)
            return;
          if (Oe instanceof ye)
            continue;
          if (A && U != t.length - 1) {
            C.lastIndex = oe;
            var p = C.exec(e);
            if (!p)
              break;
            var c = p.index + (k ? p[1].length : 0), d = p.index + p[0].length, a = U, l = oe;
            for (let N = t.length;a < N && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
              l += t[a].length, c >= l && (++U, oe = l);
            if (t[U] instanceof ye)
              continue;
            u = a - U, Oe = e.slice(oe, l), p.index -= oe;
          } else {
            C.lastIndex = 0;
            var p = C.exec(Oe), u = 1;
          }
          if (!p) {
            if (o)
              break;
            continue;
          }
          k && (ue = p[1] ? p[1].length : 0);
          var c = p.index + ue, p = p[0].slice(ue), d = c + p.length, f = Oe.slice(0, c), g = Oe.slice(d);
          let Y = [U, u];
          f && (++U, oe += f.length, Y.push(f));
          let pt = new ye(h, R ? x.tokenize(p, R) : p, jt, p, A);
          if (Y.push(pt), g && Y.push(g), Array.prototype.splice.apply(t, Y), u != 1 && x.matchGrammar(e, t, r, U, oe, true, h), o)
            break;
        }
      }
    }
  }, tokenize: function(e, t) {
    let r = [e], n = t.rest;
    if (n) {
      for (let i in n)
        t[i] = n[i];
      delete t.rest;
    }
    return x.matchGrammar(e, r, t, 0, 0, false), r;
  }, hooks: { all: {}, add: function(e, t) {
    let r = x.hooks.all;
    r[e] = r[e] || [], r[e].push(t);
  }, run: function(e, t) {
    let r = x.hooks.all[e];
    if (!(!r || !r.length))
      for (var n = 0, i;i = r[n++]; )
        i(t);
  } }, Token: ye };
  x.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
  x.languages.javascript = x.languages.extend("clike", { "class-name": [x.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
  x.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  x.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: x.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: x.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: x.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: x.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
  x.languages.markup && x.languages.markup.tag.addInlined("script", "javascript");
  x.languages.js = x.languages.javascript;
  x.languages.typescript = x.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
  x.languages.ts = x.languages.typescript;
  function ye(e, t, r, n, i) {
    this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
  }
  ye.stringify = function(e, t) {
    return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
      return ye.stringify(r, t);
    }).join("") : Pp(e.type)(e.content);
  };
  function Pp(e) {
    return $s[e] || xp;
  }
  function qs(e) {
    return Tp(e, x.languages.javascript);
  }
  function Tp(e, t) {
    return x.tokenize(e, t).map((n) => ye.stringify(n)).join("");
  }
  var Vs = D(gs());
  function js(e) {
    return (0, Vs.default)(e);
  }
  var un = class e {
    static read(t) {
      let r;
      try {
        r = Bs.default.readFileSync(t, "utf-8");
      } catch {
        return null;
      }
      return e.fromContent(r);
    }
    static fromContent(t) {
      let r = t.split(/\r?\n/);
      return new e(1, r);
    }
    constructor(t, r) {
      this.firstLineNumber = t, this.lines = r;
    }
    get lastLineNumber() {
      return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(t, r) {
      if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
        return this;
      let n = t - this.firstLineNumber, i = [...this.lines];
      return i[n] = r(i[n]), new e(this.firstLineNumber, i);
    }
    mapLines(t) {
      return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
    }
    lineAt(t) {
      return this.lines[t - this.firstLineNumber];
    }
    prependSymbolAt(t, r) {
      return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
    }
    slice(t, r) {
      let n = this.lines.slice(t - 1, r).join(`
`);
      return new e(t, js(n).split(`
`));
    }
    highlight() {
      let t = qs(this.toString());
      return new e(this.firstLineNumber, t.split(`
`));
    }
    toString() {
      return this.lines.join(`
`);
    }
  };
  var Rp = { red: de, gray: Ut, dim: ke, bold: W, underline: X, highlightSource: (e) => e.highlight() };
  var Cp = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
  function Sp({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
    return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
  }
  function Ap({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
    let s = Sp({ message: t, originalMethod: r, isPanic: n, callArguments: i });
    if (!e || typeof window < "u" || false)
      return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber)
      return s;
    let l = Math.max(1, a.lineNumber - 3), u = un.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
    if (u && c) {
      let p = Op(c), d = Ip(c);
      if (!d)
        return s;
      s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
      let f = String(u.lastLineNumber).length;
      if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
        let g = p + f + 1;
        g += 2, s.callArguments = (0, Us.default)(i, g).slice(g);
      }
    }
    return s;
  }
  function Ip(e) {
    let t = Object.keys(zt.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
    if (n) {
      let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
      return { code: e.slice(o, i), openingBraceIndex: i };
    }
    return null;
  }
  function Op(e) {
    let t = 0;
    for (let r = 0;r < e.length; r++) {
      if (e.charAt(r) !== " ")
        return t;
      t++;
    }
    return t;
  }
  function kp({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [""], l = t ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Dp(t))), i) {
      a.push("");
      let u = [i.toString()];
      o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    } else
      a.push(""), o && a.push(o), a.push("");
    return a.push(r), a.join(`
`);
  }
  function Dp(e) {
    let t = [e.fileName];
    return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
  }
  function cn(e) {
    let t = e.showColors ? Rp : Cp, r;
    return r = Ap(e, t), kp(r, t);
  }
  var Ys = D(_i());
  function Hs(e, t, r) {
    let n = Ws(e), i = _p(n), o = Lp(i);
    o ? pn(o, t, r) : t.addErrorMessage(() => "Unknown error");
  }
  function Ws(e) {
    return e.errors.flatMap((t) => t.kind === "Union" ? Ws(t) : [t]);
  }
  function _p(e) {
    let t = new Map, r = [];
    for (let n of e) {
      if (n.kind !== "InvalidArgumentType") {
        r.push(n);
        continue;
      }
      let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
      o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Np(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
    }
    return r.push(...t.values()), r;
  }
  function Np(e, t) {
    return [...new Set(e.concat(t))];
  }
  function Lp(e) {
    return Ci(e, (t, r) => {
      let n = Gs(t), i = Gs(r);
      return n !== i ? n - i : Js(t) - Js(r);
    });
  }
  function Gs(e) {
    let t = 0;
    return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
  }
  function Js(e) {
    switch (e.kind) {
      case "InvalidArgumentValue":
      case "ValueTooLarge":
        return 20;
      case "InvalidArgumentType":
        return 10;
      case "RequiredArgumentMissing":
        return -10;
      default:
        return 0;
    }
  }
  var pe = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.isRequired = false;
    }
    makeRequired() {
      return this.isRequired = true, this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
    }
  };
  var Pt = class {
    constructor(t = 0, r) {
      this.context = r;
      this.lines = [];
      this.currentLine = "";
      this.currentIndent = 0;
      this.currentIndent = t;
    }
    write(t) {
      return typeof t == "string" ? this.currentLine += t : t.write(this), this;
    }
    writeJoined(t, r, n = (i, o) => o.write(i)) {
      let i = r.length - 1;
      for (let o = 0;o < r.length; o++)
        n(r[o], this), o !== i && this.write(t);
      return this;
    }
    writeLine(t) {
      return this.write(t).newLine();
    }
    newLine() {
      this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = undefined;
      let t = this.afterNextNewLineCallback;
      return this.afterNextNewLineCallback = undefined, t?.(), this;
    }
    withIndent(t) {
      return this.indent(), t(this), this.unindent(), this;
    }
    afterNextNewline(t) {
      return this.afterNextNewLineCallback = t, this;
    }
    indent() {
      return this.currentIndent++, this;
    }
    unindent() {
      return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t) {
      return this.marginSymbol = t, this;
    }
    toString() {
      return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
      return this.currentLine.length;
    }
    indentedCurrentLine() {
      let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
      return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
    }
  };
  var dn = class {
    constructor(t) {
      this.value = t;
    }
    write(t) {
      t.write(this.value);
    }
    markAsError() {
      this.value.markAsError();
    }
  };
  var mn = (e) => e;
  var fn = { bold: mn, red: mn, green: mn, dim: mn, enabled: false };
  var Ks = { bold: W, red: de, green: Ve, dim: ke, enabled: true };
  var Tt = { write(e) {
    e.writeLine(",");
  } };
  var Pe = class {
    constructor(t) {
      this.contents = t;
      this.isUnderlined = false;
      this.color = (t2) => t2;
    }
    underline() {
      return this.isUnderlined = true, this;
    }
    setColor(t) {
      return this.color = t, this;
    }
    write(t) {
      let r = t.getCurrentLineLength();
      t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
        t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
      });
    }
  };
  var ze = class {
    constructor() {
      this.hasError = false;
    }
    markAsError() {
      return this.hasError = true, this;
    }
  };
  var Rt = class extends ze {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    addItem(r) {
      return this.items.push(new dn(r)), this;
    }
    getField(r) {
      return this.items[r];
    }
    getPrintWidth() {
      return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
    }
    write(r) {
      if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithItems(r);
    }
    writeEmpty(r) {
      let n = new Pe("[]");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithItems(r) {
      let { colors: n } = r.context;
      r.writeLine("[").withIndent(() => r.writeJoined(Tt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(n.red("~".repeat(this.getPrintWidth())));
      });
    }
    asObject() {
    }
  };
  var Ct = class e extends ze {
    constructor() {
      super(...arguments);
      this.fields = {};
      this.suggestions = [];
    }
    addField(r) {
      this.fields[r.name] = r;
    }
    addSuggestion(r) {
      this.suggestions.push(r);
    }
    getField(r) {
      return this.fields[r];
    }
    getDeepField(r) {
      let [n, ...i] = r, o = this.getField(n);
      if (!o)
        return;
      let s = o;
      for (let a of i) {
        let l;
        if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Rt && (l = s.value.getField(Number(a))), !l)
          return;
        s = l;
      }
      return s;
    }
    getDeepFieldValue(r) {
      return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
      return !!this.getField(r);
    }
    removeAllFields() {
      this.fields = {};
    }
    removeField(r) {
      delete this.fields[r];
    }
    getFields() {
      return this.fields;
    }
    isEmpty() {
      return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
      return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
      let n = this;
      for (let i of r) {
        if (!(n instanceof e))
          return;
        let o = n.getSubSelectionValue(i);
        if (!o)
          return;
        n = o;
      }
      return n;
    }
    getDeepSelectionParent(r) {
      let n = this.getSelectionParent();
      if (!n)
        return;
      let i = n;
      for (let o of r) {
        let s = i.value.getFieldValue(o);
        if (!s || !(s instanceof e))
          return;
        let a = s.getSelectionParent();
        if (!a)
          return;
        i = a;
      }
      return i;
    }
    getSelectionParent() {
      let r = this.getField("select")?.value.asObject();
      if (r)
        return { kind: "select", value: r };
      let n = this.getField("include")?.value.asObject();
      if (n)
        return { kind: "include", value: n };
    }
    getSubSelectionValue(r) {
      return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
      let r = Object.values(this.fields);
      return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
    }
    write(r) {
      let n = Object.values(this.fields);
      if (n.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithContents(r, n);
    }
    asObject() {
      return this;
    }
    writeEmpty(r) {
      let n = new Pe("{}");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithContents(r, n) {
      r.writeLine("{").withIndent(() => {
        r.writeJoined(Tt, [...n, ...this.suggestions]).newLine();
      }), r.write("}"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  };
  var H = class extends ze {
    constructor(r) {
      super();
      this.text = r;
    }
    getPrintWidth() {
      return this.text.length;
    }
    write(r) {
      let n = new Pe(this.text);
      this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
    }
    asObject() {
    }
  };
  var nr = class {
    constructor() {
      this.fields = [];
    }
    addField(t, r) {
      return this.fields.push({ write(n) {
        let { green: i, dim: o } = n.context.colors;
        n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
      } }), this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.writeLine(r("{")).withIndent(() => {
        t.writeJoined(Tt, this.fields).newLine();
      }).write(r("}")).addMarginSymbol(r("+"));
    }
  };
  function pn(e, t, r) {
    switch (e.kind) {
      case "MutuallyExclusiveFields":
        Mp(e, t);
        break;
      case "IncludeOnScalar":
        $p(e, t);
        break;
      case "EmptySelection":
        qp(e, t, r);
        break;
      case "UnknownSelectionField":
        Up(e, t);
        break;
      case "InvalidSelectionValue":
        Qp(e, t);
        break;
      case "UnknownArgument":
        Gp(e, t);
        break;
      case "UnknownInputField":
        Jp(e, t);
        break;
      case "RequiredArgumentMissing":
        Hp(e, t);
        break;
      case "InvalidArgumentType":
        Wp(e, t);
        break;
      case "InvalidArgumentValue":
        Kp(e, t);
        break;
      case "ValueTooLarge":
        Yp(e, t);
        break;
      case "SomeFieldsMissing":
        zp(e, t);
        break;
      case "TooManyFieldsGiven":
        Zp(e, t);
        break;
      case "Union":
        Hs(e, t, r);
        break;
      default:
        throw new Error("not implemented: " + e.kind);
    }
  }
  function Mp(e, t) {
    let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
  }
  function $p(e, t) {
    let [r, n] = ir(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
    if (o && (o.getField(n)?.markAsError(), i))
      for (let s of i.fields)
        s.isRelation && o.addSuggestion(new pe(s.name, "true"));
    t.addErrorMessage((s) => {
      let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
      return i ? a += ` on model ${s.bold(i.name)}. ${or(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
  }
  function qp(e, t, r) {
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getField("omit")?.value.asObject();
      if (i) {
        Vp(e, t, i);
        return;
      }
      if (n.hasField("select")) {
        jp(e, t);
        return;
      }
    }
    if (r?.[wt(e.outputType.name)]) {
      Bp(e, t);
      return;
    }
    t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
  }
  function Vp(e, t, r) {
    r.removeAllFields();
    for (let n of e.outputType.fields)
      r.addSuggestion(new pe(n.name, "false"));
    t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function jp(e, t) {
    let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
    n && (n.removeAllFields(), Xs(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${or(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
  }
  function Bp(e, t) {
    let r = new nr;
    for (let i of e.outputType.fields)
      i.isRelation || r.addField(i.name, "false");
    let n = new pe("omit", r).makeRequired();
    if (e.selectionPath.length === 0)
      t.arguments.addSuggestion(n);
    else {
      let [i, o] = ir(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
      if (a) {
        let l = a?.value.asObject() ?? new Ct;
        l.addSuggestion(n), a.value = l;
      }
    }
    t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
  }
  function Up(e, t) {
    let r = ea(e.selectionPath, t);
    if (r.parentKind !== "unknown") {
      r.field.markAsError();
      let n = r.parent;
      switch (r.parentKind) {
        case "select":
          Xs(n, e.outputType);
          break;
        case "include":
          Xp(n, e.outputType);
          break;
        case "omit":
          ed(n, e.outputType);
          break;
      }
    }
    t.addErrorMessage((n) => {
      let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
      return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(or(n)), i.join(" ");
    });
  }
  function Qp(e, t) {
    let r = ea(e.selectionPath, t);
    r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
  }
  function Gp(e, t) {
    let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && (n.getField(r)?.markAsError(), td(n, e.arguments)), t.addErrorMessage((i) => zs(i, r, e.arguments.map((o) => o.name)));
  }
  function Jp(e, t) {
    let [r, n] = ir(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (i) {
      i.getDeepField(e.argumentPath)?.markAsError();
      let o = i.getDeepFieldValue(r)?.asObject();
      o && ta(o, e.inputType);
    }
    t.addErrorMessage((o) => zs(o, n, e.inputType.fields.map((s) => s.name)));
  }
  function zs(e, t, r) {
    let n = [`Unknown argument \`${e.red(t)}\`.`], i = nd(t, r);
    return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(or(e)), n.join(" ");
  }
  function Hp(e, t) {
    let r;
    t.addErrorMessage((l) => r?.value instanceof H && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (!n)
      return;
    let [i, o] = ir(e.argumentPath), s = new nr, a = n.getDeepFieldValue(i)?.asObject();
    if (a)
      if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields)
          s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new pe(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(Zs).join(" | ");
        a.addSuggestion(new pe(o, l).makeRequired());
      }
  }
  function Zs(e) {
    return e.kind === "list" ? `${Zs(e.elementType)}[]` : e.name;
  }
  function Wp(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = gn("or", e.argument.typeNames.map((s) => i.green(s)));
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
  }
  function Kp(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
        let s = gn("or", e.argument.typeNames.map((a) => i.green(a)));
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
  }
  function Yp(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
    if (n) {
      let s = n.getDeepField(e.argumentPath)?.value;
      s?.markAsError(), s instanceof H && (i = s.text);
    }
    t.addErrorMessage((o) => {
      let s = ["Unable to fit value"];
      return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
    });
  }
  function zp(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
    if (n) {
      let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
      i && ta(i, e.inputType);
    }
    t.addErrorMessage((i) => {
      let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${gn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(or(i)), o.join(" ");
    });
  }
  function Zp(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
    if (n) {
      let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
      o && (o.markAsError(), i = Object.keys(o.getFields()));
    }
    t.addErrorMessage((o) => {
      let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${gn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
  }
  function Xs(e, t) {
    for (let r of t.fields)
      e.hasField(r.name) || e.addSuggestion(new pe(r.name, "true"));
  }
  function Xp(e, t) {
    for (let r of t.fields)
      r.isRelation && !e.hasField(r.name) && e.addSuggestion(new pe(r.name, "true"));
  }
  function ed(e, t) {
    for (let r of t.fields)
      !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new pe(r.name, "true"));
  }
  function td(e, t) {
    for (let r of t)
      e.hasField(r.name) || e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
  }
  function ea(e, t) {
    let [r, n] = ir(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
    if (!i)
      return { parentKind: "unknown", fieldName: n };
    let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
    return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
  }
  function ta(e, t) {
    if (t.kind === "object")
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new pe(r.name, r.typeNames.join(" | ")));
  }
  function ir(e) {
    let t = [...e], r = t.pop();
    if (!r)
      throw new Error("unexpected empty path");
    return [t, r];
  }
  function or({ green: e, enabled: t }) {
    return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
  }
  function gn(e, t) {
    if (t.length === 1)
      return t[0];
    let r = [...t], n = r.pop();
    return `${r.join(", ")} ${e} ${n}`;
  }
  var rd = 3;
  function nd(e, t) {
    let r = 1 / 0, n;
    for (let i of t) {
      let o = (0, Ys.default)(e, i);
      o > rd || o < r && (r = o, n = i);
    }
    return n;
  }
  function ra(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  }
  var sr = class {
    constructor(t, r, n, i, o) {
      this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
    }
    _toGraphQLInputType() {
      let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
      return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
  };
  function St(e) {
    return e instanceof sr;
  }
  var hn = Symbol();
  var Ni = new WeakMap;
  var $e = class {
    constructor(t) {
      t === hn ? Ni.set(this, `Prisma.${this._getName()}`) : Ni.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Ni.get(this);
    }
  };
  var ar = class extends $e {
    _getNamespace() {
      return "NullTypes";
    }
  };
  var lr = class extends ar {
  };
  Li(lr, "DbNull");
  var ur = class extends ar {
  };
  Li(ur, "JsonNull");
  var cr = class extends ar {
  };
  Li(cr, "AnyNull");
  var yn = { classes: { DbNull: lr, JsonNull: ur, AnyNull: cr }, instances: { DbNull: new lr(hn), JsonNull: new ur(hn), AnyNull: new cr(hn) } };
  function Li(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  }
  var na = ": ";
  var En = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = false;
    }
    markAsError() {
      this.hasError = true;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + na.length;
    }
    write(t) {
      let r = new Pe(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(na).write(this.value);
    }
  };
  var Fi = class {
    constructor(t) {
      this.errorMessages = [];
      this.arguments = t;
    }
    write(t) {
      t.write(this.arguments);
    }
    addErrorMessage(t) {
      this.errorMessages.push(t);
    }
    renderAllMessages(t) {
      return this.errorMessages.map((r) => r(t)).join(`
`);
    }
  };
  function At(e) {
    return new Fi(ia(e));
  }
  function ia(e) {
    let t = new Ct;
    for (let [r, n] of Object.entries(e)) {
      let i = new En(r, oa(n));
      t.addField(i);
    }
    return t;
  }
  function oa(e) {
    if (typeof e == "string")
      return new H(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean")
      return new H(String(e));
    if (typeof e == "bigint")
      return new H(`${e}n`);
    if (e === null)
      return new H("null");
    if (e === undefined)
      return new H("undefined");
    if (vt(e))
      return new H(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array)
      return Buffer.isBuffer(e) ? new H(`Buffer.alloc(${e.byteLength})`) : new H(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
      let t = an(e) ? e.toISOString() : "Invalid Date";
      return new H(`new Date("${t}")`);
    }
    return e instanceof $e ? new H(`Prisma.${e._getName()}`) : St(e) ? new H(`prisma.${ra(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? id(e) : typeof e == "object" ? ia(e) : new H(Object.prototype.toString.call(e));
  }
  function id(e) {
    let t = new Rt;
    for (let r of e)
      t.addItem(oa(r));
    return t;
  }
  function bn(e, t) {
    let r = t === "pretty" ? Ks : fn, n = e.renderAllMessages(r), i = new Pt(0, { colors: r }).write(e).toString();
    return { message: n, args: i };
  }
  function wn({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
    let a = At(e);
    for (let p of t)
      pn(p, a, s);
    let { message: l, args: u } = bn(a, r), c = cn({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
    throw new te(c, { clientVersion: o });
  }
  var Te = class {
    constructor() {
      this._map = new Map;
    }
    get(t) {
      return this._map.get(t)?.value;
    }
    set(t, r) {
      this._map.set(t, { value: r });
    }
    getOrCreate(t, r) {
      let n = this._map.get(t);
      if (n)
        return n.value;
      let i = r();
      return this.set(t, i), i;
    }
  };
  function pr(e) {
    let t;
    return { get() {
      return t || (t = { value: e() }), t.value;
    } };
  }
  function Re(e) {
    return e.replace(/^./, (t) => t.toLowerCase());
  }
  function aa(e, t, r) {
    let n = Re(r);
    return !t.result || !(t.result.$allModels || t.result[n]) ? e : od({ ...e, ...sa(t.name, e, t.result.$allModels), ...sa(t.name, e, t.result[n]) });
  }
  function od(e) {
    let t = new Te, r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
    return ht(e, (n) => ({ ...n, needs: r(n.name, new Set) }));
  }
  function sa(e, t, r) {
    return r ? ht(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: sd(t, o, i) })) : {};
  }
  function sd(e, t, r) {
    let n = e?.[t]?.compute;
    return n ? (i) => r({ ...i, [t]: n(i) }) : r;
  }
  function la(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (e[n.name])
        for (let i of n.needs)
          r[i] = true;
    return r;
  }
  function ua(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (!e[n.name])
        for (let i of n.needs)
          delete r[i];
    return r;
  }
  var xn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new Te;
      this.modelExtensionsCache = new Te;
      this.queryCallbacksCache = new Te;
      this.clientExtensions = pr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      this.batchCallbacks = pr(() => {
        let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
        return r2 ? t2.concat(r2) : t2;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => aa(this.previous?.getAllComputedFields(t), this.extension, t));
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = Re(t);
        return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== undefined && (o[t][r] !== undefined && i.push(o[t][r]), o[t].$allOperations !== undefined && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== undefined && (o.$allModels[r] !== undefined && i.push(o.$allModels[r]), o.$allModels.$allOperations !== undefined && i.push(o.$allModels.$allOperations)), o[r] !== undefined && i.push(o[r]), o.$allOperations !== undefined && i.push(o.$allOperations), n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  };
  var It = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e;
    }
    static single(t) {
      return new e(new xn(t));
    }
    isEmpty() {
      return this.head === undefined;
    }
    append(t) {
      return new e(new xn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
  var ca = Symbol();
  var dr = class {
    constructor(t) {
      if (t !== ca)
        throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(t) {
      return t === undefined ? vn : t;
    }
  };
  var vn = new dr(ca);
  function Ce(e) {
    return e instanceof dr;
  }
  var ad = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
  var pa = "explicitly `undefined` values are not allowed";
  function Pn({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = It.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
    let p = new Mi({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
    return { modelName: e, action: ad[t], query: mr(r, p) };
  }
  function mr({ select: e, include: t, ...r } = {}, n) {
    let i = r.omit;
    return delete r.omit, { arguments: ma(r, n), selection: ld(e, t, i, n) };
  }
  function ld(e, t, r, n) {
    return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), dd(e, n)) : ud(n, t, r);
  }
  function ud(e, t, r) {
    let n = {};
    return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && cd(n, t, e), pd(n, r, e), n;
  }
  function cd(e, t, r) {
    for (let [n, i] of Object.entries(t)) {
      if (Ce(i))
        continue;
      let o = r.nestSelection(n);
      if ($i(i, o), i === false || i === undefined) {
        e[n] = false;
        continue;
      }
      let s = r.findField(n);
      if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
        e[n] = mr(i === true ? {} : i, o);
        continue;
      }
      if (i === true) {
        e[n] = true;
        continue;
      }
      e[n] = mr(i, o);
    }
  }
  function pd(e, t, r) {
    let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = ua(i, n);
    for (let [s, a] of Object.entries(o)) {
      if (Ce(a))
        continue;
      $i(a, r.nestSelection(s));
      let l = r.findField(s);
      n?.[s] && !l || (e[s] = !a);
    }
  }
  function dd(e, t) {
    let r = {}, n = t.getComputedFields(), i = la(e, n);
    for (let [o, s] of Object.entries(i)) {
      if (Ce(s))
        continue;
      let a = t.nestSelection(o);
      $i(s, a);
      let l = t.findField(o);
      if (!(n?.[o] && !l)) {
        if (s === false || s === undefined || Ce(s)) {
          r[o] = false;
          continue;
        }
        if (s === true) {
          l?.kind === "object" ? r[o] = mr({}, a) : r[o] = true;
          continue;
        }
        r[o] = mr(s, a);
      }
    }
    return r;
  }
  function da(e, t) {
    if (e === null)
      return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
      return e;
    if (typeof e == "bigint")
      return { $type: "BigInt", value: String(e) };
    if (xt(e)) {
      if (an(e))
        return { $type: "DateTime", value: e.toISOString() };
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
    }
    if (St(e))
      return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
    if (Array.isArray(e))
      return md(e, t);
    if (ArrayBuffer.isView(e)) {
      let { buffer: r, byteOffset: n, byteLength: i } = e;
      return { $type: "Bytes", value: Buffer.from(r, n, i).toString("base64") };
    }
    if (fd(e))
      return e.values;
    if (vt(e))
      return { $type: "Decimal", value: e.toFixed() };
    if (e instanceof $e) {
      if (e !== yn.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
      return { $type: "Enum", value: e._getName() };
    }
    if (gd(e))
      return e.toJSON();
    if (typeof e == "object")
      return ma(e, t);
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
  }
  function ma(e, t) {
    if (e.$type)
      return { $type: "Raw", value: e };
    let r = {};
    for (let n in e) {
      let i = e[n], o = t.nestArgument(n);
      Ce(i) || (i !== undefined ? r[n] = da(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: pa }));
    }
    return r;
  }
  function md(e, t) {
    let r = [];
    for (let n = 0;n < e.length; n++) {
      let i = t.nestArgument(String(n)), o = e[n];
      if (o === undefined || Ce(o)) {
        let s = o === undefined ? "undefined" : "Prisma.skip";
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
      }
      r.push(da(o, i));
    }
    return r;
  }
  function fd(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
  }
  function gd(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
  }
  function $i(e, t) {
    e === undefined && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: pa });
  }
  var Mi = class e {
    constructor(t) {
      this.params = t;
      this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
    }
    throwValidationError(t) {
      wn({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
    }
    getSelectionPath() {
      return this.params.selectionPath;
    }
    getArgumentPath() {
      return this.params.argumentPath;
    }
    getArgumentName() {
      return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
      if (!(!this.params.modelName || !this.modelOrType))
        return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
    }
    isRawAction() {
      return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
    }
    isPreviewFeatureOn(t) {
      return this.params.previewFeatures.includes(t);
    }
    getComputedFields() {
      if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(t) {
      return this.modelOrType?.fields.find((r) => r.name === t);
    }
    nestSelection(t) {
      let r = this.findField(t), n = r?.kind === "object" ? r.type : undefined;
      return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
    }
    getGlobalOmit() {
      return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[wt(this.params.modelName)] ?? {} : {};
    }
    shouldApplyGlobalOmit() {
      switch (this.params.action) {
        case "findFirst":
        case "findFirstOrThrow":
        case "findUniqueOrThrow":
        case "findMany":
        case "upsert":
        case "findUnique":
        case "createManyAndReturn":
        case "create":
        case "update":
        case "updateManyAndReturn":
        case "delete":
          return true;
        case "executeRaw":
        case "aggregateRaw":
        case "runCommandRaw":
        case "findRaw":
        case "createMany":
        case "deleteMany":
        case "groupBy":
        case "updateMany":
        case "count":
        case "aggregate":
        case "queryRaw":
          return false;
        default:
          Fe(this.params.action, "Unknown action");
      }
    }
    nestArgument(t) {
      return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
    }
  };
  var Ot = class {
    constructor(t) {
      this._engine = t;
    }
    prometheus(t) {
      return this._engine.metrics({ format: "prometheus", ...t });
    }
    json(t) {
      return this._engine.metrics({ format: "json", ...t });
    }
  };
  function fa(e) {
    return { models: qi(e.models), enums: qi(e.enums), types: qi(e.types) };
  }
  function qi(e) {
    let t = {};
    for (let { name: r, ...n } of e)
      t[r] = n;
    return t;
  }
  function ga(e, t) {
    let r = pr(() => hd(t));
    Object.defineProperty(e, "dmmf", { get: () => r.get() });
  }
  function hd(e) {
    return { datamodel: { models: Vi(e.models), enums: Vi(e.enums), types: Vi(e.types) } };
  }
  function Vi(e) {
    return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
  }
  var ji = new WeakMap;
  var Tn = "$$PrismaTypedSql";
  var Bi = class {
    constructor(t, r) {
      ji.set(this, { sql: t, values: r }), Object.defineProperty(this, Tn, { value: Tn });
    }
    get sql() {
      return ji.get(this).sql;
    }
    get values() {
      return ji.get(this).values;
    }
  };
  function ha(e) {
    return (...t) => new Bi(e, t);
  }
  function ya(e) {
    return e != null && e[Tn] === Tn;
  }
  function fr(e) {
    return { ok: false, error: e, map() {
      return fr(e);
    }, flatMap() {
      return fr(e);
    } };
  }
  var Ui = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (;this.registeredErrors[r] !== undefined; )
        r++;
      return this.registeredErrors[r] = { error: t }, r;
    }
  };
  var Qi = (e) => {
    let t = new Ui, r = Se(t, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t, queryRaw: Se(t, e.queryRaw.bind(e)), executeRaw: Se(t, e.executeRaw.bind(e)), provider: e.provider, transactionContext: async (...i) => (await r(...i)).map((s) => yd(t, s)) };
    return e.getConnectionInfo && (n.getConnectionInfo = bd(t, e.getConnectionInfo.bind(e))), n;
  };
  var yd = (e, t) => {
    let r = Se(e, t.startTransaction.bind(t));
    return { adapterName: t.adapterName, provider: t.provider, queryRaw: Se(e, t.queryRaw.bind(t)), executeRaw: Se(e, t.executeRaw.bind(t)), startTransaction: async (...n) => (await r(...n)).map((o) => Ed(e, o)) };
  };
  var Ed = (e, t) => ({ adapterName: t.adapterName, provider: t.provider, options: t.options, queryRaw: Se(e, t.queryRaw.bind(t)), executeRaw: Se(e, t.executeRaw.bind(t)), commit: Se(e, t.commit.bind(t)), rollback: Se(e, t.rollback.bind(t)) });
  function Se(e, t) {
    return async (...r) => {
      try {
        return await t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return fr({ kind: "GenericJs", id: i });
      }
    };
  }
  function bd(e, t) {
    return (...r) => {
      try {
        return t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return fr({ kind: "GenericJs", id: i });
      }
    };
  }
  var Kl = D(li());
  var Yl = __require("async_hooks");
  var zl = __require("events");
  var Zl = D(__require("fs"));
  var Nr = D(__require("path"));
  var ae = class e {
    constructor(t, r) {
      if (t.length - 1 !== r.length)
        throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
      let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
      this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
      let i = 0, o = 0;
      for (;i < r.length; ) {
        let s = r[i++], a = t[i];
        if (s instanceof e) {
          this.strings[o] += s.strings[0];
          let l = 0;
          for (;l < s.values.length; )
            this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
          this.strings[o] += a;
        } else
          this.values[o++] = s, this.strings[o] = a;
      }
    }
    get sql() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `?${this.strings[r++]}`;
      return n;
    }
    get statement() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `:${r}${this.strings[r++]}`;
      return n;
    }
    get text() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `$${r}${this.strings[r++]}`;
      return n;
    }
    inspect() {
      return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
    }
  };
  function Ea(e, t = ",", r = "", n = "") {
    if (e.length === 0)
      throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new ae([r, ...Array(e.length - 1).fill(t), n], e);
  }
  function Gi(e) {
    return new ae([e], []);
  }
  var ba = Gi("");
  function Ji(e, ...t) {
    return new ae(e, t);
  }
  function gr(e) {
    return { getKeys() {
      return Object.keys(e);
    }, getPropertyValue(t) {
      return e[t];
    } };
  }
  function ie(e, t) {
    return { getKeys() {
      return [e];
    }, getPropertyValue() {
      return t();
    } };
  }
  function ot(e) {
    let t = new Te;
    return { getKeys() {
      return e.getKeys();
    }, getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    }, getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    } };
  }
  var Rn = { enumerable: true, configurable: true, writable: true };
  function Cn(e) {
    let t = new Set(e);
    return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => Rn, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
  }
  var wa = Symbol.for("nodejs.util.inspect.custom");
  function Ae(e, t) {
    let r = wd(t), n = new Set, i = new Proxy(e, { get(o, s) {
      if (n.has(s))
        return o[s];
      let a = r.get(s);
      return a ? a.getPropertyValue(s) : o[s];
    }, has(o, s) {
      if (n.has(s))
        return true;
      let a = r.get(s);
      return a ? a.has?.(s) ?? true : Reflect.has(o, s);
    }, ownKeys(o) {
      let s = xa(Reflect.ownKeys(o), r), a = xa(Array.from(r.keys()), r);
      return [...new Set([...s, ...a, ...n])];
    }, set(o, s, a) {
      return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
    }, getOwnPropertyDescriptor(o, s) {
      let a = Reflect.getOwnPropertyDescriptor(o, s);
      if (a && !a.configurable)
        return a;
      let l = r.get(s);
      return l ? l.getPropertyDescriptor ? { ...Rn, ...l?.getPropertyDescriptor(s) } : Rn : a;
    }, defineProperty(o, s, a) {
      return n.add(s), Reflect.defineProperty(o, s, a);
    }, getPrototypeOf: () => Object.prototype });
    return i[wa] = function() {
      let o = { ...this };
      return delete o[wa], o;
    }, i;
  }
  function wd(e) {
    let t = new Map;
    for (let r of e) {
      let n = r.getKeys();
      for (let i of n)
        t.set(i, r);
    }
    return t;
  }
  function xa(e, t) {
    return e.filter((r) => t.get(r)?.has?.(r) ?? true);
  }
  function kt(e) {
    return { getKeys() {
      return e;
    }, has() {
      return false;
    }, getPropertyValue() {
    } };
  }
  function Dt(e, t) {
    return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : undefined };
  }
  function va(e) {
    if (e === undefined)
      return "";
    let t = At(e);
    return new Pt(0, { colors: fn }).write(t).toString();
  }
  var xd = "P2037";
  function _t({ error: e, user_facing_error: t }, r, n) {
    return t.error_code ? new ee(vd(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new B(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
  }
  function vd(e, t) {
    let r = e.message;
    return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === xd && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
  }
  var hr = "<unknown>";
  function Pa(e) {
    var t = e.split(`
`);
    return t.reduce(function(r, n) {
      var i = Rd(n) || Sd(n) || Od(n) || Nd(n) || Dd(n);
      return i && r.push(i), r;
    }, []);
  }
  var Pd = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var Td = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  function Rd(e) {
    var t = Pd.exec(e);
    if (!t)
      return null;
    var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Td.exec(t[2]);
    return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || hr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
  }
  var Cd = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  function Sd(e) {
    var t = Cd.exec(e);
    return t ? { file: t[2], methodName: t[1] || hr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  }
  var Ad = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
  var Id = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  function Od(e) {
    var t = Ad.exec(e);
    if (!t)
      return null;
    var r = t[3] && t[3].indexOf(" > eval") > -1, n = Id.exec(t[3]);
    return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || hr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
  }
  var kd = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
  function Dd(e) {
    var t = kd.exec(e);
    return t ? { file: t[3], methodName: t[1] || hr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
  }
  var _d = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  function Nd(e) {
    var t = _d.exec(e);
    return t ? { file: t[2], methodName: t[1] || hr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  }
  var Hi = class {
    getLocation() {
      return null;
    }
  };
  var Wi = class {
    constructor() {
      this._error = new Error;
    }
    getLocation() {
      let t = this._error.stack;
      if (!t)
        return null;
      let n = Pa(t).find((i) => {
        if (!i.file)
          return false;
        let o = Ei(i.file);
        return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
      });
      return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
    }
  };
  function Ze(e) {
    return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite : new Hi : new Wi;
  }
  var Ta = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
  function Nt(e = {}) {
    let t = Fd(e);
    return Object.entries(t).reduce((n, [i, o]) => (Ta[i] !== undefined ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
  }
  function Fd(e = {}) {
    return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
  }
  function Sn(e = {}) {
    return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
  }
  function Ra(e, t) {
    let r = Sn(e);
    return t({ action: "aggregate", unpacker: r, argsMapper: Nt })(e);
  }
  function Md(e = {}) {
    let { select: t, ...r } = e;
    return typeof t == "object" ? Nt({ ...r, _count: t }) : Nt({ ...r, _count: { _all: true } });
  }
  function $d(e = {}) {
    return typeof e.select == "object" ? (t) => Sn(e)(t)._count : (t) => Sn(e)(t)._count._all;
  }
  function Ca(e, t) {
    return t({ action: "count", unpacker: $d(e), argsMapper: Md })(e);
  }
  function qd(e = {}) {
    let t = Nt(e);
    if (Array.isArray(t.by))
      for (let r of t.by)
        typeof r == "string" && (t.select[r] = true);
    else
      typeof t.by == "string" && (t.select[t.by] = true);
    return t;
  }
  function Vd(e = {}) {
    return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
      r._count = r._count._all;
    }), t);
  }
  function Sa(e, t) {
    return t({ action: "groupBy", unpacker: Vd(e), argsMapper: qd })(e);
  }
  function Aa(e, t, r) {
    if (t === "aggregate")
      return (n) => Ra(n, r);
    if (t === "count")
      return (n) => Ca(n, r);
    if (t === "groupBy")
      return (n) => Sa(n, r);
  }
  function Ia(e, t) {
    let r = t.fields.filter((i) => !i.relationName), n = Ri(r, (i) => i.name);
    return new Proxy({}, { get(i, o) {
      if (o in i || typeof o == "symbol")
        return i[o];
      let s = n[o];
      if (s)
        return new sr(e, o, s.type, s.isList, s.kind === "enum");
    }, ...Cn(Object.keys(n)) });
  }
  var Oa = (e) => Array.isArray(e) ? e : e.split(".");
  var Ki = (e, t) => Oa(t).reduce((r, n) => r && r[n], e);
  var ka = (e, t, r) => Oa(t).reduceRight((n, i, o, s) => Object.assign({}, Ki(e, s.slice(0, o)), { [i]: n }), r);
  function jd(e, t) {
    return e === undefined || t === undefined ? [] : [...t, "select", e];
  }
  function Bd(e, t, r) {
    return t === undefined ? e ?? {} : ka(t, r, e || true);
  }
  function Yi(e, t, r, n, i, o) {
    let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
    return (l) => {
      let u = Ze(e._errorFormat), c = jd(n, i), p = Bd(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = Ud(e, t);
      return new Proxy(d, { get(g, h) {
        if (!f.includes(h))
          return g[h];
        let P = [a[h].type, r, h], C = [c, p];
        return Yi(e, ...P, ...C);
      }, ...Cn([...f, ...Object.getOwnPropertyNames(d)]) });
    };
  }
  function Ud(e, t) {
    return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
  }
  var Qd = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
  var Gd = ["aggregate", "count", "groupBy"];
  function zi(e, t) {
    let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Jd(e, t), Wd(e, t), gr(r), ie("name", () => t), ie("$name", () => t), ie("$parent", () => e._appliedParent)];
    return Ae({}, n);
  }
  function Jd(e, t) {
    let r = Re(t), n = Object.keys(zt.ModelAction).concat("count");
    return { getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = i, s = (a) => (l) => {
        let u = Ze(e._errorFormat);
        return e._createPrismaPromise((c) => {
          let p = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: c, callsite: u };
          return e._request({ ...p, ...a });
        });
      };
      return Qd.includes(o) ? Yi(e, t, s) : Hd(i) ? Aa(e, i, s) : s({});
    } };
  }
  function Hd(e) {
    return Gd.includes(e);
  }
  function Wd(e, t) {
    return ot(ie("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return Ia(t, r);
    }));
  }
  function Da(e) {
    return e.replace(/^./, (t) => t.toUpperCase());
  }
  var Zi = Symbol();
  function yr(e) {
    let t = [Kd(e), ie(Zi, () => e), ie("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
    return r && t.push(gr(r)), Ae(e, t);
  }
  function Kd(e) {
    let t = Object.keys(e._runtimeDataModel.models), r = t.map(Re), n = [...new Set(t.concat(r))];
    return ot({ getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = Da(i);
      if (e._runtimeDataModel.models[o] !== undefined)
        return zi(e, o);
      if (e._runtimeDataModel.models[i] !== undefined)
        return zi(e, i);
    }, getPropertyDescriptor(i) {
      if (!r.includes(i))
        return { enumerable: false };
    } });
  }
  function _a(e) {
    return e[Zi] ? e[Zi] : e;
  }
  function Na(e) {
    if (typeof e == "function")
      return e(this);
    if (e.client?.__AccelerateEngine) {
      let r = e.client.__AccelerateEngine;
      this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
    }
    let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: undefined }, $on: { value: undefined } });
    return yr(t);
  }
  function La({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
    let o = i.getAllComputedFields(t);
    if (!o)
      return e;
    let s = [], a = [];
    for (let l of Object.values(o)) {
      if (n) {
        if (n[l.name])
          continue;
        let u = l.needs.filter((c) => n[c]);
        u.length > 0 && a.push(kt(u));
      } else if (r) {
        if (!r[l.name])
          continue;
        let u = l.needs.filter((c) => !r[c]);
        u.length > 0 && a.push(kt(u));
      }
      Yd(e, l.needs) && s.push(zd(l, Ae(e, s)));
    }
    return s.length > 0 || a.length > 0 ? Ae(e, [...s, ...a]) : e;
  }
  function Yd(e, t) {
    return t.every((r) => Ti(e, r));
  }
  function zd(e, t) {
    return ot(ie(e.name, () => e.compute(t)));
  }
  function An({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
    if (Array.isArray(t)) {
      for (let s = 0;s < t.length; s++)
        t[s] = An({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
      return t;
    }
    let o = e(t, i, r) ?? t;
    return r.include && Fa({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Fa({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
  }
  function Fa({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
    for (let [o, s] of Object.entries(e)) {
      if (!s || t[o] == null || Ce(s))
        continue;
      let l = n.models[r].fields.find((c) => c.name === o);
      if (!l || l.kind !== "object" || !l.relationName)
        continue;
      let u = typeof s == "object" ? s : {};
      t[o] = An({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
    }
  }
  function Ma({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : An({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (a, l, u) => {
      let c = Re(l);
      return La({ result: a, modelName: c, select: u.select, omit: u.select ? undefined : { ...o?.[c], ...u.omit }, extensions: n });
    } });
  }
  function $a(e) {
    if (e instanceof ae)
      return Zd(e);
    if (Array.isArray(e)) {
      let r = [e[0]];
      for (let n = 1;n < e.length; n++)
        r[n] = Er(e[n]);
      return r;
    }
    let t = {};
    for (let r in e)
      t[r] = Er(e[r]);
    return t;
  }
  function Zd(e) {
    return new ae(e.strings, e.values);
  }
  function Er(e) {
    if (typeof e != "object" || e == null || e instanceof $e || St(e))
      return e;
    if (vt(e))
      return new ve(e.toFixed());
    if (xt(e))
      return new Date(+e);
    if (ArrayBuffer.isView(e))
      return e.slice(0);
    if (Array.isArray(e)) {
      let t = e.length, r;
      for (r = Array(t);t--; )
        r[t] = Er(e[t]);
      return r;
    }
    if (typeof e == "object") {
      let t = {};
      for (let r in e)
        r === "__proto__" ? Object.defineProperty(t, r, { value: Er(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Er(e[r]);
      return t;
    }
    Fe(e, "Unknown value");
  }
  function Va(e, t, r, n = 0) {
    return e._createPrismaPromise((i) => {
      let o = t.customDataProxyFetch;
      return "transaction" in t && i !== undefined && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: $a(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Qa(o, l), a.args = s, Va(e, a, r, n + 1);
      } });
    });
  }
  function ja(e, t) {
    let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
    if (e._extensions.isEmpty())
      return e._executeRequest(t);
    let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
    return Va(e, t, s);
  }
  function Ba(e) {
    return (t) => {
      let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
      return n.length ? Ua(r, n, 0, e) : e(r);
    };
  }
  function Ua(e, t, r, n) {
    if (r === t.length)
      return n(e);
    let i = e.customDataProxyFetch, o = e.requests[0].transaction;
    return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : undefined } : undefined }, __internalParams: e, query(s, a = e) {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = Qa(i, l), Ua(a, t, r + 1, n);
    } });
  }
  var qa = (e) => e;
  function Qa(e = qa, t = qa) {
    return (r) => e(t(r));
  }
  var Ga = F("prisma:client");
  var Ja = { Vercel: "vercel", "Netlify CI": "netlify" };
  function Ha({ postinstall: e, ciName: t, clientVersion: r }) {
    if (Ga("checkPlatformCaching:postinstall", e), Ga("checkPlatformCaching:ciName", t), e === true && t && t in Ja) {
      let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Ja[t]}-build`;
      throw console.error(n), new T(n, r);
    }
  }
  function Wa(e, t) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
  }
  var Xd = "Cloudflare-Workers";
  var em = "node";
  function Ka() {
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Xd ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === em ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
  }
  var tm = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
  function In() {
    let e = Ka();
    return { id: e, prettyName: tm[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
  }
  var el = D(__require("fs"));
  var br = D(__require("path"));
  function On(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${rm(e)}`;
  }
  function rm(e) {
    let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
    return xi({ ...t, binaryTargets: o });
  }
  function Xe(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
  }
  function et(e) {
    let { searchedLocations: t } = e;
    return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
  }
  function Ya(e) {
    let { runtimeBinaryTarget: t } = e;
    return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${On(e)}

${et(e)}`;
  }
  function kn(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
  }
  function Dn(e) {
    let { errorStack: t } = e;
    return t?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
  }
  function za(e) {
    let { queryEngineName: t } = e;
    return `${Xe(e)}${Dn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${kn("engine-not-found-bundler-investigation")}

${et(e)}`;
  }
  function Za(e) {
    let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
    return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${On(e)}

${et(e)}`;
  }
  function Xa(e) {
    let { queryEngineName: t } = e;
    return `${Xe(e)}${Dn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${kn("engine-not-found-tooling-investigation")}

${et(e)}`;
  }
  var nm = F("prisma:client:engines:resolveEnginePath");
  var im = () => new RegExp("runtime[\\\\/]library\\.m?js$");
  async function tl(e, t) {
    let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
    if (r !== undefined)
      return r;
    let { enginePath: n, searchedLocations: i } = await om(e, t);
    if (nm("enginePath", n), n !== undefined && e === "binary" && pi(n), n !== undefined)
      return t.prismaPath = n;
    let o = await nt(), s = t.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(im()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: rl(e, o), expectedLocation: br.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
    throw a && l ? p = Za(c) : l ? p = Ya(c) : u ? p = za(c) : p = Xa(c), new T(p, t.clientVersion);
  }
  async function om(engineType, config) {
    let binaryTarget = await nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, br.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, br.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
    __filename.includes("resolveEnginePath") && searchLocations.push(ts());
    for (let e of searchLocations) {
      let t = rl(engineType, binaryTarget), r = br.default.join(e, t);
      if (searchedLocations.push(e), el.default.existsSync(r))
        return { enginePath: r, searchedLocations };
    }
    return { enginePath: undefined, searchedLocations };
  }
  function rl(e, t) {
    return e === "library" ? qr(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
  }
  var Xi = D(Pi());
  function nl(e) {
    return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
  }
  function il(e) {
    return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
  }
  var ol = D(vs());
  function sl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
    return (0, ol.default)({ user: t, repo: r, template: n, title: e, body: i });
  }
  function al({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
    let a = ko(6000 - (s?.length ?? 0)), l = il((0, Xi.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Xi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? nl(s) : ""}
\`\`\`
`), p = sl({ title: r, body: c });
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \uD83D\uDE4F
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
  }
  function Lt({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
    let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
    if (o === undefined ? i = undefined : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== undefined && i === undefined)
      throw new T(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === undefined)
      throw new T("error: Missing URL environment variable, value, or override.", n);
    return i;
  }
  var _n = class extends Error {
    constructor(t, r) {
      super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
    }
    get [Symbol.toStringTag]() {
      return this.name;
    }
  };
  var le = class extends _n {
    constructor(t, r) {
      super(t, r), this.isRetryable = r.isRetryable ?? true;
    }
  };
  function S(e, t) {
    return { ...e, isRetryable: t };
  }
  var Ft = class extends le {
    constructor(r) {
      super("This request must be retried", S(r, true));
      this.name = "ForcedRetryError";
      this.code = "P5001";
    }
  };
  w(Ft, "ForcedRetryError");
  var st = class extends le {
    constructor(r, n) {
      super(r, S(n, false));
      this.name = "InvalidDatasourceError";
      this.code = "P6001";
    }
  };
  w(st, "InvalidDatasourceError");
  var at = class extends le {
    constructor(r, n) {
      super(r, S(n, false));
      this.name = "NotImplementedYetError";
      this.code = "P5004";
    }
  };
  w(at, "NotImplementedYetError");
  var V = class extends le {
    constructor(t, r) {
      super(t, r), this.response = r.response;
      let n = this.response.headers.get("prisma-request-id");
      if (n) {
        let i = `(The request id was: ${n})`;
        this.message = this.message + " " + i;
      }
    }
  };
  var lt = class extends V {
    constructor(r) {
      super("Schema needs to be uploaded", S(r, true));
      this.name = "SchemaMissingError";
      this.code = "P5005";
    }
  };
  w(lt, "SchemaMissingError");
  var eo = "This request could not be understood by the server";
  var wr = class extends V {
    constructor(r, n, i) {
      super(n || eo, S(r, false));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
  w(wr, "BadRequestError");
  var xr = class extends V {
    constructor(r, n) {
      super("Engine not started: healthcheck timeout", S(r, true));
      this.name = "HealthcheckTimeoutError";
      this.code = "P5013";
      this.logs = n;
    }
  };
  w(xr, "HealthcheckTimeoutError");
  var vr = class extends V {
    constructor(r, n, i) {
      super(n, S(r, true));
      this.name = "EngineStartupError";
      this.code = "P5014";
      this.logs = i;
    }
  };
  w(vr, "EngineStartupError");
  var Pr = class extends V {
    constructor(r) {
      super("Engine version is not supported", S(r, false));
      this.name = "EngineVersionNotSupportedError";
      this.code = "P5012";
    }
  };
  w(Pr, "EngineVersionNotSupportedError");
  var to = "Request timed out";
  var Tr = class extends V {
    constructor(r, n = to) {
      super(n, S(r, false));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
  w(Tr, "GatewayTimeoutError");
  var sm = "Interactive transaction error";
  var Rr = class extends V {
    constructor(r, n = sm) {
      super(n, S(r, false));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
  w(Rr, "InteractiveTransactionError");
  var am = "Request parameters are invalid";
  var Cr = class extends V {
    constructor(r, n = am) {
      super(n, S(r, false));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
  w(Cr, "InvalidRequestError");
  var ro = "Requested resource does not exist";
  var Sr = class extends V {
    constructor(r, n = ro) {
      super(n, S(r, false));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
  w(Sr, "NotFoundError");
  var no = "Unknown server error";
  var Mt = class extends V {
    constructor(r, n, i) {
      super(n || no, S(r, true));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
  w(Mt, "ServerError");
  var io = "Unauthorized, check your connection string";
  var Ar = class extends V {
    constructor(r, n = io) {
      super(n, S(r, false));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
  w(Ar, "UnauthorizedError");
  var oo = "Usage exceeded, retry again later";
  var Ir = class extends V {
    constructor(r, n = oo) {
      super(n, S(r, true));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
  w(Ir, "UsageExceededError");
  async function lm(e) {
    let t;
    try {
      t = await e.text();
    } catch {
      return { type: "EmptyError" };
    }
    try {
      let r = JSON.parse(t);
      if (typeof r == "string")
        switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
      if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
          return { type: "QueryEngineError", body: r };
        if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
          let n = Object.values(r)[0].reason;
          return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
        }
      }
      return { type: "UnknownJsonError", body: r };
    } catch {
      return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
    }
  }
  async function Or(e, t) {
    if (e.ok)
      return;
    let r = { clientVersion: t, response: e }, n = await lm(e);
    if (n.type === "QueryEngineError")
      throw new ee(n.body.message, { code: n.body.error_code, clientVersion: t });
    if (n.type === "DataProxyError") {
      if (n.body === "InternalDataProxyError")
        throw new Mt(r, "Internal Data Proxy error");
      if ("EngineNotStarted" in n.body) {
        if (n.body.EngineNotStarted.reason === "SchemaMissing")
          return new lt(r);
        if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
          throw new Pr(r);
        if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
          throw new vr(r, i, o);
        }
        if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
          throw new T(i, t, o);
        }
        if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
          let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
          throw new xr(r, i);
        }
      }
      if ("InteractiveTransactionMisrouted" in n.body) {
        let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
        throw new Rr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
      }
      if ("InvalidRequestError" in n.body)
        throw new Cr(r, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403)
      throw new Ar(r, $t(io, n));
    if (e.status === 404)
      return new Sr(r, $t(ro, n));
    if (e.status === 429)
      throw new Ir(r, $t(oo, n));
    if (e.status === 504)
      throw new Tr(r, $t(to, n));
    if (e.status >= 500)
      throw new Mt(r, $t(no, n));
    if (e.status >= 400)
      throw new wr(r, $t(eo, n));
  }
  function $t(e, t) {
    return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
  }
  function ll(e) {
    let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
    return new Promise((i) => setTimeout(() => i(n), n));
  }
  var qe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function ul(e) {
    let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
    for (let p = 0;p < o; p = p + 3)
      c = t[p] << 16 | t[p + 1] << 8 | t[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, r += qe[s] + qe[a] + qe[l] + qe[u];
    return i == 1 ? (c = t[o], s = (c & 252) >> 2, a = (c & 3) << 4, r += qe[s] + qe[a] + "==") : i == 2 && (c = t[o] << 8 | t[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, r += qe[s] + qe[a] + qe[l] + "="), r;
  }
  function cl(e) {
    if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
      throw new T("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
  }
  function um(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  function so(e) {
    return new Date(um(e));
  }
  var pl = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "6.2.0-14.4123509d24aa4dede1e864b46351bf2790323b69", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
  var kr = class extends le {
    constructor(r, n) {
      super(`Cannot fetch data from service:
${r}`, S(n, true));
      this.name = "RequestError";
      this.code = "P5010";
    }
  };
  w(kr, "RequestError");
  async function ut(e, t, r = (n) => n) {
    let { clientVersion: n, ...i } = t, o = r(fetch);
    try {
      return await o(e, i);
    } catch (s) {
      let a = s.message ?? "Unknown error";
      throw new kr(a, { clientVersion: n, cause: s });
    }
  }
  var pm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
  var dl = F("prisma:client:dataproxyEngine");
  async function dm(e, t) {
    let r = pl["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
      return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
      return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === undefined && pm.test(i))
      return i;
    if (o !== undefined || n === "0.0.0" || n === "in-memory") {
      if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
      let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = mm(`<=${a}.${l}.${u}`), p = await ut(c, { clientVersion: n });
      if (!p.ok)
        throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
      let d = await p.text();
      dl("length of body fetched from unpkg.com", d.length);
      let f;
      try {
        f = JSON.parse(d);
      } catch (g) {
        throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), g;
      }
      return f.version;
    }
    throw new at("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
  }
  async function ml(e, t) {
    let r = await dm(e, t);
    return dl("version", r), r;
  }
  function mm(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
  }
  var fl = 3;
  var Nn = F("prisma:client:dataproxyEngine");
  var ao = class {
    constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
      this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
      this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
    }
  };
  var Dr = class {
    constructor(t) {
      this.name = "DataProxyEngine";
      cl(t), this.config = t, this.env = { ...t.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = ul(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== undefined && await this.startPromise, this.startPromise = (async () => {
        let [t, r] = this.extractHostAndApiKey();
        this.host = t, this.headerBuilder = new ao({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await ml(t, this.config), Nn("host", this.host);
      })(), await this.startPromise;
    }
    async stop() {
    }
    propagateResponseExtensions(t) {
      t?.logs?.length && t.logs.forEach((r) => {
        switch (r.level) {
          case "debug":
          case "trace":
            Nn(r);
            break;
          case "error":
          case "warn":
          case "info": {
            this.logEmitter.emit(r.level, { timestamp: so(r.timestamp), message: r.attributes.message ?? "", target: r.target });
            break;
          }
          case "query": {
            this.logEmitter.emit("query", { query: r.attributes.query ?? "", timestamp: so(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? "", target: r.target });
            break;
          }
          default:
            r.level;
        }
      }), t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces);
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(t) {
      return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: true };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await ut(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
        r.ok || Nn("schema response status", r.status);
        let n = await Or(r, this.clientVersion);
        if (n)
          throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: new Date, target: "" }), n;
        this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: new Date, target: "" });
      });
    }
    request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
      return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
    }
    async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
      let o = n?.kind === "itx" ? n.options : undefined, s = Dt(t, n);
      return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), ("errors" in l) ? this.convertProtocolErrorsToClientError(l.errors) : l));
    }
    requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
      return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
        let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
        o(s);
        let a = await ut(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
        a.ok || Nn("graphql response status", a.status), await this.handleError(await Or(a, this.clientVersion));
        let l = await a.json();
        if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l)
          throw this.convertProtocolErrorsToClientError(l.errors);
        return "batchResult" in l ? l.batchResult : l;
      } });
    }
    async transaction(t, r, n) {
      let i = { start: "starting", commit: "committing", rollback: "rolling back" };
      return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
        if (t === "start") {
          let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
          o(a);
          let l = await ut(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
          await this.handleError(await Or(l, this.clientVersion));
          let u = await l.json(), { extensions: c } = u;
          c && this.propagateResponseExtensions(c);
          let p = u.id, d = u["data-proxy"].endpoint;
          return { id: p, payload: { endpoint: d } };
        } else {
          let s = `${n.payload.endpoint}/${t}`;
          o(s);
          let a = await ut(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
          await this.handleError(await Or(a, this.clientVersion));
          let l = await a.json(), { extensions: u } = l;
          u && this.propagateResponseExtensions(u);
          return;
        }
      } });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = Lt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
      try {
        i = new URL(n);
      } catch {
        throw new st(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:" && o !== "prisma+postgres:")
        throw new st(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      let l = a.get("api_key");
      if (l === null || l.length < 1)
        throw new st(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
      return [s, l];
    }
    metrics() {
      throw new at("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
    }
    async withRetry(t) {
      for (let r = 0;; r++) {
        let n = (i) => {
          this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: new Date, target: "" });
        };
        try {
          return await t.callback({ logHttpCall: n });
        } catch (i) {
          if (!(i instanceof le) || !i.isRetryable)
            throw i;
          if (r >= fl)
            throw i instanceof Ft ? i.cause : i;
          this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${fl} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: new Date, target: "" });
          let o = await ll(r);
          this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: new Date, target: "" });
        }
      }
    }
    async handleError(t) {
      if (t instanceof lt)
        throw await this.uploadSchema(), new Ft({ clientVersion: this.clientVersion, cause: t });
      if (t)
        throw t;
    }
    convertProtocolErrorsToClientError(t) {
      return t.length === 1 ? _t(t[0], this.config.clientVersion, this.config.activeProvider) : new B(JSON.stringify(t), { clientVersion: this.config.clientVersion });
    }
    applyPendingMigrations() {
      throw new Error("Method not implemented.");
    }
  };
  function gl(e) {
    if (e?.kind === "itx")
      return e.options.id;
  }
  var uo = D(__require("os"));
  var hl = D(__require("path"));
  var lo = Symbol("PrismaLibraryEngineCache");
  function fm() {
    let e = globalThis;
    return e[lo] === undefined && (e[lo] = {}), e[lo];
  }
  function gm(e) {
    let t = fm();
    if (t[e] !== undefined)
      return t[e];
    let r = hl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
    return process.platform !== "win32" && (i = uo.default.constants.dlopen.RTLD_LAZY | uo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
  }
  var yl = { async loadLibrary(e) {
    let t = await ei(), r = await tl("library", e);
    try {
      return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => gm(r));
    } catch (n) {
      let i = di({ e: n, platformInfo: t, id: r });
      throw new T(i, e.clientVersion);
    }
  } };
  var co;
  var El = { async loadLibrary(e) {
    let { clientVersion: t, adapter: r, engineWasm: n } = e;
    if (r === undefined)
      throw new T(`The \`adapter\` option for \`PrismaClient\` is required in this context (${In().prettyName})`, t);
    if (n === undefined)
      throw new T("WASM engine was unexpectedly `undefined`", t);
    co === undefined && (co = (async () => {
      let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
      if (s == null)
        throw new T("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
      let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
      return o.__wbg_set_wasm(l.exports), o.QueryEngine;
    })());
    let i = await co;
    return { debugPanic() {
      return Promise.reject("{}");
    }, dmmf() {
      return Promise.resolve("{}");
    }, version() {
      return { commit: "unknown", version: "unknown" };
    }, QueryEngine: i };
  } };
  var hm = "P2036";
  var Ie = F("prisma:client:libraryEngine");
  function ym(e) {
    return e.item_type === "query" && "query" in e;
  }
  function Em(e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
  }
  var bl = [...Wn, "native"];
  var bm = 0xffffffffffffffffn;
  var po = 1n;
  function wm() {
    let e = po++;
    return po > bm && (po = 1n), e;
  }
  var _r = class {
    constructor(t, r) {
      this.name = "LibraryEngine";
      this.libraryLoader = r ?? yl, t.engineWasm !== undefined && (this.libraryLoader = r ?? El), this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = t.inlineSchema, this.tracingHelper = t.tracingHelper, t.enableDebugLogs && (this.logLevel = "debug");
      let n = Object.keys(t.overrideDatasources)[0], i = t.overrideDatasources[n]?.url;
      n !== undefined && i !== undefined && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
    }
    wrapEngine(t) {
      return { applyPendingMigrations: t.applyPendingMigrations?.bind(t), commitTransaction: this.withRequestId(t.commitTransaction.bind(t)), connect: this.withRequestId(t.connect.bind(t)), disconnect: this.withRequestId(t.disconnect.bind(t)), metrics: t.metrics?.bind(t), query: this.withRequestId(t.query.bind(t)), rollbackTransaction: this.withRequestId(t.rollbackTransaction.bind(t)), sdlSchema: t.sdlSchema?.bind(t), startTransaction: this.withRequestId(t.startTransaction.bind(t)), trace: t.trace.bind(t) };
    }
    withRequestId(t) {
      return async (...r) => {
        let n = wm().toString();
        try {
          return await t(...r, n);
        } finally {
          if (this.tracingHelper.isEnabled()) {
            let i = await this.engine?.trace(n);
            if (i) {
              let o = JSON.parse(i);
              this.tracingHelper.dispatchEngineSpans(o.spans);
            }
          }
        }
      };
    }
    async applyPendingMigrations() {
      throw new Error("Cannot call this method from this type of engine instance");
    }
    async transaction(t, r, n) {
      await this.start();
      let i = JSON.stringify(r), o;
      if (t === "start") {
        let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
        o = await this.engine?.startTransaction(a, i);
      } else
        t === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : t === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
      let s = this.parseEngineResponse(o);
      if (xm(s)) {
        let a = this.getExternalAdapterError(s);
        throw a ? a.error : new ee(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
      }
      return s;
    }
    async instantiateLibrary() {
      if (Ie("internalSetup"), this.libraryInstantiationPromise)
        return this.libraryInstantiationPromise;
      Hn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
    }
    async getCurrentBinaryTarget() {
      {
        if (this.binaryTarget)
          return this.binaryTarget;
        let t = await this.tracingHelper.runInChildSpan("detect_platform", () => nt());
        if (!bl.includes(t))
          throw new T(`Unknown ${de("PRISMA_QUERY_ENGINE_LIBRARY")} ${de(W(t))}. Possible binaryTargets: ${Ve(bl.join(", "))} or a path to the query engine library.
You may have to run ${Ve("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return t;
      }
    }
    parseEngineResponse(t) {
      if (!t)
        throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
      try {
        return JSON.parse(t);
      } catch {
        throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
        try {
          let t = new WeakRef(this), { adapter: r } = this.config;
          r && Ie("Using driver adapter: %O", r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (n) => {
            t.deref()?.logger(n);
          }, r));
        } catch (t) {
          let r = t, n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new T(n.message, this.config.clientVersion, n.error_code);
        }
      }
    }
    logger(t) {
      let r = this.parseEngineResponse(t);
      r && (r.level = r?.level.toLowerCase() ?? "unknown", ym(r) ? this.logEmitter.emit("query", { timestamp: new Date, query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : Em(r) ? this.loggerRustPanic = new ce(mo(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: new Date, message: r.message, target: r.module_path }));
    }
    parseInitError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    parseRequestError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
    }
    async start() {
      if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
        return Ie(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
      if (this.libraryStarted)
        return;
      let t = async () => {
        Ie("library starting");
        try {
          let r = { traceparent: this.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, Ie("library started");
        } catch (r) {
          let n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new T(n.message, this.config.clientVersion, n.error_code);
        } finally {
          this.libraryStartingPromise = undefined;
        }
      };
      return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
    }
    async stop() {
      if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
        return Ie("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted)
        return;
      let t = async () => {
        await new Promise((n) => setTimeout(n, 5)), Ie("library stopping");
        let r = { traceparent: this.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = undefined, Ie("library stopped");
      };
      return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
    }
    version() {
      return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(t) {
      return this.library?.debugPanic(t);
    }
    async request(t, { traceparent: r, interactiveTransaction: n }) {
      Ie(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
      try {
        await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
        let s = this.parseEngineResponse(await this.executingQueryPromise);
        if (s.errors)
          throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        if (this.loggerRustPanic)
          throw this.loggerRustPanic;
        return { data: s };
      } catch (s) {
        if (s instanceof T)
          throw s;
        if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:"))
          throw new ce(mo(this, s.message), this.config.clientVersion);
        let a = this.parseRequestError(s.message);
        throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
      }
    }
    async requestBatch(t, { transaction: r, traceparent: n }) {
      Ie("requestBatch");
      let i = Dt(t, r);
      await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), gl(r));
      let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
      if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
      let { batchResult: a, errors: l } = s;
      if (Array.isArray(a))
        return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u });
      throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
    }
    buildQueryError(t) {
      if (t.user_facing_error.is_panic)
        return new ce(mo(this, t.user_facing_error.message), this.config.clientVersion);
      let r = this.getExternalAdapterError(t.user_facing_error);
      return r ? r.error : _t(t, this.config.clientVersion, this.config.activeProvider);
    }
    getExternalAdapterError(t) {
      if (t.error_code === hm && this.config.adapter) {
        let r = t.meta?.id;
        Yr(typeof r == "number", "Malformed external JS error received from the engine");
        let n = this.config.adapter.errorRegistry.consumeError(r);
        return Yr(n, "External error with reported id was not registered"), n;
      }
    }
    async metrics(t) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t));
      return t.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
  function xm(e) {
    return typeof e == "object" && e !== null && e.error_code !== undefined;
  }
  function mo(e, t) {
    return al({ binaryTarget: e.binaryTarget, title: t, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
  }
  function wl({ copyEngine: e = true }, t) {
    let r;
    try {
      r = Lt({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
    } catch {
    }
    let n = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
    e && n && tr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
    let i = Yt(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary";
    if (o && s || s && false) {
      let u;
      throw e ? r?.startsWith("prisma://") ? u = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : u = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : u = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new te(u.join(`
`), { clientVersion: t.clientVersion });
    }
    if (o)
      return new Dr(t);
    if (a)
      return new _r(t);
    throw new te("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
  }
  function Ln({ generator: e }) {
    return e?.previewFeatures ?? [];
  }
  var xl = (e) => ({ command: e });
  var vl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
  function qt(e) {
    try {
      return Pl(e, "fast");
    } catch {
      return Pl(e, "slow");
    }
  }
  function Pl(e, t) {
    return JSON.stringify(e.map((r) => Rl(r, t)));
  }
  function Rl(e, t) {
    if (Array.isArray(e))
      return e.map((r) => Rl(r, t));
    if (typeof e == "bigint")
      return { prisma__type: "bigint", prisma__value: e.toString() };
    if (xt(e))
      return { prisma__type: "date", prisma__value: e.toJSON() };
    if (ve.isDecimal(e))
      return { prisma__type: "decimal", prisma__value: e.toJSON() };
    if (Buffer.isBuffer(e))
      return { prisma__type: "bytes", prisma__value: e.toString("base64") };
    if (vm(e))
      return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
    if (ArrayBuffer.isView(e)) {
      let { buffer: r, byteOffset: n, byteLength: i } = e;
      return { prisma__type: "bytes", prisma__value: Buffer.from(r, n, i).toString("base64") };
    }
    return typeof e == "object" && t === "slow" ? Cl(e) : e;
  }
  function vm(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
  }
  function Cl(e) {
    if (typeof e != "object" || e === null)
      return e;
    if (typeof e.toJSON == "function")
      return e.toJSON();
    if (Array.isArray(e))
      return e.map(Tl);
    let t = {};
    for (let r of Object.keys(e))
      t[r] = Tl(e[r]);
    return t;
  }
  function Tl(e) {
    return typeof e == "bigint" ? e.toString() : Cl(e);
  }
  var Pm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
  var Sl = Pm;
  var Tm = /^(\s*alter\s)/i;
  var Al = F("prisma:client");
  function fo(e, t, r, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Tm.exec(t))
      throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
  var go = ({ clientMethod: e, activeProvider: t }) => (r) => {
    let n = "", i;
    if (ya(r))
      n = r.sql, i = { values: qt(r.values), __prismaRawParameters__: true };
    else if (Array.isArray(r)) {
      let [o, ...s] = r;
      n = o, i = { values: qt(s || []), __prismaRawParameters__: true };
    } else
      switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: qt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: qt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = vl(r), i = { values: qt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
    return i?.values ? Al(`prisma.${e}(${n}, ${i.values})`) : Al(`prisma.${e}(${n})`), { query: n, parameters: i };
  };
  var Il = { requestArgsToMiddlewareArgs(e) {
    return [e.strings, ...e.values];
  }, middlewareArgsToRequestArgs(e) {
    let [t, ...r] = e;
    return new ae(t, r);
  } };
  var Ol = { requestArgsToMiddlewareArgs(e) {
    return [e];
  }, middlewareArgsToRequestArgs(e) {
    return e[0];
  } };
  function ho(e) {
    return function(r) {
      let n, i = (o = e) => {
        try {
          return o === undefined || o?.kind === "itx" ? n ??= kl(r(o)) : kl(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
      return { then(o, s) {
        return i().then(o, s);
      }, catch(o) {
        return i().catch(o);
      }, finally(o) {
        return i().finally(o);
      }, requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      }, [Symbol.toStringTag]: "PrismaPromise" };
    };
  }
  function kl(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
  }
  var Rm = { isEnabled() {
    return false;
  }, getTraceParent() {
    return "00-10-10-00";
  }, dispatchEngineSpans() {
  }, getActiveContext() {
  }, runInChildSpan(e, t) {
    return t();
  } };
  var yo = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    dispatchEngineSpans(t) {
      return this.getGlobalTracingHelper().dispatchEngineSpans(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Rm;
    }
  };
  function Dl() {
    return new yo;
  }
  function _l(e, t = () => {
  }) {
    let r, n = new Promise((i) => r = i);
    return { then(i) {
      return --e === 0 && r(t()), i?.(n);
    } };
  }
  function Nl(e) {
    return typeof e == "string" ? e : e.reduce((t, r) => {
      let n = typeof r == "string" ? r : r.level;
      return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
    }, undefined);
  }
  var Fn = class {
    constructor() {
      this._middlewares = [];
    }
    use(t) {
      this._middlewares.push(t);
    }
    get(t) {
      return this._middlewares[t];
    }
    has(t) {
      return !!this._middlewares[t];
    }
    length() {
      return this._middlewares.length;
    }
  };
  var Fl = D(Pi());
  function Mn(e) {
    return typeof e.batchRequestIdx == "number";
  }
  function Ll(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
      return;
    let t = [];
    return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Eo(e.query.arguments)), t.push(Eo(e.query.selection)), t.join("");
  }
  function Eo(e) {
    return `(${Object.keys(e).sort().map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${Eo(n)})` : r;
    }).join(" ")})`;
  }
  var Cm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
  function bo(e) {
    return Cm[e];
  }
  var $n = class {
    constructor(t) {
      this.options = t;
      this.tickActive = false;
      this.batches = {};
    }
    request(t) {
      let r = this.options.batchBy(t);
      return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
        this.dispatchBatches(), this.tickActive = false;
      }))), new Promise((n, i) => {
        this.batches[r].push({ request: t, resolve: n, reject: i });
      })) : this.options.singleLoader(t);
    }
    dispatchBatches() {
      for (let t in this.batches) {
        let r = this.batches[t];
        delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
          n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
        }).catch((n) => {
          r[0].reject(n);
        }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
          if (n instanceof Error)
            for (let i = 0;i < r.length; i++)
              r[i].reject(n);
          else
            for (let i = 0;i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
        }).catch((n) => {
          for (let i = 0;i < r.length; i++)
            r[i].reject(n);
        }));
      }
    }
    get [Symbol.toStringTag]() {
      return "DataLoader";
    }
  };
  function ct(e, t) {
    if (t === null)
      return t;
    switch (e) {
      case "bigint":
        return BigInt(t);
      case "bytes": {
        let { buffer: r, byteOffset: n, byteLength: i } = Buffer.from(t, "base64");
        return new Uint8Array(r, n, i);
      }
      case "decimal":
        return new ve(t);
      case "datetime":
      case "date":
        return new Date(t);
      case "time":
        return new Date(`1970-01-01T${t}Z`);
      case "bigint-array":
        return t.map((r) => ct("bigint", r));
      case "bytes-array":
        return t.map((r) => ct("bytes", r));
      case "decimal-array":
        return t.map((r) => ct("decimal", r));
      case "datetime-array":
        return t.map((r) => ct("datetime", r));
      case "date-array":
        return t.map((r) => ct("date", r));
      case "time-array":
        return t.map((r) => ct("time", r));
      default:
        return t;
    }
  }
  function qn(e) {
    let t = [], r = Sm(e);
    for (let n = 0;n < e.rows.length; n++) {
      let i = e.rows[n], o = { ...r };
      for (let s = 0;s < i.length; s++)
        o[e.columns[s]] = ct(e.types[s], i[s]);
      t.push(o);
    }
    return t;
  }
  function Sm(e) {
    let t = {};
    for (let r = 0;r < e.columns.length; r++)
      t[e.columns[r]] = null;
    return t;
  }
  var Am = F("prisma:client:request_handler");
  var Vn = class {
    constructor(t, r) {
      this.logEmitter = r, this.client = t, this.dataloader = new $n({ batchLoader: Ba(async ({ requests: n, customDataProxyFetch: i }) => {
        let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => bo(p.protocolQuery.action));
        return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Im(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
          if (p instanceof Error)
            return p;
          try {
            return this.mapQueryEngineResult(n[d], p);
          } catch (f) {
            return f;
          }
        });
      }), singleLoader: async (n) => {
        let i = n.transaction?.kind === "itx" ? Ml(n.transaction) : undefined, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: bo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
        return this.mapQueryEngineResult(n, o);
      }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Ll(n.protocolQuery), batchOrder(n, i) {
        return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
      } });
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
        this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data, o = this.unpack(i, t, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: new Date }), r;
      }
    }
    handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
      if (Am(t), Om(t, i))
        throw t;
      if (t instanceof ee && km(t)) {
        let u = $l(t.meta);
        wn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
      }
      let l = t.message;
      if (n && (l = cn({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
        let u = s ? { modelName: s, ...t.meta } : t.meta;
        throw new ee(l, { code: t.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t.batchRequestIdx });
      } else {
        if (t.isPanic)
          throw new ce(l, this.client._clientVersion);
        if (t instanceof B)
          throw new B(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
        if (t instanceof T)
          throw new T(l, this.client._clientVersion);
        if (t instanceof ce)
          throw new ce(l, this.client._clientVersion);
      }
      throw t.clientVersion = this.client._clientVersion, t;
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Fl.default)(t) : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t))
        return t;
      let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = Ki(o, s), l = i === "queryRaw" ? qn(a) : bt(a);
      return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
  function Im(e) {
    if (e) {
      if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
      if (e.kind === "itx")
        return { kind: "itx", options: Ml(e) };
      Fe(e, "Unknown transaction kind");
    }
  }
  function Ml(e) {
    return { id: e.id, payload: e.payload };
  }
  function Om(e, t) {
    return Mn(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
  }
  function km(e) {
    return e.code === "P2009" || e.code === "P2012";
  }
  function $l(e) {
    if (e.kind === "Union")
      return { kind: "Union", errors: e.errors.map($l) };
    if (Array.isArray(e.selectionPath)) {
      let [, ...t] = e.selectionPath;
      return { ...e, selectionPath: t };
    }
    return e;
  }
  var ql = "6.2.1";
  var Vl = ql;
  var Gl = D(_i());
  var L = class extends Error {
    constructor(t) {
      super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientConstructorValidationError";
    }
  };
  w(L, "PrismaClientConstructorValidationError");
  var jl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
  var Bl = ["pretty", "colorless", "minimal"];
  var Ul = ["info", "query", "warn", "error"];
  var _m = { datasources: (e, { datasourceNames: t }) => {
    if (e) {
      if (typeof e != "object" || Array.isArray(e))
        throw new L(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
      for (let [r, n] of Object.entries(e)) {
        if (!t.includes(r)) {
          let i = Vt(r, t) || ` Available datasources: ${t.join(", ")}`;
          throw new L(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
        }
        if (typeof n != "object" || Array.isArray(n))
          throw new L(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (n && typeof n == "object")
          for (let [i, o] of Object.entries(n)) {
            if (i !== "url")
              throw new L(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string")
              throw new L(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
      }
    }
  }, adapter: (e, t) => {
    if (e === null)
      return;
    if (e === undefined)
      throw new L('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (!Ln(t).includes("driverAdapters"))
      throw new L('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
    if (Yt() === "binary")
      throw new L('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }, datasourceUrl: (e) => {
    if (typeof e < "u" && typeof e != "string")
      throw new L(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
  }, errorFormat: (e) => {
    if (e) {
      if (typeof e != "string")
        throw new L(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
      if (!Bl.includes(e)) {
        let t = Vt(e, Bl);
        throw new L(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
      }
    }
  }, log: (e) => {
    if (!e)
      return;
    if (!Array.isArray(e))
      throw new L(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
    function t(r) {
      if (typeof r == "string" && !Ul.includes(r)) {
        let n = Vt(r, Ul);
        throw new L(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
      }
    }
    for (let r of e) {
      t(r);
      let n = { level: t, emit: (i) => {
        let o = ["stdout", "event"];
        if (!o.includes(i)) {
          let s = Vt(i, o);
          throw new L(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
        }
      } };
      if (r && typeof r == "object")
        for (let [i, o] of Object.entries(r))
          if (n[i])
            n[i](o);
          else
            throw new L(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
    }
  }, transactionOptions: (e) => {
    if (!e)
      return;
    let t = e.maxWait;
    if (t != null && t <= 0)
      throw new L(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
    let r = e.timeout;
    if (r != null && r <= 0)
      throw new L(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
  }, omit: (e, t) => {
    if (typeof e != "object")
      throw new L('"omit" option is expected to be an object.');
    if (e === null)
      throw new L('"omit" option can not be `null`');
    let r = [];
    for (let [n, i] of Object.entries(e)) {
      let o = Lm(n, t.runtimeDataModel);
      if (!o) {
        r.push({ kind: "UnknownModel", modelKey: n });
        continue;
      }
      for (let [s, a] of Object.entries(i)) {
        let l = o.fields.find((u) => u.name === s);
        if (!l) {
          r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
          continue;
        }
        if (l.relationName) {
          r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
          continue;
        }
        typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
      }
    }
    if (r.length > 0)
      throw new L(Fm(e, r));
  }, __internal: (e) => {
    if (!e)
      return;
    let t = ["debug", "engine", "configOverride"];
    if (typeof e != "object")
      throw new L(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
    for (let [r] of Object.entries(e))
      if (!t.includes(r)) {
        let n = Vt(r, t);
        throw new L(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
  } };
  function Jl(e, t) {
    for (let [r, n] of Object.entries(e)) {
      if (!jl.includes(r)) {
        let i = Vt(r, jl);
        throw new L(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
      }
      _m[r](n, t);
    }
    if (e.datasourceUrl && e.datasources)
      throw new L('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
  }
  function Vt(e, t) {
    if (t.length === 0 || typeof e != "string")
      return "";
    let r = Nm(e, t);
    return r ? ` Did you mean "${r}"?` : "";
  }
  function Nm(e, t) {
    if (t.length === 0)
      return null;
    let r = t.map((i) => ({ value: i, distance: (0, Gl.default)(e, i) }));
    r.sort((i, o) => i.distance < o.distance ? -1 : 1);
    let n = r[0];
    return n.distance < 3 ? n.value : null;
  }
  function Lm(e, t) {
    return Ql(t.models, e) ?? Ql(t.types, e);
  }
  function Ql(e, t) {
    let r = Object.keys(e).find((n) => wt(n) === t);
    if (r)
      return e[r];
  }
  function Fm(e, t) {
    let r = At(e);
    for (let o of t)
      switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
    let { message: n, args: i } = bn(r, "colorless");
    return `Error validating "omit" option:

${i}

${n}`;
  }
  function Hl(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
      let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
        o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
      }, l = (u) => {
        o || (o = true, r(u));
      };
      for (let u = 0;u < e.length; u++)
        e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Mn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
    });
  }
  var tt = F("prisma:client");
  typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
  var Mm = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
  var $m = Symbol.for("prisma.client.transaction.id");
  var qm = { id: 0, nextId() {
    return ++this.id;
  } };
  function Xl(e) {

    class t {
      constructor(n) {
        this._originalClient = this;
        this._middlewares = new Fn;
        this._createPrismaPromise = ho();
        this.$extends = Na;
        e = n?.__internal?.configOverride?.(e) ?? e, Ha(e), n && Jl(n, e);
        let i = new zl.EventEmitter().on("error", () => {
        });
        this._extensions = It.empty(), this._previewFeatures = Ln(e), this._clientVersion = e.clientVersion ?? Vl, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Dl();
        let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Nr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Nr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
        if (n?.adapter) {
          s = Qi(n.adapter);
          let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
          if (s.provider !== l)
            throw new T(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
          if (n.datasources || n.datasourceUrl !== undefined)
            throw new T("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
        }
        let a = !s && Kt(o, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
        try {
          let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
          c && F.enable("prisma:client");
          let p = Nr.default.resolve(e.dirname, e.relativePath);
          Zl.default.existsSync(p) || (p = e.dirname), tt("dirname", e.dirname), tt("relativePath", e.relativePath), tt("cwd", p);
          let d = u.engine || {};
          if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: Nr.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? undefined, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Nl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Wa(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2000, timeout: l.transactionOptions?.timeout ?? 5000, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Lt, getBatchRequestPayload: Dt, prismaGraphQLToJSError: _t, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: T, PrismaClientKnownRequestError: ee, debug: F("prisma:client:accelerateEngine"), engineVersion: Kl.version, clientVersion: e.clientVersion } }, tt("clientVersion", e.clientVersion), this._engine = wl(e, this._engineConfig), this._requestHandler = new Vn(this, i), l.log)
            for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                er.log(`${er.tags[g] ?? ""}`, h.message || h.query);
              });
            }
          this._metrics = new Ot(this._engine);
        } catch (l) {
          throw l.clientVersion = this._clientVersion, l;
        }
        return this._appliedParent = yr(this);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClient";
      }
      $use(n) {
        this._middlewares.use(n);
      }
      $on(n, i) {
        n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
      }
      $connect() {
        try {
          return this._engine.start();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        }
      }
      async $disconnect() {
        try {
          await this._engine.stop();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        } finally {
          Do();
        }
      }
      $executeRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: go({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $executeRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined) {
            let [s, a] = Wl(n, i);
            return fo(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
          }
          throw new te("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
        });
      }
      $executeRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => (fo(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
      }
      $runCommandRaw(n) {
        if (e.activeProvider !== "mongodb")
          throw new te(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
        return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: xl, callsite: Ze(this._errorFormat), transaction: i }));
      }
      async $queryRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: go({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $queryRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined)
            return this.$queryRawInternal(o, "$queryRaw", ...Wl(n, i));
          throw new te("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
        });
      }
      $queryRawTyped(n) {
        return this._createPrismaPromise((i) => {
          if (!this._hasPreviewFlag("typedSql"))
            throw new te("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
          return this.$queryRawInternal(i, "$queryRawTyped", n);
        });
      }
      $queryRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
      }
      _transactionWithArray({ promises: n, options: i }) {
        let o = qm.nextId(), s = _l(n.length), a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
          let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
          return l.requestTransaction?.(p) ?? l;
        });
        return Hl(a);
      }
      async _transactionWithCallback({ callback: n, options: i }) {
        let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
        try {
          let u = { kind: "itx", ...a };
          l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
        } catch (u) {
          throw await this._engine.transaction("rollback", o, a).catch(() => {
          }), u;
        }
        return l;
      }
      _createItxClient(n) {
        return yr(Ae(_a(this), [ie("_appliedParent", () => this._appliedParent._createItxClient(n)), ie("_createPrismaPromise", () => ho(n)), ie($m, () => n.id), kt(Sl)]));
      }
      $transaction(n, i) {
        let o;
        typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
          throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
        } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
        let s = { name: "transaction", attributes: { method: "$transaction" } };
        return this._tracingHelper.runInChildSpan(s, o);
      }
      _request(n) {
        n.otelParentCtx = this._tracingHelper.getActiveContext();
        let i = n.middlewareArgsMapper ?? Mm, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
          let c = this._middlewares.get(++a);
          if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, (O) => c(u, (P) => (O?.end(), l(P))));
          let { runInTransaction: p, args: d, ...f } = u, g = { ...n, ...f };
          d && (g.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== undefined && p === false && delete g.transaction;
          let h = await ja(this, g);
          return g.model ? Ma({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
        };
        return this._tracingHelper.runInChildSpan(s.operation, () => new Yl.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
      }
      async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
        try {
          n = u ? u(n) : n;
          let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => Pn({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
          return F.enabled("prisma:client") && (tt("Prisma Client call:"), tt(`prisma.${i}(${va(n)})`), tt("Generated request:"), tt(JSON.stringify(h, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
        } catch (g) {
          throw g.clientVersion = this._clientVersion, g;
        }
      }
      get $metrics() {
        if (!this._hasPreviewFlag("metrics"))
          throw new te("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
        return this._metrics;
      }
      _hasPreviewFlag(n) {
        return !!this._engineConfig.previewFeatures?.includes(n);
      }
      $applyPendingMigrations() {
        return this._engine.applyPendingMigrations();
      }
    }
    return t;
  }
  function Wl(e, t) {
    return Vm(e) ? [new ae(e, t), Il] : [e, Ol];
  }
  function Vm(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
  }
  var jm = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
  function eu(e) {
    return new Proxy(e, { get(t, r) {
      if (r in t)
        return t[r];
      if (!jm.has(r))
        throw new TypeError(`Invalid enum value: ${String(r)}`);
    } });
  }
  function tu(e) {
    Kt(e, { conflictCheck: "warn" });
  }
  /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS((exports) => {
  var __dirname = "/Users/jordanboutrois/Documents/DEV/hono-gf/my-app/node_modules/.prisma/client";
  Object.defineProperty(exports, "__esModule", { value: true });
  var {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
    PrismaClientRustPanicError: PrismaClientRustPanicError2,
    PrismaClientInitializationError: PrismaClientInitializationError2,
    PrismaClientValidationError: PrismaClientValidationError2,
    getPrismaClient: getPrismaClient2,
    sqltag: sqltag2,
    empty: empty2,
    join: join2,
    raw: raw3,
    skip: skip2,
    Decimal: Decimal2,
    Debug: Debug2,
    objectEnumValues: objectEnumValues2,
    makeStrictEnum: makeStrictEnum2,
    Extensions: Extensions2,
    warnOnce: warnOnce2,
    defineDmmfProperty: defineDmmfProperty2,
    Public: Public2,
    getRuntime: getRuntime2
  } = require_library();
  var Prisma = {};
  exports.Prisma = Prisma;
  exports.$Enums = {};
  Prisma.prismaVersion = {
    client: "6.2.1",
    engine: "4123509d24aa4dede1e864b46351bf2790323b69"
  };
  Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
  Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
  Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
  Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
  Prisma.PrismaClientValidationError = PrismaClientValidationError2;
  Prisma.Decimal = Decimal2;
  Prisma.sql = sqltag2;
  Prisma.empty = empty2;
  Prisma.join = join2;
  Prisma.raw = raw3;
  Prisma.validator = Public2.validator;
  Prisma.getExtensionContext = Extensions2.getExtensionContext;
  Prisma.defineExtension = Extensions2.defineExtension;
  Prisma.DbNull = objectEnumValues2.instances.DbNull;
  Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
  Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
  Prisma.NullTypes = {
    DbNull: objectEnumValues2.classes.DbNull,
    JsonNull: objectEnumValues2.classes.JsonNull,
    AnyNull: objectEnumValues2.classes.AnyNull
  };
  var path = __require("path");
  exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
    ReadUncommitted: "ReadUncommitted",
    ReadCommitted: "ReadCommitted",
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable"
  });
  exports.Prisma.FranchisesScalarFieldEnum = {
    id: "id",
    name: "name",
    address: "address",
    country: "country",
    siret: "siret",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  };
  exports.Prisma.MenusScalarFieldEnum = {
    id: "id",
    name: "name",
    description: "description",
    price: "price",
    available: "available",
    quantity: "quantity",
    franchiseId: "franchiseId",
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  };
  exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc"
  };
  exports.Prisma.QueryMode = {
    default: "default",
    insensitive: "insensitive"
  };
  exports.Prisma.ModelName = {
    Franchises: "Franchises",
    Menus: "Menus"
  };
  var config2 = {
    generator: {
      name: "client",
      provider: {
        fromEnvVar: null,
        value: "prisma-client-js"
      },
      output: {
        value: "/Users/jordanboutrois/Documents/DEV/hono-gf/my-app/node_modules/@prisma/client",
        fromEnvVar: null
      },
      config: {
        engineType: "library"
      },
      binaryTargets: [
        {
          fromEnvVar: null,
          value: "darwin-arm64",
          native: true
        }
      ],
      previewFeatures: [],
      sourceFilePath: "/Users/jordanboutrois/Documents/DEV/hono-gf/my-app/prisma/schema.prisma"
    },
    relativeEnvPaths: {
      rootEnvPath: null,
      schemaEnvPath: "../../../.env"
    },
    relativePath: "../../../prisma",
    clientVersion: "6.2.1",
    engineVersion: "4123509d24aa4dede1e864b46351bf2790323b69",
    datasourceNames: [
      "db"
    ],
    activeProvider: "postgresql",
    postinstall: false,
    inlineDatasources: {
      db: {
        url: {
          fromEnvVar: "DATABASE_URL",
          value: null
        }
      }
    },
    inlineSchema: `// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Franchises {
  id        String   @id @default(uuid()) @map("id")
  name      String   @db.VarChar(255)
  address   String   @db.VarChar(255)
  country   String   @db.VarChar(100)
  siret     String   @unique() @db.VarChar(14)
  menus     Menus[]
  createdAt DateTime @default(now()) @map("created_at")
  updatedAt DateTime @updatedAt @map("updated_at")
}

model Menus {
  id          String     @id @default(uuid()) @map("id")
  name        String     @db.VarChar(255)
  description String     @db.Text
  price       Int
  available   Boolean    @default(false)
  quantity    Int        @default(0)
  franchiseId String     @map("franchise_id")
  franchise   Franchises @relation(fields: [franchiseId], references: [id])
  createdAt   DateTime   @default(now()) @map("created_at")
  updatedAt   DateTime   @updatedAt @map("updated_at")
}
`,
    inlineSchemaHash: "d7c2141b9e548b05d10cecdce27dfd12f1eee2c2f7aabd0d604ea979c3ffd2d9",
    copyEngine: true
  };
  var fs = __require("fs");
  config2.dirname = __dirname;
  if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
    const alternativePaths = [
      "node_modules/.prisma/client",
      ".prisma/client"
    ];
    const alternativePath = alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
    }) ?? alternativePaths[0];
    config2.dirname = path.join(process.cwd(), alternativePath);
    config2.isBundled = true;
  }
  config2.runtimeDataModel = JSON.parse('{"models":{"Franchises":{"dbName":null,"schema":null,"fields":[{"name":"id","dbName":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"address","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"country","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"siret","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["14"]],"isGenerated":false,"isUpdatedAt":false},{"name":"menus","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Menus","nativeType":null,"relationName":"FranchisesToMenus","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Menus":{"dbName":null,"schema":null,"fields":[{"name":"id","dbName":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["Text",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"available","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"quantity","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"franchiseId","dbName":"franchise_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"franchise","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Franchises","nativeType":null,"relationName":"FranchisesToMenus","relationFromFields":["franchiseId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
  defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
  config2.engineWasm = undefined;
  var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
  warnEnvConflicts2({
    rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
  });
  var PrismaClient = getPrismaClient2(config2);
  exports.PrismaClient = PrismaClient;
  Object.assign(exports, Prisma);
  path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
  path.join(process.cwd(), "node_modules/.prisma/client/libquery_engine-darwin-arm64.dylib.node");
  path.join(__dirname, "schema.prisma");
  path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS((exports, module) => {
  module.exports = { ...require_client() };
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS((exports, module) => {
  module.exports = {
    ...require_default()
  };
});

// node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== undefined) {
    if (Array.isArray(form[key])) {
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1;i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1;j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecode = (str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (;i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? undefined : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p.at(-1) === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? undefined : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? undefined : nextKeyIndex : valueIndex);
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? undefined : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : undefined;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? undefined;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = (key) => {
    const { bodyCache, raw: raw2 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw2[key]();
  };
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      try {
        for (const [k, v] of this.#res.headers.entries()) {
          if (k === "content-type") {
            continue;
          }
          if (k === "set-cookie") {
            const cookies = this.#res.headers.getSetCookie();
            _res.headers.delete("set-cookie");
            for (const cookie of cookies) {
              _res.headers.append("set-cookie", cookie);
            }
          } else {
            _res.headers.set(k, v);
          }
        }
      } catch (e) {
        if (e instanceof TypeError && e.message.includes("immutable")) {
          this.res = new Response(_res.body, {
            headers: _res.headers,
            status: _res.status
          });
          return;
        } else {
          throw e;
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === undefined) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= /* @__PURE__ */ new Map;
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : undefined;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers;
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = (...args) => this.#newResponse(...args);
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers;
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response;
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    const isContext = context instanceof Context;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (isContext) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || undefined;
      }
      if (!handler) {
        if (isContext && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && isContext && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.#notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, undefined, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node;
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node;
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  #context = { varIndex: 0 };
  #root = new Node;
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0;; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1;i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1;j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== undefined) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== undefined) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(path === "*" ? "" : `^${path.replace(/\/\*$|([.\\+*[^\]$()])/g, (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)")}$`);
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie;
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length;i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (;paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length;i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length;j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length;k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length;i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = undefined;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]]));
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (;i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length;i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = undefined;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.#children).includes(p)) {
        curNode = curNode.#children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[p] = new Node2;
      const pattern = getPattern(p);
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[p];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length;i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== undefined) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length;i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length;i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length;j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(...this.#getHandlerSets(nextNode.#children["*"], method, node.#params));
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length;k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
            continue;
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(...this.#getHandlerSets(child.#children["*"], method, params, node.#params));
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2;
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length;i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter, new TrieRouter]
    });
  }
};

// node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  return async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
  };
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/middleware/csrf/index.js
var isSafeMethodRe = /^(GET|HEAD)$/;
var isRequestedByFormElementRe = /^\b(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)\b/i;
var csrf = (options) => {
  const handler = ((optsOrigin) => {
    if (!optsOrigin) {
      return (origin, c) => origin === new URL(c.req.url).origin;
    } else if (typeof optsOrigin === "string") {
      return (origin) => origin === optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin);
    }
  })(options?.origin);
  const isAllowedOrigin = (origin, c) => {
    if (origin === undefined) {
      return false;
    }
    return handler(origin, c);
  };
  return async function csrf2(c, next) {
    if (!isSafeMethodRe.test(c.req.method) && isRequestedByFormElementRe.test(c.req.header("content-type") || "text/plain") && !isAllowedOrigin(c.req.header("origin"), c)) {
      const res = new Response("Forbidden", {
        status: 403
      });
      throw new HTTPException(403, { res });
    }
    await next();
  };
};

// src/utils/prisma.ts
var import_client = __toESM(require_default2(), 1);
var prisma = new import_client.PrismaClient;
var prisma_default = prisma;

// src/services/franchises.service.ts
var getAll = async () => {
  return await prisma_default.franchises.findMany();
};
var createFranchise = async (data) => {
  return await prisma_default.franchises.create({
    data: {
      ...data,
      updatedAt: new Date
    }
  });
};
var updateFranchise = async (id, data) => {
  return await prisma_default.franchises.update({
    where: { id },
    data: {
      ...data,
      updatedAt: new Date
    }
  });
};

// node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = (cookie, name) => {
  if (name && cookie.indexOf(name) === -1) {
    return {};
  }
  const pairs = cookie.trim().split(";");
  const parsedCookie = {};
  for (let pairStr of pairs) {
    pairStr = pairStr.trim();
    const valueStartPos = pairStr.indexOf("=");
    if (valueStartPos === -1) {
      continue;
    }
    const cookieName = pairStr.substring(0, valueStartPos).trim();
    if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName)) {
      continue;
    }
    let cookieValue = pairStr.substring(valueStartPos + 1).trim();
    if (cookieValue.startsWith('"') && cookieValue.endsWith('"')) {
      cookieValue = cookieValue.slice(1, -1);
    }
    if (validCookieValueRegEx.test(cookieValue)) {
      parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
      if (name) {
        break;
      }
    }
  }
  return parsedCookie;
};

// node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key, prefix) => {
  const cookie = c.req.raw.headers.get("Cookie");
  if (typeof key === "string") {
    if (!cookie) {
      return;
    }
    let finalKey = key;
    if (prefix === "secure") {
      finalKey = "__Secure-" + key;
    } else if (prefix === "host") {
      finalKey = "__Host-" + key;
    }
    const obj2 = parse(cookie, finalKey);
    return obj2[finalKey];
  }
  if (!cookie) {
    return {};
  }
  const obj = parse(cookie);
  return obj;
};

// node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
  const response = new Response(arrayBuffer, {
    headers: {
      "Content-Type": contentType
    }
  });
  return response.formData();
};

// node_modules/hono/dist/validator/validator.js
var jsonRegex = /^application\/([a-z-\.]+\+)?json(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var multipartRegex = /^multipart\/form-data(;\s?boundary=[a-zA-Z0-9'"()+_,\-./:=?]+)?$/;
var urlencodedRegex = /^application\/x-www-form-urlencoded(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var validator = (target, validationFunc) => {
  return async (c, next) => {
    let value = {};
    const contentType = c.req.header("Content-Type");
    switch (target) {
      case "json":
        if (!contentType || !jsonRegex.test(contentType)) {
          break;
        }
        try {
          value = await c.req.json();
        } catch {
          const message = "Malformed JSON in request body";
          throw new HTTPException(400, { message });
        }
        break;
      case "form": {
        if (!contentType || !(multipartRegex.test(contentType) || urlencodedRegex.test(contentType))) {
          break;
        }
        let formData;
        if (c.req.bodyCache.formData) {
          formData = await c.req.bodyCache.formData;
        } else {
          try {
            const arrayBuffer = await c.req.arrayBuffer();
            formData = await bufferToFormData(arrayBuffer, contentType);
            c.req.bodyCache.formData = formData;
          } catch (e) {
            let message = "Malformed FormData request.";
            message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`;
            throw new HTTPException(400, { message });
          }
        }
        const form = {};
        formData.forEach((value2, key) => {
          if (key.endsWith("[]")) {
            (form[key] ??= []).push(value2);
          } else if (Array.isArray(form[key])) {
            form[key].push(value2);
          } else if (key in form) {
            form[key] = [form[key], value2];
          } else {
            form[key] = value2;
          }
        });
        value = form;
        break;
      }
      case "query":
        value = Object.fromEntries(Object.entries(c.req.queries()).map(([k, v]) => {
          return v.length === 1 ? [k, v[0]] : [k, v];
        }));
        break;
      case "param":
        value = c.req.param();
        break;
      case "header":
        value = c.req.header();
        break;
      case "cookie":
        value = getCookie(c);
        break;
    }
    const res = await validationFunc(value, c);
    if (res instanceof Response) {
      return res;
    }
    c.req.addValidatedData(target, res);
    await next();
  };
};

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error;
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

class ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
}
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== undefined) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      overrideMap,
      overrideMap === errorMap ? undefined : errorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}

class ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
}
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === undefined ? undefined : message.message;
})(errorUtil || (errorUtil = {}));
var _ZodEnum_cache;
var _ZodNativeEnum_cache;

class ParseInputLazyPath {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
}
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message !== null && message !== undefined ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message !== null && message !== undefined ? message : required_error) !== null && _a !== undefined ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message !== null && message !== undefined ? message : invalid_type_error) !== null && _b !== undefined ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}

class ZodType {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus,
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === undefined ? undefined : params.async) !== null && _a !== undefined ? _a : false,
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err === null || err === undefined ? undefined : err.message) === null || _a === undefined ? undefined : _a.toLowerCase()) === null || _b === undefined ? undefined : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === undefined ? undefined : params.errorMap,
        async: true
      },
      path: (params === null || params === undefined ? undefined : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(undefined).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let regex = `([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;
  if (args.precision) {
    regex = `${regex}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    regex = `${regex}(\\.\\d+)?`;
  }
  return regex;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if (!decoded.typ || !decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (_a) {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}

class ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      offset: (_a = options === null || options === undefined ? undefined : options.offset) !== null && _a !== undefined ? _a : false,
      local: (_b = options === null || options === undefined ? undefined : options.local) !== null && _b !== undefined ? _b : false,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof (options === null || options === undefined ? undefined : options.precision) === "undefined" ? null : options === null || options === undefined ? undefined : options.precision,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === undefined ? undefined : options.position,
      ...errorUtil.errToObj(options === null || options === undefined ? undefined : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}

class ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (_a) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = undefined;
    const status = new ParseStatus;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
}
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === undefined ? undefined : params.coerce) !== null && _a !== undefined ? _a : false,
    ...processCreateParams(params)
  });
};

class ZodBoolean extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    ...processCreateParams(params)
  });
};

class ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus;
    let ctx = undefined;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
}
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === undefined ? undefined : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};

class ZodSymbol extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};

class ZodUndefined extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};

class ZodNull extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};

class ZodAny extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};

class ZodUnknown extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
}
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};

class ZodNever extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
}
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};

class ZodVoid extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
}
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};

class ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : undefined,
          maximum: tooBig ? def.exactLength.value : undefined,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}

class ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== undefined ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === undefined ? undefined : _b.call(_a, issue, ctx).message) !== null && _c !== undefined ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== undefined ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
}
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};

class ZodUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = undefined;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [undefined, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};

class ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = new Map;
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
}
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}

class ZodIntersection extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
}
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};

class ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
}
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};

class ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}

class ZodMap extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = new Map;
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map;
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
}
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};

class ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = new Set;
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
}
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};

class ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}

class ZodLazy extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
}
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};

class ZodLiteral extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
}
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}

class ZodEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodEnum_cache.set(this, undefined);
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
}
_ZodEnum_cache = new WeakMap;
ZodEnum.create = createZodEnum;

class ZodNativeEnum extends ZodType {
  constructor() {
    super(...arguments);
    _ZodNativeEnum_cache.set(this, undefined);
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
      __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
    }
    if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
}
_ZodNativeEnum_cache = new WeakMap;
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};

class ZodPromise extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
}
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};

class ZodEffects extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
}
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};

class ZodOptional extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};

class ZodNullable extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};

class ZodDefault extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};

class ZodCatch extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};

class ZodNaN extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
}
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");

class ZodBranded extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}

class ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}

class ZodReadonly extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function custom(check, params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p.fatal) !== null && _a !== undefined ? _a : fatal) !== null && _b !== undefined ? _b : true;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
      }
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  datetimeRegex,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  enum: enumType,
  function: functionType,
  instanceof: instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  null: nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  undefined: undefinedType,
  union: unionType,
  unknown: unknownType,
  void: voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@hono/zod-validator/dist/index.js
var zValidator = (target, schema, hook) => validator(target, async (value, c) => {
  let validatorValue = value;
  if (target === "header" && schema instanceof ZodObject) {
    const schemaKeys = Object.keys(schema.shape);
    const caseInsensitiveKeymap = Object.fromEntries(schemaKeys.map((key) => [key.toLowerCase(), key]));
    validatorValue = Object.fromEntries(Object.entries(value).map(([key, value2]) => [caseInsensitiveKeymap[key] || key, value2]));
  }
  const result = await schema.safeParseAsync(validatorValue);
  if (hook) {
    const hookResult = await hook({ data: validatorValue, ...result, target }, c);
    if (hookResult) {
      if (hookResult instanceof Response) {
        return hookResult;
      }
      if ("response" in hookResult) {
        return hookResult.response;
      }
    }
  }
  if (!result.success) {
    return c.json(result, 400);
  }
  return result.data;
});

// src/validators/franchises.validator.ts
var createFranchiseSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  country: z.string().min(1, "Country is required"),
  siret: z.string().length(14, "SIRET must be exactly 14 characters long").regex(/^\d{14}$/, "SIRET must contain only numbers"),
  updatedAt: z.date().default(() => new Date)
});

// src/controllers/franchises.controller.ts
var franchises = new Hono2;
franchises.get("/", async (c) => {
  try {
    const franchises2 = await getAll();
    if (!franchises2 || franchises2.length <= 0) {
      return c.json(204);
    }
    return c.json(franchises2, 200);
  } catch (e) {
    console.error("[Error] getFranchises: ", e);
    return c.json({ message: "Internal Server Error" }, 500);
  }
});
franchises.post("/", zValidator("json", createFranchiseSchema), async (c) => {
  try {
    const franchiseData = await c.req.json();
    const newFranchise = await createFranchise(franchiseData);
    return c.json(newFranchise, 201);
  } catch (e) {
    console.error("[Error] createNewFranchise: ", e);
    return c.json({ message: "Internal Server Error" }, 500);
  }
});
franchises.put("/:id", async (c) => {
  try {
    const franchiseId = c.req.param("id");
    const updateData = await c.req.json();
    const updatedFranchise = await updateFranchise(franchiseId, updateData);
    if (!updatedFranchise) {
      return c.json({ message: "Franchise non trouv\xE9e" }, 404);
    }
    return c.json(updatedFranchise, 200);
  } catch (e) {
    console.error("[Error] updateExistingFranchise: ", e);
    return c.json({ message: "Internal Server Error" }, 500);
  }
});
var franchises_controller_default = franchises;

// src/index.ts
import * as path from "path";
var __dirname = "/Users/jordanboutrois/Documents/DEV/hono-gf/my-app/src";
var app = new Hono2;
app.use("/", cors());
app.use(csrf({
  origin: ["localhost", "development.myapp.example.com"]
}));
app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});
app.route("/franchises", franchises_controller_default);
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.post("/caca", (c) => {
  return c.text("Hello Hono hey oh!");
});
var certsDir = process.env.ENV === "production" ? path.resolve(__dirname, "../certs") : path.resolve(__dirname, "../certs");
var certPath = path.join(certsDir, "/server.crt");
var keyPath = path.join(certsDir, "/private.key");
if (process.env.ENV === "production") {
  Bun.serve({
    fetch: app.fetch,
    port: 443,
    development: false,
    certFile: certPath,
    keyFile: keyPath
  });
  console.info("Server starting: https://localhost:443");
} else {
  Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3000,
    development: true
  });
  console.info("Server starting: https://localhost:443");
}
