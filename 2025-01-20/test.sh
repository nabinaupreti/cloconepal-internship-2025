
#!/bin/bash
echo "Hello, World!"

read -p "Enter a number: " num
if (( num % 2 == 0 )); then
    echo "$num is even."
else
    echo "$num is odd."
fi
