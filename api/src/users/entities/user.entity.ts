import { Exclude } from 'class-transformer';
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn()
	public id?: number;

	@Column({ unique: true })
	public email: string;

	@Column()
	@Exclude()
	public password: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
