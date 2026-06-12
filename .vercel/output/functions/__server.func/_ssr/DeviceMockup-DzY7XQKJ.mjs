import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function DeviceMockup({ type, children }) {
  if (type === "mobile") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex w-full justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto h-[500px] w-[250px] overflow-hidden rounded-[2.5rem] bg-[#111] p-1 sm:h-[700px] sm:w-[350px] sm:rounded-[3.5rem] sm:p-2 border-[4px] border-[#222]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-3xl bg-[#222] sm:h-6 sm:w-32" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full w-full overflow-hidden rounded-[2rem] bg-black sm:rounded-[2.8rem]", children })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full pt-4 sm:pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-t-2xl bg-[#111] p-1 sm:p-2 border-[2px] border-b-0 border-[#222]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-[#333] sm:top-2 sm:h-1.5 sm:w-1.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] w-full overflow-hidden rounded bg-black", children })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 -ml-[2.5%] h-2 w-[105%] rounded-b-2xl bg-[#222] sm:h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 h-1 w-1/4 -translate-x-1/2 rounded-b-md bg-[#111] sm:h-1.5" }) })
  ] }) });
}
export {
  DeviceMockup as D
};
