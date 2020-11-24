import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
	constructor(private readonly coursesService: CoursesService) {}

	@Post()
	create(@Body() createCourseDto: CreateCourseDto) {
		return this.coursesService.create(createCourseDto);
	}

	@Get()
	findAll() {
		return this.coursesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.coursesService.findOne(+id);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.coursesService.remove(+id);
	}
}
