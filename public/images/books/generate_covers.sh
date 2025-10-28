#!/bin/bash

# Array of book files and colors
declare -a books=(
  "book1.png:#EF4444:Conference Proceedings:RTIP2R 2020"
  "book3.png:#F59E0B:AI Research Methods:KC Santosh"
  "book5.png:#8B5CF6:Pattern Recognition:Advanced Topics" 
  "book6.png:#06B6D4:Computer Vision:Applications"
  "book7.png:#EC4899:Machine Learning:Healthcare"
  "book8.png:#84CC16:Data Science:Foundations"
  "book-crackML.png:#DC2626:Crack Detection:Machine Learning"
  "book-ai-ml-healthcare.png:#7C3AED:AI & ML:Healthcare"
  "book-coverS2017.png:#059669:Document Analysis:Text Recognition"
  "book-covid1.png:#0D9488:COVID-19:AI Analysis"
  "book-covid2.jpg:#BE185D:Pandemic Response:Technology"
  "book-MedImag.jpg:#7C2D12:Medical Imaging:Advanced Methods"
  "book-doc.jpg:#374151:Document Processing:ML Techniques"
  "cbms2020-proceedings.png:#1E40AF:CBMS 2020:Conference Proceedings"
  "rtip2r-2020-1.png:#991B1B:RTIP2R 2020:Part 1"
  "rtip2r-2020-2.png:#92400E:RTIP2R 2020:Part 2"
  "part1.png:#166534:Recent Trends:Part I"
  "part2.png:#7E22CE:Recent Trends:Part II"
  "part3.png:#BE123C:Recent Trends:Part III"
)

for book_info in "${books[@]}"; do
  IFS=':' read -r filename color title author <<< "$book_info"
  
cat > "$filename" << SVG_EOF
<svg width="150" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="150" height="200" fill="$color" rx="8"/>
  <text x="75" y="50" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle">$title</text>
  <text x="75" y="170" font-family="Arial, sans-serif" font-size="10" fill="white" text-anchor="middle">$author</text>
</svg>
SVG_EOF

done

echo "Generated book cover placeholders"
