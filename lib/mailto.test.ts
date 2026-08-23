import assert from "node:assert/strict";
import test from "node:test";
import { composeMailto } from "./mailto.ts";

test("carries the fields into subject and body", () => {
  const href = composeMailto({
    to: "a@b.com",
    name: "Dwi Ramadhan",
    email: "dwi@perusahaan.co.id",
    message: "Halo, saya butuh landing page.",
  });
  assert.ok(href.startsWith("mailto:a%40b.com?"));
  assert.ok(href.includes(encodeURIComponent("Pesan dari Dwi Ramadhan")));
  assert.ok(href.includes(encodeURIComponent("Halo, saya butuh landing page.")));
  assert.ok(href.includes(encodeURIComponent("dwi@perusahaan.co.id")));
});

test("a newline in the name cannot forge a header", () => {
  const href = composeMailto({
    to: "a@b.com",
    name: "Eka\r\nBcc: leak@evil.test",
    email: "eka@x.id",
    message: "hai",
  });
  assert.ok(!href.includes("\r"));
  assert.ok(!href.includes("\n"));
  // The injected text survives as encoded body/subject content, not as a header.
  assert.ok(!/[?&]bcc=/i.test(href));
});
