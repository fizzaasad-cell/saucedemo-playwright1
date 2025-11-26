// pages/CartPage.js
class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
  }

  async hasItem(name) {
    return this.page.locator(`.cart_item:has-text("${name}")`).isVisible();
  }

  async getItemsText() {
    return this.cartItems.allTextContents();
  }
}

module.exports = CartPage;
