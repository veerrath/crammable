import os
import json

# Get the directory of this script
script_dir = os.path.dirname(os.path.abspath(__file__))

# Path to the Python files
py_folder = os.path.join(script_dir, "transcripts", "AP_Calculus_BC")

# Output base folder for TS files
ts_base_folder = os.path.join(script_dir, "transcripts_ts")

# Create AP_Calculus_BC folder inside transcripts_ts
ts_folder = os.path.join(ts_base_folder, "AP_Calculus_BC")
os.makedirs(ts_folder, exist_ok=True)

# Loop through .py files
for filename in os.listdir(py_folder):
    if filename.endswith(".py"):
        file_path = os.path.join(py_folder, filename)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Convert content to a TS-exportable string (multiline template literal)
        ts_content = f'const transcript = `{content}`;\n\nexport default transcript;\n'

        # Save as .ts file in the mirrored folder
        base_name = os.path.splitext(filename)[0]
        out_file = os.path.join(ts_folder, f"{base_name}.ts")
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(ts_content)

print("Conversion to TS complete!")