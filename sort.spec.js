describe('sort', () => {
  it('should order any array of integers into their proper sequence', () => {
    let array = [7, 4, 9, 2, 1, 3, 12];
    let result = sort(array);
    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(2);
    expect(result[2]).toEqual(3);
    expect(result[3]).toEqual(4);
    expect(result[4]).toEqual(7);
    expect(result[5]).toEqual(9);
    expect(result[6]).toEqual(12);
  })
  });