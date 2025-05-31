#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DesafioSrInfraStack } from '../lib/desafio-sr-infra-stack';
import { MysqlStack } from '../lib/mysql-stack';

const app = new cdk.App();

new DesafioSrInfraStack(app, 'DesafioSrInfraStackV2', {
  /* props se houver */
});

new MysqlStack(app, 'MysqlStack', {
  /* props se quiser */
});
