describe('Test Suite 1', function() {
    it('Test 1', function() {
        debugger;
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
})
