
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: 3.5})).toEqual('898.09');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 200000, years: 30, rate: 3.5})).toMatch(/^[0-9]+\.[0-9]{2}$/);
});
