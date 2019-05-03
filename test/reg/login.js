import { assert } from 'chai';

    let maxLength = 45;

    describe('Login', function () {

        describe('Email field', function () {

            it('Max Characters', function () {
                browser.url('/');
                let input = $('#email');
                input.addValue('t'.repeat(maxLength));
                let actual = input.getValue().length;
                input.clearValue();
                assert.equal(actual, maxLength);
            });
            it('Max Characters + 1', function () {
                let input = $('#email');
                input.addValue('t'.repeat(maxLength + 1));
                let actual = input.getValue().length;
                input.clearValue();
                assert.equal(actual, maxLength);
            });
        })
    });