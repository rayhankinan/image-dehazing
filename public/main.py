# DOM manipulation
from pyscript import document


# Callable from JS
def get_blob_url(event):
    input_div = document.querySelector("#input")
    input_src = input_div.src
    output_div = document.querySelector("#output")
    output_div.innerText = input_src
