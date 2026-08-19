/* ===== IVN TECH – localStorage CRUD Store ===== */

const Store = {
  _get(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; }
    catch { return []; }
  },
  _set(key, data) { localStorage.setItem(key, JSON.stringify(data)); },
  _id() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); },

  // --- Customers ---
  getCustomers() { return this._get("ivn_customers"); },
  getCustomer(id) { return this.getCustomers().find(c => c.id === id); },
  addCustomer(c) {
    const all = this.getCustomers();
    const item = { ...c, id: this._id(), createdAt: new Date().toISOString() };
    all.push(item); this._set("ivn_customers", all); return item;
  },
  updateCustomer(id, data) {
    const all = this.getCustomers();
    const i = all.findIndex(c => c.id === id);
    if (i >= 0) { all[i] = { ...all[i], ...data }; this._set("ivn_customers", all); }
  },
  deleteCustomer(id) { this._set("ivn_customers", this.getCustomers().filter(c => c.id !== id)); },

  // --- Quotations ---
  getQuotations() { return this._get("ivn_quotations"); },
  getQuotation(id) { return this.getQuotations().find(q => q.id === id); },
  addQuotation(q) {
    const all = this.getQuotations();
    const item = { ...q, id: this._id(), createdAt: new Date().toISOString() };
    all.push(item); this._set("ivn_quotations", all); return item;
  },
  updateQuotation(id, data) {
    const all = this.getQuotations();
    const i = all.findIndex(q => q.id === id);
    if (i >= 0) { all[i] = { ...all[i], ...data }; this._set("ivn_quotations", all); }
  },
  deleteQuotation(id) { this._set("ivn_quotations", this.getQuotations().filter(q => q.id !== id)); },
  nextQuotationNum() { return "QT-" + String(this.getQuotations().length + 1).padStart(4, "0"); },

  // --- Invoices ---
  getInvoices() { return this._get("ivn_invoices"); },
  getInvoice(id) { return this.getInvoices().find(i => i.id === id); },
  addInvoice(inv) {
    const all = this.getInvoices();
    const item = { ...inv, id: this._id(), createdAt: new Date().toISOString() };
    all.push(item); this._set("ivn_invoices", all); return item;
  },
  updateInvoice(id, data) {
    const all = this.getInvoices();
    const i = all.findIndex(inv => inv.id === id);
    if (i >= 0) { all[i] = { ...all[i], ...data }; this._set("ivn_invoices", all); }
  },
  deleteInvoice(id) { this._set("ivn_invoices", this.getInvoices().filter(i => i.id !== id)); },
  nextInvoiceNum() { return "INV-" + String(this.getInvoices().length + 1).padStart(4, "0"); },

  // --- Calculations ---
  lineTotal(item) { return item.quantity * item.unitPrice; },
  subtotal(items) { return (items || []).reduce((s, i) => s + this.lineTotal(i), 0); },
  grandTotal(items, discount) {
    const sub = this.subtotal(items);
    return sub - (discount || 0);
  },
};
