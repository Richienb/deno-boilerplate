import theModule from './main.ts';
import {assertEquals, assertThrows} from 'https://deno.land/std@0.113.0/testing/asserts.ts';

Deno.test({
  name: 'main',
  fn(): void {
    assertEquals(theModule('unicorns'), 'unicorns & rainbows');
    assertThrows(() => {
      theModule(123);
    }, TypeError, 'Expected a string, got number');
  },
});
