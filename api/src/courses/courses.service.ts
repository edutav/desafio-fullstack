import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
	constructor(
		@InjectRepository(Course)
		private courseRepository: Repository<Course>,
	) {}

	async create(createCourseDto: CreateCourseDto) {
		try {
			const course = this.courseRepository.create(createCourseDto);
			await this.courseRepository.save(course);
			const message = 'Curso registrado com sucesso.';
			return { meesage: message };
		} catch (error) {
			throw new HttpException(
				'Something went wrong',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	findAll() {
		return this.courseRepository.find();
	}

	async findOne(id: number) {
		const course = await this.courseRepository.findOne({ id });
		if (course) {
			return course;
		}
		throw new HttpException(
			'Não existe Curso com este id',
			HttpStatus.NOT_FOUND,
		);
	}

	async remove(id: number) {
		const deletedResponse = await this.courseRepository.delete(id);
		if (!deletedResponse.affected) {
			throw new HttpException('Curso não encontrado', HttpStatus.NOT_FOUND);
		}
	}
}
