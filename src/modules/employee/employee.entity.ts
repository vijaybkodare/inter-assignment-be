import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Employee extends Model<Employee> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;
}