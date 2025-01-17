import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-8e8a4f46><p class="text" data-v-8e8a4f46> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore asperiores repellat quos deserunt, deleniti placeat ipsa iure quae exercitationem id laudantium atque amet odio facere ad, aliquid ullam sunt? Autem? Tempora, quos praesentium? Obcaecati iure facilis delectus harum, id ducimus incidunt, aliquam enim quasi corporis necessitatibus saepe quos asperiores reprehenderit, mollitia neque adipisci? Nobis voluptatem id, dolorem nisi labore eum? Iure est, facere autem sapiente reiciendis natus corporis accusamus laborum nesciunt ab fuga praesentium veniam beatae, molestiae repellendus sunt a numquam quis odit optio porro facilis assumenda in odio. Qui! Suscipit similique officia a eligendi? Odit tempora asperiores consectetur dolore temporibus expedita, dolor, sunt nisi similique cupiditate voluptatibus. Repudiandae eveniet maxime expedita sed quidem voluptas mollitia eum! Minima, ad officia. Nesciunt eligendi quo cupiditate odio quas quia laborum magnam recusandae mollitia nulla sit harum autem, dolorem omnis totam atque facilis! Aspernatur praesentium similique ad eius amet repellat culpa assumenda non. Magni cupiditate, ipsa odio repellendus a dolores est ad dignissimos nesciunt nihil autem! Odio, fuga corrupti possimus unde expedita dolorum fugiat quisquam ea optio repudiandae assumenda ipsa porro? Officia, debitis. Sit adipisci, quia minus, expedita hic vel totam suscipit minima iusto recusandae velit, excepturi perferendis quam ea. Ipsum, similique eaque iure repellendus officiis totam illum odit porro accusantium assumenda blanditiis. A quidem minima, dolores totam quibusdam quia, officia hic eveniet atque unde, error sunt sequi doloribus explicabo excepturi. Quia explicabo quod velit ullam aspernatur quis inventore ratione. Repellat, modi nostrum. Culpa tenetur a obcaecati facere hic. Iure nulla ducimus hic autem tempore id dolorum deleniti quos reprehenderit dolore praesentium, libero voluptas animi. Pariatur odit sit soluta quia quasi harum nihil. Pariatur distinctio, consequatur eaque cupiditate unde voluptates accusamus hic obcaecati dolores modi nam impedit animi culpa quasi veritatis optio, facilis nulla possimus doloribus tempore et nesciunt? Nam quidem rerum illum. </p></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8e8a4f46"]]);

export { index as default };
//# sourceMappingURL=index-CsxmOCav.mjs.map
