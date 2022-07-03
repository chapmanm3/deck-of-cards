import { calculateBestHand } from './utils'
import { Hand } from '../types'


test('Calculates a Straight Flush', () => {
  const testHand:Hand = [
    {
      value: "KING",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "QUEEN",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "JACK",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "9",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const hand = calculateBestHand(testHand)
  expect(hand).toBe('Straight Flush')
})

test('Calculates a Royal Flush', () => {
  const testHand:Hand = [
    {
      value: "ACE",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "KING",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "QUEEN",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "JACK",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Royal Flush')
})

test('Calculates Four of a Kind', () => {
  const testHand:Hand = [
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "DIAMONDS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "CLUBS",
      image: "test",
      code: "code"
    },
    {
      value: "6",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Four of a kind')
})

test('Calculates a Full House', () => {
  const testHand:Hand = [
    {
      value: "9",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "9",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "9",
      suit: "CLUBS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Full House')
})

test('Calculates a Flush', () => {
  const testHand:Hand = [
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "7",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "2",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "ACE",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "4",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Flush')
})

test('Calculates a Straight', () => {
  const testHand:Hand = [
    {
      value: "0",
      suit: "CLUBS",
      image: "test",
      code: "code"
    },
    {
      value: "9",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "8",
      suit: "DIAMONDS",
      image: "test",
      code: "code"
    },
    {
      value: "7",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "6",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Straight')
})

test('Calculates a Three of a Kind', () => {
  const testHand:Hand = [
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "CLUBS",
      image: "test",
      code: "code"
    },
    {
      value: "7",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "6",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Three of a Kind')
})

test('Calculates a Two Pair', () => {
  const testHand:Hand = [
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "8",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "8",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "6",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Two Pair')
})

test('Calculates a Pair', () => {
  const testHand:Hand = [
    {
      value: "0",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "0",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "8",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "4",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "6",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('Pair')
})

test('Calculates a High Card', () => {
  const testHand:Hand = [
    {
      value: "ACE",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "9",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
    {
      value: "3",
      suit: "SPADES",
      image: "test",
      code: "code"
    },
    {
      value: "7",
      suit: "DIAMONDS",
      image: "test",
      code: "code"
    },
    {
      value: "6",
      suit: "HEARTS",
      image: "test",
      code: "code"
    },
  ]

  const respObj = calculateBestHand(testHand)
  expect(respObj).toBe('High Card')
})
