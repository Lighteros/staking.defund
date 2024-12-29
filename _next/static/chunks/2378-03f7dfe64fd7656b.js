"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2378], {
        58974: function (e, t, s) {
            s.d(t, {
                J: function () {
                    return Check
                }
            });
            var a = s(85893);
            let Check = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6 ".concat(t || "text-primary"),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M5 13l4 4L19 7"
                    })
                })
            }
        },
        73628: function (e, t, s) {
            s.d(t, {
                ol: function () {
                    return ArrowRight
                },
                Tt: function () {
                    return Chevron
                },
                X1: function () {
                    return Cross
                },
                pO: function () {
                    return PlusIcon
                },
                ew: function () {
                    return SettingsIcon
                }
            });
            var a = s(85893);
            s(67294);
            let ArrowRight = e => {
                    let {
                        className: t = ""
                    } = e;
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-6 w-6 ".concat(t),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                        })
                    })
                },
                r = {
                    up: "M5 15l7-7 7 7",
                    down: "M19 9l-7 7-7-7",
                    left: "M15 19l-7-7 7-7",
                    right: "M9 5l7 7-7 7"
                },
                Chevron = e => {
                    let {
                        type: t,
                        width: s,
                        height: l
                    } = e;
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-".concat(l || 6, " w-").concat(s || 6),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: r[t]
                        })
                    })
                },
                Cross = () => (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    })
                }),
                PlusIcon = e => {
                    let {
                        width: t = 4,
                        height: s = 4
                    } = e;
                    return (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-".concat(s, " w-").concat(t),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 4v16m8-8H4"
                        })
                    })
                },
                SettingsIcon = () => (0, a.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    id: "setting_button",
                    children: [(0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    }), (0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    })]
                })
        },
        79452: function (e, t, s) {
            s.d(t, {
                I: function () {
                    return Input
                }
            });
            var a = s(85893),
                r = s(67294),
                l = s(22425);
            let Label = e => {
                    let {
                        id: t,
                        label: s,
                        tooltip: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "flex-1 text-primary text-sm mb-2 flex items-center flex-wrap space-x-2",
                        children: [(0, a.jsx)("label", {
                            htmlFor: t,
                            children: s
                        }), r && (0, a.jsx)(l.u, {
                            text: r,
                            children: (0, a.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6 text-accent",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            })
                        })]
                    })
                },
                Checkbox = e => {
                    let {
                        id: t,
                        label: s,
                        tooltip: r,
                        error: l,
                        placeholder: n,
                        name: o,
                        value: i,
                        onChange: c,
                        className: d = ""
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "".concat(d),
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-cenetr",
                            children: [s && (0, a.jsx)(Label, {
                                id: t,
                                label: s,
                                tooltip: r
                            }), l && (0, a.jsx)("p", {
                                className: "text-red",
                                children: l
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mt-2 flex items-center bg-level-two rounded px-4 py-2 space-x-4 shadow py-3",
                            children: [(0, a.jsx)("div", {
                                className: "flex-1 text-primary",
                                children: n
                            }), " ", (0, a.jsxs)("div", {
                                className: "relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in",
                                children: [(0, a.jsx)("input", {
                                    type: "checkbox",
                                    className: "focus-none toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary border-4 appearance-none cursor-pointer",
                                    name: o,
                                    id: t,
                                    value: i,
                                    onChange: c,
                                    checked: !!i,
                                    "data-testid": t
                                }), (0, a.jsx)("label", {
                                    htmlFor: "toggle",
                                    className: "toggle-label block overflow-hidden h-6 rounded-full bg-main cursor-pointer"
                                })]
                            })]
                        })]
                    })
                };
            var n = s(44304);
            let o = {
                    true: "border-secondary",
                    false: "border-custom"
                },
                containerInset = e => ({
                    true: "bg-main shadow border shadow ".concat(o[String(e)]),
                    false: ""
                }),
                inputInset = e => ({
                    true: "",
                    false: "border shadow ".concat(o[String(e)])
                }),
                i = {
                    true: "dark-mode",
                    false: ""
                },
                containerClasses = (e, t, s) => "relative flex items-center rounded  ".concat(e || "", " ").concat(containerInset(t)[String(s)]),
                inputClasses = (e, t) => "focus:outline-none bg-main flex-1 w-full py-3 px-3 rounded dark-placeholder text-primary ".concat(i[n.Pg.toString()], " ").concat(inputInset(e)[String(t)]),
                Input = e => {
                    let {
                        className: t,
                        id: s,
                        inputClassName: l,
                        label: n,
                        name: o,
                        onChange: i,
                        placeholder: c,
                        type: d = "text",
                        value: u,
                        error: m,
                        inset: x,
                        tooltip: h,
                        step: p,
                        min: g,
                        loading: f,
                        ...v
                    } = e, [j, N] = (0, r.useState)(!1);
                    if ("checkbox" === d) return (0, a.jsx)(Checkbox, {
                        id: s,
                        label: n,
                        tooltip: h,
                        error: m,
                        placeholder: c,
                        name: o,
                        value: u,
                        onChange: i,
                        className: t,
                        ...v
                    });
                    let y = containerClasses(l, j, f || !!x),
                        b = inputClasses(j, f || !!x);
                    return (0, a.jsxs)("div", {
                        className: "".concat(t || ""),
                        children: [(0, a.jsxs)("div", {
                            className: "flex space-between items-center text-secondary",
                            children: [n && (0, a.jsx)(Label, {
                                id: s,
                                label: n,
                                tooltip: h
                            }), !!m && (0, a.jsx)("p", {
                                className: "text-red-500",
                                children: m
                            })]
                        }), (0, a.jsxs)("div", {
                            className: y,
                            children: [(0, a.jsx)("input", {
                                onFocus: () => N(!0),
                                onBlur: () => {
                                    N(!1)
                                },
                                "data-testid": s,
                                onWheel: e => e.currentTarget.blur(),
                                className: b,
                                id: s,
                                name: o,
                                onChange: i,
                                type: d,
                                value: u,
                                placeholder: c,
                                step: p,
                                min: g,
                                ...v
                            }), f && (0, a.jsx)("div", {
                                className: "loader mr-4 mx-auto absolute right-0",
                                children: (0, a.jsx)("img", {
                                    src: "/img/Spinner-Small.png",
                                    className: "mx-auto",
                                    style: {
                                        width: "20px",
                                        height: "20px"
                                    },
                                    alt: "Loading..."
                                })
                            }), !f && x]
                        })]
                    })
                }
        },
        37386: function (e, t, s) {
            s.d(t, {
                Y: function () {
                    return AddPoolButton
                }
            });
            var a = s(85893);
            s(67294);
            var r = s(41664),
                l = s.n(r),
                n = s(9404),
                o = s(73628);
            let AddPoolButton = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsx)(l(), {
                    href: "/manage/new",
                    children: (0, a.jsxs)(n.z, {
                        id: "add_pool",
                        "data-testid": "add-pool-button",
                        className: "flex items-center space-x-2 ".concat(t || ""),
                        children: [(0, a.jsx)(o.pO, {}), (0, a.jsx)("div", {
                            children: "Add new pool"
                        })]
                    })
                })
            }
        },
        56410: function (e, t, s) {
            s.d(t, {
                x: function () {
                    return BackButton
                }
            });
            var a = s(85893);
            s(67294);
            var r = s(41664),
                l = s.n(r),
                n = s(73628);
            let BackButton = e => {
                let {
                    url: t
                } = e;
                return (0, a.jsx)(l(), {
                    href: t,
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center space-x-2 mb-4",
                        children: [(0, a.jsx)(n.Tt, {
                            type: "left"
                        }), (0, a.jsx)("h5", {
                            className: "text-lg",
                            children: "Back"
                        })]
                    })
                })
            }
        },
        31512: function (e, t, s) {
            s.d(t, {
                C: function () {
                    return RoutingButtons
                }
            });
            var a = s(85893);
            s(67294);
            var r = s(41664),
                l = s.n(r),
                n = s(11163),
                o = s(73628),
                i = s(37386);
            let RoutingButtons = () => {
                let e = (0, n.useRouter)(),
                    t = e.pathname.includes("settings") ? "/manage" : "/manage/settings";
                return (0, a.jsxs)("div", {
                    className: "flex space-x-4 items-center",
                    children: [(0, a.jsx)(l(), {
                        href: t,
                        children: (0, a.jsx)("button", {
                            className: "p-2 bg-level-one rounded border border-custom  text-secondary hover:text-primary",
                            children: (0, a.jsx)(o.ew, {})
                        })
                    }), (0, a.jsx)(i.Y, {})]
                })
            }
        },
        37022: function (e, t, s) {
            s.d(t, {
                u: function () {
                    return TokenImageSetup
                },
                A: function () {
                    return getTokenTypes
                }
            });
            var a = s(85893),
                r = s(67294),
                l = s(91328),
                n = s(22920),
                o = s(11163),
                i = s(59860),
                c = s(59850),
                d = s(79452),
                u = s(9404);
            let TokenImage = e => {
                    let {
                        address: t,
                        symbol: s,
                        logo: l
                    } = e, [m] = (0, i.a1)(c.R.LogoStore, !0), [x, h] = (0, r.useState)(l || ""), [p, g] = (0, r.useState)(!1), [f, v] = (0, r.useState)(""), j = (0, o.useRouter)(), N = x !== l, handleClick = async () => {
                        if (v(""), [null, void 0, ""].includes(x)) {
                            v("required");
                            return
                        }
                        g(!0);
                        try {
                            n.Am.info("Awaiting successful transaction");
                            let e = await m.setLogo(t, x);
                            await e.wait(), n.Am.success("Successfuly updated token image"), j.replace(j.asPath)
                        } catch (e) {
                            n.Am.error(e.reason || e.message)
                        }
                        g(!1)
                    };
                    return (0, a.jsxs)("div", {
                        className: "p-4 rounded bg-level-two border border-custom ",
                        id: "select_class",
                        children: [(0, a.jsxs)("div", {
                            className: "text-lg flex",
                            children: [(0, a.jsx)("h5", {
                                className: "flex-1",
                                children: (0, a.jsx)("strong", {
                                    children: s
                                })
                            }), (0, a.jsx)("p", {
                                className: "text-secondary",
                                children: t
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex mt-4 space-x-4 items-stretch",
                            children: [(0, a.jsx)("img", {
                                src: l || "/icons/no-token.svg",
                                className: "w-12 h-12"
                            }), (0, a.jsx)(d.I, {
                                name: "logo",
                                value: x,
                                onChange: e => h(e.target.value),
                                className: "flex-1",
                                placeholder: "Enter token image URL",
                                error: f,
                                id: "logo_url"
                            }), (0, a.jsx)(u.z, {
                                id: "save_logo",
                                disabled: !N || p,
                                loading: p,
                                onClick: handleClick,
                                className: "w-20 mx-auto text-center",
                                children: "Save"
                            })]
                        })]
                    })
                },
                getTokenTypes = e => {
                    let {
                        type: t,
                        input_token: s,
                        reward_token: a
                    } = e;
                    switch (t) {
                        case l.W.NFT:
                            return [a];
                        case l.W.Liquidity:
                            return [s, a, e.second_input_token];
                        default:
                            return [s, a]
                    }
                },
                TokenImageSetup = e => {
                    let {
                        pools: t
                    } = e, s = (0, r.useMemo)(() => t.reduce((e, t) => (getTokenTypes(t).forEach(t => {
                        e.find(e => {
                            let {
                                address: s
                            } = e;
                            return s.toLowerCase() === t.address.toLowerCase()
                        }) || e.push(t)
                    }), e), []), [t]);
                    return (0, a.jsxs)("div", {
                        className: "max-w-2xl mx-auto my-20",
                        children: [(0, a.jsx)("h3", {
                            className: "text-xl mb-8",
                            children: (0, a.jsx)("strong", {
                                children: "Token image setup"
                            })
                        }), (0, a.jsx)("div", {
                            className: "p-4 rounded bg-level-one border border-custom space-y-2",
                            children: s.map(e => (0, a.jsx)(TokenImage, {
                                ...e
                            }, e.address))
                        })]
                    })
                }
        },
        7997: function (e, t, s) {
            s.d(t, {
                vS: function () {
                    return BountySetup
                },
                DB: function () {
                    return FeeSetup
                },
                us: function () {
                    return h.u
                },
                xV: function () {
                    return WalletLookUp
                }
            });
            var a = s(85893),
                r = s(67294),
                l = s(62378),
                n = s(41421),
                o = s(22920),
                i = s(59860),
                c = s(59850),
                d = s(2707),
                u = s(91328),
                m = s(88326);
            let x = (0, m.XR)(u.W.Compound),
                useBountySetup = () => {
                    let [e, t] = (0, r.useState)("0"), [s, a] = (0, r.useState)("0"), [l, n] = (0, r.useState)(!1), [u, m] = (0, r.useState)(""), [h, p] = (0, r.useState)(x[x.length - 1].address), {
                        vault: g
                    } = x.find(e => e.address === h), [f] = (0, i.C)(g, c.R.Vault, !0), v = s !== e;
                    (0, r.useEffect)(() => {
                        if (f) {
                            n(!0);
                            let e = f.callFee().then(async e => {
                                    let t = (e.toNumber() / 100).toString();
                                    return t
                                }),
                                {
                                    promise: s,
                                    cancel: r
                                } = (0, d.g)(e);
                            return s.then(e => {
                                a(e), t(e), n(!1)
                            }).catch(() => !0), r
                        }
                    }, [f]);
                    let handleClick = async () => {
                        if (m(""), [null, void 0, ""].includes(s)) {
                            m("required");
                            return
                        }
                        n(!0);
                        try {
                            o.Am.info("Awaiting succesful transaction");
                            let e = await f.setCallFee(Math.round(100 * Number(s)));
                            await e.wait(), o.Am.success("Successfully updated the bounty values")
                        } catch (e) {
                            o.Am.error(e.reason || e.message)
                        }
                        n(!1)
                    };
                    return {
                        address: h,
                        setAddress: p,
                        loading: l,
                        percent: s,
                        setPercent: a,
                        error: u,
                        handleClick,
                        changed: v,
                        opts: x
                    }
                },
                BountySetup = () => {
                    let {
                        address: e,
                        changed: t,
                        error: s,
                        handleClick: r,
                        loading: o,
                        opts: i,
                        percent: c,
                        setAddress: d,
                        setPercent: u
                    } = useBountySetup();
                    return (0, a.jsxs)("div", {
                        className: "max-w-2xl mx-auto my-20",
                        children: [(0, a.jsx)("h3", {
                            className: "text-xl mb-8",
                            children: (0, a.jsx)("strong", {
                                children: "Bounty fee setup"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "p-4 rounded bg-level-one border border-custom",
                            children: [i.length > 1 && (0, a.jsx)(l.Ph, {
                                options: i,
                                selected: e,
                                getId: e => e.address,
                                getLabel: e => "".concat(e.type, " ").concat(e.idx + 1, " - ").concat((0, n.pm)(e.address, 4), " ").concat(e.idx === i.length - 1 ? "(latest)" : ""),
                                onSelect: e => d(e),
                                label: "Staking contract",
                                loading: o,
                                placeholder: "Select pool",
                                className: "my-2",
                                id: "staking-pool"
                            }), (0, a.jsx)(l.II, {
                                value: c,
                                onChange: e => u(e.target.value),
                                label: "Bounty percentage",
                                name: "bounty-percentage",
                                inset: (0, a.jsx)("div", {
                                    className: "px-4",
                                    children: "Percent"
                                }),
                                tooltip: "The percentage of rewards earned so far that have not been compounded, which will be given to the bounty claimer. Supports 2 decimal places",
                                error: s,
                                type: "number",
                                step: .05,
                                id: "set_bounty"
                            }), (0, a.jsx)(l.zx, {
                                onClick: r,
                                className: "mt-4 w-full",
                                disabled: !t || o,
                                loading: o,
                                id: "save_bounty",
                                children: "Save changes"
                            })]
                        })]
                    })
                };
            var h = s(37022),
                p = s(19485),
                g = s(79452),
                f = s(3919),
                v = s(30765),
                j = s(27484),
                N = s.n(j);
            let getPoolLabel = e => "".concat(e.name).concat(e.type === u.W.Dynamic ? "" : " - ".concat(e.type === u.W.NFT ? "".concat((0, n.am)(e.reward_rate), " ").concat(e.reward_token.symbol, " p/day") : "".concat(e.reward_rate, " APY")).concat(e.type === u.W.NFT ? "" : " - ".concat(e.nft_name || "No NFT")));
            var y = s(61267);
            let b = {
                    [u.W.Compound]: "lastDepositedTime",
                    [u.W.NFT]: "depositTime",
                    [u.W.Dynamic]: "depositTime"
                },
                WalletLookUp = e => {
                    let {
                        pools: t
                    } = e, [s, l] = (0, r.useState)("0"), [o, i] = (0, r.useState)(""), [m, x] = (0, r.useState)(!1), [h, j] = (0, r.useState)(null), k = t.find(e => {
                        let {
                            id: t
                        } = e;
                        return t.toString() === s
                    }), {
                        address: w,
                        contract_idx: T,
                        lock_period: _,
                        input_token: C,
                        type: F
                    } = k || {}, S = (0, v.ti)(w, y.XH[F]), W = (0, v.ti)(null == k ? void 0 : k.vault, c.R.Vault), P = F === u.W.NFT, L = F === u.W.Compound ? W : S;
                    return (0, r.useEffect)(() => {
                        if (w && (0, p.UJ)(o)) {
                            x(!0);
                            let e = L.users(T, o).then(async e => {
                                    let t = await S.calcMultiplier(T, o),
                                        s = e[b[F]],
                                        a = {
                                            stake: e.totalInvested,
                                            unlock_date: (s.toNumber ? s.toNumber() : s) + 86400 * parseInt(_),
                                            multiplier: 10 !== t && 100 !== t
                                        };
                                    return a
                                }),
                                {
                                    promise: t,
                                    cancel: s
                                } = (0, d.g)(e);
                            return t.then(e => {
                                j(e), x(!1)
                            }).catch(() => {
                                x(!1)
                            }), s
                        }
                        j(null)
                    }, [w, o]), (0, a.jsxs)("div", {
                        className: "max-w-2xl mx-auto my-20",
                        children: [(0, a.jsx)("h3", {
                            className: "text-xl mb-8",
                            children: (0, a.jsx)("strong", {
                                children: "Wallet lookup"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "p-4 rounded bg-level-one border border-custom",
                            children: [(0, a.jsx)(f.P, {
                                options: t,
                                selected: s,
                                getId: e => e.id.toString(),
                                getLabel: getPoolLabel,
                                onSelect: e => l(e.toString()),
                                label: "Pool",
                                loading: m,
                                placeholder: "Select pool",
                                className: "my-2",
                                id: "staking-pool"
                            }), (0, a.jsx)(g.I, {
                                id: "wallet-address",
                                label: "Wallet address",
                                placeholder: "Enter wallet address",
                                name: "wallet",
                                className: "mb-2 mt-4",
                                value: o,
                                onChange: e => i(e.target.value)
                            }), h && (0, a.jsxs)("div", {
                                className: "mt-8",
                                "data-testid": "wallet-lookup-result",
                                children: [(0, a.jsx)("h5", {
                                    className: "text-lg mb-4",
                                    children: (0, a.jsx)("strong", {
                                        children: "Overview"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center my-1",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex-1 text-secondary",
                                        children: "Total stake"
                                    }), (0, a.jsx)("h5", {
                                        className: "text-lg",
                                        children: (0, a.jsx)("strong", {
                                            children: P ? "".concat(h.stake, " / ").concat(k.max_per_user) : "".concat((0, n.am)(h.stake), " ").concat(C.symbol)
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center my-1",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex-1 text-secondary",
                                        children: "Unlock date"
                                    }), (0, a.jsx)("h5", {
                                        className: "text-lg",
                                        children: (0, a.jsx)("strong", {
                                            children: h.stake.gt(0) ? N()(1e3 * h.unlock_date).format("DD/MM/YY HH:mm") : "None"
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex items-center my-1",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex-1 text-secondary",
                                        children: "NFT boost"
                                    }), (0, a.jsx)("h5", {
                                        className: "text-lg",
                                        children: (0, a.jsx)("strong", {
                                            children: h.multiplier.toString()
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                };
            var k = s(75605),
                w = s(44304);
            let T = w.STAKING_MODULES.map(e => {
                    let {
                        address: t,
                        type: s
                    } = e;
                    return {
                        label: "".concat(s, " - ").concat((0, k.pm)(t)),
                        id: t
                    }
                }),
                useFeeSetup = () => {
                    let e = T.filter(e => e.label.includes("Compound")),
                        [t, s] = (0, r.useState)(!1),
                        [a, l] = (0, r.useState)(e[0]),
                        [n, c] = (0, r.useState)({
                            wallet_addr: "",
                            fee_percentage: null
                        }),
                        handleChange = (e, t) => {
                            c({
                                ...n,
                                [e]: t
                            })
                        },
                        d = w.STAKING_MODULES.find(e => e.address === a.id),
                        [u] = (0, i.C)(d.address, y.XH[d.type], !0),
                        saveChanges = async () => {
                            o.Am.info("Awaiting successful transaction"), s(!0);
                            try {
                                let e = await u.updateFeeValues(Math.floor(10 * parseFloat(n.fee_percentage.toString() || "0")), n.wallet_addr);
                                await e.wait(), o.Am.success("Successfully updated fee values"), c({
                                    wallet_addr: "",
                                    fee_percentage: null
                                })
                            } catch (e) {
                                o.Am.error(e.reason || e.message)
                            }
                            s(!1)
                        };
                    return (0, r.useMemo)(() => ({
                        select_current: a,
                        setSelectCurrent: l,
                        state: n,
                        handleChange,
                        handleClick: saveChanges,
                        options: e,
                        loading: t,
                        disabled: !n.wallet_addr || !n.fee_percentage || !(0, p.UJ)(n.wallet_addr),
                        alert_text: "These parameters interacts with the smart contract. Each change will require to complete a transaction to save changes."
                    }), [a, n.wallet_addr, n.fee_percentage])
                },
                FeeSetup = () => {
                    let e = useFeeSetup();
                    return (0, a.jsxs)("div", {
                        className: "max-w-2xl mx-auto my-20",
                        children: [(0, a.jsx)("h3", {
                            className: "text-xl mb-8",
                            children: (0, a.jsx)("strong", {
                                children: "Staking fee setup"
                            })
                        }), (0, a.jsx)(k.dL, {
                            ...e,
                            className: "w-full"
                        })]
                    })
                }
        },
        27895: function (e, t, s) {
            s.d(t, {
                vS: function () {
                    return B.vS
                },
                O_: function () {
                    return Management
                },
                Tx: function () {
                    return PoolManagement
                },
                us: function () {
                    return B.us
                },
                xV: function () {
                    return B.xV
                }
            });
            var a = s(85893),
                r = s(67294),
                l = s(10721),
                n = s(73628),
                o = s(44304),
                i = s(37386);
            let NoPools = () => (0, a.jsxs)("div", {
                className: "text-center min-h-screen",
                children: [(0, a.jsxs)("div", {
                    className: "my-12 relative p-3 w-48 mx-auto aspect-square rounded-full flex items-center bg-gradient-to-tr from-level-one",
                    children: [(0, a.jsx)("img", {
                        src: "/icons/welcome-".concat(o.Pg ? "dark" : "light", ".svg"),
                        alt: "Welcome",
                        className: "mx-auto"
                    }), (0, a.jsx)("div", {
                        className: "absolute p-3 -top-2 -right-2 bg-accent rounded-full border border-white border-opacity-5",
                        children: (0, a.jsx)(n.pO, {
                            width: 8,
                            height: 8
                        })
                    })]
                }), (0, a.jsx)("h4", {
                    className: "text-2xl max-w-sm mx-auto text-primary",
                    children: (0, a.jsx)("strong", {
                        children: "Welcome to your new staking management panel"
                    })
                }), (0, a.jsx)("p", {
                    className: "mt-4 mb-8 text-secondary",
                    children: "Let’s get started by creating your first staking pool"
                }), (0, a.jsx)(i.Y, {
                    className: "mx-auto"
                })]
            });
            var c = s(27484),
                d = s.n(c),
                u = s(91328),
                m = s(92608),
                x = s(81969),
                h = s(24124),
                p = s(30084),
                g = s(31512),
                f = s(62378),
                v = s(61267),
                j = s(88326);
            let StakingPools = e => {
                let {
                    pools: t,
                    initial: s
                } = e, [l, n] = (0, r.useState)((0, j.I9)()), o = 1 === l, {
                    active: i,
                    expired: c
                } = (0, r.useMemo)(() => t.filter(e => {
                    let {
                        type: t
                    } = e;
                    return o ? t === u.W.NFT : t !== u.W.NFT
                }).reduce((e, t) => d()().isBefore(d()(t.end_date)) ? {
                    ...e,
                    active: [...e.active, t]
                } : {
                    ...e,
                    expired: [...e.expired, t]
                }, {
                    active: [],
                    expired: []
                }), [t, o]);
                return (0, a.jsxs)("div", {
                    className: "my-8",
                    children: [(0, a.jsxs)("div", {
                        className: "lg:flex flex-row-reverse items-center space-y-4 lg:space-y-0",
                        children: [(0, a.jsx)(g.C, {}), v.g6 && (0, a.jsx)("div", {
                            className: "flex-1",
                            children: (0, a.jsx)(f.rs, {
                                curr: l,
                                opts: v.zh,
                                setCurr: e => n(e),
                                className: "w-full lg:w-80"
                            })
                        })]
                    }), (0, a.jsx)(p.J, {
                        title: "Active pools",
                        is_nft: o,
                        is_admin: !0,
                        children: (0, a.jsx)(x.o, {
                            loading: s,
                            children: i.length > 0 ? i.map(e => (0, a.jsx)(h.Z, {
                                pool: e,
                                admin: !0
                            }, e.id)) : (0, a.jsx)(m.IY, {
                                type: "active"
                            })
                        })
                    }), (0, a.jsx)(p.J, {
                        title: "Expired pools",
                        is_admin: !0,
                        is_nft: o,
                        children: (0, a.jsx)(x.o, {
                            loading: s,
                            children: c.length > 0 ? c.map(e => (0, a.jsx)(h.Z, {
                                pool: e,
                                admin: !0
                            }, e.id)) : (0, a.jsx)(m.IY, {
                                type: "expired"
                            })
                        })
                    })]
                })
            };
            var N = s(11163),
                y = s(24254),
                b = s(56410),
                k = s(22920),
                w = s(79452),
                T = s(9404),
                _ = s(22464),
                C = s(59860),
                F = s(96266),
                S = s(51128);
            let RequiresSetup = e => {
                let {
                    back: t,
                    text: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: "text-center px-4",
                    children: [(0, a.jsx)("h2", {
                        className: "text-primary text-2xl mt-12",
                        children: (0, a.jsx)("strong", {
                            children: s
                        })
                    }), (0, a.jsx)(T.z, {
                        className: "w-48 mt-12",
                        dark: !0,
                        onClick: t,
                        children: "Back"
                    })]
                })
            };
            var W = s(85063);
            let P = "0x0000000000000000000000000000000000000000",
                Inset = e => (0, a.jsx)("div", {
                    className: "px-2 w-28",
                    children: (0, a.jsx)("strong", {
                        children: e
                    })
                }),
                L = {
                    [u.W.Compound]: "setNFT",
                    [u.W.Liquidity]: "setMultiplier",
                    [u.W.Dynamic]: "setMultiplier"
                },
                getNFTParams = (e, t, s) => {
                    let {
                        active: a,
                        name: r,
                        start_idx: l,
                        end_idx: n,
                        multiplier: o,
                        contract: i
                    } = s;
                    return [t, r, i, a, Math.round(Number(o) * (0, W.af)(e)), l, n]
                },
                NFTBoost = e => {
                    let {
                        idx: t,
                        add: s,
                        back: l,
                        state: n = {},
                        handleChange: o,
                        apy: i,
                        nft_has_changes: c,
                        address: d,
                        type: m
                    } = e, [x, h] = (0, r.useState)({}), [p, g] = (0, r.useState)(!1), f = (0, N.useRouter)(), [j] = (0, C.C)(d, v.XH[m], !0), y = "+ ".concat((Number(i) * Number(n.multiplier) - Number(i)).toFixed(2), " ").concat(m === u.W.Dynamic ? "p/d" : "%"), b = (0, _.U0)(y, null == n ? void 0 : n.active), {
                        name: W,
                        total_supply: I,
                        nft_loading: q
                    } = (0, S.e)(null == n ? void 0 : n.contract), A = n.contract === P && !n.active || !x.contract;
                    (0, r.useEffect)(() => {
                        !n.name && o && W && (o("name", W), o("start_idx", "0"), o("end_idx", (null == I ? void 0 : I.toString()) || "0"))
                    }, [W, I, o]), (0, r.useEffect)(() => {
                        W || q || n.contract === P && !n.active ? h({
                            ...x,
                            contract: ""
                        }) : h({
                            ...x,
                            contract: "This is not a valid NFT contract address"
                        })
                    }, [W, n.contract, q, n.active]);
                    let handleSave = async () => {
                        h({});
                        let {
                            errors: e,
                            has_required_fields: s
                        } = (0, _.b0)(b, n);
                        if (!s) {
                            h(e);
                            return
                        }
                        g(!0);
                        try {
                            k.Am.info("Awaiting successful transaction");
                            let e = getNFTParams(m, t, n),
                                s = await j[L[m]](...e);
                            await s.wait(), k.Am.success("Successfully updated NFT boost values"), g(!1), f.push({
                                pathname: (0, F.RO)(f.asPath),
                                query: {
                                    is_second_form: !0
                                }
                            })
                        } catch (e) {
                            k.Am.error(e.reason || e.message), g(!1)
                        }
                    };
                    return s ? (0, a.jsx)(RequiresSetup, {
                        text: "You need to set up and create a pool before you can set up the NFT boost",
                        back: l
                    }) : (0, a.jsxs)("div", {
                        className: "mt-8",
                        children: [b.map(e => {
                            let {
                                name: t,
                                label: s,
                                type: r,
                                placeholder: l,
                                tooltip: i,
                                inset: c,
                                step: d,
                                min: u
                            } = e;
                            return (0, a.jsx)(w.I, {
                                className: "my-4",
                                value: n[t],
                                loading: "contract" === t && q,
                                name: t,
                                id: t,
                                label: s,
                                error: x[t],
                                onChange: e => {
                                    let {
                                        target: {
                                            type: t,
                                            name: s,
                                            value: a,
                                            checked: r
                                        }
                                    } = e;
                                    return o(s, "checkbox" === t ? r : a)
                                },
                                placeholder: l,
                                type: r,
                                inset: c && Inset(c),
                                tooltip: i,
                                step: d,
                                min: u
                            }, t)
                        }), (0, a.jsxs)("div", {
                            className: "flex space-x-4 items-center mt-8",
                            children: [(0, a.jsx)("div", {
                                className: "flex-1",
                                children: (0, a.jsx)(T.z, {
                                    dark: !0,
                                    onClick: l,
                                    className: "w-full",
                                    id: "back_button",
                                    children: "Back"
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex-1",
                                children: (0, a.jsx)(T.z, {
                                    onClick: handleSave,
                                    disabled: !c || p || !A,
                                    loading: p,
                                    className: "w-full",
                                    id: "save_changes",
                                    children: "Save changes"
                                })
                            })]
                        })]
                    })
                };
            var I = s(3919),
                q = s(41421),
                A = s(50010),
                M = s(35553);
            let Warning = e => {
                    let {
                        type: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "border border-secondary rounded p-4 mt-8",
                        children: [(0, a.jsx)("h4", {
                            children: (0, a.jsx)("strong", {
                                className: "text-primary",
                                children: "Important!"
                            })
                        }), (0, a.jsxs)("ul", {
                            className: "ml-4 text-sm text-secondary space-y-2 mt-4 mb-2",
                            children: [(0, a.jsx)("li", {
                                children: t === u.W.NFT ? "You need to set up the collection information after creating the pool" : "You need to set up and create a pool before you can set up the NFT boost"
                            }), (0, a.jsx)("li", {
                                children: "These parameters interact with a smart contract. Each change will require to complete a transaction to save changes."
                            })]
                        })]
                    })
                },
                D = o.STAKING_MODULES.reduce((e, t) => {
                    let {
                        type: s
                    } = t;
                    return e.includes(s) ? e : [...e, s]
                }, []),
                PoolForm = e => {
                    let {
                        state: t = {},
                        handleChange: s,
                        add: l = !1,
                        handleClick: n,
                        errors: o,
                        loading: i,
                        disabled: c,
                        ticker: d
                    } = e, [m, x] = (0, r.useState)(""), {
                        symbol: h,
                        decimals: p
                    } = (0, A.d)(t.type === u.W.NFT ? t.reward_token : t.input_token), {
                        symbol: g,
                        decimals: N
                    } = (0, A.d)(t.reward_token), y = t.reward && t.hardcap && t.reward_token && t.input_token, b = (0, r.useMemo)(() => (0, _.Xs)(h || "XXX", g || "XXX", t.reward, t.type, t.type === u.W.Dynamic && y && (0, M.Fn)("∞" === m ? "" : m)), [h, g, m, t.type, t.reward, t.hardcap, d, y]), k = (0, r.useMemo)(() => (0, j.XR)(t.type), [t.type]);
                    return (0, r.useEffect)(() => {
                        t.reward && t.hardcap && h && g ? (0, j.WR)(h, g, p, N, (0, M.vz)((0, q.T7)((null == t ? void 0 : t.reward.toString()) || "0"), N).div(86400), (0, M.vz)(t.hardcap, p)).then(e => x(e)) : x("0.0")
                    }, [t.reward, t.hardcap, h, p, g, N]), (0, a.jsxs)("div", {
                        className: "mt-8",
                        children: [l && v.bw && (0, a.jsxs)("div", {
                            className: "my-4",
                            children: [(0, a.jsx)("p", {
                                className: "text-secondary text-sm mb-2",
                                children: "Staking type"
                            }), (0, a.jsx)(f.rs, {
                                opts: D,
                                curr: D.findIndex(e => t.type === e),
                                setCurr: e => s("type", D[e]),
                                dark: !0
                            })]
                        }), l && k.length > 1 && (0, a.jsx)(I.P, {
                            options: k,
                            selected: t.address,
                            getId: e => e.address,
                            getLabel: e => "".concat(e.type, " ").concat(e.idx + 1, " - ").concat((0, q.pm)(e.address, 4), " ").concat(e.idx === k.length - 1 ? "(latest)" : ""),
                            onSelect: e => s("address", e),
                            label: "Staking contract",
                            placeholder: "Select contract",
                            className: "my-2",
                            id: "staking-pool"
                        }), b.map(e => {
                            let {
                                name: r,
                                label: l,
                                type: n,
                                placeholder: i,
                                tooltip: c,
                                inset: d,
                                step: u
                            } = e;
                            return (0, a.jsx)(w.I, {
                                className: "my-4",
                                value: "number" === n ? t[r] ? (0, q.T7)(t[r]) : "" : t[r],
                                name: r,
                                id: r,
                                label: l,
                                error: o[r],
                                onChange: e => s(e.target.name, "checkbox" === e.target.type ? e.target.checked : e.target.value),
                                placeholder: i,
                                type: n,
                                inset: d && (0, a.jsx)("div", {
                                    className: "px-4",
                                    children: (0, a.jsx)("strong", {
                                        children: d
                                    })
                                }),
                                tooltip: c,
                                step: u
                            }, r)
                        }), l && (0, a.jsx)(Warning, {
                            type: t.type
                        }), (0, a.jsx)(T.z, {
                            id: "add_pool",
                            className: "w-full mt-8 mb-4",
                            onClick: n,
                            loading: i,
                            disabled: c || i,
                            children: l ? "Add Pool" : "Save changes"
                        })]
                    })
                },
                NFTCustomisation_Inset = e => (0, a.jsx)("div", {
                    className: "px-2 w-28",
                    children: (0, a.jsx)("strong", {
                        children: e
                    })
                }),
                getCustomisationParams = (e, t) => {
                    let {
                        name: s,
                        logo: a,
                        header_logo: r,
                        start_idx: l,
                        end_idx: n,
                        max_per_user: o,
                        collection_url: i
                    } = t;
                    return [e, s, a, r, i, l, n, o]
                },
                NFTCustomisation = e => {
                    let {
                        idx: t,
                        add: s,
                        back: l,
                        state: n = {},
                        handleChange: o,
                        input_token: i,
                        customisation_has_changes: c,
                        address: d,
                        type: u
                    } = e, [m, x] = (0, r.useState)({}), [h, p] = (0, r.useState)(!1), g = (0, N.useRouter)(), [f] = (0, C.C)(d, v.XH[u], !0), j = (0, r.useMemo)(() => (0, _.hm)(), []), {
                        name: y,
                        total_supply: b,
                        nft_loading: W
                    } = (0, S.e)(i);
                    (0, r.useEffect)(() => {
                        !n.name && o && (o("name", y), o("start_idx", "0"), o("end_idx", (null == b ? void 0 : b.toString()) || "0"))
                    }, [y, b, o]);
                    let handleSave = async () => {
                        x({});
                        let {
                            errors: e,
                            has_required_fields: s
                        } = (0, _.b0)(j, n);
                        if (!s) {
                            x(e);
                            return
                        }
                        p(!0);
                        try {
                            k.Am.info("Awaiting successful transaction");
                            let e = getCustomisationParams(t, n),
                                s = await f.setNFTInfo(...e);
                            await s.wait(), k.Am.success("Successfully updated NFT collection values"), p(!1), g.push({
                                pathname: (0, F.RO)(g.asPath),
                                query: {
                                    is_second_form: !0
                                }
                            })
                        } catch (e) {
                            k.Am.error(e.reason || e.message), p(!1)
                        }
                    };
                    return s ? (0, a.jsx)(RequiresSetup, {
                        text: "You need to set up and create a pool before you can customise the collection settings",
                        back: l
                    }) : (0, a.jsxs)("div", {
                        className: "mt-8",
                        children: [j.map(e => {
                            let {
                                name: t,
                                label: s,
                                type: r,
                                placeholder: l,
                                tooltip: i,
                                inset: c,
                                step: d,
                                min: u
                            } = e;
                            return (0, a.jsx)(w.I, {
                                className: "my-4",
                                value: n[t],
                                loading: "contract" === t && W,
                                name: t,
                                id: t,
                                label: s,
                                error: m[t],
                                onChange: e => {
                                    let {
                                        target: {
                                            type: t,
                                            name: s,
                                            value: a,
                                            checked: r
                                        }
                                    } = e;
                                    return o(s, "checkbox" === t ? r : a)
                                },
                                placeholder: l,
                                type: r,
                                inset: c && NFTCustomisation_Inset(c),
                                tooltip: i,
                                step: d,
                                min: u
                            }, t)
                        }), (0, a.jsxs)("div", {
                            className: "flex space-x-4 items-center mt-8",
                            children: [(0, a.jsx)("div", {
                                className: "flex-1",
                                children: (0, a.jsx)(T.z, {
                                    dark: !0,
                                    onClick: l,
                                    className: "w-full",
                                    id: "back_button",
                                    children: "Back"
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex-1",
                                children: (0, a.jsx)(T.z, {
                                    onClick: handleSave,
                                    disabled: !c || h,
                                    loading: h,
                                    className: "w-full",
                                    id: "save_changes",
                                    children: "Save changes"
                                })
                            })]
                        })]
                    })
                },
                getNavOpts = e => e === u.W.NFT ? ["Pool setup", "Collection setup"] : ["Pool setup", "NFT boost setup"],
                PoolManagement = e => {
                    let {
                        state: t = {},
                        handleChange: s,
                        handleNFTChange: l,
                        handleCustomisationChange: n,
                        add: o = !1,
                        handleClick: i,
                        errors: c,
                        loading: d,
                        ticker: m,
                        disabled: x,
                        nft_has_changes: h,
                        customisation_has_changes: p,
                        idx: g
                    } = e, {
                        query: {
                            is_second_form: f
                        }
                    } = (0, N.useRouter)(), [v, j] = (0, r.useState)("true" === f ? 1 : 0), handleBack = () => j(0), k = (0, r.useMemo)(() => getNavOpts(t.type), [t.type]);
                    return (0, a.jsxs)("div", {
                        className: "max-w-xl mx-auto",
                        children: [(0, a.jsx)(b.x, {
                            url: "/manage"
                        }), (0, a.jsxs)("div", {
                            className: "bg-level-one rounded p-5 border border-custom mb-40",
                            children: [(0, a.jsx)(y.r, {
                                curr: v,
                                setCurr: j,
                                opts: k,
                                dark: !0
                            }), 0 === v ? (0, a.jsx)(PoolForm, {
                                state: t,
                                handleChange: s,
                                add: o,
                                handleClick: i,
                                errors: c,
                                loading: d,
                                disabled: x,
                                ticker: m
                            }) : t.type === u.W.NFT ? (0, a.jsx)(NFTCustomisation, {
                                add: o,
                                back: handleBack,
                                state: t.customisation,
                                handleChange: n,
                                input_token: t.input_token,
                                customisation_has_changes: p,
                                idx: g,
                                address: t.address,
                                type: t.type
                            }) : (0, a.jsx)(NFTBoost, {
                                add: o,
                                back: handleBack,
                                state: t.nft,
                                handleChange: l,
                                apy: (null == t ? void 0 : t.reward) || "0",
                                nft_has_changes: h,
                                idx: g,
                                address: t.address,
                                type: t.type
                            })]
                        })]
                    })
                };
            var B = s(7997);
            let Management = e => {
                let {
                    initial: t
                } = e, {
                    pools: s
                } = (0, l.CG)(e => e.staking);
                return (0, a.jsx)("div", {
                    children: t || 0 !== s.length ? (0, a.jsx)(StakingPools, {
                        initial: t,
                        pools: s
                    }) : (0, a.jsx)(NoPools, {})
                })
            }
        },
        70705: function (e, t, s) {
            s.d(t, {
                E: function () {
                    return Progress
                }
            });
            var a = s(85893);
            s(67294);
            let Progress = e => {
                let {
                    percent: t,
                    marker: s,
                    height: r = "h-3"
                } = e;
                return (0, a.jsxs)("div", {
                    className: "overflow-hidden text-xs flex rounded-full relative ".concat(r, " bg-main border border-white border-opacity-5"),
                    children: [s && (0, a.jsx)("div", {
                        className: "absolute w-1 bg-white ".concat(r),
                        style: {
                            left: "".concat(s, "%")
                        },
                        children: (0, a.jsx)("div", {
                            className: "absolute text-base flex h-full items-center right-4",
                            children: (0, a.jsx)("strong", {
                                children: "MIN"
                            })
                        })
                    }), (0, a.jsx)("div", {
                        style: {
                            width: "".concat(t, "%")
                        },
                        className: "rounded-full bg-accent"
                    })]
                })
            }
        },
        89284: function (e, t, s) {
            s.d(t, {
                k: function () {
                    return ProgressBar
                }
            });
            var a = s(85893);
            s(67294);
            var r = s(70705),
                l = s(35553),
                n = s(2593),
                o = s(32745),
                i = s(75605);
            let ProgressBar = e => {
                let {
                    hardcap: t,
                    total_staked: s,
                    decimals: c,
                    symbol: d,
                    liquidity: u,
                    second_total_staked: m,
                    second_decimals: x,
                    second_symbol: h
                } = e, p = n.O$.from(t).gt(0) && n.O$.from(s).gt(t) ? t : s, g = Math.round(Number((0, l.bM)(p, c)) / Number((0, l.bM)(t, c)) * 100), f = u || t === (0, l.fi)("1000000000").toString();
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)("div", {
                        className: "text-sm flex mb-1",
                        children: [(0, a.jsx)("div", {
                            className: "lg:hidden flex-1 text-secondary",
                            children: "Capacity"
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(i.ZT, {
                                size: "sm",
                                children: "".concat((0, o.d)(p, c, 0 === c ? 0 : 2), " / ").concat(f ? "∞" : "".concat((0, o.d)(t, c, c ? 2 : 0)), " ").concat(!!c && d || "")
                            }), u && (0, a.jsx)(i.ZT, {
                                size: "sm",
                                children: "".concat((0, o.d)(m, x, 2), " / ∞ ").concat(h)
                            })]
                        })]
                    }), !f && (0, a.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [(0, a.jsx)("div", {
                            className: "flex-1 lg:flex-none lg:w-32",
                            children: (0, a.jsx)(r.E, {
                                percent: g,
                                height: "h-2"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "text-primary",
                            children: [g, "%"]
                        })]
                    })]
                })
            }
        },
        3919: function (e, t, s) {
            s.d(t, {
                P: function () {
                    return Select
                }
            });
            var a = s(85893);
            s(67294);
            var r = s(44304),
                l = s(62378);
            let Select = e => {
                let {
                    id: t,
                    className: s,
                    label: n,
                    onSelect: o,
                    selected: i,
                    options: c,
                    error: d,
                    placeholder: u,
                    getId: m = e => e,
                    getLabel: x = e => e,
                    disabled: h,
                    loading: p
                } = e, g = "focus:outline-none bg-main flex-1 w-full dark-placeholder  ".concat(r.Pg ? "dark-mode" : "");
                return (0, a.jsxs)("div", {
                    className: "w-full ".concat(s || ""),
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-cenetr",
                        children: [n && (0, a.jsx)("label", {
                            className: "text-sm text-secondary mb-2",
                            htmlFor: t,
                            children: n
                        }), d && (0, a.jsx)("p", {
                            className: "text-red",
                            children: d
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center space-x-2 py-3 px-3 bg-main focus:outline-none rounded border border-custom ",
                        children: [(0, a.jsxs)("select", {
                            id: t,
                            onChange: e => o(e.target.value),
                            className: g,
                            value: i,
                            disabled: h,
                            children: [(0, a.jsx)("option", {
                                value: "",
                                disabled: !0,
                                children: u
                            }), c.map(e => (0, a.jsx)("option", {
                                id: m(e),
                                value: m(e),
                                children: x(e)
                            }, m(e)))]
                        }), (0, a.jsx)("div", {
                            className: "w-4",
                            children: p && (0, a.jsx)(l.aN, {
                                height: 5,
                                className: "mx-auto"
                            })
                        })]
                    })]
                })
            }
        },
        72694: function (e, t, s) {
            s.d(t, {
                g: function () {
                    return AnalyticsTextItem
                }
            });
            var a = s(85893);
            let AnalyticsTextItem = e => {
                let {
                    children: t,
                    title: s
                } = e;
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("h3", {
                        className: "text-xl mb-1 text-primary",
                        children: (0, a.jsx)("strong", {
                            children: t
                        })
                    }), (0, a.jsx)("p", {
                        className: "text-xs text-secondary",
                        children: s.toUpperCase()
                    })]
                })
            }
        },
        32790: function (e, t, s) {
            s.d(t, {
                J: function () {
                    return Icon
                }
            });
            var a = s(85893),
                r = s(91328);
            let IconPart = e => {
                    let {
                        img: t,
                        symbol: s,
                        action: r,
                        dark: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "px-3 py-2 rounded flex border border-custom space-x-2 ".concat(l ? "bg-level-three" : "bg-level-two"),
                        children: [(0, a.jsx)("img", {
                            "data-testid": "staking-icon-img",
                            src: t,
                            alt: s,
                            height: 40,
                            width: 40,
                            className: "w-12 h-12"
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h2", {
                                className: "lg:text-xl",
                                children: (0, a.jsx)("strong", {
                                    "data-testid": "icon-symbol",
                                    children: s
                                })
                            }), (0, a.jsx)("p", {
                                className: "text-secondary text-xs",
                                children: r.toUpperCase()
                            })]
                        })]
                    })
                },
                LiquidityIconPart = e => {
                    let {
                        pool: t,
                        dark: s
                    } = e, {
                        input_token: r,
                        second_input_token: l
                    } = t;
                    return (0, a.jsxs)("div", {
                        className: "px-3 py-2 rounded-lg flex border-white-border border-opacity-5 space-x-2 ".concat(s ? "bg-level-three" : "bg-level-two"),
                        children: [(0, a.jsxs)("div", {
                            className: "relative w-12",
                            children: [(0, a.jsx)("img", {
                                "data-testid": "liq-staking-icon-img-1",
                                src: r.logo,
                                alt: r.symbol,
                                height: 30,
                                width: 30,
                                className: "absolute bottom-0"
                            }), (0, a.jsx)("img", {
                                "data-testid": "liq-staking-icon-img-2",
                                src: l.logo,
                                alt: l.symbol,
                                height: 30,
                                width: 30,
                                className: "absolute top-0 left-4"
                            })]
                        }), (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("h2", {
                                className: "lg:text-xl",
                                children: (0, a.jsxs)("strong", {
                                    "data-testid": "icon-symbol",
                                    children: [r.symbol, " / ", l.symbol]
                                })
                            }), (0, a.jsx)("p", {
                                className: "text-secondary text-xs",
                                children: "LIQUIDITY STAKE"
                            })]
                        })]
                    })
                },
                Icon = e => {
                    let {
                        pool: t,
                        dark: s = !1,
                        className: l
                    } = e, {
                        input_token: n,
                        reward_token: o,
                        type: i
                    } = t || {};
                    return (0, a.jsxs)("div", {
                        className: "flex space-x-2 ".concat(l),
                        children: [i === r.W.Liquidity ? (0, a.jsx)(LiquidityIconPart, {
                            pool: t,
                            dark: s
                        }) : (0, a.jsx)(IconPart, {
                            dark: s,
                            img: null == n ? void 0 : n.logo,
                            symbol: null == n ? void 0 : n.symbol,
                            action: "Stake"
                        }), (0, a.jsx)(IconPart, {
                            dark: s,
                            img: null == o ? void 0 : o.logo,
                            symbol: null == o ? void 0 : o.symbol,
                            action: "Earn"
                        })]
                    })
                }
        },
        59927: function (e, t, s) {
            s.d(t, {
                P: function () {
                    return NFTTooltip
                }
            });
            var a = s(85893);
            s(67294);
            var r = s(62378),
                l = s(10721),
                n = s(88326),
                o = s(91328),
                i = s(85063);
            let NFTTooltip = e => {
                let {
                    children: t,
                    id: s,
                    admin: c
                } = e, {
                    pools: d
                } = (0, l.CG)(e => e.staking), u = d.find(e => e.id === s), {
                    reward_rate: m,
                    nft_multiplier_used: x,
                    nft_name: h,
                    type: p
                } = u || {}, {
                    boost: g,
                    has_boost: f
                } = (0, i.xS)(u, c), v = p === o.W.Compound ? (100 * (0, n.WZ)(parseFloat(m) / 100, 365) + g).toFixed(2) + "%" : isNaN(g) ? "∞ %" : (parseFloat(m) + g).toFixed(2) + "%";
                return (0, a.jsx)(r.u, {
                    text: '<div class="text-primary p-1"><div class="flex space-x-4"><div class="flex-1 text-secondary">Required NFT</div><div class="'.concat(f ? "text-success" : "", '"><strong>').concat(x && h || "None", '</strong></div></div><div class="flex space-x-4 mt-2"><div class="flex-1 text-secondary">APY with boost</div><div class="').concat(f ? "text-success" : "", '"><strong>').concat(x && v || "0%", "</strong></div></div></div>"),
                    children: t
                })
            }
        },
        92608: function (e, t, s) {
            s.d(t, {
                IY: function () {
                    return NoAdminPools
                },
                LM: function () {
                    return NoStake
                },
                RZ: function () {
                    return ConnectWallet
                },
                UD: function () {
                    return NoActivePools
                },
                Uf: function () {
                    return PoolLoadingCard
                },
                r8: function () {
                    return StakedInAll
                }
            });
            var a = s(85893),
                r = s(67294),
                l = s(62378),
                n = s(73628),
                o = s(42812);
            let PoolCard = e => {
                    let {
                        children: t,
                        onClick: s,
                        loading: r
                    } = e;
                    return (0, a.jsx)("div", {
                        onClick: s,
                        className: "lg:h-24 my-4 p-3 md:p-5 w-full text-left rounded border border-custom bg-level-one flex items-center space-x-4 ".concat(r ? "animate-pulse" : ""),
                        children: t
                    })
                },
                NoStake = e => {
                    let {
                        executeScroll: t
                    } = e;
                    return (0, a.jsxs)(PoolCard, {
                        children: [(0, a.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, a.jsx)("h5", {
                                className: "text-lg mb-1",
                                children: (0, a.jsx)("strong", {
                                    children: "Looks like you haven’t staked yet"
                                })
                            }), (0, a.jsx)("p", {
                                className: "text-sm text-secondary",
                                children: "Stake in pools below to start earning rewards"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "hidden md:inline",
                            children: (0, a.jsx)(l.zx, {
                                className: "w-full",
                                onClick: t,
                                children: (0, a.jsx)(n.ol, {
                                    className: "mx-auto"
                                })
                            })
                        })]
                    })
                },
                ConnectWallet = () => {
                    let {
                        connect: e
                    } = (0, o.l)();
                    return (0, a.jsxs)(PoolCard, {
                        children: [(0, a.jsx)("div", {
                            className: "flex-1",
                            children: (0, a.jsx)("h5", {
                                children: (0, a.jsx)("strong", {
                                    children: "Connect wallet to see your staked pools"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(l.zx, {
                                className: "w-full",
                                onClick: () => e(void 0),
                                children: "Connect wallet"
                            })
                        })]
                    })
                },
                StakedInAll = () => {
                    let [e, t] = (0, r.useState)(0), s = new Audio("/audio/splash.mp3");
                    return (0, r.useEffect)(() => {
                        s && e > 0 && e % 10 == 0 && s.play()
                    }, [e, s]), (0, a.jsx)(PoolCard, {
                        onClick: () => t(e + 1),
                        children: (0, a.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, a.jsx)("h5", {
                                className: "text-lg mb-1",
                                children: (0, a.jsx)("strong", {
                                    children: "Looks like you are staking in all active pools"
                                })
                            }), (0, a.jsx)("p", {
                                className: "text-sm text-secondary",
                                children: "What a whale \uD83D\uDC0B"
                            })]
                        })
                    })
                },
                NoActivePools = () => (0, a.jsx)(PoolCard, {
                    children: (0, a.jsx)("div", {
                        className: "flex-1",
                        children: (0, a.jsx)("h5", {
                            className: "text-lg",
                            children: (0, a.jsx)("strong", {
                                children: "It looks like there are no active pools at this time"
                            })
                        })
                    })
                }),
                PoolLoadingCard = () => (0, a.jsx)(PoolCard, {
                    loading: !0,
                    children: (0, a.jsx)("div", {
                        className: "flex-1",
                        children: (0, a.jsx)("h5", {
                            className: "text-lg",
                            children: (0, a.jsx)("strong", {
                                children: "The pools are loading, they'll be right with you"
                            })
                        })
                    })
                }),
                NoAdminPools = e => {
                    let {
                        type: t
                    } = e;
                    return (0, a.jsx)("div", {
                        className: "lg:h-24 my-4 p-3 md:p-5 w-full text-left rounded border border-custom cursor-pointer bg-level-one flex items-center space-x-4",
                        children: (0, a.jsx)("div", {
                            className: "flex-1",
                            children: (0, a.jsx)("h5", {
                                className: "text-lg",
                                children: (0, a.jsxs)("strong", {
                                    children: ["It looks like there are no ", t, " pools at this time"]
                                })
                            })
                        })
                    })
                }
        },
        30084: function (e, t, s) {
            s.d(t, {
                J: function () {
                    return PoolsContainer
                }
            });
            var a = s(85893);
            s(67294);
            var r = s(62378),
                StakingPools_PoolHeader = e => {
                    let {
                        is_active: t,
                        is_nft: s,
                        is_admin: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "hidden w-full items-center px-2 py-1 text-secondary lg:grid grid-cols-12 text-left",
                        children: [(0, a.jsx)("div", {
                            className: "text-left col-span-4",
                            children: "Pools"
                        }), (0, a.jsx)("div", {
                            className: "col-span-".concat(s ? 2 : 1),
                            children: (0, a.jsx)(r.XU, {
                                info: s ? "The estimated daily reward per NFT staked in the pool." : "The estimated yearly returns made from the pool.",
                                text: "Reward",
                                text_color: "text-secondary"
                            })
                        }), !s && (0, a.jsx)("div", {
                            className: "col-span-2 mx-auto",
                            children: (0, a.jsx)(r.XU, {
                                info: "Specified APY boost applies if you own an appropriate NFT",
                                text: "NFT boost",
                                text_color: "text-secondary"
                            })
                        }), s && l && (0, a.jsx)("div", {
                            className: "col-span-2",
                            children: "Max stake"
                        }), (0, a.jsx)("div", {
                            className: "col-span-".concat(l || s ? 2 : 1),
                            children: l ? "Expiry & lock term" : "Lock term"
                        }), (0, a.jsx)("div", {
                            className: "col-span-2 pl-8",
                            children: "Capacity"
                        }), t && !l && (0, a.jsx)("div", {
                            className: "col-span-2 text-right",
                            children: "Your stake"
                        })]
                    })
                };
            let PoolsContainer = e => {
                let {
                    title: t,
                    children: s,
                    is_active: r,
                    is_admin: l,
                    is_nft: n,
                    button: o,
                    display_graphic: i,
                    has_pools: c
                } = e;
                return (0, a.jsxs)("div", {
                    className: "text-primary mb-8 mt-12",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-start space-x-4",
                        children: [(0, a.jsx)("h2", {
                            className: "text-3xl mb-8 flex-1",
                            children: (0, a.jsx)("strong", {
                                children: t
                            })
                        }), o]
                    }), !(n && i) && (0, a.jsx)(StakingPools_PoolHeader, {
                        is_active: r,
                        is_nft: n,
                        is_admin: l
                    }), (0, a.jsx)("div", {
                        className: "".concat(c && n && i ? "lg:grid grid-cols-4 gap-4" : ""),
                        children: s
                    })]
                })
            }
        },
        24124: function (e, t, s) {
            s.d(t, {
                Z: function () {
                    return StakingPools_PoolItem
                }
            });
            var a = s(85893),
                r = s(67294),
                l = s(91328),
                n = s(89284),
                o = s(41421),
                i = s(32790),
                c = s(10721),
                d = s(59927),
                u = s(85063);
            let NFTBoost = e => {
                let {
                    id: t,
                    className: s,
                    admin: r
                } = e, {
                    pools: l
                } = (0, c.CG)(e => e.staking), n = l.find(e => e.id === t), {
                    nft_multiplier_used: o
                } = n || {}, {
                    boost: i,
                    has_boost: m
                } = (0, u.xS)(n, r);
                return (0, a.jsx)("div", {
                    className: s,
                    children: (0, a.jsx)(d.P, {
                        id: t,
                        children: (0, a.jsx)("div", {
                            className: "max-w-min px-4 py-2 rounded text-center bg-level-two border ".concat(m ? "border-success" : "border border-custom"),
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center space-x-2 justify-center",
                                children: [(0, a.jsx)("div", {
                                    className: "rounded-full border border-custom",
                                    children: (0, a.jsx)("div", {
                                        className: "rounded-full p-2 opacity-100 ".concat(m ? "bg-success" : "bg-main")
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "",
                                    children: isNaN(i) ? "+0%" : "+".concat(o ? i : "0", "%")
                                })]
                            })
                        })
                    })
                })
            };
            var m = s(27484),
                x = s.n(m),
                h = s(68851),
                p = s(44304),
                g = s(88326),
                f = s(32745),
                v = s(11163),
                j = s(29387),
                N = s.n(j),
                y = s(70178),
                b = s.n(y);
            x().extend(N()), x().extend(b());
            let getCorrectPoolTime = (e, t, s) => t ? x()(e.end_date).utc(!1).format("DD/MM/YY HH:mm") + " UTC" : e.has_stake ? e.can_claim ? "Unlocked" : s : e.lock_period + " days",
                {
                    symbol: k,
                    decimals: w
                } = p.DEFAULT_TOKEN,
                usePoolItem = (e, t) => {
                    let {
                        reward_rate: s = "0",
                        total_staked: a = "0",
                        hardcap: n,
                        input_token: o,
                        has_stake: i,
                        id: d,
                        can_claim: m,
                        user_stake: p = "0",
                        lock_period: f,
                        last_user_deposit: j,
                        nft_multiplier_used: N,
                        end_date: y,
                        contract_idx: b,
                        address: T,
                        type: _
                    } = e, {
                        second_total_staked: C,
                        second_input_token: F,
                        second_user_stake: S
                    } = e, W = (0, c.TL)(), P = (0, v.useRouter)(), {
                        loading: L
                    } = (0, c.CG)(e => e.staking), {
                        decimals: I = w,
                        symbol: q = k
                    } = o, A = _ === l.W.Compound, M = _ === l.W.NFT, D = _ === l.W.Liquidity, B = _ === l.W.Dynamic, E = _ === l.W.Compound ? (100 * (0, g.WZ)(parseFloat(s) / 100, 365)).toFixed(2) + "%" : s, R = x()(j).add(Number(f), "days").format("DD MMM, YYYY"), U = x()(j).add(Number(f), "days").format("h:mm A"), z = (0, r.useMemo)(() => getCorrectPoolTime(e, t, R), [e, t, R]), Y = 0 >= x()(y).diff(x()()), {
                        boost: O,
                        has_boost: Z
                    } = (0, u.xS)(e, t);
                    return {
                        APR: E,
                        boost: O,
                        can_claim: m,
                        decimals: I,
                        expired: Y,
                        user_stake: p,
                        handleClick: () => {
                            if (t) return P.push("/manage/".concat(b, "/").concat(T));
                            i && m && W((0, h.hr)("Withdraw")), W((0, h.q5)(!0)), W((0, h.f0)(d))
                        },
                        hardcap: n,
                        has_boost: Z,
                        has_stake: i,
                        id: d,
                        is_compound: A,
                        is_dynamic: B,
                        is_nft: M,
                        is_liquidity: D,
                        lock_period: f,
                        loading: L,
                        lock_end_date: R,
                        lock_end_time: U,
                        symbol: q,
                        total_staked: a,
                        reward_rate: s,
                        pool_time: z,
                        nft_multiplier_used: N,
                        second_total_staked: C,
                        second_input_token: F,
                        second_user_stake: S
                    }
                },
                useInfoItems = (e, t, s, a) => {
                    let {
                        has_stake: l,
                        user_stake: n,
                        max_per_user: i,
                        total_staked: c,
                        hardcap: d,
                        reward_rate: u,
                        reward_token: m,
                        lock_period: x
                    } = e;
                    return (0, r.useMemo)(() => [{
                        text: s,
                        title: a ? "Pool expiry date" : "Lock term"
                    }, {
                        text: "".concat((0, o.am)(u), " ").concat(m.symbol),
                        title: "Daily per NFT"
                    }, {
                        text: "".concat((0, f.H)(Number(c)), " / ").concat((0, f.H)(Number(d))),
                        title: "Total staked"
                    }, {
                        text: l ? "".concat((0, f.H)(Number(n)), " / ").concat((0, f.H)(Number(i))) : i,
                        title: l ? "Your stake" : "Max stake"
                    }], [l, n, i, c, d, u, m, x, t])
                };
            var T = s(26542),
                _ = s(75605);
            let DesktopPoolItem = e => {
                    let {
                        pool: t,
                        admin: s
                    } = e, {
                        APR: c,
                        decimals: d,
                        expired: u,
                        handleClick: m,
                        hardcap: x,
                        has_stake: h,
                        id: p,
                        is_compound: g,
                        is_nft: f,
                        is_liquidity: v,
                        is_dynamic: j,
                        loading: N,
                        lock_end_time: y,
                        user_stake: b,
                        symbol: k,
                        total_staked: w,
                        reward_rate: C,
                        pool_time: F,
                        lock_period: S,
                        second_input_token: W,
                        second_total_staked: P,
                        second_user_stake: L
                    } = usePoolItem(t, s), [I, q] = (0, r.useState)(!1), A = t.type === l.W.NFT ? t.logo : "-", M = t.max_per_user;
                    return (0, a.jsxs)("div", {
                        className: "my-4 w-full text-left grid grid-cols-12 rounded border border-custom cursor-pointer bg-level-one text-primary items-center text-left ".concat(N ? "animate-pulse" : "", " ").concat(A ? "" : "border-accent"),
                        onClick: m,
                        "data-testid": "staking-pool",
                        children: [f ? (0, a.jsxs)("div", {
                            className: "col-span-4 flex items-center space-x-6 ".concat(t),
                            children: [A ? (0, a.jsx)("img", {
                                src: A,
                                alt: t.name,
                                className: "h-24 rounded-l ".concat(I ? "" : "bg-main animate-pulse aspect-square"),
                                onLoad: () => q(!0)
                            }) : (0, a.jsx)("div", {
                                className: "w-24 h-24 bg-main flex items-center rounded-l",
                                children: (0, a.jsx)(T.aN, {
                                    height: 10
                                })
                            }), (0, a.jsx)("h3", {
                                className: "text-lg ".concat(t.name ? "" : "text-accent"),
                                children: (0, a.jsx)("strong", {
                                    children: t.name || "Pool name"
                                })
                            })]
                        }) : (0, a.jsx)(i.J, {
                            pool: t,
                            className: "p-2 col-span-4"
                        }), (0, a.jsxs)("div", {
                            className: "p-2 col-span-".concat(f ? 2 : 1),
                            children: [(0, a.jsx)(_.ZT, {
                                allBold: !0,
                                size: "2xl",
                                children: f ? "".concat((0, o.am)(C), " ").concat(t.reward_token.symbol) : c
                            }), g && (0, a.jsx)(_.ZT, {
                                size: "xs",
                                className: "text-secondary",
                                children: "Compounding"
                            }), f && (0, a.jsx)(_.ZT, {
                                size: "xs",
                                className: "text-secondary",
                                children: "Daily per NFT"
                            }), j && (0, a.jsx)(_.ZT, {
                                size: "xs",
                                className: "text-secondary",
                                children: "Dynamic"
                            })]
                        }), !f && (0, a.jsx)(NFTBoost, {
                            id: p,
                            className: "p-2 col-span-2 mx-auto",
                            admin: s
                        }), f && s && (0, a.jsxs)("div", {
                            className: "col-span-2 ".concat(M ? "" : "text-accent"),
                            children: [(0, a.jsx)(_.ZT, {
                                size: "sm",
                                children: M
                            }), (0, a.jsx)(_.ZT, {
                                size: "xs",
                                className: "".concat(M ? "text-secondary" : "text-accent"),
                                children: "NFTs per wallet"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "p-2 text-col-span-".concat(s || f ? 2 : 1),
                            children: [(0, a.jsx)(_.ZT, {
                                size: "sm",
                                children: F
                            }), t.has_stake && !s && !t.can_claim && (0, a.jsx)(_.ZT, {
                                variant: "secondary",
                                size: "xs",
                                children: y
                            }), s && (0, a.jsxs)(_.ZT, {
                                size: "xs",
                                className: "text-secondary",
                                children: [S, " days lock"]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "p-2 col-span-2 pl-8",
                            children: (s || !u) && (0, a.jsx)(n.k, {
                                hardcap: x,
                                total_staked: w,
                                second_total_staked: P,
                                decimals: f ? 0 : d,
                                second_decimals: f ? 0 : null == W ? void 0 : W.decimals,
                                symbol: k,
                                second_symbol: null == W ? void 0 : W.symbol,
                                liquidity: v
                            }) || (0, a.jsx)("p", {
                                children: "Pool expired"
                            })
                        }), h && !s && (0, a.jsx)("div", {
                            className: "p-2 pr-4 col-span-2 text-right",
                            children: (0, a.jsxs)(_.ZT, {
                                size: "sm",
                                children: [f ? "".concat(b, " / ").concat(t.max_per_user) : "".concat((0, o.am)(b, d), " ").concat(k), v && (0, a.jsxs)("p", {
                                    children: [(0, o.am)(L, W.decimals), " ", W.symbol]
                                })]
                            })
                        })]
                    })
                },
                MobilePoolItem = e => {
                    let {
                        pool: t,
                        admin: s
                    } = e, {
                        APR: r,
                        boost: l,
                        decimals: c,
                        expired: d,
                        handleClick: u,
                        hardcap: m,
                        has_boost: x,
                        has_stake: h,
                        loading: p,
                        symbol: g,
                        total_staked: f,
                        pool_time: v,
                        user_stake: j,
                        is_liquidity: N,
                        nft_multiplier_used: y,
                        second_input_token: b,
                        second_total_staked: k,
                        second_user_stake: w
                    } = usePoolItem(t, s);
                    return (0, a.jsxs)("div", {
                        className: "my-4 w-full text-left rounded border border-custom cursor-pointer bg-level-one text-primary ".concat(p ? "animate-pulse" : ""),
                        onClick: u,
                        children: [(0, a.jsxs)("div", {
                            className: "w-full bg-level-two p-5 rounded space-y-4",
                            children: [(0, a.jsx)(i.J, {
                                pool: t,
                                dark: !0,
                                className: "col-span-4"
                            }), !d && (0, a.jsx)(n.k, {
                                hardcap: m,
                                total_staked: f,
                                second_total_staked: k,
                                decimals: c,
                                second_decimals: null == b ? void 0 : b.decimals,
                                symbol: g,
                                second_symbol: null == b ? void 0 : b.symbol,
                                liquidity: N
                            }) || (0, a.jsxs)("div", {
                                className: "flex my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1 text-secondary",
                                    children: "Capacity"
                                }), "Pool expired"]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "p-5",
                            children: [(0, a.jsxs)("div", {
                                className: "flex my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1 text-secondary",
                                    children: s ? "Pool expiry date" : "Lock term"
                                }), (0, a.jsx)("div", {
                                    children: v
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1 text-secondary",
                                    children: "Reward"
                                }), (0, a.jsx)("div", {
                                    children: r
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1 text-secondary",
                                    children: "NFT boost"
                                }), (0, a.jsxs)("div", {
                                    className: s && y || x ? "text-success" : "",
                                    children: ["+", isNaN(l) ? 0 : l, "%"]
                                })]
                            }), h && (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("div", {
                                    className: "flex my-2",
                                    children: [(0, a.jsx)("div", {
                                        className: "flex-1 text-secondary",
                                        children: "Your stake"
                                    }), (0, a.jsxs)("div", {
                                        className: "text-right",
                                        children: [(0, a.jsxs)("p", {
                                            children: [(0, o.am)(j, c), " ", g]
                                        }), N && (0, a.jsxs)("p", {
                                            children: [(0, o.am)(w, b.decimals), " ", b.symbol]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                PoolTextItem = e => {
                    let {
                        children: t,
                        title: s,
                        right: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "".concat(r ? "text-right" : "", " my-2"),
                        children: [(0, a.jsx)("h3", {
                            className: "text-lg",
                            children: (0, a.jsx)("strong", {
                                children: t
                            })
                        }), (0, a.jsx)("p", {
                            className: "text-xs text-secondary",
                            children: s.toUpperCase()
                        })]
                    })
                },
                NFTPoolItem = e => {
                    let {
                        pool: t,
                        admin: s
                    } = e, {
                        handleClick: l,
                        loading: n,
                        lock_end_date: o,
                        pool_time: i
                    } = usePoolItem(t, s), [c, d] = (0, r.useState)(!1), u = useInfoItems(t, o, i, s);
                    return (0, a.jsxs)("div", {
                        className: "my-4 w-full text-left rounded border border-custom cursor-pointer bg-level-one text-primary ".concat(n ? "animate-pulse" : ""),
                        onClick: l,
                        children: [(0, a.jsxs)("div", {
                            className: "relative w-full rounded-t ".concat(c || n ? "" : "animate-pulse", " ").concat(c ? "" : "bg-main aspect-square"),
                            children: [(0, a.jsx)("img", {
                                src: t.logo,
                                alt: t.name,
                                onLoad: () => d(!0),
                                className: "w-full h-full rounded-t border border-custom relative"
                            }), (0, a.jsx)("h3", {
                                className: "text-lg absolute bottom-1 left-2",
                                children: (0, a.jsx)("strong", {
                                    children: t.name
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "p-4 grid grid-cols-2",
                            children: u.map((e, t) => {
                                let {
                                    text: s,
                                    title: r
                                } = e;
                                return (0, a.jsx)(PoolTextItem, {
                                    title: r,
                                    right: t % 2 == 1,
                                    children: s
                                }, r)
                            })
                        })]
                    })
                };
            var StakingPools_PoolItem = e => {
                let {
                    pool: t,
                    display_graphic: s,
                    admin: r
                } = e, n = t.type === l.W.NFT;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "inline lg:hidden",
                        children: n ? (0, a.jsx)(NFTPoolItem, {
                            pool: t,
                            admin: r
                        }) : (0, a.jsx)(MobilePoolItem, {
                            pool: t,
                            admin: r
                        })
                    }), (0, a.jsx)("div", {
                        className: "hidden lg:inline",
                        children: n && s ? (0, a.jsx)(NFTPoolItem, {
                            pool: t,
                            admin: r
                        }) : (0, a.jsx)(DesktopPoolItem, {
                            pool: t,
                            admin: r
                        })
                    })]
                })
            }
        },
        81969: function (e, t, s) {
            s.d(t, {
                o: function () {
                    return PoolLoadingWrapper
                }
            });
            var a = s(85893),
                r = s(92608);
            let PoolLoadingWrapper = e => {
                let {
                    children: t,
                    loading: s
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [" ", s ? (0, a.jsx)(r.Uf, {}) : t]
                })
            }
        },
        85063: function (e, t, s) {
            s.d(t, {
                af: function () {
                    return getBase
                },
                xS: function () {
                    return getPoolMultiplier
                },
                Fg: function () {
                    return getStakeArgs
                },
                eR: function () {
                    return getUnstakeArgs
                }
            });
            var a = s(41421),
                r = s(35553),
                l = s(91328);
            let n = {
                    [l.W.Compound]: "user_shares",
                    [l.W.Liquidity]: "lp_amount",
                    [l.W.Dynamic]: "user_stake"
                },
                o = {
                    [l.W.Compound]: "deposit",
                    [l.W.NFT]: "stake",
                    [l.W.Dynamic]: "stake",
                    [l.W.Liquidity]: "addLiquidityAndLock"
                },
                i = {
                    [l.W.Compound]: "withdraw",
                    [l.W.NFT]: "unStake",
                    [l.W.Dynamic]: "unStake",
                    [l.W.Liquidity]: "unlockAndRemoveLP"
                };
            var c = s(2593);
            let getStakeArgs = (e, t, s, a) => [o[e.type], stakeArgs(e, t, s, a)],
                getUnstakeArgs = (e, t, s) => [i[e.type], unstakeArgs(e, t, s)],
                stakeArgs = (e, t, s, n) => {
                    let o = (0, r.vz)((0, a.T7)(t || "0"), e.input_token.decimals);
                    switch (e.type) {
                        case l.W.NFT:
                            return [e.contract_idx, n, {}];
                        case l.W.Compound:
                            return [e.contract_idx, o, {}];
                        case l.W.Liquidity:
                            return getLiquidityPoolArgs(e, o, s);
                        case l.W.Dynamic:
                            return [e.contract_idx, o, {}];
                        default:
                            return []
                    }
                },
                getLiquidityPoolArgs = (e, t, s) => {
                    let l = (0, r.vz)((0, a.T7)(s || "0"), e.second_input_token.decimals),
                        {
                            is_native: n = [!1, 0]
                        } = e,
                        o = n[0],
                        i = 0 === n[1];
                    return [e.contract_idx, o && i ? 0 : t, o && !i ? 0 : l, t.mul(9975).div(1e4), l.mul(9975).div(1e4), {
                        value: o && (i ? t : l) || "0"
                    }]
                },
                unstakeArgs = (e, t, s) => {
                    let a = n[e.type],
                        r = c.O$.from(null == e ? void 0 : e.user_stake).mul(s).div(100);
                    switch (e.type) {
                        case l.W.NFT:
                            return [e.contract_idx, t];
                        case l.W.Compound:
                            return [e.contract_idx, e[a]];
                        case l.W.Liquidity:
                            return [e.contract_idx, c.O$.from(e[a]).mul(s).div(100), r.mul(9975).div(1e4), c.O$.from(e.second_user_stake).mul(s).div(100).mul(9975).div(1e4)];
                        case l.W.Dynamic:
                            return [e.contract_idx, e[a]];
                        default:
                            return []
                    }
                },
                getBase = e => {
                    switch (e) {
                        case l.W.Compound:
                            return 10;
                        case l.W.Dynamic:
                            return 1e3;
                        default:
                            return 100
                    }
                },
                getPoolMultiplier = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!e) return {
                        boost: 0,
                        has_boost: !1
                    };
                    let s = getBase(e.type),
                        {
                            user_multiplier: a = s.toString(),
                            nft_multiplier: r = s,
                            nft_multiplier_used: l,
                            reward_rate: n
                        } = e,
                        o = Math.round((parseFloat(n) * r / s - parseFloat(n)) * s) / s,
                        i = t ? l : l && c.O$.from(a).eq(r);
                    return {
                        boost: o,
                        has_boost: i
                    }
                }
        },
        24254: function (e, t, s) {
            s.d(t, {
                r: function () {
                    return Switch
                }
            });
            var a = s(85893);
            let Switch = e => {
                let {
                    curr: t,
                    setCurr: s,
                    opts: r,
                    className: l,
                    dark: n
                } = e, o = n ? "main" : "level-one", i = n ? "level-one" : "level-two", c = n ? "border-main" : "border-level-one";
                return (0, a.jsx)("div", {
                    className: "border border-custom rounded ".concat(l),
                    children: (0, a.jsx)("div", {
                        className: "rounded border ".concat(c),
                        children: (0, a.jsx)("div", {
                            className: "p-0 bg-".concat(o, " border-2 ").concat(c, " flex items-center rounded"),
                            children: r.map((e, r) => (0, a.jsx)("button", {
                                "data-testid": "switch-option:".concat(e),
                                onClick: () => s(r),
                                className: "rounded flex-1 px-4 py-2 ".concat(r === t ? "bg-".concat(i, " text-primary border border-custom") : "bg-".concat(o, " text-secondary"), " "),
                                children: e
                            }, e))
                        })
                    })
                })
            }
        },
        22425: function (e, t, s) {
            s.d(t, {
                u: function () {
                    return Tooltip
                }
            });
            var a = s(85893),
                r = s(44304);
            s(67294);
            var l = s(24762);
            let Tooltip = e => {
                let {
                    children: t,
                    text: s,
                    active: n = !0,
                    className: o
                } = e;
                return (0, a.jsxs)("div", {
                    className: o,
                    children: [(0, a.jsx)("div", {
                        "data-html": !0,
                        "data-tip": n ? s : void 0,
                        children: t
                    }), (0, a.jsx)(l.Z, {
                        className: "text-secondary rounded opacity-100 drop-shadow-lg max-w-md",
                        backgroundColor: r.hr,
                        textColor: r.Pg ? "#ffffff" : "#000000",
                        html: !0
                    })]
                })
            }
        },
        62378: function (e, t, s) {
            s.d(t, {
                zx: function () {
                    return a.z
                },
                VY: function () {
                    return c.VY
                },
                k0: function () {
                    return ContractOwnerOnly
                },
                XU: function () {
                    return InfoText
                },
                II: function () {
                    return i.I
                },
                aN: function () {
                    return c.aN
                },
                O_: function () {
                    return d.O_
                },
                h_: function () {
                    return c.h_
                },
                Tx: function () {
                    return d.Tx
                },
                Ph: function () {
                    return u.P
                },
                DB: function () {
                    return StakingAnalytics
                },
                UE: function () {
                    return StakingPools
                },
                rs: function () {
                    return m.r
                },
                u: function () {
                    return P.u
                },
                v3: function () {
                    return Warning
                }
            });
            var a = s(9404),
                r = s(85893);
            s(58974);
            var l = s(67294),
                n = s(42812),
                o = s(41421);
            let ContractOwnerOnly = e => {
                let {
                    owner: t,
                    children: s
                } = e, {
                    account: a
                } = (0, n.l)(), i = (0, l.useMemo)(() => (0, o.mF)(a, t), [a, t]);
                return i ? (0, r.jsxs)(r.Fragment, {
                    children: [" ", s]
                }) : (0, r.jsxs)("div", {
                    className: "text-center mt-40",
                    children: [(0, r.jsx)("h3", {
                        className: "text-4xl mb-4",
                        children: (0, r.jsx)("strong", {
                            children: "Sorry, you can't go here!"
                        })
                    }), (0, r.jsx)("p", {
                        className: "text-secondary",
                        children: "Only the owner of the contract is allowed to use this feature"
                    })]
                })
            };
            s(73628);
            let InfoText = e => {
                let {
                    info: t,
                    text: s,
                    text_color: a,
                    className: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex items-center flex-wrap space-x-2 ".concat(l),
                    children: [(0, r.jsx)("p", {
                        className: a,
                        children: s
                    }), (0, r.jsx)(P.u, {
                        text: t,
                        children: (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6 text-accent",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                        })
                    })]
                })
            };
            var i = s(79452),
                c = s(26542);
            s(67160);
            var d = s(27895);
            s(70705), s(89284), s(29892);
            var u = s(3919),
                m = s(24254),
                x = s(92608),
                h = s(10634),
                p = s(42736);
            let DisplayButtons = e => {
                let {
                    display_graphic: t,
                    setDisplayGraphic: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0, r.jsx)("button", {
                        className: "text-white bg-level-one rounded border border-custom p-2 ".concat(t ? "bg-level-one" : "bg-level-two"),
                        onClick: () => s(!1),
                        children: (0, r.jsx)(h.Z, {
                            className: "text-primary w-6 h-6"
                        })
                    }), (0, r.jsx)("button", {
                        className: "text-white bg-level-one rounded border border-custom p-2 ".concat(t ? "bg-level-two" : "bg-level-one"),
                        onClick: () => s(!0),
                        children: (0, r.jsx)(p.Z, {
                            className: "text-primary w-6 h-6"
                        })
                    })]
                })
            };
            var g = s(27484),
                f = s.n(g),
                v = s(10721),
                j = s(91328),
                N = s(2593),
                y = s(35553),
                b = s(88326);
            let getReward = e => {
                    if (e.type === j.W.NFT) return Number((0, y.bM)(e.reward_rate, e.reward_token.decimals));
                    let {
                        reward_rate: t,
                        nft_multiplier: s = 10,
                        nft_multiplier_used: a,
                        user_multiplier: r = 10,
                        type: l
                    } = e, n = l === j.W.Compound ? 100 * (0, b.WZ)(parseFloat(t) / 100, 365) : parseFloat(t), o = Math.round(parseFloat(t) * s / 10), i = a && N.O$.from(r).eq(s);
                    return i && o || n
                },
                useStakingPools = (e, t) => {
                    let {
                        account: s
                    } = (0, n.l)(), {
                        pools: a
                    } = (0, v.CG)(e => e.staking), r = (0, l.useRef)(null), [o, i] = (0, l.useState)(!1), [c, d] = (0, l.useState)([]), [u, m] = (0, l.useState)([]), [x, h] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let e = a.filter(e => {
                            let {
                                type: s
                            } = e;
                            return s === j.W.NFT === t
                        });
                        d(e.filter(e => {
                            let {
                                has_stake: t
                            } = e;
                            return t
                        }).sort((e, t) => f()(e.last_user_deposit).add(Number(e.lock_period), "days").unix() - f()(t.last_user_deposit).add(Number(t.lock_period), "days").unix())), m(e.filter(e => {
                            let {
                                has_stake: t,
                                end_date: s
                            } = e;
                            return !t && f()().isBefore(f()(s))
                        }).sort((e, t) => getReward(t) - getReward(e)))
                    }, [a, t]), (0, l.useEffect)(() => {
                        e || !(a.filter(e => {
                            let {
                                type: t
                            } = e;
                            return t === j.W.NFT
                        }).length >= 3) || x || (h(!0), i(!0))
                    }, [e, a, x]), {
                        account: s,
                        active_no_stake: u,
                        active_pools_ref: r,
                        display_graphic: o,
                        executeScroll: () => r.current.scrollIntoView(),
                        has_stake: c,
                        setDisplayGraphic: i
                    }
                };
            var k = s(24124),
                w = s(30084),
                T = s(81969);
            let StakingPools = e => {
                let {
                    initial: t,
                    is_nft: s
                } = e, {
                    account: a,
                    active_no_stake: l,
                    active_pools_ref: n,
                    display_graphic: o,
                    executeScroll: i,
                    has_stake: c,
                    setDisplayGraphic: d
                } = useStakingPools(t, s);
                return (0, r.jsxs)("div", {
                    className: "my-8",
                    children: [(0, r.jsx)(w.J, {
                        title: "Staked pools",
                        is_nft: s,
                        display_graphic: o,
                        has_pools: c.length > 0,
                        is_active: !0,
                        button: s && (0, r.jsx)(DisplayButtons, {
                            display_graphic: o,
                            setDisplayGraphic: d
                        }),
                        children: (0, r.jsx)(T.o, {
                            loading: t,
                            children: c.length > 0 ? c.map(e => (0, r.jsx)(k.Z, {
                                pool: e,
                                display_graphic: o
                            }, e.id)) : a ? (0, r.jsx)(x.LM, {
                                executeScroll: i
                            }) : (0, r.jsx)(x.RZ, {})
                        })
                    }), (0, r.jsx)("div", {
                        ref: n,
                        children: (0, r.jsx)(w.J, {
                            title: "Active pools",
                            is_nft: s,
                            display_graphic: o,
                            has_pools: l.length > 0,
                            children: (0, r.jsx)(T.o, {
                                loading: t,
                                children: l.length > 0 ? l.map(e => (0, r.jsx)(k.Z, {
                                    pool: e,
                                    display_graphic: o
                                }, e.id)) : c.length > 0 ? (0, r.jsx)(x.r8, {}) : (0, r.jsx)(x.UD, {})
                            })
                        })
                    })]
                })
            };
            var _ = s(72694),
                C = s(44304),
                F = s(19981);
            let {
                symbol: S,
                decimals: W
            } = C.DEFAULT_TOKEN, useStakingAnalytics = () => {
                var e;
                let {
                    pools: t
                } = (0, v.CG)(e => e.staking), [s, a] = (0, l.useState)({}), r = (0, l.useMemo)(() => (0, F.Cr)(t.filter(e => {
                    let {
                        type: t
                    } = e;
                    return t !== j.W.NFT
                })), [t]), n = t.reduce((e, t) => {
                    let {
                        input_token: {
                            symbol: s,
                            decimals: a
                        },
                        reward_token: {
                            symbol: r,
                            decimals: l
                        }
                    } = t;
                    return {
                        ...e,
                        [s]: a,
                        [r]: l
                    }
                }, {}), i = (null === (e = r[S]) || void 0 === e ? void 0 : e.total_staked) || N.O$.from(0);
                return (0, l.useEffect)(() => {
                    (0, F.XF)(r).then(e => a(e))
                }, [r]), (0, l.useMemo)(() => [{
                    title: "Total ".concat(S, " staked"),
                    text: "".concat((0, o.am)(i, W), " ").concat(S)
                }, {
                    title: "Total value locked",
                    text: (0, F.nc)("total_staked", r, s, n)
                }, {
                    title: "Your stake",
                    text: (0, F.nc)("user_stake", r, s, n)
                }, {
                    title: "Your total rewards",
                    text: (0, F.nc)("earned_rewards", r, s, n)
                }], [r, s, n, S, W, i])
            }, StakingAnalytics = () => {
                let e = useStakingAnalytics();
                return (0, r.jsx)("div", {
                    className: "bg-level-one rounded border border-custom space-y-4 lg:space-y-0 lg:flex lg:space-x-12 p-5",
                    children: e.map(e => {
                        let {
                            text: t,
                            title: s
                        } = e;
                        return (0, r.jsx)(_.g, {
                            title: s,
                            children: t
                        }, s)
                    })
                })
            };
            var P = s(22425),
                L = s(33772);
            let Warning = e => {
                let {
                    children: t
                } = e;
                return (0, r.jsxs)("div", {
                    className: "text-sm rounded-lg bg-level-two p-4 my-8 border border-white border-opacity-5",
                    children: [(0, r.jsxs)("div", {
                        className: "flex space-x-2 mb-2",
                        children: [(0, r.jsx)(L.Z, {
                            className: "w-8 h-8 text-secondary"
                        }), (0, r.jsx)("h3", {
                            className: "text-lg",
                            children: (0, r.jsx)("strong", {
                                children: " Important information"
                            })
                        })]
                    }), t]
                })
            }
        },
        22464: function (e, t, s) {
            s.d(t, {
                U0: function () {
                    return getNFTFormData
                },
                Xs: function () {
                    return getPoolFormData
                },
                b0: function () {
                    return validateInput
                },
                hm: function () {
                    return getNFTCustomisationFormData
                }
            });
            var a = s(91328),
                r = s(88326);
            let getPoolFormData = (e, t, s, o, i) => [{
                    label: "".concat(l[o], " address"),
                    name: "input_token",
                    type: "text",
                    placeholder: "Enter the token address",
                    tooltip: n[o],
                    required: !0,
                    types: [a.W.Compound, a.W.Liquidity, a.W.Dynamic]
                }, {
                    label: "NFT Address",
                    name: "input_token",
                    type: "text",
                    placeholder: "Enter the NFT address",
                    tooltip: "The contract address of the NFT(s) to be used for staking",
                    required: !0,
                    types: [a.W.NFT]
                }, {
                    label: "Reward token",
                    name: "reward_token",
                    type: "text",
                    placeholder: "Enter the reward token address",
                    tooltip: "The contract address of the token to be used for paying out rewards",
                    required: !0,
                    types: [a.W.NFT, a.W.Liquidity, a.W.Dynamic]
                }, {
                    label: "Pool capacity",
                    name: "hardcap",
                    type: "number",
                    placeholder: "Enter pool capacity",
                    inset: o !== a.W.NFT && e,
                    tooltip: "The maximum number of tokens that can be staked",
                    required: !0,
                    types: [a.W.Compound, a.W.NFT, a.W.Dynamic]
                }, {
                    label: "APY",
                    name: "reward",
                    type: "number",
                    placeholder: "Enter pool APY",
                    inset: o === a.W.Compound ? "~ ".concat((100 * (0, r.WZ)(parseFloat(s || "0") / 100, 365)).toFixed(2), " %") : "%",
                    tooltip: "The annual percentage reward for the pool",
                    step: .1,
                    required: !0,
                    types: [a.W.Compound, a.W.Liquidity]
                }, {
                    label: "Reward rate",
                    name: "reward",
                    type: "number",
                    placeholder: "Enter pool reward rate",
                    inset: t,
                    tooltip: "The daily reward rate per NFT",
                    step: .01,
                    required: !0,
                    types: [a.W.NFT]
                }, {
                    label: "Reward per day",
                    name: "reward",
                    type: "number",
                    placeholder: "Enter pool reward rate",
                    inset: "".concat(t).concat(" | Min APY " + i + "%", " "),
                    tooltip: "The number of reward tokens distributed per day",
                    required: !0,
                    types: [a.W.Dynamic]
                }, {
                    label: "Lock period",
                    name: "lock_period",
                    type: "number",
                    placeholder: "Enter pool lock days",
                    inset: "days",
                    tooltip: "The number of days a users stake will be locked for",
                    step: 1,
                    min: 1,
                    required: !0,
                    types: [a.W.Compound, a.W.NFT, a.W.Liquidity, a.W.Dynamic]
                }, {
                    label: "Pool expiration date",
                    name: "end_date",
                    tooltip: "The date at which users can no longer stake tokens",
                    type: "datetime-local",
                    required: !0,
                    types: [a.W.Compound, a.W.NFT, a.W.Liquidity, a.W.Dynamic]
                }, {
                    placeholder: "Withdraw locked",
                    name: "is_withdraw_locked",
                    tooltip: "Are users stake locked or can they withdraw at any time (sacrificing rewards)",
                    type: "checkbox",
                    required: !0,
                    types: [a.W.NFT, a.W.Liquidity]
                }].filter(e => {
                    let {
                        types: t
                    } = e;
                    return t.includes(o)
                }),
                getNFTFormData = (e, t) => [{
                    label: "Contract address",
                    name: "contract",
                    type: "text",
                    tooltip: "The contract address of the required NFT",
                    placeholder: "Enter the NFT contract address",
                    required: !0
                }, {
                    label: "NFT name",
                    name: "name",
                    type: "text",
                    tooltip: "The name of the required NFT that will be displayed to the users",
                    placeholder: "Enter the required NFT name",
                    required: !0
                }, {
                    label: "Boost multilpier",
                    name: "multiplier",
                    type: "number",
                    placeholder: "0",
                    inset: e,
                    step: .1,
                    tooltip: "The multiplier used for calculating NFT boost. Supports 1 decimal place",
                    required: !0,
                    min: 1
                }, {
                    label: "First token ID to include",
                    name: "start_idx",
                    type: "number",
                    placeholder: "0",
                    tooltip: "First token ID to include",
                    step: 1,
                    required: !0,
                    min: 0
                }, {
                    label: "Last token ID to include",
                    name: "end_idx",
                    type: "number",
                    placeholder: "0",
                    tooltip: "Last token ID to include",
                    step: 1,
                    required: !0,
                    min: 0
                }, {
                    label: "NFT Boost status",
                    name: "active",
                    type: "checkbox",
                    required: !0,
                    placeholder: "NFT boost is ".concat(t ? "" : "not ", "activated"),
                    min: 1
                }],
                getNFTCustomisationFormData = () => [{
                    label: "Collection name",
                    name: "name",
                    type: "text",
                    tooltip: "The name of the staking pool that will be displayed to the users (collection/sub-collection name)",
                    placeholder: "Enter the collection name",
                    required: !0
                }, {
                    label: "Collection logo URL",
                    name: "logo",
                    type: "text",
                    tooltip: "The icon for the staking pool that will be displayed to the users (collection/sub-collection logo)",
                    placeholder: "Enter the collection logo URL",
                    required: !0
                }, {
                    label: "Drawer header logo URL",
                    name: "header_logo",
                    type: "text",
                    tooltip: "The image used for the staking drawer header for this pool",
                    placeholder: "Enter the header logo URL",
                    required: !0
                }, {
                    label: "First token ID to include",
                    name: "start_idx",
                    type: "number",
                    placeholder: "0",
                    tooltip: "First token ID to include in the collection (default 0 for entire collection)",
                    step: 1,
                    required: !0,
                    min: 0
                }, {
                    label: "Last token ID to include",
                    name: "end_idx",
                    type: "number",
                    placeholder: "0",
                    tooltip: "Last token ID to include in the collection (default total supply for the entire collection - note it does not include NFTs that are not already minted i.e max supply of contract)",
                    step: 1,
                    required: !0,
                    min: 0
                }, {
                    label: "Max per user",
                    name: "max_per_user",
                    type: "number",
                    tooltip: "The hardcap per user of the pool",
                    step: 1,
                    required: !0
                }, {
                    label: "Collection URL",
                    name: "collection_url",
                    type: "text",
                    tooltip: "A link to where users can aquire the required NFT",
                    placeholder: "Enter the collection URL",
                    required: !0
                }],
                validateInput = (e, t) => {
                    let s = {},
                        a = e.filter(e => {
                            let {
                                name: a,
                                label: r,
                                required: l
                            } = e;
                            return !(l && [null, void 0, ""].includes(t[a])) || (s[a] = r + " required", !1)
                        }).length === e.length;
                    return {
                        has_required_fields: a,
                        errors: s
                    }
                },
                l = {
                    [a.W.Compound]: "Token",
                    [a.W.Liquidity]: "Pair",
                    [a.W.Dynamic]: "Token"
                },
                n = {
                    [a.W.Compound]: "The contract address of the token to be used for staking",
                    [a.W.Liquidity]: "The pair address of the liquidity pool to be used for staking"
                }
        },
        32745: function (e, t, s) {
            s.d(t, {
                H: function () {
                    return formatLargeNumber
                },
                d: function () {
                    return formatBigNumber
                }
            });
            var a = s(35553);
            let formatLargeNumber = e => e >= 1e12 ? (e / 1e12).toFixed(1) + "T" : e >= 1e9 ? (e / 1e9).toFixed(1) + "B" : e >= 1e6 ? (e / 1e6).toFixed(1) + "M" : e >= 1e3 ? (e / 1e3).toFixed(1) + "K" : e.toFixed(0),
                formatBigNumber = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
                        r = Number((0, a.bM)(e, t));
                    return r >= 1e12 ? (r / 1e12).toFixed(s) + "T" : r >= 1e9 ? (r / 1e9).toFixed(s) + "B" : r >= 1e6 ? (r / 1e6).toFixed(s) + "M" : r >= 1e3 ? (r / 1e3).toFixed(s) + "K" : r.toFixed(s)
                }
        }
    }
]);