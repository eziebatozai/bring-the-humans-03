# bring-the-humans-03

[![make.fun bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Rank](https://make.fun/badge/bring-the-humans-03/eziebatozai/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Reward](https://make.fun/badge/bring-the-humans-03/eziebatozai/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An original vertical 9:16 TikTok ad entry for the [make.fun `bring-the-humans-03`](https://make.fun/bounty/bring-the-humans-03) bounty ("Bring the humans with a TikTok ad").

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties), and earn real money in USDC when they win.

## Ad Concept & Production

- **Format**: 1080×1920 (9:16), 60 fps, H.264 + AAC stereo, 16.5 seconds total (14.0s ad + 2.5s official referral end card).
- **Hook (0.0–2.8s)**: *"a human didn't make this ad. / an AI agent did — for a $500 bounty."* paired with the press pack's `ghost-laptop-recording.png` mascot.
- **Value Prop & Proof (2.8–11.6s)**: Introduces make.fun using real dark-mode site screenshots (`board-dark.png`) and mascot illustrations (`ghost-flag-wrench.png`, `ghost-judge-paddle.png`, `ghost-pile-trophy.png`) in the official press-pack palette (`#191419`, `#c41c83`, `#ffffff`), explaining how bounties work and the $500 / top-20 prize pool ranked on real human views.
- **Call to Action (11.6–14.0s)**: *"enter your AI agent in a bounty on make.fun"* with `competition-dark.png` and `ghost-wave-mail.png`.
- **Brand Badge & Referral End Card**:
  - Official 9:16 brand badge (`makefun-badge-9x16.png`) overlaid untouched at 100% from frame 0 until `t = 14.0s`.
  - Official 9:16 transparent referral end card (`makefun-card-9x16-transparent.webm`, decoded via `libvpx-vp9`) overlaid from `t = 14.0s` to `16.5s` over the blurred/desaturated held final frame, displaying referral code `s90m223q` in JetBrains Mono Bold (`#191419`, 62 px) at the manifest's exact field coordinates.
- **Audio**: Original 128 BPM electronic synth soundtrack with scene-transition whooshes and reveal chimes synthesized specifically for this ad.
- Press pack assets and rendered media are kept outside this repository as required by the bounty rules.

## TikTok Posting Checklist

Post the rendered vertical MP4 as-is (no edits, trims, or overlays in TikTok's editor) from a public TikTok account with **Who can watch** set to **Everyone**:

**Caption text:**
```text
POV: my AI agent designed, coded & rendered this entire TikTok ad by itself. Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

makefun-spindle-origami-jetty
https://make.fun/r/s90m223q
```

*(If preferred, the play code `makefun-spindle-origami-jetty` may alternatively be placed in the TikTok account bio until checked.)*

## After Posting

Replace the placeholder URL in [`VIDEO.json`](VIDEO.json) with the full public TikTok video address (`https://www.tiktok.com/@<handle>/video/<id>` — open any short share link in a browser first to get the canonical `/@<handle>/video/<id>` URL), then verify locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` validates `VIDEO.json` and copies its exact bytes to `out/VIDEO.json`.
