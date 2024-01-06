# Longest Substring Without Repeating Characters
def lengthOfLongestSubstring(self, s: str) -> int:
    char_index = {}
    start = 0
    max_len = 0

    for end in range(len(s)):
        if s[end] in char_index and char_index[s[end]] >= start:
            start = char_index[s[end]] + 1
        char_index[s[end]] = end
        max_len = max(max_len, end - start + 1)
    return max_len

# class Solution:
#     def lengthOfLongestSubstring(self, s: str) -> int:
#         def has_duplicate(word):
#             return len(word) != len(set(word))

#         substring = [s[i:j]for i in range(len(s)) for j in range(i+1,len(s)+1) if not has_duplicate(s[i:j]) ]

#         # print(substring)
#         max_length_substring = max(substring, key=len)
#         # print(max_length_substring)
#         return len(max_length_substring)



# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


#Optimzed code
# def lengthOfLongestSubstring(self, s: str) -> int:
#     char_index = {}  # A dictionary to store the index of the last occurrence of each character
#     start = 0  # The start pointer of the current substring
#     max_len = 0  # The length of the longest substring without repeating characters

#     for end in range(len(s)):
#         # Check if the current character has been seen before in the current substring
#         if s[end] in char_index and char_index[s[end]] >= start:
#             # If yes, update the start pointer to the next position after the previous occurrence
#             start = char_index[s[end]] + 1

#         # Update the index of the current character in the dictionary
#         char_index[s[end]] = end

#         # Update the maximum length if the current substring is longer
#         max_len = max(max_len, end - start + 1)

#     return max_len
