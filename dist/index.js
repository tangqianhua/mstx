"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koa_controllers_1 = require("koa-controllers");
const index_1 = require("./models/index");
const app = new Koa();
app.use(async (ctx, next) => {
    ctx.state.db = index_1.default;
    await next();
});
koa_controllers_1.useControllers(app, __dirname + '/controllers/*.js', {
    multipart: {
        dest: './uploads'
    }
});
app.listen(8000);
//# sourceMappingURL=index.js.map