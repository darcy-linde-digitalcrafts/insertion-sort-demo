# Insertion Sort Demo

Insertion Sort works by building a sorted list **one element at a time**.

Insertion sort works the way you might **sort a hand of playing cards**.

1. Start with an empty left hand and the cards in a pile on the table.
2. Pick up the first card in the pile and hold it with your left hand.
3. Then, with your right hand, remove one card at a time from the pile, and
   insert it into the correct position in your left hand.

But the above idea can be slightly modified, and the “new hand” can just be
front of the given hand.

1. Start with the unordered hand of cards. The first card on the left is your
   new hand.
2. Starting from the second card, determine if it is higher or lower than the
   card on its left.
3. If it is lower, swap it with the card on its left.
4. Keep repeating leftward swaps until it is not higher than the card on its
   left.
5. Repeat steps three and four for the remaining cards.

## Properties of Insertion Sort

- **Simple**
- Efficient for very small data sets (more so even than other quadratic
  algorithms like bubble and selection)
- **Adaptive**
- **Stable**
- **In-place**: only requires a constant amount O(1) of memory space.
- **Comparison-based**

### Stable Sort

- Stable means that the relative order of equal elements is the same in the
  input and output.
- In other words, if two elements have the same value, the one that appears
  earlier in the input data should also appear earlier in the sorted output.
- Another way of saying this is, the same input always returns the same result.

For example, consider the following input data:

```text
(1, "Alice")
(2, "Bob")
(1, "Charlie")
(3, "David")
```

If we sort this data based on the first element of each pair (the numbers), a
stable sorting algorithm would produce the following output:

```text
(1, "Alice")
(1, "Charlie")
(2, "Bob")
(3, "David")
```

As you can see, the two elements with the value 1 ("Alice" and "Charlie") appear
in the same order in the sorted output as they did in the input data. This is
the property of stability.

### Why does stability matter

Stability is essential when sorting data with multiple keys or when the original
order of elements holds valuable information.

In certain applications, you may want to sort the data based on one key first
and then sort it again based on another key while preserving the order of the
first sorting. If the sorting algorithm is not stable, the original order may be
lost, and the final result may not be as expected.

### Adaptive Sort

- A sort is considered _adaptive_ if it takes advantage of existing order or
  partial pre-sortedness in the input data to improve its efficiency.
- In other words, an adaptive sorting algorithm **performs better when given**
  **data that is already partially sorted or nearly sorted**.

When the input data is nearly sorted, adaptive sorting algorithms can reduce the
number of comparisons and swaps required to achieve the sorted order. They can
adapt to the input's initial order and optimize their behavior accordingly,
leading to improved performance in such cases.

For example, consider the following partially sorted input data:

```text
1, 3, 4, 2, 5, 6
```

### Why does adaptivity matter

An adaptive sorting algorithm, when applied to this data, would recognize that
most elements are already in their correct positions and take advantage of this
knowledge to minimize unnecessary comparisons and swaps. In the case of an
adaptive algorithm, the performance would be **closer to O(n)** in such
scenarios, rather than the typical O(n log n) time complexity for general
sorting algorithms.

Adaptivity is a desirable property when dealing with data that frequently
arrives in partially sorted states or when you need to perform sorting on data
that is expected to have some level of pre-existing order. Adaptive sorting
algorithms can be more efficient and lead to performance improvements in such
scenarios.

## [Algorithm](https://en.wikipedia.org/wiki/Insertion_sort#Algorithm)

```text
i ← 1
while i < length(A)
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
    i ← i + 1
end while
```

## Step-by-step Overview

1. **Initialization**: The first element of the list is considered to be a
   sorted list of one element.
2. **Iteration**: Starting from the second element (index 1), the algorithm
   iterates through the remaining elements.
3. **Comparisons and Insertion**: For each element in the unsorted portion, the
   algorithm compares it with the elements in the sorted portion from right to
   left. If the current element is smaller (for ascending order) than any of the
   sorted elements, it moves the larger elements one position to the right to make
   space for the current element. This process continues until the correct position
   is found for the current element.
4. **Incrementing**: The algorithm moves to the next unsorted element and
   repeats the comparison and insertion process until all elements are in their
   correct positions.
5. **Completion**: Once the algorithm iterates through all elements, the entire
   list is sorted.

## [Time Complexity](https://en.wikipedia.org/wiki/Insertion_sort#Best,_worst,_and_average_cases)

| Scenario | Big O |
| -------- | ----- |
| Worst    | O(n²) |
| Average  | O(n²) |
| Best     | O(n)  |

The best case input is an array that is already sorted. In this case, the
running time is a **linear** function of n, so O(n)

The worst case is an array sorted in reverse order. In this case every iteration
of the inner loop will scan and shift the entire sorted subsection of the array
before inserting the next element,which gives a **quadratic** running time,
O(n²).

The average case is also quadratic, which makes insertion sort impractical for
sorting large arrays.

However, **insertion sort is one of the fastest algorithms for sorting very**
**small arrays**, even faster than quick sort; indeed, good quick sort
implementations use insertion sort for arrays smaller than a certain threshold,
also when arising as subproblems; the exact threshold must be determined
experimentally and depends on the machine, but is commonly around ten.

## Space Complexity

Insertion sort is an in-place algorithm, which gives it a space complexity of
**O(1)**.
