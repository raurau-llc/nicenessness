export function itemDisplayMeta(product) {
  const identity = [product.model, product.season].filter(Boolean).join(' ');
  return {
    identity,
    title: `${identity} — 歴史とのつながり`,
    description: `${identity}が参照した服・技法と、現代の形へ変えたところ。非公式ファンサイトによる紹介。`,
    eyebrow: product.season ? `NICENESS / ${product.season}` : 'NICENESS',
    numberLine: [product.number, product.season].filter(Boolean).join(' '),
  };
}
