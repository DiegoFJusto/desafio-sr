import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class MysqlStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC padrão (ou crie uma sua e use aqui)
    const vpc = new ec2.Vpc(this, 'MysqlVpc', { maxAzs: 2 });

    // Cluster RDS MySQL
    const cluster = new rds.DatabaseCluster(this, 'MysqlCluster', {
      engine: rds.DatabaseClusterEngine.auroraMysql({
        version: rds.AuroraMysqlEngineVersion.VER_2_11_3,
      }),
      instanceProps: {
        vpc,
        instanceType: ec2.InstanceType.of(
          ec2.InstanceClass.T3,
          ec2.InstanceSize.MEDIUM,
        ),
        vpcSubnets: {
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      },
      defaultDatabaseName: 'desafiosrdb',
      instances: 1,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
