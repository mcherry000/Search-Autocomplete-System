import data from './testInput'
import uniqueBy from '../exercises/exercise_1_uniqueBy'
import filterBy from '../exercises/exercise_2_filterBy'
import { filterBySolution } from './testOutputs'

const uniqueByResult = uniqueBy(data, 'member')
const filterByResult = filterBy(
  uniqueByResult,
  'myeloma',
  ['member', 'indicationCategory', 'affiliationPosition']
)

describe('filterBy', () => {
  test('output array is correct length', () => {
    expect(filterByResult.length).toBe(4)
  })

  test("correctly filters mock data by search term 'myeloma'", () => {
    for (let idx = 0; idx < filterByResult.length; idx++) {
      expect(filterBySolution[idx]).toEqual(filterByResult[idx]);
    }
  })
})
