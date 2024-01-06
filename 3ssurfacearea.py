def surfaceArea(A):
    # Write your code here
    # fptr.write(f"input {A}\n")
    H = len(A)
    W = len(A[0])

    total_surface_area = 0

    for i in range(H):
        for j in range(W):
            cell_surface_area = 4 * A[i][j] + 2

            if i > 0:
                cell_surface_area -= 2 * min(A[i][j], A[i - 1][j])
            if j > 0:
                cell_surface_area -= 2 * min(A[i][j], A[i][j - 1])

            total_surface_area += cell_surface_area
    print(total_surface_area)
    return total_surface_area

surfaceArea([[1]])
surfaceArea([[1, 3, 4], [2, 2, 3], [1, 2, 4]])