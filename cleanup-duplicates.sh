#!/bin/bash

# Function to remove duplicate files
rm_if_equal() {
  local A="$1" B="$2"
  [ -f "$A" ] && [ -f "$B" ] || return 0
  
  if command -v sha256sum >/dev/null 2>&1; then
    hA=$(sha256sum "$A" | awk '{print $1}')
    hB=$(shasum -a 256 "$B" | awk '{print $1}')
  else
    hA=$(shasum -a 256 "$A" | awk '{print $1}')
    hB=$(shasum -a 256 "$B" | awk '{print $1}')
  fi
  
  if [ "$hA" = "$hB" ]; then 
    git rm "$A"
    echo "✓ Removed duplicate $A (kept $B)"
  else
    echo "✗ Files differ: $A vs $B"
  fi
}

echo "Checking for duplicate files..."
rm_if_equal google3ad91647a867b4ed.html public/google3ad91647a867b4ed.html
rm_if_equal robots.txt public/robots.txt
rm_if_equal sitemap.xml public/sitemap.xml
rm_if_equal og-image.jpg public/og-image.jpg
rm_if_equal vite.svg public/vite.svg
rm_if_equal .nojekyll public/.nojekyll
