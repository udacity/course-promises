import re

textinput = widget_inputs["text1"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

is_correct = False

result = re.match(".*window.*", textinput, flags=re.IGNORECASE)
if result:
    is_correct = True
    commentizer("You're right, but there's a little more to it than that. Make sure you watch the solution video.")

result = re.match(".*global.*", textinput, flags=re.IGNORECASE)
if result:
    is_correct = True
    commentizer("Right! It's the global object.")

result = re.match(".*promise.*", textinput, flags=re.IGNORECASE)
if result:
    is_correct = False
    commentizer("It's not the Promise. Take another look!")

if not is_correct and len(comments) == 0:
    commentizer("Not quite. Just log `this` somewhere in the Promise to see what happens.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct