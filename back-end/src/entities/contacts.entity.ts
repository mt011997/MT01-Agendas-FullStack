import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Client from "./client.entity";

@Entity("contacts")
export default class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 130 })
  full_name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 15 })
  phone: string;

  @ManyToOne(() => Client, { onDelete: "CASCADE" })
  client: string;

  @CreateDateColumn()
  created_at: Date;
}
