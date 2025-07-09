#!/bin/bash
cd /home/kavia/workspace/code-generation/todo-list-manager-07a837f5/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

