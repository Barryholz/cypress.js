describe('Длинный автотест', function () {

    it('Покупка товаров', function () {
        cy.visit('https://sh3910517.c.had.su/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.visit('https://sh3910517.c.had.su/');
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .product-loop__buttons > .button').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Владислав');
        cy.get('#billing_last_name').type('Иванов');
        cy.get('#billing_address_1').type('ул.Пушкина, дом. 9');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Московская область');
        cy.get('#billing_postcode').type('180022');
        cy.get('#billing_phone').type('89000000000');
        cy.get('#billing_email').type('ill-vladislav-ivanov@qa.studio');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.');
        })


    })