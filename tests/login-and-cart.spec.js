const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');

test.describe('SauceDemo: Login + Product Search + Add to Cart', () => {

  // Declare local variables
  let login;
  let inventory;
  let cart;

  // Initialize inside beforeEach
  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    inventory = new InventoryPage(page);
    cart = new CartPage(page);
    await login.goto('https://www.saucedemo.com/');
  });

  test('Login with valid credentials', async ({ page }) => {
    await login.login();
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Select a product by name', async ({ page }) => {
    await login.login();
    const productName = 'Sauce Labs Backpack';
    const product = await inventory.getProductByName(productName);
    await expect(product).toBeVisible();
  });

  test('Add product to cart', async ({ page }) => {
    await login.login();
    const productName = 'Sauce Labs Backpack';
    await inventory.addProductToCart(productName);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('Verify cart contains the item', async ({ page }) => {
    await login.login();
    const productName = 'Sauce Labs Backpack';
    await inventory.addProductToCart(productName);
    await inventory.goToCart();
    await expect(cart.hasItem(productName)).resolves.toBe(true);
  });

});
