# #!/bin/bash
# #Define log directior 
# LOG_DIR= "/home/nabina/Cloco/2025-01-21/cronjob"
# # create log file
# LOG_FILE= "${LOG_DIR}/process_log_$(date +'%Y-%m-%d').log"
# mkdir -p "$LOG_DIR"
# # Create the log directory if it doesn't exist
# #Append the top 5 processes to the log file with a timestamp

# echo "----Resource Usage: $(date +'%Y-%m-%d %H:%M:%S')----">> "$LOG_FILE"
# ps -eo pid,ppid,%mem, comm --sort=-%cpu | head -n 6 >> "$LOG_FILE"
# echo "" >> "$LOG_FILE"


#!/bin/bash
# Define the log directory and file
LOG_DIR="/home/nabina/Cloco/2025-01-21/cronjob"
LOG_FILE="${LOG_DIR}/process_log_$(date +'%Y-%m-%d').log"
mkdir -p "$LOG_DIR"
# Append the top 5 processes to the log file with a timestamp
echo "Resource Usage: $(date +'%Y-%m-%d %H:%M:%S')" >> "$LOG_FILE"
ps -eo pid,ppid,%cpu,%mem,comm --sort=-%cpu | head -n 6 >> "$LOG_FILE"
echo "" >> "$LOG_FILE"