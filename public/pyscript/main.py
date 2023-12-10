# DOM manipulation (cannot be imported from pyscript package)
from pyscript import document, window

# Pyodide (cannot be imported from pyodide package)
from pyodide.http import pyfetch
from pyodide.ffi import to_js

# Pyodide JavaScript API (cannot be imported from pyodide package)
from js import Blob, Object

# Internal Library
from io import BytesIO

# External Library
from PIL import Image


# Helper Function
def crop_image(image, d):
    # Resize the image (divisible by "d")

    new_size = (
        image.size[0] - image.size[0] % d,
        image.size[1] - image.size[1] % d
    )
    bbox = (
        (image.size[0] - new_size[0]) // 2,
        (image.size[1] - new_size[1]) // 2,
        (image.size[0] + new_size[0]) // 2,
        (image.size[1] + new_size[1]) // 2,
    )
    image_cropped = image.crop(bbox)

    return image_cropped


# Callable from JS
async def process_image(event):
    # Get the image url
    input_div = document.querySelector("#input")
    input_src = input_div.src

    # Download the image
    response = await pyfetch(input_src)
    data = await response.bytes()

    # Convert to PIL Image
    image = Image.open(BytesIO(data))

    # Crop the image
    image_cropped = crop_image(image, d=32)

    # TODO: Process the image

    # Get image format
    format = image.format if image.format else "PNG"

    # Convert to png
    output = BytesIO()
    image_cropped.save(output, format=format)
    image_bytes = output.getvalue()

    # Convert to JS object
    content = to_js(image_bytes)
    blob_properties = Object.fromEntries(to_js({"type": Image.MIME[format]}))

    # Create a blob url
    blob = Blob.new([content], blob_properties)
    blobURL = window.URL.createObjectURL(blob)

    # Get the output div
    output_div = document.querySelector("#output")

    # Revoke the previous blob url
    if output_div.src:
        window.URL.revokeObjectURL(output_div.src)

    # Set the new blob url
    output_div.src = blobURL
