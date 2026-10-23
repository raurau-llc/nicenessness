import test from 'node:test';
import assert from 'node:assert/strict';
import {itemDisplayMeta} from '../src/lib/item-display-meta.mjs';

test('item metadata includes a present season', () => {
  const meta=itemDisplayMeta({model:'ROMEO',season:'SS26',number:'NN-2701Y17'});
  assert.equal(meta.identity,'ROMEO SS26');
  assert.equal(meta.title,'ROMEO SS26 — 歴史とのつながり');
  assert.equal(meta.eyebrow,'NICENESS / SS26');
  assert.equal(meta.numberLine,'NN-2701Y17 SS26');
  assert.doesNotMatch(Object.values(meta).join(' '),/undefined/);
});

test('item metadata omits an unconfirmed season', () => {
  const meta=itemDisplayMeta({model:'S.BAILEY',number:'NN-2402J18'});
  assert.equal(meta.identity,'S.BAILEY');
  assert.equal(meta.title,'S.BAILEY — 歴史とのつながり');
  assert.equal(meta.eyebrow,'NICENESS');
  assert.equal(meta.numberLine,'NN-2402J18');
  assert.doesNotMatch(Object.values(meta).join(' '),/undefined/);
});

test('story item link label has no trailing slash without a season', () => {
  const label=itemDisplayMeta({model:'S.BAILEY',number:'NN-2402J18'}).eyebrow;
  assert.equal(label,'NICENESS');
  assert.doesNotMatch(label,/\/$/);
});
