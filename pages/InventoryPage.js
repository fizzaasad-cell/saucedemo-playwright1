// pages/InventoryPage.js
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryList = page.locator('.inventory_list');
    this.products = page.locator('.inventory_item');
  }

  async getProductByName(name) {
    return this.page.locator(`.inventory_item:has-text("${name}")`);
  }

  async addProductToCart(name) {
    const product = await this.getProductByName(name);
    await product.locator('button').click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
    await this.page.waitForSelector('.cart_list');
  }
}

module.exports = InventoryPage;
