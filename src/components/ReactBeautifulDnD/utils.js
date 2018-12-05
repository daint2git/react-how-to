export const isOdd = num => Boolean(num % 2)

// một chức năng nhỏ để giúp chúng tôi sắp xếp lại kết quả
export const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

export const dataGenerator = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: k,
    content: `item content ${k}`,
  }))
