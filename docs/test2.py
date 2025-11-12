import tkinter as tk
from tkinter import ttk, filedialog, messagebox, scrolledtext
import os
import glob
import re # For sorting preview images numerically

# --- MDX Template ---
MDX_TEMPLATE = """\
<details className="example-callout">
  <summary>📦 {summary_title}</summary>

  <div className="session-header">
    <p className="session-description">
      <strong>Description:</strong> {description}
    </p>
    <a href={{useBaseUrl('/example_files/{folder_name}/{json_file_name}')}} download className="session-download-link">📁 <strong>Download Session</strong></a>
  </div>

  <div className="session-image-row">
{image_tags}
  </div>

  <p className="session-tags">Tags: {tags}</p>
</details>
"""

# --- Helper Function for Natural Sorting ---
def natural_sort_key(s):
    """Key for sorting strings numerically then alphabetically."""
    return [int(text) if text.isdigit() else text.lower()
            for text in re.split('([0-9]+)', s)]

# --- Main Application Class ---
class MdxGeneratorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("MDX Snippet Generator")
        self.root.geometry("650x550") # Adjusted size

        self.folder_path = tk.StringVar()
        self.status_text = tk.StringVar()
        self.status_text.set("Select a folder containing the required files.")

        # --- Style ---
        style = ttk.Style()
        style.configure("TButton", padding=6)
        style.configure("TLabel", padding=3)
        style.configure("TEntry", padding=3)

        # --- UI Elements ---
        # Frame for folder selection
        folder_frame = ttk.Frame(root, padding="10 10 10 5")
        folder_frame.pack(fill=tk.X)

        ttk.Label(folder_frame, text="Target Folder:").pack(side=tk.LEFT, padx=(0, 5))
        self.path_entry = ttk.Entry(folder_frame, textvariable=self.folder_path, state="readonly", width=60)
        self.path_entry.pack(side=tk.LEFT, fill=tk.X, expand=True)
        self.select_button = ttk.Button(folder_frame, text="Select Folder", command=self.select_folder)
        self.select_button.pack(side=tk.LEFT, padx=(5, 0))

        # Frame for Output
        output_frame = ttk.Frame(root, padding="10 5 10 5")
        output_frame.pack(fill=tk.BOTH, expand=True)

        ttk.Label(output_frame, text="Generated MDX Code:").pack(anchor=tk.W)
        self.output_text = scrolledtext.ScrolledText(output_frame, wrap=tk.WORD, height=15, width=70, font=("Courier New", 9))
        self.output_text.pack(fill=tk.BOTH, expand=True, pady=(5, 5))

        # Frame for Actions and Status
        action_frame = ttk.Frame(root, padding="10 5 10 10")
        action_frame.pack(fill=tk.X)

        self.copy_button = ttk.Button(action_frame, text="Copy to Clipboard", command=self.copy_to_clipboard, state=tk.DISABLED)
        self.copy_button.pack(side=tk.LEFT)

        self.status_label = ttk.Label(action_frame, textvariable=self.status_text, foreground="grey", wraplength=400) # Wraplength added
        self.status_label.pack(side=tk.RIGHT, padx=(10, 0))


    def select_folder(self):
        """Opens folder dialog and triggers generation."""
        path = filedialog.askdirectory(title="Select Folder")
        if path:
            self.folder_path.set(path)
            self.generate_mdx()
        else:
            # Clear if selection was cancelled
            # self.folder_path.set("") # Optional: clear path if cancelled
            # self.output_text.delete('1.0', tk.END)
            # self.status_text.set("Folder selection cancelled.")
            # self.copy_button.config(state=tk.DISABLED)
            pass # Keep previous state if cancelled


    def generate_mdx(self):
        """Reads folder contents and generates the MDX snippet."""
        folder_path = self.folder_path.get()
        if not folder_path or not os.path.isdir(folder_path):
            self.status_text.set("Error: Please select a valid folder.")
            self.output_text.delete('1.0', tk.END)
            self.copy_button.config(state=tk.DISABLED)
            return

        folder_name = os.path.basename(folder_path)
        summary_title = folder_name.replace('_', ' ') # Simple title generation

        # --- Read Files ---
        try:
            # Description
            desc_path = os.path.join(folder_path, 'description.txt')
            with open(desc_path, 'r', encoding='utf-8') as f:
                description = f.read().strip()
        except FileNotFoundError:
            self.status_text.set(f"Error: 'description.txt' not found in {folder_name}")
            self.output_text.delete('1.0', tk.END)
            self.copy_button.config(state=tk.DISABLED)
            return
        except Exception as e:
            self.status_text.set(f"Error reading description.txt: {e}")
            self.output_text.delete('1.0', tk.END)
            self.copy_button.config(state=tk.DISABLED)
            return

        try:
            # Tags
            tags_path = os.path.join(folder_path, 'tags.txt')
            with open(tags_path, 'r', encoding='utf-8') as f:
                tags_raw = f.read().strip()
                tags = ", ".join(t.strip() for t in tags_raw.split(',') if t.strip())
        except FileNotFoundError:
            self.status_text.set(f"Error: 'tags.txt' not found in {folder_name}")
            self.output_text.delete('1.0', tk.END)
            self.copy_button.config(state=tk.DISABLED)
            return
        except Exception as e:
            self.status_text.set(f"Error reading tags.txt: {e}")
            self.output_text.delete('1.0', tk.END)
            self.copy_button.config(state=tk.DISABLED)
            return

        # Find JSON file
        json_files = glob.glob(os.path.join(folder_path, '*.json'))
        if not json_files:
            self.status_text.set(f"Error: No '.json' file found in {folder_name}")
            self.output_text.delete('1.0', tk.END)
            self.copy_button.config(state=tk.DISABLED)
            return
        # if len(json_files) > 1:
        #     messagebox.showwarning("Multiple JSON Files", f"Found multiple .json files in {folder_name}. Using the first one: {os.path.basename(json_files[0])}")
        json_file_name = os.path.basename(json_files[0])

        # Find Preview Images
        image_files = glob.glob(os.path.join(folder_path, 'preview*.png'))
        image_files.sort(key=natural_sort_key) # Sort naturally (preview1, preview2, preview10)

        image_tags = []
        if image_files:
            for i, img_path in enumerate(image_files):
                img_name = os.path.basename(img_path)
                alt_text = f"Sample {i+1}"
                # Added indentation for readability within the final MDX
                image_tag = f'    <img src={{useBaseUrl(\'/example_files/{folder_name}/{img_name}\')}} alt="{alt_text}" className="session-preview-img"/>'
                image_tags.append(image_tag)
        else:
            # Optional: Add a placeholder or message if no images found
            image_tags.append("    <!-- No preview images found -->")

        image_tags_str = "\n".join(image_tags) # Join with newlines

        # --- Format Template ---
        try:
            output_mdx = MDX_TEMPLATE.format(
                summary_title=summary_title,
                description=description,
                folder_name=folder_name,
                json_file_name=json_file_name,
                image_tags=image_tags_str,
                tags=tags
            )

            # --- Update GUI ---
            self.output_text.delete('1.0', tk.END)
            self.output_text.insert('1.0', output_mdx)
            self.status_text.set(f"MDX generated successfully for '{folder_name}'.")
            self.copy_button.config(state=tk.NORMAL)

        except Exception as e:
            self.status_text.set(f"Error formatting template: {e}")
            self.output_text.delete('1.0', tk.END)
            self.copy_button.config(state=tk.DISABLED)
            messagebox.showerror("Generation Error", f"An unexpected error occurred during template formatting:\n{e}")


    def copy_to_clipboard(self):
        """Copies the content of the output text area to the clipboard."""
        generated_text = self.output_text.get("1.0", tk.END).strip()
        if generated_text:
            self.root.clipboard_clear()
            self.root.clipboard_append(generated_text)
            self.status_text.set("MDX copied to clipboard!")
            # Optional: briefly change button text
            # self.copy_button.config(text="Copied!")
            # self.root.after(1500, lambda: self.copy_button.config(text="Copy to Clipboard"))
        else:
            self.status_text.set("Nothing to copy.")


# --- Run the Application ---
if __name__ == "__main__":
    root = tk.Tk()
    app = MdxGeneratorApp(root)
    root.mainloop()