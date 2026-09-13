import test from 'node:test';
import assert from 'node:assert/strict';
import {journalOrder} from '../src/lib/journal-order.mjs';
test('mixed journal preserves every story and stays stable for a seed', () => {
 const input = Array.from({length:155},(_,i)=>i);
 const first = journalOrder(input, 42);
 assert.deepEqual([...first].sort((a,b)=>a-b), input);
 assert.deepEqual(journalOrder(input,42),first);
 assert.notDeepEqual(journalOrder(input,43),first);
 assert.deepEqual(input,Array.from({length:155},(_,i)=>i));
 assert.deepEqual(journalOrder([],1),[]);
});
