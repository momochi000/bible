#!/bin/bash

# Build production release
echo "Building production ClojureScript..."
npx shadow-cljs release app

# Create target directory
mkdir -p target

# Read the HTML template
HTML_TEMPLATE="resources/public/index.html"
JS_FILE="target/release/main.js"
OUTPUT_FILE="target/bible.html"

if [ ! -f "$JS_FILE" ]; then
    echo "Error: $JS_FILE not found"
    exit 1
fi

echo "Creating single HTML file..."

# Read JS content
JS_CONTENT=$(cat "$JS_FILE")

# Create the final HTML by replacing the script tag
cat "$HTML_TEMPLATE" | sed "s|<script src=\"/js/main.js\"></script>|<script>\n$JS_CONTENT\n</script>|" > "$OUTPUT_FILE"

echo "Single HTML file created: $OUTPUT_FILE"
echo "File size: $(du -h "$OUTPUT_FILE" | cut -f1)"
