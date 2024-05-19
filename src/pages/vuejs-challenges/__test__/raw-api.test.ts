import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import App from "../raw-api.vue"

describe("raw API", () => {
  it("should work", async () => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log)
    })
    mount(App)
    expect(JSON.stringify(result)).toBe(JSON.stringify([
      true,
      false,
    ]))
  })
})
