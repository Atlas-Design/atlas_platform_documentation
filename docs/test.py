import os
from pathlib import Path
from PIL import Image

def convert_jpg_to_png(directory):
    directory = Path(directory)
    if not directory.is_dir():
        print(f"Provided path '{directory}' is not a directory.")
        return

    jpg_files = list(directory.rglob("*.jpg")) + list(directory.rglob("*.jpeg"))
    if not jpg_files:
        print("No JPG files found.")
        return

    for jpg_path in jpg_files:
        try:
            png_path = jpg_path.with_suffix('.png')
            with Image.open(jpg_path) as img:
                img.save(png_path, 'PNG')
            os.remove(jpg_path)
            print(f"Converted and removed: {jpg_path}")
        except Exception as e:
            print(f"Failed to convert {jpg_path}: {e}")

if __name__ == "__main__":


    path = (r'C:\Users\matan\Documents\AtlasPlatform\atlas_platform_documentation\static\example_files\WorkflowDemo_BadPrompting'
            r'')
    convert_jpg_to_png(path)
