!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("express")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getToken=void 0,t.default=function(e,t,n){r.default.use(new o.Strategy({secretOrKey:n.jwt.secret,issuer:n.jwt.issuer,audience:n.jwt.audience,jwtFromRequest:o.ExtractJwt.fromAuthHeaderWithScheme("JWT")},async(e,n)=>{try{const r=await t.getById(e.sub);r&&!0===r.isActive?n(null,r):n("User not active/registered",!1)}catch(e){n(err,!1)}})),e.use(r.default.initialize())};var r=i(n(2)),o=n(9),s=i(n(10));function i(e){return e&&e.__esModule?e:{default:e}}t.getToken=e=>{const t={sub:e.userName,name:e.name,iss:"one-identity",aud:"stringbees-core"};return s.default.sign(t,"stringbees-secret")}},function(e,t){e.exports=require("passport")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("mongoose")},function(e,t,n){"use strict";var r=f(n(6)),o=f(n(29)),s=f(n(30)),i=f(n(31)),u=f(n(32)),a=f(n(33)),c=f(n(3)),l=f(n(34));function f(e){return e&&e.__esModule?e:{default:e}}const d=process.env.PORT||5e3;Promise.all([(0,o.default)(s.default.cnd)]).then(async([e])=>{const t=new l.default(i.default),n=await(0,r.default)(t,e,u.default,a.default);n.use("/",(e,t)=>{t.sendFile(c.default.join(__dirname,"./index.html"))}),n.listen(d,()=>{t.info(`Server started on port ${d}`)}),process.on("SIGINT",async()=>{await e.close()})}).catch(e=>{console.log("An error occurred while initializing the application.",e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=h(n(0)),o=h(n(7)),s=h(n(1)),i=h(n(11)),u=h(n(13)),a=h(n(14)),c=h(n(3)),l=h(n(15)),f=h(n(18)),d=h(n(20)),p=h(n(23)),y=h(n(26));function h(e){return e&&e.__esModule?e:{default:e}}t.default=async function(e,t,n,h){const b=(0,r.default)(),v=new l.default((0,d.default)(t)),m=new p.default(v,e),g=new y.default(v,m);(0,o.default)(b,e),(0,i.default)(b),(0,s.default)(b,v,h),(0,f.default)(b,n);const _=r.default.Router();return b.use("/scripts",r.default.static(c.default.join(__dirname,"./scripts"))),_.use("/user",g.Router),b.use("/api",_),b.use("/api-docs",u.default.serve,u.default.setup(a.default)),b}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(8),s=(r=o)&&r.__esModule?r:{default:r};s.default.token("content-type",e=>e.headers["content-type"]),s.default.token("content-length",(e,t)=>t.get("Content-Length")),t.default=(e,t)=>{e.use((0,s.default)("REQUEST: :method :url :remote-addr HTTP/:http-version :content-type :status :content-length :response-time",{stream:{write:e=>{t.info(e.trim())}}}))}},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("passport-jwt")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12);t.default=e=>{e.use((0,r.json)()),e.use((0,r.urlencoded)({extended:!0}))}},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("swagger-ui-express")},function(e){e.exports=JSON.parse('{"swagger":"2.0","info":{"version":"1.0.0","title":"Yet Another Node.js Blogg Application API","description":"Yet Another Node.js Blogg Application API","license":{"name":"MIT","url":"https://opensource.org/licenses/MIT"}},"host":"localhost:8080","basePath":"/api","tags":[{"name":"Users","description":"API for users in the system"}],"schemes":["http"],"consumes":["application/json"],"produces":["application/json"],"paths":{"/user":{"post":{"tags":["Users"],"description":"Create new user in system","parameters":[{"name":"user","in":"body","description":"User that we want to create","schema":{"$ref":"#/definitions/User"}}],"produces":["application/json"],"responses":{"200":{"description":"New user is created","schema":{"$ref":"#/definitions/User"}}}},"get":{"tags":["Users"],"summary":"Get all users in system","responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Users"}}}}},"/users/{userId}":{"parameters":[{"name":"userId","in":"path","required":true,"description":"ID of user that we want to find","type":"string"}],"get":{"tags":["Users"],"summary":"Get user with given ID","responses":{"200":{"description":"User is found","schema":{"$ref":"#/definitions/User"}}}},"delete":{"summary":"Delete user with given ID","tags":["Users"],"responses":{"200":{"description":"User is deleted","schema":{"$ref":"#/definitions/User"}}}},"put":{"summary":"Update user with give ID","tags":["Users"],"parameters":[{"name":"user","in":"body","description":"User with new values of properties","schema":{"$ref":"#/definitions/User"}}],"responses":{"200":{"description":"User is updated","schema":{"$ref":"#/definitions/User"}}}}}},"definitions":{"User":{"required":["name","_id","userName"],"properties":{"_id":{"type":"string","uniqueItems":true},"name":{"type":"string","uniqueItems":true},"userName":{"type":"string"},"password":{"type":"string"}}},"Users":{"type":"array","$ref":"#/definitions/User"}}}')},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(16),i=n(17),u=(r=i)&&r.__esModule?r:{default:r};let a=function(e){function t(e,n=[]){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._readOnly=["_id","__v","created.by","created.on",...n],r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),o(t,[{key:"_get",value:function(e){return this.Model.find(e)}},{key:"get",value:async function(e){return this.Model.find(e)}},{key:"count",value:async function(e){return this.Model.count(e)}},{key:"findOne",value:async function(e){return this.Model.findOne(e)}},{key:"removeMany",value:async function(e){return this.Model.deleteMany(e)}},{key:"removeById",value:async function(e){return this.Model.findByIdAndRemove(e)}},{key:"count",value:async function(e){return this.Model.count(e)}},{key:"aggregate",value:async function(e){return this.Model.aggregate(e)}},{key:"getByPage",value:async function(e,t,n,r){return this.Model.find(e).sort({[t]:1}).skip(n).limit(r)}},{key:"getById",value:async function(e){return this.Model.findById(e)}},{key:"upsert",value:async function(e,t){return this.Model.findOneAndUpdate(e,t,{upsert:!0})}},{key:"create",value:async function(e){return new this.Model(e).save()}},{key:"patch",value:async function(e,t){return e.schema.eachPath(n=>{if(!(this._readOnly.indexOf(n)>-1)){const r=(0,s.getValueByPath)(t,n);void 0!==r&&e.set(n,r)}}),e.save()}},{key:"remove",value:async function(e){if(!(e instanceof this.Model))throw new TypeError("Invalid entity");return e.remove()}},{key:"update",value:async function(e,t){return e.schema.eachPath(n=>{if(!(this._readOnly.indexOf(n)>-1)){const r=(0,s.getValueByPath)(t,n);e.set(n,r)}}),e.save()}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getValueByPath=function(e,t){return t.split(".").reduce((e,t)=>e?e[t]:void 0,e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();let o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._model=t}return r(e,[{key:"getAll",value:function(e){throw new Error("Abstract method. Must be implemented before using.")}},{key:"getById",value:function(e){throw new Error("Abstract method. Must be implemented before using.")}},{key:"create",value:function(e){throw new Error("Abstract method. Must be implemented before using.")}},{key:"patch",value:function(e){throw new Error("Abstract method. Must be implemented before using.")}},{key:"remove",value:function(e){throw new Error("Abstract method. Must be implemented before using.")}},{key:"removeById",value:function(e,t){throw new Error("Abstract method. Must be implemented before using.")}},{key:"update",value:function(e){throw new Error("Abstract method. Must be implemented before using.")}},{key:"Model",get:function(){return this._model}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){e.use((0,s.default)(t))};var r,o=n(19),s=(r=o)&&r.__esModule?r:{default:r}},function(e,t){e.exports=require("cors")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.model(o.User,i.default,o.User)};var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(21)),s=n(22),i=(r=s)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.User="users"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=new(n(4).Schema)({name:{type:String,required:!0,maxLength:512},userName:{type:String,required:!0,maxLength:512},password:{type:String,required:!0,maxLength:512},isActive:{type:Boolean,required:!0,default:!0}});t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(24),i=(r=s)&&r.__esModule?r:{default:r},u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(25)),a=n(1);let c=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._userReposotory=e,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),o(t,[{key:"create",value:async function(e,t){try{const n=await this.UserReposotory.create(e.body);t.status(u.Created).json(Object.assign({},n.toJSON(),{password:null}))}catch(e){t.status(u.InternalServerError).send(e.message)}}},{key:"signIn",value:async function(e,t){try{const n=await this.UserReposotory.getById(e.body.userName);if(n&&!0===n.isActive&&n.password===e.body.password){const e=(0,a.getToken)(n);t.status(u.OK).json(Object.assign({},n.toJSON(),{token:e,password:null}))}else t.status(u.NotFound).send("User not active/registered/wrong password")}catch(e){t.status(u.InternalServerError).send(e.message)}}},{key:"version",value:async function(e,t){try{t.status(u.Created).json("Api version 1")}catch(e){t.status(u.InternalServerError).send(e.message)}}},{key:"UserReposotory",get:function(){return this._userReposotory}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Accepted=202,t.Ambiguous=300,t.BadGateway=502,t.BadRequest=400,t.Conflict=409,t.Continue=100,t.Created=201,t.ExpectationFailed=417,t.Forbidden=403,t.Found=302,t.GatewayTimeout=504,t.Gone=410,t.HttpVersionNotSupported=505,t.InternalServerError=500,t.LengthRequired=411,t.MethodNotAllowed=405,t.Moved=301,t.MovedPermanently=301,t.MultipleChoices=300,t.NoContent=204,t.NonAuthoritativeInformation=203,t.NotAcceptable=406,t.NotFound=404,t.NotImplemented=501,t.NotModified=304,t.OK=200,t.PartialContent=206,t.PaymentRequired=402,t.PreconditionFailed=412,t.ProxyAuthenticationRequired=407,t.Redirect=302,t.RedirectKeepVerb=307,t.RedirectMethod=303,t.RequestedRangeNotSatisfiable=416,t.RequestEntityTooLarge=413,t.RequestTimeout=408,t.RequestUriTooLong=414,t.ResetContent=205,t.SeeOther=303,t.ServiceUnavailable=503,t.SwitchingProtocols=101,t.TemporaryRedirect=307,t.Unauthorized=401,t.UnsupportedMediaType=415,t.Unused=306,t.UpgradeRequired=426,t.UseProxy=305},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(27),s=(r=o)&&r.__esModule?r:{default:r};n(28);let i=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.Router.route("/").post(async(e,t)=>r.Controller.create(e,t)),r.Router.route("/version").get(async(e,t)=>r.Controller.version(e,t)),r.Router.route("/signin").post(async(e,t)=>r.Controller.signIn(e,t)),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),i=(r=s)&&r.__esModule?r:{default:r};let u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._router=i.default.Router(),this._controller=t}return o(e,[{key:"Router",get:function(){return this._router}},{key:"Controller",get:function(){return this._controller}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authenticated=function(){return s.default.authenticate("jwt",{session:!1})};var r,o=n(2),s=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return s.default.Promise=global.Promise,s.default.set("debug",!0),new Promise((t,n)=>{const r=s.default.createConnection();r.openUri(e.connection,e=>{e?n(e):t(r)})})};var r,o=n(4),s=(r=o)&&r.__esModule?r:{default:r}},function(e){e.exports=JSON.parse('{"cnd":{"connection":"mongodb://localhost:27017/events-api"}}')},function(e){e.exports=JSON.parse('{"console":{"colorize":true,"timestamp":true,"level":"debug","stderrLevels":["error","debug","info"]},"file":{"colorize":false,"json":false,"filename":"logs/application.log","datePattern":"yyyy-MM-dd.","prepend":true,"level":"info"}}')},function(e){e.exports=JSON.parse('{"origin":["http://localhost:3030","http://localhost:4200"],"methods":["GET","POST","PUT","PATCH","DELETE"],"allowedHeaders":["Content-Type","Authorization"]}')},function(e){e.exports=JSON.parse('{"jwt":{"secret":"stringbees-secret","issuer":"one-identity","audience":"stringbees-core"}}')},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(35);var r,o=n(36),s=(r=o)&&r.__esModule?r:{default:r};let i=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{transports:[new s.default.transports.Console(e.console),new s.default.transports.DailyRotateFile(e.file)]}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Logger),t}();t.default=i},function(e,t){e.exports=require("winston-daily-rotate-file")},function(e,t){e.exports=require("winston")}]);