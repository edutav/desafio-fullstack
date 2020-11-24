import { Request } from 'express-serve-static-core';
import { User } from 'src/users/entities/user.entity';

interface RequestWithUser extends Request {
	user: User;
}

export default RequestWithUser;
