"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1710], {
        21710: function (e, l, n) {
            n.r(l);
            var s = n(85893),
                c = n(67160),
                r = n(10721),
                a = n(39969);
            l.default = () => {
                let e = (0, r.CG)(e => e.layout.connection_error_modal_open),
                    l = (0, r.TL)();
                return e ? (0, s.jsx)(c.u, {
                    onClose: () => l((0, a.RQ)(!1)),
                    children: (0, s.jsxs)("div", {
                        className: "text-left",
                        children: [(0, s.jsx)("h3", {
                            className: "text-2xl my-3",
                            children: (0, s.jsx)("strong", {
                                children: "Something went wrong"
                            })
                        }), (0, s.jsx)("p", {
                            className: "my-3",
                            children: "If connection cannot be made, please try this:"
                        }), (0, s.jsxs)("ol", {
                            className: "ml-4 my-3",
                            children: [(0, s.jsx)("li", {
                                children: "Close all wallet windows"
                            }), (0, s.jsx)("li", {
                                children: "Re-launch your browser"
                            }), (0, s.jsx)("li", {
                                children: "Try connecting again"
                            })]
                        })]
                    })
                }) : null
            }
        }
    }
]);