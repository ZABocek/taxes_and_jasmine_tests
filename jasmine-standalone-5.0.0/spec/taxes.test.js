describe('calculateTaxes tests', function () {
    it('should calculate low-bracket', function() {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(3000);
    })
    
    it('should calculate high-bracket', function() {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(80000)).toEqual(20000);
    })
    
    it('should reject invalid incomes', function() {
        expect(() => calculateTaxes('alkjdsfadkjf')).toThrowError();
        expect(() => calculateTaxes([])).toThrowError();
        expect(() => calculateTaxes(true)).toThrowError();
    })
});

describe('removeDupes tests', function() {
    it('should remove duplicates from an array', function(){
        expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4]);
        expect(removeDupes([1,2,3])).toEqual([1,2,3]);
        expect(removeDupes([1,2,3])).toBeInstanceOf(Array);
    })
    
    it('should remove duplicates from a string', function(){
        expect(removeDupes('hello')).toEqual('helo');
        expect(removeDupes('hello')).toBeInstanceOf(String);
    })
})

describe('remove tests', function () {
    it('should remove value from array', function(){
        expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
    })
})

describe('submitForm() tests', () => {
    it('saves input val to usernames array', () => {
        nameInput.value = 'chickenGal';
        submitForm();
        expect(usernames.length).toEqual(1)
        expect(usernames).toContain('chickenGals')
    })
    it('saves long usernames', () => {
        nameInput.value = 'I am a panda luvr 567';
        submitForm();
        expect(usernames.length).toEqual(1);
    })
})
afterEach(function () {
    nameInput.value = '';
    usernames = [];
})