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

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 15, unique: true })
  phone: string;

  @ManyToOne(() => Client, { onDelete: "CASCADE" })
  client: Client;

  @CreateDateColumn()
  created_at: Date;
}
