from typing import Dict # this adds type hinting for Dict

def count_characters(word: str) -> Dict[str, int]:
    count={}
    for i in range (len(word)):
        if word[i] in count:
            count[word[i]]+=1
        else:
            count[word[i]]=1
    
    return count





# don't modify below this line
print(count_characters("hello"))
print(count_characters("world"))
print(count_characters("hello world"))
print(count_characters("this is a longer sentence"))
