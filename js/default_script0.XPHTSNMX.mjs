import { a as R, b as _ } from "./chunk-GZOJEX2E.mjs"; 
import { $ as y, A as g, B as a, C as h, I as f, K as F, c, f as u } from "./chunk-PLLBGEHY.mjs"; 
import { c as t } from "./chunk-OIST4OYN.mjs"; 
t.__framer_importFromPackage = (e, n) => () => c(f, { error: 'Package component not supported: "' + n + '" in "' + e + '"' }); t.process = { ...t.process, env: { ...t.process ? t.process.env : void 0, NODE_ENV: "production" } }; F(); (async () => { let e = { augiA20Il: { elements: { b0UixMNUE: "process", FPojsIEzh: "contact", HCbZ2ppsM: "horizontal-scroll", HSJhTSu7l: "work", MgnCXA71w: "home", rFKizuM36: "services", vhurGgMTC: "showreel", x1bYrdziu: "faq", z4IL5butI: "pricing", Zoqc_9WMu: "navbar" }, page: a(() => import("./fPMqjoCtEnecI0y6fwx8zDbVv9yLusKFkI91Qq6AoIk.ZYCDMVSV.mjs")), path: "/" }, h8NlJK8c4: { elements: {}, page: a(() => import("./k7qPa5-uFvrJPaw55qqRAtuGd-csj1YzOfWxI-P_O0M.TU36MY6M.mjs")), path: "/styleguide" }, pjWvxDdN8: { elements: {}, page: a(() => import("./4OvDPyzQrq4FAeBGRoM6BvSrkeGE6RltRyyI7eokMbg.M6OP23MR.mjs")), path: "/changelog" }, pRcj66pEx: { elements: {}, page: a(() => import("./1R0MPFWbtRp9POsjBGs3s50LXrexon2gM6G2uHXWwBQ.TJARFFQQ.mjs")), path: "/404" }, a1SIDi1Tn: { page: a(() => import("./a1SIDi1Tn-UTANLUIH.mjs")) }, PSdobwFCY: { page: a(() => import("./PSdobwFCY-J3QAQT73.mjs")) }, NxcfZJdnL: { page: a(() => import("./NxcfZJdnL-TUOYMA6W.mjs")) } }, n = [{ code: "en", id: "default", name: "English", slug: "" }], I = a(() => import("./1R0MPFWbtRp9POsjBGs3s50LXrexon2gM6G2uHXWwBQ.TJARFFQQ.mjs")), s = document.getElementById("main"), o, l, i, m = !1; if ("framerHydrateV2" in s.dataset) { let r = JSON.parse(s.dataset.framerHydrateV2); o = r.routeId, l = r.localeId, i = r.pathVariables, m = !0 } else { let r = h(e, decodeURIComponent(location.pathname), !0, n); o = r.routeId, l = r.localeId, i = r.pathVariables } let p = await e[o].page.preload(); e[o].page = p; let z = c(y, { RootComponent: p, isWebsite: !0, routeId: o, pathVariables: i, routes: e, notFoundPage: I, isReducedMotion: void 0, localeId: l, locales: n }), d = c(g, { children: z, value: {} }); m ? u(() => { _(s, d) }) : R(s).render(d) })().catch(e => { throw t.__send_framer_event && t.__send_framer_event("published_site_load_error", { message: String(e), stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null }), e });
//# sourceMappingURL=default_script0.XPHTSNMX.mjs.map
