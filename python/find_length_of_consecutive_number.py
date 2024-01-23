import string


def find_consecative_number(num):
    if not isinstance(num, list):
        print("Input provided is not valid")
        return 0
    max_length = 0
    print(isinstance(num, list))
    print(isinstance(num, (int)))
    num = set(num)
    for each_item in num:
        # if the current number is the start of sequence check the next number
        if each_item - 1 not in num:
            cur_length = 1
            next_num = each_item + 1
            while next_num in num:
                cur_length += 1
                next_num += 1
            max_length = max(max_length, cur_length)
    print(max_length)






a = [100,2,3,4,200,5]
find_consecative_number(a)