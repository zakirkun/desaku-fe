import { defineEventHandler, getRouterParam } from 'h3';
import { u as useRuntimeConfig } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _id_ = defineEventHandler(async (event) => {
  return await $fetch(useRuntimeConfig().public.API_BASE_URL + "/api/announcement/slug/" + getRouterParam(event, "id"));
});

export { _id_ as default };
//# sourceMappingURL=_id_5.mjs.map
