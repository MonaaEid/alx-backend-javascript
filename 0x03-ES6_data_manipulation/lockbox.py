def test(boxes):
    newarr = []
    for i in boxes:
        newarr += i
        if i not in newarr:
            print(newarr)
            return False
    return True

boxes = [[1], [2], [3], [4], []]
print(test(boxes))

# boxes = [[1, 4, 6], [2], [0, 4, 1], [5, 6, 2], [3], [4, 1], [6]]
# print(test(boxes))

# boxes = [[1, 4], [2], [0, 4, 1], [3], [], [4, 1], [5, 6]]
# print(test(boxes))