import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnAddToCartBtn() {
    cy.contains('a', 'Add to cart').click();
  }
}

export default ProductPageObject;
