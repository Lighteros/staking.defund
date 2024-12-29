"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5362], {
        5362: function (e, t, s) {
            s.r(t), s.d(t, {
                default: function () {
                    return Staking_StakingDrawer
                }
            });
            var a = s(85893),
                l = s(67294),
                n = s(2593),
                r = s(10721),
                i = s(62378),
                d = s(42812),
                o = s(27484),
                c = s.n(o),
                m = s(68851),
                u = s(61267),
                x = s(41421),
                h = s(59850),
                v = s(91328),
                p = s(59860),
                g = s(85063),
                f = s(22920);
            let useStakingMethods = () => {
                let [e, t] = (0, l.useState)(!1), {
                    account: s
                } = (0, d.l)(), {
                    current_pool: a,
                    pools: i,
                    deposit_amount: o,
                    second_deposit_amount: c,
                    selected_ids: j,
                    withdraw_percent: N
                } = (0, r.CG)(e => e.staking), y = i.find(e => {
                    let {
                        id: t
                    } = e;
                    return t === a
                }), {
                    address: b,
                    type: w
                } = y, k = w === v.W.Compound, [T] = (0, p.C)(b, u.XH[y.type], !0), [C] = (0, p.C)(y.vault, h.R.Vault, !0), _ = k ? C : T, S = (0, r.TL)(), handleDeposit = async () => {
                    t(!0);
                    let [e, a] = (0, g.Fg)(y, o, c, j), l = a.slice(0, a.length - 1), r = a[a.length - 1];
                    try {
                        let t = n.O$.from(5e5);
                        await (0, x.n2)(_[e](...l, {
                            ...r,
                            gasLimit: t
                        }), "Transaction successfully complete"), S((0, m.nh)(null == y ? void 0 : y.id, s)), S((0, m.e4)("0")), S((0, m.Ge)("0"))
                    } catch (e) {
                        f.Am.error(e.reason || e.message)
                    }
                    t(!1)
                }, handleWithdraw = async () => {
                    t(!0);
                    let [e, a] = (0, g.eR)(y, j, Number(N));
                    try {
                        let t = n.O$.from(5e5);
                        await (0, x.n2)(_[e](...a, {
                            gasLimit: t
                        }), "Transaction successfully complete"), S((0, m.nh)(null == y ? void 0 : y.id, s)), S((0, m.hr)("Deposit"))
                    } catch (e) {
                        f.Am.error(e.reason || e.message)
                    }
                    t(!1)
                };
                return {
                    handleDeposit,
                    handleWithdraw,
                    loading: e
                }
            };
            var j = s(35553);
            let StandardDeposit = () => {
                    let {
                        account: e
                    } = (0, d.l)(), {
                        current_pool: t,
                        pools: s,
                        deposit_amount: l
                    } = (0, r.CG)(e => e.staking), o = s.find(e => {
                        let {
                            id: s
                        } = e;
                        return s === t
                    }), {
                        input_token: m,
                        type: u,
                        end_date: h,
                        address: p
                    } = o, g = (0, r.mM)(m.address), {
                        decimals: f,
                        address: N
                    } = m, y = 0 === Number((0, x.T7)(l || "0")), b = (0, j.vz)((0, x.T7)(l || "0"), f), {
                        handleDeposit: w,
                        loading: k
                    } = useStakingMethods(), {
                        approved: T,
                        handleApprove: C,
                        loading: _
                    } = (0, r.A$)(N, e, u === v.W.Compound ? o.vault : p, b.toString()), S = c()().isAfter(c()(h || new Date)), D = n.O$.from(b), F = D.gt(g), W = S || y || F;
                    return (0, a.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [(0, a.jsx)(i.zx, {
                            className: "flex-1",
                            loading: _,
                            disabled: _ || W || T,
                            onClick: C,
                            id: "enable-btn",
                            children: "1. Enable"
                        }), (0, a.jsx)(i.zx, {
                            className: "flex-1",
                            disabled: k || W || !T,
                            onClick: w,
                            loading: k,
                            id: "deposit-btn",
                            children: "2. Deposit"
                        })]
                    })
                },
                NFTDeposit = () => {
                    let {
                        account: e
                    } = (0, d.l)(), {
                        current_pool: t,
                        pools: s,
                        selected_ids: l
                    } = (0, r.CG)(e => e.staking), n = s.find(e => {
                        let {
                            id: s
                        } = e;
                        return s === t
                    }), {
                        input_token: o,
                        end_date: m,
                        address: u
                    } = n, {
                        address: x
                    } = o, {
                        handleDeposit: h,
                        loading: v
                    } = useStakingMethods(), {
                        approved: p,
                        handleApprove: g,
                        loading: f
                    } = (0, r.bv)(x, e, u), j = c()().isAfter(c()(m || new Date));
                    return (0, a.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [(0, a.jsx)(i.zx, {
                            className: "flex-1",
                            loading: f,
                            disabled: f || j || p,
                            onClick: g,
                            id: "enable-btn",
                            children: "1. Enable"
                        }), (0, a.jsx)(i.zx, {
                            className: "flex-1",
                            disabled: v || j || !p || 0 === l.length,
                            onClick: h,
                            loading: v,
                            id: "deposit-btn",
                            children: "2. Deposit"
                        })]
                    })
                },
                LiquidityDeposit = () => {
                    let {
                        account: e
                    } = (0, d.l)(), {
                        current_pool: t,
                        pools: s,
                        deposit_amount: l = "0",
                        second_deposit_amount: o = "0"
                    } = (0, r.CG)(e => e.staking), {
                        input_token: m,
                        second_input_token: h,
                        type: v,
                        end_date: p,
                        is_native: [g, f],
                        address: N
                    } = s.find(e => {
                        let {
                            id: s
                        } = e;
                        return s === t
                    }), [y, b] = (0, r.C)(N, u.XH[v], !0), w = 0 === Number(l), k = (0, j.vz)((0, x.T7)(l || "0"), m.decimals), T = (0, j.vz)((0, x.T7)(o || "0"), h.decimals), {
                        handleDeposit: C,
                        loading: _
                    } = useStakingMethods(), {
                        approved: S,
                        handleApprove: D,
                        loading: F
                    } = (0, r.A$)(m.address, e, b, k.toString()), {
                        approved: W,
                        handleApprove: L,
                        loading: z
                    } = (0, r.A$)(h.address, e, b, k.toString()), M = (0, r.mM)(m.address, g && 0 === f), I = (0, r.mM)(h.address, g && 1 === f), A = c()().isAfter(c()(p || new Date)), G = n.O$.from(k).gt(M) || n.O$.from(T).gt(I), q = [
                        [S, m, F, D],
                        [W, h, z, L]
                    ].filter((e, t) => !g || g && f !== t);
                    return (0, a.jsx)("div", {
                        className: "flex space-x-2",
                        children: q.filter(e => {
                            let [t] = e;
                            return t
                        }).length === q.length ? (0, a.jsx)(i.zx, {
                            className: "flex-1",
                            disabled: _ || A || w || G,
                            onClick: C,
                            loading: _,
                            id: "current-version",
                            children: "Deposit"
                        }) : q.map((e, t) => {
                            let [s, l, n, r] = e;
                            return (0, a.jsxs)(i.zx, {
                                className: "flex-1",
                                loading: n,
                                disabled: n || s,
                                onClick: r,
                                children: [q.length > 1 && "".concat(t + 1, ". "), "Enable ", l.symbol]
                            }, "".concat(l.symbol, "-").concat(t))
                        })
                    })
                };
            var N = s(75605);
            let Message = e => {
                    let {
                        message: t,
                        sub_message: s,
                        handleClick: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(N.ZT, {
                            size: "md",
                            allBold: !0,
                            children: t
                        }), (0, a.jsx)(N.ZT, {
                            variant: "secondary",
                            className: "mt-2",
                            children: s
                        }), (0, a.jsx)(N.zx, {
                            onClick: l,
                            className: "w-full mt-5",
                            children: "Continue"
                        })]
                    })
                },
                Deposit = () => {
                    let {
                        current_pool: e,
                        pools: t
                    } = (0, r.CG)(e => e.staking), {
                        type: s,
                        has_stake: n
                    } = t.find(t => {
                        let {
                            id: s
                        } = t;
                        return s === e
                    }), [i, d] = (0, l.useState)(!!n);
                    return (0, a.jsx)(a.Fragment, {
                        children: i ? (0, a.jsx)(Message, {
                            message: "You are already staking in this pool.",
                            sub_message: "Staking more in this pool will increase your rewards but will also extend the lock end date.",
                            handleClick: () => d(!1)
                        }) : (0, a.jsx)(a.Fragment, {
                            children: (e => {
                                switch (e) {
                                    case v.W.NFT:
                                        return (0, a.jsx)(NFTDeposit, {});
                                    case v.W.Liquidity:
                                        return (0, a.jsx)(LiquidityDeposit, {});
                                    default:
                                        return (0, a.jsx)(StandardDeposit, {})
                                }
                            })(s)
                        })
                    })
                },
                y = {
                    [v.W.Dynamic]: "claim",
                    [v.W.Liquidity]: "claim",
                    [v.W.NFT]: "claimAndRestake"
                },
                Withdraw = () => {
                    let [e, t] = (0, l.useState)(!1), {
                        account: s
                    } = (0, d.l)(), o = (0, r.TL)(), {
                        current_pool: h,
                        pools: p,
                        selected_ids: g
                    } = (0, r.CG)(e => e.staking), {
                        id: f,
                        user_stake: j,
                        type: N,
                        can_claim: b,
                        contract_idx: w,
                        last_user_deposit: k,
                        lock_period: T,
                        address: C,
                        is_withdraw_locked: _
                    } = p.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === h
                    }), [S] = (0, r.C)(C, u.XH[N], !0), {
                        handleWithdraw: D,
                        loading: F
                    } = useStakingMethods(), handleClaim = async () => {
                        t(!0), await (0, x.n2)(S[y[N]](w), "Successfully claimed rewards from pool", async () => {
                            o((0, m.nh)(f, s))
                        }), t(!1)
                    }, W = v.W.Dynamic === N, L = v.W.NFT === N, z = v.W.Liquidity === N, M = L && 0 === g.length, I = !L && n.O$.from(j).eq(0), A = c()().subtract(parseInt(T), "days").isAfter(c()(k)), G = [v.W.NFT, v.W.Liquidity, v.W.Dynamic].includes(N), q = I || M || [v.W.Liquidity].includes(N) && _ && !A || W && !A;
                    return (0, a.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [G && (0, a.jsxs)(i.zx, {
                            className: "flex-1",
                            loading: e,
                            disabled: e || !(b || z && _ || W),
                            onClick: handleClaim,
                            children: ["Claim", L && " & relock"]
                        }), (0, a.jsx)(i.zx, {
                            className: "flex-1",
                            disabled: F || q,
                            onClick: D,
                            loading: F,
                            id: "withdraw-btn",
                            children: "Withdraw"
                        })]
                    })
                },
                Bounty = () => {
                    let [e, t] = (0, l.useState)(!1), {
                        account: s
                    } = (0, d.l)(), {
                        current_pool: n,
                        pools: o
                    } = (0, r.CG)(e => e.staking), c = (0, r.TL)(), {
                        contract_idx: u,
                        vault: v,
                        id: p
                    } = o.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === n
                    }), [g] = (0, r.C)(v, h.R.Vault, !0), handleClaim = async () => {
                        let e = await g.estimateGas.harvest(u, {
                            gasLimit: "5000000"
                        });
                        t(!0);
                        try {
                            await (0, x.n2)(g.harvest(u, {
                                gasLimit: e.mul(12).div(10)
                            }), "Successfully claimed bounty from pool", async () => {
                                c((0, m.nh)(p, s))
                            }), t(!1)
                        } catch (e) {
                            f.Am.error(e.reason || e.message), t(!1)
                        }
                    };
                    return (0, a.jsx)(i.zx, {
                        className: "w-full",
                        disabled: e,
                        onClick: handleClaim,
                        loading: e,
                        id: "claim-bounty-btn",
                        children: (0, a.jsx)("strong", {
                            children: "Claim bounty"
                        })
                    })
                },
                render = e => {
                    switch (e) {
                        case "Bounty":
                            return (0, a.jsx)(Bounty, {});
                        case "Withdraw":
                            return (0, a.jsx)(Withdraw, {});
                        default:
                            return (0, a.jsx)(Deposit, {})
                    }
                },
                Footer = () => {
                    let {
                        connect: e,
                        account: t
                    } = (0, d.l)(), {
                        modal_state: s
                    } = (0, r.CG)(e => e.staking);
                    return (0, a.jsx)("div", {
                        className: "w-full bg-level-two p-4 absolute bottom-0",
                        children: t ? render(s) : (0, a.jsx)(i.zx, {
                            className: "w-full",
                            onClick: () => e(void 0),
                            children: "Connect wallet"
                        })
                    })
                };
            var b = s(93515),
                w = s(58974),
                k = s(41664),
                T = s.n(k);
            let NoNFTS = e => {
                    let {
                        url: t = "",
                        text: s,
                        className: l = ""
                    } = e, {
                        connect: n
                    } = (0, d.l)();
                    return (0, a.jsx)("div", {
                        className: "w-full flex items-center justify-center text-center p-5 ".concat(l),
                        children: (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("img", {
                                src: "/icons/no-nfts.svg",
                                className: "mx-auto my-8",
                                alt: "Staked all NFTs"
                            }), (0, a.jsx)("h3", {
                                className: "text-lg text-primary my-8",
                                children: (0, a.jsx)("strong", {
                                    children: s
                                })
                            }), (0, a.jsx)(T(), {
                                href: t,
                                target: "_blank",
                                rel: "noopener,noreferrer",
                                children: (0, a.jsx)(i.zx, {
                                    className: "w-full",
                                    children: "Get NFTs"
                                })
                            }), (0, a.jsx)("p", {
                                className: "my-8 text-secondary underline cursor-pointer",
                                onClick: () => n(void 0),
                                children: "Change wallet"
                            })]
                        })
                    })
                },
                InputItem = e => {
                    let {
                        nft: {
                            id: t,
                            data: s
                        },
                        selected_ids: n,
                        max_per_user: i,
                        num_staked: d,
                        available: o
                    } = e, [c, u] = (0, l.useState)(!0), x = (0, l.useMemo)(() => n.includes(t), [t, n]), h = (0, r.TL)();
                    return (0, a.jsxs)("div", {
                        className: "text-left",
                        id: "NFT selector",
                        children: [(0, a.jsxs)("div", {
                            className: "relative rounded cursor-pointer ".concat(x ? "border border-accent" : ""),
                            onClick: () => {
                                if (n.includes(t)) {
                                    h((0, m.oT)(n.filter(e => e !== t)));
                                    return
                                }
                                o && d + n.length >= i || h((0, m.oT)([...n, t]))
                            },
                            children: [(0, a.jsx)("img", {
                                src: s,
                                alt: t.toString(),
                                className: "rounded w-full bg-main aspect-square ".concat(c ? "animate-pulse" : ""),
                                onLoad: () => u(!1)
                            }), x && (0, a.jsx)("div", {
                                className: "absolute top-2 left-2 border border-custom rounded",
                                children: (0, a.jsx)(w.J, {
                                    className: "text-accent"
                                })
                            })]
                        }), (0, a.jsxs)("p", {
                            className: "text-secondary",
                            children: ["#", t]
                        })]
                    })
                },
                NFTSelect = e => {
                    let {
                        pool: t,
                        available: s = !0
                    } = e, {
                        selected_ids: l
                    } = (0, r.CG)(e => e.staking), n = t[s ? "available_tokens" : "staked_tokens"];
                    return n.length > 0 ? (0, a.jsx)("div", {
                        className: "grid grid-cols-2 gap-2 max-h-72 overflow-scroll",
                        children: n.map(e => (0, a.jsx)(InputItem, {
                            nft: e,
                            selected_ids: l,
                            max_per_user: t.max_per_user,
                            num_staked: t.staked_tokens.length,
                            available: s
                        }, "nft-input-".concat(e.id)))
                    }) : (0, a.jsx)(NoNFTS, {
                        text: "You are staking all of your available NFTs",
                        url: t.collection_url
                    })
                };
            var C = s(44304);
            let {
                symbol: _,
                decimals: S
            } = C.DEFAULT_TOKEN, NumberInput = e => {
                let {
                    pool: t,
                    reserves: s
                } = e, [i, d] = (0, l.useState)(!1), {
                    loading: o,
                    deposit_amount: c
                } = (0, r.CG)(e => e.staking), u = (0, r.TL)(), {
                    input_token: h,
                    is_native: p = [!1, 0]
                } = t, g = (0, r.mM)(h.address, p[0] && 0 === p[1]), {
                    hardcap: f,
                    total_staked: y
                } = t, {
                    symbol: b = _,
                    decimals: w = S
                } = (null == t ? void 0 : t.input_token) || {}, setSecondDeposit = e => {
                    var a;
                    let l = (0, j.vz)(e || "0", h.decimals).mul(s.reserve1).div(s.reserve0.eq(0) ? 1 : s.reserve0);
                    u((0, m.Ge)((0, j.bM)(l, (null === (a = t.second_input_token) || void 0 === a ? void 0 : a.decimals) || 18)))
                }, k = t.type === v.W.Liquidity, T = (0, j.vz)(c || "0", h.decimals), C = T.gt(g);
                return (0, a.jsxs)("div", {
                    className: "text-left",
                    children: [(0, a.jsx)("div", {
                        className: "w-full",
                        children: (0, a.jsx)(N.II, {
                            loading: o,
                            err_border: C,
                            value: c,
                            onChange: e => {
                                let t = e.target.value;
                                u((0, m.e4)(t.toString())), k && setSecondDeposit(t.toString())
                            },
                            surface: "zero",
                            handleMaxClick: () => {
                                let e = n.O$.from(f).sub(y),
                                    t = k ? g : n.O$.from(g).gt(e) ? e : g,
                                    s = (0, j.vz)((0, x.T7)((0, x.am)(t, h.decimals)), h.decimals).toString(),
                                    a = (0, x.Ff)(s, t.toString(), h.decimals);
                                a = 0 > Number(a) ? "0" : a, u((0, m.e4)(a)), k && setSecondDeposit(a)
                            },
                            unit: b,
                            type: "number",
                            is_initialized: i,
                            onFocus: () => d(!0)
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center mt-4 text-sm",
                        children: [(0, a.jsx)("div", {
                            className: "flex-1 text-sm text-secondary",
                            children: "Available to stake"
                        }), (0, a.jsx)("strong", {
                            className: "".concat(C ? "text-primary" : ""),
                            children: "".concat((0, x.am)(g, w), " ").concat(b)
                        })]
                    })]
                })
            }, {
                symbol: D,
                decimals: F
            } = C.DEFAULT_TOKEN, SecondNumberInput = e => {
                let {
                    pool: t,
                    reserves: s
                } = e, {
                    loading: n,
                    second_deposit_amount: i
                } = (0, r.CG)(e => e.staking), [d, o] = (0, l.useState)(!1), c = (0, r.TL)(), u = (0, r.mM)(t.second_input_token.address, t.is_native[0] && 1 === t.is_native[1]), {
                    symbol: h = D,
                    decimals: v = F
                } = (null == t ? void 0 : t.second_input_token) || {}, setFirstDepositAmount = e => {
                    let a = s.reserve1.eq(0),
                        l = (0, j.vz)(e || "0", v).mul(s.reserve0).div(a ? 1 : s.reserve1);
                    c((0, m.e4)((0, j.bM)(l, t.input_token.decimals)))
                }, p = (0, j.vz)((0, x.T7)(i || "0"), v), g = p.gt(u);
                return (0, a.jsxs)("div", {
                    className: "text-left mt-4",
                    children: [(0, a.jsx)("div", {
                        className: "w-full",
                        children: (0, a.jsx)(N.II, {
                            surface: "zero",
                            loading: n,
                            err_border: g,
                            value: i,
                            onChange: e => {
                                let t = e.target.value;
                                c((0, m.Ge)(t.toString())), setFirstDepositAmount(t.toString())
                            },
                            handleMaxClick: () => {
                                let e = (0, j.vz)((0, x.T7)((0, x.am)(u, v)), v).toString(),
                                    t = (0, x.Ff)(e, u);
                                c((0, m.Ge)(t)), setFirstDepositAmount(t)
                            },
                            unit: h,
                            type: "number",
                            onFocus: () => o(!0),
                            is_initialized: d
                        })
                    }), (0, a.jsxs)("div", {
                        className: "flex items-center mt-4 text-sm",
                        children: [(0, a.jsx)("div", {
                            className: "flex-1 text-sm text-secondary",
                            children: "Available to stake"
                        }), (0, a.jsx)("strong", {
                            className: "".concat(g ? "text-primary" : ""),
                            children: "".concat((0, x.am)(u, v), " ").concat(h)
                        })]
                    })]
                })
            }, Input = e => {
                let {
                    pool: t
                } = e;
                if (t.type === v.W.NFT) return (0, a.jsx)(NFTSelect, {
                    pool: t
                });
                let s = (0, b.m)(t.pair);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(NumberInput, {
                        pool: t,
                        reserves: s
                    }), t.type === v.W.Liquidity && (0, a.jsx)(SecondNumberInput, {
                        pool: t,
                        reserves: s
                    })]
                })
            };
            var W = s(32790),
                L = s(73628),
                StakingDrawer_ModalHeader = () => {
                    let e = (0, r.TL)(),
                        {
                            current_pool: t,
                            pools: s
                        } = (0, r.CG)(e => e.staking),
                        l = s.find(e => {
                            let {
                                id: s
                            } = e;
                            return s === t
                        }),
                        n = l.type === v.W.NFT;
                    return (0, a.jsxs)("div", {
                        className: "h-40 relative overflow-hidden ".concat(n ? "" : "bg-staking-header"),
                        children: [(0, a.jsx)("button", {
                            "data-testid": "modal-header-btn",
                            className: "absolute top-4 left-4 z-50",
                            onClick: () => {
                                e((0, m.hr)("Deposit")), e((0, m.q5)(!1))
                            },
                            children: (0, a.jsx)(L.X1, {})
                        }), !n && (0, a.jsx)(W.J, {
                            pool: l,
                            className: "absolute left-4 bottom-4"
                        }), n && (0, a.jsx)("h3", {
                            className: "absolute left-4 bottom-4 text-2xl z-50",
                            children: (0, a.jsx)("strong", {
                                children: l.name
                            })
                        }), n && (0, a.jsx)("img", {
                            alt: l.name,
                            src: l.header_logo,
                            className: "w-full absolute"
                        })]
                    })
                },
                z = s(59927),
                M = s(88326);
            let TextItem = e => {
                let {
                    text: t,
                    title: s,
                    info: l,
                    checked: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex my-2",
                    children: [(0, a.jsx)("div", {
                        className: "flex-1 text-secondary",
                        children: l ? (0, a.jsx)(i.XU, {
                            info: l,
                            text: s
                        }) : s
                    }), (0, a.jsx)("div", {
                        className: "flex items-center space-x-2 ".concat(n ? "text-success" : ""),
                        children: (0, a.jsx)("strong", {
                            children: t
                        })
                    })]
                })
            };
            var StakingDrawer_SummaryText = e => {
                    let {
                        deposit_amount: t,
                        withdraw_amount: s
                    } = e, {
                        current_pool: l,
                        pools: d,
                        modal_state: o,
                        withdraw_percent: m
                    } = (0, r.CG)(e => e.staking), u = d.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === l
                    }), {
                        id: h,
                        user_stake: p = "0",
                        earned_reward: f = "0",
                        has_stake: N,
                        reward_rate: y = "0",
                        input_token: b,
                        reward_token: w,
                        type: k,
                        is_withdraw_locked: T,
                        last_user_deposit: C,
                        lock_period: _
                    } = u || {}, S = n.O$.from((0, j.vz)((0, x.T7)(t || "0"), (null == b ? void 0 : b.decimals) || 18)).add(p), D = k === v.W.Compound ? (100 * (0, M.WZ)(parseFloat(y) / 100, 365)).toFixed(2) + "%" : y, F = k === v.W.Compound, W = k === v.W.NFT, L = k === v.W.Liquidity, I = k === v.W.Dynamic, A = c()().isAfter(c()(C).add(parseInt(_), "days")), G = L ? m : 100, {
                        boost: q,
                        has_boost: E
                    } = (0, g.xS)(u);
                    return (0, a.jsxs)(a.Fragment, {
                        children: ["Deposit" === o && (0, a.jsxs)("div", {
                            className: "my-8",
                            children: [N && W && (0, a.jsx)(TextItem, {
                                title: "Your stake",
                                text: "".concat(p, " / ").concat(u.max_per_user)
                            }), (0, a.jsx)(TextItem, {
                                title: "Lock period",
                                text: _ + " days"
                            }), (0, a.jsx)(TextItem, {
                                title: W ? "Daily reward per NFT" : "Reward",
                                text: W ? "".concat((0, x.am)(y), " ").concat(u.reward_token.symbol) : D,
                                info: I ? "Annual percentage yield (APY). The percent will change depending on a total amount staked, but rewards can be claimed any time." : void 0
                            }), !W && (0, a.jsxs)("div", {
                                className: "flex my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1 text-secondary",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-center flex-wrap space-x-2",
                                        children: [(0, a.jsx)("p", {
                                            children: "NFT boost"
                                        }), (0, a.jsx)(z.P, {
                                            id: h,
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
                                }), (0, a.jsx)("div", {
                                    className: "flex items-center space-x-2 ".concat(E ? "text-success" : ""),
                                    children: (0, a.jsxs)("strong", {
                                        children: ["+", E ? q : 0, "%"]
                                    })
                                })]
                            }), N && !W && (0, a.jsx)(TextItem, {
                                title: "Stake after deposit",
                                text: "".concat((0, x.am)(S.add(F ? f : 0), null == b ? void 0 : b.decimals), " ").concat(null == b ? void 0 : b.symbol)
                            }), "" !== C && (0, a.jsx)(TextItem, {
                                title: "Current lock end date",
                                text: C ? c()(C).add(parseInt(_), "days").format("HH:mm MMM DD, YYYY") : "None",
                                info: "You can withdraw the deposited amount and rewards after the current lock date has expired."
                            }), "" !== _ && (0, a.jsx)(TextItem, {
                                title: (N ? "New l" : "L") + "ock end date",
                                text: c()().add(Number(_), "days").format("HH:mm MMM DD, YYYY"),
                                info: "The lock period will be reset when you deposit additional tokens to this pool. This will become the new lock period."
                            })]
                        }), "Withdraw" === o && (0, a.jsxs)("div", {
                            className: "my-4",
                            children: [!W && (0, a.jsxs)("div", {
                                className: "flex my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, a.jsx)("p", {
                                        className: "text-secondary",
                                        children: "Withdraw amount"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "text-right",
                                    children: [(0, a.jsx)("p", {
                                        children: (0, a.jsxs)("strong", {
                                            children: [(0, x.am)(s.mul(G).div(100), null == b ? void 0 : b.decimals), " ", null == b ? void 0 : b.symbol]
                                        })
                                    }), L && (0, a.jsx)("p", {
                                        children: (0, a.jsxs)("strong", {
                                            children: [(0, x.am)(n.O$.from(u.second_user_stake).mul(G).div(100), null == u ? void 0 : u.second_input_token.decimals), " ", null == u ? void 0 : u.second_input_token.symbol]
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1",
                                    children: (0, a.jsx)("p", {
                                        className: "text-secondary",
                                        children: "Earned reward"
                                    })
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)("p", {
                                        children: (0, a.jsxs)("strong", {
                                            children: [(0, x.am)(n.O$.from(f).mul(G).div(100), null == w ? void 0 : w.decimals), " ", null == w ? void 0 : w.symbol]
                                        })
                                    })
                                })]
                            }), !T && !A && (0, a.jsx)(i.v3, {
                                children: "Withdrawing before the lock end date will yield no rewards."
                            })]
                        })]
                    })
                },
                I = s(22425),
                StakingDrawer_Switch = e => {
                    let {
                        bounty: t
                    } = e, s = (0, r.TL)(), {
                        current_pool: l,
                        pools: n,
                        modal_state: i
                    } = (0, r.CG)(e => e.staking), d = n.find(e => {
                        let {
                            id: t
                        } = e;
                        return t === l
                    }), o = d.has_stake && (d.can_claim || [v.W.Liquidity, v.W.Dynamic].includes(d.type) || !d.is_withdraw_locked);
                    return (0, a.jsxs)("div", {
                        className: "bg-level-one flex rounded cursor-pointer text-sm ".concat("Deposit" === i && "mb-4" || ""),
                        children: [(0, a.jsx)("div", {
                            "data-testid": "deposit-div",
                            onClick: () => s((0, m.hr)("Deposit")),
                            className: "flex-1 px-4 py-2 rounded border-2 border-level-one ".concat("Deposit" === i ? "bg-level-two" : "text-secondary bg-level-one"),
                            children: "Deposit" === i ? (0, a.jsx)("strong", {
                                children: "Deposit"
                            }) : "Deposit"
                        }), d.type === v.W.Compound && t.gt(0) && (0, a.jsx)("div", {
                            "data-testid": "bounty-div",
                            onClick: () => s((0, m.hr)("Bounty")),
                            className: "flex-1 px-4 py-2 rounded border-2 border-level-one ".concat("Bounty" === i ? "bg-level-two" : "text-secondary bg-level-one"),
                            children: "Bounty" === i ? (0, a.jsx)("strong", {
                                children: "Bounty"
                            }) : "Bounty"
                        }), (0, a.jsx)("div", {
                            "data-testid": "withdraw-div",
                            onClick: () => o && s((0, m.hr)("Withdraw")),
                            className: "flex-1 px-4 py-2 rounded border-2 border-level-one ".concat("Withdraw" === i ? "bg-level-two" : "text-secondary bg-level-one"),
                            children: (0, a.jsx)(I.u, {
                                text: "You can withdraw the deposited amount and rewards after the lock date has expired.",
                                active: !o,
                                children: (0, a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [!o && (0, a.jsx)("svg", {
                                        "data-testid": "svg",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5 pr-1",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: (0, a.jsx)("path", {
                                            fillRule: "evenodd",
                                            d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                                            clipRule: "evenodd"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "flex-1",
                                        children: "Withdraw" === i ? (0, a.jsx)("strong", {
                                            children: "Withdraw"
                                        }) : "Withdraw"
                                    })]
                                })
                            })
                        })]
                    })
                },
                A = s(17106);
            let G = function (e) {
                    e = null == e ? void 0 : e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, s, a) {
                        return t + t + s + s + a + a
                    });
                    let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? {
                        r: parseInt(t[1], 16),
                        g: parseInt(t[2], 16),
                        b: parseInt(t[3], 16)
                    } : null
                }(C.hr),
                DrawerContainer = e => {
                    let {
                        children: t
                    } = e, [s, n] = (0, l.useState)(!1), i = (0, r.TL)(), {
                        staking_modal_open: d
                    } = (0, r.CG)(e => e.staking);
                    return (0, a.jsx)(A.u, {
                        "data-testid": "transition",
                        show: d,
                        enter: "transition-opacity duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "transition-opacity duration-300",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        className: "min-w-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none text-white overflow-auto",
                        style: {
                            backgroundColor: "rgb(".concat(G.r, ", ").concat(G.g, ", ").concat(G.b, ", 0.8)")
                        },
                        onMouseDown: () => {
                            s || (i((0, m.q5)(!1)), setTimeout(() => i((0, m.hr)("Deposit")), 300))
                        },
                        children: (0, a.jsx)(A.u.Child, {
                            "data-testid": "transition-child",
                            className: "relative text-primary w-full max-w-screen sm:max-w-sm relative ml-auto my-auto shadow-lg bg-dcb min-h-screen border-l-2 border-custom bg-level-one",
                            enter: "transition ease-in-out duration-300 transform",
                            enterFrom: "translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "transition ease-in-out duration-300 transform",
                            leaveFrom: "translate-x-0",
                            leaveTo: "translate-x-full",
                            onMouseEnter: () => n(!0),
                            onMouseLeave: () => n(!1),
                            id: "staking-modal",
                            children: t
                        })
                    })
                };
            var q = s(94398);
            let Slider = e => {
                let {
                    className: t,
                    label: s,
                    max: l,
                    min: n = 0,
                    step: r = 1,
                    onChange: i,
                    value: d,
                    is_percentage: o
                } = e;
                return (0, a.jsxs)("div", {
                    className: "".concat(t || ""),
                    children: [(0, a.jsx)("label", {
                        htmlFor: "default-range",
                        className: "block mb-2 text-sm font-medium text-secondary",
                        children: s
                    }), (0, a.jsxs)("div", {
                        className: "bg-level-two rounded-lg flex space-x-4 items-center",
                        children: [(0, a.jsx)(q.Range, {
                            step: r,
                            min: n,
                            max: l,
                            values: [Number(d)],
                            onChange: e => i(e[0]),
                            renderTrack: e => {
                                let {
                                    props: t,
                                    children: s
                                } = e;
                                return (0, a.jsx)("div", {
                                    ...t,
                                    style: {
                                        ...t.style,
                                        height: "0.5rem",
                                        width: "100%",
                                        backgroundColor: C.hr,
                                        borderRadius: C.GN
                                    },
                                    children: s
                                })
                            },
                            renderThumb: e => {
                                let {
                                    props: t
                                } = e;
                                return (0, a.jsx)("div", {
                                    ...t,
                                    style: {
                                        ...t.style,
                                        height: "1rem",
                                        width: "1rem",
                                        borderRadius: C.GN,
                                        backgroundColor: C.lS
                                    }
                                })
                            }
                        }), o && (0, a.jsxs)("div", {
                            className: "w-12",
                            id: "slider",
                            children: [d, "%"]
                        })]
                    })]
                })
            };
            var E = s(30765);
            let isNFTAndNoNFTs = e => {
                    let {
                        type: t,
                        available_tokens: s,
                        staked_tokens: a
                    } = e;
                    return t === v.W.NFT && 0 === s.length && 0 === a.length
                },
                StakingDrawer_Bounty = e => {
                    let {
                        bounty: t,
                        price: s
                    } = e, l = t.mul(s).div(BigInt(10 ** C.DEFAULT_TOKEN.decimals).toString());
                    return (0, a.jsxs)("div", {
                        className: "pt-4 px-2",
                        children: [(0, a.jsxs)("div", {
                            className: "px-4 py-6 text-center bg-level-three rounded border border-custom",
                            children: [(0, a.jsxs)("h3", {
                                className: "text-primary text-2xl",
                                "data-testid": "bounty-value",
                                children: [(0, x.am)(t, C.DEFAULT_TOKEN.decimals, 6), " ", C.DEFAULT_TOKEN.symbol]
                            }), (0, a.jsxs)("p", {
                                className: "text-secondary",
                                children: ["~ ", (0, x.am)(l, 18, 6), " USD"]
                            })]
                        }), (0, a.jsx)("p", {
                            className: "text-left text-sm text-secondary mt-4",
                            children: "Claim bounty straight to your wallet and compound staking rewards for everyone in this pool."
                        })]
                    })
                };
            var Staking_StakingDrawer = () => {
                let [e, t] = (0, l.useState)(n.O$.from(0)), [s, i] = (0, l.useState)(!0), d = (0, r.pQ)(), o = (0, r.CG)(e => {
                    var t;
                    return null == e ? void 0 : null === (t = e.staking) || void 0 === t ? void 0 : t.deposit_amount
                }) || "0", {
                    current_pool: c,
                    pools: x,
                    modal_state: p,
                    withdraw_percent: g
                } = (0, r.CG)(e => e.staking), f = (0, r.TL)(), j = x.find(e => {
                    let {
                        id: t
                    } = e;
                    return t === c
                }), {
                    vault: N,
                    contract_idx: y
                } = x.find(e => {
                    let {
                        id: t
                    } = e;
                    return t === c
                }) || {}, b = (0, E.ti)(N, h.R.Vault), w = n.O$.from((null == j ? void 0 : j.user_stake) || 0), k = (null == j ? void 0 : j.type) === v.W.Liquidity, T = (null == j ? void 0 : j.type) === v.W.NFT, C = (0, l.useMemo)(() => isNFTAndNoNFTs(j || {}), [j]), onSliderChange = e => {
                    f((0, m.tV)(e))
                };
                return (0, l.useEffect)(() => {
                    if (u.qx || !b) return;
                    s && b && (i(!1), b.calculateHarvestDcbRewards(y).then(e => t(e)));
                    let e = setInterval(() => b.calculateHarvestDcbRewards(y).then(e => t(e)), 5e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [b, y]), (0, a.jsx)(DrawerContainer, {
                    children: (0, a.jsxs)("div", {
                        className: "pb-12",
                        children: [(0, a.jsx)(StakingDrawer_ModalHeader, {}), C ? (0, a.jsx)(NoNFTS, {
                            text: "Looks like you don’t have any compatible NFTs to stake in this pool",
                            className: "h-[32rem] p-10",
                            url: j.collection_url
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)("div", {
                                className: "p-4",
                                children: [(0, a.jsxs)("div", {
                                    className: "bg-level-two p-4 text-center rounded",
                                    children: [(0, a.jsx)(StakingDrawer_Switch, {
                                        bounty: e
                                    }), "Deposit" === p && (0, a.jsx)(Input, {
                                        pool: j
                                    }) || "Withdraw" === p && T && (0, a.jsx)("div", {
                                        className: "mt-4",
                                        children: (0, a.jsx)(NFTSelect, {
                                            pool: j,
                                            available: !1
                                        })
                                    }), "Withdraw" === p && k && (0, a.jsx)(Slider, {
                                        className: "mt-4",
                                        onChange: e => onSliderChange(e),
                                        max: 100,
                                        min: 5,
                                        step: 5,
                                        value: g.toString(),
                                        is_percentage: !0
                                    }), "Bounty" === p && (0, a.jsx)(StakingDrawer_Bounty, {
                                        bounty: e,
                                        price: d
                                    })]
                                }), (0, a.jsx)(StakingDrawer_SummaryText, {
                                    deposit_amount: o,
                                    withdraw_amount: w
                                })]
                            }), (0, a.jsx)(Footer, {})]
                        })]
                    })
                })
            }
        }
    }
]);