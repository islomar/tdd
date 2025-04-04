#!/bin/bash

function updateAttendanceId {
  # Script to update the attendance_id file
  # Compatible with both Linux and Mac OSX

  echo "Please enter your attendance ID:"
  read attendance_id

  # Validate input is not empty
  if [ -z "$attendance_id" ]; then
      echo "Error: Attendance ID cannot be empty. Please try again."
      exit 1
  fi

  # Write the attendance ID to the file
  echo "$attendance_id" > attendance_id

  echo "Attendance ID updated successfully!"
}

function checkDockerRunning {
    echo -n "Checking Docker running..."
    (docker ps) > /dev/null
    if [ $? -ne 0 ]; then
      echo "Error"
      echo "Are you sure that you have Docker running?"
      echo "If you don't want to install Docker, you can use a Hosted Environment."
      exit -1
    else
      echo "Ok"
    fi
}

# https://www.docker.com/blog/announcing-compose-v2-general-availability/
function checkDockerComposeRunning {
    echo -n "Checking Docker Compose running..."
    (docker compose ps) > /dev/null
    if [ $? -ne 0 ]; then
      echo "Probably you are running an old version of Docker. You must be able to run 'docker compose', not 'docker-compose'."
      exit -1
    else
      echo "Ok"
    fi
}

checkDockerRunning
checkDockerComposeRunning
updateAttendanceId