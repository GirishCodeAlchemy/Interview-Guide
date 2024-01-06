

# def superDigit(n, k):
#     # Write your code here

#     p = n * k

#     def recursive(p):
#         if len(p) == 1:
#             return p
#         else:
#             return recursive(str(sum(int(x) for x in p)))

#     result = recursive(p)
#     print(result)




def superDigit(n, k):
    # Write your code here
    def recursive_super_digit(num):
        if len(num) == 1:
            return int(num)
        digit_sum = sum(int(digit) for digit in num)
        return recursive_super_digit(str(digit_sum))

    initial_super_digit = recursive_super_digit(n)
    print(initial_super_digit)
    repeated_super_digit = recursive_super_digit(str(initial_super_digit * k))
    print(repeated_super_digit)
    return repeated_super_digit



superDigit("9875", 4)