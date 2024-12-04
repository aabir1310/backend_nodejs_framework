import { Entity, Column,PrimaryGeneratedColumn,UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity("users")
export class User{
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({unique:true})
    username:string;

    @Column()
    firstname :string;

    @Column()
    lastname :string;

    @Column()
    email :string;

    @Column()
    passwordHash :string;

    @CreateDateColumn()
    createdAt :Date;

    @UpdateDateColumn()
    updatedAt:Date;





}