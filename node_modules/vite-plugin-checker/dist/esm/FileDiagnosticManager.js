class FileDiagnosticManager {
  constructor() {
    this.diagnostics = [];
    this.initialized = false;
  }
  /**
   * Only used when initializing the manager
   */
  initWith(diagnostics) {
    if (this.initialized) {
      throw new Error("FileDiagnosticManager is already initialized");
    }
    this.diagnostics = [...diagnostics];
    this.initialized = true;
  }
  getDiagnostics(fileName) {
    if (fileName) {
      return this.diagnostics.filter((f) => f.id === fileName);
    }
    return this.diagnostics;
  }
  updateByFileId(fileId, next) {
    this.diagnostics = this.diagnostics.filter((d) => d.id !== fileId);
    if (next == null ? void 0 : next.length) {
      this.diagnostics.push(...next);
    }
  }
}
export {
  FileDiagnosticManager
};
//# sourceMappingURL=FileDiagnosticManager.js.map