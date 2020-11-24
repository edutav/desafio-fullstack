import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'courses' })
export class Course {
	@PrimaryGeneratedColumn()
	public id?: number;

	@Column({ unique: true })
	public nome: string;

	@Column()
	public professor: string;

	@Column()
	public sala: string;

	@Column({ name: 'hora_inicio' })
	public horaInicio: string;

	@Column({ name: 'hora_fim' })
	public horaFim: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
