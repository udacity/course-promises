ajax = widget_inputs["check1"]
images = widget_inputs["check2"]
add_divs_to_page = widget_inputs["check3"]
web_worker = widget_inputs["check4"]

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

is_correct = False

if not ajax:
    is_correct = is_correct and False
    commentizer("Take another look at the first one. Hint: what's the definition of AJAX?")
else:
    is_correct = True

if images:
    is_correct = is_correct and False
    commentizer("Take another look at the second one. Where is the image manipulation work happening?")
else:
    is_correct = is_correct and True

if add_divs_to_page:
    is_correct = is_correct and False
    commentizer("Take another look at the third one. What kind of work is appending divs to the page? Synchronous or asynchronous?")
else:
    is_correct = is_correct and True

if not web_worker:
    is_correct = is_correct and False
    commentizer("Take another look at the last one. Where do web workers run? How do you communicate with web workers?")
else:
    is_correct = is_correct and True

if is_correct:
    commentizer("Great job! You're recognizing when and where Promises are useful.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct