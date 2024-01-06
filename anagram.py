def sherlockAndAnagrams(s):
    def hash_string(s):
        char_count = [0] * 26
        for char in s:
            char_count[ord(char) - ord('a')] += 1
        print(char_count)
        return tuple(char_count)

    total_count = 0  # Initialize total_count
    substrings = [s[i:j] for i in range(len(s)) for j in range(i + 1, len(s) + 1)]
    hash_map = {}

    for substr in substrings:
        substr_hash = hash_string(substr)
        hash_map[substr_hash] = hash_map.get(substr_hash, 0) + 1

    for count in hash_map.values():
        # Calculate combinations to count pairs of substrings
        count = count * (count - 1) // 2
        total_count += count

    return total_count

#     # Write your code here
#     def is_anagram(s1, s2):
#         return sorted(s1) == sorted(s2)

#     count = 0
#     substrings = [s[i:j] for i in range(len(s)) for j in range(i + 1, len(s) + 1)]
#     print(substrings)

#     for i in range(len(substrings)):
#         for j in range(i + 1, len(substrings)):
#             print(substrings[i], substrings[j])
#             if is_anagram(substrings[i], substrings[j]):
#                 count += 1
#     print(count)
#     return count

# sherlockAndAnagrams("ifailuhkqq")
sherlockAndAnagrams("kkkk")

