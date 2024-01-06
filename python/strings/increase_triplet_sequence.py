def increasingTriplet( nums) -> bool:

    first_min = float('inf')  # Initialize with positive infinity
    second_min = float('inf')  # Initialize with positive infinity

    for num in nums:
        if num <= first_min:
            first_min = num
        elif num <= second_min:
            second_min = num
        else:
            print(num,first_min, second_min)
            return True  # We found a triplet (first_min < second_min < num)

    return False


print(increasingTriplet([2, 1, 5, 0, 4, 6]))
#     Input: nums = [2,1,5,0,4,6]
# Output: true
# Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.