import { describe, it, expect } from "vitest"

import AppRaw from "../dynamic-css.vue?raw" // 表示导入未经处理的vue文件，原始文件，即可以获取到实际代码 

describe("DomPortal", () => {
  it("render to body", () => {
    expect(AppRaw).toContain(atob("Y29sb3I6IHYtYmluZCh0aGVtZSk="))
  })
})
