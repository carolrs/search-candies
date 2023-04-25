const candies = require('./candies')

describe('searchCandies', ()=>{
  it('returns candies starting with the name Ma and the price is at most £10.0', ()=>{
    expect(candies('Ma', 10.0)).toEqual([ 'Mars', 'Maltesers'])
  })

  it('returns candies starting with the name Ma and the price is at most £2.0', ()=>{
    expect(candies('Ma', 2.0)).toEqual([ 'Mars'])
  })

  it('returns candies starting with the letter S and the price is at most £10.0', ()=>{
    expect(candies('S', 10.0)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  })

  it('returns candies starting with the letter S and the price is at most £4.0', ()=>{
    expect(candies('S', 4.0)).toEqual([ 'Skitties', 'Skittles' ])
  })
})

