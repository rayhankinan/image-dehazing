# External imports
import arrr

# DOM manipulation
from pyscript import document


# Callable from JS
def translate_english(event):
    input_text = document.querySelector("#english")
    english = input_text.value
    output_div = document.querySelector("#output")
    output_div.innerText = arrr.translate(english)
