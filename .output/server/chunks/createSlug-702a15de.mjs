function createSlug(str) {
  return str.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}

export { createSlug as c };
//# sourceMappingURL=createSlug-702a15de.mjs.map
