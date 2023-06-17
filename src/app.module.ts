import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { OrgnizationsModule } from './modules/organizations/organizations.module';

//require('dotenv').config()
//console.log(process.env)

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true,
    }),
    DatabaseModule,
    EmployeeModule,
    OrgnizationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
