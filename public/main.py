# DOM manipulation
from pyscript import document


# Callable from JS
def hello_world(event):
    output_div = document.querySelector("#output")
    output_div.innerText = "Hello World!"
