import theModule from "./mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

assertEquals(theModule('unicorns'), 'unicorns & rainbows')
