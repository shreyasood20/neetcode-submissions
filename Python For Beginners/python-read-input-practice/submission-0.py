def add_two_numbers() -> int:
    user_input =input()
    strings = user_input.split(",")
    sum=0;
    for s in strings:
        sum+=int(s)
    return sum



# do not modify below this line
print(add_two_numbers())
print(add_two_numbers())
print(add_two_numbers())
print(add_two_numbers())
