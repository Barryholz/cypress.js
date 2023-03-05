describe('Тестирование логина и пароля', function () {

     it('Положительная авторизация', function () {
        cy.visit('https://login.qa.studio/');
        cy.contains('Форма логина');
        cy.contains('Войти');
        cy.contains('Забыли пароль?');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
        })

        it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio/');
            cy.contains('Забыли пароль?');
            cy.get('#forgotEmailButton').click();
            cy.contains('Восстановите пароль');
            cy.get('#mailForgot').type('ill-vladislav-ivanov@qa.studio');
            cy.get('#restoreEmailButton').click();
            cy.contains('Успешно отправили пароль на e-mail');
            cy.get('#exitMessageButton > .exitIcon').click();
            })

            it('Неправильный логин и пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dalnikov.ru');
                cy.get('#pass').type('iLoveqastudio');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет');
                cy.get('#exitMessageButton > .exitIcon').click();
                })

                it('Ошибка валидации', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('germandolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.contains('Нужно исправить проблему валидации');
                    cy.get('#exitMessageButton > .exitIcon').click();
                    })

                    it('Проверка на привидение к строчным буквам в логине', function () {
                        cy.visit('https://login.qa.studio/');
                        cy.get('#mail').type('GerMan@Dolnikov.ru');
                        cy.get('#pass').type('iLoveqastudio1');
                        cy.get('#loginButton').click();
                        cy.contains('Такого логина или пароля нет');
                        cy.get('#exitMessageButton > .exitIcon').click();
                        })
})