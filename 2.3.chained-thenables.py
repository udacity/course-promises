import re

first = widget_inputs["text1"]
second = widget_inputs["text2"]
third = widget_inputs["text3"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

def get_numbers(text):
    return re.findall("\d", text)

is_correct = False

if not sorted(get_numbers(first)) == ["1", "3"]:
    commentizer("Check the first one again. Which numbers are being logged?")
    is_correct = is_correct and False
else:
    is_correct = True

if sorted(get_numbers(second)) == ["4"]:
    commentizer("Check the second one. I see why you think it's 4, but if no other errors occur, could `recovery()` even be called?")
    is_correct = is_correct and False
elif not get_numbers(second) == []:
    commentizer("Check the second one. If there are no other errors, could `recovery()` ever get called?")
    is_correct = is_correct and False
else:
    is_correct = is_correct and True

thirdsorted = sorted(get_numbers(third))
has_four = False
try:
    thirdsorted.index("4") > -1
    has_four = True
except:
    has_four = False

if not has_four:
    commentizer("Check the third one. If there's an error here, which reject function will get called?")
    is_correct = is_correct and False
elif thirdsorted == ["3", "4"]:
    commentizer("Right! You know, I actually left out the '3' in the solution video, but it should be there. Good job!")
    is_correct = is_correct and True
elif thirdsorted == ["4"]:
    is_correct = is_correct and True

if is_correct:
    commentizer("Awesome! You're getting the hang of chains!")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct