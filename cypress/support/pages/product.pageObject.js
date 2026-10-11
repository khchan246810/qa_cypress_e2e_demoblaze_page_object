
import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddToCartBtn() {
    cy.contains('a', 'Add to cart').click();
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export default ProductPageObject;
