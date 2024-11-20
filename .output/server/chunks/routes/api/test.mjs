import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const test = defineEventHandler((e) => {
  return "LOL";
});

export { test as default };
//# sourceMappingURL=test.mjs.map
