import re

with open('src/assets/logo.orig.svg', 'r') as f:
    content = f.read()

# Extract SVG attributes
svg_match = re.search(r'<svg([^>]*)>', content)
svg_attrs = svg_match.group(1) if svg_match else ''

# Extract defs block
defs_match = re.search(r'<defs>(.*?)</defs>', content, re.DOTALL)
defs_content = defs_match.group(1) if defs_match else ''

# Extract all path elements with their fill colors
path_pattern = re.compile(r'<path\s[^>]*fill="([^"]*)"[^>]*/>', re.DOTALL)
paths = re.findall(r'<path\s.*?/>', content, re.DOTALL)

keep_colors = {'#cc4940', '#201d21', '#3f3028', '#7e5228'}
white_color = '#ffffff'
exclude_colors = {'#d3716a'}

keep_paths = []
white_paths = []

for path in paths:
    fill_match = re.search(r'fill="([^"]*)"', path)
    if not fill_match:
        continue
    color = fill_match.group(1).lower()
    if color in keep_colors:
        keep_paths.append(path)
    elif color == white_color:
        # Convert white path to black for use inside mask (black = cut through)
        black_path = re.sub(r'fill="[^"]*"', 'fill="black"', path)
        white_paths.append(black_path)
    elif color in exclude_colors:
        pass  # skip pink fragments
    # fill="none" paths are skipped

# Build the new SVG
white_paths_str = '\n    '.join(white_paths)
keep_paths_str = '\n  '.join(keep_paths)

new_svg = f'''<svg{svg_attrs}>
  <defs>
    {defs_content}
    <mask id="whitePunch">
      <rect x="0" y="0" width="375" height="202.499994" fill="white"/>
      {white_paths_str}
    </mask>
  </defs>
  <g mask="url(#whitePunch)">
  {keep_paths_str}
  </g>
</svg>'''

with open('src/assets/logo.svg', 'w') as f:
    f.write(new_svg)

print("Done! logo.svg written with mask-based transparency.")
print(f"  Keep paths: {len(keep_paths)}")
print(f"  White (cutter) paths: {len(white_paths)}")
