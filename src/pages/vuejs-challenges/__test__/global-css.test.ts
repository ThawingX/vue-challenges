import { describe, it, expect } from "vitest"

import AppRaw from "../global-css.vue?raw"

describe("DomPortal", () => {
  it("render to body", () => {
    expect(AppRaw).toContain(atob("Omdsb2JhbChib2R5KQ=="))
  })
})
