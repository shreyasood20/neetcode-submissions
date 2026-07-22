from typing import List

def read_integers() -> List[int]:
    user_input = input()
    int_list =[]
    for i in user_input.split(","):
        int_list.append(int(i))
    return int_list
    



# do not modify the code below
print(read_integers())
print(read_integers())
print(read_integers())
