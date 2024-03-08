import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EventType, UserEvent as CommonUserEvent } from "@tiny-track/common"; // Rename the import

@Entity()
export class UserEvent {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text" })
  type!: EventType;

  @Column()
  timestamp!: Date;

  @Column()
  url!: string;

  @Column({ nullable: true })
  elementType?: string;

  @Column({ nullable: true })
  elementId?: string;

  @Column({ nullable: true })
  elementClass?: string;

  @Column({ nullable: true })
  maxScrollDepth?: number;

  @Column({ nullable: true })
  duration?: number;
}
