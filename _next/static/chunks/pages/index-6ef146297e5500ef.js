(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(78621);
        },
      ]);
    },
    78621: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return pages;
          },
        });
      var r = a(85893),
        s = a(67294),
        l = a(62378),
        d = a(10721),
        n = a(41664),
        o = a.n(n),
        u = a(44304);
      let Banner = () =>
        u.UP && u.r2
          ? (0, r.jsx)("div", {
              className: "mb-10 border border-custom rounded",
                children: [
                  (0, r.jsx)("img", {
                    src: u.UP,
                    alt: u.pB,
                    className: "hidden md:inline w-full rounded",
                  }),
                  (0, r.jsx)("img", {
                    src: u.r2,
                    alt: u.pB,
                    className: "md:hidden w-full rounded",
                  }),
                ],
            })
          : null;
      var c = a(61267),
        i = a(72694),
        _ = a(2593),
        m = a(91328),
        x = a(32745),
        N = a(41421);
      let k = _.O$.from(0),
        useNFTAnalytics = () => {
          let e = (0, d.CG)((e) =>
            e.staking.pools.filter((e) => {
              let {
                type: t,
                reward_token: { address: a },
              } = e;
              return t === m.W.NFT && a === u.DEFAULT_TOKEN.address;
            })
          );
          return (0, s.useMemo)(() => {
            let {
                total_staked: t,
                max_stakeable: a,
                total_rewards_earned: r,
                user_stake: s,
              } = reduceNFTPools(e),
              l = t
                .mul(100)
                .div(a.eq(0) ? 1 : a)
                .toNumber();
            return [
              {
                text: ""
                  .concat((0, x.H)(t.toNumber()), " / ")
                  .concat((0, x.H)(a.toNumber())),
                title: "Total staked (".concat(l.toFixed(0), "%)"),
              },
              {
                text: ""
                  .concat((0, N.am)(r), " ")
                  .concat(u.DEFAULT_TOKEN.symbol),
                title: "Total rewards earned",
              },
              { text: (0, x.H)(s.toNumber()), title: "Your stake" },
            ];
          }, [e]);
        },
        reduceNFTPools = (e) =>
          e.reduce(
            (e, t) => ({
              total_staked: e.total_staked.add(t.total_staked || 0),
              max_stakeable: e.max_stakeable.add(t.hardcap || 0),
              total_rewards_earned: e.total_rewards_earned.add(
                _.O$.from(t.earned_reward || 0).add(t.claimed_reward || 0)
              ),
              user_stake: e.user_stake.add(t.user_stake || 0),
            }),
            {
              total_staked: k,
              max_stakeable: k,
              total_rewards_earned: k,
              user_stake: k,
            }
          ),
        NFTAnalytics = () => {
          let e = useNFTAnalytics();
          return (0, r.jsx)("div", {
            className:
              "bg-level-one rounded border border-custom space-y-4 lg:space-y-0 lg:flex lg:space-x-12 p-5",
            children: e.map((e) => {
              let { text: t, title: a } = e;
              return (0, r.jsx)(i.g, { title: a, children: t }, a);
            }),
          });
        };
      var b = a(88326),
        pages = () => {
          let [e, t] = (0, s.useState)((0, b.I9)()),
            a = (0, d.ZW)(),
            n = 1 === e;
          return (0, r.jsxs)(l.VY, {
            children: [
              (0, r.jsx)(l.h_, { title: "Staking" }),
              c.g6 &&
                (0, r.jsx)(l.rs, {
                  curr: e,
                  opts: c.zh,
                  setCurr: (e) => t(e),
                  className: "w-80 mb-8 mx-auto",
                }),
              (0, r.jsx)(Banner, {}),
              n ? (0, r.jsx)(NFTAnalytics, {}) : (0, r.jsx)(l.DB, {}),
              (0, r.jsx)(l.UE, { initial: a, is_nft: n }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(0, [4251, 4421, 2378, 9774, 2888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
