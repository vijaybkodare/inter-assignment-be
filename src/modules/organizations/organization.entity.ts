import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Organization extends Model<Organization> {
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