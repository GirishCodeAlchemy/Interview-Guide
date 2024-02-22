# remove one or two character and check whether its palindrome or not
# and also palndrome len should be greater than 2

def is_palindrome(s):
    return len(s) > 2 and s == s[::-1]


def palindrome_creator(s):
    # Check if string is already a palindrome
    if is_palindrome(s):
        return 'palindrome'

    n = len(s)

    # Remove one letter
    for i in range(n):
        if is_palindrome(s[:i] + s[i+1:]):
            return s[i]

    # Remove two letters
    for i in range(n):
        for j in range(i, n):
            if is_palindrome(s[:i] + s[i+1:j] + s[j+1:]):
                return s[i] + s[j]

    # If palindrome does not exist, return 'not possible'
    return 'not possible'


print(palindrome_creator('raccecar'))
