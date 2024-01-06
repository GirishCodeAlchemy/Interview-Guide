# https://www.hackerrank.com/challenges/matrix-rotation-algo/submissions/code/354921580
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'matrixRotation' function below.
#
# The function accepts following parameters:
#  1. 2D_INTEGER_ARRAY matrix
#  2. INTEGER r
#

def matrixRotation(matrix, r):
    # Write your code here
    m = len(matrix)
    n = len(matrix[0])

    num_layers = min(m, n) // 2

    for layer in range(num_layers):
        effective_r = r % (2 * (m + n - 4 * layer) - 4)
        layer_elements = []

        # Store the elements of the current layer
        for j in range(layer, n - layer):
            layer_elements.append(matrix[layer][j])
        for i in range(layer + 1, m - layer):
            layer_elements.append(matrix[i][n - layer - 1])
        for j in range(n - layer - 2, layer - 1, -1):
            layer_elements.append(matrix[m - layer - 1][j])
        for i in range(m - layer - 2, layer, -1):
            layer_elements.append(matrix[i][layer])

        # Rotate the elements of the layer
        for _ in range(effective_r):
            element = layer_elements.pop(0)
            layer_elements.append(element)

        index = 0

        # Assign the rotated elements back to the layer
        for j in range(layer, n - layer):
            matrix[layer][j] = layer_elements[index]
            index += 1
        for i in range(layer + 1, m - layer):
            matrix[i][n - layer - 1] = layer_elements[index]
            index += 1
        for j in range(n - layer - 2, layer - 1, -1):
            matrix[m - layer - 1][j] = layer_elements[index]
            index += 1
        for i in range(m - layer - 2, layer, -1):
            matrix[i][layer] = layer_elements[index]
            index += 1

    for row in matrix:
        print(*row)

if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    m = int(first_multiple_input[0])

    n = int(first_multiple_input[1])

    r = int(first_multiple_input[2])

    matrix = []

    for _ in range(m):
        matrix.append(list(map(int, input().rstrip().split())))

    matrixRotation(matrix, r)
