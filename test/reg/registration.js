import { assert } from 'chai';

let maxLength = 45;

describe('Registration Form', function () {

    describe('Confirm Password input field', function () {

        it('Font size', function () {
            browser.url('/');
            $('#registration').click();
            let input = $('#pass');
            let fontSize = input.getCSSProperty('font-size').value;
            assert.equal(fontSize, '16px');
        });

        it('Font Weight', function () {
            let input = $('#pass');
            let fontWeight = input.getCSSProperty('font-weight').value;
            assert.equal(fontWeight, '400');
        });

        it('Font Family', function () {
            let input = $('#pass');
            let fontFamily = input.getCSSProperty('font-family').value;
            assert.equal(fontFamily, 'segoe ui');
        });

        it('Max Characters', function () {
            let input = $('#pass');
            input.addValue('d'.repeat(maxLength));
            let actual = input.getValue().length;
            input.clearValue();
            assert.equal(actual, maxLength)
        });

        it('Max Characters + 1', function () {
            let input = $('#pass');
            input.addValue('d'.repeat(maxLength + 1));
            let actual = input.getValue().length;
            input.clearValue();
            assert.equal(actual, maxLength)
        });

    });

    describe('"*Required filed" text', function () {

        it('Text is present', function () {
            let field = $('.text-left').isDisplayed();
            assert.equal(field, true)
        });

        it('Text is "*Required text"', function () {
            let field = $('.text-left').getText();
            assert.equal(field,  '* Required field')
        });

        it('Font Size', function () {
            let field = $('.text-left');
            let fontSize = field.getCSSProperty('font-size').value;
            assert.equal(fontSize,  '16px')
        });

        it('Font Weight', function () {
            let field = $('.text-left');
            let fontWeight = field.getCSSProperty('font-weight').value;
            assert.equal(fontWeight,  '400')
        });

        it('Font Family', function () {
            let field = $('.text-left');
            let fontFamily = field.getCSSProperty('font-family').value;
            assert.equal(fontFamily,  'segoe ui')
        });

        it('Font Color', function () {
            let field = $('.text-left');
            let fontColor = field.getCSSProperty('color').parsed.hex;
            assert.equal(fontColor,  '#212529')
        })

    })

});