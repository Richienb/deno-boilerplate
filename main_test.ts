import theModule from './main.ts';
import {assertEquals} from 'https://deno.land/std@0.108.0/testing/asserts.ts';

assertEquals(theModule('unicorns'), 'unicorns & rainbows');
