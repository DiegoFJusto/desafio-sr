#!/bin/bash

STACK_NAME="DesafioSrInfraStack"

while true; do
  STATUS=$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query "Stacks[0].StackStatus" --output text)

  echo "Status atual: $STATUS"

  if [[ "$STATUS" == "CREATE_COMPLETE" || "$STATUS" == "UPDATE_COMPLETE" ]]; then
    echo "Deploy finalizado com sucesso!"
    break
  elif [[ "$STATUS" == *"FAILED"* || "$STATUS" == *"ROLLBACK"* ]]; then
    echo "Deploy falhou ou rollback detectado. Status: $STATUS"
    break
  fi

  sleep 10
done
