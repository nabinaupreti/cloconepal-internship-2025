# Task 1: Directory Management
echo "Creating and managing directories..."
cd /home
sudo chmod 755 user
cd /user
mkdir project_files

# Verify directory creation
echo "Verifying directory creation..."
ls -l

# Task 2: User and group management
echo "Creating user and managing groups..."

# Create a new group and user, then add the user to the group
Sudo groupadd developers
sudo useradd intern_user
sudo usermod -aG developers intern_user # Add 'intern_user' to the 'developers' group to grant appropriate permissions
sudo passwd intern_user

# Verify user and group management
echo "Verifying group and user creation..."
cat /etc/group

#task 3: Permissions and Ownership
echo "Setting ownership and permission"
sudo chown intern_user:developers project_file
sudo chmod 750 project_file

# Verify permissions and ownership
echo "Verifying permission and ownership changes..."
ls -l 

#task 4: Additional Task
cd /home/nabina/project_file
sudo touch welcome.txt

sudo chmod 777 welcome.txt # Change the permissions of welcome.txt to allow full access (read, write, execute) to everyone
echo "Created on: $(date)" > welcome.txt
cat welcome.txt # Display the contents of welcome.txt
sudo chgrp developers welcome.txt # Change the group ownership of welcome.txt to the "developers" group
sudo chmod 775 welcome.txt

# Verify final permissions
echo "Verifying file permissions and ownership..."
ls -l 

#task 5: Verification
mkdir project_file # directory creation
sudo chmod 750 project_file # permission
sudo useradd intern_user # user Creation
sudo groupadd developers # Added to group
sudo touch welcome.txt # File Creation
echo "done"









