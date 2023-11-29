import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";

@Entity('contact')
export class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 150 })
    name: string;

    @Column({ length: 100 })
    email: string;

    @Column({length: 150 })
    phoneNumber: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updateAt: string;

    @DeleteDateColumn({ type: "date" })
    deleteAt: string | null;

    @ManyToOne(() => User, (user) => user.contact)
    user: User;
}